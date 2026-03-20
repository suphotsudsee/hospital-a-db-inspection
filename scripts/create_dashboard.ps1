$projectPath = Split-Path -Parent $PSScriptRoot
$routerAgent = "14-openclaw-router" -replace '^\d+-', ''

openclaw agent --agent $routerAgent --message @"
โปรเจกต์อยู่ที่ $projectPath

งานคือสร้าง Dashboard จริงแบบ Next.js + API สำหรับโครงการตรวจสอบโครงสร้างฐานข้อมูลโรงพยาบาลเดียว

ให้ route งานไปยัง:
- 02-task-planner
- 17-system-architect
- 13-dashboard-architect
- 04-sql-dba
- 05-data-engineer
- 06-backend-engineer
- 07-frontend-engineer
- 11-doc-writer
- 10-qa-reviewer
- 20-release-manager

ให้กำหนดลำดับงาน dependency handoff message และ output files ให้ครบ
"@
