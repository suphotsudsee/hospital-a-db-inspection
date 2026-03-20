# คำแนะนำการปรับปรุงฐานข้อมูล (Final Recommendations)

**วันที่สร้าง:** 2026-03-20 09:38:38  
**ฐานข้อมูล:** hidb10949

---

## 🎯 สรุปคำแนะนำ

| ประเภท | จำนวน | ระดับความเสี่ยง |
|--------|-------|----------------|
| Primary Keys ที่ต้องเพิ่ม | 242 | HIGH |
| Indexes ที่แนะนำ | 90 | MEDIUM |
| โมดูลที่ต้องตรวจสอบเพิ่มเติม | 3 | LOW |

---

## 🔴 HIGH Priority - ดำเนินการทันที

### 1. เพิ่ม Primary Keys

**เหตุผล:** ตารางที่ไม่มี Primary Key จะมีปัญหา:
- Performance ในการ query ช้าลง
- ไม่สามารถรับประกัน Data Integrity
- บาง Feature ของ MySQL ใช้ไม่ได้ (เช่น Replication)

**ตารางที่ต้องเพิ่ม Primary Key (เรียงตามขนาด):**

| `data_correct` | 8,437,993 แถว |
| `ovststatus` | 1,368,963 แถว |
| `deaDMn` | 493,488 แถว |
| `PTINFO` | 171,129 แถว |
| `foodsum` | 138,066 แถว |
| `mathhn` | 125,843 แถว |
| `inscl` | 120,004 แถว |
| `iptadm1` | 110,425 แถว |
| `PERSON` | 105,707 แถว |
| `l_drugs` | 82,329 แถว |
| `export21f` | 76,534 แถว |
| `Mrs_newSammary` | 76,378 แถว |
| `VR10949` | 55,730 แถว |
| `laborderrun` | 52,687 แถว |
| `l_tmtdrug` | 31,463 แถว |
| `l_tmtdrug1` | 25,104 แถว |
| `logvisit` | 18,981 แถว |
| `l_icd9cm-icd10tm` | 16,894 แถว |
| `hcode` | 14,920 แถว |
| `hospcodeolde` | 14,916 แถว |

**คำแนะนำ:** ดู SQL statements ในไฟล์ `recommended_indexes.sql`

---

## 🟡 MEDIUM Priority - วางแผนภายใน 30 วัน

### 2. เพิ่ม Indexes สำหรับ Performance

| ตาราง | Column | เหตุผล |
|-------|--------|--------|
| `accident` | `nameaccdnt` | Table has 29 rows but no primary key |
| `allgtype` | `allgtype` | Table has 4 rows but no primary key |
| `bhtri` | `an` | Table has 542 rows but no primary key |
| `BP` | `HN` | Table has 123 rows but no primary key |
| `ccd_appointment` | `hospcode` | Table has 0 rows but no primary key |
| `ccd_opd_visit` | `hospcode` | Table has 0 rows but no primary key |
| `ccd_opd_visit_diag` | `hospcode` | Table has 0 rows but no primary key |
| `ccd_opd_visit_diag_text` | `hospcode` | Table has 0 rows but no primary key |
| `ccd_opd_visit_procedure` | `hospcode` | Table has 0 rows but no primary key |
| `ccd_opd_visit_screen` | `hospcode` | Table has 0 rows but no primary key |
| `ccd_person` | `hospcode` | Table has 0 rows but no primary key |
| `checkcovid` | `hn` | Table has 0 rows but no primary key |
| `checkvaccine` | `vn` | Table has 0 rows but no primary key |
| `CHRONIC-hi` | `pcucode` | Table has 450 rows but no primary key |
| `CHRONICk` | `PCUCODE` | Table has 233 rows but no primary key |
| `CHRONICm` | `PCUCODE` | Table has 226 rows but no primary key |
| `ckd` | `visit_date` | Table has 0 rows but no primary key |
| `Claim_E` | `HN` | Table has 634 rows but no primary key |
| `Claim_HI` | `an` | Table has 656 rows but no primary key |
| `ctzshp` | `namectzshp` | Table has 92 rows but no primary key |
| `datahn` | `HN` | Table has 270 rows but no primary key |
| `datapit` | `HCODE` | Table has 5 rows but no primary key |
| `data_ini` | `data` | Table has 60 rows but no primary key |
| `dengue` | `visit_date` | Table has 0 rows but no primary key |
| `dengue_ny` | `visit_date` | Table has 0 rows but no primary key |
| `emp` | `DEPTNO` | Table has 13 rows but no primary key |
| `foodorder` | `an` | Table has 234 rows but no primary key |
| `ftdate` | `mini` | Table has 0 rows but no primary key |
| `generator_16` | `n` | Table has 0 rows but no primary key |
| `generator_256` | `n` | Table has 0 rows but no primary key |

