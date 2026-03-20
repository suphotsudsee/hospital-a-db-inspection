โปรเจกต์นี้คือระบบตรวจสอบโครงสร้างฐานข้อมูลโรงพยาบาลเดียวแบบ production

เป้าหมาย:
- ตรวจการเชื่อมต่อฐานข้อมูล
- ดึง schema ทั้งหมด
- จัดกลุ่มตารางตามโมดูล
- วิเคราะห์ relationship
- ตรวจ index gaps
- สร้างรายงานสรุป
- อัปเดต dashboard progress

ข้อกำหนด:
- ใช้ไฟล์ config/db_config.json
- ใช้ tasks/queue.json เป็นตัวกำหนดลำดับงาน
- บันทึกผลลง outputs/
- อัปเดต state/*.json ทุก phase
- แยก observed / inferred / recommendation

รูปแบบ output ที่คาดหวัง:
- outputs/connection_status.json
- outputs/schema_inventory.json
- outputs/schema_inventory.md
- outputs/module_map.json
- outputs/module_summary.md
- outputs/relationship_map.json
- outputs/relationship_map.md
- outputs/index_gap_report.md
- outputs/recommended_indexes.sql
- outputs/executive_summary.md
- outputs/final_recommendation.md
- outputs/anomalies.json
- outputs/qa_review.md
- outputs/release_summary.md
