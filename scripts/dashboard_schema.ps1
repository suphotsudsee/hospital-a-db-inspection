$projectPath = Split-Path -Parent $PSScriptRoot
$directorAgent = "01-team-director" -replace '^\d+-', ''

openclaw agent --agent $directorAgent --message @"

เริ่มโปรเจกต์ที่ $projectPath

ภารกิจ: เพิ่ม Data Dictionary เข้าสู่ระบบ Dashboard

1. วิเคราะห์โครงสร้าง:
   - อ่านไฟล์ $projectPath/state/dashboard_schema.json เพื่อดูรายการ Table และ Column ที่ Dashboard ใช้งานอยู่
2. สร้างคำอธิบาย (Data Dictionary):
   - สำหรับแต่ละ Field ใน Dashboard ให้สร้าง 'description' และ 'display_name' (ภาษาไทย)
   - หากเป็นข้อมูลมาตรฐานสาธารณสุข ให้ใช้คำนิยามตามมาตรฐานกระทรวงฯ
3. อัปเดตไฟล์ Schema:
   - เขียนข้อมูลที่วิเคราะห์ได้กลับลงไปใน $projectPath/state/dashboard_schema.json 
   - โดยเพิ่ม Property "description": "..." และ "label": "..." ในทุกๆ field
4. สร้างเอกสารอ้างอิง:
   - อัปเดต $projectPath/docs/DATA_DICTIONARY.md ให้ตรงกับ Schema ล่าสุด
5. รายงานผล:
   - สรุปจำนวน Table และ Field ที่อัปเดตแล้วผ่าน Telegram

เริ่มดำเนินการทันทีตามลำดับขั้นตอน
"@