### 3. จัดการ Implicit Relationships

พบ **720** implicit relationships ที่ควรเพิ่ม Foreign Key constraints:

**ตัวอย่าง:**

- `aipn_ccode.ccode` → อาจอ้างถึง: lmculture
- `aipn_checkcode.an` → อาจอ้างถึง: aipn_patient_, deldc, ipt
- `aipn_patient_.vn` → อาจอ้างถึง: chksitdrfee, chkuseopd, chronicfu
- `aipn_patient_.AN` → อาจอ้างถึง: aipn_checkcode, deldc, ipt
- `aipn_patient_.hn` → อาจอ้างถึง: bldalert, firstdm, firstht
- `anc.vn` → อาจอ้างถึง: chksitdrfee, chkuseopd, chronicfu
- `anc.rcptno` → อาจอ้างถึง: rcpt, rcpt_15.09.59
- `anes_co_dct.orno` → อาจอ้างถึง: ansno, operation, orblood
- `anes_dct.orno` → อาจอ้างถึง: ansno, operation, orblood
- `ans.orno` → อาจอ้างถึง: ansno, operation, orblood

---

## 🟢 LOW Priority - พิจารณาในระยะยาว

### 4. ปรับปรุงโครงสร้างโมดูล

**โมดูลที่มีตารางมาก (>50 ตาราง):**

- **other** (322 ตาราง) - อื่นๆ
- **patient** (130 ตาราง) - ข้อมูลผู้ป่วยและบุคคล
- **ipd** (72 ตาราง) - บริการผู้ป่วยใน

**คำแนะนำ:**
- พิจารณาแยกตาราง reference/master ออกจาก transaction tables
- ทบทวน naming convention
- ตรวจสอบ unused tables

### 5. ตาราง Orphan

พบ **847** ตารางที่ไม่มี relationship กับตารางอื่น:

- `BP`
- `CHRONIC-hi`
- `CHRONICk`
- `CHRONICm`
- `CMI`
- `Claim_E`
- `Claim_HI`
- `HNDM`
- `IP50new`
- `IP51new`
- `IP52new`
- `IP53new`
- `IP54new`
- `IPD50_1`
- `IPD51_1`
- `IPD52_1`
- `IPD53_1`
- `IPD54_1`
- `IPD56n`
- `Mrs_Center`
- ... และอีก 30 ตาราง

**คำแนะนำ:**
- ตรวจสอบว่ายังใช้อยู่หรือไม่
- พิจารณา archive หรือ drop ถ้าไม่ใช้

---

## 📝 แผนการดำเนินการแนะนำ

### Phase 1: Critical Fixes (สัปดาห์ที่ 1-2)
- [ ] เพิ่ม Primary Keys ให้ตารางที่มีข้อมูลมากกว่า 10,000 แถว
- [ ] ทดสอบใน Staging Environment
- [ ] Document การเปลี่ยนแปลง

### Phase 2: Performance Optimization (สัปดาห์ที่ 3-4)
- [ ] เพิ่ม Indexes ที่แนะนำ
- [ ] Benchmark queries ก่อน/หลัง
- [ ] Monitor performance

### Phase 3: Data Integrity (เดือนที่ 2)
- [ ] เพิ่ม Foreign Key constraints
- [ ] Validate data relationships
- [ ] Update application code

### Phase 4: Maintenance (ต่อเนื่อง)
- [ ] ตั้ง schedule ตรวจสอบ periodic
- [ ] Update documentation
- [ ] Train team members

---

## 📊 Success Metrics

| Metric | Before | After (Expected) |
|--------|--------|------------------|
| Tables without PK | 242 | 0 |
| Average Query Time | TBD | -50% |
| Index Coverage | 79.7% | 100% |
| Data Integrity Issues | Unknown | Reduced |


---

*เอกสารนี้ควรทบทวนโดย DBA และ Development Lead ก่อนดำเนินการ*
