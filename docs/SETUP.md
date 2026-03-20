# Setup & Installation Guide

## Prerequisites

### Required Software

| Software | Version | Purpose |
|----------|---------|---------|
| **Node.js** | 18.x or higher | JavaScript runtime |
| **npm** | 9.x or higher | Package manager |
| **Git** | Latest | Version control |

### Optional (for live database connection)

| Software | Version | Purpose |
|----------|---------|---------|
| **MariaDB/MySQL** | 10.x+ | Database server |

### System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| RAM | 2 GB | 4 GB+ |
| Disk Space | 500 MB | 1 GB+ |
| CPU | 1 core | 2+ cores |

---

## Installation

### Step 1: Clone Repository

```bash
# Clone from Git
git clone <repository-url>
cd hospital-db-dashboard

# Or extract from archive
tar -xzf hospital-db-dashboard.tar.gz
cd hospital-db-dashboard
```

### Step 2: Install Dependencies

```bash
# Install Node.js dependencies
npm install

# Or with yarn
yarn install
```

### Step 3: Configure Data Source

#### Option A: Static JSON Files (Default)

Dashboard ใช้ข้อมูลจากไฟล์ JSON ที่สร้างโดย Python inspection scripts:

```bash
# Check data directory structure
ls -la outputs/

# Expected files:
# - dashboard_schema.json
# - connection_status.json
# - schema_inventory.json
# - module_map.json
# - anomalies.json
# - index_analysis.json
```

If data files are in a different location, create a symlink:

```bash
# Create symlink to data directory
ln -s /path/to/inspection/outputs outputs
```

Or modify `lib/data-loader.ts`:

```typescript
// Change DATA_DIR path
const DATA_DIR = path.join(process.cwd(), '/path/to/your/data');
```

#### Option B: Live Database Connection (Future Feature)

For real-time database queries, configure database connection:

```bash
# Copy environment template
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Database Connection
DB_HOST=localhost
DB_PORT=3306
DB_USER=readonly_user
DB_PASSWORD=your_secure_password
DB_NAME=hidb10949

# Connection Pool
DB_CONNECTION_LIMIT=10
DB_QUEUE_LIMIT=0
DB_WAIT_FOR_CONNECTIONS=true

# Cache Settings
CACHE_TTL=3600
ISR_REVALIDATE=3600
```

**Security Notes:**
- Use a **read-only** database user
- Never expose database credentials in client-side code
- Use environment variables for sensitive data
- Restrict database user permissions to SELECT only

### Step 4: Verify Installation

```bash
# Type check
npm run type-check

# Lint check
npm run lint

# Build check
npm run build
```

---

## Configuration

### Environment Variables

Create `.env.local` in project root:

```env
# ===========================================
# Application Settings
# ===========================================
NODE_ENV=development

# ===========================================
# Database Connection (Optional - Live Mode)
# ===========================================
DB_HOST=localhost
DB_PORT=3306
DB_USER=readonly
DB_PASSWORD=your_password
DB_NAME=hidb10949

# Connection Pool Settings
DB_CONNECTION_LIMIT=10
DB_QUEUE_LIMIT=0
DB_WAIT_FOR_CONNECTIONS=true

# ===========================================
# Cache Settings
# ===========================================
# Cache TTL in milliseconds (default: 1 hour)
CACHE_TTL=3600000

# ISR revalidation in seconds (default: 1 hour)
ISR_REVALIDATE=3600

# ===========================================
# Feature Flags
# ===========================================
ENABLE_LIVE_DATABASE=false
ENABLE_WEBSOCKET=false
ENABLE_EXPORT=false

# ===========================================
# Rate Limiting
# ===========================================
RATE_LIMIT_PER_MINUTE=100
RATE_LIMIT_BURST=20
```

### Next.js Configuration

`next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment without Node.js
  output: 'standalone',
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['recharts', 'lucide-react'],
  },
  
  // Compression
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### Tailwind Configuration

`tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... custom colors
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### TypeScript Configuration

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "ES2020"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Running the Application

### Development Mode

