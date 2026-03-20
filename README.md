# hospital-a-db-inspection
# Hospital DB Dashboard

## Overview

โปรเจกต์ Dashboard สำหรับแสดงข้อมูลจากการตรวจสอบฐานข้อมูลโรงพยาบาล (Hospital Database Inspection Dashboard)

แอปพลิเคชันนี้ให้การแสดงภาพและวิเคราะห์ข้อมูลฐานข้อมูล MariaDB/MySQL ของโรงพยาบาล รวมถึง:
- ภาพรวมสถิติฐานข้อมูล (จำนวน tables, rows, sizes)
- การจัดกลุ่ม tables ตาม module
- การตรวจจับ anomalies และปัญหาที่อาจเกิดขึ้น
- คำแนะนำการเพิ่ม index เพื่อปรับปรุงประสิทธิภาพ
- รายละเอียดของแต่ละ table

## Features

| Feature | Description |
|---------|-------------|
| **Database Overview** | ภาพรวมสถิติฐานข้อมูล, Health Score, และการกระจายของข้อมูล |
| **Module Explorer** | สำรวจ tables ที่จัดกลุ่มตามหน้าที่ (patient, opd, ipd, pharmacy, etc.) |
| **Anomaly Dashboard** | แสดงปัญหาที่ตรวจพบ เช่น tables ที่ไม่มี primary key, missing indexes |
| **Index Recommendations** | คำแนะนำการเพิ่ม index เพื่อปรับปรุงประสิทธิภาพ |
| **Table Details** | รายละเอียดครบถ้วนของแต่ละ table (columns, indexes, anomalies) |
| **Search** | ค้นหา tables และ modules ได้อย่างรวดเร็ว |

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.x | React framework with App Router |
| **React** | 18.x | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.4.x | Styling |
| **Recharts** | 2.15.x | Charts and visualizations |
| **Lucide React** | - | Icons |

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run type check
npm run type-check

# Run linting
npm run lint
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

## Project Structure

```
hospital-db-dashboard/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home - Database Overview
│   ├── globals.css                   # Global styles
│   │
│   ├── modules/                      # Module Explorer
│   │   ├── page.tsx                  # Module list
│   │   └── [name]/page.tsx           # Module detail
│   │
│   ├── anomalies/                    # Anomaly Dashboard
│   │   ├── page.tsx                  # Anomaly overview
│   │   └── [category]/page.tsx       # Category detail
│   │
│   ├── indexes/recommendations/      # Index Recommendations
│   │   └── page.tsx
│   │
│   ├── tables/[name]/page.tsx        # Table Details
│   │
│   └── search/page.tsx               # Search
│
├── components/                        # React components
│   ├── ui/                           # Base UI components
│   ├── layout/                       # Layout components
│   ├── charts/                       # Chart components
│   ├── tables/                       # Table display components
│   ├── anomalies/                    # Anomaly components
│   └── overview/                     # Overview components
│
├── lib/                               # Utility libraries
│   ├── data-loader.ts                # Load static JSON files
│   ├── formatters.ts                 # Number/date formatters
│   └── utils.ts                      # General utilities
│
├── types/                             # TypeScript types
│
├── public/                            # Static assets
│
└── outputs/                           # Data files (symlinked)
    ├── dashboard_schema.json
    ├── connection_status.json
    ├── schema_inventory.json
    ├── module_map.json
    ├── anomalies.json
    └── index_analysis.json
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/overview` | GET | Database overview and statistics |
| `/api/modules` | GET | List all modules |
| `/api/modules/:name` | GET | Module details by name |
| `/api/anomalies` | GET | Anomaly summary |
| `/api/anomalies/:category` | GET | Anomaly details by category |
| `/api/indexes/recommendations` | GET | Index recommendations |
| `/api/tables` | GET | Paginated tables list |
| `/api/tables/:name` | GET | Table details by name |
| `/api/search?q=...` | GET | Search tables and modules |

ดูรายละเอียด API ทั้งหมดได้ที่ [docs/API.md](docs/API.md)

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Database Overview | ภาพรวมฐานข้อมูล, Health Score, สถิติ |
| `/modules` | Module Explorer | รายการ modules ทั้งหมด |
| `/modules/:name` | Module Detail | รายละเอียด module และ tables |
| `/anomalies` | Anomaly Dashboard | ภาพรวม anomalies |
| `/anomalies/:category` | Category Detail | รายละเอียด anomaly category |
| `/indexes/recommendations` | Index Recommendations | คำแนะนำ index |
| `/tables/:name` | Table Detail | รายละเอียด table |
| `/search?q=...` | Search | ค้นหา tables/modules |

## Development

ดูคำแนะนำการพัฒนาเพิ่มเติมได้ที่ [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)

### Prerequisites

- Node.js 18.x หรือใหม่กว่า
- npm หรือ yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd hospital-db-dashboard

# Install dependencies
npm install

# Create data symlink (if needed)
# The app expects data files in ../outputs/
ln -s /path/to/data/outputs ../outputs
```

### Environment Variables

สร้างไฟล์ `.env.local`:

```env
# Optional: Live database connection (future feature)
DB_HOST=localhost
DB_PORT=3306
DB_USER=readonly
DB_PASSWORD=your_password
DB_NAME=hidb10949

# Cache settings
CACHE_TTL=3600
ISR_REVALIDATE=3600
```

ดูคำแนะนำการตั้งค่าเพิ่มเติมได้ที่ [docs/SETUP.md](docs/SETUP.md)

## Data Source

Dashboard ใช้ข้อมูลจากไฟล์ JSON ที่สร้างโดย Python scripts:

| File | Description |
|------|-------------|
| `dashboard_schema.json` | Database overview schema |
| `connection_status.json` | Connection test results |
| `schema_inventory.json` | All tables information |
| `module_map.json` | Module classifications |
| `anomalies.json` | Detected anomalies |
| `index_analysis.json` | Index recommendations |

ไฟล์เหล่านี้ควรอยู่ในโฟลเดอร์ `../outputs/` หรือกำหนด path ใน `lib/data-loader.ts`

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Static Data Files                        │
│   (dashboard_schema.json, anomalies.json, etc.)             │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    lib/data-loader.ts                       │
│                    (Load & cache JSON)                      │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                     API Routes                               │
│   /api/overview, /api/modules, /api/anomalies, etc.        │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                Next.js App Router Pages                     │
│   (Server Components + Client Components)                   │
└─────────────────────────────────────────────────────────────┘
```

## Performance

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Bundle Size (Initial) | < 200KB |
| API Response Time | < 100ms |
| Lighthouse Score | > 90 |

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For issues or questions, please contact the development team.

---

**Database**: hidb10949 (MariaDB)  
**Tables**: 847  
**Total Rows**: ~125 million  
**Last Updated**: 2026-03-20