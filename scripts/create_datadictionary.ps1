$projectPath = (Split-Path -Parent $PSScriptRoot).Replace('\', '/')

openclaw agent --agent 01-team-director --message @"
เริ่มโปรเจกต์ที่ $projectPath

เป้าหมาย: ฐานข้อมูลนี้ไม่มี Data Dictionary ให้ดำเนินการดังนี้:

1. สำรวจ Database: 
   - อ่านไฟล์ $projectPath/state/dashboard_schema.json หรือโครงสร้าง DB ที่ตรวจพบ
2. สร้าง Data Dictionary:
   - วิเคราะห์ชื่อ Table และ Column (รวมถึง Data Type/Keys)
   - เขียนคำอธิบาย (Description) ของแต่ละ Table และ Field โดยวิเคราะห์จากบริบทของโปรเจกต์
3. อัปเดตไฟล์:
   - สร้างไฟล์ใหม่ชื่อ $projectPath/docs/DATA_DICTIONARY.md 
   - จัดรูปแบบเป็น Markdown Table (Table Name, Column, Type, Key, Description)
4. อัปเดต State:
   - บันทึกความคืบหน้าลงใน $projectPath/state/project_status.json เมื่อทำเสร็จ

ให้เริ่มจาก Phase การอ่าน Schema และห้ามข้ามขั้นตอนการเขียนไฟล์เอกสาร
"@