```bash
# Start development server with hot reload
npm run dev

# Server runs at http://localhost:3000
```

Development features:
- Hot Module Replacement (HMR)
- Fast Refresh
- Detailed error messages
- Source maps enabled

### Production Mode

```bash
# Build for production
npm run build

# Start production server
npm start

# Or with custom port
PORT=3001 npm start
```

### Static Export (for CDN deployment)

```bash
# Build static site
npm run build

# Export to /out directory
npm run export

# Deploy /out to any static hosting
```

---

## Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Option 2: Docker

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
# Build and run
docker build -t hospital-dashboard .
docker run -p 3000:3000 hospital-dashboard
```

### Option 3: PM2 (Process Manager)

```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "hospital-dashboard" -- start

# Save configuration
pm2 save

# Auto-start on boot
pm2 startup
```

### Option 4: Nginx Reverse Proxy

```nginx
# /etc/nginx/sites-available/hospital-dashboard
server {
    listen 80;
    server_name dashboard.example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Data Files

### Required Files

| File | Required | Description |
|------|----------|-------------|
| `dashboard_schema.json` | ✅ | Database overview schema |
| `connection_status.json` | ✅ | Connection test results |
| `schema_inventory.json` | ✅ | All tables information |
| `module_map.json` | ✅ | Module classifications |
| `anomalies.json` | ✅ | Detected anomalies |
| `index_analysis.json` | ✅ | Index recommendations |

### File Locations

By default, data files are expected in:

```
../outputs/  (relative to project root)
```

This can be changed in `lib/data-loader.ts`:

```typescript
const DATA_DIR = path.join(process.cwd(), 'custom', 'data', 'path');
```

### Generating Data Files

If you need to regenerate data files:

```bash
# Run Python inspection scripts
cd /path/to/hospital-a-db-inspection
python scripts/generate_dashboard_schema.py
python scripts/generate_module_map.py
python scripts/analyze_anomalies.py
python scripts/analyze_indexes.py
```

---

## Troubleshooting

### Common Issues

#### 1. Module Not Found Error

```
Error: Cannot find module '../outputs/dashboard_schema.json'
```

**Solution**: Ensure data files exist in the correct location:
```bash
ls -la ../outputs/
# Or create symlink
ln -s /path/to/outputs outputs
```

#### 2. Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution**: Kill the process or use a different port:
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 npm run dev
```

#### 3. TypeScript Errors

```
Type error: Property 'xxx' does not exist on type 'yyy'
```

**Solution**: Run type check and fix issues:
```bash
npm run type-check
```

#### 4. Build Memory Error

```
FATAL ERROR: Ineffective mark-compacts near heap limit
```

**Solution**: Increase Node.js memory limit:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

#### 5. CSS Not Loading

**Solution**: Check Tailwind CSS configuration:
```bash
# Rebuild Tailwind
npm run dev
# Clear cache
rm -rf .next
npm run dev
```

### Logs and Debugging

```bash
# Enable debug logging
DEBUG=* npm run dev

# Check Next.js build logs
npm run build 2>&1 | tee build.log

# Check data loader cache
curl http://localhost:3000/api/overview | jq '.meta'
```

---

## Health Check

```bash
# Application health
curl http://localhost:3000/api/overview

# Expected response
{
  "success": true,
  "data": {...},
  "meta": {
    "cached": false,
    "generatedAt": "...",
    "source": "static"
  }
}
```

---

## Security Checklist

- [ ] Environment files (`.env.local`) are in `.gitignore`
- [ ] Database user has read-only permissions
- [ ] CORS configured for specific domains only
- [ ] Rate limiting enabled
- [ ] Security headers configured
- [ ] No sensitive data in client-side code
- [ ] Dependencies are up-to-date (`npm audit`)
- [ ] TypeScript strict mode enabled

---

## Next Steps

After successful setup:

1. Review the [API Documentation](API.md)
2. Read the [Development Guide](DEVELOPMENT.md)
3. Explore the dashboard at http://localhost:3000
4. Customize components for your needs

For issues or questions, contact the development team.