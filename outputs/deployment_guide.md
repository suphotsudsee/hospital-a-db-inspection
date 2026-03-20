# Deployment Guide

Hospital DB Dashboard v1.0.0 - Production Deployment Guide

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Deploy](#quick-deploy)
3. [Production Deployment](#production-deployment)
4. [Environment Variables](#environment-variables)
5. [Post-Deployment Checklist](#post-deployment-checklist)
6. [Monitoring & Logging](#monitoring--logging)
7. [Backup & Recovery](#backup--recovery)
8. [Rollback Procedure](#rollback-procedure)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| CPU | 1 core | 2+ cores |
| RAM | 512MB | 1GB+ |
| Disk | 500MB | 1GB+ |
| Node.js | 18.x | 20.x+ |
| npm/yarn | 8.x+ | Latest |

### Software Dependencies

```bash
# Required
- Node.js 18.x or higher
- npm 8.x+ or yarn 1.22+

# Optional (for database connection)
- MariaDB/MySQL client libraries

# Optional (for production)
- PM2 (process manager)
- Nginx (reverse proxy)
- Certbot (SSL certificates)
```

### Data Files

Ensure the following JSON files are available in `outputs/`:

| File | Required | Description |
|------|----------|-------------|
| `dashboard_schema.json` | Yes | Database overview |
| `connection_status.json` | Yes | Connection status |
| `schema_inventory.json` | Yes | All tables data |
| `module_map.json` | Yes | Module classifications |
| `anomalies.json` | Yes | Detected anomalies |
| `index_analysis.json` | Yes | Index recommendations |

---

## Quick Deploy

### Option 1: Vercel (Recommended for Demo)

**Best for**: Quick deployment, zero infrastructure management

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Environment variables can be set in Vercel dashboard:
# Project Settings → Environment Variables
```

**Advantages**:
- Zero configuration
- Automatic HTTPS
- Global CDN
- Automatic builds on push

**Limitations**:
- Serverless functions have execution time limits
- Cold starts possible
- File system is read-only (data must be bundled)

---

### Option 2: Docker (Recommended for Containers)

**Best for**: Consistent environments, microservices, cloud platforms

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Set to production
ENV NODE_ENV=production

# Copy built application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

# Install production dependencies only
RUN npm install --production

# Expose port
EXPOSE 3000

# Start server
CMD ["npm", "start"]
```

```bash
# Build image
docker build -t hospital-dashboard:v1.0.0 .

# Run container
docker run -d \
  --name hospital-dashboard \
  -p 3000:3000 \
  -v /path/to/outputs:/app/outputs:ro \
  hospital-dashboard:v1.0.0

# Check logs
docker logs -f hospital-dashboard

# Stop container
docker stop hospital-dashboard

# Remove container
docker rm hospital-dashboard
```

**Docker Compose** (for complex setups):

```yaml
# docker-compose.yml
version: '3.8'

services:
  dashboard:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./outputs:/app/outputs:ro
    environment:
      - NODE_ENV=production
      - CACHE_TTL=3600
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://localhost:3000/api/overview"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

---

### Option 3: PM2 + Nginx (Recommended for Production VPS)

**Best for**: Traditional servers, full control, cost-effective

#### Step 1: Prepare the Server

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Install Certbot for SSL
sudo apt install -y certbot python3-certbot-nginx
```

#### Step 2: Deploy Application

```bash
# Clone or copy project
git clone <repository-url> /var/www/hospital-dashboard
cd /var/www/hospital-dashboard

# Install dependencies
npm ci --production

# Build application
npm run build

# Create data directory if not exists
mkdir -p outputs

# Link outputs from data source (if external)
# ln -s /path/to/data/outputs outputs
```

#### Step 3: Configure PM2

```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'hospital-dashboard',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/hospital-dashboard',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/hospital-dashboard/error.log',
    out_file: '/var/log/hospital-dashboard/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
};
```

```bash
# Create log directory
sudo mkdir -p /var/log/hospital-dashboard
sudo chown -R $USER:$USER /var/log/hospital-dashboard

# Start with PM2
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup systemd
# Follow the command it outputs

# Check status
pm2 status
pm2 logs hospital-dashboard
```

#### Step 4: Configure Nginx

```nginx
# /etc/nginx/sites-available/hospital-dashboard

server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com www.your-domain.com;

    # SSL certificates (will be configured by Certbot)
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10d;
    ssl_session_timeout 1d;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self';" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml;

    # Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }

    # Static files caching
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache static_cache;
        proxy_cache_valid 200 365d;
        proxy_cache_key $uri;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # API caching
    location /api {
        proxy_pass http://localhost:3000;
        proxy_cache api_cache;
        proxy_cache_valid 200 1h;
        proxy_cache_key $uri$is_args$args;
        add_header X-Cache-Status $upstream_cache_status;
    }
}

# Cache zones (add to /etc/nginx/nginx.conf http block)
proxy_cache_path /var/cache/nginx/static levels=1:2 keys_zone=static_cache:10m max_size=100m inactive=365d;
proxy_cache_path /var/cache/nginx/api levels=1:2 keys_zone=api_cache:10m max_size=50m inactive=1h;
```

```bash
# Create cache directory
sudo mkdir -p /var/cache/nginx
sudo chown -R www-data:www-data /var/cache/nginx

# Enable site
sudo ln -s /etc/nginx/sites-available/hospital-dashboard /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

#### Step 5: SSL Certificate with Certbot

```bash
# Obtain SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Test automatic renewal
sudo certbot renew --dry-run

# Certbot will automatically add SSL configuration to Nginx
```

#### Step 6: Firewall Configuration

```bash
# Enable firewall
sudo ufw enable

# Allow SSH
sudo ufw allow ssh

# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'

# Check status
sudo ufw status
```

---

### Option 4: Cloud Platforms

#### AWS EC2

```bash
# Launch EC2 instance (t3.medium recommended)
# Use Amazon Linux 2 or Ubuntu 20.04+

# Connect and follow Option 3 steps

# Additional: AWS-specific setup
# - Configure security groups (allow ports 22, 80, 443)
# - Use Elastic IP for stable public IP
# - Consider ALB for SSL termination
```

#### Google Cloud Platform

```bash
# Using Google Cloud Run
gcloud run deploy hospital-dashboard \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

# Using Google Compute Engine
# Follow Option 3 steps on GCE instance
```

#### Azure App Service

```yaml
# azuredeploy.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hospital-dashboard
spec:
  replicas: 2
  selector:
    matchLabels:
      app: hospital-dashboard
  template:
    metadata:
      labels:
        app: hospital-dashboard
    spec:
      containers:
      - name: hospital-dashboard
        image: your-registry/hospital-dashboard:v1.0.0
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: production
```

---

## Environment Variables

### Required

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `NODE_ENV` | Environment mode | `development` | `production` |

### Optional

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `PORT` | Server port | `3000` | `3000` |
| `DATABASE_URL` | MariaDB connection string | - | `mysql://user:pass@host:3306/db` |
| `DB_HOST` | Database host | `localhost` | `db.hospital.local` |
| `DB_PORT` | Database port | `3306` | `3306` |
| `DB_USER` | Database user | - | `readonly` |
| `DB_PASSWORD` | Database password | - | `secret` |
| `DB_NAME` | Database name | `hidb10949` | `hospital_db` |
| `CACHE_TTL` | Cache TTL in seconds | `3600` | `3600` |
| `ISR_REVALIDATE` | ISR revalidation period | `3600` | `3600` |

### Environment Files

```bash
# .env.local (development)
NODE_ENV=development
PORT=3000

# .env.production (production)
NODE_ENV=production
PORT=3000
CACHE_TTL=3600
ISR_REVALIDATE=3600

# .env (shared defaults)
DB_HOST=localhost
DB_PORT=3306
DB_NAME=hidb10949
```

---

## Post-Deployment Checklist

### Immediate Checks

- [ ] **Application starts without errors**
  ```bash
  pm2 logs hospital-dashboard --lines 50
  ```

- [ ] **All API endpoints respond correctly**
  ```bash
  curl https://your-domain.com/api/overview
  curl https://your-domain.com/api/modules
  curl https://your-domain.com/api/anomalies
  ```

- [ ] **Homepage loads correctly**
  ```bash
  curl -I https://your-domain.com
  ```

- [ ] **Static assets load (CSS, JS)**
  ```bash
  curl -I https://your-domain.com/_next/static/...
  ```

- [ ] **SSL certificate is valid**
  ```bash
  curl -vI https://your-domain.com 2>&1 | grep -E "(SSL|TLS|certificate)"
  ```

### Functional Tests

- [ ] **Database Overview page loads**
- [ ] **Module Explorer displays all modules**
- [ ] **Module detail pages work**
- [ ] **Anomaly Dashboard shows correct counts**
- [ ] **Index Recommendations display properly**
- [ ] **Table details pages render**
- [ ] **Search functionality works**
- [ ] **Responsive design on mobile devices**

### Performance Checks

- [ ] **Page load time < 3 seconds**
  ```bash
  # Using curl
  curl -w "Time: %{time_total}s\n" -o /dev/null -s https://your-domain.com
  ```

- [ ] **API response time < 100ms**
  ```bash
  curl -w "Time: %{time_total}s\n" -o /dev/null -s https://your-domain.com/api/overview
  ```

- [ ] **Memory usage is stable**
  ```bash
  pm2 monit
  ```

### Security Checks

- [ ] **HTTPS redirects work**
- [ ] **Security headers are present**
  ```bash
  curl -I https://your-domain.com | grep -E "(X-Frame|X-Content|X-XSS)"
  ```
- [ ] **No sensitive data in responses**
- [ ] **Error messages don't expose internals**

---

## Monitoring & Logging

### Application Logs

```bash
# PM2 logs
pm2 logs hospital-dashboard

# Follow logs in real-time
pm2 logs hospital-dashboard --lines 100

# Clear logs
pm2 flush hospital-dashboard

# Log files location
/var/log/hospital-dashboard/error.log
/var/log/hospital-dashboard/out.log
```

### Nginx Logs

```bash
# Access logs
tail -f /var/log/nginx/access.log

# Error logs
tail -f /var/log/nginx/error.log
```

### PM2 Monitoring

```bash
# Real-time monitoring
pm2 monit

# Process status
pm2 status

# Detailed info
pm2 show hospital-dashboard

# Memory and CPU usage
pm2 list
```

### Health Check Script

```bash
#!/bin/bash
# health-check.sh

URL="https://your-domain.com/api/overview"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" $URL)

if [ "$RESPONSE" -eq 200 ]; then
    echo "✅ Health check passed: $RESPONSE"
    exit 0
else
    echo "❌ Health check failed: $RESPONSE"
    # Send alert (email, Slack, etc.)
    exit 1
fi
```

```bash
# Add to crontab for periodic checks
crontab -e

# Check every 5 minutes
*/5 * * * * /var/www/hospital-dashboard/scripts/health-check.sh
```

---

## Backup & Recovery

### Backup Strategy

```bash
#!/bin/bash
# backup.sh - Run daily

BACKUP_DIR="/var/backups/hospital-dashboard"
DATE=$(date +%Y%m%d)
SOURCE_DIR="/var/www/hospital-dashboard"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup application files
tar -czf $BACKUP_DIR/app-$DATE.tar.gz \
    -C $SOURCE_DIR \
    --exclude='node_modules' \
    --exclude='.next/cache' \
    .

# Backup data files
tar -czf $BACKUP_DIR/data-$DATE.tar.gz \
    -C $SOURCE_DIR/outputs \
    .

# Keep only last 7 days
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: $DATE"
```

### Recovery Procedure

```bash
# Stop application
pm2 stop hospital-dashboard

# Restore from backup
cd /var/www/hospital-dashboard
tar -xzf /var/backups/hospital-dashboard/app-20260320.tar.gz

# Reinstall dependencies (if needed)
npm ci --production

# Start application
pm2 start hospital-dashboard
```

---

## Rollback Procedure

### Quick Rollback

```bash
# If deployment fails, rollback to previous version

# 1. Stop current version
pm2 stop hospital-dashboard

# 2. Switch to previous version
cd /var/www/hospital-dashboard
git checkout v1.0.0  # or previous commit hash

# 3. Reinstall and rebuild
npm ci --production
npm run build

# 4. Restart
pm2 restart hospital-dashboard

# 5. Verify
curl https://your-domain.com/api/overview
```

### Using Git Tags

```bash
# Before deployment, always create a tag
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0

# To rollback
git checkout v1.0.0
npm ci --production
npm run build
pm2 restart hospital-dashboard
```

### Rollback Decision Tree

```
Deployment Failed
├── Build Failed
│   └── Check error logs → Fix code → Redeploy
├── Tests Failed
│   └── Review test output → Fix issues → Redeploy
├── Runtime Errors
│   ├── Check PM2 logs
│   ├── Check application logs
│   └── If critical → Rollback immediately
└── Performance Issues
    ├── Monitor for 15 minutes
    ├── If persists → Rollback
    └── If improving → Continue monitoring
```

---

## Troubleshooting

### Common Issues

#### Application Won't Start

```bash
# Check Node.js version
node --version  # Should be 18+

# Check logs
pm2 logs hospital-dashboard --err

# Common fixes
# 1. Clear Next.js cache
rm -rf .next
npm run build

# 2. Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# 3. Check port availability
lsof -i :3000
```

#### High Memory Usage

```bash
# Check memory
pm2 show hospital-dashboard

# Set memory limit
pm2 start ecosystem.config.js --max-memory-restart 1G

# Or in ecosystem.config.js:
# max_memory_restart: '1G'
```

#### API Returns 404

```bash
# Check if API routes exist
ls -la app/api/

# Check Next.js configuration
cat next.config.js

# Verify dynamic routes
ls -la app/api/modules/\[name\]/
```

#### Data Files Not Found

```bash
# Check outputs directory
ls -la outputs/

# Create symlink if needed
ln -s /path/to/data/outputs outputs

# Check file permissions
chmod 644 outputs/*.json
```

#### SSL Certificate Issues

```bash
# Renew certificate
sudo certbot renew

# Check certificate status
sudo certbot certificates

# Force renewal
sudo certbot renew --force-renewal
```

#### Nginx Proxy Errors

```bash
# Test configuration
sudo nginx -t

# Check error logs
tail -f /var/log/nginx/error.log

# Common fix: increase timeout
# In nginx config:
# proxy_read_timeout 86400s;
```

---

## Performance Tuning

### Next.js Optimizations

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable production mode
  productionBrowserSourceMaps: false,
  
  // Optimize images
  images: {
    unoptimized: false,
  },
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['recharts', 'lucide-react'],
  },
  
  // Compress responses
  compress: true,
  
  // Power by header (security)
  poweredByHeader: false,
}

module.exports = nextConfig
```

### PM2 Cluster Mode

```javascript
// ecosystem.config.js - optimize for CPU cores
module.exports = {
  apps: [{
    name: 'hospital-dashboard',
    script: 'npm',
    args: 'start',
    instances: 'max',  // Use all CPU cores
    exec_mode: 'cluster',
    // ... rest of config
  }]
}
```

### Nginx Caching

```nginx
# Enable caching in nginx.conf
proxy_cache_path /var/cache/nginx/api levels=1:2 keys_zone=api_cache:10m max_size=50m;

# In server block
location /api {
    proxy_cache api_cache;
    proxy_cache_valid 200 1h;
    proxy_cache_key $uri$is_args$args;
    add_header X-Cache-Status $upstream_cache_status;
}
```

---

## Support Contacts

For deployment assistance, contact:
- **Technical Lead**: [Technical team contact]
- **DevOps Team**: [DevOps contact]
- **Emergency**: [Emergency contact]

---

*Deployment Guide v1.0.0 - Hospital DB Dashboard - 2026-03-20*