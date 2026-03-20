$projectPath = Split-Path -Parent $PSScriptRoot
$directorAgent = "01-team-director" -replace '^\d+-', ''

openclaw agent --agent $directorAgent --message @"
เริ่มโปรเจกต์ที่ $projectPath

ให้อ่านไฟล์:
- $projectPath/config/db_config.json
- $projectPath/tasks/queue.json
- $projectPath/state/project_status.json
- $projectPath/state/phase_status.json
- $projectPath/state/dashboard_schema.json
- $projectPath/docs/AGENTS.md
- $projectPath/docs/MASTER_PROMPT.md

ให้ทำงานต่อเนื่องตาม queue ทีละ phase
เรียก agent ตามที่กำหนด
สร้างผลลัพธ์ใน $projectPath/outputs
อัปเดต state ทุกครั้ง
ทำต่อจนจบทุก phase โดยไม่ต้องรอคำสั่งเพิ่ม
"@
