$projectPath = Split-Path -Parent $PSScriptRoot
$directorAgent = "01-team-director" -replace '^\d+-', ''

openclaw agent --agent $directorAgent --message @"
เปิดโปรเจกต์ที่ $projectPath อีกครั้ง

ให้อ่านไฟล์ queue และ state ปัจจุบัน
ถ้ามี phase ที่ FAILED หรือ RETRYING ให้ลองทำต่อจากจุดนั้น
อย่าเริ่มใหม่ทั้งหมด
อัปเดต state และ outputs ตามจริง
"@
