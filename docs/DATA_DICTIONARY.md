# Data Dictionary
## ฐานข้อมูลโรงพยาบาล

**Database:** hidb10949  
**Server Version:** 10.11.16-MariaDB-ubu2404-log  
**Generated:** 2026-03-20 16:13:16  
**Total Tables:** 847

---

## 📋 สารบัญ

- [accident](#accident) (3 tables)
- [anc](#anc) (1 tables)
- [appointment](#appointment) (19 tables)
- [blood](#blood) (3 tables)
- [chronic](#chronic) (7 tables)
- [dental](#dental) (1 tables)
- [finance](#finance) (10 tables)
- [hr](#hr) (13 tables)
- [icd](#icd) (41 tables)
- [insurance](#insurance) (3 tables)
- [inventory](#inventory) (9 tables)
- [ipd](#ipd) (72 tables)
- [laboratory](#laboratory) (38 tables)
- [moph](#moph) (26 tables)
- [nutrition](#nutrition) (9 tables)
- [opd](#opd) (28 tables)
- [other](#other) (322 tables)
- [patient](#patient) (130 tables)
- [pharmacy](#pharmacy) (31 tables)
- [refer](#refer) (10 tables)
- [report](#report) (14 tables)
- [surgery](#surgery) (1 tables)
- [system](#system) (31 tables)
- [vaccination](#vaccination) (24 tables)
- [xray](#xray) (1 tables)

---


## accident

### acci

**คำอธิบาย:** อุบัติเหตุ

**จำนวนแถว:** 17

**Engine:** InnoDB

**Primary Key:** `id, codeacci`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameacci` | varchar(30) | ✗ | - | - |
| `codeacci` | int(2) | ✗ | PK | - |
| `m10` | int(4) | ✗ | - | - |
| `f10` | int(4) | ✗ | - | - |
| `dm10` | int(3) | ✗ | - | - |
| `df10` | int(3) | ✗ | - | - |
| `s10` | int(4) | ✗ | - | - |
| `m11` | int(4) | ✗ | - | - |
| `f11` | int(4) | ✗ | - | - |
| `dm11` | int(3) | ✗ | - | - |
| `df11` | int(3) | ✗ | - | - |
| `s11` | int(4) | ✗ | - | - |
| `m12` | int(4) | ✗ | - | - |
| `f12` | int(4) | ✗ | - | - |
| `dm12` | int(3) | ✗ | - | - |
| `df12` | int(3) | ✗ | - | - |
| `s12` | int(4) | ✗ | - | - |
| `m01` | int(4) | ✗ | - | - |
| `f01` | int(4) | ✗ | - | - |
| `dm01` | int(3) | ✗ | - | - |
| `df01` | int(3) | ✗ | - | - |
| `s01` | int(4) | ✗ | - | - |
| `m02` | int(4) | ✗ | - | - |
| `f02` | int(4) | ✗ | - | - |
| `dm02` | int(3) | ✗ | - | - |
| `df02` | int(3) | ✗ | - | - |
| `s02` | int(4) | ✗ | - | - |
| `m03` | int(4) | ✗ | - | - |
| `f03` | int(4) | ✗ | - | - |
| `dm03` | int(3) | ✗ | - | - |
| `df03` | int(3) | ✗ | - | - |
| `s03` | int(4) | ✗ | - | - |
| `m04` | int(4) | ✗ | - | - |
| `f04` | int(4) | ✗ | - | - |
| `dm04` | int(3) | ✗ | - | - |
| `df04` | int(3) | ✗ | - | - |
| `s04` | int(4) | ✗ | - | - |
| `m05` | int(4) | ✗ | - | - |
| `f05` | int(4) | ✗ | - | - |
| `dm05` | int(3) | ✗ | - | - |
| `df05` | int(3) | ✗ | - | - |
| `s05` | int(4) | ✗ | - | - |
| `m06` | int(4) | ✗ | - | - |
| `f06` | int(4) | ✗ | - | - |
| `dm06` | int(3) | ✗ | - | - |
| `df06` | int(3) | ✗ | - | - |
| `s06` | int(4) | ✗ | - | - |
| `m07` | int(4) | ✗ | - | - |
| `f07` | int(4) | ✗ | - | - |
| `dm07` | int(3) | ✗ | - | - |
| `df07` | int(3) | ✗ | - | - |
| `s07` | int(4) | ✗ | - | - |
| `m08` | int(4) | ✗ | - | - |
| `f08` | int(4) | ✗ | - | - |
| `dm08` | int(3) | ✗ | - | - |
| `df08` | int(3) | ✗ | - | - |
| `s08` | int(4) | ✗ | - | - |
| `m09` | int(4) | ✗ | - | - |
| `f09` | int(4) | ✗ | - | - |
| `dm09` | int(3) | ✗ | - | - |
| `df09` | int(3) | ✗ | - | - |
| `s09` | int(4) | ✗ | - | - |
| `summ` | int(5) | ✗ | - | - |
| `sumf` | int(5) | ✗ | - | - |
| `sumdm` | int(3) | ✗ | - | - |
| `sumdf` | int(3) | ✗ | - | - |
| `sums` | int(5) | ✗ | - | - |

---

### accident

**คำอธิบาย:** อุบัติเหตุ

**จำนวนแถว:** 29

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `nameaccdnt` | varchar(50) | ✗ | - | - |
| `minaccid` | varchar(7) | ✗ | - | - |
| `maxaccid` | varchar(7) | ✗ | - | - |
| `codeaccdnt` | varchar(3) | ✗ | IDX | - |
| `aetype_code` | varchar(2) | ✗ | - | รหัส aetype |

---

### emergency

**คำอธิบาย:** ฉุกเฉิน

**จำนวนแถว:** 49,904

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdttm` | datetime | ✗ | - | - |
| `sickdate` | date | ✗ | - | - |
| `sicktime` | int(4) | ✗ | - | - |
| `aeplace` | varchar(2) | ✗ | - | - |
| `aetype_ae` | varchar(2) | ✗ | - | - |
| `typein_ae` | varchar(1) | ✗ | - | - |
| `traffic` | varchar(1) | ✗ | - | - |
| `vehicle` | varchar(2) | ✗ | - | - |
| `alochol` | varchar(1) | ✗ | - | - |
| `nacrotic` | varchar(1) | ✗ | - | - |
| `belt` | varchar(1) | ✗ | - | - |
| `helmet` | varchar(1) | ✗ | - | - |
| `airway` | varchar(1) | ✗ | - | - |
| `stopbleed` | varchar(1) | ✗ | - | - |
| `splint` | varchar(1) | ✗ | - | - |
| `fluid` | varchar(1) | ✗ | - | - |
| `urgency` | varchar(1) | ✗ | - | - |
| `coma_eye` | varchar(1) | ✗ | - | - |
| `coma_speak` | varchar(1) | ✗ | - | - |
| `coma_move` | varchar(1) | ✗ | - | - |
| `d_update` | datetime | ✗ | - | - |
| `note` | varchar(40) | ✓ | - | บันทึก |
| `emeroth` | varchar(100) | ✓ | - | - |
| `tel` | varchar(1) | ✓ | - | โทรศัพท์ |
| `passout` | varchar(1) | ✓ | - | - |
| `injury` | varchar(1) | ✓ | - | - |
| `injurywr` | varchar(1) | ✓ | - | - |
| `massgroup` | varchar(1) | ✓ | - | - |
| `hr_pu` | varchar(2) | ✓ | - | - |
| `m_pu` | varchar(2) | ✓ | - | - |
| `imm` | varchar(1) | ✓ | - | - |
| `type_aeis` | varchar(1) | ✓ | - | - |
| `moopart` | varchar(2) | ✓ | - | หมู่ |
| `tmbpart` | varchar(2) | ✓ | - | ตำบล |
| `amppart` | varchar(2) | ✓ | - | อำเภอ |
| `chwpart` | varchar(2) | ✓ | - | จังหวัด |

---


## anc

### dead

**คำอธิบาย:** -

**จำนวนแถว:** 289,875

**Engine:** InnoDB

**Primary Key:** `cid`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pcucode` | varchar(5) | ✗ | - | - |
| `cid` | varchar(13) | ✗ | PK | เลขบัตรประชาชน |
| `pid` | varchar(15) | ✗ | - | - |
| `ddeath` | date | ✓ | - | - |
| `cdeath_a` | varchar(6) | ✓ | - | - |
| `cdeath_b` | varchar(6) | ✓ | - | - |
| `cdeath_c` | varchar(6) | ✓ | - | - |
| `cdeath_d` | varchar(6) | ✓ | - | - |
| `odisease` | varchar(6) | ✓ | - | - |
| `cdeath` | varchar(6) | ✓ | - | - |
| `pdeath` | char(1) | ✓ | - | - |
| `d_update` | varchar(14) | ✓ | - | - |
| `pregnancy` | char(1) | ✓ | - | - |
| `flagstatus` | char(1) | ✓ | - | - |
| `flagnhsoauto` | char(1) | ✓ | - | - |
| `createdate` | varchar(14) | ✓ | - | - |
| `importdate` | varchar(14) | ✓ | - | - |
| `importfilename` | varchar(255) | ✓ | - | - |
| `exportdate` | varchar(14) | ✓ | - | - |
| `exportfilename` | varchar(100) | ✓ | - | - |
| `pcusynclist` | varchar(100) | ✓ | - | - |

---


## appointment

### ccd_appointment

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospcode` | varchar(5) | ✗ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `next_visit_date` | date | ✓ | - | วันที่ next_visit |
| `next_visit_time` | int(4) | ✓ | - | เวลา next_visit |
| `doctor_cid` | varchar(13) | ✓ | - | - |
| `app_note` | varchar(25) | ✓ | - | - |

---

### hi7_screen_queue

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `screen_id` | int(11) | ✓ | IDX | รหัส screen |
| `screen_prefix` | varchar(10) | ✓ | - | - |
| `screen_number` | int(11) | ✓ | - | - |
| `stations_screen` | varchar(1) | ✓ | - | - |
| `datecreate` | datetime | ✓ | - | - |

---

### l_queue_status

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `queue_status_name` | varchar(20) | ✓ | - | ชื่อ queue_status |
| `queue_status_desc` | varchar(255) | ✓ | - | - |

---

### q4u_monitorshow

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `queue_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `queue_id` | int(12) | ✗ | PK | รหัส queue |
| `q4u_room` | varchar(6) | ✓ | - | - |
| `hn` | varchar(15) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | varchar(16) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `service_point_id` | int(3) | ✗ | - | รหัส service_point |
| `priority_id` | int(3) | ✓ | - | รหัส priority |
| `room_id` | int(2) | ✓ | - | รหัส room |
| `date_serv` | date | ✗ | - | - |
| `time_serv` | time | ✓ | - | - |
| `q4u_prefix` | varchar(3) | ✓ | - | - |
| `queue_number` | varchar(10) | ✓ | - | - |
| `queue_running` | int(6) | ✓ | - | - |
| `his_queue` | varchar(6) | ✓ | - | - |
| `queue_status_id` | int(1) | ✓ | - | รหัส queue_status |
| `mark_pending` | enum('N','Y') | ✓ | - | - |
| `remark` | text | ✓ | - | หมายเหตุ |
| `date_create` | datetime | ✓ | - | - |
| `date_update` | timestamp | ✓ | - | - |
| `pending_to_service_point_id` | int(3) | ✓ | - | รหัส pending_to_service_point |
| `is_interview` | char(1) | ✓ | - | เป็นinterview หรือไม่ |
| `is_completed` | char(1) | ✓ | - | เป็นcompleted หรือไม่ |
| `queue_interview` | int(11) | ✓ | - | - |
| `is_cancel` | enum('Y','N') | ✓ | - | เป็นcancel หรือไม่ |
| `q4u_check` | varchar(6) | ✓ | - | - |
| `q4u_check1` | varchar(6) | ✓ | - | - |
| `q4u_regiswrong` | varchar(30) | ✓ | - | - |
| `q4u_checkcall` | varchar(30) | ✓ | - | - |
| `q4u_tranfer` | varchar(30) | ✓ | - | - |
| `q4u_usernurse` | varchar(6) | ✓ | - | - |
| `created_by` | int(11) | ✓ | - | - |
| `updated_by` | int(11) | ✓ | - | - |
| `updated_time` | time | ✓ | - | เวลา updated |
| `updated_timesend` | time | ✓ | - | - |
| `tablenursecall` | varchar(30) | ✓ | - | - |
| `exitqueue` | varchar(30) | ✓ | - | - |
| `countall` | varchar(30) | ✓ | - | - |
| `pttype` | varchar(30) | ✓ | - | ประเภทสิทธิ |
| `allergy` | varchar(30) | ✓ | - | - |
| `age` | varchar(3) | ✓ | - | - |
| `alerted` | varchar(30) | ✓ | - | - |
| `printq` | varchar(3) | ✓ | - | - |

---

### q4u_queue

**คำอธิบาย:** -

**จำนวนแถว:** 663,582

**Engine:** InnoDB

**Primary Key:** `vn, service_point_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `queue_id` | int(12) | ✗ | UK | รหัส queue |
| `hn` | varchar(15) | ✓ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | varchar(16) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `service_point_id` | int(3) | ✗ | PK | รหัส service_point |
| `priority_id` | int(3) | ✓ | IDX | รหัส priority |
| `room_id` | int(2) | ✓ | - | รหัส room |
| `date_serv` | date | ✗ | IDX | - |
| `time_serv` | time | ✓ | - | - |
| `q4u_prefix` | varchar(3) | ✓ | - | - |
| `queue_number` | varchar(10) | ✓ | - | - |
| `queue_running` | int(6) | ✓ | - | - |
| `his_queue` | varchar(6) | ✓ | - | - |
| `queue_status_id` | int(1) | ✓ | - | รหัส queue_status |
| `mark_pending` | enum('N','Y') | ✓ | - | - |
| `remark` | text | ✓ | - | หมายเหตุ |
| `date_create` | datetime | ✓ | IDX | - |
| `date_update` | timestamp | ✓ | - | - |
| `pending_to_service_point_id` | int(3) | ✓ | - | รหัส pending_to_service_point |
| `is_interview` | char(1) | ✓ | - | เป็นinterview หรือไม่ |
| `is_completed` | char(1) | ✓ | - | เป็นcompleted หรือไม่ |
| `queue_interview` | int(11) | ✓ | - | - |
| `is_cancel` | enum('Y','N') | ✓ | - | เป็นcancel หรือไม่ |
| `q4u_check` | varchar(6) | ✓ | IDX | - |
| `q4u_check1` | varchar(6) | ✓ | - | - |
| `q4u_room` | varchar(6) | ✓ | - | - |
| `q4u_regiswrong` | varchar(30) | ✓ | - | - |
| `q4u_checkcall` | varchar(30) | ✓ | - | - |
| `q4u_tranfer` | varchar(30) | ✓ | - | - |
| `q4u_usernurse` | varchar(6) | ✓ | - | - |
| `created_by` | int(11) | ✓ | - | - |
| `updated_by` | int(11) | ✓ | - | - |
| `updated_time` | time | ✓ | - | เวลา updated |
| `updated_timesend` | time | ✓ | - | - |
| `tablenursecall` | varchar(30) | ✓ | - | - |
| `age` | varchar(3) | ✓ | - | - |
| `alerted` | varchar(30) | ✓ | - | - |
| `printq` | varchar(3) | ✓ | - | - |
| `pttype` | varchar(30) | ✓ | - | ประเภทสิทธิ |
| `exitqueue` | varchar(30) | ✓ | - | - |
| `countall` | varchar(30) | ✓ | - | - |
| `allergy` | varchar(30) | ✓ | - | - |
| `idscreen` | varchar(255) | ✓ | - | - |
| `fullname2` | varchar(30) | ✓ | - | - |
| `q4u_regisfrom` | varchar(3) | ✓ | - | - |
| `datestart` | datetime | ✓ | - | - |
| `dateend` | datetime | ✓ | - | - |

---

### q4u_queue_detail

**คำอธิบาย:** -

**จำนวนแถว:** 194

**Engine:** InnoDB

**Primary Key:** `service_point_id, date_serv, room_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `service_point_id` | int(3) | ✗ | PK | รหัส service_point |
| `date_serv` | date | ✗ | PK | - |
| `last_queue` | int(11) | ✓ | - | - |
| `room_id` | int(3) | ✗ | PK | รหัส room |
| `queue_id` | int(11) | ✓ | - | รหัส queue |
| `update_date` | timestamp | ✓ | - | วันที่ update |

---

### q4u_queue_group_detail

**คำอธิบาย:** -

**จำนวนแถว:** 4,152

**Engine:** InnoDB

**Primary Key:** `service_point_id, date_serv, room_id, queue_running`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `service_point_id` | int(3) | ✗ | PK | รหัส service_point |
| `date_serv` | date | ✗ | PK | - |
| `last_queue` | int(11) | ✓ | - | - |
| `room_id` | int(3) | ✗ | PK | รหัส room |
| `queue_id` | int(11) | ✓ | - | รหัส queue |
| `update_date` | timestamp | ✓ | - | วันที่ update |
| `queue_running` | int(6) | ✗ | PK | - |

---

### q4u_queue_number

**คำอธิบาย:** -

**จำนวนแถว:** 26,400

**Engine:** InnoDB

**Primary Key:** `service_point_id, date_serv`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `service_point_id` | int(3) | ✗ | PK | รหัส service_point |
| `date_serv` | date | ✗ | PK | - |
| `current_queue` | int(11) | ✓ | - | - |
| `update_date` | timestamp | ✓ | - | วันที่ update |
| `priority_id` | int(3) | ✓ | - | รหัส priority |

---

### q4u_queue_status

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `queue_status_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `queue_status_id` | int(11) | ✗ | PK | รหัส queue_status |
| `queue_status_name` | varchar(20) | ✓ | - | ชื่อ queue_status |
| `queue_status_desc` | varchar(255) | ✓ | - | - |

---

### queue

**คำอธิบาย:** คิว

**จำนวนแถว:** 48

**Engine:** InnoDB

**Primary Key:** `hcode, vn, servpoint_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hcode` | varchar(5) | ✗ | PK | - |
| `hn` | varchar(15) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | varchar(16) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `servpoint_code` | varchar(6) | ✗ | PK | รหัส servpoint |
| `priority_id` | int(3) | ✓ | - | รหัส priority |
| `room_id` | int(2) | ✓ | - | รหัส room |
| `date_serv` | date | ✗ | - | - |
| `queue_number` | int(11) | ✓ | - | - |
| `queue_his` | int(4) | ✓ | - | - |
| `queue_status_id` | int(1) | ✓ | - | รหัส queue_status |
| `mark_pending` | enum('N','Y') | ✓ | - | - |
| `remark` | text | ✓ | - | หมายเหตุ |
| `date_create` | datetime | ✗ | - | - |
| `date_update` | timestamp | ✓ | - | - |

---

### queue_call

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | varchar(255) | ✓ | - | รหัสประจำ (Primary Key) |
| `call` | varchar(255) | ✓ | - | - |

---

### queue_detail

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `hcode, servpoint_code, date_serv`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hcode` | varchar(5) | ✗ | PK | - |
| `servpoint_code` | varchar(10) | ✗ | PK | รหัส servpoint |
| `date_serv` | date | ✗ | PK | - |
| `last_queue` | int(11) | ✓ | - | - |
| `room_id` | int(3) | ✓ | - | รหัส room |
| `current_queue` | int(11) | ✓ | - | - |
| `update_date` | timestamp | ✓ | - | วันที่ update |

---

### queue_number

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `hcode, servpoint_code, date_serv`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hcode` | varchar(5) | ✗ | PK | - |
| `servpoint_code` | varchar(6) | ✗ | PK | รหัส servpoint |
| `date_serv` | date | ✗ | PK | - |
| `queue_number` | int(11) | ✓ | - | - |
| `update_date` | timestamp | ✓ | - | วันที่ update |

---

### vaccineall0664

**คำอธิบาย:** -

**จำนวนแถว:** 408

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospital_name` | varchar(255) | ✓ | - | ชื่อ hospital |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `hospital_appointment_slot_id` | varchar(255) | ✓ | - | รหัส hospital_appointment_slot |
| `slot_no` | varchar(255) | ✓ | - | เลขที่ slot |
| `appointment_date` | varchar(255) | ✓ | - | วันที่ appointment |
| `appointment_time` | varchar(255) | ✓ | - | เวลา appointment |
| `appointment_confirm_type_name` | varchar(255) | ✓ | - | ชื่อ appointment_confirm_type |
| `person_name` | varchar(255) | ✓ | - | ชื่อ person |
| `appointment_confirm_type_name_1` | varchar(255) | ✓ | - | - |
| `confirm_datetime` | varchar(255) | ✓ | - | - |
| `person_age_year` | varchar(255) | ✓ | - | - |
| `mobile_phone` | varchar(255) | ✓ | - | - |
| `person_type_name` | varchar(255) | ✓ | - | ชื่อ person_type |
| `person_risk_type_name` | varchar(255) | ✓ | - | ชื่อ person_risk_type |
| `staff_name` | varchar(255) | ✓ | - | ชื่อ staff |
| `birth_date` | varchar(255) | ✓ | - | วันเกิด |
| `addr_moo` | varchar(255) | ✓ | - | - |
| `chw_code` | varchar(255) | ✓ | - | รหัส chw |
| `amp_code` | varchar(255) | ✓ | - | รหัส amp |
| `tmb_code` | varchar(255) | ✓ | - | รหัส tmb |

---

### vaccineallmonth060708

**คำอธิบาย:** -

**จำนวนแถว:** 9,855

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospital_name` | varchar(255) | ✓ | - | ชื่อ hospital |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `hospital_appointment_slot_id` | varchar(255) | ✓ | - | รหัส hospital_appointment_slot |
| `slot_no` | varchar(255) | ✓ | - | เลขที่ slot |
| `appointment_date` | date | ✓ | - | วันที่ appointment |
| `appointment_time` | varchar(255) | ✓ | - | เวลา appointment |
| `appointment_confirm_type_name` | varchar(255) | ✓ | - | ชื่อ appointment_confirm_type |
| `person_name` | varchar(255) | ✓ | - | ชื่อ person |
| `appointment_confirm_type_name_1` | varchar(255) | ✓ | - | - |
| `confirm_datetime` | varchar(255) | ✓ | - | - |
| `person_age_year` | varchar(255) | ✓ | - | - |
| `mobile_phone` | varchar(255) | ✓ | - | - |
| `person_type_name` | varchar(255) | ✓ | - | ชื่อ person_type |
| `person_risk_type_name` | varchar(255) | ✓ | - | ชื่อ person_risk_type |
| `staff_name` | varchar(255) | ✓ | - | ชื่อ staff |
| `birth_date` | varchar(255) | ✓ | - | วันเกิด |
| `addr_moo` | varchar(255) | ✓ | - | - |
| `chw_code` | varchar(255) | ✓ | - | รหัส chw |
| `amp_code` | varchar(255) | ✓ | - | รหัส amp |
| `tmb_code` | varchar(255) | ✓ | - | รหัส tmb |

---

### vaccineallmonth060708new

**คำอธิบาย:** -

**จำนวนแถว:** 9,817

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospital_name` | varchar(255) | ✓ | - | ชื่อ hospital |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |
| `hospital_appointment_slot_id` | varchar(255) | ✓ | - | รหัส hospital_appointment_slot |
| `slot_no` | varchar(255) | ✓ | - | เลขที่ slot |
| `appointment_date` | date | ✓ | - | วันที่ appointment |
| `appointment_time` | varchar(255) | ✓ | - | เวลา appointment |
| `appointment_confirm_type_name` | varchar(255) | ✓ | - | ชื่อ appointment_confirm_type |
| `person_name` | varchar(255) | ✓ | - | ชื่อ person |
| `appointment_confirm_type_name_1` | varchar(255) | ✓ | - | - |
| `confirm_datetime` | varchar(255) | ✓ | - | - |
| `person_age_year` | varchar(255) | ✓ | - | - |
| `mobile_phone` | varchar(255) | ✓ | - | - |
| `person_type_name` | varchar(255) | ✓ | - | ชื่อ person_type |
| `person_risk_type_name` | varchar(255) | ✓ | - | ชื่อ person_risk_type |
| `staff_name` | varchar(255) | ✓ | - | ชื่อ staff |
| `birth_date` | varchar(255) | ✓ | - | วันเกิด |
| `addr_moo` | varchar(255) | ✓ | - | - |
| `chw_code` | varchar(255) | ✓ | - | รหัส chw |
| `amp_code` | varchar(255) | ✓ | - | รหัส amp |
| `tmb_code` | varchar(255) | ✓ | - | รหัส tmb |

---

### vaccinedrready

**คำอธิบาย:** -

**จำนวนแถว:** 187

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospital_name` | varchar(255) | ✓ | - | ชื่อ hospital |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `hospital_appointment_slot_id` | varchar(255) | ✓ | - | รหัส hospital_appointment_slot |
| `slot_no` | varchar(255) | ✓ | - | เลขที่ slot |
| `appointment_date` | varchar(255) | ✓ | - | วันที่ appointment |
| `appointment_time` | varchar(255) | ✓ | - | เวลา appointment |
| `appointment_confirm_type_name` | varchar(255) | ✓ | - | ชื่อ appointment_confirm_type |
| `person_name` | varchar(255) | ✓ | - | ชื่อ person |
| `appointment_confirm_type_name_1` | varchar(255) | ✓ | - | - |
| `confirm_datetime` | varchar(255) | ✓ | - | - |
| `person_age_year` | varchar(255) | ✓ | - | - |
| `mobile_phone` | varchar(255) | ✓ | - | - |
| `person_type_name` | varchar(255) | ✓ | - | ชื่อ person_type |
| `person_risk_type_name` | varchar(255) | ✓ | - | ชื่อ person_risk_type |
| `staff_name` | varchar(255) | ✓ | - | ชื่อ staff |
| `birth_date` | varchar(255) | ✓ | - | วันเกิด |
| `addr_moo` | varchar(255) | ✓ | - | - |
| `chw_code` | varchar(255) | ✓ | - | รหัส chw |
| `amp_code` | varchar(255) | ✓ | - | รหัส amp |
| `tmb_code` | varchar(255) | ✓ | - | รหัส tmb |

---

### visitqueueid

**คำอธิบาย:** -

**จำนวนแถว:** 772,245

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(12) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `queue_id` | int(12) | ✓ | - | รหัส queue |
| `queue_number` | varchar(10) | ✓ | - | - |
| `queue_priority` | varchar(200) | ✓ | - | - |

---

### visitqueueid_copy1

**คำอธิบาย:** -

**จำนวนแถว:** 494,026

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(12) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `queue_id` | int(12) | ✓ | - | รหัส queue |
| `queue_number` | varchar(10) | ✓ | - | - |
| `queue_priority` | varchar(200) | ✓ | - | - |

---


## blood

### bloodgrp

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namabloodg` | varchar(40) | ✗ | - | - |
| `bloodgrp` | varchar(2) | ✗ | IDX | - |

---

### orblood

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `orno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orno` | int(8) | ✗ | PK | - |
| `blood` | varchar(5) | ✓ | - | - |

---

### vital_sign

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** InnoDB

**Primary Key:** `vs_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vs_id` | int(10) unsigned | ✗ | PK | รหัส vs |
| `an` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `round_no` | int(11) | ✓ | - | เลขที่ round |
| `bw` | decimal(5,2) | ✓ | - | - |
| `bt` | decimal(5,2) | ✓ | - | - |
| `sbp` | tinyint(4) | ✓ | - | - |
| `dbp` | tinyint(4) | ✓ | - | - |
| `pr` | tinyint(4) | ✓ | - | - |
| `rr` | tinyint(4) | ✓ | - | - |
| `stool` | tinyint(4) | ✓ | - | - |
| `urine` | tinyint(4) | ✓ | - | - |
| `height` | tinyint(4) | ✓ | - | - |
| `oral_fluid` | int(11) | ✓ | - | - |
| `parenteral` | int(11) | ✓ | - | - |
| `medication` | text | ✓ | - | - |
| `outtake_urine` | int(11) | ✓ | - | - |
| `emesis` | int(11) | ✓ | - | - |
| `drainage` | int(11) | ✓ | - | - |
| `aspiration` | int(11) | ✓ | - | - |
| `lochia` | int(11) | ✓ | - | - |
| `falling_risk` | int(11) | ✓ | - | - |
| `pressure_sore_risk` | int(11) | ✓ | - | - |
| `pps_score` | int(11) | ✓ | - | - |
| `pain_score` | int(11) | ✓ | - | - |
| `o2sat` | int(11) | ✓ | - | - |
| `record_by` | varchar(150) | ✓ | - | - |
| `ward_id` | varbinary(2) | ✓ | - | รหัส ward |
| `blood_lost` | int(11) | ✓ | - | - |
| `blood_take` | int(11) | ✓ | - | - |
| `remark` | varchar(255) | ✓ | - | หมายเหตุ |
| `is_or` | varchar(1) | ✓ | - | เป็นor หรือไม่ |
| `vs_date` | date | ✓ | - | วันที่ vs |
| `vs_time` | varchar(5) | ✓ | - | เวลา vs |

---


## chronic

### CHRONIC-hi

**คำอธิบาย:** -

**จำนวนแถว:** 450

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pcucode` | varchar(255) | ✓ | - | - |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `pid` | varchar(255) | ✓ | - | - |
| `datedx` | varchar(255) | ✓ | - | - |
| `chronic` | varchar(255) | ✓ | - | - |
| `datedis` | varchar(255) | ✓ | - | - |
| `typedis` | varchar(255) | ✓ | - | - |
| `d_update` | varchar(255) | ✓ | - | - |

---

### CHRONICk

**คำอธิบาย:** -

**จำนวนแถว:** 233

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `PCUCODE` | varchar(255) | ✓ | - | - |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `PID` | varchar(255) | ✓ | - | - |
| `DATEDX` | varchar(255) | ✓ | - | - |
| `CHRONIC` | varchar(255) | ✓ | - | - |
| `DATEDIS` | varchar(255) | ✓ | - | - |
| `TYPEDIS` | varchar(255) | ✓ | - | - |
| `D_UPDATE` | varchar(255) | ✓ | - | - |

---

### CHRONICm

**คำอธิบาย:** -

**จำนวนแถว:** 226

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `PCUCODE` | varchar(255) | ✓ | - | - |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `PID` | varchar(255) | ✓ | - | - |
| `DATEDX` | varchar(255) | ✓ | - | - |
| `CHRONIC` | varchar(255) | ✓ | - | - |
| `DATEDIS` | varchar(255) | ✓ | - | - |
| `TYPEDIS` | varchar(255) | ✓ | - | - |
| `D_UPDATE` | varchar(255) | ✓ | - | - |

---

### cgroup298disease

**คำอธิบาย:** -

**จำนวนแถว:** 308

**Engine:** MyISAM

**Primary Key:** `cgroup`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cgroup` | varchar(3) | ✗ | PK | - |
| `icd10` | varchar(250) | ✓ | - | รหัสโรค ICD-10 |
| `e_name` | varchar(200) | ✓ | - | ชื่อ e |
| `t_name` | varchar(200) | ✓ | - | ชื่อ t |
| `is_chronic` | varchar(1) | ✓ | - | เป็นchronic หรือไม่ |
| `chronic_code` | varchar(3) | ✓ | - | รหัส chronic |

---

### chronic

**คำอธิบาย:** โรคเรื้อรัง

**จำนวนแถว:** 135,555

**Engine:** InnoDB

**Primary Key:** `hospcode, pid, chronic`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospcode` | varchar(5) | ✗ | PK | - |
| `pid` | int(8) | ✗ | PK | - |
| `date_diag` | varchar(8) | ✓ | - | - |
| `chronic` | varchar(7) | ✗ | PK | - |
| `hosp_dx` | varchar(5) | ✓ | - | - |
| `hosp_rx` | varchar(5) | ✓ | - | - |
| `date_disch` | varchar(8) | ✗ | - | - |
| `typedisch` | varchar(2) | ✗ | - | - |
| `d_update` | varchar(19) | ✓ | - | - |
| `flag_confirm` | varchar(1) | ✗ | - | - |

---

### chronicfu

**คำอธิบาย:** -

**จำนวนแถว:** 192,089

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `foot` | varchar(1) | ✗ | - | - |
| `retina` | varchar(1) | ✗ | - | - |
| `dct` | varchar(5) | ✗ | - | - |
| `d_update` | datetime | ✗ | - | - |
| `chronicfu` | varchar(1) | ✓ | - | - |

---

### t_chronic

**คำอธิบาย:** -

**จำนวนแถว:** 895,474

**Engine:** MyISAM

**Primary Key:** `cid, diagcode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cid` | varchar(13) | ✗ | PK | เลขบัตรประชาชน |
| `birth` | date | ✓ | - | - |
| `age_y` | int(3) | ✓ | - | - |
| `age_y_dx` | int(3) | ✓ | - | - |
| `groupcode` | int(3) | ✓ | - | - |
| `sex` | varchar(1) | ✓ | - | - |
| `nation` | varchar(3) | ✓ | - | - |
| `p_hospcode` | varchar(5) | ✓ | - | - |
| `d_hospcode` | varchar(5) | ✓ | - | - |
| `p_pt_vhid` | varchar(8) | ✓ | - | - |
| `d_pt_vhid` | varchar(8) | ✓ | - | - |
| `p_typearea` | varchar(1) | ✓ | - | - |
| `d_typearea` | varchar(1) | ✓ | - | - |
| `input_hosp` | varchar(5) | ✓ | - | - |
| `input_pid` | varchar(15) | ✓ | - | - |
| `source_tb` | varchar(20) | ✓ | - | - |
| `diagcode` | varchar(10) | ✗ | PK | - |
| `date_dx` | date | ✓ | - | - |
| `hosp_dx` | varchar(5) | ✓ | - | - |
| `hosp_rx` | varchar(5) | ✓ | - | - |
| `typedisch` | varchar(2) | ✓ | - | - |
| `datedisch` | date | ✓ | - | - |
| `minscl` | varchar(5) | ✓ | - | - |
| `inscl` | varchar(3) | ✓ | - | - |

---


## dental

### visitdental

**คำอธิบาย:** -

**จำนวนแถว:** 9,666

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `denttype` | varchar(1) | ✗ | - | - |
| `servplace` | varchar(1) | ✗ | - | - |
| `pteeth` | int(2) | ✗ | - | ผู้ป่วย eeth |
| `pcaries` | int(2) | ✗ | - | - |
| `pfilling` | int(2) | ✗ | - | - |
| `pextract` | int(2) | ✗ | - | - |
| `dteeth` | int(2) | ✗ | - | - |
| `dcaries` | int(2) | ✗ | - | - |
| `dfilling` | int(2) | ✗ | - | - |
| `dextract` | int(2) | ✗ | - | - |
| `nfluoride` | varchar(1) | ✗ | - | - |
| `nscaling` | varchar(1) | ✗ | - | - |
| `nsealant` | int(2) | ✗ | - | - |
| `npfilling` | int(2) | ✗ | - | - |
| `ndfilling` | int(2) | ✗ | - | - |
| `npextract` | int(2) | ✗ | - | - |
| `ndextract` | int(2) | ✗ | - | - |
| `nprosthesis` | varchar(1) | ✗ | - | - |
| `permanent` | int(2) | ✗ | - | - |
| `prosthesis` | int(2) | ✗ | - | - |
| `pprosthesis` | int(2) | ✗ | - | - |
| `gum` | varchar(6) | ✗ | - | - |
| `schooltype` | varchar(1) | ✗ | - | - |
| `class` | varchar(1) | ✗ | - | - |
| `d_update` | datetime | ✗ | - | - |

---


## finance

### income

**คำอธิบาย:** รายได้

**จำนวนแถว:** 23

**Engine:** MyISAM

**Primary Key:** `costcenter`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `costcenter` | varchar(4) | ✗ | PK | - |
| `namecost` | varchar(255) | ✓ | - | - |
| `income` | varchar(4) | ✓ | - | รายได้ |
| `nameinc` | varchar(255) | ✓ | - | - |
| `incomeb` | varchar(4) | ✓ | - | - |
| `nameincb` | varchar(255) | ✓ | - | - |
| `op56` | varchar(4) | ✓ | - | - |
| `sso_code` | char(1) | ✓ | - | รหัส sso |
| `namesss_code` | varchar(255) | ✓ | - | รหัส namesss |
| `fdh_chrgitem` | varchar(2) | ✓ | - | - |
| `fdh_adptype` | varchar(2) | ✓ | - | - |
| `chrgitem` | varchar(2) | ✓ | - | - |

---

### l_income

**คำอธิบาย:** -

**จำนวนแถว:** 59

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | double(3,0) | ✗ | PK | รหัสประจำ (Primary Key) |
| `paccount` | varchar(20) | ✓ | - | - |
| `name` | varchar(200) | ✓ | - | ชื่อ |
| `record` | varchar(100) | ✓ | - | - |
| `register` | varchar(100) | ✓ | - | - |
| `type` | varchar(5) | ✗ | IDX | ประเภท |
| `income_id` | int(3) | ✗ | IDX | รหัส income |

---

### prcd55

**คำอธิบาย:** -

**จำนวนแถว:** 452

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `priceprcd` | int(6) | ✗ | - | - |
| `nameprcd` | varchar(30) | ✓ | IDX | - |
| `codeprcd` | varchar(7) | ✓ | IDX | - |
| `fullname` | varchar(90) | ✗ | - | - |
| `income_old` | varchar(2) | ✗ | - | - |
| `cgd` | varchar(5) | ✗ | - | - |
| `income` | varchar(2) | ✗ | - | รายได้ |

---

### prcd_kn

**คำอธิบาย:** -

**จำนวนแถว:** 302

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `priceprcd` | int(6) | ✗ | - | - |
| `nameprcd` | varchar(30) | ✓ | IDX | - |
| `codeprcd` | varchar(7) | ✓ | IDX | - |
| `fullname` | varchar(90) | ✗ | - | - |
| `income_old` | varchar(2) | ✗ | - | - |
| `cgd` | varchar(5) | ✗ | - | - |
| `income` | varchar(2) | ✗ | - | รายได้ |

---

### prcd_n

**คำอธิบาย:** -

**จำนวนแถว:** 452

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `priceprcd` | int(6) | ✗ | - | - |
| `nameprcd` | varchar(30) | ✓ | IDX | - |
| `codeprcd` | varchar(7) | ✓ | IDX | - |
| `fullname` | varchar(90) | ✗ | - | - |
| `income` | varchar(2) | ✗ | - | รายได้ |
| `cgd` | varchar(5) | ✗ | - | - |
| `incomen` | varchar(2) | ✗ | - | - |

---

### prcd_pb

**คำอธิบาย:** -

**จำนวนแถว:** 304

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `priceprcd` | decimal(6,0) | ✗ | - | - |
| `nameprcd` | varchar(50) | ✗ | IDX | - |
| `codeprcd` | varchar(7) | ✗ | IDX | - |
| `fullname` | varchar(90) | ✗ | - | - |
| `income` | varchar(2) | ✗ | - | รายได้ |
| `cgd` | varchar(5) | ✗ | - | - |
| `etype` | varchar(100) | ✗ | - | - |
| `incomen` | varchar(2) | ✗ | - | - |

---

### prcd_pbh

**คำอธิบาย:** -

**จำนวนแถว:** 807

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codeprcd` | varchar(7) | ✗ | IDX | - |
| `nameprcd` | varchar(90) | ✗ | IDX | - |
| `fullname` | varchar(90) | ✗ | - | - |
| `priceprcd` | decimal(6,0) | ✗ | - | - |
| `income` | varchar(2) | ✗ | - | รายได้ |
| `income_old` | varchar(2) | ✗ | - | - |
| `cgd` | varchar(5) | ✗ | - | - |
| `etype` | varchar(100) | ✗ | - | - |

---

### prcdv

**คำอธิบาย:** -

**จำนวนแถว:** 452

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `priceprcd` | int(6) | ✗ | - | - |
| `nameprcd` | varchar(30) | ✓ | IDX | - |
| `codeprcd` | varchar(7) | ✓ | IDX | - |
| `fullname` | varchar(90) | ✗ | - | - |
| `income_old` | varchar(2) | ✗ | - | - |
| `cgd` | varchar(5) | ✗ | - | - |
| `income` | varchar(2) | ✗ | - | รายได้ |

---

### ssop_billitem

**คำอธิบาย:** -

**จำนวนแถว:** 1,414

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `Invno` | varchar(20) | ✗ | IDX | - |
| `SvDate` | date | ✓ | - | - |
| `BillMuad` | char(50) | ✓ | - | - |
| `LCCode` | varchar(20) | ✗ | - | - |
| `STDCode` | varchar(20) | ✓ | - | - |
| `Desc2` | varchar(20) | ✓ | - | - |
| `QTY` | int(10) | ✓ | - | จำนวน |
| `UP` | decimal(10,2) | ✓ | - | - |
| `ChargeAmt` | decimal(10,2) | ✓ | - | - |
| `ClaimUP` | decimal(10,2) | ✓ | - | - |
| `ClaimAmount` | decimal(10,2) | ✓ | - | - |
| `SvRefID` | varchar(20) | ✓ | - | - |
| `ClaimCat` | varchar(10) | ✓ | - | - |
| `status_flg` | enum('A','C','D') | ✓ | - | - |
| `export_code` | enum('SS','CS') | ✓ | - | รหัส export |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |

---

### ssop_billtran

**คำอธิบาย:** -

**จำนวนแถว:** 371

**Engine:** MyISAM

**Primary Key:** `Invno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `Station` | varchar(50) | ✓ | - | - |
| `Authcode` | varchar(50) | ✓ | - | - |
| `DTtran` | datetime | ✓ | - | - |
| `Hcode` | varchar(10) | ✓ | - | - |
| `Invno` | varchar(20) | ✗ | PK | - |
| `Billno` | varchar(20) | ✓ | - | เลขที่ใบเสร็จ |
| `HN` | varchar(10) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `MemberNo` | varchar(10) | ✓ | - | - |
| `Amount` | decimal(10,2) | ✓ | - | จำนวนเงิน |
| `Paid` | decimal(10,2) | ✓ | - | ชำระแล้ว |
| `VerCode` | varchar(10) | ✓ | - | - |
| `Tflag` | enum('A','E','D') | ✓ | - | - |
| `Pid` | varchar(15) | ✓ | - | - |
| `Name` | varchar(100) | ✓ | - | ชื่อ |
| `HMain` | varchar(5) | ✓ | - | - |
| `PayPlan` | varchar(2) | ✓ | - | - |
| `ClaimAmt` | decimal(10,2) | ✓ | - | - |
| `OtherPayplan` | varchar(2) | ✓ | - | - |
| `OtherPay` | decimal(10,2) | ✓ | - | - |
| `status_flg` | enum('A','C','D') | ✓ | - | - |
| `export_code` | enum('SS','CS') | ✓ | - | รหัส export |
| `vstdate` | date | ✗ | IDX | วันที่มารับบริการ |

---


## hr

### hi7_l_nurse_triage

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `nurse_triage` | varchar(255) | ✓ | - | - |

---

### hi7_l_screennurse

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** InnoDB

**Primary Key:** `screencode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `screencode` | int(10) unsigned | ✗ | PK | - |
| `screenname` | varchar(255) | ✓ | - | - |
| `is_active` | enum('เปิด','ปิด') | ✓ | - | ใช้งานอยู่ |

---

### lr

**คำอธิบาย:** -

**จำนวนแถว:** 5,616

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `edc_lr` | date | ✗ | - | - |
| `lmp_lr` | date | ✗ | - | - |
| `hbs_lr` | varchar(8) | ✗ | - | - |
| `hbe_lr` | varchar(8) | ✗ | - | - |
| `hiv_lr` | varchar(8) | ✗ | - | - |
| `vdrl_lr` | varchar(8) | ✗ | - | - |
| `wk_lr` | varchar(8) | ✗ | - | - |
| `anc_lr` | varchar(8) | ✗ | - | - |
| `lrno` | int(8) | ✗ | IDX | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `ga` | int(2) | ✗ | - | - |
| `g` | int(2) | ✗ | - | - |
| `p` | int(2) | ✗ | - | - |
| `a` | int(2) | ✗ | - | - |
| `l` | int(2) | ✗ | - | - |
| `brthdate` | date | ✗ | - | - |
| `prelr_c` | varchar(2) | ✗ | - | - |
| `lr_c` | varchar(2) | ✗ | - | - |
| `postlr_c` | varchar(2) | ✗ | - | - |
| `charge` | int(5) | ✗ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `drepair` | varchar(5) | ✗ | - | - |
| `fapid` | varchar(13) | ✗ | - | - |
| `faname` | varchar(30) | ✗ | - | - |
| `falname` | varchar(30) | ✗ | - | - |
| `mapid` | varchar(13) | ✗ | - | - |
| `maname` | varchar(30) | ✗ | - | - |
| `malname` | varchar(30) | ✗ | - | - |
| `childno` | int(2) | ✗ | - | - |
| `childall` | int(2) | ✗ | - | - |
| `live` | int(2) | ✗ | - | - |
| `dlive` | int(1) | ✗ | - | - |
| `dwomb` | int(1) | ✗ | - | - |
| `nurse` | varchar(1) | ✗ | - | - |
| `nurseoth` | varchar(50) | ✗ | - | - |
| `nursename` | varchar(30) | ✗ | - | - |
| `nurselname` | varchar(30) | ✗ | - | - |
| `nurseaddr` | varchar(150) | ✗ | - | - |
| `twin` | varchar(1) | ✗ | - | - |
| `twinseq` | varchar(1) | ✗ | - | - |
| `wombmon` | varchar(2) | ✗ | - | - |
| `wombweek` | varchar(2) | ✗ | - | - |
| `bwelght` | int(4) | ✗ | - | - |
| `injure` | varchar(1) | ✗ | - | - |
| `injurecase` | varchar(150) | ✗ | - | - |
| `body` | varchar(1) | ✗ | - | - |
| `bodycase` | varchar(150) | ✗ | - | - |
| `feelw` | varchar(1) | ✗ | - | - |
| `feelwcase` | varchar(150) | ✗ | - | - |
| `feelnw` | varchar(1) | ✗ | - | - |
| `feelnwcase` | varchar(150) | ✗ | - | - |
| `feelnur` | varchar(1) | ✗ | - | - |
| `feelnurcas` | varchar(150) | ✗ | - | - |
| `spnur` | varchar(1) | ✗ | - | - |
| `spnurcase` | varchar(150) | ✗ | - | - |
| `certname` | varchar(100) | ✗ | - | - |
| `ohsename` | varchar(100) | ✗ | - | - |
| `repname` | varchar(100) | ✗ | - | - |
| `certpid` | varchar(13) | ✗ | - | - |
| `remark` | varchar(150) | ✗ | - | หมายเหตุ |
| `uc` | varchar(1) | ✗ | - | - |
| `dhct1` | date | ✗ | - | - |
| `dhct2` | date | ✗ | - | - |
| `hct1` | varchar(3) | ✗ | - | - |
| `hct2` | varchar(3) | ✗ | - | - |
| `updpid` | varchar(13) | ✗ | - | - |
| `upddate` | date | ✗ | - | - |
| `nursepid` | varchar(13) | ✗ | - | - |
| `ohsepid` | varchar(13) | ✗ | - | - |
| `bweight` | int(4) | ✗ | - | - |
| `hb_lr` | varchar(1) | ✗ | - | - |
| `thala_lr` | varchar(1) | ✗ | - | - |
| `btype` | varchar(2) | ✗ | - | - |
| `bresult` | varchar(7) | ✗ | - | - |
| `ppres` | varchar(1) | ✗ | - | - |
| `brithno` | int(11) | ✓ | - | - |

---

### nurse_notes

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** InnoDB

**Primary Key:** `note_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `note_id` | int(11) | ✗ | PK | รหัส note |
| `an` | int(11) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `note_date` | date | ✗ | - | วันที่ note |
| `note_time` | varchar(5) | ✓ | - | เวลา note |
| `user_id` | int(11) | ✗ | - | รหัส user |
| `d_update` | timestamp | ✓ | - | - |
| `sbp` | tinyint(4) | ✓ | - | - |
| `dbp` | tinyint(4) | ✓ | - | - |
| `pr` | tinyint(4) | ✓ | - | - |
| `rr` | tinyint(4) | ✓ | - | - |
| `bt` | decimal(4,1) | ✓ | - | - |
| `o2sat` | tinyint(4) | ✓ | - | - |
| `patient_type` | varchar(2) | ✓ | - | ประเภท patient |
| `note_by` | int(11) | ✓ | - | - |

---

### opstaff

**คำอธิบาย:** ข้อมูลบุคลากร

**จำนวนแถว:** 97

**Engine:** InnoDB

**Primary Key:** `staff`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `staff` | varchar(5) | ✗ | PK | - |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✗ | - | ชื่อจริง |
| `lname` | varchar(25) | ✗ | - | นามสกุล |
| `pstn` | varchar(20) | ✗ | - | - |
| `psswrd` | varchar(20) | ✗ | - | - |
| `image` | varchar(104) | ✓ | - | - |
| `admtype` | varchar(1) | ✗ | - | - |
| `userhosp` | varchar(5) | ✓ | - | - |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |
| `passwrd_hi7` | varchar(8) | ✓ | - | - |

---

### orstaff

**คำอธิบาย:** ข้อมูลบุคลากร

**จำนวนแถว:** 33

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `staff` | varchar(2) | ✗ | - | - |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✗ | - | ชื่อจริง |
| `lname` | varchar(25) | ✗ | - | นามสกุล |
| `pstn` | varchar(20) | ✗ | - | - |
| `psswrd` | varchar(20) | ✗ | - | - |
| `image` | longblob | ✗ | - | - |

---

### q4u_nursename

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `idconnection` | int(10) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |

---

### q4u_usernurse

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `nickname` | varchar(100) | ✓ | - | ชื่อเล่น |

---

### rcstaff

**คำอธิบาย:** ข้อมูลบุคลากร

**จำนวนแถว:** 27

**Engine:** InnoDB

**Primary Key:** `staff`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `staff` | varchar(5) | ✗ | PK | - |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✗ | - | ชื่อจริง |
| `lname` | varchar(25) | ✗ | - | นามสกุล |
| `pstn` | varchar(100) | ✓ | - | - |
| `psswrd` | varchar(20) | ✗ | - | - |
| `image` | varchar(50) | ✗ | - | - |

---

### staff_master

**คำอธิบาย:** บุคลากร (ที่เกี่ยวข้อง)

**จำนวนแถว:** 808

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | bigint(20) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `source_table` | varchar(50) | ✗ | IDX | - |
| `staff_group` | varchar(50) | ✗ | IDX | - |
| `staff_code` | varchar(100) | ✓ | IDX | รหัส staff |
| `prefix_name` | varchar(100) | ✓ | - | ชื่อ prefix |
| `first_name` | varchar(255) | ✓ | - | ชื่อ first |
| `last_name` | varchar(255) | ✓ | - | ชื่อ last |
| `full_name` | varchar(500) | ✓ | IDX | ชื่อ full |
| `display_name` | varchar(255) | ✓ | - | ชื่อ display |
| `license_no` | varchar(100) | ✓ | - | เลขที่ license |
| `register_no` | varchar(100) | ✓ | - | เลขที่ register |
| `council_code` | varchar(100) | ✓ | - | รหัส council |
| `citizen_id` | varchar(20) | ✓ | IDX | รหัส citizen |
| `sex` | varchar(20) | ✓ | - | - |
| `birth_date` | date | ✓ | - | วันเกิด |
| `specialty_code` | varchar(100) | ✓ | - | รหัส specialty |
| `provider_type` | varchar(100) | ✓ | - | ประเภท provider |
| `start_date` | date | ✓ | - | วันที่ start |
| `end_date` | date | ✓ | - | วันที่ end |
| `status_code` | varchar(100) | ✓ | - | รหัส status |
| `position_name` | varchar(255) | ✓ | - | ชื่อ position |
| `phone` | varchar(100) | ✓ | - | โทรศัพท์ |
| `line_id` | varchar(100) | ✓ | - | รหัส line |
| `login_name` | varchar(100) | ✓ | - | ชื่อ login |
| `login_password` | varchar(255) | ✓ | - | - |
| `is_staff_flag` | varchar(20) | ✓ | - | สถานะ is_staff |
| `dedup_key` | varchar(255) | ✓ | IDX | - |
| `created_at` | timestamp | ✗ | - | วันที่สร้าง |

---

### staff_master_dedup

**คำอธิบาย:** บุคลากร (ที่เกี่ยวข้อง)

**จำนวนแถว:** 730

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | bigint(20) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `source_table` | varchar(50) | ✓ | - | - |
| `staff_group` | varchar(50) | ✓ | IDX | - |
| `staff_code` | varchar(100) | ✓ | IDX | รหัส staff |
| `prefix_name` | varchar(100) | ✓ | - | ชื่อ prefix |
| `first_name` | varchar(255) | ✓ | - | ชื่อ first |
| `last_name` | varchar(255) | ✓ | - | ชื่อ last |
| `full_name` | varchar(500) | ✓ | IDX | ชื่อ full |
| `display_name` | varchar(255) | ✓ | - | ชื่อ display |
| `license_no` | varchar(100) | ✓ | - | เลขที่ license |
| `register_no` | varchar(100) | ✓ | - | เลขที่ register |
| `council_code` | varchar(100) | ✓ | - | รหัส council |
| `citizen_id` | varchar(20) | ✓ | IDX | รหัส citizen |
| `sex` | varchar(20) | ✓ | - | - |
| `birth_date` | date | ✓ | - | วันเกิด |
| `specialty_code` | varchar(100) | ✓ | - | รหัส specialty |
| `provider_type` | varchar(100) | ✓ | - | ประเภท provider |
| `start_date` | date | ✓ | - | วันที่ start |
| `end_date` | date | ✓ | - | วันที่ end |
| `status_code` | varchar(100) | ✓ | - | รหัส status |
| `position_name` | varchar(255) | ✓ | - | ชื่อ position |
| `phone` | varchar(100) | ✓ | - | โทรศัพท์ |
| `line_id` | varchar(100) | ✓ | - | รหัส line |
| `login_name` | varchar(100) | ✓ | - | ชื่อ login |
| `login_password` | varchar(255) | ✓ | - | - |
| `is_staff_flag` | varchar(20) | ✓ | - | สถานะ is_staff |
| `dedup_key` | varchar(255) | ✓ | IDX | - |
| `created_at` | timestamp | ✓ | - | วันที่สร้าง |
| `rn` | bigint(21) | ✗ | - | - |

---

### visitnursenote

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(16) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(16) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✓ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `vstdate` | date | ✓ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✓ | - | เวลาที่มารับบริการ |
| `nursenote` | longtext | ✓ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `userlogin` | varchar(5) | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |

---

### xrystaff

**คำอธิบาย:** ข้อมูลบุคลากร

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `staff`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `staff` | varchar(2) | ✗ | PK | - |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✗ | - | ชื่อจริง |
| `lname` | varchar(25) | ✗ | - | นามสกุล |
| `pstn` | varchar(20) | ✗ | - | - |
| `psswrd` | varchar(20) | ✗ | - | - |

---


## icd

### cgroup298disease_ก่อนปรับ

**คำอธิบาย:** -

**จำนวนแถว:** 298

**Engine:** MyISAM

**Primary Key:** `cgroup`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cgroup` | varchar(3) | ✗ | PK | - |
| `icd10` | varchar(250) | ✓ | - | รหัสโรค ICD-10 |
| `e_name` | varchar(200) | ✓ | - | ชื่อ e |
| `t_name` | varchar(200) | ✓ | - | ชื่อ t |

---

### checkcovid

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `icd10` | varchar(7) | ✓ | - | รหัสโรค ICD-10 |
| `vstdttm` | datetime | ✗ | - | - |

---

### cicd298group

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 16,225

**Engine:** InnoDB

**Primary Key:** `groupcode298, icd10`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `groupcode298` | varchar(10) | ✗ | PK | - |
| `icd10` | varchar(20) | ✗ | PK | รหัสโรค ICD-10 |
| `diagnameeng` | varchar(255) | ✓ | - | - |
| `diagnamethai` | varchar(255) | ✓ | - | - |

---

### codeeye

**คำอธิบาย:** -

**จำนวนแถว:** 329

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `codeeye` | int(2) | ✗ | IDX | - |
| `icd10` | varchar(7) | ✗ | - | รหัสโรค ICD-10 |

---

### diarrhea

**คำอธิบาย:** -

**จำนวนแถว:** 34

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `icd10code` | varchar(4) | ✗ | IDX | - |
| `icd10name` | varchar(100) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd10name) |

---

### disability

**คำอธิบาย:** -

**จำนวนแถว:** 1,990

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pcucode` | varchar(5) | ✗ | - | - |
| `hn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `disabid` | varchar(13) | ✗ | - | - |
| `disabtype` | varchar(1) | ✗ | - | - |
| `disabcause` | varchar(1) | ✗ | - | - |
| `icd10` | varchar(7) | ✗ | - | รหัสโรค ICD-10 |
| `date_detec` | date | ✗ | - | - |
| `date_disab` | date | ✗ | - | - |
| `d_update` | datetime | ✗ | - | - |
| `disablive` | varchar(1) | ✗ | - | - |
| `disabdth` | varchar(1) | ✗ | - | - |
| `disabgo` | varchar(1) | ✗ | - | - |
| `disaboth` | varchar(1) | ✗ | - | - |
| `disabalert` | varchar(1) | ✗ | - | - |
| `disabnote` | varchar(100) | ✗ | - | - |

---

### dpmicd10

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 185

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `maxdpmicd` | varchar(7) | ✗ | - | - |
| `mindpmicd` | varchar(7) | ✗ | - | - |
| `codedpmicd` | varchar(2) | ✗ | IDX | - |
| `amin` | int(3) | ✗ | - | - |
| `amax` | int(3) | ✗ | - | - |
| `sex` | varchar(2) | ✗ | - | - |

---

### icd101

**คำอธิบาย:** รหัสโรค ICD-10

**จำนวนแถว:** 41,846

**Engine:** MyISAM

**Primary Key:** `icd10`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icd10` | varchar(7) | ✗ | PK | รหัสโรค ICD-10 |
| `accpdx` | varchar(1) | ✗ | - | - |
| `icd10name` | varchar(90) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd10name) |
| `who` | varchar(2) | ✗ | - | - |
| `i10tm` | varchar(2) | ✗ | - | - |
| `i10tmd` | varchar(2) | ✗ | - | - |
| `chk_icd` | varchar(2) | ✗ | - | - |
| `sex` | varchar(2) | ✗ | - | - |
| `ageduse` | varchar(3) | ✗ | - | - |
| `agemin` | varchar(3) | ✗ | - | - |
| `agemax` | varchar(3) | ✗ | - | - |
| `agedmin` | varchar(3) | ✗ | - | - |
| `chronic` | varchar(2) | ✗ | - | - |
| `group21` | varchar(7) | ✗ | - | กลุ่ม (คอลัมน์ group21) |
| `name_t` | varchar(90) | ✗ | - | - |
| `code_cat` | varchar(2) | ✗ | - | - |
| `spclty` | varchar(2) | ✗ | - | สาขา y |
| `icd_use` | varchar(1) | ✗ | - | - |
| `group_298_disease` | varchar(3) | ✗ | - | - |
| `rdu_uri` | varchar(1) | ✓ | - | - |
| `rdu_age` | varchar(1) | ✓ | - | - |
| `rdu_derm` | varchar(1) | ✓ | - | - |
| `rtnno` | int(11) | ✓ | - | - |

---

### icd101_NEW

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 41,716

**Engine:** MyISAM

**Primary Key:** `icd10`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icd10` | varchar(7) | ✗ | PK | รหัสโรค ICD-10 |
| `accpdx` | varchar(1) | ✗ | - | - |
| `icd10name` | varchar(90) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd10name) |
| `who` | varchar(2) | ✗ | - | - |
| `i10tm` | varchar(2) | ✗ | - | - |
| `i10tmd` | varchar(2) | ✗ | - | - |
| `chk_icd` | varchar(2) | ✗ | - | - |
| `sex` | varchar(2) | ✗ | - | - |
| `ageduse` | varchar(3) | ✗ | - | - |
| `agemin` | varchar(3) | ✗ | - | - |
| `agemax` | varchar(3) | ✗ | - | - |
| `agedmin` | varchar(3) | ✗ | - | - |
| `chronic` | varchar(2) | ✗ | - | - |
| `group21` | varchar(7) | ✗ | - | กลุ่ม (คอลัมน์ group21) |
| `name_t` | varchar(90) | ✗ | - | - |
| `code_cat` | varchar(2) | ✗ | - | - |
| `spclty` | varchar(2) | ✗ | - | สาขา y |
| `icd_use` | varchar(1) | ✗ | - | - |
| `group_298_disease` | varchar(3) | ✗ | - | - |

---

### icd102

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 8,834

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `icd10` | varchar(7) | ✗ | IDX | รหัสโรค ICD-10 |
| `kwcode` | varchar(4) | ✗ | IDX | - |

---

### icd103

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 7,139

**Engine:** MyISAM

**Primary Key:** `kwcode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `descs` | varchar(41) | ✗ | - | - |
| `kwcode` | varchar(4) | ✗ | PK | - |

---

### icd1032

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 7,273

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `descs` | varchar(41) | ✗ | - | - |
| `kwcode` | varchar(4) | ✗ | - | - |

---

### icd9cm

**คำอธิบาย:** รหัสหัตถการ

**จำนวนแถว:** 4,212

**Engine:** MyISAM

**Primary Key:** `icd9cm`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icd9cm` | varchar(7) | ✗ | PK | รหัสหัตถการ ICD-9-CM |
| `icd9name` | varchar(90) | ✗ | IDX | ชื่อโรค ICD (คอลัมน์ icd9name) |
| `etype` | varchar(100) | ✗ | - | - |

---

### icd9cm2

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 499

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `icd9cm` | varchar(7) | ✗ | - | รหัสหัตถการ ICD-9-CM |
| `icd9name` | varchar(90) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd9name) |
| `prcdname` | varchar(90) | ✗ | - | - |
| `special` | varchar(5) | ✗ | - | - |
| `price` | varchar(5) | ✗ | - | ราคา |
| `rw` | varchar(5) | ✗ | - | - |

---

### icd9dent

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 837

**Engine:** InnoDB

**Primary Key:** `code_tx`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code_tx` | varchar(7) | ✗ | PK | - |
| `group_tx` | varchar(100) | ✓ | - | - |
| `icd9` | varchar(9) | ✓ | - | รหัสหัตถการ ICD-9 |
| `name_Tx` | varchar(255) | ✓ | - | - |
| `ICD10TM` | varchar(9) | ✓ | IDX | - |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### icd9dent_new

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 675

**Engine:** InnoDB

**Primary Key:** `code_tx`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code_tx` | varchar(7) | ✗ | PK | - |
| `group_tx` | varchar(100) | ✓ | - | - |
| `icd9` | varchar(9) | ✓ | - | รหัสหัตถการ ICD-9 |
| `name_Tx` | varchar(255) | ✓ | - | - |
| `ICD10TM` | varchar(9) | ✓ | IDX | - |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### icd9pthai

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 471

**Engine:** InnoDB

**Primary Key:** `icd9cm`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icd9cm` | varchar(7) | ✗ | PK | รหัสหัตถการ ICD-9-CM |
| `code` | varchar(255) | ✓ | - | รหัส |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `ptref` | varchar(100) | ✓ | - | ผู้ป่วย ref |

---

### icdcm1

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 3,873

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icd9name` | varchar(90) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd9name) |
| `icd9cm` | varchar(8) | ✓ | IDX | รหัสหัตถการ ICD-9-CM |
| `drguse` | varchar(1) | ✗ | - | - |

---

### icdcm2

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 5,567

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `icd9cm` | varchar(7) | ✗ | - | รหัสหัตถการ ICD-9-CM |
| `kwcode` | varchar(4) | ✗ | IDX | - |

---

### icdcm3

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 4,853

**Engine:** MyISAM

**Primary Key:** `kwcode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `kwcode` | varchar(4) | ✗ | PK | - |
| `descs` | varchar(41) | ✗ | - | - |

---

### icdda

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 2,196

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameicdda` | varchar(70) | ✗ | IDX | - |
| `codeicdda` | varchar(7) | ✗ | IDX | - |
| `cgd` | varchar(5) | ✗ | - | - |

---

### ioprt

**คำอธิบาย:** -

**จำนวนแถว:** 90,610

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `date` | date | ✗ | IDX | วันที่ |
| `time` | int(4) | ✗ | IDX | เวลา |
| `dct` | varchar(5) | ✓ | - | - |
| `orno` | int(8) | ✗ | - | - |
| `icd9cm` | varchar(32) | ✗ | - | รหัสหัตถการ ICD-9-CM |
| `ext_code` | varchar(40) | ✓ | - | รหัส ext |
| `icd9name` | varchar(90) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd9name) |
| `optype` | varchar(1) | ✗ | - | - |
| `charge` | int(5) | ✗ | - | - |
| `oppnote` | longtext | ✗ | - | - |
| `rcptno` | int(8) | ✗ | - | - |
| `codeicd9id` | varchar(7) | ✓ | - | - |
| `qty` | int(6) | ✓ | - | จำนวน |
| `order_by` | varchar(100) | ✓ | - | - |

---

### irfr

**คำอธิบาย:** -

**จำนวนแถว:** 1,913

**Engine:** InnoDB

**Primary Key:** `rfrno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rfrno` | int(8) | ✗ | PK | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `rgtdate` | date | ✗ | - | - |
| `rfrlct` | varchar(6) | ✗ | - | - |
| `icd10` | varchar(7) | ✗ | - | รหัสโรค ICD-10 |
| `rfrcs` | varchar(1) | ✗ | - | - |

---

### l_fund

**คำอธิบาย:** -

**จำนวนแถว:** 30

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `fund_name` | varchar(255) | ✗ | - | ชื่อ fund |
| `pttype` | varchar(255) | ✗ | - | ประเภทสิทธิ |
| `min_age` | int(11) | ✗ | - | - |
| `max_age` | int(11) | ✗ | - | - |
| `inscl` | varchar(3) | ✗ | - | - |
| `inst` | int(11) | ✗ | - | - |
| `tmt` | varchar(255) | ✗ | - | - |
| `icd10_pdx` | varchar(255) | ✗ | - | - |
| `icd10_sdx` | varchar(255) | ✗ | - | - |
| `icd9` | varchar(255) | ✗ | - | รหัสหัตถการ ICD-9 |
| `d_update` | timestamp | ✗ | - | - |
| `opsql` | text | ✗ | - | - |
| `ipsql` | text | ✗ | - | - |
| `sex` | varchar(1) | ✗ | - | - |
| `project_code` | varchar(10) | ✓ | - | รหัส project |
| `audit_data` | text | ✓ | - | - |
| `ucae` | varchar(1) | ✓ | - | - |
| `in_area` | varchar(1) | ✓ | - | - |
| `empty_pttype` | varchar(1) | ✓ | - | - |
| `ae_type` | varchar(1) | ✓ | - | ประเภท ae |
| `emtype` | varchar(1) | ✓ | - | - |

---

### l_fund_

**คำอธิบาย:** -

**จำนวนแถว:** 42

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `fund_name` | varchar(255) | ✗ | - | ชื่อ fund |
| `pttype` | varchar(255) | ✗ | - | ประเภทสิทธิ |
| `min_age` | int(11) | ✗ | - | - |
| `max_age` | int(11) | ✗ | - | - |
| `sex` | varchar(1) | ✓ | - | - |
| `inscl` | varchar(3) | ✗ | - | - |
| `inst` | int(11) | ✗ | - | - |
| `tmt` | varchar(255) | ✗ | - | - |
| `icd10_pdx` | varchar(255) | ✗ | - | - |
| `icd10_sdx` | varchar(255) | ✗ | - | - |
| `icd9` | varchar(255) | ✗ | - | รหัสหัตถการ ICD-9 |
| `d_update` | timestamp | ✗ | - | - |
| `opsql` | text | ✗ | - | - |
| `ipsql` | text | ✗ | - | - |
| `project_code` | varchar(10) | ✓ | - | รหัส project |

---

### l_fund_200467

**คำอธิบาย:** -

**จำนวนแถว:** 22

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `fund_name` | varchar(255) | ✗ | - | ชื่อ fund |
| `pttype` | varchar(255) | ✗ | - | ประเภทสิทธิ |
| `min_age` | int(11) | ✗ | - | - |
| `max_age` | int(11) | ✗ | - | - |
| `inscl` | varchar(3) | ✗ | - | - |
| `inst` | int(11) | ✗ | - | - |
| `tmt` | varchar(255) | ✗ | - | - |
| `icd10_pdx` | varchar(255) | ✗ | - | - |
| `icd10_sdx` | varchar(255) | ✗ | - | - |
| `icd9` | varchar(255) | ✗ | - | รหัสหัตถการ ICD-9 |
| `d_update` | timestamp | ✗ | - | - |
| `opsql` | text | ✗ | - | - |
| `ipsql` | text | ✗ | - | - |
| `sex` | varchar(1) | ✗ | - | - |
| `project_code` | varchar(10) | ✓ | - | รหัส project |
| `audit_data` | text | ✓ | - | - |
| `ucae` | varchar(1) | ✓ | - | - |

---

### l_icd10

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 38,196

**Engine:** InnoDB

**Primary Key:** `CODE`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `CODE` | varchar(6) | ✗ | PK | รหัส |
| `VALID` | varchar(1) | ✓ | - | - |
| `DESC_ENG` | varchar(300) | ✓ | IDX | - |
| `DESC_THAI` | varchar(300) | ✓ | IDX | - |
| `WHO` | varchar(1) | ✓ | - | - |
| `10TM` | varchar(1) | ✓ | - | - |
| `10TMD` | varchar(1) | ✓ | - | - |
| `CHK_ICD` | varchar(1) | ✓ | - | - |
| `SEX` | varchar(1) | ✓ | - | - |
| `AGEDUSE` | varchar(3) | ✓ | - | - |
| `AGEMIN` | varchar(3) | ✓ | - | - |
| `AGEMAX` | varchar(3) | ✓ | - | - |
| `AGEDMIN` | varchar(255) | ✓ | - | - |
| `CHRONIC` | varchar(1) | ✓ | IDX | - |
| `GROUP21` | varchar(2) | ✓ | - | กลุ่ม (คอลัมน์ GROUP21) |
| `STATUS` | varchar(1) | ✓ | - | สถานะ |
| `DATEEXPIRE` | varchar(10) | ✓ | - | - |
| `USED` | varchar(1) | ✓ | - | - |
| `ABB` | varchar(20) | ✓ | - | - |
| `DESC_R` | varchar(300) | ✓ | IDX | - |
| `DESC_T` | varchar(300) | ✓ | IDX | - |

---

### l_icd9cm-icd10tm

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 16,894

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icd10_tm` | varchar(7) | ✗ | - | - |
| `icd9_cm` | varchar(5) | ✓ | - | - |
| `anatomy` | varchar(4) | ✓ | - | - |
| `root` | varchar(3) | ✓ | - | - |
| `procedure` | varchar(5) | ✓ | - | - |
| `desc` | varchar(255) | ✓ | - | - |

---

### l_popupdiagnosis

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 22

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `icd10name` | varchar(90) | ✓ | - | ชื่อโรค ICD (คอลัมน์ icd10name) |
| `mindx` | varchar(5) | ✓ | IDX | - |
| `maxdx` | varchar(5) | ✓ | IDX | - |
| `comments` | varchar(100) | ✓ | - | - |

---

### lchronic

**คำอธิบาย:** -

**จำนวนแถว:** 1,041

**Engine:** InnoDB

**Primary Key:** `icd10`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icd10` | varchar(7) | ✗ | PK | รหัสโรค ICD-10 |
| `cvticd10` | varchar(7) | ✓ | - | - |
| `desc_e` | varchar(72) | ✓ | - | - |
| `desc_t` | varchar(61) | ✓ | - | - |
| `dmht` | varchar(1) | ✓ | - | - |

---

### op

**คำอธิบาย:** -

**จำนวนแถว:** 199

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `orno` | int(8) | ✗ | IDX | - |
| `icd9cm` | varchar(4) | ✗ | - | รหัสหัตถการ ICD-9-CM |
| `side` | varchar(10) | ✗ | - | - |
| `codeicd9id` | varchar(7) | ✓ | - | - |

---

### oprt

**คำอธิบาย:** การผ่าตัด

**จำนวนแถว:** 1,682,120

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `opdttm` | datetime | ✗ | IDX | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `icd9cm` | varchar(7) | ✗ | - | รหัสหัตถการ ICD-9-CM |
| `icd9name` | varchar(90) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd9name) |
| `dct` | varchar(5) | ✓ | - | - |
| `orno` | int(8) | ✗ | - | - |
| `charge` | int(5) | ✗ | - | - |
| `oppnote` | longtext | ✗ | - | - |
| `rcptno` | int(8) | ✗ | - | - |
| `codeicd9id` | varchar(7) | ✓ | - | - |
| `qty` | int(6) | ✓ | - | จำนวน |

---

### orfri

**คำอธิบาย:** -

**จำนวนแถว:** 4,456

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `rfrno` | varchar(10) | ✗ | - | - |
| `rfrlct` | varchar(6) | ✗ | - | - |
| `icd10` | varchar(7) | ✗ | - | รหัสโรค ICD-10 |
| `rfrcs` | varchar(2) | ✓ | - | - |
| `accdate` | date | ✗ | - | - |
| `acctime` | int(4) | ✗ | - | - |
| `sendtype` | varchar(1) | ✗ | - | - |
| `emsnote` | varchar(40) | ✗ | - | - |
| `emscode` | varchar(2) | ✗ | - | - |
| `emsname` | varchar(40) | ✗ | - | - |
| `rfrtype` | varchar(2) | ✓ | - | - |
| `refer_no` | varchar(20) | ✓ | - | เลขที่ refer |

---

### orfupr

**คำอธิบาย:** -

**จำนวนแถว:** 119

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `opdetil` | varchar(200) | ✗ | - | - |
| `rgtno` | int(11) | ✗ | - | - |
| `icd9cm` | varchar(7) | ✗ | - | รหัสหัตถการ ICD-9-CM |
| `icd9name` | varchar(90) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd9name) |
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `codeicd9id` | varchar(7) | ✓ | - | - |

---

### ors

**คำอธิบาย:** -

**จำนวนแถว:** 145

**Engine:** MyISAM

**Primary Key:** `orno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orno` | int(8) | ✗ | PK | - |
| `vn` | int(11) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `preopdx` | varchar(7) | ✓ | - | - |
| `postopdx` | varchar(7) | ✓ | - | - |
| `opdate` | date | ✓ | - | - |
| `asaps` | varchar(1) | ✓ | - | - |
| `ans_comp` | varchar(2) | ✓ | - | - |
| `optype` | varchar(1) | ✓ | - | - |
| `surgtype` | varchar(2) | ✓ | - | - |
| `sur_comp` | varchar(2) | ✓ | - | - |
| `lrcv_room` | int(2) | ✓ | - | - |
| `charge` | int(6) | ✗ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `preopdx2` | varchar(7) | ✓ | - | - |
| `postopdx2` | varchar(7) | ✓ | - | - |
| `ansstrdate` | datetime | ✓ | - | - |
| `ansstpdate` | datetime | ✓ | - | - |
| `opstrdate` | datetime | ✓ | - | - |
| `opstpdate` | datetime | ✓ | - | - |
| `dct2` | varchar(5) | ✓ | - | - |
| `icd9val1` | int(5) | ✗ | - | - |
| `icd9val2` | int(5) | ✗ | - | - |
| `icd9val3` | int(5) | ✗ | - | - |
| `icd9val4` | int(5) | ✗ | - | - |
| `icd9val5` | int(5) | ✗ | - | - |
| `ansval1` | int(5) | ✗ | - | - |
| `ansval2` | int(5) | ✗ | - | - |
| `ansval3` | int(5) | ✗ | - | - |
| `anes` | int(1) | ✗ | - | - |
| `scrub` | int(1) | ✗ | - | - |
| `rgtno` | int(11) | ✓ | - | - |

---

### report_op_diag

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cgroup` | int(1) | ✗ | - | - |
| `e_name` | int(1) | ✗ | - | ชื่อ e |
| `icd10` | int(1) | ✗ | - | รหัสโรค ICD-10 |
| `t_name` | int(1) | ✗ | - | ชื่อ t |
| `total` | int(1) | ✗ | - | รวม |

---

### rtn

**คำอธิบาย:** -

**จำนวนแถว:** 497

**Engine:** MyISAM

**Primary Key:** `rtnno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rtnno` | int(4) | ✗ | PK | - |
| `namertn` | varchar(30) | ✗ | IDX | - |
| `dct` | varchar(5) | ✓ | - | - |
| `icd10` | varchar(7) | ✗ | - | รหัสโรค ICD-10 |
| `status_flg` | enum('Y','N') | ✓ | - | - |
| `subicd10` | varchar(40) | ✓ | - | - |

---

### toydm

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `mindate` | int(1) | ✗ | - | - |
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `icd10` | int(1) | ✗ | - | รหัสโรค ICD-10 |
| `ln` | int(1) | ✗ | - | - |
| `fbs` | int(1) | ✗ | - | - |

---

### toyht

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `mindate` | int(1) | ✗ | - | - |
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `icd10` | int(1) | ✗ | - | รหัสโรค ICD-10 |
| `icd10name` | int(1) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd10name) |

---

### uri

**คำอธิบาย:** -

**จำนวนแถว:** 51

**Engine:** InnoDB

**Primary Key:** `icd10code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icd10code` | varchar(4) | ✗ | PK | - |
| `icd10name` | varchar(100) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd10name) |

---

### visitdiagtext

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 67

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `diagtext` | varchar(100) | ✗ | - | - |

---


## insurance

### insure

**คำอธิบาย:** ประกัน

**จำนวนแถว:** 476,475

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(20) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `pop_id` | varchar(13) | ✗ | IDX | รหัส pop |
| `card_id` | varchar(17) | ✗ | - | รหัส card |
| `pttype` | varchar(2) | ✗ | IDX | ประเภทสิทธิ |
| `datein` | date | ✗ | - | - |
| `dateexp` | date | ✗ | - | - |
| `hospmain` | varchar(5) | ✗ | - | - |
| `hospsub` | varchar(5) | ✗ | - | - |
| `note` | varchar(255) | ✗ | - | บันทึก |
| `notedate` | date | ✗ | - | - |

---

### insure_copy1

**คำอธิบาย:** -

**จำนวนแถว:** 301,941

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | varchar(20) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `pop_id` | varchar(13) | ✗ | IDX | รหัส pop |
| `card_id` | varchar(17) | ✗ | - | รหัส card |
| `pttype` | varchar(2) | ✗ | IDX | ประเภทสิทธิ |
| `datein` | date | ✗ | - | - |
| `dateexp` | date | ✗ | - | - |
| `hospmain` | varchar(5) | ✗ | - | - |
| `hospsub` | varchar(5) | ✗ | - | - |
| `note` | varchar(50) | ✗ | - | บันทึก |
| `notedate` | date | ✗ | - | - |

---

### insure_copy2

**คำอธิบาย:** -

**จำนวนแถว:** 306,438

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | varchar(20) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `pop_id` | varchar(13) | ✗ | IDX | รหัส pop |
| `card_id` | varchar(17) | ✗ | - | รหัส card |
| `pttype` | varchar(2) | ✗ | IDX | ประเภทสิทธิ |
| `datein` | date | ✗ | - | - |
| `dateexp` | date | ✗ | - | - |
| `hospmain` | varchar(5) | ✗ | - | - |
| `hospsub` | varchar(5) | ✗ | - | - |
| `note` | varchar(255) | ✗ | - | บันทึก |
| `notedate` | date | ✗ | - | - |

---


## inventory

### ccd_dispense_items

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|

---

### debt

**คำอธิบาย:** -

**จำนวนแถว:** 19

**Engine:** InnoDB

**Primary Key:** `debt_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `debt_id` | int(10) unsigned | ✗ | PK | รหัส debt |
| `hn` | int(11) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(11) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `debt_datetime` | datetime | ✗ | - | - |
| `debt_account_id` | int(11) | ✗ | - | รหัส debt_account |
| `debt_item_code` | varchar(2) | ✗ | - | รหัส debt_item |
| `inscl_main_code` | varchar(5) | ✗ | - | รหัส inscl_main |
| `inscl_sub_code` | varchar(5) | ✓ | - | รหัส inscl_sub |
| `authen_code` | varchar(20) | ✓ | - | รหัส authen |
| `approve_code` | varchar(20) | ✓ | - | รหัส approve |
| `item_code` | varchar(255) | ✗ | - | รหัส item |
| `item_name` | varchar(255) | ✗ | - | ชื่อ item |
| `item_cost` | decimal(10,2) | ✗ | - | - |
| `item_qty` | int(11) | ✗ | - | - |
| `item_total_cost` | decimal(10,2) | ✗ | - | - |
| `item_ref_code` | char(255) | ✓ | - | รหัส item_ref |
| `item_paid` | decimal(10,2) | ✓ | - | - |
| `receipt_id` | int(11) | ✓ | - | รหัส receipt |
| `debt_confirm_by_user_id` | int(11) | ✓ | - | รหัส debt_confirm_by_user |
| `d_update` | timestamp | ✓ | - | - |

---

### debt_item

**คำอธิบาย:** -

**จำนวนแถว:** 20

**Engine:** InnoDB

**Primary Key:** `debt_item_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `debt_item_code` | varchar(2) | ✗ | PK | รหัส debt_item |
| `debt_item_name` | varchar(255) | ✗ | - | ชื่อ debt_item |
| `deb_item_ss_code` | varchar(2) | ✓ | - | รหัส deb_item_ss |
| `is_active` | enum('N','Y') | ✓ | - | ใช้งานอยู่ |
| `d_update` | timestamp | ✓ | - | - |

---

### l_itemserviceoth

**คำอธิบาย:** -

**จำนวนแถว:** 28

**Engine:** InnoDB

**Primary Key:** `codeservid`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codeservid` | int(5) | ✗ | PK | - |
| `nameserv` | varchar(50) | ✓ | - | - |
| `income` | varchar(2) | ✓ | - | รายได้ |
| `cgd` | varchar(7) | ✓ | - | - |
| `charge` | decimal(9,2) | ✓ | - | - |
| `adp_code` | varchar(20) | ✓ | - | รหัส adp |
| `adp_type` | varchar(2) | ✓ | - | ประเภท adp |
| `is_active` | varchar(1) | ✓ | - | ใช้งานอยู่ |

---

### nhso_adp_code

**คำอธิบาย:** -

**จำนวนแถว:** 5,992

**Engine:** InnoDB

**Primary Key:** `nhso_adp_code, nhso_adp_type_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `nhso_adp_code` | varchar(15) | ✗ | PK | รหัส nhso_adp |
| `nhso_adp_type_id` | int(11) | ✗ | PK | รหัส nhso_adp_type |
| `nhso_adp_code_name` | varchar(200) | ✓ | - | ชื่อ nhso_adp_code |
| `OFC` | double(15,2) | ✓ | - | - |
| `LGO` | double(15,2) | ✓ | - | - |
| `SSS` | double(15,2) | ✓ | - | - |
| `UCS` | double(15,2) | ✓ | - | - |
| `fs` | double(7,2) | ✓ | - | - |
| `TMLT` | varchar(25) | ✓ | - | - |
| `PPFS` | double(15,2) | ✓ | - | - |
| `DRG_Chrgitem_ID` | varchar(2) | ✓ | IDX | รหัส drg_chrgitem |

---

### nondrugitems

**คำอธิบาย:** รายการไม่ใช่ยา

**จำนวนแถว:** 2,000

**Engine:** InnoDB

**Primary Key:** `icode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icode` | varchar(7) | ✗ | PK | - |
| `name` | varchar(200) | ✓ | IDX | ชื่อ |
| `price` | double(22,3) | ✓ | - | ราคา |
| `income` | varchar(2) | ✓ | IDX | รายได้ |
| `xrayfilm` | varchar(150) | ✓ | - | - |
| `icd9cm` | varchar(7) | ✓ | - | รหัสหัตถการ ICD-9-CM |
| `iflag` | varchar(50) | ✓ | IDX | - |
| `vorder` | int(11) | ✓ | - | - |
| `note` | varchar(50) | ✓ | IDX | บันทึก |
| `use_right` | char(1) | ✓ | - | - |
| `i_type` | char(1) | ✓ | - | ประเภท i |
| `must_paid` | char(1) | ✓ | - | - |
| `paidst` | char(2) | ✓ | - | - |
| `ipd_price` | double(15,3) | ✓ | - | - |
| `unitcost` | double(15,3) | ✓ | - | - |
| `organ_code` | varchar(10) | ✓ | - | รหัส organ |
| `displaycolor` | int(11) | ✓ | - | - |
| `istatus` | char(1) | ✓ | - | - |
| `price3` | double(15,3) | ✓ | - | ราคา (คอลัมน์ price3) |
| `price2` | double(15,3) | ✓ | - | ราคา (คอลัมน์ price2) |
| `ipd_price2` | double(15,3) | ✓ | - | - |
| `ipd_price3` | double(15,3) | ✓ | - | - |
| `price_lock` | char(1) | ✓ | - | - |
| `unit` | varchar(100) | ✓ | - | หน่วย |
| `icode_guid` | varchar(38) | ✓ | IDX | - |
| `billcode` | varchar(10) | ✓ | IDX | - |
| `billnumber` | varchar(15) | ✓ | - | - |
| `detail` | varchar(250) | ✓ | - | - |
| `oldcode` | varchar(15) | ✓ | IDX | - |
| `ext_icode` | varchar(7) | ✓ | - | - |
| `charge_paidst` | char(2) | ✓ | - | - |
| `lockprint` | char(1) | ✓ | - | - |
| `rx_unique` | char(1) | ✓ | - | ใบสั่งยา _unique |
| `item_is_df` | char(1) | ✓ | - | - |
| `df_type_id` | int(11) | ✓ | - | รหัส df_type |
| `item_subtype_id` | int(11) | ✓ | - | รหัส item_subtype |
| `ename` | varchar(150) | ✓ | - | - |
| `no_remed` | char(1) | ✓ | - | - |
| `remove_when_admit` | char(1) | ✓ | - | - |
| `df_percent` | double(15,3) | ✓ | - | - |
| `max_price` | double(15,3) | ✓ | - | - |
| `drugusage` | varchar(10) | ✓ | - | - |
| `no_ipd_transfer` | char(1) | ✓ | IDX | - |
| `no_discount` | char(1) | ✓ | IDX | - |
| `df_search_code` | varchar(10) | ✓ | - | รหัส df_search |
| `print_sticker_header` | char(1) | ✓ | - | - |
| `no_substock` | char(1) | ✓ | - | - |
| `ipd_default_pay` | int(11) | ✓ | - | - |
| `hospital_highcost_code` | varchar(15) | ✓ | - | รหัส hospital_highcost |
| `lockprint_ipd` | char(1) | ✓ | - | - |
| `enable_sks_opd` | char(1) | ✓ | IDX | - |
| `enable_sks_ipd` | char(1) | ✓ | IDX | - |
| `hos_guid` | varchar(38) | ✓ | - | - |
| `show_notify` | char(1) | ✓ | - | - |
| `show_notify_text` | text | ✓ | - | - |
| `sks_coverage_price` | double(15,3) | ✓ | - | - |
| `sks_product_category_id` | int(11) | ✓ | - | รหัส sks_product_category |
| `hos_guid_ext` | varchar(64) | ✓ | IDX | - |
| `nhso_adp_type_id` | int(11) | ✓ | - | รหัส nhso_adp_type |
| `nhso_adp_code` | varchar(15) | ✓ | IDX | รหัส nhso_adp |
| `extra_unitcost` | double(15,3) | ✓ | - | - |
| `property_text` | text | ✓ | - | - |
| `objctive_text` | text | ✓ | - | - |
| `vat_percent` | double(15,3) | ✓ | - | - |
| `use_paidst` | char(1) | ✓ | - | - |
| `inv_map_update` | char(1) | ✓ | - | - |
| `fwf_item_id` | int(11) | ✓ | - | รหัส fwf_item |
| `limit_pttype` | char(1) | ✓ | - | - |
| `sub_income` | varchar(3) | ✓ | - | - |
| `nondrugitems_type_id` | int(11) | ✓ | - | รหัส nondrugitems_type |
| `highcost` | varchar(1) | ✓ | - | - |
| `ucef_code` | varchar(20) | ✓ | - | รหัส ucef |
| `lockprice` | char(1) | ✓ | - | - |
| `tpu_code_list` | varchar(200) | ✓ | - | - |
| `is_accm` | char(1) | ✓ | - | เป็นaccm หรือไม่ |
| `is_food` | char(1) | ✓ | - | เป็นfood หรือไม่ |
| `displaycolor_focus` | int(11) | ✓ | - | - |
| `last_update` | datetime | ✓ | - | - |
| `charge_service_opd` | char(1) | ✓ | - | - |
| `charge_service_ipd` | char(1) | ✓ | - | - |
| `state_item_id` | int(11) | ✓ | - | รหัส state_item |
| `lock_pttype` | char(1) | ✓ | - | - |
| `lock_pttype_code` | char(2) | ✓ | - | รหัส lock_pttype |
| `sks_drug_code` | varchar(25) | ✓ | - | รหัส sks_drug |
| `multiply_charge_service` | char(1) | ✓ | - | - |
| `csmbs_claim_cat` | varchar(1) | ✓ | - | - |
| `simb_2005` | varchar(10) | ✓ | - | - |
| `default_qty` | int(11) | ✓ | - | - |
| `max_qty` | int(11) | ✓ | - | - |
| `sks_rev_date` | date | ✓ | - | วันที่ sks_rev |
| `default_qty_ipd` | int(11) | ✓ | - | - |
| `max_qty_ipd` | int(11) | ✓ | - | - |
| `tmlt_code` | varchar(10) | ✓ | - | รหัส tmlt |
| `sks_claim_category_type_id` | int(11) | ✓ | - | รหัส sks_claim_category_type |
| `drg_chrgitem_id` | varchar(2) | ✓ | - | รหัส drg_chrgitem |

---

### ssop_dispenseditem

**คำอธิบาย:** -

**จำนวนแถว:** 701

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `DispID` | varchar(20) | ✗ | IDX | - |
| `PrdCat` | char(1) | ✓ | - | - |
| `Hospdrgid` | varchar(20) | ✓ | - | - |
| `DrgID` | varchar(20) | ✗ | - | - |
| `dfsCode` | varchar(20) | ✓ | - | - |
| `dfsText` | varchar(20) | ✓ | - | - |
| `Packsize` | varchar(20) | ✓ | - | - |
| `sigCode` | varchar(20) | ✓ | - | - |
| `sigText` | varchar(20) | ✓ | - | - |
| `Quantity` | int(5) | ✓ | - | จำนวน |
| `UnitPrice` | decimal(10,2) | ✓ | - | ราคาต่อหน่วย |
| `ChargeAmt` | decimal(10,2) | ✓ | - | - |
| `ReimbPrice` | decimal(10,2) | ✓ | - | - |
| `ReimbAmt` | decimal(10,2) | ✓ | - | - |
| `PrdSeCode` | char(1) | ✓ | - | - |
| `Claimcont` | varchar(10) | ✓ | - | - |
| `ClaimCat` | varchar(10) | ✓ | - | - |
| `MultiDisp` | varchar(10) | ✓ | - | - |
| `SupplyFor` | varchar(10) | ✓ | - | - |
| `status_flg` | enum('A','C','D') | ✓ | - | - |
| `export_code` | enum('SS','CS') | ✓ | - | รหัส export |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |

---

### standing_order_items

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `standing_order_id` | int(11) | ✗ | - | รหัส standing_order |
| `item_code` | varchar(15) | ✓ | - | รหัส item |
| `item_name` | varchar(255) | ✓ | - | ชื่อ item |
| `item_group` | varchar(2) | ✓ | - | - |
| `item_usage` | varchar(10) | ✓ | - | - |
| `item_usage_name` | varchar(255) | ✓ | - | ชื่อ item_usage |
| `item_qty` | int(11) | ✓ | - | - |
| `is_active` | varchar(1) | ✓ | - | ใช้งานอยู่ |
| `order_type` | varchar(1) | ✓ | - | ประเภท order |

---

### visititemoth

**คำอธิบาย:** -

**จำนวนแถว:** 12,807

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✓ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `codeservid` | varchar(5) | ✓ | - | - |
| `charge` | int(5) | ✓ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `codecheck` | varchar(20) | ✓ | - | - |
| `qty` | int(6) | ✓ | - | จำนวน |
| `d_update` | datetime | ✓ | - | - |

---


## ipd

### IPD50_1

**คำอธิบาย:** -

**จำนวนแถว:** 5,950

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN1` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน 1 |
| `HN1` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย 1 |
| `fullname1` | varchar(255) | ✓ | - | - |
| `Admit` | varchar(255) | ✓ | - | - |
| `เวลา Admit` | varchar(255) | ✓ | - | - |
| `เตียง` | varchar(255) | ✓ | - | - |
| `ตึก` | varchar(255) | ✓ | - | - |
| `ชื่อตึก` | varchar(255) | ✓ | - | - |
| `วัน D / C` | varchar(255) | ✓ | - | - |
| `DX` | varchar(255) | ✓ | - | - |
| `แพทย์` | varchar(255) | ✓ | - | - |
| `สิทธิการรักษา` | varchar(255) | ✓ | - | - |

---

### IPD51_1

**คำอธิบาย:** -

**จำนวนแถว:** 6,521

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fullname` | varchar(255) | ✓ | - | - |
| `Admit` | varchar(255) | ✓ | - | - |
| `เวลา Admit` | varchar(255) | ✓ | - | - |
| `เตียง` | varchar(255) | ✓ | - | - |
| `ตึก` | varchar(255) | ✓ | - | - |
| `ชื่อตึก` | varchar(255) | ✓ | - | - |
| `วัน D / C` | varchar(255) | ✓ | - | - |
| `DX` | varchar(255) | ✓ | - | - |
| `แพทย์` | varchar(255) | ✓ | - | - |
| `สิทธิการรักษา` | varchar(255) | ✓ | - | - |

---

### IPD52_1

**คำอธิบาย:** -

**จำนวนแถว:** 6,656

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fullname` | varchar(255) | ✓ | - | - |
| `Admit` | varchar(255) | ✓ | - | - |
| `เวลา Admit` | varchar(255) | ✓ | - | - |
| `เตียง` | varchar(255) | ✓ | - | - |
| `ตึก` | varchar(255) | ✓ | - | - |
| `ชื่อตึก` | varchar(255) | ✓ | - | - |
| `วัน D / C` | varchar(255) | ✓ | - | - |
| `DX` | varchar(255) | ✓ | - | - |
| `แพทย์` | varchar(255) | ✓ | - | - |
| `สิทธิการรักษา` | varchar(255) | ✓ | - | - |

---

### IPD53_1

**คำอธิบาย:** -

**จำนวนแถว:** 7,320

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fullname` | varchar(255) | ✓ | - | - |
| `Admit` | varchar(255) | ✓ | - | - |
| `เวลา Admit` | varchar(255) | ✓ | - | - |
| `เตียง` | varchar(255) | ✓ | - | - |
| `ตึก` | varchar(255) | ✓ | - | - |
| `ชื่อตึก` | varchar(255) | ✓ | - | - |
| `วัน D / C` | varchar(255) | ✓ | - | - |
| `DX` | varchar(255) | ✓ | - | - |
| `แพทย์` | varchar(255) | ✓ | - | - |
| `สิทธิการรักษา` | varchar(255) | ✓ | - | - |

---

### IPD54_1

**คำอธิบาย:** -

**จำนวนแถว:** 5,611

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fullname` | varchar(255) | ✓ | - | - |
| `Admit` | varchar(255) | ✓ | - | - |
| `เวลา Admit` | varchar(255) | ✓ | - | - |
| `เตียง` | varchar(255) | ✓ | - | - |
| `ตึก` | varchar(255) | ✓ | - | - |
| `ชื่อตึก` | varchar(255) | ✓ | - | - |
| `วัน D / C` | varchar(255) | ✓ | - | - |
| `DX` | varchar(255) | ✓ | - | - |
| `แพทย์` | varchar(255) | ✓ | - | - |
| `สิทธิการรักษา` | varchar(255) | ✓ | - | - |

---

### IPD56n

**คำอธิบาย:** -

**จำนวนแถว:** 6,242

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fullname` | varchar(255) | ✓ | - | - |
| `brthdate` | varchar(255) | ✓ | - | - |
| `rgtdate` | varchar(255) | ✓ | - | - |
| `Admit` | varchar(255) | ✓ | - | - |
| `cnt_year` | varchar(255) | ✓ | - | - |
| `cnt_month` | varchar(255) | ✓ | - | - |
| `cnt_day` | varchar(255) | ✓ | - | - |

---

### Mrs_ssDATA_IPD

**คำอธิบาย:** -

**จำนวนแถว:** 782

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(5) | ✗ | PK | รหัสประจำ (Primary Key) |
| `AN` | varchar(9) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(15) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Fullname` | varchar(255) | ✗ | - | - |
| `Age` | varchar(3) | ✗ | - | - |
| `Sex` | varchar(10) | ✗ | - | - |
| `Cid` | varchar(17) | ✗ | - | เลขบัตรประชาชน |
| `DateAdmit` | varchar(20) | ✗ | - | - |
| `Time` | varchar(6) | ✗ | - | เวลา |
| `DateDC` | varchar(20) | ✗ | - | - |
| `Day` | varchar(2) | ✗ | - | - |
| `Office` | varchar(255) | ✗ | - | - |
| `Room` | varchar(255) | ✗ | - | - |
| `Dx1` | varchar(20) | ✗ | - | - |
| `Dx1name` | varchar(255) | ✗ | - | - |
| `Dx2` | varchar(20) | ✗ | - | - |
| `Dx2name` | varchar(255) | ✗ | - | - |
| `Dx3` | varchar(20) | ✗ | - | - |
| `Dx3name` | varchar(255) | ✗ | - | - |
| `DX4` | varchar(255) | ✗ | - | - |
| `DX4name` | varchar(255) | ✗ | - | - |
| `Proc1` | varchar(20) | ✗ | - | - |
| `Proc1name` | varchar(255) | ✗ | - | - |
| `Proc2` | varchar(20) | ✗ | - | - |
| `Proc2name` | varchar(255) | ✗ | - | - |
| `Dctfname` | varchar(3) | ✗ | - | - |
| `Dctname` | varchar(255) | ✗ | - | - |
| `Dctlcno` | varchar(7) | ✗ | - | - |
| `Cause` | varchar(255) | ✗ | - | - |
| `Refer` | varchar(255) | ✗ | - | - |
| `C01` | varchar(10) | ✗ | - | - |
| `C02` | varchar(10) | ✗ | - | - |
| `C03` | varchar(10) | ✗ | - | - |
| `C04` | varchar(10) | ✗ | - | - |
| `C05` | varchar(10) | ✗ | - | - |
| `C06` | varchar(10) | ✗ | - | - |
| `C07` | varchar(10) | ✗ | - | - |
| `C08` | varchar(10) | ✗ | - | - |
| `C09` | varchar(10) | ✗ | - | - |
| `C10` | varchar(10) | ✗ | - | - |
| `C11` | varchar(10) | ✗ | - | - |
| `C12` | varchar(10) | ✗ | - | - |
| `C13` | varchar(10) | ✗ | - | - |
| `C14` | varchar(10) | ✗ | - | - |
| `C15` | varchar(10) | ✗ | - | - |
| `C16` | varchar(10) | ✗ | - | - |
| `C17` | varchar(10) | ✗ | - | - |
| `C18` | varchar(10) | ✗ | - | - |
| `C19` | varchar(10) | ✗ | - | - |
| `C20` | varchar(10) | ✗ | - | - |
| `C21` | varchar(10) | ✗ | - | - |
| `C22` | varchar(10) | ✗ | - | - |
| `C23` | varchar(10) | ✗ | - | - |
| `Sum` | varchar(10) | ✗ | - | - |
| `t_number` | varchar(255) | ✗ | - | - |
| `Status` | varchar(1) | ✗ | - | สถานะ |
| `Pfullname` | varchar(255) | ✗ | - | - |
| `Ptname` | varchar(255) | ✗ | - | ผู้ป่วย name |
| `sir` | varchar(255) | ✗ | - | - |
| `Tnames` | varchar(255) | ✗ | - | - |
| `Kname` | varchar(255) | ✗ | - | - |
| `Hosp` | varchar(255) | ✗ | - | - |

---

### Mrs_ssDATA_nIPD

**คำอธิบาย:** -

**จำนวนแถว:** 350

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(5) | ✗ | PK | รหัสประจำ (Primary Key) |
| `AN` | varchar(9) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(15) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Fullname` | varchar(255) | ✗ | - | - |
| `Age` | varchar(3) | ✗ | - | - |
| `Sex` | varchar(10) | ✗ | - | - |
| `Cid` | varchar(17) | ✗ | - | เลขบัตรประชาชน |
| `DateAdmit` | varchar(20) | ✗ | - | - |
| `Time` | varchar(6) | ✗ | - | เวลา |
| `DateDC` | varchar(20) | ✗ | - | - |
| `Day` | varchar(2) | ✗ | - | - |
| `Office` | varchar(255) | ✗ | - | - |
| `Room` | varchar(255) | ✗ | - | - |
| `hos` | varchar(255) | ✗ | - | - |
| `Dx1` | varchar(20) | ✗ | - | - |
| `Dx1name` | varchar(255) | ✗ | - | - |
| `Dx2` | varchar(20) | ✗ | - | - |
| `Dx2name` | varchar(255) | ✗ | - | - |
| `Dx3` | varchar(20) | ✗ | - | - |
| `Dx3name` | varchar(255) | ✗ | - | - |
| `DX4` | varchar(20) | ✗ | - | - |
| `DX4name` | varchar(255) | ✗ | - | - |
| `Proc1` | varchar(20) | ✗ | - | - |
| `Proc1name` | varchar(255) | ✗ | - | - |
| `Proc2` | varchar(20) | ✗ | - | - |
| `Proc2name` | varchar(255) | ✗ | - | - |
| `Dctfname` | varchar(3) | ✗ | - | - |
| `Dctname` | varchar(255) | ✗ | - | - |
| `Dctlcno` | varchar(7) | ✗ | - | - |
| `Cause` | varchar(255) | ✗ | - | - |
| `Refer` | varchar(255) | ✗ | - | - |
| `C01` | varchar(10) | ✗ | - | - |
| `C02` | varchar(10) | ✗ | - | - |
| `C03` | varchar(10) | ✗ | - | - |
| `C04` | varchar(10) | ✗ | - | - |
| `C05` | varchar(10) | ✗ | - | - |
| `C06` | varchar(10) | ✗ | - | - |
| `C07` | varchar(10) | ✗ | - | - |
| `C08` | varchar(10) | ✗ | - | - |
| `C09` | varchar(10) | ✗ | - | - |
| `C10` | varchar(10) | ✗ | - | - |
| `C11` | varchar(10) | ✗ | - | - |
| `C12` | varchar(10) | ✗ | - | - |
| `C13` | varchar(10) | ✗ | - | - |
| `C14` | varchar(10) | ✗ | - | - |
| `C15` | varchar(10) | ✗ | - | - |
| `C16` | varchar(10) | ✗ | - | - |
| `C17` | varchar(10) | ✗ | - | - |
| `C18` | varchar(10) | ✗ | - | - |
| `C19` | varchar(10) | ✗ | - | - |
| `C20` | varchar(10) | ✗ | - | - |
| `C21` | varchar(10) | ✗ | - | - |
| `C22` | varchar(10) | ✗ | - | - |
| `C23` | varchar(10) | ✗ | - | - |
| `Sum` | varchar(10) | ✗ | - | - |
| `t_number` | varchar(255) | ✗ | - | - |
| `Status` | varchar(1) | ✗ | - | สถานะ |
| `Pfullname` | varchar(255) | ✗ | - | - |
| `Ptname` | varchar(255) | ✗ | - | ผู้ป่วย name |
| `sir` | varchar(255) | ✗ | - | - |
| `Tnames` | varchar(255) | ✗ | - | - |
| `Kname` | varchar(255) | ✗ | - | - |
| `Hosp` | varchar(255) | ✗ | - | - |
| `DAY1` | varchar(255) | ✗ | - | - |
| `D11` | varchar(255) | ✗ | - | - |
| `D12` | varchar(255) | ✗ | - | - |
| `D13` | varchar(255) | ✗ | - | - |
| `D14` | varchar(255) | ✗ | - | - |
| `D15` | varchar(255) | ✗ | - | - |
| `D16` | varchar(255) | ✗ | - | - |
| `D17` | varchar(255) | ✗ | - | - |
| `D18` | varchar(255) | ✗ | - | - |
| `D19` | varchar(255) | ✗ | - | - |
| `D110` | varchar(255) | ✗ | - | - |
| `D111` | varchar(255) | ✗ | - | - |
| `D112` | varchar(255) | ✗ | - | - |
| `D113` | varchar(255) | ✗ | - | - |
| `D114` | varchar(255) | ✗ | - | - |
| `D115` | varchar(255) | ✗ | - | - |
| `D116` | varchar(255) | ✗ | - | - |
| `D117` | varchar(255) | ✗ | - | - |
| `D118` | varchar(255) | ✗ | - | - |
| `D119` | varchar(255) | ✗ | - | - |
| `D120` | varchar(255) | ✗ | - | - |
| `D121` | varchar(255) | ✗ | - | - |
| `D122` | varchar(255) | ✗ | - | - |
| `D123` | varchar(255) | ✗ | - | - |
| `D1sum` | varchar(255) | ✗ | - | - |
| `DAY2` | varchar(255) | ✗ | - | - |
| `D21` | varchar(255) | ✗ | - | - |
| `D22` | varchar(255) | ✗ | - | - |
| `D23` | varchar(255) | ✗ | - | - |
| `D24` | varchar(255) | ✗ | - | - |
| `D25` | varchar(255) | ✗ | - | - |
| `D26` | varchar(255) | ✗ | - | - |
| `D27` | varchar(255) | ✗ | - | - |
| `D28` | varchar(255) | ✗ | - | - |
| `D29` | varchar(255) | ✗ | - | - |
| `D210` | varchar(255) | ✗ | - | - |
| `D211` | varchar(255) | ✗ | - | - |
| `D212` | varchar(255) | ✗ | - | - |
| `D213` | varchar(255) | ✗ | - | - |
| `D214` | varchar(255) | ✗ | - | - |
| `D215` | varchar(255) | ✗ | - | - |
| `D216` | varchar(255) | ✗ | - | - |
| `D217` | varchar(255) | ✗ | - | - |
| `D218` | varchar(255) | ✗ | - | - |
| `D219` | varchar(255) | ✗ | - | - |
| `D220` | varchar(255) | ✗ | - | - |
| `D221` | varchar(255) | ✗ | - | - |
| `D222` | varchar(255) | ✗ | - | - |
| `D223` | varchar(255) | ✗ | - | - |
| `D2sum` | varchar(255) | ✗ | - | - |
| `DAY3` | varchar(255) | ✗ | - | - |
| `D31` | varchar(255) | ✗ | - | - |
| `D32` | varchar(255) | ✗ | - | - |
| `D33` | varchar(255) | ✗ | - | - |
| `D34` | varchar(255) | ✗ | - | - |
| `D35` | varchar(255) | ✗ | - | - |
| `D36` | varchar(255) | ✗ | - | - |
| `D37` | varchar(255) | ✗ | - | - |
| `D38` | varchar(255) | ✗ | - | - |
| `D39` | varchar(255) | ✗ | - | - |
| `D310` | varchar(255) | ✗ | - | - |
| `D311` | varchar(255) | ✗ | - | - |
| `D312` | varchar(255) | ✗ | - | - |
| `D313` | varchar(255) | ✗ | - | - |
| `D314` | varchar(255) | ✗ | - | - |
| `D315` | varchar(255) | ✗ | - | - |
| `D316` | varchar(255) | ✗ | - | - |
| `D317` | varchar(255) | ✗ | - | - |
| `D318` | varchar(255) | ✗ | - | - |
| `D319` | varchar(255) | ✗ | - | - |
| `D320` | varchar(255) | ✗ | - | - |
| `D321` | varchar(255) | ✗ | - | - |
| `D322` | varchar(255) | ✗ | - | - |
| `D323` | varchar(255) | ✗ | - | - |
| `D3sum` | varchar(255) | ✗ | - | - |
| `DAY4` | varchar(255) | ✗ | - | - |
| `D41` | varchar(255) | ✗ | - | - |
| `D42` | varchar(255) | ✗ | - | - |
| `D43` | varchar(255) | ✗ | - | - |
| `D44` | varchar(255) | ✗ | - | - |
| `D45` | varchar(255) | ✗ | - | - |
| `D46` | varchar(255) | ✗ | - | - |
| `D47` | varchar(255) | ✗ | - | - |
| `D48` | varchar(255) | ✗ | - | - |
| `D49` | varchar(255) | ✗ | - | - |
| `D410` | varchar(255) | ✗ | - | - |
| `D411` | varchar(255) | ✗ | - | - |
| `D412` | varchar(255) | ✗ | - | - |
| `D413` | varchar(255) | ✗ | - | - |
| `D414` | varchar(255) | ✗ | - | - |
| `D415` | varchar(255) | ✗ | - | - |
| `D416` | varchar(255) | ✗ | - | - |
| `D417` | varchar(255) | ✗ | - | - |
| `D418` | varchar(255) | ✗ | - | - |
| `D419` | varchar(255) | ✗ | - | - |
| `D420` | varchar(255) | ✗ | - | - |
| `D421` | varchar(255) | ✗ | - | - |
| `D422` | varchar(255) | ✗ | - | - |
| `D423` | varchar(255) | ✗ | - | - |
| `D4sum` | varchar(255) | ✗ | - | - |
| `DAY5` | varchar(255) | ✗ | - | - |
| `D51` | varchar(255) | ✗ | - | - |
| `D52` | varchar(255) | ✗ | - | - |
| `D53` | varchar(255) | ✗ | - | - |
| `D54` | varchar(255) | ✗ | - | - |
| `D55` | varchar(255) | ✗ | - | - |
| `D56` | varchar(255) | ✗ | - | - |
| `D57` | varchar(255) | ✗ | - | - |
| `D58` | varchar(255) | ✗ | - | - |
| `D59` | varchar(255) | ✗ | - | - |
| `D510` | varchar(255) | ✗ | - | - |
| `D511` | varchar(255) | ✗ | - | - |
| `D512` | varchar(255) | ✗ | - | - |
| `D513` | varchar(255) | ✗ | - | - |
| `D514` | varchar(255) | ✗ | - | - |
| `D515` | varchar(255) | ✗ | - | - |
| `D516` | varchar(255) | ✗ | - | - |
| `D517` | varchar(255) | ✗ | - | - |
| `D518` | varchar(255) | ✗ | - | - |
| `D519` | varchar(255) | ✗ | - | - |
| `D520` | varchar(255) | ✗ | - | - |
| `D521` | varchar(255) | ✗ | - | - |
| `D522` | varchar(255) | ✗ | - | - |
| `D523` | varchar(255) | ✗ | - | - |
| `D5sum` | varchar(255) | ✗ | - | - |
| `DAY6` | varchar(255) | ✗ | - | - |
| `D61` | varchar(255) | ✗ | - | - |
| `D62` | varchar(255) | ✗ | - | - |
| `D63` | varchar(255) | ✗ | - | - |
| `D64` | varchar(255) | ✗ | - | - |
| `D65` | varchar(255) | ✗ | - | - |
| `D66` | varchar(255) | ✗ | - | - |
| `D67` | varchar(255) | ✗ | - | - |
| `D68` | varchar(255) | ✗ | - | - |
| `D69` | varchar(255) | ✗ | - | - |
| `D610` | varchar(255) | ✗ | - | - |
| `D611` | varchar(255) | ✗ | - | - |
| `D612` | varchar(255) | ✗ | - | - |
| `D613` | varchar(255) | ✗ | - | - |
| `D614` | varchar(255) | ✗ | - | - |
| `D615` | varchar(255) | ✗ | - | - |
| `D616` | varchar(255) | ✗ | - | - |
| `D617` | varchar(255) | ✗ | - | - |
| `D618` | varchar(255) | ✗ | - | - |
| `D619` | varchar(255) | ✗ | - | - |
| `D620` | varchar(255) | ✗ | - | - |
| `D621` | varchar(255) | ✗ | - | - |
| `D622` | varchar(255) | ✗ | - | - |
| `D623` | varchar(255) | ✗ | - | - |
| `D6sum` | varchar(255) | ✗ | - | - |
| `DAY7` | varchar(255) | ✗ | - | - |
| `D71` | varchar(255) | ✗ | - | - |
| `D72` | varchar(255) | ✗ | - | - |
| `D73` | varchar(255) | ✗ | - | - |
| `D74` | varchar(255) | ✗ | - | - |
| `D75` | varchar(255) | ✗ | - | - |
| `D76` | varchar(255) | ✗ | - | - |
| `D77` | varchar(255) | ✗ | - | - |
| `D78` | varchar(255) | ✗ | - | - |
| `D79` | varchar(255) | ✗ | - | - |
| `D710` | varchar(255) | ✗ | - | - |
| `D711` | varchar(255) | ✗ | - | - |
| `D712` | varchar(255) | ✗ | - | - |
| `D713` | varchar(255) | ✗ | - | - |
| `D714` | varchar(255) | ✗ | - | - |
| `D715` | varchar(255) | ✗ | - | - |
| `D716` | varchar(255) | ✗ | - | - |
| `D717` | varchar(255) | ✗ | - | - |
| `D718` | varchar(255) | ✗ | - | - |
| `D719` | varchar(255) | ✗ | - | - |
| `D720` | varchar(255) | ✗ | - | - |
| `D721` | varchar(255) | ✗ | - | - |
| `D722` | varchar(255) | ✗ | - | - |
| `D723` | varchar(255) | ✗ | - | - |
| `D7sum` | varchar(255) | ✗ | - | - |

---

### Mrs_ssRoom

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(2) | ✗ | PK | รหัสประจำ (Primary Key) |
| `roomname` | varchar(225) | ✗ | - | - |

---

### Mrsc_check_in

**คำอธิบาย:** -

**จำนวนแถว:** 76,759

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Inumber` | varchar(7) | ✓ | - | - |
| `AN` | varchar(8) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(10) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Pname` | varchar(20) | ✓ | - | คำนำหน้าชื่อ |
| `Fname` | varchar(60) | ✓ | - | ชื่อจริง |
| `Lname` | varchar(60) | ✓ | - | นามสกุล |
| `Sex` | varchar(10) | ✓ | - | - |
| `Age` | varchar(4) | ✓ | - | - |
| `Cid` | varchar(17) | ✓ | - | เลขบัตรประชาชน |
| `Pn` | varchar(100) | ✓ | - | - |
| `Pnt` | varchar(100) | ✓ | - | - |
| `Ward` | varchar(100) | ✓ | - | หอผู้ป่วยใน |
| `Tel` | varchar(3) | ✓ | - | โทรศัพท์ |
| `DateAdmit` | date | ✓ | - | - |
| `DateDC` | date | ✓ | - | - |
| `Los` | varchar(3) | ✓ | - | - |
| `DateS` | date | ✓ | - | - |
| `Pl` | varchar(100) | ✓ | - | - |
| `Plt` | varchar(60) | ✓ | - | - |
| `DateIN` | date | ✓ | - | - |
| `Docter` | varchar(80) | ✓ | - | - |
| `Status` | varchar(1) | ✓ | - | สถานะ |
| `DateAdmit1` | varchar(50) | ✓ | - | - |
| `DateDC1` | varchar(50) | ✓ | - | - |
| `DateS1` | varchar(50) | ✓ | - | - |
| `DateIN1` | varchar(50) | ✓ | - | - |

---

### Mrss_IPD

**คำอธิบาย:** -

**จำนวนแถว:** 3,224

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(8) | ✗ | PK | รหัสประจำ (Primary Key) |
| `idy` | varchar(7) | ✗ | - | - |
| `AN` | varchar(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Cid` | varchar(17) | ✗ | - | เลขบัตรประชาชน |
| `Ptname` | varchar(255) | ✗ | - | ผู้ป่วย name |
| `Pname` | char(20) | ✗ | - | คำนำหน้าชื่อ |
| `Fname` | char(60) | ✗ | - | ชื่อจริง |
| `Lname` | char(60) | ✗ | - | นามสกุล |
| `Male` | char(10) | ✗ | - | - |
| `Age` | text | ✗ | - | - |
| `Yday` | varchar(1) | ✗ | - | - |
| `Yname` | char(100) | ✗ | - | - |
| `Tname` | varchar(60) | ✗ | - | - |
| `Tel` | char(3) | ✗ | - | โทรศัพท์ |
| `Sector` | char(40) | ✗ | - | - |
| `Ydate` | date | ✗ | - | - |
| `Kdate` | date | ✗ | - | - |
| `Sname` | varchar(100) | ✗ | - | - |
| `Tnames` | varchar(60) | ✗ | - | - |
| `Ldate` | date | ✗ | - | - |
| `Statusc` | char(1) | ✗ | - | - |
| `Ydate1` | varchar(20) | ✗ | - | - |
| `Kdate1` | varchar(20) | ✗ | - | - |
| `Registers` | varchar(100) | ✗ | - | - |
| `test` | varchar(1) | ✗ | - | - |

---

### Mrss_R_IPD

**คำอธิบาย:** -

**จำนวนแถว:** 2,948

**Engine:** InnoDB

**Primary Key:** `IDY`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `IDK` | char(7) | ✗ | - | - |
| `IDY` | char(7) | ✗ | PK | - |
| `AN` | char(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | char(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Yname` | char(120) | ✗ | - | - |
| `Tname` | char(60) | ✗ | - | - |
| `Sector` | char(60) | ✗ | - | - |
| `Tel` | decimal(3,0) | ✗ | - | โทรศัพท์ |
| `Sname` | varchar(100) | ✗ | - | - |
| `Tnames` | varchar(60) | ✗ | - | - |
| `Kdate` | date | ✗ | - | - |
| `Kdates` | date | ✗ | - | - |

---

### RWipd

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `เพศ` | varchar(4) | ✗ | - | - |
| `age` | int(6) | ✓ | - | - |
| `fullname` | varchar(52) | ✓ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `namepttype` | varchar(100) | ✗ | - | - |
| `rgtdate` | date | ✗ | - | - |
| `dchdate` | date | ✗ | - | วันที่จำหน่าย |
| `daycnt` | int(4) | ✗ | - | - |
| `total` | decimal(31,2) | ✓ | - | รวม |
| `rw` | double(10,4) | ✓ | - | - |
| `adjrw` | double(10,4) | ✓ | - | - |

---

### anc

**คำอธิบาย:** การฝากครรภ์

**จำนวนแถว:** 21,153

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `drxtime` | int(4) | ✗ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `ancno` | varchar(7) | ✗ | - | - |
| `new` | int(1) | ✗ | - | - |
| `addr` | varchar(2) | ✗ | - | ที่อยู่ |
| `bw` | decimal(5,1) | ✗ | - | - |
| `height` | int(3) | ✗ | - | - |
| `g` | int(2) | ✗ | - | - |
| `p` | int(2) | ✗ | - | - |
| `a` | int(2) | ✗ | - | - |
| `l` | int(2) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `utheight` | varchar(8) | ✗ | - | - |
| `utlength` | int(2) | ✗ | - | - |
| `present` | varchar(4) | ✗ | - | - |
| `fhs` | int(3) | ✗ | - | - |
| `fmovement` | varchar(1) | ✗ | - | - |
| `gestage` | varchar(9) | ✗ | - | - |
| `ancrisk` | varchar(20) | ✗ | - | - |
| `hxrisk` | varchar(20) | ✗ | - | - |
| `ga` | int(2) | ✗ | - | - |
| `hiv` | varchar(17) | ✗ | - | - |
| `vdrl` | int(4) | ✗ | - | - |
| `hct` | decimal(4,1) | ✗ | - | - |
| `bl_gr` | int(1) | ✗ | - | - |
| `albn` | int(1) | ✗ | - | - |
| `sugr` | int(1) | ✗ | - | - |
| `tt` | int(1) | ✗ | - | - |
| `misc` | varchar(20) | ✗ | - | - |
| `misc1` | varchar(20) | ✗ | - | - |
| `l2hfa` | tinyint(1) | ✗ | - | - |
| `rcptno` | int(8) | ✗ | - | - |
| `lmp` | date | ✗ | - | - |
| `edc` | date | ✗ | - | - |
| `othnote` | varchar(40) | ✗ | - | - |
| `edcoth` | varchar(40) | ✗ | - | - |
| `vdrl_rs` | varchar(1) | ✗ | - | - |
| `hb_rs` | varchar(1) | ✗ | - | - |
| `hiv_rs` | varchar(1) | ✗ | - | - |
| `date_hct` | date | ✗ | - | - |
| `hct_rs` | varchar(2) | ✗ | - | - |
| `thala_rs` | varchar(1) | ✗ | - | - |
| `ancresult` | varchar(1) | ✓ | - | - |

---

### ancrisk

**คำอธิบาย:** การฝากครรภ์ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 20

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameancr` | varchar(70) | ✗ | - | - |
| `codeancr` | varchar(2) | ✗ | IDX | - |

---

### anes_co_dct

**คำอธิบาย:** -

**จำนวนแถว:** 19,422

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `orno` | int(8) | ✗ | IDX | - |
| `staff` | varchar(5) | ✗ | - | - |
| `pcu` | varchar(1) | ✗ | - | - |

---

### anes_dct

**คำอธิบาย:** -

**จำนวนแถว:** 7,428

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `orno` | int(8) | ✗ | IDX | - |
| `dct` | varchar(5) | ✓ | - | - |

---

### anesthesia

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameanesth` | varchar(40) | ✗ | - | - |
| `codeanesth` | varchar(10) | ✗ | IDX | - |

---

### ans

**คำอธิบาย:** -

**จำนวนแถว:** 242

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `orno` | int(8) | ✗ | - | - |
| `anstype` | varchar(2) | ✓ | - | - |

---

### ans_comp

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameanscom` | varchar(20) | ✗ | - | - |
| `codeanscom` | varchar(2) | ✗ | IDX | - |

---

### ansno

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** InnoDB

**Primary Key:** `orno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orno` | int(8) | ✗ | PK | - |
| `ansno` | varchar(10) | ✗ | IDX | - |

---

### anstype

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameans` | varchar(30) | ✗ | - | - |
| `codeans` | varchar(2) | ✗ | IDX | - |

---

### beds

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `bed_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `bed_id` | int(10) unsigned | ✗ | PK | รหัส bed |
| `ward_id` | varchar(5) | ✗ | - | รหัส ward |
| `bed_no` | varchar(10) | ✓ | - | เลขที่ bed |
| `bed_name` | varchar(100) | ✓ | - | ชื่อ bed |
| `bed_type_id` | int(11) | ✓ | - | รหัส bed_type |
| `bed_status_code` | varchar(20) | ✓ | - | รหัส bed_status |
| `bed_rate` | int(11) | ✓ | - | - |

---

### bedtype

**คำอธิบาย:** ประเภทเตียง

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namebedtyp` | varchar(20) | ✗ | - | - |
| `bedtype` | varchar(2) | ✗ | IDX | - |
| `rate` | decimal(9,5) | ✗ | - | - |

---

### bedtype_copy1

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namebedtyp` | varchar(20) | ✗ | - | - |
| `bedtype` | varchar(2) | ✗ | IDX | - |
| `rate` | decimal(9,5) | ✗ | - | - |

---

### changwat

**คำอธิบาย:** -

**จำนวนแถว:** 79

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namechw` | varchar(20) | ✓ | - | - |
| `chwpart` | varchar(2) | ✗ | IDX | จังหวัด |
| `nameen` | varchar(90) | ✓ | - | - |
| `regionth` | varchar(200) | ✓ | - | - |
| `regionen` | varchar(200) | ✓ | - | - |

---

### chkuseipt

**คำอธิบาย:** -

**จำนวนแถว:** 350

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `dct` | varchar(5) | ✗ | - | - |
| `vstdttm` | datetime | ✓ | - | - |
| `ipaddr` | varchar(40) | ✗ | - | - |

---

### hcode

**คำอธิบาย:** -

**จำนวนแถว:** 14,920

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namehosp` | varchar(100) | ✗ | IDX | - |
| `codehosp` | varchar(12) | ✗ | IDX | - |
| `specifics` | varchar(3) | ✗ | - | - |
| `off_id` | varchar(5) | ✗ | IDX | รหัส off |
| `off_name1` | varchar(100) | ✗ | - | - |
| `off_name2` | varchar(60) | ✗ | - | - |
| `minis` | varchar(2) | ✗ | - | - |
| `off_type` | varchar(2) | ✗ | - | ประเภท off |
| `bed` | varchar(4) | ✗ | - | - |
| `changwat` | varchar(2) | ✗ | - | - |
| `ampur` | varchar(2) | ✗ | - | - |
| `tambon` | varchar(2) | ✗ | - | - |
| `moo` | varchar(2) | ✗ | - | - |

---

### hi7_book_fdh

**คำอธิบาย:** -

**จำนวนแถว:** 562

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | varchar(15) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `transaction_uid` | varchar(255) | ✓ | - | - |
| `price` | decimal(10,2) | ✓ | - | ราคา |
| `d_update` | datetime | ✓ | - | - |
| `systems` | enum('hi7mdr','hi7audit','kios','webapp') | ✓ | - | - |

---

### hi_visit_nation

**คำอธิบาย:** -

**จำนวนแถว:** 662

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `fname` | varchar(50) | ✓ | - | ชื่อจริง |
| `mname` | varchar(50) | ✓ | - | - |
| `lname` | varchar(50) | ✓ | - | นามสกุล |
| `nsex` | varchar(20) | ✓ | - | - |
| `doctype` | varchar(50) | ✓ | - | - |
| `docno` | varchar(50) | ✓ | - | - |
| `flightno` | varchar(50) | ✓ | - | - |
| `pop_id` | varchar(50) | ✓ | - | รหัส pop |
| `country` | varchar(50) | ✓ | - | - |
| `nnation` | varchar(50) | ✓ | - | - |
| `province` | varchar(50) | ✓ | - | - |
| `tran_date` | varchar(50) | ✓ | - | วันที่ tran |
| `tran_type` | varchar(50) | ✓ | - | ประเภท tran |
| `depart` | varchar(50) | ✓ | - | - |
| `cbrthdate` | varchar(50) | ✓ | - | - |
| `create_d` | varchar(50) | ✓ | - | - |
| `create_by` | varchar(50) | ✓ | - | - |
| `upd_date` | varchar(50) | ✓ | - | วันที่ upd |
| `upd_by` | varchar(50) | ✓ | - | - |
| `tran_date_dt` | datetime | ✓ | - | - |
| `create_d_dt` | datetime | ✓ | - | - |
| `upd_date_dt` | datetime | ✓ | - | - |

---

### hospcode

**คำอธิบาย:** -

**จำนวนแถว:** 14,929

**Engine:** MyISAM

**Primary Key:** `off_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namehosp` | varchar(100) | ✗ | - | - |
| `codehosp` | varchar(12) | ✗ | - | - |
| `specifics` | varchar(2) | ✗ | - | - |
| `off_id` | varchar(5) | ✗ | PK | รหัส off |
| `off_name1` | varchar(100) | ✗ | - | - |
| `off_name2` | varchar(60) | ✗ | - | - |
| `minis` | varchar(2) | ✗ | - | - |
| `off_type` | varchar(2) | ✗ | - | ประเภท off |
| `bed` | varchar(4) | ✗ | - | - |
| `changwat` | varchar(2) | ✗ | - | - |
| `ampur` | varchar(2) | ✗ | - | - |
| `tambon` | varchar(2) | ✗ | - | - |
| `moo` | varchar(2) | ✗ | - | - |
| `zonetype` | varchar(1) | ✓ | - | - |
| `regionen` | varchar(2) | ✓ | - | - |

---

### hospcodeolde

**คำอธิบาย:** -

**จำนวนแถว:** 14,916

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namehosp` | varchar(100) | ✗ | IDX | - |
| `codehosp` | varchar(12) | ✗ | IDX | - |
| `specifics` | varchar(3) | ✗ | - | - |
| `off_id` | varchar(5) | ✗ | IDX | รหัส off |
| `off_name1` | varchar(100) | ✗ | - | - |
| `off_name2` | varchar(60) | ✗ | - | - |
| `minis` | varchar(2) | ✗ | - | - |
| `off_type` | varchar(2) | ✗ | - | ประเภท off |
| `bed` | varchar(4) | ✗ | - | - |
| `changwat` | varchar(2) | ✗ | - | - |
| `ampur` | varchar(2) | ✗ | - | - |
| `tambon` | varchar(2) | ✗ | - | - |
| `moo` | varchar(2) | ✗ | - | - |

---

### idpm

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** MyISAM

**Primary Key:** `idpm, nameidpm`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `idpm` | varchar(2) | ✗ | PK | - |
| `nameidpm` | varchar(20) | ✗ | PK | - |
| `costcenter` | varchar(8) | ✓ | - | - |
| `dspname` | varchar(30) | ✓ | - | - |
| `costcente2` | varchar(8) | ✓ | - | - |
| `op56` | varchar(5) | ✓ | - | - |
| `liscode` | varchar(5) | ✓ | - | - |
| `bed` | int(11) | ✓ | - | - |
| `is_active` | varchar(100) | ✓ | - | ใช้งานอยู่ |
| `bed_std` | int(3) | ✓ | - | - |

---

### informant

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `codeinform`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codeinform` | varchar(2) | ✗ | PK | - |
| `informtype` | varchar(50) | ✗ | - | - |

---

### invoice

**คำอธิบาย:** -

**จำนวนแถว:** 176,625

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | bigint(20) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(15) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | varchar(15) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `invoice_no` | varchar(30) | ✗ | IDX | เลขที่ invoice |
| `invoice_lt` | varchar(4) | ✗ | IDX | - |
| `transaction_uid` | varchar(200) | ✗ | - | - |
| `price` | decimal(10,2) | ✓ | - | ราคา |
| `d_update` | datetime | ✓ | - | - |
| `d_create` | datetime | ✓ | - | - |
| `authen_code_closevisit` | varchar(255) | ✓ | - | - |
| `transaction_id_closevisit` | varchar(255) | ✓ | - | - |
| `service_date_time` | varchar(16) | ✓ | - | เวลา service_date |
| `invoice_date_time` | varchar(16) | ✓ | - | เวลา invoice_date |
| `total_amount` | decimal(10,2) | ✓ | - | จำนวนเงิน total |
| `paid_amount` | decimal(10,2) | ✓ | - | จำนวนเงิน paid |
| `privilege_amount` | decimal(10,2) | ✓ | - | จำนวนเงิน privilege |
| `recorder_pid` | varchar(13) | ✓ | - | - |

---

### iptadm

**คำอธิบาย:** การรับเข้า

**จำนวนแถว:** 160,433

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `indate` | date | ✗ | - | - |
| `intime` | int(4) | ✗ | - | - |
| `roomno` | varchar(5) | ✗ | - | - |
| `bedno` | varchar(5) | ✗ | - | - |
| `bedtype` | varchar(2) | ✗ | - | - |
| `rate` | decimal(9,2) | ✗ | - | - |
| `daycnt` | int(4) | ✗ | - | - |
| `outdate` | date | ✗ | - | - |
| `outtime` | int(4) | ✗ | - | - |

---

### iptadm1

**คำอธิบาย:** การรับเข้าผู้ป่วยใน (ที่เกี่ยวข้อง)

**จำนวนแถว:** 110,425

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `indate` | date | ✗ | IDX | - |
| `intime` | int(4) | ✗ | IDX | - |
| `roomno` | varchar(5) | ✗ | - | - |
| `bedno` | varchar(5) | ✗ | - | - |
| `bedtype` | varchar(2) | ✗ | - | - |
| `rate` | decimal(9,2) | ✗ | - | - |
| `daycnt` | int(4) | ✗ | - | - |
| `outdate` | date | ✗ | - | - |
| `outtime` | int(4) | ✗ | - | - |

---

### iptadm_copy1

**คำอธิบาย:** การรับเข้าผู้ป่วยใน (ที่เกี่ยวข้อง)

**จำนวนแถว:** 159,826

**Engine:** InnoDB

**Primary Key:** `an`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(8) | ✗ | PK | เลขที่ผู้ป่วยใน (Admission Number) |
| `indate` | date | ✗ | - | - |
| `intime` | int(4) | ✗ | - | - |
| `roomno` | varchar(5) | ✗ | - | - |
| `bedno` | varchar(5) | ✗ | - | - |
| `bedtype` | varchar(2) | ✗ | - | - |
| `rate` | decimal(9,2) | ✗ | - | - |
| `daycnt` | int(4) | ✗ | - | - |
| `outdate` | date | ✗ | - | - |
| `outtime` | int(4) | ✗ | - | - |

---

### iptdr

**คำอธิบาย:** การรับเข้าผู้ป่วยใน (ที่เกี่ยวข้อง)

**จำนวนแถว:** 616,557

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `dct` | varchar(5) | ✗ | - | - |
| `srvdttm` | datetime | ✗ | - | - |

---

### iptdx

**คำอธิบาย:** การรับเข้าผู้ป่วยใน (ที่เกี่ยวข้อง)

**จำนวนแถว:** 341,435

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `itemno` | int(2) | ✗ | IDX | - |
| `dct` | varchar(5) | ✓ | - | - |
| `icd10` | varchar(7) | ✓ | - | รหัสโรค ICD-10 |
| `icd10name` | varchar(90) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd10name) |
| `spclty` | varchar(2) | ✗ | - | สาขา y |
| `code_by` | int(11) | ✓ | - | - |

---

### iptmove

**คำอธิบาย:** การรับเข้าผู้ป่วยใน (ที่เกี่ยวข้อง)

**จำนวนแถว:** 56,280

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `srvdate` | date | ✗ | - | - |
| `srvtime` | int(4) | ✗ | - | - |
| `wardold` | varchar(2) | ✗ | - | หอผู้ป่วย old |
| `wardnew` | varchar(2) | ✗ | - | หอผู้ป่วย new |
| `status` | varchar(1) | ✗ | - | สถานะ |
| `datein` | date | ✗ | - | - |
| `timein` | int(4) | ✗ | - | - |
| `movein` | varchar(1) | ✗ | - | - |
| `moveout` | varchar(1) | ✗ | - | - |

---

### l_benefitplan

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** InnoDB

**Primary Key:** `bp_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `bp_code` | varchar(2) | ✗ | PK | รหัส bp |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_company

**คำอธิบาย:** -

**จำนวนแถว:** 482

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | varchar(5) | ✗ | - | รหัสประจำ (Primary Key) |
| `compname` | varchar(255) | ✗ | - | - |

---

### l_otherplan

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `pay_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pay_code` | varchar(2) | ✗ | PK | รหัส pay |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_payplan

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `pay_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pay_code` | varchar(2) | ✗ | PK | รหัส pay |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_roomdetail

**คำอธิบาย:** -

**จำนวนแถว:** 33

**Engine:** InnoDB

**Primary Key:** `roomid`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `roomid` | int(2) | ✗ | PK | - |
| `roomtype` | varchar(1) | ✓ | IDX | - |
| `nameroom` | varchar(40) | ✓ | - | - |
| `namepttype` | varchar(40) | ✓ | - | - |
| `income16` | varchar(2) | ✓ | - | รายได้ (คอลัมน์ income16) |
| `rate_16` | varchar(5) | ✓ | - | - |
| `income17` | varchar(2) | ✓ | - | รายได้ (คอลัมน์ income17) |
| `rate_17` | varchar(5) | ✓ | - | - |
| `rate_05` | varchar(5) | ✓ | - | - |
| `cgd` | varchar(5) | ✓ | - | - |

---

### l_standing_order

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `name` | varchar(255) | ✗ | - | ชื่อ |
| `group_id` | int(11) | ✗ | - | รหัส group |
| `is_active` | enum('1','0') | ✓ | - | ใช้งานอยู่ |

---

### l_standing_order_group

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `group_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `group_id` | int(10) unsigned | ✗ | PK | รหัส group |
| `group_name` | varchar(255) | ✗ | - | ชื่อ group |
| `is_active` | varchar(1) | ✓ | - | ใช้งานอยู่ |

---

### lmedtman

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 37,221

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vstdttm` | datetime | ✗ | - | - |
| `code` | varchar(15) | ✗ | - | รหัส |
| `edtdate` | date | ✗ | - | - |
| `edttime` | int(4) | ✗ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `test` | varchar(15) | ✗ | - | - |
| `notice` | varchar(30) | ✗ | - | - |
| `name` | varchar(25) | ✗ | - | ชื่อ |

---

### lmlabman

**คำอธิบาย:** ข้อมูลห้องปฏิบัติการ

**จำนวนแถว:** 22

**Engine:** InnoDB

**Primary Key:** `code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | varchar(5) | ✗ | PK | รหัส |
| `imageid` | varchar(24) | ✗ | - | - |
| `name` | varchar(30) | ✗ | - | ชื่อ |
| `psw` | varchar(15) | ✗ | - | - |
| `pname` | varchar(15) | ✓ | - | คำนำหน้าชื่อ |
| `fname` | varchar(50) | ✓ | - | ชื่อจริง |
| `lname` | varchar(50) | ✓ | - | นามสกุล |
| `sex` | varchar(1) | ✓ | - | - |
| `birth_date` | date | ✓ | - | วันเกิด |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |
| `lcno` | varchar(20) | ✓ | - | - |
| `provider_type` | varchar(255) | ✓ | - | ประเภท provider |
| `start_date` | date | ✓ | - | วันที่ start |
| `end_date` | date | ✓ | - | วันที่ end |
| `lis_code` | varchar(10) | ✓ | IDX | รหัส lis |
| `pcucode` | varchar(5) | ✓ | - | - |

---

### lmlabmanpic

**คำอธิบาย:** ข้อมูลห้องปฏิบัติการ

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `imageid`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `imageid` | varchar(5) | ✗ | PK | - |
| `image` | longblob | ✗ | - | - |

---

### mooban

**คำอธิบาย:** -

**จำนวนแถว:** 5,298

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namemoob` | varchar(100) | ✓ | - | - |
| `chwpart` | varchar(2) | ✗ | IDX | จังหวัด |
| `amppart` | varchar(2) | ✗ | - | อำเภอ |
| `tmbpart` | varchar(2) | ✗ | - | ตำบล |
| `moopart` | varchar(2) | ✗ | - | หมู่ |
| `moo_code` | varchar(8) | ✓ | - | รหัส moo |
| `pcu_code` | varchar(5) | ✓ | - | รหัส pcu |
| `hospsub` | varchar(5) | ✓ | - | - |
| `namehosp` | varchar(100) | ✓ | - | - |

---

### mrs_ipdsticker

**คำอธิบาย:** -

**จำนวนแถว:** 6,573

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fullname` | varchar(255) | ✓ | - | - |
| `dateAdmit` | varchar(255) | ✓ | - | - |
| `rgdate` | date | ✓ | - | - |
| `fullage` | varchar(255) | ✓ | - | - |
| `sex` | varchar(255) | ✓ | - | - |

---

### orderipd

**คำอธิบาย:** -

**จำนวนแถว:** 406,075

**Engine:** InnoDB

**Primary Key:** `prscno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `prscno` | int(11) | ✗ | PK | - |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `prscdate` | date | ✗ | - | - |
| `prsctime` | int(4) | ✗ | - | - |
| `dct` | varchar(5) | ✗ | - | - |
| `orddate` | date | ✗ | - | - |
| `ordtime` | int(4) | ✗ | - | - |
| `chkorder` | varchar(1) | ✗ | - | - |

---

### orfro

**คำอธิบาย:** -

**จำนวนแถว:** 71,789

**Engine:** InnoDB

**Primary Key:** `rfrno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `rfrno` | int(8) | ✗ | PK | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `ward` | varchar(2) | ✗ | - | หอผู้ป่วยใน |
| `rfrlct` | varchar(6) | ✗ | - | - |
| `icd10` | varchar(7) | ✗ | - | รหัสโรค ICD-10 |
| `rfrcs` | varchar(2) | ✓ | - | - |
| `cln` | varchar(5) | ✓ | - | - |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `dct` | varchar(5) | ✓ | - | - |
| `rfrtype` | varchar(2) | ✓ | - | - |
| `km` | varchar(5) | ✓ | - | - |
| `pricerefer` | int(9) | ✓ | - | - |
| `loads` | varchar(1) | ✓ | - | - |

---

### orrgt

**คำอธิบาย:** -

**จำนวนแถว:** 130

**Engine:** InnoDB

**Primary Key:** `rgtno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rgtno` | int(11) | ✗ | PK | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `icd10` | varchar(7) | ✗ | - | รหัสโรค ICD-10 |
| `icd9cm` | varchar(200) | ✗ | - | รหัสหัตถการ ICD-9-CM |
| `ans` | varchar(1) | ✗ | - | - |
| `anes` | varchar(2) | ✗ | - | - |
| `grpblood` | varchar(2) | ✗ | - | - |
| `bprc` | varchar(2) | ✗ | - | - |
| `bffp` | varchar(2) | ✗ | - | - |
| `bwb` | varchar(2) | ✗ | - | - |
| `blrpc` | varchar(2) | ✗ | - | - |
| `bpltc` | varchar(2) | ✗ | - | - |
| `bfp` | varchar(2) | ✗ | - | - |
| `bcpp` | varchar(2) | ✗ | - | - |
| `bblofree` | varchar(1) | ✗ | - | - |
| `noblo` | varchar(10) | ✗ | - | - |
| `xmatch` | varchar(1) | ✗ | - | - |
| `antibio` | varchar(40) | ✗ | - | - |
| `antioth` | varchar(40) | ✗ | - | - |
| `cln` | varchar(5) | ✓ | - | - |
| `xryoth` | varchar(40) | ✗ | - | - |
| `medasa` | varchar(1) | ✗ | - | - |
| `medoth` | varchar(40) | ✗ | - | - |
| `stopbwt` | varchar(40) | ✗ | - | - |
| `medstop` | varchar(40) | ✗ | - | - |
| `medstart` | varchar(1) | ✗ | - | - |
| `dttmor` | datetime | ✗ | IDX | - |
| `dttmuro` | datetime | ✗ | - | - |
| `dttmslp` | datetime | ✗ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `accept` | varchar(1) | ✗ | - | - |
| `user` | varchar(5) | ✗ | - | - |
| `orcase` | char(1) | ✗ | - | - |
| `npot` | int(4) | ✗ | - | - |
| `note` | varchar(100) | ✗ | - | บันทึก |
| `comments` | varchar(100) | ✗ | - | - |
| `casetype` | varchar(1) | ✗ | - | - |
| `dctans` | varchar(5) | ✗ | - | - |
| `guest1` | varchar(5) | ✗ | - | - |
| `guest2` | varchar(5) | ✗ | - | - |
| `comment2` | varchar(60) | ✗ | - | ความคิดเห็น (คอลัมน์ comment2) |
| `roomor` | varchar(1) | ✗ | - | - |
| `ordetail` | varchar(40) | ✗ | - | - |
| `qor` | varchar(3) | ✗ | - | - |
| `posit_or` | varchar(4) | ✗ | - | - |
| `chkkwire` | varchar(1) | ✗ | - | - |
| `chkps` | varchar(1) | ✗ | - | - |
| `chklcp` | varchar(1) | ✗ | - | - |
| `chkiln` | varchar(1) | ✗ | - | - |
| `chkdhs` | varchar(1) | ✗ | - | - |
| `chkscrew` | varchar(1) | ✗ | - | - |
| `chktbw` | varchar(1) | ✗ | - | - |
| `chkancho` | varchar(1) | ✗ | - | - |
| `chkmpms` | varchar(1) | ✗ | - | - |
| `chkprt` | varchar(1) | ✗ | - | - |
| `chkhand` | varchar(4) | ✗ | - | - |
| `chkhdt` | varchar(1) | ✗ | - | - |
| `chkfoot` | varchar(4) | ✗ | - | - |
| `chkfdt` | varchar(1) | ✗ | - | - |
| `chksp1` | varchar(1) | ✗ | - | - |
| `chksp2` | varchar(1) | ✗ | - | - |
| `chkspv1` | varchar(2) | ✗ | - | - |
| `chkspv2` | varchar(2) | ✗ | - | - |
| `chkoffor` | varchar(1) | ✗ | - | - |
| `chknextor` | varchar(1) | ✗ | - | - |
| `chkoncal` | varchar(1) | ✗ | - | - |
| `othnxor` | varchar(1) | ✗ | - | - |
| `vnnew` | int(11) | ✗ | - | - |
| `chktka` | varchar(1) | ✗ | - | - |
| `srvdttm` | datetime | ✗ | - | - |
| `d_update` | datetime | ✗ | - | - |
| `useradd` | varchar(5) | ✓ | - | - |

---

### orroom

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `orno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orno` | int(8) | ✗ | PK | - |
| `room` | varchar(10) | ✗ | - | - |

---

### pcuyang

**คำอธิบาย:** -

**จำนวนแถว:** 18

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `No` | varchar(255) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `au` | varchar(255) | ✓ | - | - |
| `admit` | varchar(255) | ✓ | - | - |
| `dc` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `boxset` | varchar(255) | ✓ | - | - |

---

### pitsanu

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(255) | ✓ | - | คำนำหน้าชื่อ |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `lname` | varchar(255) | ✓ | - | นามสกุล |

---

### plan_treat

**คำอธิบาย:** -

**จำนวนแถว:** 92,672

**Engine:** InnoDB

**Primary Key:** `plan_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `plan_id` | int(10) unsigned | ✗ | PK | รหัส plan |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `plan_name` | varchar(100) | ✗ | - | ชื่อ plan |
| `vacc` | varchar(5) | ✗ | - | - |
| `vaccname` | varchar(40) | ✗ | - | - |
| `provider` | varchar(20) | ✗ | - | - |
| `comment` | varchar(200) | ✗ | - | ความคิดเห็น |

---

### progress_note

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `progress_note_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `progress_note_id` | int(10) unsigned | ✗ | PK | รหัส progress_note |
| `an` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `prscno` | int(11) | ✗ | UK | - |
| `subjective` | varchar(255) | ✓ | - | - |
| `objective` | varchar(255) | ✓ | - | - |
| `assessment` | varchar(255) | ✓ | - | - |
| `plan` | varchar(255) | ✓ | - | - |
| `note` | text | ✓ | - | บันทึก |
| `order_by` | varchar(255) | ✓ | - | - |
| `d_update` | timestamp | ✓ | - | - |
| `note_date` | date | ✓ | - | วันที่ note |
| `note_time` | varchar(5) | ✓ | - | เวลา note |

---

### q4u_docinroom

**คำอธิบาย:** -

**จำนวนแถว:** 2,273

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `datein` | date | ✓ | - | - |
| `van` | int(2) | ✓ | - | - |
| `docroom1` | varchar(50) | ✓ | - | - |
| `docroom2` | varchar(50) | ✓ | - | - |
| `docroom3` | varchar(50) | ✓ | - | - |
| `stroom1` | varchar(50) | ✓ | - | - |
| `stroom2` | varchar(50) | ✓ | - | - |
| `stroom3` | varchar(50) | ✓ | - | - |
| `st1` | int(2) | ✓ | - | - |
| `st2` | int(2) | ✓ | - | - |
| `st3` | int(2) | ✓ | - | - |

---

### q4u_service_rooms

**คำอธิบาย:** -

**จำนวนแถว:** 56

**Engine:** InnoDB

**Primary Key:** `service_point_id, room_number`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `service_point_id` | int(3) | ✗ | PK | รหัส service_point |
| `room_number` | int(2) | ✗ | PK | - |
| `room_name` | varchar(50) | ✓ | - | ชื่อ room |
| `room_id` | int(6) | ✗ | UK | รหัส room |
| `sound_id` | int(11) | ✓ | - | รหัส sound |

---

### q4u_setroom

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `room` | varchar(255) | ✓ | - | - |
| `detail` | varchar(255) | ✓ | - | - |

---

### report_admit

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `m` | int(1) | ✗ | - | - |
| `total` | int(1) | ✗ | - | รวม |
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |

---

### report_admit_dc

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `m` | int(1) | ✗ | - | - |
| `total` | int(1) | ✗ | - | รวม |

---

### service_room

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `room_id, servpoint_code, room_number`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `room_id` | int(11) | ✗ | PK | รหัส room |
| `servpoint_code` | varchar(6) | ✗ | PK | รหัส servpoint |
| `room_number` | int(2) | ✗ | PK | - |
| `room_name` | varchar(50) | ✓ | - | ชื่อ room |

---

### thaicancerbase_his

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `PatientID` | int(1) | ✗ | - | - |
| `hn_code` | int(1) | ✗ | - | รหัส hn |
| `title_code` | int(1) | ✗ | - | รหัส title |
| `fname` | int(1) | ✗ | - | ชื่อจริง |
| `lname` | int(1) | ✗ | - | นามสกุล |
| `PID` | int(1) | ✗ | - | - |
| `sex_code` | int(1) | ✗ | - | รหัส sex |
| `birthdate` | int(1) | ✗ | - | วันเกิด |
| `marry_status` | int(1) | ✗ | - | สถานะ marry |
| `nationality` | int(1) | ✗ | - | - |
| `citizenship` | int(1) | ✗ | - | - |
| `religion` | int(1) | ✗ | - | - |
| `Addr` | int(1) | ✗ | - | ที่อยู่ |
| `Vill` | int(1) | ✗ | - | - |
| `AddCode` | int(1) | ✗ | - | - |
| `Tel` | int(1) | ✗ | - | โทรศัพท์ |
| `last_update` | int(1) | ✗ | - | - |

---

### thaicancerbase_his-old

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `patientid` | int(1) | ✗ | - | - |
| `hn_code` | int(1) | ✗ | - | รหัส hn |
| `title_code` | int(1) | ✗ | - | รหัส title |
| `fname` | int(1) | ✗ | - | ชื่อจริง |
| `lname` | int(1) | ✗ | - | นามสกุล |
| `pid` | int(1) | ✗ | - | - |
| `sex_code` | int(1) | ✗ | - | รหัส sex |
| `birthdate` | int(1) | ✗ | - | วันเกิด |
| `marry_status` | int(1) | ✗ | - | สถานะ marry |
| `nationality` | int(1) | ✗ | - | - |
| `citizenship` | int(1) | ✗ | - | - |
| `religion` | int(1) | ✗ | - | - |
| `addr` | int(1) | ✗ | - | ที่อยู่ |
| `vill` | int(1) | ✗ | - | - |
| `addcode` | int(1) | ✗ | - | - |
| `tel` | int(1) | ✗ | - | โทรศัพท์ |
| `last_update` | int(1) | ✗ | - | - |

---

### visitanc

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id, hospcode, pid, date_serv`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(15) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hospcode` | varchar(5) | ✗ | PK | - |
| `pid` | varchar(15) | ✗ | PK | - |
| `seq` | varchar(15) | ✓ | - | ลำดับ |
| `date_serv` | date | ✗ | PK | - |
| `gravida` | varchar(2) | ✗ | - | - |
| `ancno` | varchar(2) | ✓ | - | - |
| `ga` | varchar(2) | ✗ | - | - |
| `ancresult` | varchar(1) | ✗ | - | - |
| `ancplace` | varchar(5) | ✗ | - | - |
| `provider` | varchar(13) | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |

---

### xryrgt

**คำอธิบาย:** -

**จำนวนแถว:** 254,290

**Engine:** InnoDB

**Primary Key:** `xan, id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `xan` | int(15) | ✗ | PK | - |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `xn` | varchar(8) | ✗ | IDX | - |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `xrytime` | int(4) | ✗ | - | - |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `xrydate` | date | ✗ | - | - |
| `xrycode` | varchar(4) | ✗ | IDX | - |
| `staff` | varchar(2) | ✗ | - | - |
| `fdent` | int(3) | ✗ | - | - |
| `bdent` | int(3) | ✗ | - | - |
| `f1417` | int(3) | ✗ | - | - |
| `f1414` | int(3) | ✗ | - | - |
| `f1215` | int(3) | ✗ | - | - |
| `f1114` | int(3) | ✗ | - | - |
| `f1012` | int(3) | ✗ | - | - |
| `f0810` | int(3) | ✗ | - | - |
| `f0714` | int(3) | ✗ | - | - |
| `b1417` | int(3) | ✗ | - | - |
| `b1414` | int(3) | ✗ | - | - |
| `b1215` | int(3) | ✗ | - | - |
| `b1114` | int(3) | ✗ | - | - |
| `b1012` | int(3) | ✗ | - | - |
| `b0810` | int(3) | ✗ | - | - |
| `b0714` | int(3) | ✗ | - | - |
| `fread` | longtext | ✗ | - | - |
| `salerate` | int(5) | ✗ | - | - |
| `qty` | int(5) | ✗ | - | จำนวน |
| `charge` | int(5) | ✗ | - | - |
| `fu` | tinyint(1) | ✗ | - | - |
| `crok` | varchar(1) | ✗ | - | - |
| `dct` | varchar(5) | ✗ | - | - |

---

### xryrqt

**คำอธิบาย:** -

**จำนวนแถว:** 252,152

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdate` | date | ✗ | IDX | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | IDX | เวลาที่มารับบริการ |
| `rqttime` | int(4) | ✗ | - | - |
| `xrycode` | varchar(4) | ✗ | - | - |
| `fu` | tinyint(1) | ✗ | - | - |
| `rgtok` | tinyint(1) | ✗ | - | - |
| `crok` | varchar(1) | ✗ | - | - |
| `xan` | int(15) | ✗ | - | - |
| `dct` | varchar(5) | ✓ | - | - |

---


## laboratory

### ccd_lab_result

**คำอธิบาย:** ข้อมูลห้องปฏิบัติการ

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|

---

### l_maplab

**คำอธิบาย:** ข้อมูลห้องปฏิบัติการ

**จำนวนแถว:** 46

**Engine:** InnoDB

**Primary Key:** `labcode, labtest`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `labtest` | varchar(2) | ✗ | PK | - |
| `labcode` | varchar(3) | ✗ | PK | รหัสแล็บ |
| `labtable` | varchar(10) | ✗ | - | - |
| `labfield` | varchar(10) | ✗ | - | - |
| `icd10tm` | varchar(10) | ✓ | - | - |

---

### lab

**คำอธิบาย:** ห้องปฏิบัติการ

**จำนวนแถว:** 1,397

**Engine:** MyISAM

**Primary Key:** `labcode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `labcode` | varchar(3) | ✗ | PK | รหัสแล็บ |
| `labname` | varchar(70) | ✓ | IDX | ชื่อแล็บ |
| `pricelab` | int(6) | ✗ | - | - |
| `pricelabcgd` | int(6) | ✗ | - | - |
| `ptright` | varchar(255) | ✗ | - | ผู้ป่วย right |
| `dbf` | varchar(15) | ✗ | - | - |
| `dbfs` | varchar(100) | ✗ | - | - |
| `cgd` | varchar(5) | ✗ | - | - |
| `tmlt` | varchar(100) | ✗ | - | - |
| `tmltname` | varchar(100) | ✗ | - | - |
| `loinc` | varchar(100) | ✗ | - | - |
| `loincname` | varchar(255) | ✗ | - | - |
| `formi` | varchar(30) | ✗ | - | - |
| `forme` | varchar(30) | ✗ | - | - |
| `formh` | varchar(30) | ✗ | - | - |
| `laballow` | varchar(100) | ✗ | - | - |
| `etype` | varchar(100) | ✗ | - | - |
| `formp` | varchar(30) | ✗ | - | - |
| `unit` | varchar(2) | ✗ | - | หน่วย |
| `tabs` | varchar(2) | ✗ | - | - |
| `labgroup` | varchar(2) | ✓ | - | - |
| `adp_code` | varchar(20) | ✗ | - | รหัส adp |
| `adp_type` | varchar(2) | ✗ | - | ประเภท adp |

---

### lab-routine

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `routine_name` | varchar(200) | ✓ | - | ชื่อ routine |
| `dx_routine` | int(11) | ✓ | - | - |

---

### lab_08/04/2564

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 878

**Engine:** MyISAM

**Primary Key:** `labcode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `labcode` | varchar(3) | ✗ | PK | รหัสแล็บ |
| `labname` | varchar(70) | ✓ | IDX | ชื่อแล็บ |
| `pricelab` | int(6) | ✗ | - | - |
| `pricelabcgd` | int(6) | ✗ | - | - |
| `ptright` | varchar(255) | ✗ | - | ผู้ป่วย right |
| `dbf` | varchar(15) | ✗ | - | - |
| `dbfs` | varchar(100) | ✗ | - | - |
| `cgd` | varchar(5) | ✗ | - | - |
| `tmlt` | varchar(100) | ✗ | - | - |
| `tmltname` | varchar(100) | ✗ | - | - |
| `loinc` | varchar(100) | ✗ | - | - |
| `loincname` | varchar(255) | ✗ | - | - |
| `formi` | varchar(30) | ✗ | - | - |
| `forme` | varchar(30) | ✗ | - | - |
| `formh` | varchar(30) | ✗ | - | - |
| `laballow` | varchar(100) | ✗ | - | - |
| `etype` | varchar(100) | ✗ | - | - |
| `formp` | varchar(30) | ✗ | - | - |
| `unit` | varchar(2) | ✗ | - | หน่วย |
| `tabs` | varchar(2) | ✗ | - | - |

---

### lab_co_mapping

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 893

**Engine:** InnoDB

**Primary Key:** `labcode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `labcode` | varchar(3) | ✗ | PK | รหัสแล็บ |
| `labname` | varchar(255) | ✓ | - | ชื่อแล็บ |
| `speciment` | varchar(2) | ✓ | - | - |
| `objective` | varchar(2) | ✓ | - | - |
| `testtool` | varchar(2) | ✓ | - | - |

---

### lab_group

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | varchar(100) | ✗ | PK | รหัสประจำ (Primary Key) |
| `group_code` | varchar(100) | ✓ | - | รหัส group |
| `group_game` | varchar(100) | ✓ | - | - |

---

### lab_mapping

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 10,604

**Engine:** InnoDB

**Primary Key:** `lab_map_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `lab_map_id` | int(11) | ✗ | PK | รหัส lab_map |
| `lab_code` | varchar(10) | ✗ | IDX | รหัส lab |
| `lab_name` | varchar(255) | ✗ | - | ชื่อ lab |
| `lab_test_code` | varchar(20) | ✗ | IDX | รหัส lab_test |
| `lab_test_name` | varchar(50) | ✗ | - | ชื่อ lab_test |
| `lab_export_code` | varchar(20) | ✗ | IDX | รหัส lab_export |
| `lab_export_name` | varchar(30) | ✗ | - | ชื่อ lab_export |
| `lab_export_group` | varchar(2) | ✓ | - | - |
| `is_active` | varchar(1) | ✗ | - | ใช้งานอยู่ |
| `d_update` | timestamp | ✓ | - | - |

---

### lab_minio_log

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 26,117

**Engine:** InnoDB

**Primary Key:** `ln`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ln` | int(11) | ✗ | PK | - |
| `l_update` | datetime | ✓ | - | - |

---

### lab_objective

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 20

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### lab_pcr_text

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `pcr_text` | varchar(255) | ✓ | - | - |

---

### lab_pcr_text2

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `pcr_text` | varchar(255) | ✓ | - | - |

---

### lab_pcr_text_3g

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `pcr_text` | varchar(255) | ✓ | - | - |

---

### lab_permis

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 20

**Engine:** InnoDB

**Primary Key:** `code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | varchar(20) | ✗ | PK | รหัส |
| `name` | varchar(255) | ✗ | - | ชื่อ |
| `labcode` | text | ✗ | - | รหัสแล็บ |

---

### lab_provider

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(3) | ✗ | PK | รหัสประจำ (Primary Key) |
| `provider_name` | varchar(255) | ✓ | - | ชื่อ provider |

---

### lab_sign

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `imageid` | varchar(5) | ✗ | IDX | - |
| `sign` | text | ✓ | - | - |

---

### lab_speciment_type

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 16

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `description` | varchar(255) | ✓ | IDX | คำอธิบาย |
| `description_th` | varchar(255) | ✓ | - | - |
| `id_old` | varchar(255) | ✓ | - | - |

---

### lab_test_tool

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 59

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `name` | varchar(255) | ✓ | IDX | ชื่อ |
| `license` | varchar(255) | ✓ | IDX | - |
| `loinc_id` | varchar(255) | ✓ | - | รหัส loinc |

---

### lab_well_mapping

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 11,460

**Engine:** InnoDB

**Primary Key:** `lab_map_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `lab_map_id` | int(11) | ✗ | PK | รหัส lab_map |
| `lab_code` | varchar(10) | ✗ | IDX | รหัส lab |
| `lab_name` | varchar(255) | ✗ | - | ชื่อ lab |
| `lab_test_code` | varchar(20) | ✗ | IDX | รหัส lab_test |
| `lab_test_name` | varchar(50) | ✗ | - | ชื่อ lab_test |
| `lab_export_code` | varchar(20) | ✗ | IDX | รหัส lab_export |
| `lab_export_name` | varchar(30) | ✗ | - | ชื่อ lab_export |
| `is_active` | varchar(1) | ✗ | - | ใช้งานอยู่ |
| `d_update` | timestamp | ✓ | - | - |

---

### labblood

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 133

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `cgd` | varchar(11) | ✓ | IDX | - |
| `labname` | varchar(250) | ✓ | - | ชื่อแล็บ |

---

### labcat

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 729

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `lccode` | varchar(255) | ✗ | IDX | - |
| `billgroup` | varchar(255) | ✓ | - | - |
| `cscode` | varchar(255) | ✓ | - | - |
| `tmlt` | varchar(255) | ✓ | - | - |
| `loinc` | varchar(255) | ✓ | - | - |
| `panel` | varchar(255) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `sflag` | varchar(255) | ✓ | - | - |
| `chargecat` | varchar(255) | ✓ | - | - |
| `unitprice` | varchar(255) | ✓ | - | ราคาต่อหน่วย |
| `benifitpla` | varchar(255) | ✓ | - | - |
| `reimbprice` | varchar(255) | ✓ | - | - |
| `updateflag` | varchar(255) | ✓ | - | - |
| `updatebeg` | varchar(255) | ✓ | - | - |
| `updateend` | varchar(255) | ✓ | - | - |
| `rpdatebeg` | varchar(255) | ✓ | - | - |
| `rpdateend` | varchar(255) | ✓ | - | - |
| `dateupd` | varchar(255) | ✓ | - | - |

---

### labcode_sps

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 663

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `labcode` | varchar(50) | ✓ | - | รหัสแล็บ |
| `labname` | varchar(255) | ✓ | - | ชื่อแล็บ |
| `labgroup` | varchar(2) | ✓ | - | - |

---

### labcodemap

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 444

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hilabcode` | varchar(3) | ✗ | - | - |
| `hilabname` | varchar(255) | ✗ | - | - |
| `loinccode` | varchar(11) | ✗ | - | - |
| `loincname` | varchar(255) | ✗ | - | - |
| `icd10tm` | varchar(11) | ✗ | - | - |
| `icd10tmname` | varchar(255) | ✗ | - | - |

---

### labcomment

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 60

**Engine:** InnoDB

**Primary Key:** `ln`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ln` | int(11) | ✗ | PK | - |
| `txtcomment` | text | ✓ | - | - |

---

### labdtx

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 67

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(20) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `visitdate` | date | ✓ | - | - |
| `labc` | int(100) | ✓ | - | - |
| `labb` | int(100) | ✓ | - | - |

---

### lablabel

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 7,164

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(7) | ✗ | PK | รหัสประจำ (Primary Key) |
| `labcode` | varchar(3) | ✓ | IDX | รหัสแล็บ |
| `labname` | varchar(255) | ✓ | - | ชื่อแล็บ |
| `filename` | varchar(25) | ✓ | IDX | - |
| `fieldname` | varchar(25) | ✓ | IDX | - |
| `fieldlabel` | varchar(100) | ✓ | - | - |
| `normal` | varchar(100) | ✓ | - | - |
| `unit` | varchar(100) | ✓ | - | หน่วย |
| `inputmask` | varchar(30) | ✓ | - | - |
| `crimin` | varchar(10) | ✓ | - | - |
| `crimax` | varchar(10) | ✓ | - | - |
| `critext` | varchar(20) | ✓ | - | - |

---

### lablabel_16122564

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 4,140

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(7) | ✗ | PK | รหัสประจำ (Primary Key) |
| `labcode` | varchar(3) | ✓ | IDX | รหัสแล็บ |
| `labname` | varchar(255) | ✓ | - | ชื่อแล็บ |
| `filename` | varchar(25) | ✓ | IDX | - |
| `fieldname` | varchar(25) | ✓ | IDX | - |
| `fieldlabel` | varchar(100) | ✓ | - | - |
| `normal` | varchar(100) | ✓ | - | - |
| `unit` | varchar(100) | ✓ | - | หน่วย |
| `inputmask` | varchar(30) | ✓ | - | - |
| `crimin` | varchar(10) | ✓ | - | - |
| `crimax` | varchar(10) | ✓ | - | - |
| `critext` | varchar(20) | ✓ | - | - |

---

### lablis

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 2,995

**Engine:** InnoDB

**Primary Key:** `ln`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ln` | int(15) | ✗ | PK | - |
| `hn` | varchar(15) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `an` | varchar(15) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `senddate` | date | ✓ | IDX | - |
| `acceptby` | varchar(100) | ✗ | - | - |
| `accepttime` | varchar(4) | ✗ | - | - |

---

### laborderrun

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 52,687

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `order_date` | date | ✓ | IDX | วันที่ order |
| `l_number` | varchar(4) | ✓ | - | - |
| `l_group` | varchar(2) | ✓ | IDX | - |
| `hn` | varchar(11) | ✓ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `order_p` | varchar(3) | ✓ | - | - |
| `vn` | varchar(11) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | varchar(11) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |

---

### labresult

**คำอธิบาย:** ผลแล็บ

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ln` | varchar(20) | ✓ | IDX | - |
| `lab_code_local` | varchar(20) | ✓ | IDX | - |
| `lab_name` | varchar(255) | ✓ | - | ชื่อ lab |
| `labresult` | text | ✓ | - | ผลแล็บ |
| `unit` | varchar(255) | ✓ | - | หน่วย |
| `normal` | varchar(255) | ✓ | - | - |

---

### labsend

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 25

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `labcode` | varchar(3) | ✓ | - | รหัสแล็บ |
| `files` | varchar(10) | ✓ | - | - |
| `labtype` | varchar(10) | ✓ | - | - |
| `typelab` | varchar(1) | ✓ | - | - |
| `typename` | varchar(255) | ✓ | - | - |
| `labname` | varchar(255) | ✓ | - | ชื่อแล็บ |

---

### labtype

**คำอธิบาย:** ห้องปฏิบัติการ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `labtype` | varchar(2) | ✗ | - | - |
| `nametype` | varchar(40) | ✓ | - | - |
| `f21` | varchar(1) | ✓ | - | - |
| `f43` | varchar(1) | ✓ | - | - |

---

### lbbk_ก่อนปรับ labcode 362 เป็น 222

**คำอธิบาย:** ข้อมูลห้องปฏิบัติการ

**จำนวนแถว:** 1,446,600

**Engine:** InnoDB

**Primary Key:** `ln`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ln` | int(11) | ✗ | PK | - |
| `lfudate` | date | ✗ | - | - |
| `labcode` | varchar(3) | ✗ | IDX | รหัสแล็บ |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `reportby` | varchar(100) | ✓ | - | - |
| `requestby` | varchar(100) | ✓ | - | - |
| `fufinish` | tinyint(1) | ✗ | - | - |
| `vstdttm` | datetime | ✗ | IDX | - |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `senddate` | date | ✗ | IDX | - |
| `sendtime` | int(4) | ✗ | - | - |
| `srvdate` | date | ✗ | - | - |
| `srvtime` | int(4) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `finish` | tinyint(1) | ✗ | - | - |
| `c2automate` | varchar(1) | ✗ | IDX | - |
| `hcode` | varchar(5) | ✗ | IDX | - |
| `approve` | varchar(100) | ✓ | - | - |
| `lcomment` | varchar(1) | ✗ | - | - |
| `labcomment` | varchar(255) | ✗ | - | - |
| `labgroup` | varchar(2) | ✗ | - | - |
| `pdffile` | varchar(20) | ✗ | - | - |
| `accept` | varchar(1) | ✓ | IDX | - |
| `acceptby` | varchar(255) | ✓ | - | - |
| `accepttime` | varchar(4) | ✗ | - | - |
| `approvedate` | date | ✓ | - | - |
| `approvetime` | varchar(4) | ✓ | - | - |

---

### maplab

**คำอธิบาย:** ข้อมูลห้องปฏิบัติการ

**จำนวนแถว:** 850

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `labcode` | varchar(3) | ✓ | - | รหัสแล็บ |
| `labname` | varchar(70) | ✓ | - | ชื่อแล็บ |
| `labmap` | varchar(3) | ✓ | - | - |
| `labtype` | varchar(2) | ✓ | - | - |

---

### roche

**คำอธิบาย:** -

**จำนวนแถว:** 70

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hi_lab_code` | varchar(3) | ✓ | - | รหัส hi_lab |
| `hi_lab_name` | varchar(100) | ✓ | - | ชื่อ hi_lab |
| `hi_test_name` | varchar(20) | ✓ | - | ชื่อ hi_test |
| `hi_test_label` | varchar(100) | ✓ | - | - |
| `roche_host_code` | varchar(10) | ✓ | - | รหัส roche_host |

---

### tpodidt

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `tpno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `tpno` | int(9) | ✗ | PK | - |
| `nametpdt` | longtext | ✗ | - | - |
| `ordertype` | varchar(1) | ✗ | - | - |
| `foroneday` | longtext | ✓ | - | - |
| `forcontin` | longtext | ✓ | - | - |
| `rtnirxd` | int(4) | ✓ | - | - |
| `rtnirxc` | int(4) | ✓ | - | - |
| `rtnllabd` | int(4) | ✓ | - | - |
| `rtnllabc` | int(4) | ✓ | - | - |
| `rtnifood` | varchar(2) | ✓ | - | - |

---

### vaccine_mophic_lab_log

**คำอธิบาย:** ข้อมูลห้องปฏิบัติการ

**จำนวนแถว:** 2,242

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(20) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(20) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(20) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `pop_id` | varchar(50) | ✓ | - | รหัส pop |
| `labcode` | varchar(5) | ✓ | - | รหัสแล็บ |
| `patient_lab_ref_code` | varchar(50) | ✓ | - | รหัส patient_lab_ref |
| `patient_lab_name_ref` | text | ✓ | - | - |
| `patient_lab_normal_value_ref` | text | ✓ | - | - |
| `tmlt_code` | varchar(50) | ✓ | - | รหัส tmlt |
| `patient_lab_result_text` | varchar(50) | ✓ | - | - |
| `authorized_officer_name` | varchar(50) | ✓ | - | ชื่อ authorized_officer |
| `lab_atk_fda_reg_no` | varchar(50) | ✓ | - | เลขที่ lab_atk_fda_reg |
| `messagecode` | int(11) | ✓ | - | - |
| `message` | text | ✓ | - | - |
| `report_datetime` | date | ✓ | - | - |

---

### visitcvdrisk

**คำอธิบาย:** -

**จำนวนแถว:** 67,525

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `cvdrisk` | varchar(1) | ✗ | - | - |
| `dmstatus` | varchar(1) | ✓ | - | - |
| `cvdresult` | varchar(7) | ✓ | - | - |
| `labresult` | varchar(40) | ✓ | - | ผลแล็บ |
| `ldate` | date | ✓ | - | - |

---


## moph

### debt_account

**คำอธิบาย:** -

**จำนวนแถว:** 57

**Engine:** InnoDB

**Primary Key:** `debt_acount_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `debt_acount_id` | int(10) unsigned | ✗ | PK | รหัส debt_acount |
| `debt_account_name` | varchar(255) | ✗ | - | ชื่อ debt_account |
| `debt_account_code` | varchar(255) | ✓ | - | รหัส debt_account |
| `start_date` | date | ✓ | - | วันที่ start |
| `end_date` | date | ✓ | - | วันที่ end |
| `is_active` | enum('N','Y') | ✓ | - | ใช้งานอยู่ |
| `d_update` | timestamp | ✓ | - | - |
| `debt_type` | varchar(3) | ✓ | - | ประเภท debt |
| `debt_fund` | varchar(255) | ✓ | - | - |
| `debt_list` | varchar(255) | ✓ | - | - |
| `income_id` | smallint(6) | ✓ | IDX | รหัส income |

---

### export21f

**คำอธิบาย:** -

**จำนวนแถว:** 76,534

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pcucode` | varchar(7) | ✗ | IDX | - |
| `pid` | varchar(13) | ✗ | IDX | - |
| `cid` | varchar(13) | ✗ | IDX | เลขบัตรประชาชน |
| `seq` | varchar(16) | ✗ | IDX | ลำดับ |
| `f_type` | varchar(8) | ✗ | - | ประเภท f |
| `exp_start` | date | ✗ | - | - |
| `exp_end` | date | ✗ | - | - |
| `exp_date` | date | ✗ | - | วันที่ exp |
| `chronic` | varchar(8) | ✗ | - | - |
| `datedx` | varchar(8) | ✗ | - | - |
| `vcctype` | varchar(8) | ✗ | - | - |

---

### hi7_endpoint

**คำอธิบาย:** -

**จำนวนแถว:** 438

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | varchar(15) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `authen_code_closevisit` | varchar(255) | ✓ | - | - |
| `transaction_id_closevisit` | varchar(255) | ✓ | - | - |
| `service_date_time` | varchar(16) | ✓ | - | เวลา service_date |
| `invoice_date_time` | varchar(16) | ✓ | - | เวลา invoice_date |
| `total_amount` | decimal(10,2) | ✓ | - | จำนวนเงิน total |
| `paid_amount` | decimal(10,2) | ✓ | - | จำนวนเงิน paid |
| `privilege_amount` | decimal(10,2) | ✓ | - | จำนวนเงิน privilege |
| `recorder_pid` | varchar(13) | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |
| `systems` | enum('hi7audit','hiwin','webapp','other','tranferdata') | ✓ | - | - |

---

### indexhi

**คำอธิบาย:** -

**จำนวนแถว:** 101

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `path` | varchar(20) | ✓ | - | - |
| `file` | varchar(8) | ✓ | - | - |
| `key` | varchar(65) | ✓ | - | - |
| `tag` | varchar(36) | ✓ | - | - |

---

### l_disabpcu

**คำอธิบาย:** -

**จำนวนแถว:** 16

**Engine:** MyISAM

**Primary Key:** `pcucode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pcucode` | varchar(5) | ✗ | PK | - |
| `namepcu` | varchar(100) | ✗ | - | - |

---

### l_syndrom

**คำอธิบาย:** -

**จำนวนแถว:** 58

**Engine:** InnoDB

**Primary Key:** `codesyndrom`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codesyndrom` | varchar(4) | ✗ | PK | - |
| `description` | text | ✓ | - | คำอธิบาย |
| `icd10` | varchar(255) | ✓ | - | รหัสโรค ICD-10 |

---

### l_syndrom2

**คำอธิบาย:** -

**จำนวนแถว:** 58

**Engine:** InnoDB

**Primary Key:** `codesyndrom`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codesyndrom` | varchar(4) | ✗ | PK | - |
| `description` | text | ✓ | - | คำอธิบาย |
| `icd10` | varchar(255) | ✓ | - | รหัสโรค ICD-10 |

---

### mophicchecklist

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `v1` | int(1) | ✗ | - | - |
| `ptname` | int(1) | ✗ | - | ผู้ป่วย name |
| `pop_id` | int(1) | ✗ | - | รหัส pop |

---

### mophichi

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `ptname` | int(1) | ✗ | - | ผู้ป่วย name |
| `hospname` | int(1) | ✗ | - | - |
| `contact` | int(1) | ✗ | - | - |
| `observ` | int(1) | ✗ | - | - |
| `namehpt` | int(1) | ✗ | - | - |
| `lotno` | int(1) | ✗ | - | - |
| `serial_no` | int(1) | ✗ | - | เลขที่ serial |
| `provider` | int(1) | ✗ | - | - |
| `v1` | int(1) | ✗ | - | - |
| `fudate` | int(1) | ✗ | - | - |
| `staus_flg` | int(1) | ✗ | - | - |

---

### orfind

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `orno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orno` | int(8) | ✗ | PK | - |
| `finding` | longtext | ✗ | - | - |

---

### orwound

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `orno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orno` | int(8) | ✗ | PK | - |
| `woundtype` | varchar(1) | ✗ | - | - |

---

### pcukao

**คำอธิบาย:** -

**จำนวนแถว:** 34

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `No` | varchar(255) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `admit` | varchar(255) | ✓ | - | - |
| `dc` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `boxset` | varchar(255) | ✓ | - | - |

---

### pcukud

**คำอธิบาย:** -

**จำนวนแถว:** 84

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `No` | varchar(255) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `admit` | varchar(255) | ✓ | - | - |
| `dc` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `boxset` | varchar(255) | ✓ | - | - |

---

### pcunoon

**คำอธิบาย:** -

**จำนวนแถว:** 50

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `No` | varchar(255) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `admit` | varchar(255) | ✓ | - | - |
| `dc` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `boxset` | varchar(255) | ✓ | - | - |
| `A2` | varchar(255) | ✓ | - | - |

---

### pcusewi

**คำอธิบาย:** -

**จำนวนแถว:** 286

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `No` | varchar(255) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `Cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `au` | varchar(255) | ✓ | - | - |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `admit` | varchar(255) | ✓ | - | - |
| `dc` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `boxset` | varchar(255) | ✓ | - | - |
| `A2` | varchar(255) | ✓ | - | - |

---

### pcusuk

**คำอธิบาย:** -

**จำนวนแถว:** 129

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `No` | varchar(255) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `admit` | varchar(255) | ✓ | - | - |
| `dc` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `boxset` | varchar(255) | ✓ | - | - |

---

### phistory

**คำอธิบาย:** -

**จำนวนแถว:** 6,898,284

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `phistory` | varchar(40) | ✗ | - | - |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |

---

### proc_perform

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `proc_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `proc_code` | varchar(20) | ✗ | PK | รหัส proc |
| `proc_id` | int(11) | ✓ | - | รหัส proc |
| `proc_name` | varchar(125) | ✓ | - | ชื่อ proc |
| `indic_tab` | varchar(1) | ✓ | - | - |
| `spec_tab` | varchar(1) | ✓ | - | - |
| `find_tab` | varchar(1) | ✓ | - | - |
| `find_set` | varchar(20) | ✓ | - | - |
| `anatomy` | varchar(125) | ✓ | - | - |

---

### q4u_service_points

**คำอธิบาย:** -

**จำนวนแถว:** 43

**Engine:** InnoDB

**Primary Key:** `service_point_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `service_point_id` | int(3) | ✗ | PK | รหัส service_point |
| `service_point_name` | varchar(100) | ✓ | UK | ชื่อ service_point |
| `service_point_abbr` | varchar(50) | ✓ | - | - |
| `local_code` | varchar(6) | ✓ | - | รหัส local |
| `standard43_code` | varchar(5) | ✓ | - | รหัส standard43 |
| `service_point_type_id` | int(3) | ✓ | - | รหัส service_point_type |
| `topic` | varchar(50) | ✓ | UK | - |
| `prefix` | char(2) | ✓ | - | - |
| `department_id` | int(3) | ✓ | - | รหัส department |
| `kios` | char(1) | ✓ | - | - |
| `use_old_queue` | enum('Y','N') | ✓ | - | - |
| `group_compare` | enum('Y','N') | ✓ | - | - |
| `priority_queue_running` | enum('Y','N') | ✓ | - | - |
| `sound_id` | int(11) | ✓ | - | รหัส sound |
| `sound_speed` | decimal(3,2) | ✓ | - | - |

---

### q4u_sounds

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** InnoDB

**Primary Key:** `sound_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `sound_id` | int(11) | ✗ | PK | รหัส sound |
| `sound_name` | varchar(255) | ✓ | - | ชื่อ sound |
| `sound_file` | varchar(255) | ✓ | - | - |

---

### registersendpost

**คำอธิบาย:** -

**จำนวนแถว:** 223

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `curraddr` | longtext | ✗ | - | - |

---

### rtndt

**คำอธิบาย:** -

**จำนวนแถว:** 1,648

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namertndt` | varchar(50) | ✗ | - | - |
| `rtnno` | int(4) | ✗ | IDX | - |
| `doseprn1` | varchar(60) | ✗ | - | - |
| `meditem` | varchar(7) | ✗ | - | - |
| `medusage` | varchar(5) | ✗ | - | - |
| `qty` | int(9) | ✗ | - | จำนวน |

---

### visitdrscreenncd

**คำอธิบาย:** -

**จำนวนแถว:** 272

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `rt_de` | varchar(1) | ✗ | - | - |
| `lt_de` | varchar(1) | ✗ | - | - |
| `dmyr` | varchar(3) | ✗ | - | - |
| `rx_oral` | varchar(1) | ✗ | - | ใบสั่งยา _oral |
| `rx_inj` | varchar(1) | ✗ | - | ใบสั่งยา _inj |
| `rt_va_no` | varchar(1) | ✗ | - | เลขที่ rt_va |
| `lt_va_no` | varchar(1) | ✗ | - | เลขที่ lt_va |
| `rt_dr_no` | varchar(1) | ✗ | - | เลขที่ rt_dr |
| `lt_dr_no` | varchar(1) | ✗ | - | เลขที่ lt_dr |
| `rx_no` | varchar(1) | ✗ | - | เลขที่ rx |
| `ot_rt` | varchar(20) | ✗ | - | - |
| `ot_lt` | varchar(20) | ✗ | - | - |
| `lens_rt` | varchar(1) | ✗ | - | - |
| `lens_lt` | varchar(1) | ✗ | - | - |
| `rt_comment` | varchar(40) | ✗ | - | - |
| `lt_comment` | varchar(40) | ✗ | - | - |
| `va_rt_ph` | varchar(20) | ✗ | - | - |
| `va_lt_ph` | varchar(20) | ✗ | - | - |
| `rx_diet` | varchar(1) | ✗ | - | ใบสั่งยา _diet |
| `chkdm` | varchar(1) | ✗ | - | - |
| `fudate` | date | ✗ | - | - |
| `fuother` | varchar(40) | ✗ | - | - |
| `other` | varchar(40) | ✗ | - | - |
| `d_update` | datetime | ✗ | - | - |
| `dct` | varchar(5) | ✗ | - | - |
| `rt_va` | varchar(11) | ✗ | - | - |
| `lt_va` | varchar(11) | ✗ | - | - |

---

### visitscreenfootncd

**คำอธิบาย:** -

**จำนวนแถว:** 1,851

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `sickyear` | varchar(3) | ✗ | - | - |
| `sickmonth` | varchar(2) | ✗ | - | - |
| `fbs` | varchar(5) | ✗ | - | - |
| `datefbs` | date | ✗ | - | - |
| `lesionfoot` | varchar(1) | ✗ | - | - |
| `plesionfoot` | varchar(40) | ✗ | - | - |
| `cutff` | varchar(1) | ✗ | - | - |
| `pcutff` | varchar(40) | ✗ | - | - |
| `usefoot` | varchar(40) | ✗ | - | - |
| `callus` | varchar(1) | ✗ | - | - |
| `pcallus` | varchar(40) | ✗ | - | - |
| `nail` | varchar(1) | ✗ | - | - |
| `pnail` | varchar(40) | ✗ | - | - |
| `fungi` | varchar(1) | ✗ | - | - |
| `pfungi` | varchar(40) | ✗ | - | - |
| `skin` | varchar(1) | ✗ | - | - |
| `neuropathy` | varchar(1) | ✗ | - | - |
| `fdeformities` | varchar(1) | ✗ | - | - |
| `pdprigth` | varchar(1) | ✗ | - | - |
| `pdpleft` | varchar(1) | ✗ | - | - |
| `pptrigth` | varchar(1) | ✗ | - | - |
| `pptleft` | varchar(1) | ✗ | - | - |
| `lesiontofoot` | varchar(1) | ✗ | - | - |
| `plesiontofoot` | varchar(1) | ✗ | - | - |
| `testfootrigth` | varchar(1) | ✗ | - | - |
| `dottfrigth` | varchar(3) | ✗ | - | - |
| `testfootleft` | varchar(1) | ✗ | - | - |
| `dottfleft` | varchar(3) | ✗ | - | - |
| `testmove` | varchar(1) | ✗ | - | - |
| `risktype` | varchar(1) | ✗ | - | - |
| `equipment` | varchar(1) | ✗ | - | - |
| `notefollow` | varchar(40) | ✗ | - | - |
| `recomment` | varchar(1) | ✗ | - | - |
| `dct` | varchar(5) | ✗ | - | - |
| `userupd` | varchar(5) | ✗ | - | - |
| `d_update` | datetime | ✗ | - | - |
| `servicedate` | date | ✗ | - | - |
| `px` | int(11) | ✗ | - | - |
| `py` | int(11) | ✗ | - | - |

---

### woundtype

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | varchar(1) | ✗ | PK | รหัส |
| `name` | varchar(50) | ✗ | - | ชื่อ |

---

### xrylend

**คำอธิบาย:** -

**จำนวนแถว:** 30

**Engine:** InnoDB

**Primary Key:** `recno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `recno` | int(9) unsigned zerofill | ✗ | PK | - |
| `lenddate` | date | ✗ | - | - |
| `rtrndate` | date | ✗ | - | - |
| `cln` | varchar(5) | ✓ | - | - |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `xrycode` | varchar(4) | ✗ | - | - |
| `stafflend` | varchar(2) | ✗ | - | - |
| `staff` | varchar(2) | ✗ | - | - |
| `lendman` | varchar(50) | ✗ | - | - |
| `reason` | varchar(50) | ✗ | - | - |
| `staffrtrn` | varchar(2) | ✗ | - | - |
| `rtrnman` | varchar(50) | ✗ | - | - |

---


## nutrition

### fooddm

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `kcal`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `kcal` | varchar(12) | ✗ | PK | - |
| `p1_n1` | varchar(15) | ✗ | - | - |
| `p1_n2` | varchar(15) | ✗ | - | - |
| `p1_n3` | varchar(15) | ✗ | - | - |
| `p1_n4` | varchar(15) | ✗ | - | - |
| `p1_n5` | varchar(15) | ✗ | - | - |
| `p2_n1` | varchar(15) | ✗ | - | - |
| `p2_n2` | varchar(15) | ✗ | - | - |
| `p2_n3` | varchar(15) | ✗ | - | - |
| `p2_n4` | varchar(15) | ✗ | - | - |
| `p2_n5` | varchar(15) | ✗ | - | - |
| `p3_n1` | varchar(15) | ✗ | - | - |
| `p3_n2` | varchar(15) | ✗ | - | - |
| `p3_n3` | varchar(15) | ✗ | - | - |
| `p3_n4` | varchar(15) | ✗ | - | - |
| `p3_n5` | varchar(15) | ✗ | - | - |

---

### foodmain

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** MyISAM

**Primary Key:** `codefood`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codefood` | varchar(2) | ✗ | PK | - |
| `namefood` | varchar(30) | ✗ | - | - |
| `name_s` | varchar(15) | ✗ | - | - |

---

### foodname

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `codefoodnm`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codefoodnm` | varchar(8) | ✗ | PK | - |
| `namefoodnm` | varchar(30) | ✗ | - | - |
| `name_t` | varchar(30) | ✗ | - | - |
| `cost` | int(4) | ✗ | - | - |

---

### foodorder

**คำอธิบาย:** -

**จำนวนแถว:** 234

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `bw` | decimal(8,1) | ✓ | - | - |
| `height` | decimal(8,1) | ✓ | - | - |
| `bmi` | decimal(8,1) | ✓ | - | - |
| `dm` | varchar(1) | ✗ | - | - |
| `order_by` | varchar(5) | ✗ | - | - |
| `f1` | varchar(2) | ✗ | - | - |
| `f2` | varchar(30) | ✗ | - | - |
| `f3` | longtext | ✗ | - | - |
| `cc` | varchar(4) | ✗ | - | - |
| `feed` | varchar(2) | ✗ | - | - |
| `egg` | varchar(1) | ✗ | - | - |
| `salt` | varchar(4) | ✗ | - | - |
| `water` | varchar(4) | ✗ | - | - |
| `dateon` | datetime | ✗ | - | - |
| `dateoff` | datetime | ✗ | - | - |
| `sp` | varchar(1) | ✗ | - | - |
| `relate` | varchar(1) | ✗ | - | - |
| `ward` | varchar(2) | ✗ | - | หอผู้ป่วยใน |

---

### foodsub

**คำอธิบาย:** -

**จำนวนแถว:** 28

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `codefoodsb` | varchar(2) | ✗ | IDX | - |
| `namefoodsb` | varchar(30) | ✗ | - | - |
| `name_s` | varchar(15) | ✗ | - | - |

---

### foodsum

**คำอธิบาย:** -

**จำนวนแถว:** 138,066

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `fooddate` | datetime | ✓ | IDX | - |
| `f1` | varchar(2) | ✓ | - | - |
| `f2` | varchar(30) | ✓ | - | - |
| `f3` | varchar(200) | ✓ | - | - |
| `foodp` | varchar(1) | ✓ | - | - |

---

### fooduser

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(4) | ✗ | PK | รหัสประจำ (Primary Key) |
| `user` | varchar(10) | ✗ | IDX | - |
| `pass` | varchar(10) | ✗ | IDX | - |
| `namefoodus` | varchar(30) | ✗ | - | - |
| `pstn` | varchar(30) | ✗ | - | - |
| `image` | longblob | ✗ | - | - |

---

### l_childfood

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `childfood`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `childfood` | varchar(1) | ✗ | PK | - |
| `food` | varchar(40) | ✓ | - | - |

---

### office

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `offid`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `offid` | char(5) | ✗ | PK | - |
| `tel` | varchar(36) | ✓ | - | โทรศัพท์ |
| `timeworkday` | varchar(100) | ✓ | - | - |
| `timeweekend` | varchar(100) | ✓ | - | - |
| `nationcode` | varchar(3) | ✓ | IDX | - |
| `religcode` | char(2) | ✓ | IDX | - |
| `occupacode` | char(4) | ✓ | IDX | - |
| `daystartrep` | tinyint(2) | ✓ | - | - |
| `monthstartrep` | tinyint(1) | ✓ | - | - |
| `dayendrep` | tinyint(2) | ✓ | - | - |
| `offid506` | varchar(8) | ✓ | - | - |
| `offid504` | varchar(12) | ✓ | - | - |
| `foodsbl` | double(5,0) | ✓ | - | - |
| `foodsbn` | double(7,0) | ✓ | - | - |
| `foodsbr` | double(7,0) | ✓ | - | - |
| `foodnofsbl` | double(5,0) | ✓ | - | - |
| `foodnofsbn` | double(7,0) | ✓ | - | - |
| `foodnofsbr` | double(7,0) | ✓ | - | - |
| `upperhypern` | int(4) | ✓ | - | - |
| `lowerhypern` | int(4) | ✓ | - | - |
| `lowerhyperr` | int(4) | ✓ | - | - |
| `upperhyperh` | int(4) | ✓ | - | - |
| `s` | varchar(255) | ✓ | - | - |
| `mon` | varchar(255) | ✓ | - | - |
| `tue` | varchar(255) | ✓ | - | - |
| `wed` | varchar(255) | ✓ | - | - |
| `thu` | varchar(255) | ✓ | - | - |
| `fri` | varchar(255) | ✓ | - | - |
| `sat` | varchar(255) | ✓ | - | - |
| `daydrugstore` | date | ✓ | - | - |
| `subdistrictimport` | varchar(6) | ✓ | - | - |
| `datevernow` | date | ✓ | - | - |
| `dateverupdate` | date | ✓ | - | - |
| `diagoption` | char(1) | ✓ | - | - |
| `diagautozcode` | char(1) | ✓ | - | - |
| `drugorder` | char(1) | ✓ | - | - |
| `picturedisplay` | char(1) | ✓ | - | - |
| `money2opt` | char(1) | ✓ | - | - |
| `outcuprc` | char(1) | ✓ | - | - |
| `optque` | char(1) | ✓ | - | - |
| `optalgshow` | char(1) | ✓ | - | - |
| `toiletslope` | char(1) | ✓ | - | - |
| `performancereform` | char(1) | ✓ | - | - |
| `disablecampus` | char(1) | ✓ | - | - |
| `clinicthaitread` | char(1) | ✓ | - | - |

---


## opd

### Mrs_OPD_Card

**คำอธิบาย:** -

**จำนวนแถว:** 2,310

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(6) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Onumber` | varchar(7) | ✗ | - | - |
| `hn` | varchar(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | varchar(30) | ✗ | IDX | ชื่อจริง |
| `lname` | varchar(30) | ✗ | IDX | นามสกุล |
| `brthdate` | date | ✗ | - | - |
| `age` | varchar(3) | ✗ | - | - |
| `sex` | varchar(10) | ✗ | - | - |
| `mrtlst` | varchar(20) | ✗ | - | - |
| `allergy` | varchar(100) | ✗ | - | - |
| `pttype` | varchar(80) | ✗ | - | ประเภทสิทธิ |
| `pop_id` | varchar(17) | ✗ | IDX | รหัส pop |
| `ctzshp` | varchar(80) | ✗ | - | - |
| `ntnlty` | varchar(80) | ✗ | - | - |
| `rlgn` | varchar(20) | ✗ | - | - |
| `occptn` | varchar(80) | ✗ | - | - |
| `bloodgrp` | varchar(10) | ✗ | - | - |
| `addrpart` | varchar(30) | ✗ | - | ส่วนที่อยู่ |
| `moopart` | varchar(80) | ✗ | - | หมู่ |
| `tmbpart` | varchar(80) | ✗ | - | ตำบล |
| `amppart` | varchar(80) | ✗ | - | อำเภอ |
| `chwpart` | varchar(80) | ✗ | - | จังหวัด |
| `hometel` | varchar(20) | ✗ | - | - |
| `mthname` | varchar(30) | ✗ | - | - |
| `fthname` | varchar(30) | ✗ | - | - |
| `infmname` | varchar(30) | ✗ | - | - |
| `infmaddr` | varchar(100) | ✗ | - | - |
| `jsector` | varchar(50) | ✗ | - | - |
| `fdate` | date | ✗ | - | - |
| `time` | time | ✗ | - | เวลา |
| `register` | varchar(50) | ✗ | - | - |
| `Tregister` | varchar(50) | ✗ | - | - |
| `status` | varchar(1) | ✗ | - | สถานะ |
| `Card` | varchar(100) | ✗ | - | - |

---

### Mrs_OPD_Card_IN

**คำอธิบาย:** -

**จำนวนแถว:** 2,182

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(5) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Onumber` | varchar(7) | ✗ | - | - |
| `INnumber` | varchar(7) | ✗ | - | - |
| `hn` | varchar(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | varchar(30) | ✗ | - | ชื่อจริง |
| `lname` | varchar(30) | ✗ | - | นามสกุล |
| `sex` | varchar(10) | ✗ | - | - |
| `age` | varchar(3) | ✗ | - | - |
| `pttype` | varchar(30) | ✗ | - | ประเภทสิทธิ |
| `pop_id` | varchar(17) | ✗ | - | รหัส pop |
| `jsector` | varchar(50) | ✗ | - | - |
| `fdate` | date | ✗ | - | - |
| `time` | time | ✗ | - | เวลา |
| `register` | varchar(30) | ✗ | - | - |
| `Tregister` | varchar(30) | ✗ | - | - |
| `sdate` | date | ✗ | - | - |
| `card` | varchar(30) | ✗ | - | - |

---

### Mrs_OPD_EKG

**คำอธิบาย:** -

**จำนวนแถว:** 477

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(5) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Enumber` | varchar(7) | ✗ | - | - |
| `hn` | varchar(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | varchar(30) | ✗ | - | ชื่อจริง |
| `lname` | varchar(30) | ✗ | - | นามสกุล |
| `sex` | varchar(10) | ✗ | - | - |
| `age` | varchar(3) | ✗ | - | - |
| `pttype` | varchar(30) | ✗ | - | ประเภทสิทธิ |
| `pop_id` | varchar(17) | ✗ | - | รหัส pop |
| `brthdate` | date | ✗ | - | - |
| `jsector` | varchar(50) | ✗ | - | - |
| `fdate` | date | ✗ | - | - |
| `register` | varchar(30) | ✗ | - | - |
| `Tregister` | varchar(30) | ✗ | - | - |
| `sdate` | date | ✗ | - | - |
| `time` | time | ✗ | - | เวลา |

---

### Mrs_OPD_Sub

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(5) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Sname` | varchar(100) | ✓ | - | - |
| `Tname` | varchar(60) | ✓ | - | - |
| `User` | varchar(20) | ✓ | - | - |
| `Pass` | varchar(20) | ✓ | - | - |

---

### Mrs_ssDATA_OPD

**คำอธิบาย:** -

**จำนวนแถว:** 172

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(5) | ✗ | PK | รหัสประจำ (Primary Key) |
| `HN` | varchar(15) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Fullname` | varchar(255) | ✗ | - | - |
| `Age` | varchar(3) | ✗ | - | - |
| `Sex` | varchar(10) | ✗ | - | - |
| `Cid` | varchar(17) | ✗ | - | เลขบัตรประชาชน |
| `DateAdmit` | varchar(20) | ✗ | - | - |
| `Time` | varchar(6) | ✗ | - | เวลา |
| `hos` | varchar(255) | ✗ | - | - |
| `Dx1` | varchar(20) | ✗ | - | - |
| `Dx1name` | varchar(255) | ✗ | - | - |
| `Dx2` | varchar(20) | ✗ | - | - |
| `Dx2name` | varchar(255) | ✗ | - | - |
| `Dx3` | varchar(20) | ✗ | - | - |
| `Dx3name` | varchar(255) | ✗ | - | - |
| `DX4` | varchar(20) | ✗ | - | - |
| `DX4name` | varchar(255) | ✗ | - | - |
| `Proc1` | varchar(20) | ✗ | - | - |
| `Proc1name` | varchar(255) | ✗ | - | - |
| `Proc2` | varchar(20) | ✗ | - | - |
| `Proc2name` | varchar(255) | ✗ | - | - |
| `Dctfname` | varchar(3) | ✗ | - | - |
| `Dctname` | varchar(255) | ✗ | - | - |
| `Dctlcno` | varchar(7) | ✗ | - | - |
| `Cause` | varchar(255) | ✗ | - | - |
| `Refer` | varchar(255) | ✗ | - | - |
| `C01` | varchar(10) | ✗ | - | - |
| `C02` | varchar(10) | ✗ | - | - |
| `C03` | varchar(10) | ✗ | - | - |
| `C04` | varchar(10) | ✗ | - | - |
| `C05` | varchar(10) | ✗ | - | - |
| `C06` | varchar(10) | ✗ | - | - |
| `C07` | varchar(10) | ✗ | - | - |
| `C08` | varchar(10) | ✗ | - | - |
| `C09` | varchar(10) | ✗ | - | - |
| `C10` | varchar(10) | ✗ | - | - |
| `C11` | varchar(10) | ✗ | - | - |
| `C12` | varchar(10) | ✗ | - | - |
| `C13` | varchar(10) | ✗ | - | - |
| `C14` | varchar(10) | ✗ | - | - |
| `C15` | varchar(10) | ✗ | - | - |
| `C16` | varchar(10) | ✗ | - | - |
| `C17` | varchar(10) | ✗ | - | - |
| `C18` | varchar(10) | ✗ | - | - |
| `C19` | varchar(10) | ✗ | - | - |
| `C20` | varchar(10) | ✗ | - | - |
| `C21` | varchar(10) | ✗ | - | - |
| `C22` | varchar(10) | ✗ | - | - |
| `C23` | varchar(10) | ✗ | - | - |
| `Sum` | varchar(10) | ✗ | - | - |
| `t_number` | varchar(255) | ✗ | - | - |
| `Status` | varchar(1) | ✗ | - | สถานะ |
| `Pfullname` | varchar(255) | ✗ | - | - |
| `Ptname` | varchar(255) | ✗ | - | ผู้ป่วย name |
| `sir` | varchar(255) | ✗ | - | - |
| `Tnames` | varchar(255) | ✗ | - | - |
| `Kname` | varchar(255) | ✗ | - | - |
| `Hosp` | varchar(255) | ✗ | - | - |

---

### Mrss_OPD

**คำอธิบาย:** -

**จำนวนแถว:** 753

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(8) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Ody` | varchar(7) | ✗ | - | - |
| `HN` | varchar(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Cid` | varchar(17) | ✗ | - | เลขบัตรประชาชน |
| `Ptname` | varchar(255) | ✗ | - | ผู้ป่วย name |
| `Pname` | char(20) | ✗ | - | คำนำหน้าชื่อ |
| `Fname` | char(60) | ✗ | - | ชื่อจริง |
| `Lname` | char(60) | ✗ | - | นามสกุล |
| `Male` | char(10) | ✗ | - | - |
| `Age` | text | ✗ | - | - |
| `Yday` | varchar(1) | ✗ | - | - |
| `Yname` | char(100) | ✗ | - | - |
| `Tname` | varchar(60) | ✗ | - | - |
| `Tel` | char(3) | ✗ | - | โทรศัพท์ |
| `Sector` | char(40) | ✗ | - | - |
| `Ydate` | date | ✗ | - | - |
| `Kdate` | date | ✗ | - | - |
| `Sname` | varchar(100) | ✗ | - | - |
| `Tnames` | varchar(60) | ✗ | - | - |
| `Ldate` | date | ✗ | - | - |
| `Statusc` | char(1) | ✗ | - | - |
| `Ydate1` | varchar(20) | ✗ | - | - |
| `Kdate1` | varchar(20) | ✗ | - | - |
| `Registers` | varchar(100) | ✗ | - | - |
| `test` | varchar(1) | ✗ | - | - |

---

### Mrss_R_OPD

**คำอธิบาย:** -

**จำนวนแถว:** 571

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(8) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ODK` | char(7) | ✗ | - | - |
| `ODY` | char(7) | ✗ | - | - |
| `HN` | char(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Yname` | char(120) | ✗ | - | - |
| `Tname` | char(60) | ✗ | - | - |
| `Sector` | char(60) | ✗ | - | - |
| `Tel` | decimal(3,0) | ✗ | - | โทรศัพท์ |
| `Sname` | varchar(100) | ✗ | - | - |
| `Tnames` | varchar(60) | ✗ | - | - |
| `Kdate` | date | ✗ | - | - |
| `Kdates` | date | ✗ | - | - |

---

### ccd_opd_visit

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospcode` | varchar(5) | ✗ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `vstdate` | date | ✓ | - | วันที่มารับบริการ |
| `vsttime` | time /* mariadb-5.3 */ | ✓ | - | เวลาที่มารับบริการ |
| `clinic_code` | varchar(8) | ✓ | - | รหัส clinic |
| `name` | varchar(50) | ✓ | - | ชื่อ |
| `pttype_std_code` | varchar(2) | ✓ | - | รหัส pttype_std |
| `pttype_std_name` | varchar(100) | ✓ | - | ชื่อ pttype_std |

---

### ccd_opd_visit_diag

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospcode` | varchar(5) | ✗ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `icd10` | varchar(7) | ✓ | - | รหัสโรค ICD-10 |
| `diag_name` | varchar(90) | ✓ | - | ชื่อ diag |
| `diag_type` | tinyint(1) | ✗ | - | ประเภท diag |
| `doctor_cid` | varchar(13) | ✓ | - | - |

---

### ccd_opd_visit_diag_text

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospcode` | varchar(5) | ✗ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `doctor_cid` | varchar(13) | ✓ | - | - |
| `diag_text` | char(0) | ✗ | - | - |

---

### ccd_opd_visit_procedure

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospcode` | varchar(5) | ✗ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `icdcm` | varchar(7) | ✓ | - | - |
| `proced_name` | varchar(90) | ✓ | - | ชื่อ proced |
| `proced_type` | char(0) | ✗ | - | ประเภท proced |
| `doctor_cid` | varchar(13) | ✓ | - | - |

---

### ccd_opd_visit_screen

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospcode` | varchar(5) | ✗ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `cc` | varchar(40) | ✓ | - | - |
| `hpi` | char(0) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `pulse` | int(3) | ✗ | - | - |
| `respiratory_rate` | int(3) | ✗ | - | - |
| `temperature` | decimal(4,1) | ✗ | - | - |
| `weight` | decimal(5,1) | ✗ | - | - |
| `height` | decimal(6,1) | ✓ | - | - |
| `bmi` | decimal(6,1) | ✗ | - | - |
| `waist` | decimal(5,1) | ✗ | - | - |
| `pe` | char(0) | ✗ | - | - |
| `alcohol_use` | varchar(1) | ✗ | - | - |
| `cigar_use` | varchar(1) | ✗ | - | - |
| `pregnant` | varchar(1) | ✗ | - | - |
| `lactation` | char(0) | ✗ | - | - |
| `pain_score` | char(0) | ✗ | - | - |
| `note` | char(0) | ✗ | - | บันทึก |

---

### chkuseopd

**คำอธิบาย:** -

**จำนวนแถว:** 1,893

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `dct` | varchar(5) | ✗ | - | - |
| `vstdttm` | datetime | ✗ | - | - |
| `ipaddr` | varchar(40) | ✗ | - | - |
| `status` | varchar(1) | ✗ | - | สถานะ |

---

### l_bdoctor

**คำอธิบาย:** ข้อมูลบุคลากร

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `bdoctor`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `bdoctor` | varchar(1) | ✗ | PK | - |
| `namedoctor` | varchar(40) | ✓ | - | - |

---

### l_copdsev

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `copdsev`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `copdsev` | varchar(1) | ✗ | PK | - |
| `namecopdse` | varchar(100) | ✗ | - | - |

---

### l_nhso_dttm

**คำอธิบาย:** -

**จำนวนแถว:** 224

**Engine:** InnoDB

**Primary Key:** `code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | varchar(10) | ✗ | PK | รหัส |
| `name` | varchar(250) | ✓ | IDX | ชื่อ |
| `requiredtc` | char(1) | ✓ | - | - |
| `vorder` | int(11) | ✓ | - | - |
| `treatment` | char(1) | ✓ | IDX | - |
| `icd10` | varchar(9) | ✓ | - | รหัสโรค ICD-10 |
| `icd9cm` | varchar(9) | ✓ | - | รหัสหัตถการ ICD-9-CM |
| `icode` | varchar(7) | ✓ | - | - |
| `opd_price1` | double(15,3) | ✓ | - | - |
| `opd_price2` | double(15,3) | ✓ | - | - |
| `opd_price3` | double(15,3) | ✓ | - | - |
| `ipd_price1` | double(15,3) | ✓ | - | - |
| `ipd_price2` | double(15,3) | ✓ | - | - |
| `ipd_price3` | double(15,3) | ✓ | - | - |
| `dttm_group_id` | int(11) | ✓ | - | รหัส dttm_group |
| `unit` | varchar(20) | ✓ | - | หน่วย |
| `charge_per_qty` | char(1) | ✓ | - | - |
| `active_status` | char(1) | ✓ | - | สถานะ active |
| `dttm_guid` | varchar(38) | ✓ | IDX | - |
| `thai_name` | varchar(250) | ✓ | - | ชื่อ thai |
| `charge_area_qty` | char(1) | ✓ | - | - |
| `dttm_subgroup_id` | int(11) | ✓ | - | รหัส dttm_subgroup |
| `icd10tm_operation_code` | varchar(15) | ✓ | - | รหัส icd10tm_operation |
| `dttm_dw_report_group_id` | int(11) | ✓ | - | รหัส dttm_dw_report_group |
| `export_proced` | char(1) | ✓ | - | - |
| `dent2006_item_code` | varchar(50) | ✓ | - | รหัส dent2006_item |
| `hos_guid` | varchar(38) | ✓ | IDX | - |
| `hoi` | varchar(6) | ✓ | - | - |
| `search_keyword` | varchar(200) | ✓ | - | - |

---

### nopd

**คำอธิบาย:** -

**จำนวนแถว:** 67

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(3) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameopdn` | varchar(255) | ✓ | - | - |
| `nopdvals` | varchar(255) | ✓ | - | - |
| `shw` | varchar(1) | ✓ | - | - |

---

### ovst

**คำอธิบาย:** การมารับบริการผู้ป่วยนอก

**จำนวนแถว:** 3,248,483

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdttm` | datetime | ✗ | IDX | - |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `nrxtime` | int(4) | ✗ | - | - |
| `drxtime` | int(4) | ✗ | - | - |
| `cln` | varchar(5) | ✓ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `sickdate` | date | ✗ | - | - |
| `ovstist` | varchar(1) | ✗ | - | - |
| `ovstost` | int(1) | ✗ | - | - |
| `overtime` | int(1) | ✗ | - | - |
| `bw` | decimal(5,1) | ✗ | - | - |
| `height` | decimal(6,1) | ✓ | - | - |
| `bmi` | decimal(6,1) | ✗ | - | - |
| `tt` | decimal(4,1) | ✗ | - | - |
| `pr` | int(3) | ✗ | - | - |
| `rr` | int(3) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `preg` | varchar(1) | ✗ | - | - |
| `tb` | varchar(1) | ✗ | - | - |
| `toq` | varchar(1) | ✗ | - | - |
| `drink` | varchar(1) | ✗ | - | - |
| `mr` | varchar(1) | ✗ | - | - |
| `smoke` | varchar(1) | ✗ | - | - |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `rcptno` | int(8) | ✗ | - | - |
| `register` | varchar(2) | ✗ | - | - |
| `waist_cm` | decimal(5,1) | ✗ | - | - |
| `APPR_CODE` | decimal(15,0) | ✗ | - | รหัส appr |
| `APPR_SUM` | decimal(9,2) | ✗ | - | - |
| `visit_uuid` | varchar(100) | ✓ | - | - |

---

### ovst_28-11-2565

**คำอธิบาย:** การมารับบริการผู้ป่วยนอก (ที่เกี่ยวข้อง)

**จำนวนแถว:** 2,669,147

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdttm` | datetime | ✗ | IDX | - |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `nrxtime` | int(4) | ✗ | - | - |
| `drxtime` | int(4) | ✗ | - | - |
| `cln` | varchar(5) | ✓ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `sickdate` | date | ✗ | - | - |
| `ovstist` | varchar(1) | ✗ | - | - |
| `ovstost` | int(1) | ✗ | - | - |
| `overtime` | int(1) | ✗ | - | - |
| `bw` | decimal(5,1) | ✗ | - | - |
| `height` | decimal(6,1) | ✓ | - | - |
| `bmi` | decimal(6,1) | ✗ | - | - |
| `tt` | decimal(4,1) | ✗ | - | - |
| `pr` | int(3) | ✗ | - | - |
| `rr` | int(3) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `preg` | varchar(1) | ✗ | - | - |
| `tb` | varchar(1) | ✗ | - | - |
| `toq` | varchar(1) | ✗ | - | - |
| `drink` | varchar(1) | ✗ | - | - |
| `mr` | varchar(1) | ✗ | - | - |
| `smoke` | varchar(1) | ✗ | - | - |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `rcptno` | int(8) | ✗ | - | - |
| `register` | varchar(2) | ✗ | - | - |
| `waist_cm` | decimal(5,1) | ✗ | - | - |
| `APPR_CODE` | decimal(15,0) | ✗ | - | รหัส appr |
| `APPR_SUM` | decimal(9,2) | ✗ | - | - |
| `visit_uuid` | varchar(100) | ✓ | - | - |

---

### ovst_lso

**คำอธิบาย:** การมารับบริการผู้ป่วยนอก (ที่เกี่ยวข้อง)

**จำนวนแถว:** 13,629

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdttm` | datetime | ✗ | IDX | - |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `cln` | varchar(5) | ✓ | IDX | - |
| `dct` | varchar(5) | ✓ | IDX | - |
| `pttype` | varchar(2) | ✗ | IDX | ประเภทสิทธิ |
| `bw` | decimal(5,1) | ✗ | - | - |
| `height` | decimal(6,1) | ✗ | - | - |
| `bmi` | decimal(6,1) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `pcucode` | varchar(5) | ✓ | - | - |
| `userid` | varchar(50) | ✓ | - | - |
| `ga` | varchar(5) | ✓ | - | - |
| `p` | varchar(5) | ✓ | - | - |
| `dateupdate` | timestamp | ✓ | - | - |
| `datesend` | date | ✓ | - | - |
| `sended` | int(1) | ✓ | - | - |

---

### ovst_view

**คำอธิบาย:** การมารับบริการผู้ป่วยนอก (ที่เกี่ยวข้อง)

**จำนวนแถว:** 9,345

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdttm` | datetime | ✗ | IDX | - |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `nrxtime` | int(4) | ✗ | - | - |
| `drxtime` | int(4) | ✗ | - | - |
| `cln` | varchar(5) | ✓ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `sickdate` | date | ✗ | - | - |
| `ovstist` | varchar(1) | ✗ | - | - |
| `ovstost` | int(1) | ✗ | - | - |
| `overtime` | int(1) | ✗ | - | - |
| `bw` | decimal(5,1) | ✗ | - | - |
| `height` | decimal(6,1) | ✗ | - | - |
| `bmi` | decimal(6,1) | ✗ | - | - |
| `tt` | decimal(4,1) | ✗ | - | - |
| `pr` | int(3) | ✗ | - | - |
| `rr` | int(3) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `preg` | varchar(1) | ✗ | - | - |
| `tb` | varchar(1) | ✗ | - | - |
| `toq` | varchar(1) | ✗ | - | - |
| `drink` | varchar(1) | ✗ | - | - |
| `mr` | varchar(1) | ✗ | - | - |
| `smoke` | varchar(1) | ✗ | - | - |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `rcptno` | int(8) | ✗ | - | - |
| `register` | varchar(2) | ✗ | - | - |
| `waist_cm` | decimal(5,1) | ✗ | - | - |
| `APPR_CODE` | decimal(15,0) | ✗ | - | รหัส appr |
| `APPR_SUM` | decimal(9,2) | ✗ | - | - |
| `visit_uuid` | varchar(100) | ✓ | - | - |

---

### ovstdr

**คำอธิบาย:** การมารับบริการผู้ป่วยนอก (ที่เกี่ยวข้อง)

**จำนวนแถว:** 5,997,041

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `dct` | varchar(5) | ✓ | - | - |
| `drxtime` | int(4) | ✗ | - | - |
| `srvdttm` | datetime | ✗ | - | - |

---

### ovstdx

**คำอธิบาย:** การมารับบริการผู้ป่วยนอก (ที่เกี่ยวข้อง)

**จำนวนแถว:** 4,008,465

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `icd10` | varchar(7) | ✓ | - | รหัสโรค ICD-10 |
| `icd10name` | varchar(90) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd10name) |
| `cnt` | tinyint(1) | ✗ | - | - |
| `consultid` | int(15) | ✗ | - | - |

---

### ovstdx_28-11-2565

**คำอธิบาย:** การมารับบริการผู้ป่วยนอก (ที่เกี่ยวข้อง)

**จำนวนแถว:** 3,561,541

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `icd10` | varchar(7) | ✓ | - | รหัสโรค ICD-10 |
| `icd10name` | varchar(90) | ✗ | - | ชื่อโรค ICD (คอลัมน์ icd10name) |
| `cnt` | tinyint(1) | ✗ | - | - |
| `consultid` | int(15) | ✗ | - | - |

---

### ovstist

**คำอธิบาย:** สถานะการมารับบริการ

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `ovstist`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ovstist` | int(1) | ✗ | PK | - |
| `nameovstis` | varchar(40) | ✗ | - | - |

---

### ovstost

**คำอธิบาย:** การมารับบริการผู้ป่วยนอก (ที่เกี่ยวข้อง)

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `ovstost`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ovstost` | int(1) | ✗ | PK | - |
| `nameovstos` | varchar(15) | ✗ | - | - |

---

### ovststatus

**คำอธิบาย:** การมารับบริการผู้ป่วยนอก (ที่เกี่ยวข้อง)

**จำนวนแถว:** 1,368,963

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `painscore` | int(2) | ✓ | - | - |
| `ovstst` | varchar(1) | ✓ | - | - |
| `emsname` | varchar(40) | ✓ | - | - |
| `emscode` | varchar(2) | ✓ | - | - |

---

### ssop_opdx

**คำอธิบาย:** -

**จำนวนแถว:** 466

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `Class` | varchar(2) | ✓ | - | - |
| `SvID` | varchar(20) | ✗ | IDX | - |
| `SL` | char(1) | ✓ | - | - |
| `CodeSet` | char(2) | ✓ | - | - |
| `icd10` | varchar(10) | ✗ | - | รหัสโรค ICD-10 |
| `Desc2` | varchar(50) | ✓ | - | - |
| `status_flg` | enum('A','C','D') | ✓ | - | - |
| `export_code` | enum('SS','CS') | ✓ | - | รหัส export |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |

---


## other

### BP

**คำอธิบาย:** -

**จำนวนแถว:** 123

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |

---

### Claim_E

**คำอธิบาย:** -

**จำนวนแถว:** 634

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `PID` | varchar(255) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `AdjRW5` | varchar(255) | ✓ | - | - |
| `sellAdjrw` | varchar(255) | ✓ | - | - |
| `CostAdjRW` | varchar(255) | ✓ | - | - |
| `cost` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |

---

### IP50new

**คำอธิบาย:** -

**จำนวนแถว:** 6,049

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `fullname` | varchar(255) | ✓ | - | - |
| `rgtdate` | varchar(255) | ✓ | - | - |
| `age` | varchar(255) | ✓ | - | - |
| `mrtlst` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |

---

### IP51new

**คำอธิบาย:** -

**จำนวนแถว:** 6,437

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `fullname` | varchar(255) | ✓ | - | - |
| `rgtdate` | varchar(255) | ✓ | - | - |
| `age` | varchar(255) | ✓ | - | - |
| `mrtlst` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |

---

### IP52new

**คำอธิบาย:** -

**จำนวนแถว:** 6,740

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `fullname` | varchar(255) | ✓ | - | - |
| `rgtdate` | varchar(255) | ✓ | - | - |
| `age` | varchar(255) | ✓ | - | - |
| `mrtlst` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |

---

### IP53new

**คำอธิบาย:** -

**จำนวนแถว:** 7,353

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `fullname` | varchar(255) | ✓ | - | - |
| `rgtdate` | varchar(255) | ✓ | - | - |
| `age` | varchar(255) | ✓ | - | - |
| `mrtlst` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |

---

### IP54new

**คำอธิบาย:** -

**จำนวนแถว:** 5,635

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `fullname` | varchar(255) | ✓ | - | - |
| `rgtdate` | varchar(255) | ✓ | - | - |
| `age` | varchar(255) | ✓ | - | - |
| `mrtlst` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |

---

### Mrs_Center

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | varchar(1) | ✗ | - | รหัสประจำ (Primary Key) |
| `NameProgram` | varchar(255) | ✗ | - | - |

---

### Mrs_Dead

**คำอธิบาย:** -

**จำนวนแถว:** 169

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `nameF` | varchar(255) | ✓ | - | - |
| `nameL` | varchar(255) | ✓ | - | - |

---

### Mrs_ssHealth_Check

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(10) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Fullname` | varchar(255) | ✗ | - | - |
| `Male` | varchar(30) | ✗ | - | - |
| `Brithdate` | varchar(20) | ✗ | - | - |
| `AgeY` | varchar(3) | ✗ | - | - |
| `AgeM` | varchar(10) | ✗ | - | - |
| `AgeD` | varchar(10) | ✗ | - | - |
| `pop_id` | varchar(20) | ✗ | - | รหัส pop |
| `nameTpart` | varchar(255) | ✗ | - | - |
| `Zipcode` | varchar(5) | ✗ | - | - |
| `Mrtlst` | varchar(80) | ✗ | - | - |
| `height` | varchar(3) | ✗ | - | - |
| `HCdate` | varchar(50) | ✗ | - | - |
| `status` | varchar(1) | ✗ | - | สถานะ |

---

### Mrs_ssOffice

**คำอธิบาย:** -

**จำนวนแถว:** 42

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(2) | ✗ | PK | รหัสประจำ (Primary Key) |
| `officename` | varchar(225) | ✗ | - | - |

---

### Mrs_ssType

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(1) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Type` | varchar(225) | ✗ | - | ประเภท |

---

### Mrsc_Pl

**คำอธิบาย:** -

**จำนวนแถว:** 15

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(5) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Pl` | varchar(100) | ✗ | - | - |
| `Plt` | varchar(60) | ✗ | - | - |
| `User` | varchar(20) | ✗ | - | - |
| `Pass` | varchar(5) | ✗ | - | - |
| `star` | varchar(1) | ✗ | - | - |
| `Status` | varchar(1) | ✗ | - | สถานะ |

---

### Mrsc_Pn

**คำอธิบาย:** -

**จำนวนแถว:** 38

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(3) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Pn` | varchar(60) | ✗ | - | - |
| `Pnt` | varchar(60) | ✗ | - | - |
| `Ward` | varchar(30) | ✗ | - | หอผู้ป่วยใน |
| `Tel` | varchar(3) | ✗ | - | โทรศัพท์ |
| `Status` | varchar(1) | ✗ | - | สถานะ |

---

### Mrsc_docter

**คำอธิบาย:** -

**จำนวนแถว:** 53

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Kname` | varchar(20) | ✗ | - | - |
| `Fullname` | varchar(80) | ✗ | - | - |
| `Number` | varchar(10) | ✗ | - | - |

---

### Mrss_PA

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(2) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Sname` | varchar(100) | ✓ | - | - |
| `Tnames` | varchar(60) | ✓ | - | - |
| `Usernames` | char(10) | ✓ | - | - |
| `Passwords` | char(5) | ✓ | - | - |

---

### Mrss_PAA

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(2) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Sname` | varchar(100) | ✓ | - | - |
| `Tnames` | varchar(60) | ✓ | - | - |
| `Usernames` | char(10) | ✓ | - | - |
| `Passwords` | char(5) | ✓ | - | - |

---

### Mrss_PYY

**คำอธิบาย:** -

**จำนวนแถว:** 66

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(2) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Yname` | char(120) | ✗ | - | - |
| `Tname` | char(60) | ✗ | - | - |
| `Sector` | char(60) | ✗ | - | - |
| `Tel` | char(3) | ✗ | - | โทรศัพท์ |
| `Status` | varchar(1) | ✗ | - | สถานะ |

---

### aetype

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `aetype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `aetype` | varchar(1) | ✗ | PK | - |
| `nametype` | varchar(40) | ✗ | - | - |

---

### aipn_ccode

**คำอธิบาย:** -

**จำนวนแถว:** 14

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ccode` | int(11) | ✓ | - | - |
| `cname` | text | ✓ | - | ชื่อร่วม |

---

### aipn_checkcode

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `an`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | varchar(20) | ✗ | PK | เลขที่ผู้ป่วยใน (Admission Number) |
| `checkcode` | int(11) | ✗ | - | - |

---

### alevel

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `codealevel`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codealevel` | varchar(2) | ✗ | PK | - |
| `namealevel` | varchar(100) | ✗ | - | - |

---

### allgtype

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `allgtype` | varchar(1) | ✗ | - | - |
| `nameallgtype` | varchar(40) | ✗ | - | - |

---

### ampur

**คำอธิบาย:** -

**จำนวนแถว:** 1,017

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameampur` | varchar(20) | ✓ | - | - |
| `chwpart` | varchar(2) | ✗ | IDX | จังหวัด |
| `amppart` | varchar(2) | ✗ | IDX | อำเภอ |

---

### areacode

**คำอธิบาย:** -

**จำนวนแถว:** 355

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namearea` | varchar(55) | ✗ | - | - |
| `codearea` | varchar(3) | ✗ | IDX | - |

---

### areatype

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `areatype` | varchar(1) | ✗ | IDX | - |
| `namearea` | varchar(80) | ✗ | - | - |

---

### aric

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namearic` | varchar(15) | ✗ | - | - |
| `maxaric` | varchar(7) | ✗ | - | - |
| `minaric` | varchar(7) | ✗ | - | - |
| `codearic` | varchar(3) | ✗ | IDX | - |

---

### asa

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `orno` | int(8) | ✗ | IDX | - |
| `asa` | varchar(2) | ✗ | - | - |

---

### asaps

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameasaps` | varchar(40) | ✗ | - | - |
| `codeasaps` | varchar(1) | ✗ | IDX | - |

---

### aux_lbl

**คำอธิบาย:** -

**จำนวนแถว:** 257

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameaux_lb` | varchar(50) | ✗ | - | - |
| `codeaux_lb` | varchar(3) | ✗ | IDX | - |
| `indication_flg` | enum('0','1') | ✗ | - | - |

---

### bldalert

**คำอธิบาย:** -

**จำนวนแถว:** 14

**Engine:** InnoDB

**Primary Key:** `hn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | PK | เลขที่ผู้ป่วย (Hospital Number) |
| `alert` | text | ✗ | - | - |

---

### btype

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `btype` | varchar(2) | ✗ | - | - |
| `nametype` | varchar(40) | ✗ | - | - |

---

### caseortype

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `caseor` | varchar(1) | ✓ | - | - |
| `namecase` | varchar(40) | ✓ | - | - |

---

### chospital

**คำอธิบาย:** -

**จำนวนแถว:** 15,451

**Engine:** InnoDB

**Primary Key:** `hoscode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hoscode` | char(5) | ✗ | PK | - |
| `hosname` | varchar(255) | ✓ | - | - |
| `hostype` | char(2) | ✓ | - | - |
| `address` | varchar(50) | ✓ | - | ที่อยู่ |
| `road` | varchar(50) | ✓ | - | - |
| `mu` | varchar(2) | ✓ | - | - |
| `subdistcode` | char(2) | ✓ | - | - |
| `distcode` | char(2) | ✓ | - | - |
| `provcode` | char(2) | ✓ | IDX | - |
| `postcode` | char(5) | ✓ | IDX | - |
| `hoscodenew` | char(9) | ✓ | - | - |

---

### ckd_alert

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `meditem` | varchar(7) | ✓ | - | - |
| `gfr_chk` | double(6,2) | ✓ | - | - |
| `adj` | varchar(500) | ✓ | - | - |
| `ad_date` | date | ✓ | - | วันที่ ad |
| `user_id` | int(3) | ✓ | - | รหัส user |

---

### cln

**คำอธิบาย:** -

**จำนวนแถว:** 46

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namecln` | varchar(50) | ✗ | - | - |
| `costcenter` | varchar(4) | ✓ | - | - |
| `cln` | varchar(5) | ✓ | IDX | - |
| `dspname` | varchar(40) | ✗ | - | - |
| `odpm` | varchar(2) | ✗ | - | - |
| `costcente2` | varchar(8) | ✗ | - | - |
| `f21_55` | varchar(8) | ✗ | - | - |
| `fixdayfu` | varchar(3) | ✓ | - | - |
| `chronicfu` | varchar(1) | ✓ | - | - |
| `fixdaystp` | varchar(40) | ✗ | - | - |
| `sso_clinic` | varchar(3) | ✗ | IDX | - |
| `specialty` | varchar(3) | ✗ | - | - |
| `useintranfer` | varchar(3) | ✓ | - | - |
| `nhso_authen` | varchar(1) | ✓ | - | - |
| `claimType` | varchar(50) | ✓ | - | - |

---

### code504p

**คำอธิบาย:** -

**จำนวนแถว:** 38

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `max504` | varchar(4) | ✗ | - | - |
| `min504` | varchar(4) | ✗ | - | - |
| `code504` | int(3) | ✗ | IDX | รหัส (คอลัมน์ code504) |

---

### code505p

**คำอธิบาย:** -

**จำนวนแถว:** 114

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `max505` | varchar(4) | ✗ | - | - |
| `min505` | varchar(4) | ✗ | - | - |
| `code505` | int(3) | ✗ | IDX | รหัส (คอลัมน์ code505) |

---

### code506p

**คำอธิบาย:** -

**จำนวนแถว:** 231

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ccode` | varchar(3) | ✓ | - | - |
| `cmin` | varchar(5) | ✓ | - | - |
| `cmax` | varchar(5) | ✓ | - | - |
| `e1` | decimal(8,0) | ✓ | - | - |

---

### community_service

**คำอธิบาย:** -

**จำนวนแถว:** 5,115

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hospcode` | varchar(5) | ✓ | - | - |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdate` | date | ✓ | - | วันที่มารับบริการ |
| `cservice` | varchar(7) | ✓ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |
| `pservice` | varchar(5) | ✓ | - | - |

---

### ctzshp

**คำอธิบาย:** -

**จำนวนแถว:** 92

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namectzshp` | varchar(30) | ✗ | IDX | - |
| `ctzshp` | varchar(2) | ✗ | - | - |
| `nation` | varchar(3) | ✗ | - | - |

---

### cvt_vacc

**คำอธิบาย:** -

**จำนวนแถว:** 17

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `old` | varchar(4) | ✓ | - | - |
| `new` | varchar(3) | ✓ | - | - |

---

### data_correct

**คำอธิบาย:** -

**จำนวนแถว:** 8,437,993

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospcode` | varchar(5) | ✗ | - | - |
| `tablename` | varchar(30) | ✗ | - | - |
| `data_correct` | longtext | ✗ | - | - |
| `d_update` | datetime | ✓ | - | - |
| `send_status` | varchar(1) | ✗ | - | สถานะ send |

---

### data_ini

**คำอธิบาย:** -

**จำนวนแถว:** 60

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `data` | varchar(255) | ✓ | - | - |

---

### dbpop

**คำอธิบาย:** -

**จำนวนแถว:** 1,897,835

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `PID` | varchar(13) | ✓ | - | - |
| `TITLE` | varchar(3) | ✓ | - | - |
| `FNAME` | varchar(40) | ✓ | - | ชื่อจริง |
| `LNAME` | varchar(40) | ✓ | - | นามสกุล |
| `BIRTHDATE` | varchar(8) | ✓ | - | วันเกิด |
| `SEX` | varchar(1) | ✓ | - | - |
| `CHAT` | varchar(8) | ✓ | - | - |
| `MAININSCL` | varchar(3) | ✓ | - | - |
| `STARTDATE` | varchar(8) | ✓ | - | - |
| `EXPDATE` | varchar(8) | ✓ | - | - |
| `HMAIN` | varchar(5) | ✓ | - | - |
| `HSUB` | varchar(5) | ✓ | - | - |
| `SUBINSCL` | varchar(2) | ✓ | - | - |
| `PURCHASEPROVINCE` | varchar(4) | ✓ | - | - |
| `CARDID` | varchar(25) | ✓ | - | - |
| `AGE` | varchar(3) | ✓ | - | - |
| `HMAIN_OP` | varchar(5) | ✓ | - | - |

---

### dchstts

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namedchstt` | varchar(40) | ✗ | - | - |
| `dchstts` | int(1) | ✗ | IDX | - |

---

### dchtype

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namedchtyp` | varchar(40) | ✗ | - | - |
| `dchtype` | int(1) | ✗ | IDX | - |

---

### dctbtype

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** InnoDB

**Primary Key:** `dctbtype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `dctbtype` | varchar(2) | ✗ | PK | - |
| `nametype` | varchar(40) | ✗ | - | - |

---

### dctype

**คำอธิบาย:** -

**จำนวนแถว:** 15

**Engine:** MyISAM

**Primary Key:** `dccode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `dccode` | varchar(2) | ✗ | PK | - |
| `specialty` | varchar(3) | ✗ | - | - |
| `dspname` | varchar(50) | ✗ | - | - |
| `surgcode` | varchar(2) | ✗ | - | - |

---

### deldc

**คำอธิบาย:** -

**จำนวนแถว:** 140

**Engine:** InnoDB

**Primary Key:** `an`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(8) | ✗ | PK | เลขที่ผู้ป่วยใน (Admission Number) |
| `vstdttm` | datetime | ✓ | - | - |
| `dct` | varchar(5) | ✓ | - | - |

---

### dentist

**คำอธิบาย:** -

**จำนวนแถว:** 43

**Engine:** MyISAM

**Primary Key:** `codedtt`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codedtt` | varchar(5) | ✗ | PK | - |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✗ | - | ชื่อจริง |
| `lname` | varchar(25) | ✗ | - | นามสกุล |
| `dspname` | varchar(50) | ✗ | - | - |
| `lcno` | varchar(5) | ✗ | - | - |
| `psswrd` | varchar(20) | ✗ | - | - |
| `registerno` | varchar(15) | ✗ | - | - |
| `council` | varchar(2) | ✗ | - | - |
| `sex` | varchar(1) | ✗ | - | - |
| `birth` | date | ✓ | - | - |
| `providertype` | varchar(2) | ✗ | - | - |
| `startdate` | date | ✓ | - | - |
| `outdate` | date | ✓ | - | - |
| `movefrom` | varchar(5) | ✗ | - | - |
| `moveto` | varchar(5) | ✗ | - | - |
| `moph_no` | varchar(10) | ✗ | - | เลขที่ moph |
| `cid` | varchar(13) | ✗ | - | เลขบัตรประชาชน |
| `dttype` | varchar(1) | ✗ | - | - |
| `ldate` | date | ✗ | - | - |
| `statusdct` | varchar(1) | ✗ | - | - |

---

### disa_dbpop

**คำอธิบาย:** -

**จำนวนแถว:** 44,199

**Engine:** InnoDB

**Primary Key:** `pid`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pid` | varchar(13) | ✗ | PK | - |
| `title` | varchar(3) | ✓ | - | - |
| `fname` | varchar(40) | ✓ | - | ชื่อจริง |
| `lname` | varchar(40) | ✓ | - | นามสกุล |
| `birthdate` | varchar(8) | ✓ | - | วันเกิด |
| `sex` | varchar(1) | ✓ | - | - |
| `chat` | varchar(8) | ✓ | - | - |
| `status_dola` | varchar(2) | ✓ | - | - |
| `maininscl` | varchar(3) | ✓ | - | - |
| `subinscl` | varchar(2) | ✓ | - | - |
| `startdate` | varchar(8) | ✓ | - | - |
| `expdate` | varchar(8) | ✓ | - | - |
| `hmain` | varchar(5) | ✓ | - | - |
| `hmain_op` | varchar(5) | ✓ | - | - |
| `hsub` | varchar(5) | ✓ | - | - |
| `purchaseprovince` | varchar(4) | ✓ | - | - |
| `disability_status` | varchar(1) | ✓ | - | สถานะ disability |
| `regdate_nep` | varchar(8) | ✓ | - | - |
| `regdate_ssi` | varchar(8) | ✓ | - | - |
| `guardian_pid` | varchar(13) | ✓ | - | - |
| `dt1` | varchar(1) | ✓ | - | - |
| `dt2` | varchar(1) | ✓ | - | - |
| `dt3` | varchar(1) | ✓ | - | - |
| `dt4` | varchar(1) | ✓ | - | - |
| `dt5` | varchar(1) | ✓ | - | - |
| `dt6` | varchar(1) | ✓ | - | - |
| `workdate` | varchar(9) | ✓ | - | - |

---

### doutcome

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `doutcome` | varchar(2) | ✗ | IDX | - |
| `nameoutc` | varchar(40) | ✗ | - | - |

---

### dpm

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** MyISAM

**Primary Key:** `dpm`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namedpm` | varchar(20) | ✗ | - | - |
| `dpm` | varchar(2) | ✗ | PK | - |
| `dpmpfx` | varchar(15) | ✗ | - | - |

---

### dresult

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `dresult`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `dresult` | varchar(2) | ✗ | PK | - |
| `namedres` | varchar(40) | ✗ | - | - |

---

### drpcln

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `drpcln`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `drpcln` | varchar(2) | ✗ | PK | - |
| `namecln` | varchar(25) | ✗ | - | - |

---

### drpdetail

**คำอธิบาย:** -

**จำนวนแถว:** 40

**Engine:** InnoDB

**Primary Key:** `ddetail`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ddetail` | varchar(2) | ✗ | PK | - |
| `namedrpd` | varchar(200) | ✗ | - | - |
| `drptype` | varchar(2) | ✗ | - | - |

---

### dtdx

**คำอธิบาย:** -

**จำนวนแถว:** 430,191

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `dn` | int(11) | ✗ | IDX | - |
| `dtxtime` | int(4) | ✗ | - | - |
| `area` | varchar(3) | ✗ | - | - |
| `icdda` | varchar(6) | ✓ | IDX | - |
| `dttx` | varchar(7) | ✗ | IDX | - |
| `charge` | int(5) | ✗ | - | - |
| `rcptno` | int(8) | ✗ | - | - |
| `consultid` | int(15) | ✓ | IDX | - |
| `codecdt2id` | int(15) | ✓ | - | - |

---

### dtdx_new

**คำอธิบาย:** -

**จำนวนแถว:** 237,833

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `dn` | int(11) | ✗ | IDX | - |
| `dtxtime` | int(4) | ✗ | - | - |
| `area` | varchar(3) | ✗ | - | - |
| `icdda` | varchar(8) | ✗ | IDX | - |
| `dttx` | varchar(7) | ✗ | IDX | - |
| `charge` | int(5) | ✗ | - | - |
| `rcptno` | int(8) | ✗ | - | - |

---

### dtt_grp

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** MyISAM

**Primary Key:** `codedtt_gr`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namedtt_gr` | varchar(25) | ✗ | - | - |
| `codedtt_gr` | varchar(2) | ✗ | PK | - |
| `dttype` | varchar(1) | ✗ | - | - |

---

### dttxdt0

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `txdtl` | varchar(40) | ✗ | - | - |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(5) | ✗ | - | เวลาที่มารับบริการ |
| `an` | int(8) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |

---

### dttxpl

**คำอธิบาย:** -

**จำนวนแถว:** 19

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `dn` | int(11) | ✗ | IDX | - |
| `txpln` | varchar(40) | ✗ | IDX | - |

---

### dttxpl0

**คำอธิบาย:** -

**จำนวนแถว:** 16

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `txpln` | varchar(40) | ✗ | IDX | - |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(5) | ✗ | - | เวลาที่มารับบริการ |
| `an` | int(8) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |

---

### dx

**คำอธิบาย:** -

**จำนวนแถว:** 9,628

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `codedx` | varchar(7) | ✓ | IDX | - |
| `namedx` | varchar(40) | ✓ | IDX | - |
| `pass` | varchar(1) | ✗ | - | - |

---

### dx-routine

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `routine_dx_id` | int(11) | ✓ | - | รหัส routine_dx |
| `routine_dx` | varchar(255) | ✓ | - | - |

---

### edtype

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `edtype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `edtype` | varchar(1) | ✗ | PK | - |
| `nametype` | varchar(40) | ✗ | - | - |

---

### ekg

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | varchar(50) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | varchar(50) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `image_index` | int(11) | ✗ | - | - |
| `ekg_image` | varchar(100) | ✗ | - | - |
| `vssdate` | date | ✗ | - | - |
| `vsstime` | time | ✗ | - | - |
| `create_date` | date | ✗ | IDX | วันที่ create |
| `create_time` | time | ✗ | - | เวลา create |
| `staff_code` | varchar(20) | ✓ | - | รหัส staff |
| `minio_flg` | enum('Y','N','C') | ✓ | - | - |
| `file_type` | enum('pdf','jpg') | ✓ | - | ประเภท file |

---

### emp

**คำอธิบาย:** -

**จำนวนแถว:** 13

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `DEPTNO` | varchar(255) | ✗ | - | แผนก no |
| `ENAME` | varchar(255) | ✗ | - | - |

---

### firstdm

**คำอธิบาย:** -

**จำนวนแถว:** 4,868

**Engine:** MyISAM

**Primary Key:** `hn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | PK | เลขที่ผู้ป่วย (Hospital Number) |

---

### firstht

**คำอธิบาย:** -

**จำนวนแถว:** 7,972

**Engine:** MyISAM

**Primary Key:** `hn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | PK | เลขที่ผู้ป่วย (Hospital Number) |

---

### ftdate

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `mini` | datetime | ✓ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |

---

### generator_16

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `n` | int(2) | ✗ | - | - |

---

### generator_256

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `n` | int(1) | ✗ | - | - |

---

### generator_4k

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `n` | int(1) | ✗ | - | - |

---

### generator_64k

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `n` | int(1) | ✗ | - | - |

---

### hi7_checkinscl

**คำอธิบาย:** -

**จำนวนแถว:** 86,555

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `checkinscl` | varchar(255) | ✓ | - | - |
| `hospmain` | varchar(255) | ✓ | - | - |
| `hospsub` | varchar(255) | ✓ | - | - |
| `datecheck` | datetime | ✓ | - | - |

---

### hi7_claim_l_idtype

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nametype` | varchar(50) | ✓ | - | - |

---

### hi7_claim_l_regionen

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** InnoDB

**Primary Key:** `idregionen`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `idregionen` | int(11) | ✗ | PK | - |
| `nameregionen` | varchar(255) | ✓ | - | - |

---

### hi7_claim_l_typehosp

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `typehosp` | varchar(100) | ✓ | - | - |

---

### hi7_claimtype

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `claimtype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `claimtype` | varchar(10) | ✗ | PK | - |
| `nametype` | varchar(90) | ✓ | - | - |

---

### hi7_fdhtotal_visit

**คำอธิบาย:** -

**จำนวนแถว:** 259

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `dateovst` | date | ✓ | - | - |
| `visitdate` | datetime | ✓ | - | - |
| `count` | int(11) | ✓ | - | จำนวน |
| `success` | int(11) | ✓ | - | - |
| `error` | int(11) | ✓ | - | - |
| `datefinish` | datetime | ✓ | - | - |
| `counttime` | varchar(255) | ✓ | - | - |

---

### hi7_module

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namemodule` | varchar(255) | ✓ | - | - |
| `fullname` | varchar(255) | ✓ | - | - |
| `version` | varchar(255) | ✓ | - | - |
| `path_file` | varchar(255) | ✓ | - | - |
| `pathversion` | varchar(255) | ✓ | - | - |
| `url_git` | varchar(255) | ✓ | - | - |
| `approve_update` | int(11) | ✓ | - | - |
| `is_active` | enum('0','1') | ✓ | - | ใช้งานอยู่ |

---

### hi7_position

**คำอธิบาย:** -

**จำนวนแถว:** 77

**Engine:** MyISAM

**Primary Key:** `positioncode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `positioncode` | int(11) | ✗ | PK | - |
| `positionname` | varchar(100) | ✗ | - | - |

---

### hi7_role

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `role_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `role_id` | int(11) | ✗ | PK | รหัส role |
| `role_name` | varchar(255) | ✗ | - | ชื่อ role |

---

### hi7_screenvitalsign

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `id_screen` | int(11) | ✓ | - | - |
| `temp` | float(3,1) | ✓ | - | - |
| `pr` | int(11) | ✓ | - | - |
| `rr` | int(11) | ✓ | - | - |
| `sbp` | int(11) | ✓ | - | - |
| `dbp` | int(11) | ✓ | - | - |
| `datecreate` | datetime | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |

---

### hi7_setupprogram

**คำอธิบาย:** -

**จำนวนแถว:** 65

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hcode` | varchar(5) | ✓ | - | - |
| `brand` | varchar(255) | ✓ | - | - |
| `computername` | varchar(255) | ✓ | - | - |
| `sn` | varchar(255) | ✓ | - | - |
| `os` | varchar(255) | ✓ | - | - |
| `systemtype` | varchar(255) | ✓ | - | - |
| `buildnumber` | varchar(255) | ✓ | - | - |
| `programinstall` | varchar(255) | ✓ | - | - |
| `versionprogram` | varchar(255) | ✓ | - | - |
| `status` | varchar(255) | ✓ | - | สถานะ |
| `dateaction` | datetime | ✓ | - | - |
| `request` | varchar(255) | ✓ | - | - |

---

### hi7priority

**คำอธิบาย:** -

**จำนวนแถว:** 20

**Engine:** InnoDB

**Primary Key:** `priority_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `priority_id` | int(3) | ✗ | PK | รหัส priority |
| `priority_name` | varchar(50) | ✓ | - | ชื่อ priority |
| `priority_prefix` | char(2) | ✓ | - | - |
| `prority_color` | varchar(100) | ✓ | - | - |
| `priority_filter` | int(3) | ✓ | - | - |
| `priotity_sortbydoc` | int(3) | ✓ | - | - |
| `priority_callinroom_all` | varchar(255) | ✓ | - | - |
| `priority_group` | int(3) | ✓ | - | - |
| `priority_mainfix` | varchar(2) | ✓ | - | - |

---

### hi7visittoday

**คำอธิบาย:** -

**จำนวนแถว:** 219,626

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `bw` | decimal(5,1) | ✗ | - | - |
| `tt` | decimal(4,1) | ✗ | - | - |
| `pr` | int(3) | ✗ | - | - |
| `rr` | int(3) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `nrs` | int(1) | ✗ | - | - |
| `dtr` | int(1) | ✗ | - | - |
| `dtt` | int(1) | ✗ | - | - |
| `lab` | int(1) | ✗ | - | ห้องปฏิบัติการ |
| `xry` | int(1) | ✗ | - | - |
| `er` | int(1) | ✗ | - | - |
| `ors` | int(1) | ✗ | - | - |
| `rec` | int(1) | ✗ | - | - |
| `phm` | int(1) | ✗ | - | - |
| `hpt` | int(1) | ✗ | - | - |
| `phy` | int(1) | ✗ | - | - |
| `drxtime` | int(4) | ✗ | - | - |
| `fudate` | date | ✓ | - | - |
| `fus1` | char(5) | ✓ | - | - |
| `fus2` | char(5) | ✓ | - | - |
| `fus3` | char(5) | ✓ | - | - |
| `fus4` | char(5) | ✓ | - | - |
| `fus5` | char(5) | ✓ | - | - |
| `ldrug` | tinyint(1) | ✗ | - | - |
| `consultid` | int(15) | ✗ | IDX | - |

---

### hi_ini

**คำอธิบาย:** -

**จำนวนแถว:** 28

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `data` | varchar(255) | ✓ | - | - |

---

### hi_setup

**คำอธิบาย:** -

**จำนวนแถว:** 63

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(100) | ✓ | - | รหัส common |
| `value1` | varchar(255) | ✓ | - | - |
| `value2` | varchar(100) | ✓ | - | - |
| `value3` | text | ✓ | - | - |
| `values4` | text | ✓ | - | - |
| `values5` | longtext | ✓ | - | - |
| `cdate` | date | ✓ | - | - |
| `remark` | varchar(50) | ✓ | - | หมายเหตุ |
| `enable_flg` | enum('Y','N') | ✓ | - | - |
| `token` | text | ✓ | - | - |

---

### hi_type_control

**คำอธิบาย:** -

**จำนวนแถว:** 94

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(20) | ✓ | - | รหัส common |
| `value1` | varchar(10) | ✓ | - | - |
| `value2` | varchar(100) | ✓ | - | - |
| `value3` | varchar(100) | ✓ | - | - |

---

### hi_type_control_

**คำอธิบาย:** -

**จำนวนแถว:** 83

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(20) | ✓ | - | รหัส common |
| `value1` | varchar(10) | ✓ | - | - |
| `value2` | varchar(100) | ✓ | - | - |
| `value3` | varchar(100) | ✓ | - | - |

---

### hi_type_control_19-12-67

**คำอธิบาย:** -

**จำนวนแถว:** 90

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(20) | ✓ | - | รหัส common |
| `value1` | varchar(10) | ✓ | - | - |
| `value2` | varchar(100) | ✓ | - | - |
| `value3` | varchar(100) | ✓ | - | - |

---

### hi_upfile_type

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `uptype` | varchar(50) | ✗ | - | - |
| `typename` | varchar(50) | ✗ | - | - |

---

### hifields

**คำอธิบาย:** -

**จำนวนแถว:** 1,399

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `field_name` | varchar(10) | ✓ | - | ชื่อ field |
| `field_type` | varchar(1) | ✓ | - | ประเภท field |
| `field_len` | int(11) | ✓ | - | - |
| `field_dec` | int(11) | ✓ | - | - |

---

### hifields1

**คำอธิบาย:** -

**จำนวนแถว:** 1,361

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `field_name` | varchar(10) | ✓ | - | ชื่อ field |
| `field_type` | varchar(1) | ✓ | - | ประเภท field |
| `field_len` | int(11) | ✓ | - | - |
| `field_dec` | int(11) | ✓ | - | - |

---

### holiday

**คำอธิบาย:** -

**จำนวนแถว:** 521

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `date` | date | ✗ | IDX | วันที่ |
| `holiname` | varchar(255) | ✗ | - | - |

---

### hserv

**คำอธิบาย:** -

**จำนวนแถว:** 368

**Engine:** InnoDB

**Primary Key:** `codehserv`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codehserv` | varchar(6) | ✗ | PK | - |
| `inhserv` | int(3) | ✗ | - | - |
| `namehserv` | varchar(16) | ✗ | - | - |
| `rep_ok` | tinyint(1) | ✗ | - | - |
| `tt` | int(3) | ✗ | - | - |

---

### hxrisk

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** MyISAM

**Primary Key:** `codehxr`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namehxr` | varchar(20) | ✗ | - | - |
| `codehxr` | varchar(1) | ✗ | PK | - |

---

### ifprsc

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `prscdate` | date | ✗ | IDX | - |
| `prsctime` | int(4) | ✗ | IDX | - |
| `fodr` | varchar(80) | ✗ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `ltype` | varchar(1) | ✗ | - | - |

---

### inscl

**คำอธิบาย:** -

**จำนวนแถว:** 120,004

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `subinscl` | varchar(2) | ✗ | - | - |
| `relinscl` | varchar(1) | ✗ | - | - |
| `righttype` | varchar(20) | ✓ | - | - |
| `useright` | varchar(80) | ✓ | - | - |

---

### kios_setup

**คำอธิบาย:** -

**จำนวนแถว:** 18

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(50) | ✓ | - | รหัส common |
| `value1` | varchar(100) | ✓ | - | - |
| `value2` | varchar(50) | ✓ | - | - |
| `value3` | varchar(50) | ✓ | - | - |
| `values4` | varchar(100) | ✓ | - | - |
| `values5` | text | ✓ | - | - |
| `cdate` | date | ✓ | - | - |
| `remark` | varchar(50) | ✓ | - | หมายเหตุ |
| `enable_flg` | enum('Y','N') | ✓ | - | - |
| `authen` | enum('Y','N') | ✓ | - | - |
| `claimtype` | text | ✓ | - | - |
| `visit` | enum('Y','N') | ✓ | - | - |
| `pttype` | int(11) | ✓ | - | ประเภทสิทธิ |
| `register` | varchar(50) | ✓ | - | - |

---

### kwcode1

**คำอธิบาย:** -

**จำนวนแถว:** 7,430

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `descs` | varchar(41) | ✗ | - | - |
| `kwcode` | varchar(4) | ✗ | - | - |

---

### l_ER

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `HN` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `วันที่รับบริการ` | int(1) | ✗ | - | - |
| `เวลา` | int(1) | ✗ | - | - |
| `ชื่อ-สกุล` | int(1) | ✗ | - | - |
| `สิทธิการรักษา` | int(1) | ✗ | - | - |
| `คลีนิค` | int(1) | ✗ | - | - |
| `Diag` | int(1) | ✗ | - | การวินิจฉัย |
| `สถานะการจำหน่าย` | int(1) | ✗ | - | - |
| `triage` | int(1) | ✗ | - | - |

---

### l_PregT

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `codePregT` | int(1) | ✗ | - | - |
| `ผลตรวจ` | int(1) | ✗ | - | - |

---

### l_activity

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `activity_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `activity_id` | int(11) unsigned | ✗ | PK | รหัส activity |
| `activity_name` | longtext | ✓ | - | ชื่อ activity |
| `is_active` | enum('1','0') | ✓ | - | ใช้งานอยู่ |
| `problem_id` | int(11) | ✓ | IDX | รหัส problem |

---

### l_aeplace

**คำอธิบาย:** -

**จำนวนแถว:** 13

**Engine:** InnoDB

**Primary Key:** `aeplace`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `aeplace` | varchar(2) | ✗ | PK | - |
| `nameaeplace` | varchar(60) | ✗ | - | - |

---

### l_aetype

**คำอธิบาย:** -

**จำนวนแถว:** 19

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `aetype_code` | varchar(2) | ✓ | - | รหัส aetype |
| `aetype_desc` | varchar(100) | ✓ | - | - |
| `aetype_desc_th` | varchar(100) | ✓ | - | - |
| `status` | varchar(1) | ✓ | - | สถานะ |

---

### l_armsling

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `HN` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `รหัสอุปกรณ์` | int(1) | ✗ | - | - |
| `อุปกรณ์` | int(1) | ✗ | - | - |

---

### l_asmsev

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `asmsev`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `asmsev` | varchar(1) | ✗ | PK | - |
| `nameasmsev` | varchar(100) | ✗ | - | - |

---

### l_bplace

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `bplace`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `bplace` | varchar(1) | ✗ | PK | - |
| `namebplace` | varchar(40) | ✓ | - | - |

---

### l_btype

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `btype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `btype` | varchar(1) | ✗ | PK | - |
| `namebtype` | varchar(40) | ✓ | - | - |

---

### l_careaccount

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `ca_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ca_code` | varchar(1) | ✗ | PK | รหัส ca |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_childbottle

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `codebottle`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codebottle` | varchar(1) | ✗ | PK | - |
| `bottle` | varchar(40) | ✓ | - | - |

---

### l_childdev

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `codecdev`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codecdev` | varchar(1) | ✗ | PK | - |
| `childdev` | varchar(40) | ✓ | - | - |

---

### l_claimcat

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `cc_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cc_code` | varchar(3) | ✗ | PK | รหัส cc |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_claimcount

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `cct_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cct_code` | varchar(2) | ✗ | PK | รหัส cct |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_class

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `class_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `class_code` | varchar(2) | ✗ | PK | รหัส class |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_clntype

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `clntype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `clntype` | varchar(1) | ✗ | PK | - |
| `nameclntyp` | varchar(40) | ✗ | - | - |

---

### l_clopido

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `HN` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Clopidogel` | int(1) | ✗ | - | - |

---

### l_codefoot

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codefoot` | varchar(1) | ✗ | - | - |
| `namefoot` | varchar(40) | ✗ | - | - |

---

### l_coderetina

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `coderetina` | varchar(1) | ✗ | - | - |
| `nameretina` | varchar(40) | ✗ | - | - |

---

### l_codeset

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `codeset`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codeset` | varchar(2) | ✗ | PK | - |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_comactivity

**คำอธิบาย:** -

**จำนวนแถว:** 47

**Engine:** MyISAM

**Primary Key:** `cactivity`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cactivity` | varchar(7) | ✗ | PK | - |
| `nactivity` | varchar(200) | ✓ | - | - |

---

### l_comaeye

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `coma_eye`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `coma_eye` | varchar(1) | ✗ | PK | - |
| `nameeye` | varchar(100) | ✗ | - | - |
| `scoreeye` | varchar(1) | ✗ | - | - |

---

### l_comamove

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `coma_move`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `coma_move` | varchar(1) | ✗ | PK | - |
| `namemove` | varchar(100) | ✗ | - | - |
| `scoremove` | varchar(1) | ✗ | - | - |

---

### l_comaspeak

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `coma_speak`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `coma_speak` | varchar(1) | ✗ | PK | - |
| `namespeak` | varchar(100) | ✗ | - | - |
| `scorespeak` | varchar(1) | ✗ | - | - |

---

### l_completion

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `complet_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `complet_code` | varchar(1) | ✗ | PK | รหัส complet |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_comservice

**คำอธิบาย:** -

**จำนวนแถว:** 260

**Engine:** MyISAM

**Primary Key:** `cservice`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cservice` | varchar(7) | ✗ | PK | - |
| `nservice` | varchar(200) | ✓ | - | - |

---

### l_council

**คำอธิบาย:** -

**จำนวนแถว:** 20

**Engine:** InnoDB

**Primary Key:** `council`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `council` | varchar(5) | ✗ | PK | - |
| `council_name` | varchar(255) | ✓ | - | ชื่อ council |

---

### l_cvdrisk

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `cvdtype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cvdtype` | varchar(1) | ✗ | PK | - |
| `namecvd` | varchar(40) | ✗ | - | - |
| `nameth` | varchar(40) | ✗ | - | - |

---

### l_dcservicehome

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `codesrv`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codesrv` | varchar(1) | ✗ | PK | - |
| `namesrv` | varchar(40) | ✓ | - | - |

---

### l_ddd

**คำอธิบาย:** -

**จำนวนแถว:** 341

**Engine:** InnoDB

**Primary Key:** `stdcode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `stdcode` | varchar(19) | ✗ | PK | - |
| `name_class` | varchar(50) | ✓ | - | - |
| `name` | varchar(50) | ✓ | - | ชื่อ |
| `DDD` | int(11) | ✗ | - | - |
| `STRENGH` | int(11) | ✓ | - | - |
| `UNIT` | varchar(20) | ✓ | - | หน่วย |
| `ROUTE` | varchar(20) | ✓ | - | - |
| `dmst` | varchar(1) | ✓ | - | - |

---

### l_dentgum

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `codegum`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codegum` | varchar(6) | ✗ | PK | - |
| `namegum` | varchar(100) | ✓ | - | - |

---

### l_dentnprosthesis

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `codenprsis`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codenprsis` | varchar(1) | ✗ | PK | - |
| `nametype` | varchar(50) | ✓ | - | - |

---

### l_dentschooltype

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `codesctype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codesctype` | varchar(1) | ✗ | PK | - |
| `nameschool` | varchar(50) | ✓ | - | - |

---

### l_denttype

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `codedtype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codedtype` | varchar(1) | ✗ | PK | - |
| `nametype` | varchar(50) | ✗ | - | - |

---

### l_department

**คำอธิบาย:** -

**จำนวนแถว:** 8,694

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `dep_code` | varchar(6) | ✓ | IDX | รหัส dep |
| `dep_fname` | varchar(100) | ✓ | - | - |
| `used` | varchar(1) | ✓ | - | - |
| `maininscl` | varchar(3) | ✓ | - | - |
| `dep_cc` | varchar(20) | ✓ | - | - |
| `dep_aa` | varchar(20) | ✓ | - | - |
| `dep_name` | varchar(100) | ✓ | IDX | ชื่อ dep |

---

### l_disabtype

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `disabtype` | varchar(1) | ✓ | - | - |
| `namedisab` | varchar(100) | ✓ | - | - |
| `status` | varchar(1) | ✓ | - | สถานะ |

---

### l_dispestat

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `ds_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ds_code` | varchar(2) | ✗ | PK | รหัส ds |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_emscode

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** MyISAM

**Primary Key:** `emscode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `emscode` | varchar(5) | ✗ | PK | - |
| `nameems` | varchar(40) | ✗ | - | - |

---

### l_funame_dnt

**คำอธิบาย:** -

**จำนวนแถว:** 21

**Engine:** InnoDB

**Primary Key:** `codeid`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codeid` | varchar(2) | ✗ | PK | - |
| `funame` | varchar(80) | ✓ | - | - |

---

### l_garbage

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `garbage` | varchar(1) | ✓ | - | - |
| `ngarbage` | varchar(100) | ✓ | - | - |

---

### l_gennohiv

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `genno` | varchar(2) | ✓ | - | - |
| `namegen` | varchar(40) | ✓ | - | - |

---

### l_groupcdt2

**คำอธิบาย:** -

**จำนวนแถว:** 15

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cdtgrp` | varchar(2) | ✓ | - | - |
| `namegrp` | varchar(40) | ✓ | - | - |
| `namegrpth` | varchar(40) | ✓ | - | - |

---

### l_hiv

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `result`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `result` | varchar(10) | ✗ | PK | - |
| `rcode` | varchar(1) | ✓ | - | - |

---

### l_housetype

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `housetype` | varchar(1) | ✗ | - | - |
| `namehouse` | varchar(40) | ✗ | - | - |

---

### l_insclcost

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `inscl` | varchar(5) | ✓ | IDX | - |
| `nameinscl` | varchar(90) | ✓ | - | - |
| `cost_opd` | varchar(90) | ✓ | - | - |
| `cost_ipd` | varchar(90) | ✓ | - | - |

---

### l_interacttype

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `codetype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codetype` | varchar(1) | ✗ | PK | - |
| `nametype` | varchar(40) | ✓ | - | - |

---

### l_loads

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `codeloads`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codeloads` | varchar(1) | ✗ | PK | - |
| `nameloads` | varchar(40) | ✓ | - | - |

---

### l_macro

**คำอธิบาย:** -

**จำนวนแถว:** 17

**Engine:** InnoDB

**Primary Key:** `result`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `result` | varchar(20) | ✗ | PK | - |
| `rcode` | varchar(1) | ✗ | - | - |

---

### l_micro

**คำอธิบาย:** -

**จำนวนแถว:** 115

**Engine:** InnoDB

**Primary Key:** `result`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `result` | varchar(20) | ✗ | PK | - |
| `rcode` | varchar(1) | ✗ | - | - |

---

### l_ocupation

**คำอธิบาย:** -

**จำนวนแถว:** 125

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `new` | varchar(4) | ✓ | - | - |
| `old` | varchar(3) | ✓ | - | - |
| `old3` | varchar(3) | ✓ | - | - |

---

### l_ocupation1

**คำอธิบาย:** -

**จำนวนแถว:** 129

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `new` | varchar(4) | ✓ | - | - |
| `old` | varchar(3) | ✓ | - | - |
| `old3` | varchar(3) | ✓ | - | - |

---

### l_ppresult

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `codepp`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codepp` | varchar(1) | ✗ | PK | - |
| `namepp` | varchar(40) | ✓ | - | - |

---

### l_prdsecode

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `psc_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `psc_code` | varchar(1) | ✗ | PK | รหัส psc |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_prefactor

**คำอธิบาย:** -

**จำนวนแถว:** 34

**Engine:** InnoDB

**Primary Key:** `codepre`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codepre` | varchar(3) | ✗ | PK | - |
| `namepre` | varchar(100) | ✗ | - | - |

---

### l_prename

**คำอธิบาย:** -

**จำนวนแถว:** 505

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `prename_code` | varchar(3) | ✓ | IDX | รหัส prename |
| `prename` | varchar(200) | ✓ | - | - |
| `prename_desc` | varchar(200) | ✓ | - | - |
| `int_code` | varchar(3) | ✓ | - | รหัส int |
| `sex` | varchar(1) | ✓ | - | - |
| `status` | varchar(1) | ✓ | - | สถานะ |

---

### l_priority

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `priority_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `priority_id` | int(3) | ✗ | PK | รหัส priority |
| `priority_name` | varchar(50) | ✓ | - | ชื่อ priority |
| `priority_prifix` | char(1) | ✓ | - | - |

---

### l_problems

**คำอธิบาย:** -

**จำนวนแถว:** 13

**Engine:** InnoDB

**Primary Key:** `problem_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `problem_id` | int(10) unsigned | ✗ | PK | รหัส problem |
| `problem_name` | longtext | ✓ | - | ชื่อ problem |
| `is_active` | varchar(1) | ✓ | - | ใช้งานอยู่ |

---

### l_reimburser

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `ru_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ru_code` | varchar(2) | ✗ | PK | รหัส ru |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_resultservicehome

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `codehome`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codehome` | varchar(1) | ✗ | PK | - |
| `namehome` | varchar(40) | ✓ | - | - |

---

### l_rfrtype

**คำอธิบาย:** -

**จำนวนแถว:** 13

**Engine:** InnoDB

**Primary Key:** `rfrtype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rfrtype` | varchar(2) | ✗ | PK | - |
| `nametype` | varchar(40) | ✗ | - | - |
| `dept` | varchar(2) | ✓ | - | แผนก |

---

### l_rrttype

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rrtcode` | varchar(1) | ✗ | - | - |
| `namerrt` | varchar(40) | ✗ | - | - |

---

### l_serve_point_type

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `servepoint_type_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `servepoint_type_code` | varchar(6) | ✗ | PK | รหัส servepoint_type |
| `servpoint_type_name` | varchar(50) | ✓ | - | ชื่อ servpoint_type |

---

### l_servpoint_status

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `servepoint_status_name` | varchar(10) | ✓ | - | ชื่อ servepoint_status |

---

### l_sl

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `sl_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `sl_code` | varchar(1) | ✗ | PK | รหัส sl |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_smitype

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codesmiv` | varchar(1) | ✓ | - | - |
| `namesmi` | varchar(100) | ✓ | - | - |

---

### l_spacer

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `codespacer`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codespacer` | varchar(1) | ✗ | PK | - |
| `namespacer` | varchar(40) | ✗ | - | - |

---

### l_specialpp

**คำอธิบาย:** -

**จำนวนแถว:** 292

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ppcode` | varchar(6) | ✓ | IDX | - |
| `description` | varchar(200) | ✓ | - | คำอธิบาย |

---

### l_statushiv

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `statushiv` | varchar(2) | ✓ | - | - |
| `namehiv` | varchar(40) | ✓ | - | - |

---

### l_subgroupcdt2

**คำอธิบาย:** -

**จำนวนแถว:** 82

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `subgroup` | varchar(4) | ✗ | IDX | - |
| `namesub` | varchar(200) | ✗ | - | - |

---

### l_tflag

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `flag_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `flag_code` | varchar(1) | ✗ | PK | รหัส flag |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_toilet

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `toilet` | varchar(1) | ✓ | - | - |
| `ntoilet` | varchar(100) | ✓ | - | - |

---

### l_ttm9

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `รหัสยา` | int(1) | ✗ | - | - |
| `ชื่อยา` | int(1) | ✗ | - | - |
| `จำนวน` | int(1) | ✗ | - | - |

---

### l_typein

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `t_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `t_code` | varchar(1) | ✗ | PK | รหัส t |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_typein_ae

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `typein_ae`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `typein_ae` | varchar(1) | ✗ | PK | - |
| `nametypein` | varchar(40) | ✗ | - | - |

---

### l_typeout

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `typeout_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `typeout_code` | varchar(1) | ✗ | PK | รหัส typeout |
| `description` | varchar(20) | ✓ | - | คำอธิบาย |

---

### l_typeserv

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `ts_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ts_code` | varchar(2) | ✗ | PK | รหัส ts |
| `description` | varchar(255) | ✓ | - | คำอธิบาย |

---

### l_typeservicehome

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `codetype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codetype` | varchar(1) | ✗ | PK | - |
| `nametype` | varchar(40) | ✓ | - | - |

---

### l_vehicle

**คำอธิบาย:** -

**จำนวนแถว:** 14

**Engine:** InnoDB

**Primary Key:** `vehicle`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vehicle` | varchar(2) | ✗ | PK | - |
| `namevehicle` | varchar(40) | ✗ | - | - |

---

### l_villagerisktype

**คำอธิบาย:** -

**จำนวนแถว:** 18

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `risktype` | varchar(3) | ✓ | - | - |
| `nrisktype` | varchar(100) | ✓ | - | - |

---

### l_vstatus

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vstatus` | varchar(1) | ✓ | IDX | - |
| `nvstatus` | varchar(40) | ✓ | - | - |

---

### l_wastewater

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `wastewater` | varchar(1) | ✓ | - | - |
| `nwaste` | varchar(100) | ✓ | - | - |

---

### l_watertype

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `watertype` | varchar(1) | ✓ | - | - |
| `nwatertype` | varchar(100) | ✓ | - | - |

---

### lcgt

**คำอธิบาย:** -

**จำนวนแถว:** 111,880

**Engine:** InnoDB

**Primary Key:** `ln`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ln` | int(11) | ✗ | PK | - |
| `gct` | longtext | ✗ | - | - |
| `comment` | text | ✓ | - | ความคิดเห็น |

---

### lmculture

**คำอธิบาย:** -

**จำนวนแถว:** 37

**Engine:** InnoDB

**Primary Key:** `ccode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ccode` | int(3) | ✗ | PK | - |
| `culture` | varchar(30) | ✗ | - | - |

---

### lmgram

**คำอธิบาย:** -

**จำนวนแถว:** 97

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(3) | ✗ | - | รหัส |
| `grmpmt` | varchar(70) | ✗ | IDX | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### lmothua

**คำอธิบาย:** -

**จำนวนแถว:** 395

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `oua` | varchar(35) | ✗ | IDX | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### lmparasit

**คำอธิบาย:** -

**จำนวนแถว:** 154

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(2) | ✗ | - | รหัส |
| `fname` | varchar(30) | ✗ | IDX | ชื่อจริง |
| `prstpmt` | varchar(30) | ✗ | IDX | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### lmplatelet

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(2) | ✗ | IDX | รหัส |
| `name` | varchar(30) | ✗ | - | ชื่อ |

---

### lmpmstage

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(3) | ✗ | IDX | รหัส |
| `stage` | varchar(32) | ✗ | IDX | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### lmpmtype

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(1) | ✗ | IDX | รหัส |
| `type` | varchar(10) | ✗ | IDX | ประเภท |
| `slct` | tinyint(1) | ✗ | - | - |

---

### lmrbc

**คำอธิบาย:** -

**จำนวนแถว:** 93

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(2) | ✗ | - | รหัส |
| `rbcpmt` | varchar(20) | ✗ | IDX | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### lmuacent

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(1) | ✗ | IDX | รหัส |
| `cent` | varchar(20) | ✓ | - | - |

---

### lmuacolor

**คำอธิบาย:** -

**จำนวนแถว:** 14

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(2) | ✗ | IDX | รหัส |
| `colo` | varchar(20) | ✗ | - | - |

---

### lmuaepi

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(3) | ✗ | IDX | รหัส |
| `name` | varchar(20) | ✓ | - | ชื่อ |

---

### lmuarbc

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(3) | ✗ | IDX | รหัส |
| `name` | varchar(20) | ✓ | - | ชื่อ |

---

### lmuaturbid

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(1) | ✗ | IDX | รหัส |
| `name` | varchar(20) | ✗ | - | ชื่อ |

---

### lmuawbc

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(3) | ✗ | IDX | รหัส |
| `name` | varchar(20) | ✓ | - | ชื่อ |

---

### lmvtb

**คำอธิบาย:** -

**จำนวนแถว:** 14

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(2) | ✗ | IDX | รหัส |
| `name` | varchar(20) | ✓ | - | ชื่อ |

---

### lmwbc

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(2) | ✗ | IDX | รหัส |
| `wbcpmt` | varchar(40) | ✗ | IDX | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### lr_c

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namelr_c` | varchar(30) | ✗ | - | - |
| `codelr_c` | varchar(2) | ✗ | IDX | - |

---

### male

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** MyISAM

**Primary Key:** `male`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namemale` | varchar(40) | ✗ | - | - |
| `male` | varchar(1) | ✗ | PK | - |

---

### microa

**คำอธิบาย:** -

**จำนวนแถว:** 2,251

**Engine:** MyISAM

**Primary Key:** `ln`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ln` | int(8) | ✗ | PK | - |
| `micro` | varchar(32) | ✓ | - | - |

---

### money

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `total` | int(1) | ✗ | - | รวม |
| `diag` | int(1) | ✗ | - | การวินิจฉัย |

---

### mrtlst

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** MyISAM

**Primary Key:** `mrtlst`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `mrtlst` | varchar(1) | ✗ | PK | - |
| `namemrt` | varchar(40) | ✗ | - | - |
| `eclaimname` | varchar(40) | ✓ | - | - |

---

### name504p

**คำอธิบาย:** -

**จำนวนแถว:** 21

**Engine:** InnoDB

**Primary Key:** `code504p`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code504p` | int(3) | ✗ | PK | - |
| `name504p` | varchar(65) | ✗ | IDX | - |

---

### name505p

**คำอธิบาย:** -

**จำนวนแถว:** 75

**Engine:** InnoDB

**Primary Key:** `code505p`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code505p` | int(3) | ✗ | PK | - |
| `name505p` | varchar(65) | ✗ | IDX | - |

---

### name506p

**คำอธิบาย:** -

**จำนวนแถว:** 74

**Engine:** InnoDB

**Primary Key:** `code506p`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code506p` | int(3) | ✗ | PK | - |
| `name506p` | varchar(65) | ✗ | IDX | - |

---

### nameaccp

**คำอธิบาย:** -

**จำนวนแถว:** 16

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameaccp` | varchar(65) | ✗ | IDX | - |
| `codeaccp` | int(3) | ✗ | - | - |

---

### nameeye

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `codeeye`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `nameeye` | varchar(30) | ✗ | IDX | - |
| `codeeye` | int(2) | ✗ | PK | - |
| `m10` | int(4) | ✗ | - | - |
| `f10` | int(4) | ✗ | - | - |
| `s10` | int(4) | ✗ | - | - |
| `m11` | int(4) | ✗ | - | - |
| `f11` | int(4) | ✗ | - | - |
| `s11` | int(4) | ✗ | - | - |
| `m12` | int(4) | ✗ | - | - |
| `f12` | int(4) | ✗ | - | - |
| `s12` | int(4) | ✗ | - | - |
| `m01` | int(4) | ✗ | - | - |
| `f01` | int(4) | ✗ | - | - |
| `s01` | int(4) | ✗ | - | - |
| `m02` | int(4) | ✗ | - | - |
| `f02` | int(4) | ✗ | - | - |
| `s02` | int(4) | ✗ | - | - |
| `m03` | int(4) | ✗ | - | - |
| `f03` | int(4) | ✗ | - | - |
| `s03` | int(4) | ✗ | - | - |
| `m04` | int(4) | ✗ | - | - |
| `f04` | int(4) | ✗ | - | - |
| `s04` | int(4) | ✗ | - | - |
| `m05` | int(4) | ✗ | - | - |
| `f05` | int(4) | ✗ | - | - |
| `s05` | int(4) | ✗ | - | - |
| `m06` | int(4) | ✗ | - | - |
| `f06` | int(4) | ✗ | - | - |
| `s06` | int(4) | ✗ | - | - |
| `m07` | int(4) | ✗ | - | - |
| `f07` | int(4) | ✗ | - | - |
| `s07` | int(4) | ✗ | - | - |
| `m08` | int(4) | ✗ | - | - |
| `f08` | int(4) | ✗ | - | - |
| `s08` | int(4) | ✗ | - | - |
| `m09` | int(4) | ✗ | - | - |
| `f09` | int(4) | ✗ | - | - |
| `s09` | int(4) | ✗ | - | - |
| `summ` | int(5) | ✗ | - | - |
| `sumf` | int(5) | ✗ | - | - |
| `sums` | int(5) | ✗ | - | - |

---

### newIncoth

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `total` | int(1) | ✗ | - | รวม |
| `date` | int(1) | ✗ | - | วันที่ |

---

### newin

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(1) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `TOTAL` | int(1) | ✗ | - | รวม |

---

### nhso_adp_type

**คำอธิบาย:** -

**จำนวนแถว:** 20

**Engine:** InnoDB

**Primary Key:** `nhso_adp_type_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `nhso_adp_type_id` | int(11) | ✗ | PK | รหัส nhso_adp_type |
| `nhso_adp_type_name` | varchar(200) | ✓ | UK | ชื่อ nhso_adp_type |
| `drg_chrgitem` | int(11) | ✓ | - | - |

---

### nhsodeath

**คำอธิบาย:** -

**จำนวนแถว:** 2,456,958

**Engine:** InnoDB

**Primary Key:** `cid`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cid` | varchar(13) | ✗ | PK | เลขบัตรประชาชน |
| `date` | date | ✗ | - | วันที่ |

---

### note_detail

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `note_detail_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `note_detail_id` | int(10) unsigned | ✗ | PK | รหัส note_detail |
| `note_id` | int(11) | ✗ | - | รหัส note |
| `problem` | longtext | ✓ | - | - |
| `activity` | longtext | ✓ | - | - |
| `evaluate` | longtext | ✓ | - | - |
| `note_by` | int(11) | ✓ | - | - |
| `d_update` | timestamp | ✓ | - | - |

---

### ntnlty

**คำอธิบาย:** -

**จำนวนแถว:** 93

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ntnlty` | varchar(3) | ✗ | IDX | - |
| `namentnlty` | varchar(30) | ✗ | IDX | - |
| `nation` | varchar(3) | ✗ | - | - |
| `kios` | varchar(1) | ✗ | - | - |
| `icon` | varchar(3) | ✓ | - | - |

---

### o_archive_all_json

**คำอธิบาย:** -

**จำนวนแถว:** 1,709,071

**Engine:** InnoDB

**Primary Key:** `archive_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `archive_id` | bigint(20) | ✗ | PK | รหัส archive |
| `source_table` | varchar(255) | ✗ | - | - |
| `merged_at` | datetime | ✗ | - | - |
| `row_data` | longtext | ✓ | - | - |

---

### oappst

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `oappst`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `oappst` | varchar(1) | ✗ | PK | - |
| `nameoappst` | varchar(30) | ✗ | IDX | - |

---

### opno

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orno` | int(8) | ✗ | IDX | - |
| `no1` | varchar(2) | ✗ | - | - |
| `no2` | varchar(2) | ✗ | - | - |
| `no3` | varchar(2) | ✗ | - | - |
| `no4` | varchar(2) | ✗ | - | - |
| `no5` | varchar(2) | ✗ | - | - |

---

### orcasetype

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** MyISAM

**Primary Key:** `orcase`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orcase` | varchar(1) | ✗ | PK | - |
| `namecase` | varchar(40) | ✗ | - | - |

---

### order_note

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `prscno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `prscno` | int(11) | ✗ | PK | - |
| `order_note` | tinytext | ✓ | - | - |
| `order_note_type` | varchar(1) | ✓ | - | ประเภท order_note |

---

### ortwrk

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `orno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orno` | int(8) | ✗ | PK | - |
| `timework` | varchar(1) | ✗ | - | - |

---

### phmdr

**คำอธิบาย:** -

**จำนวนแถว:** 185,841

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `dct` | varchar(5) | ✗ | - | - |
| `prscno` | int(11) | ✗ | - | - |
| `srvdttm` | datetime | ✗ | - | - |

---

### phrmcst

**คำอธิบาย:** -

**จำนวนแถว:** 19

**Engine:** InnoDB

**Primary Key:** `pmc`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pmc` | varchar(5) | ✗ | PK | - |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✗ | - | ชื่อจริง |
| `lname` | varchar(25) | ✗ | - | นามสกุล |
| `dspname` | varchar(50) | ✗ | - | - |
| `lcno` | varchar(6) | ✗ | - | - |
| `psswrd` | varchar(20) | ✗ | - | - |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |

---

### pillness

**คำอธิบาย:** -

**จำนวนแถว:** 8,276,320

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `pillness` | varchar(40) | ✗ | - | - |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |

---

### pname

**คำอธิบาย:** -

**จำนวนแถว:** 505

**Engine:** InnoDB

**Primary Key:** `idname`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `idname` | int(10) | ✗ | PK | - |
| `pnameshort` | varchar(255) | ✓ | - | - |
| `panmefull` | varchar(255) | ✓ | - | - |

---

### pointphm

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `pointphm`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pointphm` | int(1) | ✗ | PK | - |
| `namepoint` | varchar(40) | ✗ | - | - |

---

### postlr_c

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `codepostlr`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codepostlr` | varchar(2) | ✗ | PK | - |
| `namepostlr` | varchar(30) | ✗ | - | - |

---

### pprestype

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `pprescode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pprescode` | varchar(1) | ✗ | PK | - |
| `nametype` | varchar(40) | ✗ | - | - |

---

### prcd

**คำอธิบาย:** -

**จำนวนแถว:** 918

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `codeprcd` | varchar(10) | ✗ | IDX | - |
| `nameprcd` | varchar(90) | ✗ | IDX | - |
| `fullname` | varchar(255) | ✗ | - | - |
| `income` | varchar(2) | ✗ | - | รายได้ |
| `cgd` | varchar(5) | ✗ | - | - |
| `etype` | varchar(100) | ✗ | - | - |
| `ptright` | varchar(200) | ✗ | - | ผู้ป่วย right |
| `priceprcd` | int(11) | ✗ | - | - |
| `pricecgd` | int(11) | ✗ | - | - |
| `chkshow` | varchar(1) | ✗ | - | - |
| `adp_code` | varchar(20) | ✓ | - | รหัส adp |
| `adp_type` | varchar(2) | ✓ | - | ประเภท adp |

---

### prelr_c

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `nameprelr` | varchar(30) | ✗ | - | - |
| `codeprelr` | varchar(2) | ✗ | IDX | - |

---

### productcat

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `productcat` | varchar(2) | ✓ | - | - |
| `nameprocat` | varchar(40) | ✓ | - | - |

---

### profile_app

**คำอธิบาย:** -

**จำนวนแถว:** 16

**Engine:** InnoDB

**Primary Key:** `user_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `user_id` | int(11) | ✗ | PK | รหัส user |
| `title` | varchar(20) | ✓ | - | - |
| `fullname` | varchar(255) | ✓ | - | - |
| `position` | varchar(255) | ✓ | - | - |
| `d_update` | timestamp | ✓ | - | - |

---

### prscpoint

**คำอธิบาย:** -

**จำนวนแถว:** 811,250

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `prscno` | int(11) | ✗ | IDX | - |
| `namecomp` | varchar(40) | ✗ | - | - |
| `ipaddr` | varchar(40) | ✗ | - | - |
| `prtdttm` | datetime | ✗ | - | - |

---

### q4u_departments

**คำอธิบาย:** -

**จำนวนแถว:** 45

**Engine:** InnoDB

**Primary Key:** `department_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `department_id` | int(6) | ✗ | PK | รหัส department |
| `department_name` | varchar(100) | ✓ | - | ชื่อ department |

---

### q4u_grouppriority

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** InnoDB

**Primary Key:** `idgroup_priority`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `idgroup_priority` | int(10) | ✗ | PK | - |
| `namegroup` | varchar(255) | ✓ | - | - |

---

### q4u_malename

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `malename` | varchar(255) | ✓ | - | - |

---

### q4u_number

**คำอธิบาย:** -

**จำนวนแถว:** 200

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `number1` | varchar(255) | ✓ | - | - |
| `number2` | varchar(255) | ✓ | - | - |
| `number3` | varchar(255) | ✓ | - | - |

---

### q4u_priorities

**คำอธิบาย:** -

**จำนวนแถว:** 19

**Engine:** InnoDB

**Primary Key:** `priority_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `priority_id` | int(3) | ✗ | PK | รหัส priority |
| `priority_name` | varchar(50) | ✓ | - | ชื่อ priority |
| `priority_prefix` | char(2) | ✓ | - | - |
| `prority_color` | varchar(100) | ✓ | - | - |
| `priority_filter` | int(3) | ✓ | - | - |
| `priotity_sortbydoc` | int(3) | ✓ | - | - |
| `priority_callinroom_all` | varchar(255) | ✓ | - | - |
| `priority_group` | int(3) | ✓ | - | - |
| `priority_mainfix` | varchar(2) | ✓ | - | - |
| `priority_color` | varchar(100) | ✓ | - | - |
| `priority_order` | int(11) | ✓ | - | - |

---

### q4u_service_point_prefix

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `service_point_id, prefix`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `service_point_id` | int(3) | ✗ | PK | รหัส service_point |
| `prefix` | char(1) | ✗ | PK | - |
| `service_point_status_id` | int(3) | ✓ | - | รหัส service_point_status |

---

### q4u_service_point_status

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `service_point_status_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `service_point_status_id` | int(11) | ✗ | PK | รหัส service_point_status |
| `service_point_status_name` | varchar(10) | ✓ | - | ชื่อ service_point_status |

---

### que_openapp

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ip_addr` | varchar(50) | ✓ | - | - |
| `que_app_group` | varchar(50) | ✓ | - | - |
| `que_group` | int(11) | ✓ | - | - |
| `description` | varchar(50) | ✓ | - | คำอธิบาย |

---

### que_output_tv

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `que_server` | varchar(50) | ✓ | - | - |
| `que_port` | varchar(50) | ✓ | - | - |
| `que_group` | varchar(50) | ✓ | - | - |

---

### que_type_group

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ptype_name` | varchar(50) | ✓ | - | ชื่อ ptype |
| `qstart_no` | int(11) | ✓ | - | เลขที่ qstart |
| `slip_total` | int(11) | ✓ | - | - |

---

### que_webserver

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ipaddr` | varchar(50) | ✓ | - | - |
| `que_group` | int(11) | ✓ | IDX | - |

---

### rcedit

**คำอธิบาย:** -

**จำนวนแถว:** 815

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `id_edt` | varchar(25) | ✗ | - | - |
| `edt_dt` | datetime | ✗ | - | - |
| `state` | text | ✗ | - | - |
| `staff` | varchar(10) | ✗ | - | - |

---

### rcv_comp

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `codercv`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codercv` | varchar(2) | ✗ | PK | - |
| `namercv` | varchar(40) | ✗ | - | - |

---

### regis_com

**คำอธิบาย:** -

**จำนวนแถว:** 155

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `com_name` | varchar(100) | ✗ | - | ชื่อ com |
| `cln_id` | varchar(5) | ✗ | - | รหัส cln |
| `depart_id` | varchar(5) | ✗ | - | รหัส depart |
| `com_point` | varchar(100) | ✗ | - | - |

---

### registerfu

**คำอธิบาย:** -

**จำนวนแถว:** 164,521

**Engine:** MyISAM

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(8) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | varchar(80) | ✓ | - | ชื่อจริง |
| `lname` | varchar(80) | ✓ | - | นามสกุล |
| `cln` | varchar(5) | ✓ | - | - |
| `prtq` | varchar(1) | ✓ | - | - |

---

### relinscl

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** MyISAM

**Primary Key:** `inscl`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `inscl` | varchar(1) | ✗ | PK | - |
| `nameinscl` | varchar(20) | ✗ | - | - |

---

### rep_claim

**คำอธิบาย:** -

**จำนวนแถว:** 37

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `code_status` | varchar(10) | ✓ | - | สถานะ code |
| `message` | varchar(100) | ✓ | - | - |
| `message_th` | varchar(100) | ✓ | - | - |
| `seq` | varchar(20) | ✓ | - | ลำดับ |
| `hn` | varchar(20) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `transaction_uid` | varchar(100) | ✓ | - | - |
| `verify_url` | varchar(200) | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |
| `status_dmht` | varchar(10) | ✓ | - | - |

---

### repform

**คำอธิบาย:** -

**จำนวนแถว:** 199

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(3) | ✗ | PK | รหัสประจำ (Primary Key) |
| `reptype` | varchar(2) | ✗ | - | - |
| `repname` | varchar(255) | ✗ | - | - |
| `reppath` | varchar(255) | ✗ | - | - |

---

### rfrcs

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** MyISAM

**Primary Key:** `rfrcs`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rfrcs` | varchar(2) | ✗ | PK | - |
| `namerfrcs` | varchar(60) | ✗ | - | - |

---

### rights

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** MyISAM

**Primary Key:** `coderight`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `coderight` | varchar(1) | ✗ | PK | - |
| `nameright` | varchar(30) | ✗ | - | - |

---

### rlgn

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** MyISAM

**Primary Key:** `rlgn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rlgn` | varchar(1) | ✗ | PK | - |
| `namerlgn` | varchar(40) | ✗ | - | - |

---

### role_app

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `role_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `role_id` | tinyint(4) | ✗ | PK | รหัส role |
| `role_name` | varchar(255) | ✗ | - | ชื่อ role |
| `is_active` | enum('1','0') | ✓ | - | ใช้งานอยู่ |
| `d_update` | timestamp | ✓ | - | - |

---

### rtnadvice

**คำอธิบาย:** -

**จำนวนแถว:** 24

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nameadvice` | varchar(40) | ✗ | - | - |
| `advice` | longtext | ✗ | - | - |

---

### rtnallggrp

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `rtnno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rtnno` | int(4) | ✗ | PK | - |
| `namegrp` | varchar(60) | ✗ | - | - |

---

### rtni

**คำอธิบาย:** -

**จำนวนแถว:** 25

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namertni` | varchar(30) | ✗ | IDX | - |
| `rtnno` | int(4) | ✗ | IDX | - |

---

### rtnl

**คำอธิบาย:** -

**จำนวนแถว:** 62

**Engine:** MyISAM

**Primary Key:** `rtnno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rtnno` | int(4) | ✗ | PK | - |
| `namertnl` | varchar(30) | ✗ | IDX | - |

---

### rtnldt

**คำอธิบาย:** -

**จำนวนแถว:** 405

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `rtnno` | int(4) | ✗ | IDX | - |
| `labcode` | varchar(3) | ✓ | - | รหัสแล็บ |

---

### rtnlfu

**คำอธิบาย:** -

**จำนวนแถว:** 27

**Engine:** MyISAM

**Primary Key:** `rtnno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rtnno` | int(4) | ✗ | PK | - |
| `namertnl` | varchar(30) | ✗ | IDX | - |

---

### rtnlfudt

**คำอธิบาย:** -

**จำนวนแถว:** 125

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `rtnno` | int(4) | ✗ | IDX | - |
| `labcode` | varchar(3) | ✗ | - | รหัสแล็บ |

---

### schedules

**คำอธิบาย:** -

**จำนวนแถว:** 94,677

**Engine:** InnoDB

**Primary Key:** `schedule_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `schedule_id` | int(10) unsigned | ✗ | PK | รหัส schedule |
| `plan_id` | int(11) | ✗ | - | รหัส plan |
| `fudate` | date | ✗ | - | - |
| `treat_no` | int(11) | ✗ | - | เลขที่ treat |

---

### school

**คำอธิบาย:** -

**จำนวนแถว:** 40

**Engine:** MyISAM

**Primary Key:** `codeschool`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codeschool` | varchar(4) | ✗ | PK | - |
| `nameschool` | varchar(25) | ✗ | - | - |

---

### scr_it

**คำอธิบาย:** -

**จำนวนแถว:** 11,415

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(255) | ✓ | - | คำนำหน้าชื่อ |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `lname` | varchar(255) | ✓ | - | นามสกุล |
| `sex` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |
| `age` | varchar(255) | ✓ | - | - |
| `twoq` | varchar(255) | ✓ | - | - |
| `dringing` | varchar(255) | ✓ | - | - |
| `hcdring` | varchar(255) | ✓ | - | - |
| `smonging` | varchar(255) | ✓ | - | - |
| `hcsmonging` | varchar(255) | ✓ | - | - |
| `vstdttm` | datetime | ✓ | - | - |
| `member` | varchar(255) | ✓ | - | - |
| `cln` | varchar(255) | ✓ | - | - |
| `sen` | varchar(255) | ✓ | - | - |
| `vn` | int(11) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |

---

### scr_it8q

**คำอธิบาย:** -

**จำนวนแถว:** 70

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(255) | ✓ | - | คำนำหน้าชื่อ |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `lname` | varchar(255) | ✓ | - | นามสกุล |
| `sex` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |
| `age` | varchar(255) | ✓ | - | - |
| `hcsmonging` | int(255) | ✓ | - | - |
| `vstdttm` | datetime | ✓ | - | - |
| `member` | varchar(255) | ✓ | - | - |
| `cln` | varchar(255) | ✓ | - | - |
| `sen` | varchar(255) | ✓ | - | - |
| `vn` | int(11) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |

---

### scr_it9q

**คำอธิบาย:** -

**จำนวนแถว:** 73

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(255) | ✓ | - | คำนำหน้าชื่อ |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `lname` | varchar(255) | ✓ | - | นามสกุล |
| `sex` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |
| `age` | varchar(255) | ✓ | - | - |
| `hcsmonging` | int(255) | ✓ | - | - |
| `vstdttm` | datetime | ✓ | - | - |
| `member` | varchar(255) | ✓ | - | - |
| `cln` | varchar(255) | ✓ | - | - |
| `sen` | varchar(255) | ✓ | - | - |
| `vn` | int(11) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |

---

### screen

**คำอธิบาย:** -

**จำนวนแถว:** 14,661

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `smoke` | varchar(1) | ✗ | - | - |
| `codedm` | varchar(1) | ✗ | - | - |
| `hts1` | decimal(5,1) | ✗ | - | - |
| `hts2` | decimal(5,1) | ✗ | - | - |
| `htd1` | decimal(5,1) | ✗ | - | - |
| `htd2` | decimal(8,1) | ✗ | - | - |
| `codefbs` | varchar(1) | ✗ | - | - |
| `codeht` | varchar(1) | ✗ | - | - |
| `foot` | varchar(1) | ✗ | - | - |
| `retina` | varchar(1) | ✗ | - | - |
| `waist_cm` | int(3) | ✗ | - | - |
| `ncddate` | date | ✗ | - | - |

---

### scrub

**คำอธิบาย:** -

**จำนวนแถว:** 54

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `orno` | int(8) | ✗ | IDX | - |
| `staff` | varchar(2) | ✓ | - | - |

---

### service_point

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `hcode, servpoint_code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hcode` | varchar(5) | ✗ | PK | - |
| `servpoint_code` | varchar(6) | ✗ | PK | รหัส servpoint |
| `servpoint_name` | varchar(100) | ✓ | - | ชื่อ servpoint |
| `servpoint_abbr` | varchar(50) | ✓ | - | - |
| `local_code` | varchar(6) | ✓ | - | รหัส local |
| `standard43_code` | varchar(5) | ✓ | - | รหัส standard43 |
| `servpoint_type` | varchar(6) | ✓ | - | ประเภท servpoint |
| `topic` | varchar(50) | ✓ | - | - |

---

### service_type

**คำอธิบาย:** -

**จำนวนแถว:** 3,118,600

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `service` | varchar(1) | ✗ | - | - |

---

### sign

**คำอธิบาย:** -

**จำนวนแถว:** 3,989,291

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `sign` | varchar(40) | ✗ | IDX | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `consultid` | int(15) | ✗ | - | - |

---

### sign_d

**คำอธิบาย:** -

**จำนวนแถว:** 295,735

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `dn` | int(11) | ✗ | IDX | - |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `sign` | varchar(40) | ✗ | IDX | - |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `consultid` | int(15) | ✓ | IDX | - |

---

### sign_d0

**คำอธิบาย:** -

**จำนวนแถว:** 321

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `sign` | varchar(40) | ✗ | IDX | - |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(5) | ✗ | - | เวลาที่มารับบริการ |
| `slct` | tinyint(1) | ✗ | - | - |

---

### sign_merged_01

**คำอธิบาย:** -

**จำนวนแถว:** 25,184

**Engine:** InnoDB

**Primary Key:** `merge_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `merge_id` | bigint(20) | ✗ | PK | รหัส merge |
| `source_table` | varchar(255) | ✗ | - | - |
| `id` | int(11) | ✗ | - | รหัสประจำ (Primary Key) |
| `sign` | varchar(40) | ✗ | - | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### sign_merged_02

**คำอธิบาย:** -

**จำนวนแถว:** 71,233

**Engine:** InnoDB

**Primary Key:** `merge_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `merge_id` | bigint(20) | ✗ | PK | รหัส merge |
| `source_table` | varchar(255) | ✗ | - | - |
| `sign` | varchar(40) | ✗ | - | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### sign_merged_03

**คำอธิบาย:** -

**จำนวนแถว:** 6,416,349

**Engine:** InnoDB

**Primary Key:** `merge_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `merge_id` | bigint(20) | ✗ | PK | รหัส merge |
| `source_table` | varchar(255) | ✗ | - | - |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `sign` | varchar(40) | ✗ | - | - |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |

---

### signk320

**คำอธิบาย:** -

**จำนวนแถว:** 501

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `sign` | varchar(40) | ✗ | - | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### sitincoth

**คำอธิบาย:** -

**จำนวนแถว:** 8,472

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `total` | int(9) | ✓ | - | รวม |

---

### sitincothi

**คำอธิบาย:** -

**จำนวนแถว:** 542

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `total` | int(9) | ✓ | - | รวม |

---

### sitincotho

**คำอธิบาย:** -

**จำนวนแถว:** 11,325

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `total` | int(9) | ✓ | - | รวม |

---

### spclty

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `spclty`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `spclty` | varchar(2) | ✗ | PK | สาขา y |
| `namespclty` | varchar(40) | ✗ | - | - |

---

### specialpp

**คำอธิบาย:** -

**จำนวนแถว:** 65,811

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `ppcode` | varchar(6) | ✗ | - | - |
| `d_update` | datetime | ✗ | - | - |

---

### ssop_ccode

**คำอธิบาย:** -

**จำนวนแถว:** 24

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ccode` | varchar(5) | ✓ | - | - |
| `cgroup` | char(2) | ✓ | - | - |
| `cname` | text | ✓ | - | ชื่อร่วม |
| `chi_table` | varchar(50) | ✓ | - | - |
| `chi_fields` | varchar(50) | ✓ | - | - |
| `cssop_table` | varchar(100) | ✓ | - | - |
| `cssop_fields` | varchar(100) | ✓ | - | - |
| `cremark` | text | ✓ | - | - |
| `cquery_test` | text | ✓ | - | - |
| `cvisible` | enum('Y','N') | ✓ | - | - |

---

### ssop_dispensing

**คำอธิบาย:** -

**จำนวนแถว:** 225

**Engine:** MyISAM

**Primary Key:** `Dispid`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ProviderID` | varchar(10) | ✓ | - | - |
| `Dispid` | varchar(20) | ✗ | PK | - |
| `Invno` | varchar(50) | ✗ | IDX | - |
| `HN` | varchar(50) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `PID` | varchar(20) | ✓ | - | - |
| `Prescdt` | datetime | ✓ | - | - |
| `Dispdt` | datetime | ✓ | - | - |
| `Prescb` | varchar(20) | ✓ | - | - |
| `Itemcnt` | int(10) | ✓ | - | - |
| `ChargeAmt` | decimal(10,2) | ✓ | - | - |
| `ClaimAmt` | decimal(10,2) | ✓ | - | - |
| `Paid` | decimal(10,2) | ✓ | - | ชำระแล้ว |
| `OtherPay` | decimal(10,2) | ✓ | - | - |
| `Reimbuser` | varchar(20) | ✓ | - | - |
| `BenefitPlan` | varchar(10) | ✓ | - | - |
| `DispeStat` | varchar(5) | ✓ | - | - |
| `SvID` | varchar(20) | ✓ | - | - |
| `DayCover` | varchar(10) | ✓ | - | - |
| `status_flg` | enum('A','C','D') | ✓ | - | - |
| `export_code` | enum('SS','CS') | ✓ | - | รหัส export |
| `vstdate` | date | ✗ | IDX | วันที่มารับบริการ |

---

### ssop_opservices

**คำอธิบาย:** -

**จำนวนแถว:** 1,513

**Engine:** MyISAM

**Primary Key:** `SvID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `Invno` | varchar(20) | ✗ | IDX | - |
| `SvID` | varchar(20) | ✗ | PK | - |
| `Class` | varchar(2) | ✗ | - | - |
| `Hcode` | varchar(5) | ✗ | - | - |
| `HN` | varchar(20) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Pid` | varchar(13) | ✗ | - | - |
| `CareAccount` | char(1) | ✗ | - | - |
| `TypeServ` | char(2) | ✗ | - | - |
| `TypeIn` | char(50) | ✗ | - | - |
| `TypeOut` | char(50) | ✗ | - | - |
| `DTAppoint` | varchar(50) | ✓ | - | - |
| `SvPID` | varchar(10) | ✗ | - | - |
| `Clinic` | varchar(2) | ✗ | - | - |
| `BegDT` | datetime | ✗ | - | - |
| `EndDT` | datetime | ✗ | - | - |
| `LcCode` | varchar(15) | ✗ | - | - |
| `CodeSet` | varchar(2) | ✗ | - | - |
| `STDCode` | varchar(10) | ✗ | - | - |
| `SvCharge` | decimal(10,2) | ✗ | - | - |
| `Completion2` | char(1) | ✗ | - | - |
| `SvTxCode` | varchar(10) | ✗ | - | - |
| `ClaimCat` | varchar(10) | ✗ | - | - |
| `status_flg` | enum('A','C','D') | ✗ | - | - |
| `export_code` | enum('SS','CS') | ✓ | - | รหัส export |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |

---

### statustb

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `statustb`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `statustb` | varchar(1) | ✗ | PK | - |
| `namesutb` | varchar(40) | ✗ | - | - |

---

### subinscl

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** MyISAM

**Primary Key:** `inscl`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `inscl` | varchar(2) | ✗ | PK | - |
| `nameinscl` | varchar(255) | ✗ | - | - |

---

### sur_comp

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `codesurcom`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codesurcom` | varchar(2) | ✗ | PK | - |
| `namesurcom` | varchar(20) | ✗ | - | - |

---

### surgtype

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `codesurg`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codesurg` | varchar(2) | ✗ | PK | - |
| `namesurg` | varchar(50) | ✗ | - | - |

---

### symp_d

**คำอธิบาย:** -

**จำนวนแถว:** 307,497

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `dn` | int(11) | ✗ | IDX | - |
| `symptom` | varchar(40) | ✗ | IDX | - |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `consultid` | int(15) | ✓ | IDX | - |

---

### tbcase

**คำอธิบาย:** -

**จำนวนแถว:** 22

**Engine:** InnoDB

**Primary Key:** `tbcase`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `tbcase` | varchar(2) | ✗ | PK | - |
| `namecase` | varchar(40) | ✓ | - | - |

---

### testinser

**คำอธิบาย:** -

**จำนวนแถว:** 1,000

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `teshn` | varchar(255) | ✓ | - | - |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `surname` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |

---

### tpodi

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `tpno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `tpno` | int(9) | ✗ | PK | - |
| `nametp` | varchar(80) | ✗ | - | - |
| `dct` | varchar(5) | ✗ | - | - |

---

### triage

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** MyISAM

**Primary Key:** `codetri`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codetri` | varchar(1) | ✗ | PK | - |
| `nametri` | varchar(40) | ✗ | - | - |

---

### tumbon

**คำอธิบาย:** -

**จำนวนแถว:** 8,100

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nametumb` | varchar(20) | ✓ | - | - |
| `chwpart` | varchar(2) | ✗ | IDX | จังหวัด |
| `amppart` | varchar(2) | ✗ | IDX | อำเภอ |
| `tmbpart` | varchar(2) | ✗ | IDX | ตำบล |

---

### tumbontb

**คำอธิบาย:** -

**จำนวนแถว:** 32

**Engine:** MyISAM

**Primary Key:** `idTumbon`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `idTumbon` | int(2) | ✗ | PK | - |
| `tumbontb` | varchar(2) | ✗ | IDX | - |
| `nametumb` | varchar(20) | ✓ | - | - |

---

### txr

**คำอธิบาย:** -

**จำนวนแถว:** 41

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nametxr` | varchar(20) | ✓ | - | - |
| `codetxr` | varchar(2) | ✗ | IDX | - |
| `min_tx` | varchar(7) | ✗ | - | - |
| `max_tx` | varchar(7) | ✗ | - | - |

---

### vacineonline20210713

**คำอธิบาย:** -

**จำนวนแถว:** 317

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `Hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `popid` | varchar(255) | ✓ | - | - |
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |

---

### view_address

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `moopart` | int(1) | ✗ | - | หมู่ |
| `tmbpart` | int(1) | ✗ | - | ตำบล |
| `amppart` | int(1) | ✗ | - | อำเภอ |
| `namemoob` | int(1) | ✗ | - | - |
| `nametumb` | int(1) | ✗ | - | - |
| `nameampur` | int(1) | ✗ | - | - |
| `namechw` | int(1) | ✗ | - | - |
| `addrcode` | int(1) | ✗ | - | - |

---

### visit2q

**คำอธิบาย:** -

**จำนวนแถว:** 148,980

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `toq1` | varchar(1) | ✗ | - | - |
| `toq2` | varchar(1) | ✗ | - | - |

---

### visit8q

**คำอธิบาย:** -

**จำนวนแถว:** 1,946

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `toq1` | varchar(1) | ✗ | - | - |
| `toq2` | varchar(1) | ✗ | - | - |
| `toq3` | varchar(1) | ✗ | - | - |
| `toq31` | varchar(1) | ✗ | - | - |
| `toq4` | varchar(1) | ✗ | - | - |
| `toq5` | varchar(1) | ✗ | - | - |
| `toq6` | varchar(1) | ✗ | - | - |
| `toq7` | varchar(2) | ✗ | - | - |
| `toq8` | varchar(1) | ✗ | - | - |
| `score8q` | varchar(2) | ✗ | - | - |

---

### visit9q

**คำอธิบาย:** -

**จำนวนแถว:** 2,746

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `toq1` | varchar(1) | ✗ | - | - |
| `toq2` | varchar(1) | ✗ | - | - |
| `toq3` | varchar(1) | ✗ | - | - |
| `toq4` | varchar(1) | ✗ | - | - |
| `toq5` | varchar(1) | ✗ | - | - |
| `toq6` | varchar(1) | ✗ | - | - |
| `toq7` | varchar(1) | ✗ | - | - |
| `toq8` | varchar(1) | ✗ | - | - |
| `toq9` | varchar(1) | ✗ | - | - |
| `score9q` | varchar(2) | ✗ | - | - |
| `chk8q` | varchar(1) | ✗ | - | - |

---

### visit_pop

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `x` | int(1) | ✗ | - | - |
| `m` | int(1) | ✗ | - | - |
| `f` | int(1) | ✗ | - | - |

---

### visitadvice

**คำอธิบาย:** -

**จำนวนแถว:** 17,561

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `advice` | longtext | ✗ | - | - |

---

### visitelderly

**คำอธิบาย:** -

**จำนวนแถว:** 28

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `srvdttm` | datetime | ✓ | - | - |
| `adl` | varchar(40) | ✓ | - | - |
| `eva_2q` | varchar(40) | ✓ | - | - |
| `mmse` | varchar(40) | ✓ | - | - |
| `mna` | varchar(40) | ✓ | - | - |
| `ph6m` | varchar(1) | ✓ | - | - |
| `caregiver` | varchar(1) | ✓ | - | - |
| `pb_vision` | varchar(1) | ✓ | - | - |
| `tugt` | varchar(40) | ✓ | - | - |
| `iadl_tel` | varchar(1) | ✓ | - | - |
| `iadl_shop` | varchar(1) | ✓ | - | - |
| `iadl_food` | varchar(1) | ✓ | - | - |
| `iadl_home` | varchar(1) | ✓ | - | - |
| `iadl_wash` | varchar(1) | ✓ | - | - |
| `iadl_travel` | varchar(1) | ✓ | - | - |
| `iadl_rx` | varchar(1) | ✓ | - | - |
| `iadl_money` | varchar(1) | ✓ | - | - |
| `dct` | varchar(5) | ✓ | - | - |

---

### visitgfr

**คำอธิบาย:** -

**จำนวนแถว:** 728,114

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `gfr` | varchar(5) | ✗ | - | - |

---

### visitoae

**คำอธิบาย:** -

**จำนวนแถว:** 701

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `oae1` | varchar(1) | ✓ | - | - |
| `oae2` | varchar(1) | ✓ | - | - |
| `oae3` | varchar(1) | ✓ | - | - |
| `oaeresult` | varchar(1) | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |

---

### visitpriorities

**คำอธิบาย:** -

**จำนวนแถว:** 644,133

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `priority` | varchar(3) | ✗ | - | - |

---

### visitprt

**คำอธิบาย:** -

**จำนวนแถว:** 80,424

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(16) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `vstdttm` | datetime | ✗ | - | - |
| `userprt` | varchar(40) | ✗ | - | - |
| `prttype` | varchar(5) | ✗ | - | - |

---

### visitratetriage

**คำอธิบาย:** -

**จำนวนแถว:** 48,925

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(16) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(16) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `ratetriage` | varchar(1) | ✓ | - | - |

---

### visitrequest_note

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(16) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ln` | int(11) | ✓ | IDX | - |
| `req_note` | varchar(200) | ✓ | - | - |
| `d_update` | timestamp | ✓ | - | - |

---

### visitrrt

**คำอธิบาย:** -

**จำนวนแถว:** 72

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(15) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `rrttype` | varchar(1) | ✗ | - | - |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `d_update` | datetime | ✗ | - | - |

---

### visitscreencovid19

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `chktemp` | varchar(1) | ✓ | - | - |
| `chk21` | varchar(1) | ✓ | - | - |
| `chk22` | varchar(1) | ✓ | - | - |
| `chk23` | varchar(1) | ✓ | - | - |
| `chk24` | varchar(1) | ✓ | - | - |
| `chk25` | varchar(1) | ✓ | - | - |
| `chk14d` | varchar(1) | ✓ | - | - |
| `ntn14d` | varchar(40) | ✓ | - | - |
| `chk4` | varchar(1) | ✓ | - | - |
| `chk5` | varchar(1) | ✓ | - | - |
| `chk6` | varchar(1) | ✓ | - | - |
| `pronote` | varchar(200) | ✓ | - | - |
| `updttm` | datetime | ✓ | - | - |

---

### visitsosscore

**คำอธิบาย:** -

**จำนวนแถว:** 158,167

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `e` | varchar(3) | ✓ | - | - |
| `v` | varchar(3) | ✓ | - | - |
| `m` | varchar(3) | ✓ | - | - |
| `sos` | varchar(3) | ✓ | - | - |
| `o2sat` | varchar(3) | ✓ | - | - |

---

### vrcode

**คำอธิบาย:** -

**จำนวนแถว:** 28

**Engine:** InnoDB

**Primary Key:** `codevr`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codevr` | varchar(3) | ✗ | PK | - |
| `namevr` | varchar(67) | ✗ | - | - |

---

### xdose

**คำอธิบาย:** -

**จำนวนแถว:** 2,113,217

**Engine:** InnoDB

**Primary Key:** `xdoseno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `xdoseno` | int(15) | ✗ | PK | - |
| `doseprn` | varchar(60) | ✗ | - | - |

---

### xrydr

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `updttm` | datetime | ✗ | IDX | - |
| `dct` | varchar(5) | ✗ | - | - |
| `xrycode` | varchar(4) | ✗ | - | - |

---

### xryremark

**คำอธิบาย:** -

**จำนวนแถว:** 1,132

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `xrycode` | varchar(10) | ✓ | - | - |
| `vn` | varchar(50) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `VSTDATE` | date | ✓ | - | วันที่มารับบริการ |
| `VSTTIME` | time | ✓ | - | เวลาที่มารับบริการ |
| `Remark` | text | ✓ | - | หมายเหตุ |
| `Staff_code` | varchar(20) | ✓ | - | รหัส staff |

---


## patient

### Claim_HI

**คำอธิบาย:** -

**จำนวนแถว:** 656

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `sex` | varchar(255) | ✓ | - | - |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `namepttype` | varchar(255) | ✓ | - | - |
| `admit` | varchar(255) | ✓ | - | - |
| `dc` | varchar(255) | ✓ | - | - |
| `day` | varchar(255) | ✓ | - | - |
| `adjrw6` | varchar(255) | ✓ | - | - |
| `rw6` | varchar(255) | ✓ | - | - |
| `TOTAL` | varchar(255) | ✓ | - | รวม |
| `Docter` | varchar(255) | ✓ | - | - |
| `diag` | varchar(255) | ✓ | - | การวินิจฉัย |

---

### HNDM

**คำอธิบาย:** -

**จำนวนแถว:** 710

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |

---

### Mrs_No_Pttype

**คำอธิบาย:** -

**จำนวนแถว:** 32,977

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(8) | ✗ | PK | รหัสประจำ (Primary Key) |
| `HN` | varchar(12) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Kname` | varchar(25) | ✗ | - | - |
| `Fname` | varchar(100) | ✗ | - | ชื่อจริง |
| `Lname` | varchar(100) | ✗ | - | นามสกุล |
| `Cid` | varchar(17) | ✗ | - | เลขบัตรประชาชน |
| `Sex` | varchar(15) | ✗ | - | - |
| `Dob` | varchar(20) | ✗ | - | - |
| `Age` | varchar(3) | ✗ | - | - |
| `Number` | varchar(20) | ✗ | - | - |
| `Pttype` | varchar(3) | ✗ | - | ประเภทสิทธิ |
| `NPttype` | varchar(100) | ✗ | - | - |
| `Tpart` | varchar(250) | ✗ | - | - |
| `S1` | varchar(6) | ✗ | - | - |
| `S1_1` | varchar(150) | ✗ | - | - |
| `S2` | varchar(6) | ✗ | - | - |
| `S2_2` | varchar(150) | ✗ | - | - |
| `fdate` | varchar(20) | ✗ | - | - |
| `ex_date` | varchar(20) | ✗ | - | วันที่ ex |
| `ldate` | varchar(20) | ✗ | - | - |

---

### Mrs_newSammary

**คำอธิบาย:** -

**จำนวนแถว:** 76,378

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `AN` | varchar(10) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `HN` | varchar(10) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Pname` | varchar(20) | ✗ | - | คำนำหน้าชื่อ |
| `Fullname` | varchar(255) | ✗ | - | - |
| `Male` | varchar(30) | ✗ | - | - |
| `Brithdate` | varchar(20) | ✗ | - | - |
| `AgeY` | varchar(3) | ✗ | - | - |
| `AgeM` | varchar(10) | ✗ | - | - |
| `AgeD` | varchar(10) | ✗ | - | - |
| `pop_id` | varchar(20) | ✗ | - | รหัส pop |
| `nameTpart` | varchar(255) | ✗ | - | - |
| `infmname` | varchar(255) | ✗ | - | - |
| `infmaddr` | varchar(255) | ✗ | - | - |
| `Mrtlst` | varchar(80) | ✗ | - | - |
| `ntnlty` | varchar(80) | ✗ | - | - |
| `occptn` | varchar(80) | ✗ | - | - |
| `pttype` | varchar(255) | ✗ | - | ประเภทสิทธิ |
| `rgtdate` | varchar(50) | ✗ | - | - |
| `rgttime` | varchar(5) | ✗ | - | - |
| `status` | varchar(1) | ✗ | - | สถานะ |

---

### Mrs_pttype

**คำอธิบาย:** -

**จำนวนแถว:** 34

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namepttype` | varchar(40) | ✗ | - | - |
| `rights` | varchar(20) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | IDX | ประเภทสิทธิ |
| `stdcode` | varchar(2) | ✗ | - | - |
| `pay` | decimal(4,2) | ✗ | - | การชำระ |
| `op56` | varchar(4) | ✗ | - | - |
| `nk` | varchar(2) | ✗ | - | - |

---

### Mrsc_Re_check

**คำอธิบาย:** -

**จำนวนแถว:** 67,224

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(5) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Inumber` | varchar(7) | ✓ | - | - |
| `Rnumber` | varchar(7) | ✓ | - | - |
| `An` | varchar(8) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `Hn` | varchar(10) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Pname` | varchar(60) | ✓ | - | คำนำหน้าชื่อ |
| `Fname` | varchar(20) | ✓ | - | ชื่อจริง |
| `Lname` | varchar(60) | ✓ | - | นามสกุล |
| `Sex` | varchar(20) | ✓ | - | - |
| `Age` | varchar(5) | ✓ | - | - |
| `Cid` | varchar(17) | ✓ | - | เลขบัตรประชาชน |
| `DateAdmit` | date | ✓ | - | - |
| `DateDC` | date | ✓ | - | - |
| `Los` | varchar(3) | ✓ | - | - |
| `DateIN` | date | ✓ | - | - |
| `Docter` | varchar(80) | ✓ | - | - |
| `Pl` | varchar(100) | ✓ | - | - |
| `Plt` | varchar(100) | ✓ | - | - |
| `Datecheck` | date | ✓ | - | - |
| `Pls` | varchar(100) | ✓ | - | - |
| `Plts` | varchar(100) | ✓ | - | - |

---

### PERSON

**คำอธิบาย:** ข้อมูลบุคคล

**จำนวนแถว:** 105,707

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pcucode` | varchar(255) | ✓ | - | - |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `pid` | int(11) | ✓ | - | - |
| `hid` | varchar(255) | ✓ | - | - |
| `prename` | varchar(255) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `lname` | varchar(255) | ✓ | - | นามสกุล |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `sex` | varchar(1) | ✓ | - | - |
| `birth` | varchar(255) | ✓ | - | - |
| `house` | varchar(255) | ✓ | - | - |
| `village` | varchar(255) | ✓ | - | - |
| `tambon` | varchar(255) | ✓ | - | - |
| `ampur` | varchar(255) | ✓ | - | - |
| `changwat` | varchar(255) | ✓ | - | - |
| `mstatus` | varchar(255) | ✓ | - | - |
| `occupa` | varchar(255) | ✓ | - | - |
| `race` | varchar(255) | ✓ | - | - |
| `nation` | varchar(255) | ✓ | - | - |
| `religion` | varchar(255) | ✓ | - | - |
| `educate` | varchar(255) | ✓ | - | - |
| `fstatus` | varchar(255) | ✓ | - | - |
| `father` | varchar(255) | ✓ | - | - |
| `mother` | varchar(255) | ✓ | - | - |
| `couple` | varchar(255) | ✓ | - | - |
| `movein` | varchar(255) | ✓ | - | - |
| `dischar` | varchar(255) | ✓ | - | - |
| `ddisch` | varchar(255) | ✓ | - | - |
| `bgroup` | varchar(255) | ✓ | - | - |
| `labor` | varchar(255) | ✓ | - | - |
| `vhid` | varchar(255) | ✓ | - | - |
| `typearea` | varchar(255) | ✓ | - | - |
| `d_update` | varchar(255) | ✓ | - | - |
| `hospcode` | varchar(255) | ✓ | - | - |
| `occupation_old` | varchar(255) | ✓ | - | - |
| `occupation_new` | varchar(255) | ✓ | - | - |
| `education` | varchar(255) | ✓ | - | - |
| `vstatus` | varchar(255) | ✓ | - | - |
| `discharge` | varchar(255) | ✓ | - | - |
| `ddischarge` | varchar(255) | ✓ | - | - |
| `abogroup` | varchar(255) | ✓ | - | - |
| `rhgroup` | varchar(255) | ✓ | - | - |
| `passport` | varchar(255) | ✓ | - | - |

---

### PERSONk

**คำอธิบาย:** ข้อมูลผู้ป่วย/บุคคล

**จำนวนแถว:** 686

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `PCUCODE` | varchar(255) | ✓ | - | - |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `PID` | varchar(255) | ✓ | - | - |
| `HID` | varchar(255) | ✓ | - | - |
| `PRENAME` | varchar(255) | ✓ | - | - |
| `NAME` | varchar(255) | ✓ | - | ชื่อ |
| `LNAME` | varchar(255) | ✓ | - | นามสกุล |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `SEX` | varchar(255) | ✓ | - | - |
| `BIRTH` | varchar(255) | ✓ | - | - |
| `HOUSE` | varchar(255) | ✓ | - | - |
| `VILLAGE` | varchar(255) | ✓ | - | - |
| `TAMBON` | varchar(255) | ✓ | - | - |
| `AMPUR` | varchar(255) | ✓ | - | - |
| `CHANGWAT` | varchar(255) | ✓ | - | - |
| `MSTATUS` | varchar(255) | ✓ | - | - |
| `OCCUPA` | varchar(255) | ✓ | - | - |
| `RACE` | varchar(255) | ✓ | - | - |
| `NATION` | varchar(255) | ✓ | - | - |
| `RELIGION` | varchar(255) | ✓ | - | - |
| `EDUCATE` | varchar(255) | ✓ | - | - |
| `FSTATUS` | varchar(255) | ✓ | - | - |
| `FATHER` | varchar(255) | ✓ | - | - |
| `MOTHER` | varchar(255) | ✓ | - | - |
| `COUPLE` | varchar(255) | ✓ | - | - |
| `MOVEIN` | varchar(255) | ✓ | - | - |
| `DISCHAR` | varchar(255) | ✓ | - | - |
| `DDISCH` | varchar(255) | ✓ | - | - |
| `BGROUP` | varchar(255) | ✓ | - | - |
| `LABOR` | varchar(255) | ✓ | - | - |
| `VHID` | varchar(255) | ✓ | - | - |
| `TYPEAREA` | varchar(255) | ✓ | - | - |
| `D_UPDATE` | varchar(255) | ✓ | - | - |

---

### PERSONm

**คำอธิบาย:** ข้อมูลผู้ป่วย/บุคคล

**จำนวนแถว:** 369

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `PCUCODE` | varchar(255) | ✓ | - | - |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `PID` | varchar(255) | ✓ | - | - |
| `HID` | varchar(255) | ✓ | - | - |
| `PRENAME` | varchar(255) | ✓ | - | - |
| `NAME` | varchar(255) | ✓ | - | ชื่อ |
| `LNAME` | varchar(255) | ✓ | - | นามสกุล |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `SEX` | varchar(255) | ✓ | - | - |
| `BIRTH` | varchar(255) | ✓ | - | - |
| `HOUSE` | varchar(255) | ✓ | - | - |
| `VILLAGE` | varchar(255) | ✓ | - | - |
| `TAMBON` | varchar(255) | ✓ | - | - |
| `AMPUR` | varchar(255) | ✓ | - | - |
| `CHANGWAT` | varchar(255) | ✓ | - | - |
| `MSTATUS` | varchar(255) | ✓ | - | - |
| `OCCUPA` | varchar(255) | ✓ | - | - |
| `RACE` | varchar(255) | ✓ | - | - |
| `NATION` | varchar(255) | ✓ | - | - |
| `RELIGION` | varchar(255) | ✓ | - | - |
| `EDUCATE` | varchar(255) | ✓ | - | - |
| `FSTATUS` | varchar(255) | ✓ | - | - |
| `FATHER` | varchar(255) | ✓ | - | - |
| `MOTHER` | varchar(255) | ✓ | - | - |
| `COUPLE` | varchar(255) | ✓ | - | - |
| `MOVEIN` | varchar(255) | ✓ | - | - |
| `DISCHAR` | varchar(255) | ✓ | - | - |
| `DDISCH` | varchar(255) | ✓ | - | - |
| `BGROUP` | varchar(255) | ✓ | - | - |
| `LABOR` | varchar(255) | ✓ | - | - |
| `VHID` | varchar(255) | ✓ | - | - |
| `TYPEAREA` | varchar(255) | ✓ | - | - |
| `D_UPDATE` | varchar(255) | ✓ | - | - |

---

### PTINFO

**คำอธิบาย:** -

**จำนวนแถว:** 171,129

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `firstname` | varchar(25) | ✓ | - | - |
| `lastname` | varchar(25) | ✓ | - | - |
| `dob` | date | ✗ | - | - |
| `deathdate` | date | ✗ | - | - |
| `male` | varchar(1) | ✗ | - | - |
| `age` | bigint(21) | ✓ | - | - |
| `cid` | varchar(13) | ✗ | - | เลขบัตรประชาชน |
| `hometel` | varchar(20) | ✗ | - | - |
| `offtel` | varchar(20) | ✗ | - | - |
| `address` | varchar(30) | ✗ | - | ที่อยู่ |
| `moo` | varchar(2) | ✗ | - | - |
| `namemooban` | text | ✓ | - | - |
| `subdistrict` | varchar(20) | ✓ | - | - |
| `district` | varchar(20) | ✓ | - | - |
| `province` | varchar(20) | ✓ | - | - |

---

### PTTY

**คำอธิบาย:** -

**จำนวนแถว:** 107

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vstdttm` | varchar(255) | ✓ | - | - |
| `labcode` | varchar(255) | ✓ | - | รหัสแล็บ |
| `reportby` | varchar(255) | ✓ | - | - |
| `requestby` | varchar(255) | ✓ | - | - |
| `fufinish` | varchar(255) | ✓ | - | - |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `senddate` | varchar(255) | ✓ | - | - |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `hn (1)` | varchar(255) | ✓ | - | - |
| `bw` | varchar(255) | ✓ | - | - |
| `height` | varchar(255) | ✓ | - | - |
| `bmi` | varchar(255) | ✓ | - | - |
| `tt` | varchar(255) | ✓ | - | - |
| `pr` | varchar(255) | ✓ | - | - |
| `rr` | varchar(255) | ✓ | - | - |
| `sbp` | varchar(255) | ✓ | - | - |
| `dbp` | varchar(255) | ✓ | - | - |
| `hn (2)` | varchar(255) | ✓ | - | - |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `lname` | varchar(255) | ✓ | - | นามสกุล |
| `allergy` | varchar(255) | ✓ | - | - |
| `addrpart` | varchar(255) | ✓ | - | ส่วนที่อยู่ |
| `moopart` | varchar(255) | ✓ | - | หมู่ |
| `tmbpart` | varchar(255) | ✓ | - | ตำบล |
| `amppart` | varchar(255) | ✓ | - | อำเภอ |
| `chwpart` | varchar(255) | ✓ | - | จังหวัด |
| `hometel` | varchar(255) | ✓ | - | - |
| `pttype (1)` | varchar(255) | ✓ | - | ผู้ป่วย type (1) |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |
| `hct` | varchar(255) | ✓ | - | - |
| `hbc` | varchar(255) | ✓ | - | - |
| `mcv` | varchar(255) | ✓ | - | - |
| `of` | varchar(255) | ✓ | - | - |
| `hba2` | varchar(255) | ✓ | - | - |
| `hba` | varchar(255) | ✓ | - | - |
| `hbe` | varchar(255) | ✓ | - | - |
| `hbf` | varchar(255) | ✓ | - | - |
| `hbh` | varchar(255) | ✓ | - | - |
| `hbcs` | varchar(255) | ✓ | - | - |
| `barts` | varchar(255) | ✓ | - | - |
| `hb` | varchar(255) | ✓ | - | - |
| `comment` | varchar(255) | ✓ | - | ความคิดเห็น |

---

### VR10949

**คำอธิบาย:** -

**จำนวนแถว:** 55,730

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `Cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `lname` | varchar(255) | ✓ | - | นามสกุล |
| `sex` | varchar(255) | ✓ | - | - |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `hcode` | varchar(255) | ✓ | - | - |

---

### aipn_patient_

**คำอธิบาย:** ข้อมูลผู้ป่วย/บุคคล

**จำนวนแถว:** 42

**Engine:** InnoDB

**Primary Key:** `AN`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `AN` | int(8) | ✗ | PK | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `IDTYPE` | int(1) | ✗ | - | - |
| `PIDPAT` | varchar(20) | ✗ | - | - |
| `TITLE` | varchar(15) | ✗ | - | - |
| `NAMEPAT` | varchar(51) | ✓ | - | - |
| `DOB` | date | ✗ | - | - |
| `SEX` | varchar(1) | ✗ | - | - |
| `MARRIAGE` | varchar(1) | ✗ | - | - |
| `CHANGWAT` | varchar(2) | ✗ | - | - |
| `AMPHUR` | varchar(2) | ✗ | - | - |
| `NATION` | varchar(3) | ✗ | - | - |
| `AdmType` | varchar(1) | ✓ | - | - |
| `AdmSource` | varchar(1) | ✓ | - | - |
| `DTAdm` | varchar(21) | ✓ | - | - |
| `DTDisch` | varchar(21) | ✓ | - | - |
| `LeaveDay` | int(1) | ✗ | - | - |
| `DischStat` | int(1) | ✗ | - | - |
| `DischType` | int(1) | ✗ | - | - |
| `AdmWt` | char(1) | ✗ | - | - |
| `DischWard` | varchar(2) | ✗ | - | - |
| `Dept` | varchar(2) | ✓ | - | แผนก |
| `hospmain` | varchar(5) | ✓ | - | - |
| `dchdate` | date | ✓ | - | วันที่จำหน่าย |
| `status_flg` | enum('A','C','D') | ✓ | - | - |

---

### bhtr

**คำอธิบาย:** -

**จำนวนแถว:** 9,522

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(11) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(11) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `chwpart` | varchar(2) | ✓ | - | จังหวัด |
| `amppart` | varchar(2) | ✓ | - | อำเภอ |
| `tmbpart` | varchar(2) | ✓ | - | ตำบล |
| `moopart` | varchar(2) | ✓ | - | หมู่ |
| `pttype` | varchar(2) | ✓ | - | ประเภทสิทธิ |
| `charge` | varchar(11) | ✓ | - | - |

---

### bhtri

**คำอธิบาย:** -

**จำนวนแถว:** 542

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(11) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `chwpart` | varchar(2) | ✓ | - | จังหวัด |
| `amppart` | varchar(2) | ✓ | - | อำเภอ |
| `tmbpart` | varchar(2) | ✓ | - | ตำบล |
| `moopart` | varchar(2) | ✓ | - | หมู่ |
| `pttype` | varchar(2) | ✓ | - | ประเภทสิทธิ |
| `charge` | varchar(11) | ✓ | - | - |
| `daycnt` | varchar(7) | ✓ | - | - |

---

### bhtro

**คำอธิบาย:** -

**จำนวนแถว:** 11,224

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(11) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(11) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `chwpart` | varchar(2) | ✓ | - | จังหวัด |
| `amppart` | varchar(2) | ✓ | - | อำเภอ |
| `tmbpart` | varchar(2) | ✓ | - | ตำบล |
| `moopart` | varchar(2) | ✓ | - | หมู่ |
| `pttype` | varchar(2) | ✓ | - | ประเภทสิทธิ |
| `charge` | varchar(11) | ✓ | - | - |
| `daycnt` | varchar(7) | ✓ | - | - |

---

### ccd_person

**คำอธิบาย:** ข้อมูลผู้ป่วย/บุคคล

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospcode` | varchar(5) | ✗ | - | - |
| `cid` | varchar(13) | ✗ | - | เลขบัตรประชาชน |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `provis_pname` | varchar(3) | ✓ | - | - |
| `fname` | varchar(25) | ✓ | - | ชื่อจริง |
| `lname` | varchar(25) | ✓ | - | นามสกุล |
| `birthdate` | date | ✗ | - | วันเกิด |
| `sex` | varchar(1) | ✗ | - | - |
| `nhso_marriage_code` | varchar(1) | ✗ | - | รหัส nhso_marriage |
| `nation_code` | varchar(3) | ✗ | - | รหัส nation |
| `citizenship` | varchar(3) | ✗ | - | - |
| `religion_code` | varchar(1) | ✗ | - | รหัส religion |
| `address` | varchar(30) | ✗ | - | ที่อยู่ |
| `moo` | varchar(2) | ✗ | - | - |
| `soi` | char(0) | ✗ | - | - |
| `street` | char(0) | ✗ | - | - |
| `subdistrict_code` | varchar(2) | ✗ | - | รหัส subdistrict |
| `district_code` | varchar(2) | ✗ | - | รหัส district |
| `address_id` | varchar(6) | ✓ | - | รหัส address |
| `zip` | char(0) | ✗ | - | - |
| `telephone` | varchar(20) | ✗ | - | - |
| `mobile` | char(0) | ✗ | - | มือถือ |
| `informname` | varchar(30) | ✗ | - | - |
| `informtel` | varchar(20) | ✗ | - | - |
| `drugallergy` | varchar(60) | ✗ | - | - |
| `passport_no` | varchar(20) | ✗ | - | เลขหนังสือเดินทาง |

---

### child

**คำอธิบาย:** -

**จำนวนแถว:** 5,487

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `lrno` | int(8) | ✗ | IDX | - |
| `birthno` | int(1) | ✓ | - | - |
| `brthdate` | date | ✗ | - | - |
| `brthtime` | int(4) | ✗ | - | - |
| `brthwt` | int(4) | ✗ | - | - |
| `alive` | varchar(1) | ✗ | - | - |
| `apgar1` | int(2) | ✗ | - | - |
| `apgar5` | int(2) | ✗ | - | - |
| `icd9cm` | varchar(7) | ✗ | - | รหัสหัตถการ ICD-9-CM |
| `male` | varchar(1) | ✗ | - | - |
| `rcode` | int(4) | ✗ | - | - |
| `hosid` | varchar(5) | ✗ | - | - |
| `lrefno` | int(4) | ✗ | - | - |
| `frefno` | int(8) | ✗ | - | - |
| `title` | varchar(3) | ✗ | - | - |
| `fname` | varchar(30) | ✗ | - | ชื่อจริง |
| `mname` | varchar(30) | ✗ | - | - |
| `lname` | varchar(30) | ✗ | - | นามสกุล |
| `pid` | varchar(13) | ✗ | - | - |
| `nat` | varchar(2) | ✗ | - | - |
| `tdob` | int(8) | ✗ | - | - |
| `height` | int(2) | ✗ | - | - |
| `head` | varchar(2) | ✗ | - | - |
| `body` | varchar(2) | ✗ | - | - |
| `year` | varchar(2) | ✗ | - | - |
| `month` | varchar(2) | ✗ | - | - |
| `day` | varchar(2) | ✗ | - | - |
| `spdate` | varchar(1) | ✗ | - | - |
| `spdate1` | varchar(2) | ✗ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `brithno` | varchar(1) | ✓ | - | - |

---

### chksitdrfee

**คำอธิบาย:** -

**จำนวนแถว:** 26,383

**Engine:** MyISAM

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |

---

### cid_namyuen

**คำอธิบาย:** -

**จำนวนแถว:** 208

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |
| `fullname` | varchar(255) | ✓ | - | - |

---

### cidhn

**คำอธิบาย:** -

**จำนวนแถว:** 2,478

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |
| `cpop` | varchar(255) | ✓ | - | - |

---

### ckd

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `visit_date` | varchar(10) | ✓ | - | วันที่ visit |
| `visit_time` | varchar(13) | ✓ | - | เวลา visit |
| `dx_date` | varchar(10) | ✓ | - | วันที่ dx |
| `dx_time` | varchar(13) | ✓ | - | เวลา dx |
| `PID` | int(8) | ✗ | - | - |
| `CID` | varchar(13) | ✗ | - | เลขบัตรประชาชน |
| `ptname` | varchar(51) | ✓ | - | ผู้ป่วย name |
| `sex` | varchar(4) | ✗ | - | - |
| `age` | bigint(21) | ✓ | - | - |
| `tel` | varchar(20) | ✗ | - | โทรศัพท์ |
| `address` | varchar(75) | ✓ | - | ที่อยู่ |
| `diag` | varchar(7) | ✓ | - | การวินิจฉัย |
| `diag_name` | varchar(90) | ✓ | - | ชื่อ diag |
| `dchtype` | varchar(15) | ✓ | - | - |
| `last_visit` | varchar(71) | ✓ | - | - |

---

### covidjully

**คำอธิบาย:** -

**จำนวนแถว:** 17,043

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `runnumber` | int(11) | ✓ | - | - |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |
| `hometel` | varchar(13) | ✓ | - | - |
| `appointment_date` | date | ✓ | - | วันที่ appointment |
| `namechw` | varchar(255) | ✓ | - | - |
| `nameampur` | varchar(255) | ✓ | - | - |
| `nametumb` | varchar(255) | ✓ | - | - |
| `namemoob` | varchar(255) | ✓ | - | - |
| `vaccine` | varchar(255) | ✓ | - | - |
| `status` | varchar(255) | ✓ | - | สถานะ |
| `newhi` | varchar(255) | ✓ | - | - |
| `appointment_confirm_type_name` | varchar(255) | ✓ | - | ชื่อ appointment_confirm_type |
| `staff_name` | varchar(255) | ✓ | - | ชื่อ staff |
| `person_type_name` | varchar(255) | ✓ | - | ชื่อ person_type |
| `person_risk_type_name` | varchar(255) | ✓ | - | ชื่อ person_risk_type |
| `person_age_year` | int(5) | ✓ | - | - |
| `birthdate` | date | ✓ | - | วันเกิด |
| `blood` | varchar(255) | ✓ | - | - |
| `high` | int(5) | ✓ | - | - |
| `actor` | varchar(255) | ✓ | - | - |
| `nationality1` | varchar(255) | ✓ | - | - |
| `nationality2` | varchar(255) | ✓ | - | - |
| `religion` | varchar(255) | ✓ | - | - |
| `statusmarried` | varchar(255) | ✓ | - | - |
| `father` | varchar(255) | ✓ | - | - |
| `mather` | varchar(255) | ✓ | - | - |
| `followman` | varchar(255) | ✓ | - | - |
| `typefollowman` | varchar(255) | ✓ | - | - |
| `addressfollowman` | varchar(255) | ✓ | - | - |
| `telfollowman` | int(10) | ✓ | - | - |
| `dateappointny` | date | ✓ | - | - |
| `rangetime` | varchar(255) | ✓ | - | - |
| `datesurvey` | datetime | ✓ | - | - |
| `mamaima` | varchar(255) | ✓ | - | - |
| `usercreate` | varchar(255) | ✓ | - | - |
| `nametodtan` | varchar(255) | ✓ | - | - |
| `cidtodtan` | varchar(13) | ✓ | - | - |
| `phonetodtan` | varchar(13) | ✓ | - | - |
| `person_type_nametodtan` | varchar(255) | ✓ | - | - |
| `typeviptodtan` | varchar(255) | ✓ | - | - |
| `nameold` | varchar(255) | ✓ | - | - |
| `cidold` | varchar(13) | ✓ | - | - |
| `phoneold` | varchar(13) | ✓ | - | - |
| `typevip` | varchar(255) | ✓ | - | - |
| `person_type_nameold` | varchar(255) | ✓ | - | - |
| `typevipold` | varchar(255) | ✓ | - | - |
| `dose` | varchar(255) | ✓ | - | ขนาดยา |

---

### datahn

**คำอธิบาย:** -

**จำนวนแถว:** 270

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |

---

### datapit

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HCODE` | varchar(5) | ✓ | - | - |
| `HREG` | varchar(5) | ✓ | - | - |
| `HNR` | varchar(9) | ✓ | - | - |
| `ST` | varchar(2) | ✓ | - | - |
| `RTYPE` | varchar(4) | ✓ | - | - |
| `RTYPEFK` | varchar(9) | ✓ | - | - |
| `HN` | varchar(9) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `PID` | varchar(13) | ✓ | - | - |
| `IDTYPE` | varchar(1) | ✓ | - | - |
| `MEMBERNO` | varchar(10) | ✓ | - | - |
| `KUMNUM` | varchar(10) | ✓ | - | - |
| `NAME` | varchar(40) | ✓ | - | ชื่อ |
| `DOB` | date | ✓ | - | - |
| `CONTACT` | varchar(9) | ✓ | - | - |
| `SEX` | varchar(1) | ✓ | - | - |
| `MARRIAGE` | varchar(1) | ✓ | - | - |
| `CHANGWAT` | varchar(2) | ✓ | - | - |
| `AMPHUR` | varchar(2) | ✓ | - | - |
| `OCCUPATION` | varchar(3) | ✓ | - | - |
| `NATION` | varchar(2) | ✓ | - | - |
| `ORGCODE` | varchar(5) | ✓ | - | - |
| `ORGPROV` | varchar(2) | ✓ | - | - |
| `AUTHNO` | varchar(15) | ✓ | - | - |
| `AUTHDATE` | date | ✓ | - | - |
| `BENFTYPE` | varchar(1) | ✓ | - | - |
| `CSPID` | varchar(13) | ✓ | - | - |
| `CSSALUTE` | varchar(10) | ✓ | - | - |
| `CSNAME` | varchar(40) | ✓ | - | - |
| `CSREL` | varchar(1) | ✓ | - | - |
| `DRDX` | varchar(5) | ✓ | - | - |
| `DX` | varchar(16) | ✓ | - | - |
| `DXDATE` | date | ✓ | - | - |
| `DXOTHER` | varchar(32) | ✓ | - | - |
| `SPOP` | varchar(9) | ✓ | - | - |
| `REGTYPE` | varchar(1) | ✓ | - | - |
| `REGDATETIM` | longtext | ✓ | - | - |
| `MULTIPLE` | varchar(1) | ✓ | - | - |
| `LASTUPD` | longtext | ✓ | - | - |
| `DATEEFF` | date | ✓ | - | - |
| `DATEEXP` | date | ✓ | - | - |
| `FLAG` | varchar(2) | ✓ | - | - |
| `STAT` | varchar(1) | ✓ | - | - |
| `USGFLAG` | varchar(1) | ✓ | - | - |
| `VER` | varchar(3) | ✓ | - | - |
| `EDMARK` | varchar(1) | ✓ | - | - |
| `REPMARK` | varchar(1) | ✓ | - | - |
| `HISTREC` | int(11) | ✓ | - | - |
| `TMPMARK` | varchar(1) | ✓ | - | - |
| `AGENTS` | varchar(64) | ✓ | - | - |
| `GOV` | varchar(1) | ✓ | - | - |
| `CHK` | varchar(15) | ✓ | - | - |

---

### dct

**คำอธิบาย:** -

**จำนวนแถว:** 383

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `dct` | varchar(5) | ✗ | IDX | - |
| `pname` | varchar(100) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(255) | ✗ | - | ชื่อจริง |
| `lname` | varchar(255) | ✗ | - | นามสกุล |
| `dspname` | varchar(50) | ✗ | - | - |
| `lcno` | varchar(5) | ✗ | - | - |
| `psswrd` | varchar(20) | ✗ | - | - |
| `specialty` | varchar(3) | ✓ | - | - |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |
| `registerno` | varchar(15) | ✗ | - | - |
| `council` | varchar(2) | ✗ | - | - |
| `sex` | varchar(1) | ✗ | - | - |
| `birth` | date | ✗ | - | - |
| `startdate` | date | ✓ | - | - |
| `outdate` | date | ✓ | - | - |
| `providertype` | varchar(5) | ✗ | - | - |
| `movefrom` | varchar(5) | ✗ | - | - |
| `moveto` | varchar(5) | ✗ | - | - |
| `statusdct` | varchar(1) | ✗ | - | - |
| `ldate` | date | ✓ | - | - |
| `roomor` | varchar(1) | ✗ | - | - |
| `admtype` | varchar(1) | ✓ | - | - |
| `print_flg` | enum('Y','N') | ✓ | - | - |
| `line_id` | varchar(20) | ✗ | - | รหัส line |
| `tel` | varchar(50) | ✓ | - | โทรศัพท์ |
| `pssadm` | varchar(8) | ✓ | - | - |
| `chkptlog` | varchar(1) | ✗ | - | - |
| `userxry` | varchar(40) | ✓ | - | - |
| `passxry` | varchar(40) | ✓ | - | - |
| `xread` | varchar(1) | ✓ | - | - |
| `passother` | varchar(50) | ✓ | - | - |
| `is_staff` | varchar(1) | ✓ | - | เป็นstaff หรือไม่ |
| `hash_cid` | text | ✓ | - | - |

---

### deaDMn

**คำอธิบาย:** -

**จำนวนแถว:** 493,488

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `ddisch` | date | ✓ | - | - |
| `ddis` | date | ✓ | - | - |

---

### dengue

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `visit_date` | varchar(10) | ✓ | - | วันที่ visit |
| `visit_time` | varchar(13) | ✓ | - | เวลา visit |
| `dx_date` | varchar(10) | ✓ | - | วันที่ dx |
| `dx_time` | varchar(13) | ✓ | - | เวลา dx |
| `PID` | int(8) | ✗ | - | - |
| `CID` | varchar(13) | ✗ | - | เลขบัตรประชาชน |
| `ptname` | varchar(51) | ✓ | - | ผู้ป่วย name |
| `sex` | varchar(4) | ✗ | - | - |
| `age` | bigint(21) | ✓ | - | - |
| `tel` | varchar(20) | ✗ | - | โทรศัพท์ |
| `address` | varchar(75) | ✓ | - | ที่อยู่ |
| `diag` | varchar(7) | ✓ | - | การวินิจฉัย |
| `diag_name` | varchar(90) | ✓ | - | ชื่อ diag |
| `dchtype` | varchar(15) | ✓ | - | - |
| `last_visit` | varchar(71) | ✓ | - | - |

---

### dengue_ny

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `visit_date` | varchar(10) | ✓ | - | วันที่ visit |
| `visit_time` | varchar(13) | ✓ | - | เวลา visit |
| `dx_date` | varchar(10) | ✓ | - | วันที่ dx |
| `dx_time` | varchar(13) | ✓ | - | เวลา dx |
| `PID` | int(8) | ✗ | - | - |
| `CID` | varchar(13) | ✗ | - | เลขบัตรประชาชน |
| `ptname` | varchar(51) | ✓ | - | ผู้ป่วย name |
| `sex` | varchar(4) | ✗ | - | - |
| `age` | bigint(21) | ✓ | - | - |
| `tel` | varchar(20) | ✗ | - | โทรศัพท์ |
| `address` | varchar(75) | ✓ | - | ที่อยู่ |
| `diag` | varchar(7) | ✓ | - | การวินิจฉัย |
| `diag_name` | varchar(90) | ✓ | - | ชื่อ diag |
| `dchtype` | varchar(15) | ✓ | - | - |
| `last_visit` | varchar(71) | ✓ | - | - |

---

### dept_code

**คำอธิบาย:** -

**จำนวนแถว:** 41

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `op_code` | varchar(50) | ✓ | - | รหัส op |
| `ip_code` | varchar(50) | ✓ | - | รหัส ip |
| `dept_name` | varchar(255) | ✓ | - | ชื่อ dept |

---

### dr

**คำอธิบาย:** -

**จำนวนแถว:** 87,369

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(16) | ✗ | PK | รหัสประจำ (Primary Key) |
| `HOSP_MAIN` | varchar(5) | ✓ | - | - |
| `HOSPITAL` | varchar(30) | ✓ | - | - |
| `HN` | int(11) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `CID` | varchar(13) | ✓ | IDX | เลขบัตรประชาชน |
| `VSTDATE` | date | ✓ | - | วันที่มารับบริการ |
| `PNAME` | varchar(10) | ✓ | - | คำนำหน้าชื่อ |
| `FNAME` | varchar(30) | ✓ | - | ชื่อจริง |
| `LNAME` | varchar(30) | ✓ | - | นามสกุล |
| `ADDR` | varchar(30) | ✓ | - | ที่อยู่ |
| `MOOPART` | varchar(8) | ✓ | - | หมู่ |
| `MOOBAN` | varchar(30) | ✓ | - | - |
| `TUMBON` | varchar(30) | ✓ | - | - |
| `AMPUR` | varchar(30) | ✓ | - | - |
| `CHANGWAT` | varchar(30) | ✓ | - | - |
| `SEX` | varchar(1) | ✓ | - | - |
| `AGE` | int(11) | ✓ | - | - |
| `RT_VA` | varchar(10) | ✓ | - | - |
| `LT_VA` | varchar(10) | ✓ | - | - |
| `RT_DR` | varchar(15) | ✓ | - | - |
| `LT_DR` | varchar(15) | ✓ | - | - |
| `RT_DE` | int(11) | ✓ | - | - |
| `LT_DE` | int(11) | ✓ | - | - |
| `RX` | varchar(15) | ✓ | - | ใบสั่งยา  |
| `DMYR` | int(11) | ✓ | - | - |
| `RX_ORAL` | int(11) | ✓ | - | ใบสั่งยา _oral |
| `RX_INJ` | int(11) | ✓ | - | ใบสั่งยา _inj |
| `RT_VA_NO` | int(11) | ✓ | - | เลขที่ rt_va |
| `LT_VA_NO` | int(11) | ✓ | - | เลขที่ lt_va |
| `RT_DR_NO` | int(11) | ✓ | - | เลขที่ rt_dr |
| `LT_DR_NO` | int(11) | ✓ | - | เลขที่ lt_dr |
| `RX_NO` | int(11) | ✓ | - | เลขที่ rx |

---

### drptype

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 13

**Engine:** InnoDB

**Primary Key:** `drptype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `drptype` | varchar(2) | ✗ | PK | - |
| `namedrpt` | varchar(40) | ✗ | - | - |

---

### dt

**คำอธิบาย:** -

**จำนวนแถว:** 216,663

**Engine:** InnoDB

**Primary Key:** `dn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `dn` | int(11) | ✗ | PK | - |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdttm` | datetime | ✗ | IDX | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `dnt` | varchar(5) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `grp` | varchar(2) | ✗ | - | - |
| `schl` | varchar(4) | ✗ | - | - |
| `rcptno` | int(8) | ✗ | - | - |
| `srvdttm` | datetime | ✓ | - | - |
| `consultid` | int(15) | ✗ | - | - |

---

### epi

**คำอธิบาย:** -

**จำนวนแถว:** 92,767

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `drxtime` | int(4) | ✗ | IDX | - |
| `dct` | varchar(5) | ✓ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `new` | int(1) | ✗ | - | - |
| `addr` | varchar(2) | ✗ | - | ที่อยู่ |
| `yr` | int(2) | ✗ | - | - |
| `mn` | int(2) | ✗ | - | - |
| `age_d` | int(4) | ✗ | - | - |
| `bw` | int(4) | ✗ | - | - |
| `lng` | int(3) | ✗ | - | - |
| `vac` | varchar(5) | ✗ | - | - |
| `dev` | varchar(60) | ✗ | - | - |
| `l2hfa` | tinyint(1) | ✗ | - | - |
| `rcptno` | int(8) | ✗ | - | - |
| `lotno` | varchar(20) | ✗ | - | - |
| `datevac` | date | ✗ | - | - |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `serial_no` | varchar(20) | ✓ | - | เลขที่ serial |
| `visit_uuid` | varchar(36) | ✓ | - | - |
| `vc_s` | varchar(40) | ✓ | - | - |
| `ex_date` | date | ✓ | - | วันที่ ex |
| `bottleno` | varchar(4) | ✓ | - | - |
| `doseid` | varchar(3) | ✓ | - | - |

---

### export_person

**คำอธิบาย:** ข้อมูลผู้ป่วย/บุคคล

**จำนวนแถว:** 45,310

**Engine:** InnoDB

**Primary Key:** `pid`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pcucode` | varchar(5) | ✓ | - | - |
| `pid` | int(8) | ✗ | PK | - |
| `exp_start` | date | ✓ | - | - |
| `exp_end` | date | ✓ | - | - |
| `exp_date` | date | ✓ | - | วันที่ exp |

---

### field_descriptions

**คำอธิบาย:** -

**จำนวนแถว:** 7,448

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `table_name` | varchar(255) | ✗ | IDX | ชื่อ table |
| `column_name` | varchar(255) | ✗ | - | ชื่อ column |
| `description` | text | ✓ | - | คำอธิบาย |
| `description_en` | text | ✓ | - | - |
| `updated_at` | timestamp | ✓ | - | วันที่ปรับปรุง |
| `updated_by` | varchar(100) | ✓ | - | - |

---

### fp

**คำอธิบาย:** -

**จำนวนแถว:** 10,011

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `drxtime` | int(4) | ✗ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `new` | int(1) | ✗ | - | - |
| `addr` | varchar(2) | ✗ | - | ที่อยู่ |
| `g` | int(2) | ✗ | - | - |
| `p` | int(2) | ✗ | - | - |
| `a` | int(2) | ✗ | - | - |
| `l` | int(2) | ✗ | - | - |
| `last` | varchar(8) | ✗ | - | - |
| `lmp` | varchar(8) | ✗ | - | - |
| `urine` | int(1) | ✗ | - | - |
| `bw` | decimal(5,1) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `ofp` | varchar(4) | ✗ | - | - |
| `fp` | varchar(4) | ✗ | - | - |
| `miub` | varchar(30) | ✗ | - | - |
| `vgn` | varchar(30) | ✗ | - | - |
| `cvx` | varchar(30) | ✗ | - | - |
| `utr` | varchar(30) | ✗ | - | - |
| `adn` | varchar(30) | ✗ | - | - |
| `cul` | varchar(30) | ✗ | - | - |
| `oth` | varchar(30) | ✗ | - | - |
| `l2hfa` | tinyint(1) | ✗ | - | - |
| `rcptno` | int(8) | ✗ | - | - |
| `othnote` | varchar(40) | ✗ | - | - |
| `p2` | varchar(2) | ✗ | - | - |
| `lmpfp` | date | ✗ | - | - |

---

### hi7_claim_l_pttype

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `nscl` | varchar(5) | ✓ | - | - |
| `namepttype` | varchar(100) | ✓ | - | - |

---

### hi7_screen

**คำอธิบาย:** -

**จำนวนแถว:** 69,489

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | varchar(10) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `fullname` | varchar(255) | ✓ | - | - |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |
| `cln` | varchar(255) | ✓ | - | - |
| `screen` | text | ✓ | - | - |
| `vitalsign_id` | int(11) | ✓ | IDX | รหัส vitalsign |
| `triage_id` | int(11) | ✓ | - | รหัส triage |
| `priority_id` | int(11) | ✓ | - | รหัส priority |
| `usercreate` | varchar(255) | ✓ | - | - |
| `stations` | varchar(1) | ✓ | - | - |
| `date_create` | datetime | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |

---

### hnble

**คำอธิบาย:** -

**จำนวนแถว:** 2,491

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(255) | ✓ | - | คำนำหน้าชื่อ |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `lname` | varchar(255) | ✓ | - | นามสกุล |
| `brthdate` | varchar(255) | ✓ | - | - |
| `truebrth` | varchar(255) | ✓ | - | - |
| `dthdate` | varchar(255) | ✓ | - | - |
| `male` | varchar(255) | ✓ | - | - |
| `ctzshp` | varchar(255) | ✓ | - | - |
| `ntnlty` | varchar(255) | ✓ | - | - |
| `rlgn` | varchar(255) | ✓ | - | - |
| `occptn` | varchar(255) | ✓ | - | - |
| `bloodgrp` | varchar(255) | ✓ | - | - |
| `allergy` | varchar(255) | ✓ | - | - |
| `addrpart` | varchar(255) | ✓ | - | ส่วนที่อยู่ |
| `moopart` | varchar(255) | ✓ | - | หมู่ |
| `tmbpart` | varchar(255) | ✓ | - | ตำบล |
| `amppart` | varchar(255) | ✓ | - | อำเภอ |
| `chwpart` | varchar(255) | ✓ | - | จังหวัด |
| `hometel` | varchar(255) | ✓ | - | - |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `mrtlst` | varchar(255) | ✓ | - | - |
| `spsname` | varchar(255) | ✓ | - | - |
| `mthname` | varchar(255) | ✓ | - | - |
| `fthname` | varchar(255) | ✓ | - | - |
| `offaddr` | varchar(255) | ✓ | - | - |
| `offtel` | varchar(255) | ✓ | - | - |
| `infmname` | varchar(255) | ✓ | - | - |
| `prsnrlt` | varchar(255) | ✓ | - | - |
| `infmaddr` | varchar(255) | ✓ | - | - |
| `infmtel` | varchar(255) | ✓ | - | - |
| `opdlct` | varchar(255) | ✓ | - | - |
| `fdate` | varchar(255) | ✓ | - | - |
| `ldate` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |
| `height` | varchar(255) | ✓ | - | - |
| `register` | varchar(255) | ✓ | - | - |
| `pathimage` | varchar(255) | ✓ | - | - |
| `typearea` | varchar(255) | ✓ | - | - |

---

### hndb

**คำอธิบาย:** -

**จำนวนแถว:** 3,075

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `Cnt` | varchar(255) | ✓ | - | - |

---

### hnjoj

**คำอธิบาย:** -

**จำนวนแถว:** 5,101

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | varchar(8) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `name` | varchar(500) | ✓ | - | ชื่อ |
| `datec` | date | ✓ | - | - |
| `cln` | varchar(200) | ✓ | - | - |

---

### hnptcut

**คำอธิบาย:** -

**จำนวนแถว:** 2,479

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |
| `min(ldate)` | varchar(255) | ✓ | - | - |

---

### hntarget

**คำอธิบาย:** -

**จำนวนแถว:** 36

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `oldhn` | int(8) | ✗ | - | - |
| `newhn` | int(8) | ✗ | - | - |

---

### hpt

**คำอธิบาย:** -

**จำนวนแถว:** 57

**Engine:** MyISAM

**Primary Key:** `codehpt`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codehpt` | varchar(5) | ✗ | PK | - |
| `namehpt` | varchar(20) | ✗ | IDX | - |
| `pricehpt` | int(5) | ✗ | - | - |
| `stdname` | varchar(40) | ✓ | - | - |
| `comname` | varchar(40) | ✓ | - | - |
| `icd10` | varchar(7) | ✓ | - | รหัสโรค ICD-10 |
| `vac` | varchar(5) | ✗ | - | - |
| `fptype` | varchar(1) | ✗ | - | - |
| `lot` | varchar(20) | ✓ | - | - |
| `serial_no` | varchar(20) | ✓ | - | เลขที่ serial |
| `ex_date` | date | ✗ | - | วันที่ ex |
| `fixdayfu` | varchar(3) | ✓ | - | - |
| `report` | int(2) | ✓ | - | - |
| `vaccine_route` | varchar(50) | ✓ | - | - |
| `vaccine_fullname` | varchar(100) | ✓ | - | - |

---

### incoth

**คำอธิบาย:** -

**จำนวนแถว:** 11,694,065

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `date` | date | ✗ | IDX | วันที่ |
| `time` | int(4) | ✗ | IDX | เวลา |
| `income` | varchar(2) | ✗ | IDX | รายได้ |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `paidst` | varchar(1) | ✗ | - | - |
| `rcptno` | int(11) | ✗ | - | - |
| `rcptamt` | decimal(9,2) | ✗ | - | - |
| `recno` | int(8) | ✗ | - | - |
| `cgd` | varchar(5) | ✗ | - | - |
| `codecheck` | varchar(11) | ✗ | IDX | - |
| `ln` | int(11) | ✗ | - | - |

---

### inspt

**คำอธิบาย:** -

**จำนวนแถว:** 66,646

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `govcode` | varchar(6) | ✗ | - | - |
| `govname` | varchar(255) | ✗ | - | - |
| `permitno` | varchar(30) | ✗ | - | - |
| `docno` | varchar(30) | ✗ | - | - |
| `aetype` | varchar(1) | ✗ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `trace` | varchar(6) | ✓ | - | - |

---

### ipt

**คำอธิบาย:** การรับเข้าผู้ป่วยใน

**จำนวนแถว:** 162,881

**Engine:** InnoDB

**Primary Key:** `an`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | PK | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `ward` | varchar(2) | ✗ | - | หอผู้ป่วยใน |
| `rgtdate` | date | ✗ | - | - |
| `rgttime` | int(4) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `prediag` | varchar(7) | ✗ | - | - |
| `dchdate` | date | ✗ | - | วันที่จำหน่าย |
| `daycnt` | int(4) | ✗ | - | - |
| `dchtime` | int(4) | ✗ | - | เวลาที่จำหน่าย |
| `dchstts` | int(1) | ✗ | - | - |
| `dchtype` | int(1) | ✗ | - | - |
| `dthdiagdct` | varchar(5) | ✗ | - | - |
| `ipdlct` | varchar(5) | ✗ | - | - |
| `bmi` | decimal(5,1) | ✗ | - | - |
| `bw` | decimal(5,1) | ✗ | - | - |
| `height` | decimal(5,1) | ✗ | - | - |
| `tt` | int(3) | ✗ | - | - |
| `rr` | int(3) | ✗ | - | - |
| `pr` | int(3) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `ipttype` | varchar(2) | ✗ | - | - |
| `painscore` | int(2) | ✗ | - | - |
| `symptmi` | varchar(200) | ✗ | - | - |
| `drg` | varchar(5) | ✓ | - | - |
| `rw` | double(10,4) | ✓ | - | - |
| `adjrw` | double(10,4) | ✓ | - | - |
| `error` | varchar(2) | ✓ | - | - |
| `warning` | varchar(4) | ✓ | - | - |
| `actlos` | int(4) | ✓ | - | - |
| `grouper_version` | varchar(20) | ✓ | - | - |
| `wtlos` | decimal(10,4) | ✓ | - | - |
| `ot` | int(4) | ✓ | - | - |
| `dept` | varchar(2) | ✓ | - | แผนก |
| `owner_case` | varchar(100) | ✓ | - | - |

---

### ipt-08-09-2566

**คำอธิบาย:** การรับเข้าผู้ป่วยใน (ที่เกี่ยวข้อง)

**จำนวนแถว:** 150,838

**Engine:** InnoDB

**Primary Key:** `an`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | PK | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `ward` | varchar(2) | ✗ | - | หอผู้ป่วยใน |
| `rgtdate` | date | ✗ | - | - |
| `rgttime` | int(4) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `prediag` | varchar(7) | ✗ | - | - |
| `dchdate` | date | ✗ | - | วันที่จำหน่าย |
| `daycnt` | int(4) | ✗ | - | - |
| `dchtime` | int(4) | ✗ | - | เวลาที่จำหน่าย |
| `dchstts` | int(1) | ✗ | - | - |
| `dchtype` | int(1) | ✗ | - | - |
| `dthdiagdct` | varchar(5) | ✗ | - | - |
| `ipdlct` | varchar(5) | ✗ | - | - |
| `bmi` | decimal(5,1) | ✗ | - | - |
| `bw` | decimal(5,1) | ✗ | - | - |
| `height` | decimal(5,1) | ✗ | - | - |
| `tt` | int(3) | ✗ | - | - |
| `rr` | int(3) | ✗ | - | - |
| `pr` | int(3) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `ipttype` | varchar(2) | ✗ | - | - |
| `painscore` | int(2) | ✗ | - | - |
| `symptmi` | varchar(200) | ✗ | - | - |
| `drg` | varchar(5) | ✓ | - | - |
| `rw` | double(10,4) | ✓ | - | - |
| `adjrw` | double(10,4) | ✓ | - | - |
| `error` | varchar(2) | ✓ | - | - |
| `warning` | varchar(4) | ✓ | - | - |
| `actlos` | int(4) | ✓ | - | - |
| `grouper_version` | varchar(20) | ✓ | - | - |
| `status_rw` | varchar(1) | ✓ | - | - |
| `date_report_rw` | date | ✓ | - | - |
| `dept` | varchar(2) | ✓ | - | แผนก |

---

### ipttype

**คำอธิบาย:** การรับเข้าผู้ป่วยใน (ที่เกี่ยวข้อง)

**จำนวนแถว:** 10

**Engine:** MyISAM

**Primary Key:** `ipttype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ipttype` | varchar(2) | ✗ | PK | - |
| `nameiptt` | varchar(20) | ✗ | - | - |

---

### isitb

**คำอธิบาย:** -

**จำนวนแถว:** 472

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(11) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(11) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `chwpart` | varchar(2) | ✓ | - | จังหวัด |
| `amppart` | varchar(2) | ✓ | - | อำเภอ |
| `tmbpart` | varchar(2) | ✓ | - | ตำบล |
| `moopart` | varchar(2) | ✓ | - | หมู่ |
| `pttype` | varchar(2) | ✓ | - | ประเภทสิทธิ |
| `daycnt` | varchar(7) | ✓ | - | - |

---

### kios_pttype

**คำอธิบาย:** -

**จำนวนแถว:** 91,620

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `cid` | varchar(13) | ✓ | IDX | เลขบัตรประชาชน |
| `json_data` | text | ✓ | - | - |
| `claimCode` | varchar(50) | ✓ | - | - |
| `claimType` | varchar(50) | ✓ | - | - |
| `cln` | varchar(100) | ✓ | - | - |
| `regist_date` | date | ✓ | - | วันที่ regist |
| `regist_time` | time | ✓ | - | เวลา regist |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `mainInscl_nhso` | varchar(20) | ✓ | - | - |
| `subInscl_nhso` | varchar(20) | ✓ | - | - |
| `hospmain_nhso` | varchar(20) | ✓ | - | - |
| `hospsub_nhso` | varchar(20) | ✓ | - | - |

---

### l_aptype

**คำอธิบาย:** -

**จำนวนแถว:** 136

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `APTYPE_CODE` | varchar(3) | ✓ | - | รหัส aptype |
| `APTYPE_DESC_E` | varchar(100) | ✓ | - | - |
| `APTYPE_DESC_T` | varchar(100) | ✓ | - | - |
| `STATUS` | varchar(1) | ✓ | - | สถานะ |
| `USE_ICD` | varchar(1) | ✓ | - | - |

---

### l_aptype_icd

**คำอธิบาย:** ข้อมูลการวินิจฉัย

**จำนวนแถว:** 195

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `APTYPE` | varchar(3) | ✓ | IDX | - |
| `ICD` | varchar(10) | ✓ | IDX | - |
| `STATUS` | varchar(1) | ✓ | - | สถานะ |

---

### l_ptt

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `HN` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `รหัสอุปกรณ์` | int(1) | ✗ | - | - |
| `อุปกรณ์` | int(1) | ✗ | - | - |

---

### l_rcpt

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `amnt` | int(1) | ✗ | - | - |
| `credit` | int(1) | ✗ | - | - |

---

### l_typedischncd

**คำอธิบาย:** -

**จำนวนแถว:** 10

**Engine:** InnoDB

**Primary Key:** `typedisch`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `typedisch` | varchar(2) | ✗ | PK | - |
| `nametypedisch` | varchar(40) | ✗ | - | - |

---

### l_viptype

**คำอธิบาย:** -

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `viptype` | varchar(2) | ✗ | - | - |
| `namevip` | varchar(100) | ✗ | - | - |

---

### lbbk_25-11-2565

**คำอธิบาย:** -

**จำนวนแถว:** 1,357,072

**Engine:** InnoDB

**Primary Key:** `ln`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ln` | int(11) | ✗ | PK | - |
| `lfudate` | date | ✗ | - | - |
| `labcode` | varchar(3) | ✗ | IDX | รหัสแล็บ |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `reportby` | varchar(100) | ✓ | - | - |
| `requestby` | varchar(100) | ✓ | - | - |
| `fufinish` | tinyint(1) | ✗ | - | - |
| `vstdttm` | datetime | ✗ | IDX | - |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `senddate` | date | ✗ | IDX | - |
| `sendtime` | int(4) | ✗ | - | - |
| `srvdate` | date | ✗ | - | - |
| `srvtime` | int(4) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `finish` | tinyint(1) | ✗ | - | - |
| `c2automate` | varchar(1) | ✗ | IDX | - |
| `hcode` | varchar(5) | ✗ | IDX | - |
| `approve` | varchar(100) | ✓ | - | - |
| `lcomment` | varchar(1) | ✗ | - | - |
| `labcomment` | varchar(255) | ✗ | - | - |
| `labgroup` | varchar(2) | ✗ | - | - |
| `pdffile` | varchar(20) | ✗ | - | - |
| `accept` | varchar(1) | ✓ | IDX | - |
| `acceptby` | varchar(255) | ✓ | - | - |
| `accepttime` | varchar(4) | ✗ | - | - |
| `approvedate` | date | ✓ | - | - |
| `approvetime` | varchar(4) | ✓ | - | - |

---

### lmkohrpt

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(3) | ✗ | PK | รหัส |
| `kohpmt` | varchar(60) | ✗ | IDX | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### lmpaprpt

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 27

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(3) | ✗ | IDX | รหัส |
| `pappmt` | varchar(72) | ✗ | - | - |
| `slct` | tinyint(1) | ✗ | - | - |

---

### lmupt

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | int(1) | ✗ | IDX | รหัส |
| `upt` | varchar(20) | ✓ | - | - |

---

### mathhn

**คำอธิบาย:** -

**จำนวนแถว:** 125,843

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cid` | varchar(13) | ✓ | IDX | เลขบัตรประชาชน |
| `hn` | varchar(9) | ✓ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `pid` | varchar(9) | ✓ | IDX | - |
| `typearea_hosp` | varchar(1) | ✓ | - | - |
| `typearea_pcu` | varchar(1) | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |

---

### mophicall060708

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `ptname` | int(1) | ✗ | - | ผู้ป่วย name |
| `person_name` | int(1) | ✗ | - | ชื่อ person |
| `mobile_phone` | int(1) | ✗ | - | - |
| `hometel` | int(1) | ✗ | - | - |
| `ptcid` | int(1) | ✗ | - | ผู้ป่วย cid |
| `mophcid` | int(1) | ✗ | - | - |
| `person_type_name` | int(1) | ✗ | - | ชื่อ person_type |
| `person_risk_type_name` | int(1) | ✗ | - | ชื่อ person_risk_type |
| `appointment_date` | int(1) | ✗ | - | วันที่ appointment |
| `appointment_confirm_type_name` | int(1) | ✗ | - | ชื่อ appointment_confirm_type |
| `staff_name` | int(1) | ✗ | - | ชื่อ staff |
| `nametumb` | int(1) | ✗ | - | - |
| `nameampur` | int(1) | ✗ | - | - |
| `namechw` | int(1) | ✗ | - | - |
| `namemoob` | int(1) | ✗ | - | - |
| `addr_moo` | int(1) | ✗ | - | - |
| `tmb_code` | int(1) | ✗ | - | รหัส tmb |
| `amp_code` | int(1) | ✗ | - | รหัส amp |
| `chw_code` | int(1) | ✗ | - | รหัส chw |

---

### new PTTYPE

**คำอธิบาย:** -

**จำนวนแถว:** 3,318

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `NO` | varchar(255) | ✓ | - | - |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `NAME` | varchar(255) | ✓ | - | ชื่อ |
| `CHANGWAT` | varchar(255) | ✓ | - | - |
| `SUB` | varchar(255) | ✓ | - | - |
| `HOSPITAL` | varchar(255) | ✓ | - | - |
| `DATEREGISTER` | varchar(255) | ✓ | - | - |

---

### nhsodeadNY

**คำอธิบาย:** -

**จำนวนแถว:** 406

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ว/ด/ป เสียชีวิต` | varchar(255) | ✓ | - | - |
| `PERSON_ID` | varchar(255) | ✓ | - | รหัส person |
| `TITLE` | varchar(255) | ✓ | - | - |
| `FNAME` | varchar(255) | ✓ | - | ชื่อจริง |
| `LNAME` | varchar(255) | ✓ | - | นามสกุล |
| `SEX` | varchar(255) | ✓ | - | - |
| `BIRTHDATE` | varchar(255) | ✓ | - | วันเกิด |
| `NATION` | varchar(255) | ✓ | - | - |
| `CHAT` | varchar(255) | ✓ | - | - |
| `PRIMARYPROVINCE` | varchar(255) | ✓ | - | - |
| `PROVINCE_NAME` | varchar(255) | ✓ | - | ชื่อ province |
| `AMPHUR_NAME` | varchar(255) | ✓ | - | ชื่อ amphur |
| `TUMBON_NAME` | varchar(255) | ✓ | - | ชื่อ tumbon |
| `MOOBAN_NAME` | varchar(255) | ✓ | - | ชื่อ mooban |
| `MOO` | varchar(255) | ✓ | - | - |
| `STATUS` | varchar(255) | ✓ | - | สถานะ |

---

### o_archive_all

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(8) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | char(25) | ✓ | - | ชื่อจริง |
| `lname` | char(25) | ✓ | - | นามสกุล |
| `male` | char(1) | ✓ | - | - |
| `age` | char(4) | ✓ | - | - |
| `allergy` | char(60) | ✓ | - | - |
| `pttype` | char(2) | ✓ | - | ประเภทสิทธิ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `dct` | char(5) | ✓ | - | - |
| `bw` | decimal(5,1) | ✗ | - | - |
| `tt` | decimal(4,1) | ✗ | - | - |
| `pr` | int(3) | ✗ | - | - |
| `rr` | int(3) | ✗ | - | - |
| `sbp` | int(3) | ✗ | - | - |
| `dbp` | int(3) | ✗ | - | - |
| `nrs` | int(1) | ✗ | - | - |
| `dtr` | int(1) | ✗ | - | - |
| `dtt` | int(1) | ✗ | - | - |
| `lab` | int(1) | ✗ | - | ห้องปฏิบัติการ |
| `xry` | int(1) | ✗ | - | - |
| `er` | int(1) | ✗ | - | - |
| `ors` | int(1) | ✗ | - | - |
| `rec` | int(1) | ✗ | - | - |
| `phm` | int(1) | ✗ | - | - |
| `hpt` | int(1) | ✗ | - | - |
| `drxtime` | int(4) | ✗ | - | - |
| `fudate` | date | ✓ | - | - |
| `fus1` | char(5) | ✓ | - | - |
| `fus2` | char(5) | ✓ | - | - |
| `fus3` | char(5) | ✓ | - | - |
| `fus4` | char(5) | ✓ | - | - |
| `fus5` | char(5) | ✓ | - | - |
| `ldrug` | tinyint(1) | ✗ | - | - |
| `source_table` | varchar(255) | ✓ | - | - |
| `merged_at` | datetime | ✓ | - | - |

---

### oapp

**คำอธิบาย:** -

**จำนวนแถว:** 1,509,969

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdttm` | datetime | ✗ | IDX | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `dct` | varchar(5) | ✓ | - | - |
| `cln` | varchar(5) | ✓ | - | - |
| `dscrptn` | varchar(25) | ✗ | - | - |
| `oappst` | varchar(1) | ✗ | - | - |
| `fudate` | date | ✗ | IDX | - |
| `futime` | int(4) | ✗ | - | - |
| `fuok` | tinyint(1) | ✗ | - | - |

---

### oapp_copy1

**คำอธิบาย:** -

**จำนวนแถว:** 1,191,930

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdttm` | datetime | ✗ | IDX | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `dct` | varchar(5) | ✓ | - | - |
| `cln` | varchar(5) | ✓ | - | - |
| `dscrptn` | varchar(25) | ✗ | - | - |
| `oappst` | varchar(1) | ✗ | - | - |
| `fudate` | date | ✗ | IDX | - |
| `futime` | int(4) | ✗ | - | - |
| `fuok` | tinyint(1) | ✗ | - | - |

---

### occptn

**คำอธิบาย:** -

**จำนวนแถว:** 128

**Engine:** MyISAM

**Primary Key:** `occptn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `occptn` | varchar(4) | ✗ | PK | - |
| `nameoccptn` | varchar(40) | ✗ | IDX | - |
| `opccptn` | varchar(4) | ✓ | - | - |

---

### optriage

**คำอธิบาย:** -

**จำนวนแถว:** 428,668

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `triage` | varchar(1) | ✗ | - | - |
| `trauma` | varchar(1) | ✗ | - | - |
| `ucae` | varchar(1) | ✗ | - | - |

---

### optype

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `codeoptype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codeoptype` | varchar(1) | ✗ | PK | - |
| `nameoptype` | varchar(15) | ✗ | - | - |

---

### optype_m

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `code`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code` | varchar(1) | ✗ | PK | รหัส |
| `name` | varchar(15) | ✗ | - | ชื่อ |

---

### oroption

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `orno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orno` | int(8) | ✗ | PK | - |
| `chkkwire` | varchar(1) | ✗ | - | - |
| `chkps` | varchar(1) | ✗ | - | - |
| `chklcp` | varchar(1) | ✗ | - | - |
| `chkiln` | varchar(1) | ✗ | - | - |
| `chkdhs` | varchar(1) | ✗ | - | - |
| `chkscrew` | varchar(1) | ✗ | - | - |
| `chktbw` | varchar(1) | ✗ | - | - |
| `chkancho` | varchar(1) | ✗ | - | - |
| `chkmpms` | varchar(1) | ✗ | - | - |
| `chktka` | varchar(1) | ✗ | - | - |
| `chkhand` | varchar(1) | ✗ | - | - |
| `chkhdt` | varchar(1) | ✗ | - | - |
| `chkfoot` | varchar(1) | ✗ | - | - |
| `chkfdt` | varchar(1) | ✗ | - | - |
| `chksp1` | varchar(1) | ✗ | - | - |
| `chksp2` | varchar(1) | ✗ | - | - |
| `chkspv1` | varchar(2) | ✗ | - | - |
| `chkspv2` | varchar(2) | ✗ | - | - |

---

### ositb

**คำอธิบาย:** -

**จำนวนแถว:** 9,248

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `an` | int(11) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(11) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `chwpart` | varchar(2) | ✓ | - | จังหวัด |
| `amppart` | varchar(2) | ✓ | - | อำเภอ |
| `tmbpart` | varchar(2) | ✓ | - | ตำบล |
| `moopart` | varchar(2) | ✓ | - | หมู่ |
| `pttype` | varchar(2) | ✓ | - | ประเภทสิทธิ |

---

### pcn

**คำอธิบาย:** -

**จำนวนแถว:** 24

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `codepcn` | varchar(2) | ✗ | - | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `note` | varchar(254) | ✗ | - | บันทึก |
| `dct` | varchar(5) | ✓ | - | - |
| `srvtime` | int(4) | ✗ | - | - |
| `s_cc` | varchar(1) | ✗ | - | - |
| `s_milk` | varchar(1) | ✗ | - | - |
| `s_lesion` | varchar(1) | ✗ | - | - |
| `s_fluid` | varchar(1) | ✗ | - | - |
| `s_other` | varchar(200) | ✗ | - | - |
| `o_vs` | varchar(40) | ✗ | - | - |
| `o_gcontro` | varchar(1) | ✗ | - | - |
| `o_uterus` | varchar(40) | ✗ | - | - |
| `o_es` | varchar(1) | ✗ | - | - |
| `o_other` | varchar(200) | ✗ | - | - |
| `a_ppt` | varchar(40) | ✗ | - | - |
| `a_day` | varchar(40) | ✗ | - | - |
| `a_with` | varchar(40) | ✗ | - | - |
| `a_withoth` | varchar(40) | ✗ | - | - |
| `a_other` | varchar(200) | ✗ | - | - |
| `p_option` | varchar(1) | ✗ | - | - |
| `p_other` | varchar(200) | ✗ | - | - |

---

### person_drp

**คำอธิบาย:** ข้อมูลผู้ป่วย/บุคคล

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `iddrp`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `iddrp` | int(11) | ✗ | PK | - |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `vstdttm` | datetime | ✗ | - | - |
| `drpcln` | varchar(2) | ✗ | - | - |
| `drptype` | varchar(2) | ✗ | - | - |
| `ddetail` | varchar(2) | ✗ | - | - |
| `ditvi` | longtext | ✗ | - | - |
| `dresult` | varchar(2) | ✗ | - | - |
| `doutcome` | varchar(2) | ✗ | - | - |
| `dresultd` | longtext | ✗ | - | - |
| `dct` | varchar(5) | ✗ | - | - |
| `pharmacist` | varchar(6) | ✗ | - | - |
| `upddate` | datetime | ✗ | - | - |
| `upduser` | varchar(5) | ✗ | - | - |
| `pointphm` | varchar(2) | ✗ | - | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `chkshow` | varchar(1) | ✗ | - | - |
| `fuser` | varchar(6) | ✗ | - | - |
| `fudrp` | date | ✗ | - | - |
| `fuok` | varchar(1) | ✗ | - | - |
| `stuphm` | varchar(60) | ✗ | - | - |
| `bedno` | varchar(5) | ✗ | - | - |

---

### personconsent

**คำอธิบาย:** ข้อมูลผู้ป่วย/บุคคล

**จำนวนแถว:** 14

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(16) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(8) | ✓ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdttm` | datetime | ✓ | - | - |
| `doctype` | varchar(1) | ✓ | - | - |
| `updocok` | varchar(1) | ✓ | - | - |
| `user` | varchar(5) | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |

---

### persong6pd

**คำอธิบาย:** ข้อมูลผู้ป่วย/บุคคล

**จำนวนแถว:** 405

**Engine:** InnoDB

**Primary Key:** `hn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | PK | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdate` | date | ✓ | - | วันที่มารับบริการ |

---

### phm_ptmed

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(11) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `an` | varchar(8) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `r_date` | datetime | ✓ | - | วันที่ r |

---

### prsc

**คำอธิบาย:** -

**จำนวนแถว:** 2,819,717

**Engine:** InnoDB

**Primary Key:** `prscno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `prscno` | int(11) | ✗ | PK | - |
| `prscdate` | date | ✗ | IDX | - |
| `prsctime` | int(4) | ✗ | - | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `paidst` | varchar(2) | ✗ | - | - |
| `charge` | decimal(9,2) | ✗ | - | - |
| `order_by` | varchar(100) | ✓ | - | - |
| `dscamt` | decimal(9,2) | ✗ | - | - |
| `rcptno` | int(9) | ✗ | - | - |
| `issprsn` | varchar(5) | ✗ | - | - |
| `sotpdate` | varchar(8) | ✗ | - | - |
| `sotptime` | varchar(4) | ✗ | - | - |
| `pharmacist` | varchar(6) | ✗ | - | - |
| `consultid` | int(15) | ✗ | - | - |
| `usehome` | varchar(1) | ✓ | - | - |
| `chk_remed` | varchar(15) | ✓ | - | - |

---

### prsc_up23

**คำอธิบาย:** -

**จำนวนแถว:** 1,484,983

**Engine:** InnoDB

**Primary Key:** `prscno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `prscno` | int(11) | ✗ | PK | - |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `prscno_old` | int(9) | ✗ | - | - |
| `prscdate` | date | ✗ | IDX | - |
| `prsctime` | int(4) | ✗ | - | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `paidst` | varchar(2) | ✗ | - | - |
| `charge` | decimal(9,2) | ✗ | - | - |
| `dscamt` | decimal(9,2) | ✗ | - | - |
| `rcptno` | int(9) | ✗ | - | - |
| `issprsn` | varchar(5) | ✗ | - | - |
| `sotpdate` | varchar(8) | ✗ | - | - |
| `sotptime` | varchar(4) | ✗ | - | - |
| `pharmacist` | varchar(6) | ✗ | - | - |

---

### psn_admin_verify

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `user_name` | varchar(20) | ✓ | - | ชื่อ user |
| `pass_word` | tinyblob | ✓ | - | - |
| `fname` | varchar(50) | ✓ | - | ชื่อจริง |
| `lname` | varchar(50) | ✓ | - | นามสกุล |
| `piority` | enum('Y','N') | ✓ | - | - |

---

### psn_config

**คำอธิบาย:** การตั้งค่า

**จำนวนแถว:** 5

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(50) | ✓ | - | รหัส common |
| `c_value1` | int(11) | ✓ | - | - |
| `c_value2` | varchar(50) | ✓ | - | - |
| `c_value4` | enum('Y','N') | ✓ | - | - |
| `c_value5` | int(11) | ✓ | - | - |
| `c_date` | date | ✓ | - | วันที่ c |
| `c_month` | int(11) | ✓ | - | - |

---

### psn_control_w

**คำอธิบาย:** -

**จำนวนแถว:** 863

**Engine:** MyISAM

**Primary Key:** `year_w, dprtmcode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `m1` | enum('1','0') | ✓ | - | - |
| `m2` | enum('1','0') | ✓ | - | - |
| `m3` | enum('1','0') | ✓ | - | - |
| `m4` | enum('1','0') | ✓ | - | - |
| `m5` | enum('1','0') | ✓ | - | - |
| `m6` | enum('1','0') | ✓ | - | - |
| `m7` | enum('1','0') | ✓ | - | - |
| `m8` | enum('1','0') | ✓ | - | - |
| `m9` | enum('1','0') | ✓ | - | - |
| `m10` | enum('1','0') | ✓ | - | - |
| `m11` | enum('1','0') | ✓ | - | - |
| `m12` | enum('1','0') | ✓ | - | - |
| `year_w` | int(11) | ✗ | PK | - |
| `dprtmcode` | varchar(50) | ✗ | PK | - |

---

### psn_dprtm

**คำอธิบาย:** -

**จำนวนแถว:** 146

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `dprtmcode` | varchar(3) | ✗ | - | - |
| `dprtmname` | varchar(100) | ✗ | - | - |
| `PSSWRD` | varchar(20) | ✗ | - | - |
| `dprtmw_type` | enum('0','1') | ✗ | - | ประเภท dprtmw |
| `disable_w` | enum('1','0') | ✓ | - | - |

---

### psn_dprtm_child

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `dprtmchild`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `dprtmchild` | varchar(3) | ✗ | PK | - |
| `dprtmcode` | varchar(3) | ✗ | - | - |
| `dprtmname` | varchar(40) | ✗ | - | - |

---

### psn_finger_server

**คำอธิบาย:** -

**จำนวนแถว:** 15

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ip_addr` | varchar(20) | ✓ | - | - |
| `password` | varchar(20) | ✓ | - | - |
| `port` | int(10) | ✓ | - | - |
| `visible_flg` | enum('Y','N') | ✓ | - | - |
| `finger_flg` | enum('BW','TFT','IFace') | ✓ | - | - |
| `platform` | varchar(50) | ✓ | - | - |
| `ACCESS_PATH` | text | ✓ | - | - |
| `db_type` | enum('MySQL','ACCESS') | ✓ | - | ประเภท db |
| `remark` | varchar(50) | ✓ | - | หมายเหตุ |

---

### psn_latype

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `CODE`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `CODE` | varchar(1) | ✗ | PK | รหัส |
| `NAME` | varchar(50) | ✓ | - | ชื่อ |

---

### psn_ot_doc_total

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ot_total` | int(11) | ✓ | - | - |
| `ot_month` | int(11) | ✓ | - | - |
| `ot_year` | int(11) | ✓ | - | - |
| `dprtmcode` | varchar(50) | ✓ | - | - |

---

### psn_position

**คำอธิบาย:** -

**จำนวนแถว:** 187

**Engine:** MyISAM

**Primary Key:** `positioncode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `positioncode` | int(11) | ✗ | PK | - |
| `positionname` | varchar(100) | ✗ | - | - |
| `op43` | varchar(3) | ✗ | - | - |
| `concil` | varchar(3) | ✗ | - | - |

---

### psn_prefix

**คำอธิบาย:** คำนำหน้าบุคคล

**จำนวนแถว:** 227

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `prefix_full` | varchar(255) | ✓ | - | - |
| `prefix_name` | varchar(100) | ✓ | - | ชื่อ prefix |
| `typeofprefix` | varchar(2) | ✓ | - | - |

---

### psn_prefix_02-10-2566

**คำอธิบาย:** -

**จำนวนแถว:** 17

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | tinyint(4) | ✗ | PK | รหัสประจำ (Primary Key) |
| `prefix_name` | varchar(10) | ✓ | - | ชื่อ prefix |

---

### psn_prename

**คำอธิบาย:** -

**จำนวนแถว:** 505

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `prename_code` | varchar(3) | ✓ | IDX | รหัส prename |
| `prename` | varchar(200) | ✓ | - | - |
| `prename_desc` | varchar(200) | ✓ | - | - |
| `int_code` | varchar(3) | ✓ | - | รหัส int |
| `sex` | varchar(1) | ✓ | - | - |
| `status` | varchar(1) | ✓ | - | สถานะ |

---

### psn_salary_type

**คำอธิบาย:** -

**จำนวนแถว:** 14

**Engine:** InnoDB

**Primary Key:** `scode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `scode` | int(11) | ✗ | PK | - |
| `type_name` | varchar(50) | ✓ | - | ชื่อ type |
| `cal_flg` | enum('+','-') | ✓ | - | - |

---

### psn_time_work

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `w_type` | enum('ช','บ','ด','B','D','น','N','ย','Y','T','M','O') | ✓ | - | ประเภท w |
| `min_time_over` | time | ✓ | - | - |
| `max_time_over` | time | ✓ | - | - |
| `min_time_over2` | time | ✓ | - | - |
| `max_time_over2` | time | ✓ | - | - |
| `max_time_over3` | time | ✓ | - | - |

---

### psn_timer

**คำอธิบาย:** -

**จำนวนแถว:** 1

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `timer1` | int(10) | ✓ | - | - |
| `timer2` | int(10) | ✓ | - | - |
| `timer3` | int(10) | ✓ | - | - |

---

### psn_timer_history

**คำอธิบาย:** -

**จำนวนแถว:** 1

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `timer` | int(10) | ✓ | - | - |
| `create_date` | date | ✓ | - | วันที่ create |
| `create_time` | time | ✓ | - | เวลา create |

---

### pt

**คำอธิบาย:** -

**จำนวนแถว:** 181,351

**Engine:** InnoDB

**Primary Key:** `hn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | PK | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✓ | IDX | ชื่อจริง |
| `lname` | varchar(25) | ✓ | IDX | นามสกุล |
| `brthdate` | date | ✗ | - | - |
| `truebrth` | int(1) | ✗ | - | - |
| `dthdate` | date | ✗ | - | - |
| `male` | varchar(1) | ✗ | - | - |
| `ctzshp` | varchar(3) | ✗ | - | - |
| `ntnlty` | varchar(3) | ✗ | - | - |
| `rlgn` | varchar(1) | ✗ | - | - |
| `occptn` | varchar(3) | ✗ | - | - |
| `bloodgrp` | varchar(2) | ✗ | - | - |
| `allergy` | varchar(60) | ✗ | - | - |
| `addrpart` | varchar(30) | ✗ | - | ส่วนที่อยู่ |
| `moopart` | varchar(2) | ✗ | - | หมู่ |
| `tmbpart` | varchar(2) | ✗ | - | ตำบล |
| `amppart` | varchar(2) | ✗ | - | อำเภอ |
| `chwpart` | varchar(2) | ✗ | - | จังหวัด |
| `hometel` | varchar(20) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `mrtlst` | varchar(1) | ✗ | - | - |
| `spsname` | varchar(30) | ✗ | - | - |
| `mthname` | varchar(30) | ✗ | - | - |
| `fthname` | varchar(30) | ✗ | - | - |
| `offaddr` | varchar(30) | ✗ | - | - |
| `offtel` | varchar(20) | ✗ | - | - |
| `infmname` | varchar(30) | ✗ | - | - |
| `prsnrlt` | varchar(10) | ✗ | - | - |
| `infmaddr` | varchar(50) | ✗ | - | - |
| `infmtel` | varchar(20) | ✗ | - | - |
| `opdlct` | varchar(5) | ✗ | - | - |
| `fdate` | date | ✗ | - | - |
| `ldate` | date | ✗ | IDX | - |
| `pop_id` | varchar(13) | ✗ | IDX | รหัส pop |
| `height` | decimal(5,1) | ✗ | - | - |
| `register` | varchar(2) | ✗ | - | - |
| `pathimage` | varchar(100) | ✗ | - | - |
| `typearea` | enum('','4','3','2','1','0') | ✗ | - | - |
| `statusinfo` | varchar(40) | ✗ | - | - |
| `house_id` | varchar(11) | ✗ | - | รหัส house |
| `housetype` | varchar(1) | ✗ | - | - |
| `viptype` | varchar(2) | ✗ | - | - |
| `passport` | varchar(20) | ✗ | - | - |
| `cidlabor` | varchar(20) | ✗ | - | - |
| `engfname` | varchar(40) | ✗ | - | - |
| `englname` | varchar(40) | ✗ | - | - |
| `engpname` | varchar(40) | ✗ | - | - |
| `vstatus` | varchar(1) | ✓ | - | - |
| `gencid` | varchar(13) | ✓ | - | - |
| `father_cid` | varchar(13) | ✓ | - | - |
| `mother_cid` | varchar(13) | ✓ | - | - |
| `couple_cid` | varchar(13) | ✓ | - | - |
| `education` | varchar(2) | ✓ | - | - |
| `couple` | varchar(100) | ✗ | - | - |
| `pt_guid` | varchar(36) | ✓ | - | ผู้ป่วย _guid |
| `cidmophic` | varchar(13) | ✓ | - | - |

---

### pt_pab

**คำอธิบาย:** -

**จำนวนแถว:** 113,838

**Engine:** InnoDB

**Primary Key:** `hn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | PK | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✓ | IDX | ชื่อจริง |
| `lname` | varchar(25) | ✓ | IDX | นามสกุล |
| `brthdate` | date | ✗ | - | - |
| `truebrth` | int(1) | ✗ | - | - |
| `dthdate` | date | ✗ | - | - |
| `male` | varchar(1) | ✗ | - | - |
| `ctzshp` | varchar(2) | ✗ | - | - |
| `ntnlty` | varchar(2) | ✗ | - | - |
| `rlgn` | varchar(2) | ✗ | - | - |
| `occptn` | varchar(3) | ✗ | - | - |
| `bloodgrp` | varchar(2) | ✗ | - | - |
| `allergy` | varchar(60) | ✗ | - | - |
| `addrpart` | varchar(30) | ✗ | - | ส่วนที่อยู่ |
| `moopart` | varchar(2) | ✗ | - | หมู่ |
| `tmbpart` | varchar(2) | ✗ | - | ตำบล |
| `amppart` | varchar(2) | ✗ | - | อำเภอ |
| `chwpart` | varchar(2) | ✗ | - | จังหวัด |
| `hometel` | varchar(20) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `mrtlst` | varchar(1) | ✗ | - | - |
| `spsname` | varchar(30) | ✗ | - | - |
| `mthname` | varchar(30) | ✗ | - | - |
| `fthname` | varchar(30) | ✗ | - | - |
| `offaddr` | varchar(30) | ✗ | - | - |
| `offtel` | varchar(20) | ✗ | - | - |
| `infmname` | varchar(30) | ✗ | - | - |
| `prsnrlt` | varchar(10) | ✗ | - | - |
| `infmaddr` | varchar(100) | ✗ | - | - |
| `infmtel` | varchar(20) | ✗ | - | - |
| `opdlct` | varchar(5) | ✗ | - | - |
| `fdate` | date | ✗ | - | - |
| `ldate` | date | ✗ | - | - |
| `pop_id` | varchar(13) | ✗ | IDX | รหัส pop |
| `height` | decimal(8,1) | ✗ | - | - |
| `register` | varchar(2) | ✗ | - | - |
| `pathimage` | varchar(100) | ✓ | - | - |
| `typearea` | varchar(1) | ✓ | - | - |

---

### pt_pab_nocutperson

**คำอธิบาย:** ข้อมูลผู้ป่วย/บุคคล

**จำนวนแถว:** 115,303

**Engine:** InnoDB

**Primary Key:** `hn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | PK | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✓ | IDX | ชื่อจริง |
| `lname` | varchar(25) | ✓ | IDX | นามสกุล |
| `brthdate` | date | ✗ | - | - |
| `truebrth` | int(1) | ✗ | - | - |
| `dthdate` | date | ✗ | - | - |
| `male` | varchar(1) | ✗ | - | - |
| `ctzshp` | varchar(2) | ✗ | - | - |
| `ntnlty` | varchar(2) | ✗ | - | - |
| `rlgn` | varchar(2) | ✗ | - | - |
| `occptn` | varchar(3) | ✗ | - | - |
| `bloodgrp` | varchar(2) | ✗ | - | - |
| `allergy` | varchar(60) | ✗ | - | - |
| `addrpart` | varchar(30) | ✗ | - | ส่วนที่อยู่ |
| `moopart` | varchar(2) | ✗ | - | หมู่ |
| `tmbpart` | varchar(2) | ✗ | - | ตำบล |
| `amppart` | varchar(2) | ✗ | - | อำเภอ |
| `chwpart` | varchar(2) | ✗ | - | จังหวัด |
| `hometel` | varchar(20) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `mrtlst` | varchar(1) | ✗ | - | - |
| `spsname` | varchar(30) | ✗ | - | - |
| `mthname` | varchar(30) | ✗ | - | - |
| `fthname` | varchar(30) | ✗ | - | - |
| `offaddr` | varchar(30) | ✗ | - | - |
| `offtel` | varchar(20) | ✗ | - | - |
| `infmname` | varchar(30) | ✗ | - | - |
| `prsnrlt` | varchar(10) | ✗ | - | - |
| `infmaddr` | varchar(100) | ✗ | - | - |
| `infmtel` | varchar(20) | ✗ | - | - |
| `opdlct` | varchar(5) | ✗ | - | - |
| `fdate` | date | ✗ | - | - |
| `ldate` | date | ✗ | - | - |
| `pop_id` | varchar(13) | ✗ | IDX | รหัส pop |
| `height` | decimal(8,1) | ✗ | - | - |
| `register` | varchar(2) | ✗ | - | - |
| `pathimage` | varchar(100) | ✓ | - | - |
| `typearea` | varchar(1) | ✓ | - | - |

---

### pt_ก่อนปรับสิทธิ์การรักษา

**คำอธิบาย:** -

**จำนวนแถว:** 181,305

**Engine:** InnoDB

**Primary Key:** `hn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | PK | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✓ | IDX | ชื่อจริง |
| `lname` | varchar(25) | ✓ | IDX | นามสกุล |
| `brthdate` | date | ✗ | - | - |
| `truebrth` | int(1) | ✗ | - | - |
| `dthdate` | date | ✗ | - | - |
| `male` | varchar(1) | ✗ | - | - |
| `ctzshp` | varchar(3) | ✗ | - | - |
| `ntnlty` | varchar(3) | ✗ | - | - |
| `rlgn` | varchar(1) | ✗ | - | - |
| `occptn` | varchar(3) | ✗ | - | - |
| `bloodgrp` | varchar(2) | ✗ | - | - |
| `allergy` | varchar(60) | ✗ | - | - |
| `addrpart` | varchar(30) | ✗ | - | ส่วนที่อยู่ |
| `moopart` | varchar(2) | ✗ | - | หมู่ |
| `tmbpart` | varchar(2) | ✗ | - | ตำบล |
| `amppart` | varchar(2) | ✗ | - | อำเภอ |
| `chwpart` | varchar(2) | ✗ | - | จังหวัด |
| `hometel` | varchar(20) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `mrtlst` | varchar(1) | ✗ | - | - |
| `spsname` | varchar(30) | ✗ | - | - |
| `mthname` | varchar(30) | ✗ | - | - |
| `fthname` | varchar(30) | ✗ | - | - |
| `offaddr` | varchar(30) | ✗ | - | - |
| `offtel` | varchar(20) | ✗ | - | - |
| `infmname` | varchar(30) | ✗ | - | - |
| `prsnrlt` | varchar(10) | ✗ | - | - |
| `infmaddr` | varchar(50) | ✗ | - | - |
| `infmtel` | varchar(20) | ✗ | - | - |
| `opdlct` | varchar(5) | ✗ | - | - |
| `fdate` | date | ✗ | - | - |
| `ldate` | date | ✗ | - | - |
| `pop_id` | varchar(13) | ✗ | IDX | รหัส pop |
| `height` | decimal(5,1) | ✗ | - | - |
| `register` | varchar(2) | ✗ | - | - |
| `pathimage` | varchar(100) | ✗ | - | - |
| `typearea` | enum('','4','3','2','1','0') | ✗ | - | - |
| `statusinfo` | varchar(40) | ✗ | - | - |
| `house_id` | varchar(11) | ✗ | - | รหัส house |
| `housetype` | varchar(1) | ✗ | - | - |
| `viptype` | varchar(2) | ✗ | - | - |
| `passport` | varchar(20) | ✗ | - | - |
| `cidlabor` | varchar(20) | ✗ | - | - |
| `engfname` | varchar(40) | ✗ | - | - |
| `englname` | varchar(40) | ✗ | - | - |
| `engpname` | varchar(40) | ✗ | - | - |
| `vstatus` | varchar(1) | ✓ | - | - |
| `gencid` | varchar(13) | ✓ | - | - |
| `father_cid` | varchar(13) | ✓ | - | - |
| `mother_cid` | varchar(13) | ✓ | - | - |
| `couple_cid` | varchar(13) | ✓ | - | - |
| `education` | varchar(2) | ✓ | - | - |
| `couple` | varchar(100) | ✗ | - | - |
| `pt_guid` | varchar(36) | ✓ | - | ผู้ป่วย _guid |
| `cidmophic` | varchar(13) | ✓ | - | - |

---

### pt_ก่อนปรับสิทธิ์การรักษา 30-10-66-14-41

**คำอธิบาย:** -

**จำนวนแถว:** 184,437

**Engine:** InnoDB

**Primary Key:** `hn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | PK | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(15) | ✗ | - | คำนำหน้าชื่อ |
| `fname` | varchar(25) | ✓ | IDX | ชื่อจริง |
| `lname` | varchar(25) | ✓ | IDX | นามสกุล |
| `brthdate` | date | ✗ | - | - |
| `truebrth` | int(1) | ✗ | - | - |
| `dthdate` | date | ✗ | - | - |
| `male` | varchar(1) | ✗ | - | - |
| `ctzshp` | varchar(3) | ✗ | - | - |
| `ntnlty` | varchar(3) | ✗ | - | - |
| `rlgn` | varchar(1) | ✗ | - | - |
| `occptn` | varchar(3) | ✗ | - | - |
| `bloodgrp` | varchar(2) | ✗ | - | - |
| `allergy` | varchar(60) | ✗ | - | - |
| `addrpart` | varchar(30) | ✗ | - | ส่วนที่อยู่ |
| `moopart` | varchar(2) | ✗ | - | หมู่ |
| `tmbpart` | varchar(2) | ✗ | - | ตำบล |
| `amppart` | varchar(2) | ✗ | - | อำเภอ |
| `chwpart` | varchar(2) | ✗ | - | จังหวัด |
| `hometel` | varchar(20) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `mrtlst` | varchar(1) | ✗ | - | - |
| `spsname` | varchar(30) | ✗ | - | - |
| `mthname` | varchar(30) | ✗ | - | - |
| `fthname` | varchar(30) | ✗ | - | - |
| `offaddr` | varchar(30) | ✗ | - | - |
| `offtel` | varchar(20) | ✗ | - | - |
| `infmname` | varchar(30) | ✗ | - | - |
| `prsnrlt` | varchar(10) | ✗ | - | - |
| `infmaddr` | varchar(50) | ✗ | - | - |
| `infmtel` | varchar(20) | ✗ | - | - |
| `opdlct` | varchar(5) | ✗ | - | - |
| `fdate` | date | ✗ | - | - |
| `ldate` | date | ✗ | - | - |
| `pop_id` | varchar(13) | ✗ | IDX | รหัส pop |
| `height` | decimal(5,1) | ✗ | - | - |
| `register` | varchar(2) | ✗ | - | - |
| `pathimage` | varchar(100) | ✗ | - | - |
| `typearea` | enum('','4','3','2','1','0') | ✗ | - | - |
| `statusinfo` | varchar(40) | ✗ | - | - |
| `house_id` | varchar(11) | ✗ | - | รหัส house |
| `housetype` | varchar(1) | ✗ | - | - |
| `viptype` | varchar(2) | ✗ | - | - |
| `passport` | varchar(20) | ✗ | - | - |
| `cidlabor` | varchar(20) | ✗ | - | - |
| `engfname` | varchar(40) | ✗ | - | - |
| `englname` | varchar(40) | ✗ | - | - |
| `engpname` | varchar(40) | ✗ | - | - |
| `vstatus` | varchar(1) | ✓ | - | - |
| `gencid` | varchar(13) | ✓ | - | - |
| `father_cid` | varchar(13) | ✓ | - | - |
| `mother_cid` | varchar(13) | ✓ | - | - |
| `couple_cid` | varchar(13) | ✓ | - | - |
| `education` | varchar(2) | ✓ | - | - |
| `couple` | varchar(100) | ✗ | - | - |
| `pt_guid` | varchar(36) | ✓ | - | ผู้ป่วย _guid |
| `cidmophic` | varchar(13) | ✓ | - | - |

---

### ptble

**คำอธิบาย:** -

**จำนวนแถว:** 4,910

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `pname` | varchar(255) | ✓ | - | คำนำหน้าชื่อ |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `lname` | varchar(255) | ✓ | - | นามสกุล |
| `brthdate` | varchar(255) | ✓ | - | - |
| `truebrth` | varchar(255) | ✓ | - | - |
| `dthdate` | varchar(255) | ✓ | - | - |
| `male` | varchar(255) | ✓ | - | - |
| `ctzshp` | varchar(255) | ✓ | - | - |
| `ntnlty` | varchar(255) | ✓ | - | - |
| `rlgn` | varchar(255) | ✓ | - | - |
| `occptn` | varchar(255) | ✓ | - | - |
| `bloodgrp` | varchar(255) | ✓ | - | - |
| `allergy` | varchar(255) | ✓ | - | - |
| `addrpart` | varchar(255) | ✓ | - | ส่วนที่อยู่ |
| `moopart` | varchar(255) | ✓ | - | หมู่ |
| `tmbpart` | varchar(255) | ✓ | - | ตำบล |
| `amppart` | varchar(255) | ✓ | - | อำเภอ |
| `chwpart` | varchar(255) | ✓ | - | จังหวัด |
| `hometel` | varchar(255) | ✓ | - | - |
| `pttype` | varchar(255) | ✓ | - | ประเภทสิทธิ |
| `mrtlst` | varchar(255) | ✓ | - | - |
| `spsname` | varchar(255) | ✓ | - | - |
| `mthname` | varchar(255) | ✓ | - | - |
| `fthname` | varchar(255) | ✓ | - | - |
| `offaddr` | varchar(255) | ✓ | - | - |
| `offtel` | varchar(255) | ✓ | - | - |
| `infmname` | varchar(255) | ✓ | - | - |
| `prsnrlt` | varchar(255) | ✓ | - | - |
| `infmaddr` | varchar(255) | ✓ | - | - |
| `infmtel` | varchar(255) | ✓ | - | - |
| `opdlct` | varchar(255) | ✓ | - | - |
| `fdate` | varchar(255) | ✓ | - | - |
| `ldate` | varchar(255) | ✓ | - | - |
| `pop_id` | varchar(255) | ✓ | - | รหัส pop |
| `height` | varchar(255) | ✓ | - | - |
| `register` | varchar(255) | ✓ | - | - |
| `pathimage` | varchar(255) | ✓ | - | - |
| `typearea` | varchar(255) | ✓ | - | - |
| `hn1` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย 1 |
| `pop_id1` | varchar(255) | ✓ | - | - |
| `cpop` | varchar(255) | ✓ | - | - |

---

### pttype

**คำอธิบาย:** ประเภทสิทธิ

**จำนวนแถว:** 96

**Engine:** MyISAM

**Primary Key:** `pttype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pttype` | varchar(2) | ✗ | PK | ประเภทสิทธิ |
| `namepttype` | varchar(100) | ✗ | - | - |
| `rights` | varchar(20) | ✗ | - | - |
| `stdcode` | varchar(2) | ✗ | - | - |
| `pay` | decimal(4,2) | ✗ | - | การชำระ |
| `op56` | varchar(4) | ✗ | - | - |
| `inscl` | varchar(3) | ✗ | - | - |
| `chkshow` | varchar(1) | ✗ | - | - |
| `instypeold` | varchar(2) | ✗ | - | - |
| `chg18` | varchar(1) | ✗ | - | - |
| `income_id` | varchar(2) | ✗ | - | รหัส income |
| `que_group` | int(11) | ✓ | IDX | - |
| `sss_export` | enum('1','0') | ✗ | IDX | - |
| `j_export` | varchar(5) | ✓ | - | - |
| `ins_code` | varchar(2) | ✓ | - | รหัส ins |
| `dept_code_id` | int(11) | ✗ | - | รหัส dept_code |
| `dept_cr_code_id` | int(11) | ✗ | - | รหัส dept_cr_code |
| `dept_code_ip_id` | int(11) | ✗ | - | รหัส dept_code_ip |

---

### pttype_03-10-67

**คำอธิบาย:** ประเภทสิทธิ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 92

**Engine:** MyISAM

**Primary Key:** `pttype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pttype` | varchar(2) | ✗ | PK | ประเภทสิทธิ |
| `namepttype` | varchar(100) | ✗ | - | - |
| `rights` | varchar(20) | ✗ | - | - |
| `stdcode` | varchar(2) | ✗ | - | - |
| `pay` | decimal(4,2) | ✗ | - | การชำระ |
| `op56` | varchar(4) | ✗ | - | - |
| `inscl` | varchar(3) | ✗ | - | - |
| `chkshow` | varchar(1) | ✗ | - | - |
| `instypeold` | varchar(2) | ✗ | - | - |
| `chg18` | varchar(1) | ✗ | - | - |
| `income_id` | varchar(2) | ✗ | - | รหัส income |
| `que_group` | int(11) | ✓ | - | - |
| `sss_export` | enum('1','0') | ✗ | IDX | - |
| `j_export` | varchar(5) | ✓ | - | - |
| `ins_code` | varchar(2) | ✓ | - | รหัส ins |
| `dept_code_id` | int(11) | ✓ | - | รหัส dept_code |
| `dept_cr_code_id` | int(11) | ✓ | - | รหัส dept_cr_code |

---

### pttype_smm

**คำอธิบาย:** ประเภทสิทธิ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 64

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `namepttype` | varchar(40) | ✗ | - | - |
| `rights` | varchar(20) | ✗ | - | - |
| `pttype` | varchar(2) | ✗ | IDX | ประเภทสิทธิ |
| `stdcode` | varchar(2) | ✗ | - | - |
| `pay` | decimal(4,2) | ✗ | - | การชำระ |
| `op56` | varchar(4) | ✗ | - | - |
| `inscl` | varchar(3) | ✗ | - | - |
| `chkshow` | varchar(1) | ✗ | - | - |
| `instypeold` | varchar(2) | ✗ | - | - |

---

### pttype_ก่อนเพิ่มสิทธิ์ใหม่

**คำอธิบาย:** ประเภทสิทธิ (ที่เกี่ยวข้อง)

**จำนวนแถว:** 85

**Engine:** MyISAM

**Primary Key:** `pttype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `pttype` | varchar(2) | ✗ | PK | ประเภทสิทธิ |
| `namepttype` | varchar(100) | ✗ | - | - |
| `rights` | varchar(20) | ✗ | - | - |
| `stdcode` | varchar(2) | ✗ | - | - |
| `pay` | decimal(4,2) | ✗ | - | การชำระ |
| `op56` | varchar(4) | ✗ | - | - |
| `inscl` | varchar(3) | ✗ | - | - |
| `chkshow` | varchar(1) | ✗ | - | - |
| `instypeold` | varchar(2) | ✗ | - | - |
| `chg18` | varchar(1) | ✗ | - | - |
| `income_id` | varchar(2) | ✗ | - | รหัส income |
| `que_group` | int(11) | ✓ | - | - |
| `sss_export` | enum('1','0') | ✗ | IDX | - |
| `j_export` | varchar(5) | ✓ | - | - |

---

### q4u_person

**คำอธิบาย:** ข้อมูลผู้ป่วย/บุคคล

**จำนวนแถว:** 74,790

**Engine:** InnoDB

**Primary Key:** `hn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | varchar(15) | ✗ | PK | เลขที่ผู้ป่วย (Hospital Number) |
| `title` | varchar(50) | ✓ | - | - |
| `first_name` | varchar(50) | ✓ | - | ชื่อ first |
| `last_name` | varchar(50) | ✓ | - | ชื่อ last |
| `birthdate` | date | ✓ | - | วันเกิด |
| `remark` | text | ✓ | - | หมายเหตุ |
| `update_date` | timestamp | ✓ | - | วันที่ update |
| `sex` | char(1) | ✓ | - | - |

---

### rcpt

**คำอธิบาย:** -

**จำนวนแถว:** 563,037

**Engine:** InnoDB

**Primary Key:** `rcptno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rcptno` | int(11) | ✗ | PK | - |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `rcptdate` | date | ✗ | IDX | - |
| `rcpttime` | int(4) | ✗ | - | - |
| `bookno` | int(7) | ✗ | - | - |
| `pageno` | int(7) | ✗ | - | - |
| `gbookno` | int(7) | ✗ | - | - |
| `gpageno` | int(7) | ✗ | - | - |
| `amnt` | decimal(10,2) | ✗ | - | - |
| `credit` | decimal(10,2) | ✗ | - | - |
| `modulate` | decimal(10,2) | ✗ | - | - |
| `staff` | varchar(5) | ✗ | - | - |
| `lmdfdate` | date | ✗ | - | - |
| `online` | varchar(1) | ✗ | - | - |

---

### rcpt_15.09.59

**คำอธิบาย:** -

**จำนวนแถว:** 335,083

**Engine:** InnoDB

**Primary Key:** `rcptno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rcptno` | int(8) | ✗ | PK | - |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(4) | ✗ | - | เวลาที่มารับบริการ |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `rcptst` | varchar(4) | ✗ | - | - |
| `rcptdate` | date | ✗ | IDX | - |
| `rcpttime` | int(4) | ✗ | - | - |
| `bookno` | int(4) | ✗ | - | - |
| `pageno` | int(6) | ✗ | - | - |
| `amnt` | decimal(10,2) | ✗ | - | - |
| `staff` | varchar(5) | ✗ | - | - |
| `lmdfdate` | date | ✗ | - | - |
| `credit` | int(5) | ✗ | - | - |
| `modulate` | int(5) | ✗ | - | - |

---

### reptype

**คำอธิบาย:** -

**จำนวนแถว:** 15

**Engine:** MyISAM

**Primary Key:** `reptype`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `reptype` | varchar(2) | ✗ | PK | - |
| `typename` | varchar(100) | ✗ | - | - |

---

### req_change_pttype

**คำอธิบาย:** -

**จำนวนแถว:** 320

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(11) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `datereg` | date | ✓ | - | - |
| `detail` | varchar(255) | ✓ | - | - |
| `pttype_old` | varchar(255) | ✓ | - | ผู้ป่วย type_old |
| `pttype_new` | varchar(255) | ✓ | - | ผู้ป่วย type_new |
| `status` | varchar(255) | ✓ | - | สถานะ |
| `date_create` | timestamp | ✓ | - | - |

---

### req_pttype

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `pttype` | int(11) | ✓ | - | ประเภทสิทธิ |
| `pttypename` | varchar(255) | ✓ | - | ผู้ป่วย typename |

---

### stm6702

**คำอธิบาย:** -

**จำนวนแถว:** 408

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `Cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `fullname` | varchar(255) | ✓ | - | - |
| `adjrw` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `sumC` | varchar(255) | ✓ | - | - |

---

### stm6703

**คำอธิบาย:** -

**จำนวนแถว:** 480

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `Cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `fullname` | varchar(255) | ✓ | - | - |
| `adjrw` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `sumC` | varchar(255) | ✓ | - | - |

---

### stm6704

**คำอธิบาย:** -

**จำนวนแถว:** 403

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `Cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `fullname` | varchar(255) | ✓ | - | - |
| `adjrw` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `sumC` | varchar(255) | ✓ | - | - |

---

### stm6705

**คำอธิบาย:** -

**จำนวนแถว:** 648

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `Cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `fullname` | varchar(255) | ✓ | - | - |
| `adjrw` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `sumC` | varchar(255) | ✓ | - | - |

---

### stm6706

**คำอธิบาย:** -

**จำนวนแถว:** 582

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `Cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `fullname` | varchar(255) | ✓ | - | - |
| `adjrw` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `sumC` | varchar(255) | ✓ | - | - |

---

### stm6707

**คำอธิบาย:** -

**จำนวนแถว:** 555

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `Cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `fullname` | varchar(255) | ✓ | - | - |
| `adjrw` | varchar(255) | ✓ | - | - |
| `sum` | varchar(255) | ✓ | - | - |
| `sumC` | varchar(255) | ✓ | - | - |

---

### stm6801

**คำอธิบาย:** -

**จำนวนแถว:** 610

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `Fullname` | varchar(255) | ✓ | - | - |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `AdjRW` | varchar(255) | ✓ | - | - |
| `Add` | varchar(255) | ✓ | - | - |
| `Sum` | varchar(255) | ✓ | - | - |
| `SumC` | varchar(255) | ✓ | - | - |

---

### stm6802

**คำอธิบาย:** -

**จำนวนแถว:** 519

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `Fullname` | varchar(255) | ✓ | - | - |
| `AdjRW` | varchar(255) | ✓ | - | - |
| `Add` | varchar(255) | ✓ | - | - |
| `Sum` | varchar(255) | ✓ | - | - |
| `SumC` | varchar(255) | ✓ | - | - |

---

### stm6803

**คำอธิบาย:** -

**จำนวนแถว:** 534

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `Fullname` | varchar(255) | ✓ | - | - |
| `Sum` | varchar(255) | ✓ | - | - |
| `AdjRW` | varchar(255) | ✓ | - | - |
| `Add` | varchar(255) | ✓ | - | - |
| `SumC` | varchar(255) | ✓ | - | - |

---

### stm6804

**คำอธิบาย:** -

**จำนวนแถว:** 473

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `Fullname` | varchar(255) | ✓ | - | - |
| `Sum` | varchar(255) | ✓ | - | - |
| `AdjRW` | varchar(255) | ✓ | - | - |
| `Add` | varchar(255) | ✓ | - | - |
| `SumC` | varchar(255) | ✓ | - | - |

---

### stm6805

**คำอธิบาย:** -

**จำนวนแถว:** 493

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `Fullname` | varchar(255) | ✓ | - | - |
| `Sum` | varchar(255) | ✓ | - | - |
| `AdjRW` | varchar(255) | ✓ | - | - |
| `Add` | varchar(255) | ✓ | - | - |
| `SumC` | varchar(255) | ✓ | - | - |

---

### stm6806

**คำอธิบาย:** -

**จำนวนแถว:** 349

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `CID` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `Fullname` | varchar(255) | ✓ | - | - |
| `Sum` | varchar(255) | ✓ | - | - |
| `AdjRW` | varchar(255) | ✓ | - | - |
| `Add` | varchar(255) | ✓ | - | - |
| `SumC` | varchar(255) | ✓ | - | - |

---

### symp_d0

**คำอธิบาย:** -

**จำนวนแถว:** 359

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `symptom` | varchar(40) | ✗ | IDX | - |
| `an` | int(8) | ✗ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |
| `vsttime` | int(5) | ✗ | - | เวลาที่มารับบริการ |
| `slct` | tinyint(1) | ✗ | - | - |

---

### symptm

**คำอธิบาย:** -

**จำนวนแถว:** 4,429,310

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `symptom` | varchar(40) | ✗ | IDX | - |

---

### symptom

**คำอธิบาย:** -

**จำนวนแถว:** 5,027

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `symptom` | varchar(40) | ✗ | IDX | - |

---

### visitpttype

**คำอธิบาย:** -

**จำนวนแถว:** 27,280

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `pttype` | varchar(2) | ✗ | - | ประเภทสิทธิ |
| `d_update` | datetime | ✗ | - | - |

---


## pharmacy

### drugitems

**คำอธิบาย:** รายการยา

**จำนวนแถว:** 1,149

**Engine:** InnoDB

**Primary Key:** `icode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icode` | varchar(7) | ✗ | PK | - |
| `name` | varchar(100) | ✓ | IDX | ชื่อ |
| `strength` | varchar(50) | ✓ | IDX | - |
| `units` | varchar(50) | ✓ | IDX | - |
| `unitprice` | double(22,3) | ✓ | - | ราคาต่อหน่วย |
| `dosageform` | varchar(100) | ✓ | IDX | - |
| `criticalpriority` | int(11) | ✓ | - | - |
| `drugaccount` | varchar(2) | ✓ | IDX | - |
| `drugcategory` | varchar(150) | ✓ | IDX | - |
| `drugnote` | varchar(150) | ✓ | IDX | - |
| `hintcode` | varchar(4) | ✓ | IDX | - |
| `istatus` | char(1) | ✓ | IDX | - |
| `lastupdatestdprice` | datetime | ✓ | - | - |
| `lockprice` | char(1) | ✓ | - | - |
| `lockprint` | char(1) | ✓ | - | - |
| `maxlevel` | int(11) | ✓ | - | - |
| `minlevel` | int(11) | ✓ | - | - |
| `maxunitperdose` | int(11) | ✓ | - | - |
| `packqty` | int(11) | ✓ | IDX | - |
| `reorderqty` | int(11) | ✓ | - | - |
| `stdprice` | double(22,3) | ✓ | - | - |
| `stdtaken` | varchar(30) | ✓ | - | - |
| `therapeutic` | varchar(150) | ✓ | IDX | - |
| `therapeuticgroup` | varchar(150) | ✓ | IDX | - |
| `default_qty` | int(11) | ✓ | - | - |
| `gpo_code` | varchar(7) | ✓ | - | รหัส gpo |
| `use_right` | char(1) | ✓ | - | - |
| `i_type` | char(1) | ✓ | - | ประเภท i |
| `drugusage` | varchar(30) | ✓ | - | - |
| `high_cost` | varchar(1) | ✓ | - | - |
| `must_paid` | char(1) | ✓ | - | - |
| `alert_level` | tinyint(4) | ✓ | - | - |
| `access_level` | tinyint(4) | ✓ | - | - |
| `sticker_short_name` | varchar(150) | ✓ | - | ชื่อ sticker_short |
| `paidst` | char(2) | ✓ | - | - |
| `antibiotic` | char(1) | ✓ | - | - |
| `displaycolor` | int(11) | ✓ | - | - |
| `empty` | char(1) | ✓ | - | - |
| `empty_text` | text | ✓ | - | - |
| `unitcost` | double(15,3) | ✓ | - | - |
| `gfmiscode` | varchar(14) | ✓ | - | - |
| `ipd_price` | double(15,3) | ✓ | - | - |
| `oldcode` | varchar(20) | ✓ | IDX | - |
| `habit_forming` | char(1) | ✓ | - | - |
| `did` | varchar(27) | ✓ | IDX | - |
| `stock_type` | varchar(4) | ✓ | - | ประเภท stock |
| `price2` | double(15,3) | ✓ | - | ราคา (คอลัมน์ price2) |
| `price3` | double(15,3) | ✓ | - | ราคา (คอลัมน์ price3) |
| `ipd_price2` | double(15,3) | ✓ | - | - |
| `ipd_price3` | double(15,3) | ✓ | - | - |
| `price_lock` | char(1) | ✓ | - | - |
| `pregnancy` | varchar(10) | ✓ | - | - |
| `pharmacology_group1` | int(11) | ✓ | - | - |
| `pharmacology_group2` | int(11) | ✓ | - | - |
| `pharmacology_group3` | int(11) | ✓ | - | - |
| `generic_name` | varchar(250) | ✓ | IDX | ชื่อ generic |
| `show_pregnancy_alert` | char(1) | ✓ | - | - |
| `icode_guid` | varchar(38) | ✓ | IDX | - |
| `na` | char(1) | ✓ | - | - |
| `invcode` | varchar(10) | ✓ | - | - |
| `check_user_group` | char(1) | ✓ | - | - |
| `check_user_name` | char(1) | ✓ | - | ชื่อ check_user |
| `show_notify` | char(1) | ✓ | - | - |
| `show_notify_text` | text | ✓ | - | - |
| `income` | varchar(2) | ✓ | IDX | รายได้ |
| `print_sticker_pq` | char(1) | ✓ | - | - |
| `charge_service_opd` | char(1) | ✓ | - | - |
| `charge_service_ipd` | char(1) | ✓ | - | - |
| `ename` | varchar(150) | ✓ | - | - |
| `dose_type` | char(3) | ✓ | - | ประเภท dose |
| `habit_forming_type` | int(11) | ✓ | - | ประเภท habit_forming |
| `no_discount` | char(1) | ✓ | IDX | - |
| `therapeutic_eng` | varchar(200) | ✓ | - | - |
| `hintcode_eng` | varchar(200) | ✓ | - | - |
| `limit_drugusage` | char(1) | ✓ | - | - |
| `print_sticker_header` | char(1) | ✓ | - | - |
| `calc_idr_qty` | char(1) | ✓ | - | - |
| `item_in_hospital` | char(1) | ✓ | - | - |
| `no_substock` | char(1) | ✓ | - | - |
| `volume_cc` | int(11) | ✓ | - | - |
| `usage_code` | varchar(10) | ✓ | - | รหัส usage |
| `frequency_code` | varchar(10) | ✓ | - | รหัส frequency |
| `time_code` | varchar(10) | ✓ | - | รหัส time |
| `dispense_dose` | double(15,3) | ✓ | - | - |
| `usage_unit_code` | varchar(10) | ✓ | - | รหัส usage_unit |
| `dose_per_units` | double(15,3) | ✓ | - | - |
| `ipd_default_pay` | int(11) | ✓ | - | - |
| `billcode` | varchar(10) | ✓ | - | - |
| `billnumber` | varchar(15) | ✓ | - | - |
| `lockprint_ipd` | char(1) | ✓ | - | - |
| `pregnancy_notify_text` | text | ✓ | - | - |
| `show_breast_feeding_alert` | char(1) | ✓ | - | - |
| `breast_feeding_alert_text` | text | ✓ | - | - |
| `show_child_notify` | char(1) | ✓ | IDX | - |
| `child_notify_text` | text | ✓ | - | - |
| `child_notify_min_age` | int(11) | ✓ | - | - |
| `child_notify_max_age` | int(11) | ✓ | - | - |
| `continuous` | char(1) | ✓ | - | - |
| `substitute_icode` | char(7) | ✓ | - | - |
| `trade_name` | varchar(200) | ✓ | - | ชื่อ trade |
| `use_right_allow` | char(1) | ✓ | - | - |
| `medication_machine_id` | int(11) | ✓ | - | รหัส medication_machine |
| `ipd_medication_machine_id` | int(11) | ✓ | - | รหัส ipd_medication_machine |
| `check_remed_qty` | char(1) | ✓ | - | - |
| `addict` | char(1) | ✓ | - | - |
| `addict_type_id` | int(11) | ✓ | - | รหัส addict_type |
| `medication_machine_opd_no` | int(11) | ✓ | - | เลขที่ medication_machine_opd |
| `medication_machine_ipd_no` | int(11) | ✓ | - | เลขที่ medication_machine_ipd |
| `fp_drug` | char(1) | ✓ | - | - |
| `usage_code_ipd` | varchar(10) | ✓ | - | - |
| `dispense_dose_ipd` | double(15,3) | ✓ | - | - |
| `usage_unit_code_ipd` | varchar(10) | ✓ | - | - |
| `frequency_code_ipd` | varchar(10) | ✓ | - | - |
| `time_code_ipd` | varchar(10) | ✓ | - | - |
| `print_ipd_injection_sticker` | char(1) | ✓ | - | - |
| `provis_medication_unit_code` | varchar(10) | ✓ | - | รหัส provis_medication_unit |
| `hos_guid` | varchar(38) | ✓ | - | - |
| `sks_product_category_id` | int(11) | ✓ | - | รหัส sks_product_category |
| `sks_clain_control_type_id` | int(11) | ✓ | - | รหัส sks_clain_control_type |
| `sks_drug_code` | varchar(25) | ✓ | - | รหัส sks_drug |
| `sks_dfs_code` | varchar(50) | ✓ | - | รหัส sks_dfs |
| `sks_dfs_text` | varchar(150) | ✓ | - | - |
| `sks_reimb_price` | double(15,3) | ✓ | - | - |
| `hos_guid_ext` | varchar(64) | ✓ | IDX | - |
| `check_druginteraction_history` | char(1) | ✓ | IDX | - |
| `check_druginteraction_history_day` | int(11) | ✓ | - | - |
| `nhso_adp_type_id` | int(11) | ✓ | - | รหัส nhso_adp_type |
| `nhso_adp_code` | varchar(15) | ✓ | - | รหัส nhso_adp |
| `sks_claim_control_type_id` | int(11) | ✓ | - | รหัส sks_claim_control_type |
| `begin_date` | date | ✓ | - | วันที่ begin |
| `finish_date` | date | ✓ | - | วันที่ finish |
| `name_pr` | varchar(100) | ✓ | - | - |
| `name_eng` | varchar(100) | ✓ | - | - |
| `capacity_name` | varchar(100) | ✓ | - | ชื่อ capacity |
| `finish_reason` | varchar(100) | ✓ | - | - |
| `extra_unitcost` | double(15,3) | ✓ | - | - |
| `drug_control_type_id` | int(11) | ✓ | - | รหัส drug_control_type |
| `name_print` | varchar(100) | ✓ | - | - |
| `active_ingredient_mg` | double(15,3) | ✓ | - | - |
| `no_order_g6pd` | char(1) | ✓ | - | - |
| `gender_check` | char(1) | ✓ | - | - |
| `no_order_gender` | char(1) | ✓ | - | - |
| `max_qty` | int(11) | ✓ | - | - |
| `prefer_opd_usage_code` | char(1) | ✓ | - | รหัส prefer_opd_usage |
| `capacity_qty` | double(15,3) | ✓ | - | - |
| `need_order_reason` | char(1) | ✓ | - | - |
| `drugitems_due_type_id` | int(11) | ✓ | - | รหัส drugitems_due_type |
| `drugeval_head_id` | int(11) | ✓ | - | รหัส drugeval_head |
| `light_protect` | char(1) | ✓ | - | - |
| `tpu_code_list` | varchar(200) | ✓ | - | - |
| `inv_map_update` | char(1) | ✓ | - | - |
| `special_advice_text` | text | ✓ | - | - |
| `precaution_advice_text` | text | ✓ | - | - |
| `contra_advice_text` | text | ✓ | - | - |
| `storage_advice_text` | text | ✓ | - | - |
| `qr_code_url` | varchar(200) | ✓ | - | - |
| `vat_percent` | double(15,3) | ✓ | - | - |
| `acc_regist` | char(1) | ✓ | - | - |
| `use_paidst` | char(1) | ✓ | - | - |
| `thai_name` | varchar(200) | ✓ | - | ชื่อ thai |
| `fwf_item_id` | int(11) | ✓ | - | รหัส fwf_item |
| `drugitems_em1_id` | int(11) | ✓ | - | รหัส drugitems_em1 |
| `drugitems_em2_id` | int(11) | ✓ | - | รหัส drugitems_em2 |
| `drugitems_em3_id` | int(11) | ✓ | - | รหัส drugitems_em3 |
| `drugitems_em4_id` | int(11) | ✓ | - | รหัส drugitems_em4 |
| `tmt_tp_code` | varchar(10) | ✓ | - | รหัส tmt_tp |
| `tmt_gp_code` | varchar(10) | ✓ | - | รหัส tmt_gp |
| `limit_pttype` | char(1) | ✓ | - | - |
| `noshow_narcotic` | char(1) | ✓ | - | - |
| `medication_machine_flag` | char(1) | ✓ | - | สถานะ medication_machine |
| `sks_price` | double(15,3) | ✓ | - | - |
| `print_sticker_by_frequency` | char(1) | ✓ | - | - |
| `print_sticker_pq_ipd` | char(1) | ✓ | - | - |
| `sub_income` | varchar(3) | ✓ | - | - |
| `prefer_ipd_usage_code` | char(1) | ✓ | - | รหัส prefer_ipd_usage |
| `default_qty_ipd` | int(11) | ✓ | - | - |
| `max_qty_ipd` | int(11) | ✓ | - | - |
| `drugusage_ipd` | varchar(30) | ✓ | - | - |
| `no_popup_ipd_reason` | char(1) | ✓ | - | - |
| `specprep` | varchar(10) | ✓ | - | - |
| `med_dose_calc_type_id` | int(11) | ✓ | - | รหัส med_dose_calc_type |
| `send_line_notify` | char(1) | ✓ | - | - |
| `show_qrcode_trade` | char(1) | ✓ | - | - |
| `warn_g6pd` | char(1) | ✓ | - | - |
| `ipd_rx_freq_day` | int(11) | ✓ | - | - |
| `displaycolor_focus` | int(11) | ✓ | - | - |
| `last_update` | datetime | ✓ | - | - |
| `no_remed` | char(1) | ✓ | - | - |
| `force_round_qty` | char(1) | ✓ | - | - |
| `atc_code` | varchar(10) | ✓ | - | รหัส atc |
| `state_item_id` | int(11) | ✓ | - | รหัส state_item |
| `multiply_charge_service` | char(1) | ✓ | - | - |
| `csmbs_claim_cat` | varchar(1) | ✓ | - | - |
| `simb_2005` | varchar(10) | ✓ | - | - |
| `sks_rev_date` | date | ✓ | - | วันที่ sks_rev |
| `sct_unit_code` | varchar(20) | ✓ | - | รหัส sct_unit |
| `print_label` | char(1) | ✓ | - | - |

---

### drugitems_

**คำอธิบาย:** ยา (ที่เกี่ยวข้อง)

**จำนวนแถว:** 874

**Engine:** InnoDB

**Primary Key:** `check_druginteraction_history_day`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `icode` | varchar(21) | ✓ | - | - |
| `name` | varchar(300) | ✓ | - | ชื่อ |
| `strength` | varchar(45) | ✓ | - | - |
| `units` | varchar(150) | ✓ | - | - |
| `unitprice` | double | ✓ | - | ราคาต่อหน่วย |
| `dosageform` | varchar(300) | ✓ | - | - |
| `criticalpriority` | int(11) | ✓ | - | - |
| `drugaccount` | varchar(6) | ✓ | - | - |
| `drugcategory` | varchar(450) | ✓ | - | - |
| `drugnote` | varchar(450) | ✓ | - | - |
| `hintcode` | varchar(12) | ✓ | - | - |
| `istatus` | char(3) | ✓ | - | - |
| `lastupdatestdprice` | datetime | ✓ | - | - |
| `lockprice` | char(3) | ✓ | - | - |
| `lockprint` | char(3) | ✓ | - | - |
| `maxlevel` | int(11) | ✓ | - | - |
| `minlevel` | int(11) | ✓ | - | - |
| `maxunitperdose` | int(11) | ✓ | - | - |
| `packqty` | int(11) | ✓ | - | - |
| `reorderqty` | int(11) | ✓ | - | - |
| `stdprice` | double | ✓ | - | - |
| `stdtaken` | varchar(90) | ✓ | - | - |
| `therapeutic` | varchar(450) | ✓ | - | - |
| `therapeuticgroup` | varchar(450) | ✓ | - | - |
| `default_qty` | int(11) | ✓ | - | - |
| `gpo_code` | varchar(21) | ✓ | - | รหัส gpo |
| `use_right` | char(3) | ✓ | - | - |
| `i_type` | char(3) | ✓ | - | ประเภท i |
| `drugusage` | varchar(90) | ✓ | - | - |
| `high_cost` | char(3) | ✓ | - | - |
| `must_paid` | char(3) | ✓ | - | - |
| `alert_level` | tinyint(4) | ✓ | - | - |
| `access_level` | tinyint(4) | ✓ | - | - |
| `sticker_short_name` | varchar(450) | ✓ | - | ชื่อ sticker_short |
| `paidst` | char(6) | ✓ | - | - |
| `antibiotic` | char(3) | ✓ | - | - |
| `displaycolor` | int(11) | ✓ | - | - |
| `empty` | char(3) | ✓ | - | - |
| `empty_text` | blob | ✓ | - | - |
| `unitcost` | double | ✓ | - | - |
| `gfmiscode` | varchar(42) | ✓ | - | - |
| `ipd_price` | double | ✓ | - | - |
| `oldcode` | varchar(60) | ✓ | - | - |
| `habit_forming` | char(3) | ✓ | - | - |
| `did` | varchar(81) | ✓ | - | - |
| `stock_type` | varchar(12) | ✓ | - | ประเภท stock |
| `price2` | double | ✓ | - | ราคา (คอลัมน์ price2) |
| `price3` | double | ✓ | - | ราคา (คอลัมน์ price3) |
| `ipd_price2` | double | ✓ | - | - |
| `ipd_price3` | double | ✓ | - | - |
| `price_lock` | char(3) | ✓ | - | - |
| `pregnancy` | varchar(30) | ✓ | - | - |
| `pharmacology_group1` | int(11) | ✓ | - | - |
| `pharmacology_group2` | int(11) | ✓ | - | - |
| `pharmacology_group3` | int(11) | ✓ | - | - |
| `generic_name` | varchar(750) | ✓ | - | ชื่อ generic |
| `show_pregnancy_alert` | char(3) | ✓ | - | - |
| `icode_guid` | varchar(114) | ✓ | - | - |
| `na` | char(3) | ✓ | - | - |
| `invcode` | varchar(30) | ✓ | - | - |
| `check_user_group` | char(3) | ✓ | - | - |
| `check_user_name` | char(3) | ✓ | - | ชื่อ check_user |
| `show_notify` | char(3) | ✓ | - | - |
| `show_notify_text` | blob | ✓ | - | - |
| `income` | char(6) | ✓ | - | รายได้ |
| `print_sticker_pq` | char(3) | ✓ | - | - |
| `charge_service_opd` | char(3) | ✓ | - | - |
| `charge_service_ipd` | char(3) | ✓ | - | - |
| `ename` | varchar(450) | ✓ | - | - |
| `dose_type` | char(9) | ✓ | - | ประเภท dose |
| `habit_forming_type` | int(11) | ✓ | - | ประเภท habit_forming |
| `no_discount` | char(3) | ✓ | - | - |
| `therapeutic_eng` | varchar(600) | ✓ | - | - |
| `hintcode_eng` | varchar(600) | ✓ | - | - |
| `limit_drugusage` | char(3) | ✓ | - | - |
| `print_sticker_header` | char(3) | ✓ | - | - |
| `calc_idr_qty` | char(3) | ✓ | - | - |
| `item_in_hospital` | char(3) | ✓ | - | - |
| `no_substock` | char(3) | ✓ | - | - |
| `volume_cc` | int(11) | ✓ | - | - |
| `usage_code` | varchar(30) | ✓ | - | รหัส usage |
| `frequency_code` | varchar(30) | ✓ | - | รหัส frequency |
| `time_code` | varchar(30) | ✓ | - | รหัส time |
| `dispense_dose` | double | ✓ | - | - |
| `usage_unit_code` | varchar(30) | ✓ | - | รหัส usage_unit |
| `dose_per_units` | double | ✓ | - | - |
| `ipd_default_pay` | int(11) | ✓ | - | - |
| `billcode` | varchar(30) | ✓ | - | - |
| `billnumber` | varchar(45) | ✓ | - | - |
| `lockprint_ipd` | char(3) | ✓ | - | - |
| `pregnancy_notify_text` | blob | ✓ | - | - |
| `show_breast_feeding_alert` | char(3) | ✓ | - | - |
| `breast_feeding_alert_text` | blob | ✓ | - | - |
| `show_child_notify` | char(3) | ✓ | - | - |
| `child_notify_text` | blob | ✓ | - | - |
| `child_notify_min_age` | int(11) | ✓ | - | - |
| `child_notify_max_age` | int(11) | ✓ | - | - |
| `continuous` | char(3) | ✓ | - | - |
| `substitute_icode` | char(21) | ✓ | - | - |
| `trade_name` | varchar(600) | ✓ | - | ชื่อ trade |
| `use_right_allow` | char(3) | ✓ | - | - |
| `medication_machine_id` | int(11) | ✓ | - | รหัส medication_machine |
| `ipd_medication_machine_id` | int(11) | ✓ | - | รหัส ipd_medication_machine |
| `check_remed_qty` | char(3) | ✓ | - | - |
| `addict` | char(3) | ✓ | - | - |
| `addict_type_id` | int(11) | ✓ | - | รหัส addict_type |
| `medication_machine_opd_no` | int(11) | ✓ | - | เลขที่ medication_machine_opd |
| `medication_machine_ipd_no` | int(11) | ✓ | - | เลขที่ medication_machine_ipd |
| `fp_drug` | char(3) | ✓ | - | - |
| `usage_code_ipd` | varchar(30) | ✓ | - | - |
| `dispense_dose_ipd` | double | ✓ | - | - |
| `usage_unit_code_ipd` | varchar(30) | ✓ | - | - |
| `frequency_code_ipd` | varchar(30) | ✓ | - | - |
| `time_code_ipd` | varchar(30) | ✓ | - | - |
| `print_ipd_injection_sticker` | char(3) | ✓ | - | - |
| `provis_medication_unit_code` | varchar(30) | ✓ | - | รหัส provis_medication_unit |
| `hos_guid` | varchar(114) | ✓ | - | - |
| `sks_product_category_id` | int(11) | ✓ | - | รหัส sks_product_category |
| `sks_clain_control_type_id` | int(11) | ✓ | - | รหัส sks_clain_control_type |
| `sks_drug_code` | varchar(75) | ✓ | - | รหัส sks_drug |
| `sks_dfs_code` | varchar(150) | ✓ | - | รหัส sks_dfs |
| `sks_dfs_text` | varchar(450) | ✓ | - | - |
| `sks_reimb_price` | double | ✓ | - | - |
| `hos_guid_ext` | varchar(192) | ✓ | - | - |
| `check_druginteraction_history` | char(3) | ✓ | - | - |
| `check_druginteraction_history_day` | int(11) | ✗ | PK | - |

---

### interact

**คำอธิบาย:** -

**จำนวนแถว:** 399

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `meditem1` | varchar(7) | ✗ | IDX | - |
| `name1` | varchar(50) | ✗ | - | ชื่อ (คอลัมน์ name1) |
| `meditem2` | varchar(7) | ✗ | IDX | - |
| `name2` | varchar(50) | ✗ | - | ชื่อ (คอลัมน์ name2) |
| `intertype` | varchar(1) | ✗ | - | - |
| `detail` | longtext | ✗ | - | - |
| `manage` | longtext | ✗ | - | - |
| `codeonset` | varchar(1) | ✗ | - | - |
| `codesever` | varchar(1) | ✗ | - | - |
| `codedoc` | varchar(1) | ✗ | - | - |
| `codesignlv` | varchar(1) | ✗ | - | - |
| `dmech` | longtext | ✗ | - | - |
| `ddisscuss` | longtext | ✗ | - | - |
| `reference` | varchar(150) | ✗ | - | - |
| `upduser` | varchar(5) | ✗ | - | - |
| `srvdttm` | datetime | ✗ | - | - |

---

### interactdb

**คำอธิบาย:** -

**จำนวนแถว:** 8,768

**Engine:** InnoDB

**Primary Key:** `intactID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `intactID` | int(11) | ✗ | PK | - |
| `namemed1` | varchar(200) | ✓ | - | - |
| `namemed2` | varchar(200) | ✓ | - | - |
| `codesignlv` | varchar(1) | ✓ | - | - |
| `codeonset` | varchar(1) | ✓ | - | - |
| `codesever` | varchar(1) | ✓ | - | - |
| `codedoc` | varchar(1) | ✓ | - | - |
| `deffect` | longtext | ✓ | - | - |
| `dmech` | longtext | ✓ | - | - |
| `dmana` | longtext | ✓ | - | - |
| `ddisscuss` | longtext | ✓ | - | - |
| `dbiblio` | longtext | ✓ | - | - |
| `reference` | varchar(150) | ✓ | - | - |
| `update` | date | ✓ | - | - |
| `d_date` | date | ✓ | - | วันที่ d |

---

### iprsc

**คำอธิบาย:** -

**จำนวนแถว:** 887,412

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `prscno` | int(11) | ✗ | IDX | - |
| `namedrug` | varchar(50) | ✗ | - | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `prscdate` | date | ✗ | IDX | - |
| `prsctime` | int(4) | ✗ | IDX | - |
| `meditem` | varchar(7) | ✗ | - | - |
| `medusage` | varchar(10) | ✗ | - | - |
| `qty` | decimal(9,2) | ✗ | - | จำนวน |
| `xdoseno` | int(15) | ✗ | - | - |
| `lcontinue` | tinyint(1) | ✗ | - | - |
| `offdate` | date | ✗ | - | - |
| `offtime` | varchar(60) | ✗ | - | - |
| `admtime` | varchar(64) | ✗ | - | - |

---

### l_drug_rdu

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 53,875

**Engine:** InnoDB

**Primary Key:** `DIDSTD, CHK_NLEM`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `DIDSTD` | varchar(24) | ✗ | PK | - |
| `DIDSTD19DI` | varchar(19) | ✓ | IDX | - |
| `GENERIC_NAME` | varchar(255) | ✓ | - | ชื่อ generic |
| `DSFSHT` | varchar(255) | ✓ | - | - |
| `STHAMT` | varchar(255) | ✓ | - | - |
| `STHUNT` | varchar(255) | ✓ | - | - |
| `BNF_CLASS` | varchar(255) | ✓ | - | - |
| `BNF_SUBCLA` | varchar(255) | ✓ | - | - |
| `ATC_CLASS` | varchar(255) | ✓ | - | - |
| `DDD` | int(11) | ✓ | - | - |
| `UNITDDD` | varchar(10) | ✓ | - | - |
| `CHK_NLEM` | varchar(1) | ✗ | PK | - |
| `CHK_ANB` | varchar(1) | ✓ | - | - |
| `CHK_HTN` | varchar(1) | ✓ | - | - |
| `CHK_INHALER` | varchar(1) | ✓ | - | - |
| `CHK_LIPID` | varchar(1) | ✓ | - | - |
| `CHK_NSAID` | varchar(1) | ✓ | - | - |
| `CHK_NSAID_EAT` | varchar(1) | ✓ | - | - |
| `CHK_PPI` | varchar(1) | ✓ | - | - |
| `CHK_RISPERSERTRAL` | varchar(1) | ✓ | - | - |
| `CHK_TTM_PAY` | varchar(1) | ✓ | - | - |
| `CHK_J2` | varchar(1) | ✓ | - | - |
| `CHK_GLIBEN` | varchar(1) | ✓ | - | - |
| `CHK_MFM` | varchar(1) | ✓ | - | - |
| `CHK_ASA` | varchar(1) | ✓ | - | - |
| `CHK_ICS` | varchar(1) | ✓ | - | - |
| `CHK_GER` | varchar(1) | ✓ | - | - |
| `CHK_PRG` | varchar(1) | ✓ | - | - |
| `CHK_PED` | varchar(1) | ✓ | - | - |
| `CHK_8ITEMS` | varchar(1) | ✓ | - | - |
| `CHK_GFR` | int(3) | ✗ | - | - |

---

### l_drugflag

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 4

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codeflag` | varchar(1) | ✗ | - | - |
| `nameflag` | varchar(2) | ✗ | - | - |

---

### l_drugs

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 82,329

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `STD_CODE` | varchar(24) | ✓ | IDX | รหัส std |
| `TRADENAME` | varchar(255) | ✓ | IDX | - |
| `DRUGNAME` | varchar(255) | ✓ | - | ชื่อยา |
| `STRENGTH` | varchar(255) | ✓ | - | - |
| `DGDSFNM` | varchar(255) | ✓ | - | - |
| `UNIT` | varchar(255) | ✓ | - | หน่วย |
| `COMP` | varchar(255) | ✓ | - | - |
| `REGNO` | varchar(255) | ✓ | - | - |

---

### l_drugs_unit

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 35

**Engine:** MyISAM

**Primary Key:** `CODE`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `CODE` | varchar(3) | ✗ | PK | รหัส |
| `CODE_DESC` | varchar(200) | ✓ | - | - |

---

### l_rxdrughiv

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rxcode` | varchar(2) | ✓ | - | ใบสั่งยา code |
| `namerx` | varchar(40) | ✓ | - | - |

---

### l_tmtdrug

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 31,463

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `TMTID` | varchar(24) | ✓ | - | - |
| `FSN` | varchar(255) | ✓ | - | - |
| `MANUFACTURER` | varchar(255) | ✓ | - | - |
| `CHANGEDATE` | varchar(50) | ✓ | - | - |

---

### l_tmtdrug1

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 25,104

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `TMTID` | varchar(24) | ✓ | - | - |
| `FSN` | varchar(255) | ✓ | - | - |
| `MANUFACTURER` | varchar(255) | ✓ | - | - |
| `CHANGEDATE` | varchar(40) | ✓ | - | - |

---

### med2con

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `meditem` | varchar(7) | ✗ | IDX | - |

---

### med_edtype

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 7

**Engine:** MyISAM

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codeed` | varchar(1) | ✗ | IDX | - |
| `nameed` | varchar(80) | ✗ | - | - |

---

### medgrp

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 34

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namemedgrp` | varchar(200) | ✓ | - | - |
| `medgrp` | varchar(3) | ✗ | - | - |

---

### meditem

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 1,676

**Engine:** MyISAM

**Primary Key:** `meditem`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ort` | varchar(1) | ✗ | - | - |
| `meditem` | varchar(7) | ✗ | PK | - |
| `name` | varchar(50) | ✗ | IDX | ชื่อ |
| `pres_nm` | varchar(50) | ✗ | IDX | - |
| `pres_unt` | varchar(20) | ✗ | - | - |
| `ed` | tinyint(1) | ✗ | - | - |
| `medtype` | varchar(7) | ✗ | - | - |
| `medunit` | varchar(20) | ✗ | - | - |
| `medform` | varchar(7) | ✗ | - | - |
| `medgrp` | varchar(3) | ✓ | - | - |
| `phmdlr` | varchar(8) | ✗ | - | - |
| `packqty` | int(5) | ✗ | - | - |
| `storage` | varchar(7) | ✗ | - | - |
| `medusage` | varchar(10) | ✓ | - | - |
| `cost` | decimal(8,2) | ✗ | - | - |
| `price` | decimal(8,2) | ✗ | - | ราคา |
| `chrg_rat` | decimal(4,2) | ✗ | - | - |
| `pack_chg` | int(4) | ✗ | - | - |
| `salerate` | decimal(9,2) | ✗ | - | - |
| `maxrfnd` | decimal(9,2) | ✗ | - | - |
| `maxdscnt` | decimal(9,2) | ✗ | - | - |
| `aux_lbl1` | varchar(3) | ✗ | - | - |
| `aux_lbl2` | varchar(3) | ✗ | - | - |
| `aux_lbl3` | varchar(3) | ✗ | - | - |
| `nameth` | varchar(60) | ✗ | - | - |
| `pres_ono` | varchar(1) | ✗ | - | - |
| `pck_dsp` | tinyint(1) | ✗ | - | - |
| `pregnancy` | varchar(1) | ✗ | - | - |
| `nu` | varchar(1) | ✗ | - | - |
| `gp` | varchar(1) | ✗ | - | - |
| `ob` | varchar(1) | ✗ | - | - |
| `su` | varchar(1) | ✗ | - | - |
| `md` | varchar(1) | ✗ | - | - |
| `pd` | varchar(1) | ✗ | - | - |
| `ey` | varchar(1) | ✗ | - | - |
| `en` | varchar(1) | ✗ | - | - |
| `ur` | varchar(1) | ✗ | - | - |
| `ph` | varchar(1) | ✗ | - | - |
| `dt` | varchar(1) | ✗ | - | - |
| `pt` | varchar(1) | ✗ | - | ผู้ป่วย  |
| `jt` | varchar(1) | ✗ | - | - |
| `ptright` | text | ✗ | - | ผู้ป่วย right |
| `highalert` | tinyint(1) | ✗ | - | - |
| `mgperkg` | varchar(15) | ✗ | - | - |
| `maxdose` | int(6) | ✗ | - | - |
| `strength` | decimal(9,2) | ✓ | - | - |
| `stdcode` | varchar(24) | ✗ | - | - |
| `tallman` | varchar(50) | ✗ | - | - |
| `type` | varchar(1) | ✗ | - | ประเภท |
| `tmtype` | varchar(1) | ✗ | - | - |
| `etype` | varchar(100) | ✗ | - | - |
| `edtype` | varchar(1) | ✗ | - | - |
| `note` | varchar(200) | ✗ | - | บันทึก |
| `chknote` | varchar(1) | ✗ | - | - |
| `medallow` | varchar(1) | ✗ | - | - |
| `pharadd` | varchar(5) | ✗ | - | - |
| `pharupd` | varchar(5) | ✗ | - | - |
| `dateupd` | date | ✗ | - | - |
| `medright` | varchar(200) | ✗ | - | - |
| `codeinst` | varchar(10) | ✓ | - | - |
| `price_uc` | decimal(8,2) | ✓ | - | - |
| `price_sc` | decimal(8,2) | ✓ | - | - |
| `price_ss` | decimal(8,2) | ✓ | - | - |
| `tmtid` | varchar(24) | ✗ | - | - |
| `specprep` | varchar(4) | ✗ | - | - |
| `updateflag` | varchar(1) | ✗ | - | - |
| `updatepric` | date | ✗ | - | - |
| `tradename` | varchar(200) | ✗ | - | - |
| `productcat` | varchar(2) | ✗ | - | - |
| `allowtmt` | varchar(1) | ✗ | - | - |
| `chkstock` | varchar(1) | ✗ | - | - |
| `statusprt` | varchar(1) | ✗ | - | - |
| `codeed` | varchar(1) | ✗ | - | - |
| `phmmnf` | varchar(7) | ✗ | - | - |
| `jr` | varchar(1) | ✓ | - | - |
| `fm` | varchar(1) | ✓ | - | - |
| `clnotallow` | varchar(200) | ✓ | - | - |
| `ptt2pay` | varchar(200) | ✓ | - | ผู้ป่วย t2pay |
| `medclass` | varchar(100) | ✓ | - | - |
| `serialno` | varchar(200) | ✓ | - | - |
| `medsubgr` | varchar(3) | ✓ | - | - |
| `medssubgr` | varchar(3) | ✓ | - | - |
| `mdn` | varchar(1) | ✓ | - | - |
| `ans` | varchar(1) | ✓ | - | - |
| `pcutype` | varchar(1) | ✓ | - | - |
| `pcuclass` | varchar(5) | ✓ | - | - |
| `phmdir` | varchar(7) | ✓ | - | - |
| `defqty` | int(4) | ✓ | - | - |
| `maxqty` | int(4) | ✓ | - | - |
| `drugstore` | varchar(1) | ✓ | - | - |
| `url_qrcode` | text | ✗ | - | - |
| `ed_rach` | tinyint(1) | ✓ | - | - |
| `pa` | varchar(1) | ✓ | - | - |
| `ep` | varchar(1) | ✓ | - | - |
| `adp_code` | varchar(20) | ✓ | - | รหัส adp |
| `adp_type` | varchar(2) | ✓ | - | ประเภท adp |
| `adp_price` | decimal(10,2) | ✓ | - | - |
| `cr` | enum('') | ✓ | - | - |
| `room1` | varchar(15) | ✓ | - | - |
| `room2` | varchar(15) | ✓ | - | - |
| `room3` | varchar(15) | ✓ | - | - |
| `room4` | varchar(15) | ✓ | - | - |
| `room5` | varchar(15) | ✓ | - | - |

---

### meditem_copy1

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 1,400

**Engine:** MyISAM

**Primary Key:** `meditem`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ort` | varchar(1) | ✗ | - | - |
| `meditem` | varchar(7) | ✗ | PK | - |
| `name` | varchar(50) | ✗ | IDX | ชื่อ |
| `pres_nm` | varchar(50) | ✗ | IDX | - |
| `pres_unt` | varchar(20) | ✗ | - | - |
| `ed` | tinyint(1) | ✗ | - | - |
| `medtype` | varchar(7) | ✗ | - | - |
| `medunit` | varchar(20) | ✗ | - | - |
| `medform` | varchar(7) | ✗ | - | - |
| `medgrp` | varchar(3) | ✓ | - | - |
| `phmdlr` | varchar(8) | ✗ | - | - |
| `packqty` | int(5) | ✗ | - | - |
| `storage` | varchar(7) | ✗ | - | - |
| `medusage` | varchar(10) | ✓ | - | - |
| `cost` | decimal(8,2) | ✗ | - | - |
| `price` | decimal(8,2) | ✗ | - | ราคา |
| `chrg_rat` | decimal(4,2) | ✗ | - | - |
| `pack_chg` | int(4) | ✗ | - | - |
| `salerate` | decimal(9,2) | ✗ | - | - |
| `maxrfnd` | decimal(9,2) | ✗ | - | - |
| `maxdscnt` | decimal(9,2) | ✗ | - | - |
| `aux_lbl1` | varchar(3) | ✗ | - | - |
| `aux_lbl2` | varchar(3) | ✗ | - | - |
| `aux_lbl3` | varchar(3) | ✗ | - | - |
| `nameth` | varchar(60) | ✗ | - | - |
| `pres_ono` | varchar(1) | ✗ | - | - |
| `pck_dsp` | tinyint(1) | ✗ | - | - |
| `pregnancy` | varchar(1) | ✗ | - | - |
| `nu` | varchar(1) | ✗ | - | - |
| `gp` | varchar(1) | ✗ | - | - |
| `ob` | varchar(1) | ✗ | - | - |
| `su` | varchar(1) | ✗ | - | - |
| `md` | varchar(1) | ✗ | - | - |
| `pd` | varchar(1) | ✗ | - | - |
| `ey` | varchar(1) | ✗ | - | - |
| `en` | varchar(1) | ✗ | - | - |
| `ur` | varchar(1) | ✗ | - | - |
| `ptright` | varchar(200) | ✗ | - | ผู้ป่วย right |
| `highalert` | tinyint(1) | ✗ | - | - |
| `mgperkg` | varchar(15) | ✗ | - | - |
| `maxdose` | int(6) | ✗ | - | - |
| `strength` | decimal(9,2) | ✓ | - | - |
| `stdcode` | varchar(24) | ✗ | - | - |
| `tallman` | varchar(50) | ✗ | - | - |
| `ph` | varchar(1) | ✗ | - | - |
| `dt` | varchar(1) | ✗ | - | - |
| `pt` | varchar(1) | ✗ | - | ผู้ป่วย  |
| `jt` | varchar(1) | ✗ | - | - |
| `type` | varchar(1) | ✗ | - | ประเภท |
| `tmtype` | varchar(1) | ✗ | - | - |
| `etype` | varchar(100) | ✗ | - | - |
| `edtype` | varchar(1) | ✗ | - | - |
| `note` | varchar(200) | ✗ | - | บันทึก |
| `chknote` | varchar(1) | ✗ | - | - |
| `medallow` | varchar(1) | ✗ | - | - |
| `pharadd` | varchar(5) | ✗ | - | - |
| `pharupd` | varchar(5) | ✗ | - | - |
| `dateupd` | date | ✗ | - | - |
| `medright` | varchar(200) | ✗ | - | - |
| `codeinst` | varchar(10) | ✓ | - | - |
| `price_uc` | decimal(8,2) | ✓ | - | - |
| `price_sc` | decimal(8,2) | ✓ | - | - |
| `price_ss` | decimal(8,2) | ✓ | - | - |
| `tmtid` | varchar(24) | ✗ | - | - |
| `specprep` | varchar(4) | ✗ | - | - |
| `updateflag` | varchar(1) | ✗ | - | - |
| `updatepric` | date | ✗ | - | - |
| `tradename` | varchar(200) | ✗ | - | - |
| `productcat` | varchar(2) | ✗ | - | - |
| `allowtmt` | varchar(1) | ✗ | - | - |
| `chkstock` | varchar(1) | ✗ | - | - |
| `statusprt` | varchar(1) | ✗ | - | - |
| `codeed` | varchar(1) | ✗ | - | - |
| `phmmnf` | varchar(7) | ✗ | - | - |
| `jr` | varchar(1) | ✓ | - | - |
| `fm` | varchar(1) | ✓ | - | - |
| `clnotallow` | varchar(200) | ✓ | - | - |
| `ptt2pay` | varchar(200) | ✓ | - | ผู้ป่วย t2pay |
| `medclass` | varchar(100) | ✓ | - | - |
| `serialno` | varchar(200) | ✓ | - | - |
| `medsubgr` | varchar(3) | ✓ | - | - |
| `medssubgr` | varchar(3) | ✓ | - | - |
| `mdn` | varchar(1) | ✓ | - | - |
| `ans` | varchar(1) | ✓ | - | - |
| `pcutype` | varchar(1) | ✓ | - | - |
| `pcuclass` | varchar(5) | ✓ | - | - |
| `phmdir` | varchar(7) | ✓ | - | - |
| `defqty` | int(4) | ✓ | - | - |
| `maxqty` | int(4) | ✓ | - | - |
| `drugstore` | varchar(1) | ✓ | - | - |
| `url_qrcode` | text | ✗ | - | - |
| `ed_rach` | tinyint(1) | ✓ | - | - |

---

### meditemv

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 1,930

**Engine:** MyISAM

**Primary Key:** `meditem`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ort` | varchar(1) | ✗ | - | - |
| `meditem` | varchar(7) | ✗ | PK | - |
| `name` | varchar(50) | ✗ | IDX | ชื่อ |
| `pres_nm` | varchar(50) | ✗ | IDX | - |
| `type` | varchar(1) | ✗ | - | ประเภท |
| `pres_unt` | varchar(7) | ✗ | - | - |
| `ed` | tinyint(1) | ✗ | - | - |
| `medtype` | varchar(7) | ✗ | - | - |
| `medunit` | varchar(7) | ✗ | - | - |
| `medform` | varchar(7) | ✗ | - | - |
| `medgrp` | varchar(7) | ✗ | - | - |
| `phmmnf` | varchar(7) | ✗ | - | - |
| `phmdir` | varchar(7) | ✗ | - | - |
| `packqty` | int(5) | ✗ | - | - |
| `storage` | varchar(7) | ✗ | - | - |
| `medusage` | varchar(5) | ✗ | - | - |
| `cost` | decimal(8,2) | ✗ | - | - |
| `price` | decimal(8,2) | ✗ | - | ราคา |
| `chrg_rat` | decimal(4,2) | ✗ | - | - |
| `pack_chg` | int(4) | ✗ | - | - |
| `salerate` | decimal(9,2) | ✗ | - | - |
| `maxrfnd` | decimal(9,2) | ✗ | - | - |
| `maxdscnt` | decimal(9,2) | ✗ | - | - |
| `aux_lbl1` | varchar(3) | ✗ | - | - |
| `aux_lbl2` | varchar(3) | ✗ | - | - |
| `pres_ono` | varchar(1) | ✗ | - | - |
| `pck_dsp` | tinyint(1) | ✗ | - | - |
| `pregnancy` | varchar(1) | ✗ | - | - |
| `gp` | varchar(1) | ✗ | - | - |
| `ob` | varchar(1) | ✗ | - | - |
| `su` | varchar(1) | ✗ | - | - |
| `md` | varchar(1) | ✗ | - | - |
| `pd` | varchar(1) | ✗ | - | - |
| `ey` | varchar(1) | ✗ | - | - |
| `en` | varchar(1) | ✗ | - | - |
| `ur` | varchar(1) | ✗ | - | - |
| `ptright` | varchar(200) | ✗ | - | ผู้ป่วย right |
| `nu` | varchar(1) | ✗ | - | - |
| `highalert` | tinyint(1) | ✗ | - | - |
| `mgperkg` | varchar(15) | ✗ | - | - |
| `maxdose` | int(6) | ✗ | - | - |
| `strength` | decimal(9,2) | ✗ | - | - |
| `clnotallow` | varchar(200) | ✗ | - | - |
| `ptt2pay` | varchar(200) | ✗ | - | ผู้ป่วย t2pay |
| `jr` | varchar(1) | ✗ | - | - |
| `stdcode` | varchar(24) | ✗ | - | - |
| `ph` | varchar(1) | ✗ | - | - |
| `tallman` | varchar(50) | ✗ | - | - |
| `dt` | varchar(1) | ✗ | - | - |
| `jt` | varchar(1) | ✗ | - | - |
| `pt` | varchar(1) | ✗ | - | ผู้ป่วย  |
| `tmtype` | varchar(1) | ✗ | - | - |
| `etype` | varchar(100) | ✗ | - | - |
| `edtype` | varchar(1) | ✗ | - | - |
| `note` | varchar(200) | ✗ | - | บันทึก |
| `chknote` | varchar(1) | ✗ | - | - |
| `medallow` | varchar(1) | ✗ | - | - |
| `pharadd` | varchar(5) | ✗ | - | - |
| `pharupd` | varchar(5) | ✗ | - | - |
| `dateupd` | date | ✗ | - | - |
| `medright` | varchar(200) | ✗ | - | - |
| `codeinst` | varchar(4) | ✗ | - | - |
| `price_uc` | decimal(8,2) | ✗ | - | - |
| `price_sc` | decimal(8,2) | ✗ | - | - |
| `price_ss` | decimal(8,2) | ✗ | - | - |

---

### medreconcile

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 1

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(11) | ✓ | IDX | เลขที่ผู้ป่วย (Hospital Number) |
| `hospname` | varchar(200) | ✓ | - | - |
| `fudate` | date | ✓ | - | - |
| `medname` | varchar(100) | ✓ | - | - |
| `meduse` | varchar(100) | ✓ | - | - |
| `lastdate` | date | ✓ | - | - |
| `register` | varchar(3) | ✓ | - | - |
| `dupdate` | date | ✓ | - | - |

---

### medtb

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `medtb`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `medtb` | varchar(1) | ✗ | PK | - |
| `namemed1` | varchar(100) | ✗ | - | - |
| `namemed2` | varchar(100) | ✗ | - | - |

---

### medusage

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 1,054

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `dosecode` | varchar(10) | ✗ | IDX | - |
| `dosename` | varchar(20) | ✓ | - | - |
| `doseprn1` | varchar(50) | ✗ | - | - |
| `doseprn2` | varchar(50) | ✗ | - | - |
| `medclass` | varchar(100) | ✓ | - | - |
| `qtyperday` | decimal(10,2) | ✓ | - | - |
| `prepack` | int(1) | ✓ | - | - |

---

### ormed

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 73

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `orno` | int(8) | ✗ | IDX | - |
| `medno` | varchar(7) | ✗ | - | - |
| `qty` | int(8) | ✗ | - | จำนวน |
| `company` | varchar(30) | ✗ | - | - |
| `price` | int(11) | ✗ | - | ราคา |

---

### phm_medreconcile

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 73

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(11) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `an` | varchar(8) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `meditem` | varchar(7) | ✓ | - | - |
| `medusage` | varchar(20) | ✓ | - | - |
| `meduse_m` | varchar(100) | ✓ | - | - |
| `hospname` | varchar(200) | ✓ | - | - |
| `reconcile_date` | date | ✓ | - | วันที่ reconcile |
| `recieve_date` | date | ✓ | - | วันที่ recieve |
| `fu_date` | date | ✓ | - | วันที่ fu |

---

### prscdt

**คำอธิบาย:** -

**จำนวนแถว:** 10,698,227

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `prscno` | int(11) | ✗ | IDX | - |
| `nameprscdt` | varchar(50) | ✗ | - | - |
| `meditem` | varchar(7) | ✗ | IDX | - |
| `qty` | decimal(9,2) | ✗ | - | จำนวน |
| `medusage` | varchar(10) | ✗ | - | - |
| `xdoseno` | int(15) | ✗ | - | - |
| `salerate` | decimal(9,2) | ✗ | - | - |
| `charge` | decimal(9,2) | ✗ | - | - |
| `rfndamt` | decimal(9,2) | ✗ | - | - |
| `statusprin` | varchar(1) | ✗ | - | - |
| `ed` | varchar(1) | ✗ | - | - |
| `codeed` | varchar(1) | ✗ | - | - |
| `prtdttm` | datetime | ✗ | - | - |
| `chkshow` | varchar(1) | ✓ | - | - |
| `chk_remed` | varchar(15) | ✓ | - | - |

---

### pt_meded

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 98,485

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `meditem` | varchar(7) | ✗ | - | - |
| `codeed` | varchar(1) | ✗ | - | - |

---

### registertb

**คำอธิบาย:** -

**จำนวนแถว:** 606

**Engine:** InnoDB

**Primary Key:** `tbno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `tbno` | int(11) | ✗ | PK | - |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vstdttm` | datetime | ✗ | - | - |
| `statustb` | varchar(1) | ✗ | - | - |
| `upddate` | date | ✗ | - | - |
| `note` | varchar(40) | ✗ | - | บันทึก |
| `regtbno` | varchar(11) | ✗ | - | - |
| `tumbontb` | varchar(1) | ✗ | - | - |
| `tbcase` | varchar(2) | ✗ | - | - |
| `dctype` | varchar(2) | ✗ | - | - |
| `medtb` | varchar(1) | ✗ | - | - |
| `dchdate` | date | ✗ | - | วันที่จำหน่าย |
| `strdate` | date | ✗ | - | - |
| `othdc` | varchar(40) | ✗ | - | - |
| `othtb` | varchar(40) | ✗ | - | - |
| `othmed` | varchar(40) | ✗ | - | - |

---

### rtnallggrpdt

**คำอธิบาย:** -

**จำนวนแถว:** 41

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rtnno` | int(4) | ✗ | IDX | - |
| `meditem` | varchar(7) | ✗ | - | - |
| `namedrug` | varchar(50) | ✗ | - | - |

---

### rtnidt

**คำอธิบาย:** -

**จำนวนแถว:** 107

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namertnidt` | varchar(50) | ✗ | - | - |
| `rtnno` | int(4) | ✗ | IDX | - |
| `meditem` | varchar(7) | ✗ | - | - |
| `medusage` | varchar(5) | ✗ | - | - |
| `doseprn1` | varchar(50) | ✗ | - | - |
| `qty` | int(9) | ✗ | - | จำนวน |

---

### service_medusage

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `iprsc_id` | int(11) | ✓ | IDX | รหัส iprsc |
| `prscdt_id` | int(11) | ✓ | IDX | รหัส prscdt |
| `med_usage_name` | text | ✓ | - | ชื่อ med_usage |

---

### typemed_claim

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 6

**Engine:** InnoDB

**Primary Key:** `code_tme`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `code_tme` | varchar(1) | ✗ | PK | - |
| `name_tme` | varchar(200) | ✗ | - | - |

---

### visitevalutedruguse_ttm

**คำอธิบาย:** ข้อมูลยา

**จำนวนแถว:** 87,016

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `status_flag` | varchar(1) | ✓ | - | สถานะ status |

---


## refer

### CMI

**คำอธิบาย:** -

**จำนวนแถว:** 5,914

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ECLAIM_NO` | varchar(255) | ✓ | - | เลขที่ eclaim |
| `HCODE` | varchar(255) | ✓ | - | - |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `DATEADM` | varchar(255) | ✓ | - | - |
| `TIMEADM` | varchar(255) | ✓ | - | - |
| `DATEDSC` | varchar(255) | ✓ | - | - |
| `TIMEDSC` | varchar(255) | ✓ | - | - |
| `PERSON_TYPE` | varchar(255) | ✓ | - | ประเภท person |
| `PID` | varchar(255) | ✓ | - | - |
| `IDTYPE` | varchar(255) | ✓ | - | - |
| `TITLES` | varchar(255) | ✓ | - | - |
| `FNAME` | varchar(255) | ✓ | - | ชื่อจริง |
| `LNAME` | varchar(255) | ✓ | - | นามสกุล |
| `DOB` | varchar(255) | ✓ | - | - |
| `SEX` | varchar(255) | ✓ | - | - |
| `WEIGHT` | varchar(255) | ✓ | - | - |
| `AGE` | varchar(255) | ✓ | - | - |
| `AGE_MM` | varchar(255) | ✓ | - | - |
| `MARRY_STATUS` | varchar(255) | ✓ | - | สถานะ marry |
| `NATIONS` | varchar(255) | ✓ | - | - |
| `OCCUPA` | varchar(255) | ✓ | - | - |
| `HMAIN` | varchar(255) | ✓ | - | - |
| `INSCL` | varchar(255) | ✓ | - | - |
| `MAININSCL` | varchar(255) | ✓ | - | - |
| `PROHMAIN` | varchar(255) | ✓ | - | - |
| `PROZONE` | varchar(255) | ✓ | - | - |
| `DEMAND_CLAIM_OPD` | varchar(255) | ✓ | - | - |
| `DEMAND_CLAIM_IPD` | varchar(255) | ✓ | - | - |
| `CLAIMCODE` | varchar(255) | ✓ | - | - |
| `PROJCODE` | varchar(255) | ✓ | - | - |
| `REFER_STATUS` | varchar(255) | ✓ | - | สถานะ refer |
| `HMAIN_REFER_IN` | varchar(255) | ✓ | - | - |
| `REFER_IN_CAUSE` | varchar(255) | ✓ | - | - |
| `HMAIN_REFER_OUT` | varchar(255) | ✓ | - | - |
| `REFER_OUT_CAUSE` | varchar(255) | ✓ | - | - |
| `REFERCODE` | varchar(255) | ✓ | - | - |
| `DISCHS` | varchar(255) | ✓ | - | - |
| `DISCHT` | varchar(255) | ✓ | - | - |
| `LOS` | varchar(255) | ✓ | - | - |
| `SVCTYPE` | varchar(255) | ✓ | - | - |
| `UUC` | varchar(255) | ✓ | - | - |
| `AETYPE` | varchar(255) | ✓ | - | - |
| `AEDATE` | varchar(255) | ✓ | - | - |
| `AETIME` | varchar(255) | ✓ | - | - |
| `STATUS` | varchar(255) | ✓ | - | สถานะ |
| `PARENT_ECLAIM_NO` | varchar(255) | ✓ | - | เลขที่ parent_eclaim |
| `DATETIMEADJ` | varchar(255) | ✓ | - | - |
| `HMAIN2` | varchar(255) | ✓ | - | - |
| `PROV1` | varchar(255) | ✓ | - | - |
| `PROV2` | varchar(255) | ✓ | - | - |
| `CLAIM_C` | varchar(255) | ✓ | - | - |
| `CLAIM_T` | varchar(255) | ✓ | - | - |
| `HC` | varchar(255) | ✓ | - | - |
| `PDX` | varchar(255) | ✓ | - | - |
| `PDX_NAME` | varchar(255) | ✓ | - | ชื่อ pdx |
| `PDX_DRDX` | varchar(255) | ✓ | - | - |
| `SUMS_HC` | varchar(255) | ✓ | - | - |
| `SUMS_PPCOM` | varchar(255) | ✓ | - | - |
| `SUMS_SERVICEITEM` | varchar(255) | ✓ | - | - |
| `TOTALPAID` | varchar(255) | ✓ | - | - |
| `TOTALEXPPAID` | varchar(255) | ✓ | - | - |
| `TOTALEMERPAID` | varchar(255) | ✓ | - | - |
| `DRG` | varchar(255) | ✓ | - | - |
| `RW` | varchar(255) | ✓ | - | - |
| `ADJRW` | varchar(255) | ✓ | - | - |
| `DRG_NHSO` | varchar(255) | ✓ | - | - |
| `RW_NHSO` | varchar(255) | ✓ | - | - |
| `ADJRW_NHSO` | varchar(255) | ✓ | - | - |
| `SOURCE` | varchar(255) | ✓ | - | - |
| `CHKFLAG` | varchar(255) | ✓ | - | - |
| `FILENAME` | varchar(255) | ✓ | - | - |
| `EXPORTDATE` | varchar(255) | ✓ | - | - |
| `CODE_ID` | varchar(255) | ✓ | - | รหัส code |
| `HCODE_SEND` | varchar(255) | ✓ | - | - |
| `DATE_SEND` | varchar(255) | ✓ | - | - |
| `FILENAME_SEND` | varchar(255) | ✓ | - | - |
| `DATA_TYPE` | varchar(255) | ✓ | - | ประเภท data |
| `TYPE_RETURN` | varchar(255) | ✓ | - | - |
| `FILENAME_IN` | varchar(255) | ✓ | - | - |
| `TIME_STAMP` | varchar(255) | ✓ | - | - |
| `NOTEDATE` | varchar(255) | ✓ | - | - |
| `RECNO` | varchar(255) | ✓ | - | - |
| `RESNO` | varchar(255) | ✓ | - | - |
| `EPAC_ID` | varchar(255) | ✓ | - | รหัส epac |
| `REP` | varchar(255) | ✓ | - | - |
| `ATTACHFILES` | varchar(255) | ✓ | - | - |
| `TRAN_ID` | varchar(255) | ✓ | - | รหัส tran |
| `appeal_type` | varchar(255) | ✓ | - | ประเภท appeal |
| `refer_type` | varchar(255) | ✓ | - | ประเภท refer |
| `DEPARTMENT_CODE` | varchar(255) | ✓ | - | รหัส department |
| `DEPARTMENT_NAME` | varchar(255) | ✓ | - | ชื่อ department |
| `docno` | varchar(255) | ✓ | - | - |
| `ownrightpid` | varchar(255) | ✓ | - | - |
| `ownname` | varchar(255) | ✓ | - | - |
| `HASH` | varchar(255) | ✓ | - | - |
| `RELATE_INSCL` | varchar(255) | ✓ | - | - |
| `OPDSEQ` | varchar(255) | ✓ | - | - |
| `CONTRACT_TYPE` | varchar(255) | ✓ | - | ประเภท contract |
| `AESTATUS` | varchar(255) | ✓ | - | - |
| `ALERT_DATE` | varchar(255) | ✓ | - | วันที่ alert |
| `ALERT_TIME` | varchar(255) | ✓ | - | เวลา alert |

---

### Mrs_ssRefer

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(1) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hos` | varchar(225) | ✗ | - | - |

---

### eclaim

**คำอธิบาย:** -

**จำนวนแถว:** 12,856

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | varchar(255) | ✓ | - | รหัสประจำ (Primary Key) |
| `HCODE` | varchar(255) | ✓ | - | - |
| `HN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `AN` | varchar(255) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `DATEADM` | date | ✓ | - | - |
| `TIMEADM` | varchar(255) | ✓ | - | - |
| `DATEDSC` | date | ✓ | - | - |
| `TIMEDSC` | varchar(255) | ✓ | - | - |
| `PERSON_TYPE` | varchar(255) | ✓ | - | ประเภท person |
| `PID` | varchar(255) | ✓ | - | - |
| `IDTYPE` | varchar(255) | ✓ | - | - |
| `TITLES` | varchar(255) | ✓ | - | - |
| `FNAME` | varchar(255) | ✓ | - | ชื่อจริง |
| `LNAME` | varchar(255) | ✓ | - | นามสกุล |
| `DOB` | varchar(255) | ✓ | - | - |
| `SEX` | varchar(255) | ✓ | - | - |
| `WEIGHT` | varchar(255) | ✓ | - | - |
| `AGE` | varchar(255) | ✓ | - | - |
| `AGE_MM` | varchar(255) | ✓ | - | - |
| `MARRY_STATUS` | varchar(255) | ✓ | - | สถานะ marry |
| `NATIONS` | varchar(255) | ✓ | - | - |
| `OCCUPA` | varchar(255) | ✓ | - | - |
| `HMAIN` | varchar(255) | ✓ | - | - |
| `INSCL` | varchar(255) | ✓ | - | - |
| `MAININSCL` | varchar(255) | ✓ | - | - |
| `PROHMAIN` | varchar(255) | ✓ | - | - |
| `PROZONE` | varchar(255) | ✓ | - | - |
| `DEMAND_CLAIM_OPD` | varchar(255) | ✓ | - | - |
| `DEMAND_CLAIM_IPD` | varchar(255) | ✓ | - | - |
| `CLAIMCODE` | varchar(255) | ✓ | - | - |
| `PROJCODE` | varchar(255) | ✓ | - | - |
| `REFER_STATUS` | varchar(255) | ✓ | - | สถานะ refer |
| `HMAIN_REFER_IN` | varchar(255) | ✓ | - | - |
| `REFER_IN_CAUSE` | varchar(255) | ✓ | - | - |
| `HMAIN_REFER_OUT` | varchar(255) | ✓ | - | - |
| `REFER_OUT_CAUSE` | varchar(255) | ✓ | - | - |
| `REFERCODE` | varchar(255) | ✓ | - | - |
| `DISCHS` | varchar(255) | ✓ | - | - |
| `DISCHT` | varchar(255) | ✓ | - | - |
| `LOS` | varchar(255) | ✓ | - | - |
| `SVCTYPE` | varchar(255) | ✓ | - | - |
| `UUC` | varchar(255) | ✓ | - | - |
| `AETYPE` | varchar(255) | ✓ | - | - |
| `AEDATE` | varchar(255) | ✓ | - | - |
| `AETIME` | varchar(255) | ✓ | - | - |
| `STATUS` | varchar(255) | ✓ | - | สถานะ |
| `PARENT_ECLAIM_NO` | varchar(255) | ✓ | - | เลขที่ parent_eclaim |
| `DATETIMEADJ` | varchar(255) | ✓ | - | - |
| `HMAIN2` | varchar(255) | ✓ | - | - |
| `PROV1` | varchar(255) | ✓ | - | - |
| `PROV2` | varchar(255) | ✓ | - | - |
| `CLAIM_C` | varchar(255) | ✓ | - | - |
| `CLAIM_T` | varchar(255) | ✓ | - | - |
| `HC` | varchar(255) | ✓ | - | - |
| `PDX` | varchar(255) | ✓ | - | - |
| `PDX_NAME` | varchar(255) | ✓ | - | ชื่อ pdx |
| `PDX_DRDX` | varchar(255) | ✓ | - | - |
| `SUMS_HC` | varchar(255) | ✓ | - | - |
| `SUMS_PPCOM` | varchar(255) | ✓ | - | - |
| `SUMS_SERVICEITEM` | varchar(255) | ✓ | - | - |
| `TOTALPAID` | varchar(255) | ✓ | - | - |
| `TOTALEXPPAID` | varchar(255) | ✓ | - | - |
| `TOTALEMERPAID` | varchar(255) | ✓ | - | - |
| `DRG` | varchar(255) | ✓ | - | - |
| `RW` | varchar(255) | ✓ | - | - |
| `ADJRW` | varchar(255) | ✓ | - | - |
| `DRG_NHSO` | varchar(255) | ✓ | - | - |
| `RW_NHSO` | varchar(255) | ✓ | - | - |
| `ADJRW_NHSO` | varchar(255) | ✓ | - | - |
| `SOURCE` | varchar(255) | ✓ | - | - |
| `CHKFLAG` | varchar(255) | ✓ | - | - |
| `FILENAME` | varchar(255) | ✓ | - | - |
| `EXPORTDATE` | varchar(255) | ✓ | - | - |
| `CODE_ID` | varchar(255) | ✓ | - | รหัส code |
| `HCODE_SEND` | varchar(255) | ✓ | - | - |
| `DATE_SEND` | varchar(255) | ✓ | - | - |
| `FILENAME_SEND` | varchar(255) | ✓ | - | - |
| `DATA_TYPE` | varchar(255) | ✓ | - | ประเภท data |
| `TYPE_RETURN` | varchar(255) | ✓ | - | - |
| `FILENAME_IN` | varchar(255) | ✓ | - | - |
| `TIME_STAMP` | varchar(255) | ✓ | - | - |
| `NOTEDATE` | varchar(255) | ✓ | - | - |
| `RECNO` | varchar(255) | ✓ | - | - |
| `RESNO` | varchar(255) | ✓ | - | - |
| `EPAC_ID` | varchar(255) | ✓ | - | รหัส epac |
| `REP` | varchar(255) | ✓ | - | - |
| `ATTACHFILES` | varchar(255) | ✓ | - | - |
| `TRAN_ID` | varchar(255) | ✓ | - | รหัส tran |
| `appeal_type` | varchar(255) | ✓ | - | ประเภท appeal |
| `DEPARTMENT_CODE` | varchar(255) | ✓ | - | รหัส department |
| `DEPARTMENT_NAME` | varchar(255) | ✓ | - | ชื่อ department |
| `DOCNO` | varchar(255) | ✓ | - | - |
| `OWNRIGHTPID` | varchar(255) | ✓ | - | - |
| `OWNNAME` | varchar(255) | ✓ | - | - |
| `HASH` | varchar(255) | ✓ | - | - |
| `RELATE_INSCL` | varchar(255) | ✓ | - | - |

---

### l_referhosp

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `hospcode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospcode` | varchar(5) | ✗ | PK | - |
| `namehosp` | varchar(100) | ✓ | - | - |
| `km` | int(11) | ✓ | - | - |
| `pricerefer` | int(11) | ✓ | - | - |
| `fdh_km` | varchar(3) | ✓ | - | - |
| `fdh_price` | decimal(9,2) | ✓ | - | - |

---

### referresult

**คำอธิบาย:** -

**จำนวนแถว:** 561

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `rfrno` | varchar(10) | ✓ | IDX | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `hn` | int(8) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `pop_id` | varchar(13) | ✗ | - | รหัส pop |
| `dchdate` | date | ✗ | - | วันที่จำหน่าย |
| `dchtime` | int(4) | ✗ | - | เวลาที่จำหน่าย |
| `referresul` | longtext | ✗ | - | - |
| `d_update` | datetime | ✗ | - | - |
| `fullname` | varchar(90) | ✗ | - | - |
| `hcode` | varchar(5) | ✗ | - | - |
| `refertype` | varchar(3) | ✗ | - | - |
| `sendcoc` | varchar(1) | ✓ | - | - |
| `refer_no` | varchar(20) | ✓ | - | เลขที่ refer |

---

### referresulto

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `rfrno` | varchar(10) | ✓ | IDX | - |
| `an` | int(8) | ✗ | IDX | เลขที่ผู้ป่วยใน (Admission Number) |
| `pop_id` | varchar(13) | ✗ | - | รหัส pop |
| `dchdate` | date | ✗ | - | วันที่จำหน่าย |
| `dchtime` | int(4) | ✗ | - | เวลาที่จำหน่าย |
| `referresul` | longtext | ✗ | - | - |
| `d_update` | datetime | ✗ | - | - |
| `fullname` | varchar(90) | ✗ | - | - |
| `hcode` | varchar(5) | ✗ | - | - |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `refertype` | varchar(3) | ✗ | - | - |
| `refer_no` | varchar(20) | ✓ | - | เลขที่ refer |
| `is_receive` | varchar(1) | ✓ | - | เป็นreceive หรือไม่ |

---

### report_refer

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `yearbudget` | int(1) | ✗ | - | - |
| `total` | int(1) | ✗ | - | รวม |
| `ambulance` | int(1) | ✗ | - | - |
| `ipd` | int(1) | ✗ | - | - |
| `opd` | int(1) | ✗ | - | - |

---

### report_refer_er

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `m` | int(1) | ✗ | - | - |
| `total` | int(1) | ✗ | - | รวม |
| `ambulance` | int(1) | ✗ | - | - |
| `ipd` | int(1) | ✗ | - | - |
| `opd` | int(1) | ✗ | - | - |

---

### report_refer_ip

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cgroup` | int(1) | ✗ | - | - |
| `e_name` | int(1) | ✗ | - | ชื่อ e |
| `icd10` | int(1) | ✗ | - | รหัสโรค ICD-10 |
| `t_name` | int(1) | ✗ | - | ชื่อ t |
| `total` | int(1) | ✗ | - | รวม |

---

### report_refer_op

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cgroup` | int(1) | ✗ | - | - |
| `e_name` | int(1) | ✗ | - | ชื่อ e |
| `icd10` | int(1) | ✗ | - | รหัสโรค ICD-10 |
| `t_name` | int(1) | ✗ | - | ชื่อ t |
| `total` | int(1) | ✗ | - | รวม |

---


## report

### hi_notify_template

**คำอธิบาย:** ตารางชั่วคราว

**จำนวนแถว:** 3

**Engine:** MyISAM

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `header_type` | enum('DHF','ADMIT','PHM') | ✓ | - | ประเภท header |
| `header1` | varchar(100) | ✓ | - | - |
| `header2` | varchar(100) | ✓ | - | - |
| `header3` | varchar(100) | ✓ | - | - |
| `header4` | varchar(50) | ✓ | - | - |
| `header5` | varchar(50) | ✓ | - | - |
| `header6` | varchar(50) | ✓ | - | - |
| `header7` | varchar(50) | ✓ | - | - |
| `header8` | varchar(50) | ✓ | - | - |
| `header9` | varchar(50) | ✓ | - | - |
| `header10` | varchar(50) | ✓ | - | - |
| `heade11` | varchar(50) | ✓ | - | - |
| `header12` | varchar(50) | ✓ | - | - |
| `header13` | varchar(50) | ✓ | - | - |
| `header14` | varchar(50) | ✓ | - | - |

---

### que_printer

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `printer_name` | varchar(100) | ✓ | - | ชื่อ printer |
| `que_group` | int(11) | ✓ | - | - |

---

### que_printer_sticker

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `computer_name` | varchar(50) | ✓ | IDX | ชื่อ computer |
| `que_floor` | varchar(50) | ✓ | - | - |
| `que_building` | varchar(50) | ✓ | - | - |
| `ip_address` | varchar(50) | ✓ | - | - |
| `que_group` | int(11) | ✓ | IDX | - |

---

### que_printserver

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `print_server` | varchar(50) | ✓ | - | - |
| `que_port` | int(11) | ✓ | - | - |
| `que_group` | int(11) | ✓ | IDX | - |

---

### report_er_dx

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cgroup` | int(1) | ✗ | - | - |
| `e_name` | int(1) | ✗ | - | ชื่อ e |
| `icd10` | int(1) | ✗ | - | รหัสโรค ICD-10 |
| `t_name` | int(1) | ✗ | - | ชื่อ t |
| `total` | int(1) | ✗ | - | รวม |

---

### report_fs

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospmain` | int(1) | ✗ | - | - |
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `service_date` | int(1) | ✗ | - | วันที่ service |
| `anc` | int(1) | ✗ | - | - |
| `vaccine` | int(1) | ✗ | - | - |
| `paliative` | int(1) | ✗ | - | - |
| `ultrasound` | int(1) | ✗ | - | - |
| `norplant` | int(1) | ✗ | - | - |
| `dental1` | int(1) | ✗ | - | - |
| `dental2` | int(1) | ✗ | - | - |
| `total` | int(1) | ✗ | - | รวม |

---

### report_grouppdx

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `yearbudget` | int(1) | ✗ | - | - |
| `m` | int(1) | ✗ | - | - |
| `trimas` | int(1) | ✗ | - | - |
| `group_dx` | int(1) | ✗ | - | - |
| `icd10` | int(1) | ✗ | - | รหัสโรค ICD-10 |
| `group_name` | int(1) | ✗ | - | ชื่อ group |
| `total` | int(1) | ✗ | - | รวม |

---

### report_ip_dx

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cgroup` | int(1) | ✗ | - | - |
| `e_name` | int(1) | ✗ | - | ชื่อ e |
| `icd10` | int(1) | ✗ | - | รหัสโรค ICD-10 |
| `t_name` | int(1) | ✗ | - | ชื่อ t |
| `total` | int(1) | ✗ | - | รวม |

---

### report_ip_visit

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `yearbudget` | int(1) | ✗ | - | - |
| `people` | int(1) | ✗ | - | - |
| `admit` | int(1) | ✗ | - | - |
| `losd` | int(1) | ✗ | - | - |
| `days` | int(1) | ✗ | - | - |
| `bed_rate` | int(1) | ✗ | - | - |

---

### report_op_visit

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `yearbudget` | int(1) | ✗ | - | - |
| `people` | int(1) | ✗ | - | - |
| `visit` | int(1) | ✗ | - | - |
| `visit_dent` | int(1) | ✗ | - | - |
| `visit_er` | int(1) | ✗ | - | - |
| `visit_opd` | int(1) | ✗ | - | - |

---

### report_other_pp

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hospmain` | int(1) | ✗ | - | - |
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(1) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `service_date` | int(1) | ✗ | - | วันที่ service |
| `anc` | int(1) | ✗ | - | - |
| `vaccine` | int(1) | ✗ | - | - |
| `paliative` | int(1) | ✗ | - | - |
| `ultrasound` | int(1) | ✗ | - | - |
| `norplant` | int(1) | ✗ | - | - |
| `dental1` | int(1) | ✗ | - | - |
| `dental2` | int(1) | ✗ | - | - |
| `total` | int(1) | ✗ | - | รวม |

---

### report_visit

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `m` | int(1) | ✗ | - | - |
| `total` | int(1) | ✗ | - | รวม |
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |

---

### reportbun

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 33

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `lname` | varchar(255) | ✓ | - | นามสกุล |
| `lab` | varchar(255) | ✓ | - | ห้องปฏิบัติการ |
| `rep` | varchar(255) | ✓ | - | - |

---

### reportoth

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 58

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `namereport` | varchar(255) | ✓ | - | - |
| `r_query` | longtext | ✓ | - | - |

---


## surgery

### operation

**คำอธิบาย:** การผ่าตัด

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `orno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `orno` | int(8) | ✗ | PK | - |
| `opertype` | varchar(1) | ✗ | - | - |

---


## system

### Mrs_ssUser

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(6) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Fullname` | varchar(255) | ✗ | - | - |
| `Tname` | varchar(255) | ✗ | - | - |
| `Username` | varchar(255) | ✗ | - | - |
| `Password` | varchar(255) | ✗ | - | - |
| `Star` | varchar(1) | ✗ | - | - |

---

### Mrss_Day_User

**คำอธิบาย:** -

**จำนวนแถว:** 8

**Engine:** InnoDB

**Primary Key:** `ID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `ID` | int(5) | ✗ | PK | รหัสประจำ (Primary Key) |
| `Sname` | varchar(100) | ✓ | - | - |
| `Tname` | varchar(60) | ✓ | - | - |
| `User` | varchar(20) | ✓ | - | - |
| `Pass` | varchar(20) | ✓ | - | - |

---

### aipn_config

**คำอธิบาย:** การตั้งค่า

**จำนวนแถว:** 18

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(50) | ✓ | - | รหัส common |
| `value1` | int(5) | ✓ | - | - |
| `value2` | varchar(100) | ✓ | - | - |
| `Remark` | text | ✓ | - | หมายเหตุ |

---

### aipn_config_

**คำอธิบาย:** การตั้งค่า

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(50) | ✓ | - | รหัส common |
| `value1` | int(5) | ✓ | - | - |
| `value2` | varchar(100) | ✓ | - | - |
| `Remark` | varchar(100) | ✓ | - | หมายเหตุ |

---

### dtdx_error

**คำอธิบาย:** บันทึกข้อผิดพลาด

**จำนวนแถว:** 238,490

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `dn` | int(11) | ✗ | IDX | - |
| `dtxtime` | int(4) | ✗ | - | - |
| `area` | varchar(3) | ✗ | - | - |
| `icdda` | varchar(8) | ✗ | IDX | - |
| `dttx` | varchar(7) | ✗ | IDX | - |
| `charge` | int(5) | ✗ | - | - |
| `rcptno` | int(8) | ✗ | - | - |

---

### fdh_error_check

**คำอธิบาย:** บันทึกข้อผิดพลาด

**จำนวนแถว:** 37

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `error_code` | varchar(10) | ✗ | - | รหัส error |
| `description` | text | ✓ | - | คำอธิบาย |
| `fix_error` | text | ✓ | - | - |
| `script_check` | text | ✗ | - | - |
| `is_active` | varchar(1) | ✓ | - | ใช้งานอยู่ |
| `d_update` | timestamp | ✓ | - | - |
| `type` | varchar(1) | ✗ | - | ประเภท |

---

### hi7_fdh_log

**คำอธิบาย:** บันทึกระบบ

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `seq`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `seq` | int(20) unsigned | ✗ | PK | ลำดับ |
| `hn` | int(20) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `an` | varchar(20) | ✓ | - | เลขที่ผู้ป่วยใน (Admission Number) |
| `datetime_admit` | varchar(50) | ✓ | - | - |
| `datetime_discharge` | varchar(50) | ✓ | - | - |
| `datetime_service` | varchar(50) | ✓ | - | - |
| `insurance_code` | varchar(10) | ✓ | - | รหัส insurance |
| `charge_total` | varchar(10) | ✓ | - | - |
| `datecreate` | timestamp | ✓ | - | - |

---

### hi7_user

**คำอธิบาย:** -

**จำนวนแถว:** 164

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `hospcode` | varchar(5) | ✓ | - | - |
| `provider` | varchar(15) | ✓ | - | - |
| `password` | varchar(255) | ✓ | - | - |
| `registerno` | varchar(15) | ✓ | - | - |
| `council` | varchar(2) | ✓ | - | - |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |
| `prename` | varchar(5) | ✓ | - | - |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `lname` | varchar(255) | ✓ | - | นามสกุล |
| `sex` | varchar(1) | ✓ | - | - |
| `birth` | date | ✓ | - | - |
| `providertype` | varchar(2) | ✓ | - | - |
| `startdate` | date | ✓ | - | - |
| `outdate` | date | ✓ | - | - |
| `movefrom` | varchar(5) | ✓ | - | - |
| `moveto` | varchar(5) | ✓ | - | - |
| `d_update` | datetime | ✓ | - | - |
| `phone` | varchar(10) | ✓ | - | โทรศัพท์ |
| `lineid` | varchar(50) | ✓ | - | - |
| `statusdct` | varchar(1) | ✓ | - | - |
| `specialty` | varchar(3) | ✓ | - | - |
| `admtype` | varchar(1) | ✓ | - | - |
| `print_flg` | varchar(1) | ✓ | - | - |
| `chkptlog` | varchar(1) | ✓ | - | - |
| `userxry` | varchar(40) | ✓ | - | - |
| `passxry` | varchar(40) | ✓ | - | - |
| `xread` | varchar(1) | ✓ | - | - |
| `userold` | varchar(10) | ✓ | - | - |
| `module` | varchar(100) | ✓ | - | - |
| `role` | varchar(100) | ✓ | - | - |
| `position` | varchar(255) | ✓ | - | - |
| `fingerprint_image` | longtext | ✓ | - | - |

---

### hi_api_config

**คำอธิบาย:** การตั้งค่า

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(50) | ✓ | - | รหัส common |
| `value1` | varchar(50) | ✓ | - | - |
| `value2` | varchar(50) | ✓ | - | - |
| `value3` | int(11) | ✓ | - | - |
| `value4` | int(11) | ✓ | - | - |
| `remark` | text | ✓ | - | หมายเหตุ |
| `visible_flg` | enum('Y','N') | ✓ | - | - |
| `modify_date` | date | ✓ | - | วันที่ modify |

---

### hi_emr_config

**คำอธิบาย:** การตั้งค่า

**จำนวนแถว:** 14

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `comon_code` | varchar(50) | ✓ | - | รหัส comon |
| `doc_index` | int(11) | ✓ | IDX | - |
| `val1` | text | ✓ | - | - |
| `val2` | varchar(50) | ✓ | - | - |
| `val3` | varchar(50) | ✓ | - | - |
| `val4` | varchar(100) | ✓ | - | - |

---

### hierror

**คำอธิบาย:** บันทึกข้อผิดพลาด

**จำนวนแถว:** 1,760

**Engine:** InnoDB

**Primary Key:** `errno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `errno` | int(11) | ✗ | PK | - |
| `errcode` | varchar(20) | ✗ | - | - |
| `errmessage` | varchar(250) | ✗ | - | - |
| `errmessage1` | varchar(250) | ✗ | - | - |
| `errmethod` | varchar(100) | ✗ | - | - |
| `errline` | varchar(5) | ✗ | - | - |
| `errfile` | varchar(250) | ✗ | - | - |
| `errdtime` | datetime | ✗ | - | - |
| `ipaddr` | varchar(100) | ✗ | - | - |

---

### l_dsyscore

**คำอธิบาย:** -

**จำนวนแถว:** 5

**Engine:** InnoDB

**Primary Key:** `dsyscore`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `dsyscore` | varchar(1) | ✗ | PK | - |
| `namedsysco` | varchar(100) | ✗ | - | - |

---

### l_mdiuser

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `codemdiuse`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `codemdiuse` | varchar(1) | ✗ | PK | - |
| `namemdiuse` | varchar(40) | ✗ | - | - |

---

### loglabdr

**คำอธิบาย:** ข้อมูลห้องปฏิบัติการ

**จำนวนแถว:** 4,568

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `ln` | int(11) | ✓ | - | - |
| `dct` | varchar(5) | ✓ | - | - |
| `srvdttm` | datetime | ✓ | - | - |
| `user` | varchar(5) | ✓ | - | - |

---

### logvisit

**คำอธิบาย:** บันทึกระบบ

**จำนวนแถว:** 18,981

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(11) | ✗ | IDX | เลขที่ผู้ป่วยนอก (Visit Number) |
| `vstdttm` | datetime | ✗ | - | - |
| `delvstdttm` | datetime | ✗ | - | - |
| `delman` | varchar(2) | ✗ | - | - |

---

### orders

**คำอธิบาย:** -

**จำนวนแถว:** 40

**Engine:** InnoDB

**Primary Key:** `prscno`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `prscno` | int(11) | ✗ | PK | - |
| `order_by_user_id` | int(11) | ✗ | - | รหัส order_by_user |
| `confirm_by_user_id` | int(11) | ✓ | - | รหัส confirm_by_user |
| `confirm_date_time` | datetime | ✓ | - | เวลา confirm_date |
| `receive_by_user_id` | int(11) | ✓ | - | รหัส receive_by_user |
| `receive_date_time` | datetime | ✓ | - | เวลา receive_date |
| `prescription_by_user_id` | int(11) | ✓ | - | รหัส prescription_by_user |
| `prescription_date_time` | datetime | ✓ | - | เวลา prescription_date |
| `d_update` | timestamp | ✓ | - | - |

---

### phm_user

**คำอธิบาย:** -

**จำนวนแถว:** 3

**Engine:** InnoDB

**Primary Key:** `phm_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `phm_id` | int(11) | ✗ | PK | รหัส phm |
| `phm_username` | varchar(25) | ✗ | - | - |
| `phm_pw` | varchar(25) | ✗ | - | - |
| `phm_fullname` | varchar(255) | ✓ | - | - |
| `phm_status` | varchar(1) | ✓ | - | สถานะ phm |

---

### phr_visit_log

**คำอธิบาย:** บันทึกระบบ

**จำนวนแถว:** 614,315

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | int(10) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vn` | int(10) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `MessageCode` | int(5) | ✓ | - | - |
| `Message` | text | ✓ | - | - |
| `create_date` | date | ✓ | - | วันที่ create |
| `create_time` | time | ✓ | - | เวลา create |

---

### q4u_tokens

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `token` | text | ✓ | - | - |
| `created_date` | datetime | ✓ | - | วันที่ created |
| `expired_date` | datetime | ✓ | - | วันที่ expired |

---

### q4u_user_service_points

**คำอธิบาย:** -

**จำนวนแถว:** 12

**Engine:** InnoDB

**Primary Key:** `user_id, service_point_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `user_service_point_id` | int(6) | ✗ | UK | รหัส user_service_point |
| `user_id` | int(3) | ✗ | PK | รหัส user |
| `service_point_id` | int(3) | ✗ | PK | รหัส service_point |

---

### q4u_users

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `user_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `user_id` | int(11) | ✗ | PK | รหัส user |
| `fullname` | varchar(100) | ✓ | - | - |
| `username` | varchar(100) | ✓ | UK | - |
| `password` | varchar(256) | ✓ | IDX | - |
| `user_type` | enum('ADMIN','MEMBER') | ✓ | - | ประเภท user |
| `is_active` | char(1) | ✓ | IDX | ใช้งานอยู่ |

---

### que_config

**คำอธิบาย:** การตั้งค่า

**จำนวนแถว:** 17

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(11) | ✓ | IDX | รหัส common |
| `value1` | int(11) | ✓ | - | - |
| `value2` | int(11) | ✓ | - | - |
| `value3` | int(11) | ✓ | - | - |
| `tvalue1` | text | ✓ | - | - |
| `tvalue2` | text | ✓ | - | - |

---

### que_user

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `username` | varchar(50) | ✓ | - | - |
| `password` | varchar(50) | ✓ | - | - |
| `service_id` | int(11) | ✓ | IDX | รหัส service |
| `que_group` | int(11) | ✓ | - | - |

---

### report_error_mdr

**คำอธิบาย:** รายงาน

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `date_serv` | int(1) | ✗ | - | - |
| `total_no_dx` | int(1) | ✗ | - | - |
| `total_no_cost` | int(1) | ✗ | - | - |
| `total_no_dx_no_cost` | int(1) | ✗ | - | - |

---

### sign_backup_all

**คำอธิบาย:** ตารางสำรอง

**จำนวนแถว:** 1,503

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `sign` | varchar(40) | ✗ | - | - |
| `slct` | tinyint(1) | ✗ | - | - |
| `source_table` | varchar(100) | ✓ | - | - |
| `staff_code` | varchar(50) | ✓ | - | รหัส staff |

---

### ssop_config

**คำอธิบาย:** การตั้งค่า

**จำนวนแถว:** 10

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `common_code` | varchar(50) | ✓ | - | รหัส common |
| `value1` | varchar(50) | ✓ | - | - |
| `value2` | varchar(50) | ✓ | - | - |
| `remark` | varchar(50) | ✓ | - | หมายเหตุ |
| `enable_flg` | enum('Y','N') | ✓ | - | - |

---

### ssop_opservices_log

**คำอธิบาย:** บันทึกระบบ

**จำนวนแถว:** 156

**Engine:** MyISAM

**Primary Key:** `SvID`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `Invno` | varchar(20) | ✗ | IDX | - |
| `SvID` | varchar(20) | ✗ | PK | - |
| `Class` | varchar(2) | ✗ | - | - |
| `Hcode` | varchar(5) | ✗ | - | - |
| `HN` | varchar(20) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `Pid` | varchar(13) | ✗ | - | - |
| `CareAccount` | char(1) | ✗ | - | - |
| `TypeServ` | char(2) | ✗ | - | - |
| `TypeIn` | char(50) | ✗ | - | - |
| `TypeOut` | char(50) | ✗ | - | - |
| `DTAppoint` | varchar(50) | ✓ | - | - |
| `SvPID` | varchar(10) | ✗ | - | - |
| `Clinic` | varchar(2) | ✗ | - | - |
| `BegDT` | datetime | ✗ | - | - |
| `EndDT` | datetime | ✗ | - | - |
| `LcCode` | varchar(15) | ✗ | - | - |
| `CodeSet` | varchar(2) | ✗ | - | - |
| `STDCode` | varchar(10) | ✗ | - | - |
| `SvCharge` | decimal(10,2) | ✗ | - | - |
| `Completion2` | char(1) | ✗ | - | - |
| `SvTxCode` | varchar(10) | ✗ | - | - |
| `ClaimCat` | varchar(10) | ✗ | - | - |
| `status_flg` | enum('A','C','D') | ✗ | - | - |
| `export_code` | enum('SS','CS') | ✓ | - | รหัส export |
| `vstdate` | date | ✗ | - | วันที่มารับบริการ |

---

### user

**คำอธิบาย:** ผู้ใช้

**จำนวนแถว:** 21

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `nameuser` | varchar(30) | ✗ | - | - |
| `id` | int(4) | ✗ | PK | รหัสประจำ (Primary Key) |
| `user` | varchar(15) | ✗ | IDX | - |
| `pass` | varchar(15) | ✗ | IDX | - |
| `access` | varchar(100) | ✗ | - | - |

---

### user_app

**คำอธิบาย:** -

**จำนวนแถว:** 17

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(10) unsigned | ✗ | PK | รหัสประจำ (Primary Key) |
| `username` | varchar(50) | ✗ | - | - |
| `password_hash` | varchar(255) | ✓ | - | - |
| `token` | text | ✓ | - | - |
| `role_id` | tinyint(4) | ✓ | - | รหัส role |
| `create_at` | timestamp | ✓ | - | - |
| `last_login_at` | timestamp | ✓ | - | - |
| `user_status` | varchar(10) | ✓ | - | สถานะ user |
| `d_update` | timestamp | ✓ | - | - |

---

### users

**คำอธิบาย:** -

**จำนวนแถว:** 19

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `fullname` | varchar(100) | ✓ | - | - |
| `username` | varchar(100) | ✓ | - | - |
| `password` | varchar(100) | ✓ | - | - |
| `email` | varchar(100) | ✓ | - | - |
| `cid` | varchar(13) | ✓ | - | เลขบัตรประชาชน |
| `pcucode` | varchar(5) | ✓ | - | - |
| `pcuname` | varchar(200) | ✓ | - | - |
| `usertype` | varchar(1) | ✓ | - | - |

---

### view_pt_log

**คำอธิบาย:** บันทึกระบบ

**จำนวนแถว:** 1,158

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `user_id` | int(11) | ✗ | - | รหัส user |
| `viewdate` | datetime | ✗ | - | - |
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `user_addr` | varchar(50) | ✗ | - | - |
| `user_agent` | text | ✗ | - | - |
| `user_mac` | varchar(50) | ✗ | - | - |

---


## vaccination

### checkvaccine

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `ptname` | varchar(71) | ✓ | - | ผู้ป่วย name |
| `pop_id` | varchar(13) | ✓ | - | รหัส pop |
| `contact` | varchar(20) | ✗ | - | - |
| `observ` | time | ✓ | - | - |
| `mooban` | varchar(194) | ✓ | - | - |

---

### l_vaccine_reaction_stage

**คำอธิบาย:** -

**จำนวนแถว:** 2

**Engine:** InnoDB

**Primary Key:** `vaccine_reaction_stage_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vaccine_reaction_stage_id` | int(11) | ✗ | PK | รหัส vaccine_reaction_stage |
| `vaccine_reaction_stage_name` | varchar(255) | ✓ | - | ชื่อ vaccine_reaction_stage |

---

### l_vaccine_reaction_symptom

**คำอธิบาย:** -

**จำนวนแถว:** 11

**Engine:** InnoDB

**Primary Key:** `vaccine_reaction_symptom_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vaccine_reaction_symptom_id` | int(11) | ✗ | PK | รหัส vaccine_reaction_symptom |
| `vaccine_reaction_symptom_name` | varchar(255) | ✓ | - | ชื่อ vaccine_reaction_symptom |

---

### l_vaccine_reaction_symptom_other

**คำอธิบาย:** -

**จำนวนแถว:** 55

**Engine:** InnoDB

**Primary Key:** `vaccine_reaction_symptom_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vaccine_reaction_symptom_id` | int(11) | ✗ | PK | รหัส vaccine_reaction_symptom |
| `vaccine_reaction_symptom_codegrp` | int(3) | ✓ | - | - |
| `vaccine_reaction_symptom_namegrp` | varchar(200) | ✓ | - | - |
| `vaccine_reaction_symptom_namesub` | varchar(200) | ✓ | - | - |
| `vaccine_reaction_symptom_detial` | varchar(200) | ✓ | - | - |

---

### l_vaccine_reaction_type

**คำอธิบาย:** -

**จำนวนแถว:** 4

**Engine:** InnoDB

**Primary Key:** `vaccine_reaction_type_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vaccine_reaction_type_id` | int(11) | ✗ | PK | รหัส vaccine_reaction_type |
| `vaccine_reaction_type_name` | varchar(255) | ✓ | - | ชื่อ vaccine_reaction_type |

---

### l_vaccine_screen

**คำอธิบาย:** -

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `vaccine_screen_id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vaccine_screen_id` | int(11) | ✗ | PK | รหัส vaccine_screen |
| `vaccine_screen_name` | varchar(255) | ✗ | - | ชื่อ vaccine_screen |
| `vaccine_code` | varchar(5) | ✗ | - | รหัส vaccine |
| `gender` | int(1) | ✗ | - | - |

---

### vaccine

**คำอธิบาย:** วัคซีน

**จำนวนแถว:** 26

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `stdcode` | varchar(3) | ✗ | - | - |
| `name` | varchar(25) | ✗ | - | ชื่อ |
| `meditem` | varchar(7) | ✗ | IDX | - |
| `namethai` | varchar(100) | ✓ | - | - |
| `v_use` | varchar(40) | ✓ | - | - |
| `v_age` | varchar(200) | ✓ | - | - |
| `v_prevent` | varchar(100) | ✓ | - | - |
| `icd101` | varchar(100) | ✓ | - | - |
| `v_status` | varchar(1) | ✓ | - | สถานะ v |
| `vaccine_fullname` | varchar(100) | ✓ | - | - |

---

### vaccine060764

**คำอธิบาย:** -

**จำนวนแถว:** 230

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `visit_date` | varchar(255) | ✓ | - | วันที่ visit |
| `visit_time` | varchar(255) | ✓ | - | เวลา visit |
| `visit_guid` | varchar(255) | ✓ | - | - |
| `is_target_person` | varchar(255) | ✓ | - | เป็นtarget_person หรือไม่ |
| `need_aefi_followup` | varchar(255) | ✓ | - | - |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `imd1` | varchar(255) | ✓ | - | - |
| `patient_name` | varchar(255) | ✓ | - | ชื่อผู้ป่วย |
| `vaccine_manufacturer` | varchar(255) | ✓ | - | - |
| `vaccine_manufacturer_id` | varchar(255) | ✓ | - | รหัส vaccine_manufacturer |
| `birth_date` | varchar(255) | ✓ | - | วันเกิด |
| `gender_name` | varchar(255) | ✓ | - | ชื่อ gender |
| `vaccine_code` | varchar(255) | ✓ | - | รหัส vaccine |
| `lot_number` | varchar(255) | ✓ | - | - |
| `expiration_date` | varchar(255) | ✓ | - | วันที่ expiration |
| `immunization_datetime` | varchar(255) | ✓ | - | - |
| `vaccine_ref_name` | varchar(255) | ✓ | - | ชื่อ vaccine_ref |
| `vaccine_serial_no` | varchar(255) | ✓ | - | เลขที่ vaccine_serial |
| `found_aefi` | varchar(255) | ✓ | - | - |
| `vaccine_plan_no` | varchar(255) | ✓ | - | เลขที่ vaccine_plan |
| `practitioner_name` | varchar(255) | ✓ | - | ชื่อ practitioner |
| `practitioner_role` | varchar(255) | ✓ | - | - |
| `practitioner_license_number` | varchar(255) | ✓ | - | - |
| `followup_count` | varchar(255) | ✓ | - | จำนวน followup |
| `aefi_list_text` | varchar(255) | ✓ | - | - |
| `phone` | varchar(255) | ✓ | - | โทรศัพท์ |
| `person_type_name` | varchar(255) | ✓ | - | ชื่อ person_type |
| `person_risk_type_name` | varchar(255) | ✓ | - | ชื่อ person_risk_type |

---

### vaccine07062564check

**คำอธิบาย:** -

**จำนวนแถว:** 248

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `temperature` | varchar(255) | ✓ | - | - |
| `bp` | varchar(255) | ✓ | - | - |
| `high` | varchar(10) | ✓ | - | - |
| `weight` | varchar(10) | ✓ | - | - |
| `allergy` | varchar(255) | ✓ | - | - |
| `vaccine` | varchar(255) | ✓ | - | - |
| `lot` | varchar(255) | ✓ | - | - |
| `sn` | varchar(255) | ✓ | - | - |
| `exdate` | datetime | ✓ | - | - |
| `bottle` | varchar(255) | ✓ | - | - |
| `does` | varchar(255) | ✓ | - | - |
| `allergy2` | varchar(255) | ✓ | - | - |
| `bplast` | varchar(255) | ✓ | - | - |
| `appointment` | date | ✓ | - | - |
| `datevaccine` | date | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `popid` | varchar(13) | ✓ | - | - |

---

### vaccine_genqrcode

**คำอธิบาย:** -

**จำนวนแถว:** 11,724

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `lotno` | varchar(50) | ✓ | - | - |
| `sn` | varchar(50) | ✓ | - | - |
| `exp` | varchar(50) | ✓ | - | - |
| `bottleno` | int(11) | ✓ | - | - |
| `doseid` | int(11) | ✓ | - | - |
| `create_date` | date | ✓ | - | วันที่ create |
| `vaccine_name` | varchar(100) | ✓ | - | ชื่อ vaccine |

---

### vaccine_genqrcode1

**คำอธิบาย:** -

**จำนวนแถว:** 40

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `lotno` | varchar(50) | ✓ | - | - |
| `sn` | varchar(50) | ✓ | - | - |
| `exp` | varchar(50) | ✓ | - | - |
| `bottleno` | int(11) | ✓ | - | - |
| `doseid` | int(11) | ✓ | - | - |
| `create_date` | date | ✓ | - | วันที่ create |
| `vaccine_name` | varchar(100) | ✓ | - | ชื่อ vaccine |

---

### vaccine_genqrcode_copy1

**คำอธิบาย:** -

**จำนวนแถว:** 9

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `lotno` | varchar(50) | ✓ | - | - |
| `sn` | varchar(50) | ✓ | - | - |
| `exp` | varchar(50) | ✓ | - | - |
| `bottleno` | int(11) | ✓ | - | - |
| `doseid` | int(11) | ✓ | - | - |
| `create_date` | date | ✓ | - | วันที่ create |
| `vaccine_name` | varchar(100) | ✓ | - | ชื่อ vaccine |

---

### vaccine_mophic

**คำอธิบาย:** -

**จำนวนแถว:** 64,202

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `ptname` | varchar(71) | ✓ | - | ผู้ป่วย name |
| `hospname` | varchar(30) | ✓ | - | - |
| `contact` | varchar(20) | ✗ | - | - |
| `observ` | time | ✓ | - | - |
| `namehpt` | varchar(20) | ✓ | - | - |
| `lotno` | varchar(20) | ✗ | - | - |
| `serial_no` | varchar(20) | ✗ | - | เลขที่ serial |
| `provider` | varchar(51) | ✓ | - | - |
| `v1` | varchar(10) | ✓ | - | - |
| `fudate` | date | ✓ | - | - |
| `staus_flg` | enum('Y','N') | ✓ | - | - |

---

### vaccine_mophic_copy1

**คำอธิบาย:** -

**จำนวนแถว:** 98

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `ptname` | varchar(71) | ✓ | - | ผู้ป่วย name |
| `hospname` | varchar(30) | ✓ | - | - |
| `contact` | varchar(20) | ✗ | - | - |
| `observ` | time | ✓ | - | - |
| `namehpt` | varchar(20) | ✓ | - | - |
| `lotno` | varchar(20) | ✗ | - | - |
| `serial_no` | varchar(20) | ✗ | - | เลขที่ serial |
| `provider` | varchar(51) | ✓ | - | - |
| `v1` | varchar(10) | ✓ | - | - |
| `fudate` | date | ✓ | - | - |
| `staus_flg` | enum('Y','N') | ✓ | - | - |

---

### vaccine_mophic_copy2

**คำอธิบาย:** -

**จำนวนแถว:** 39,538

**Engine:** InnoDB

**Primary Key:** `vn`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `vn` | int(11) | ✗ | PK | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(8) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `ptname` | varchar(71) | ✓ | - | ผู้ป่วย name |
| `hospname` | varchar(30) | ✓ | - | - |
| `contact` | varchar(20) | ✗ | - | - |
| `observ` | time | ✓ | - | - |
| `namehpt` | varchar(20) | ✓ | - | - |
| `lotno` | varchar(20) | ✗ | - | - |
| `serial_no` | varchar(20) | ✗ | - | เลขที่ serial |
| `provider` | varchar(51) | ✓ | - | - |
| `v1` | varchar(10) | ✓ | - | - |
| `fudate` | date | ✓ | - | - |
| `staus_flg` | enum('Y','N') | ✓ | - | - |

---

### vaccine_mophic_error_log

**คำอธิบาย:** บันทึกระบบ

**จำนวนแถว:** 7

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(20) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(20) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(20) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `error_log` | text | ✓ | - | - |
| `messagecode` | int(11) | ✓ | - | - |
| `message` | text | ✓ | - | - |
| `vaccine_count` | int(11) | ✓ | - | จำนวน vaccine |
| `error_datetime` | datetime | ✓ | - | - |

---

### vaccine_mophic_error_log_copy1

**คำอธิบาย:** บันทึกระบบ

**จำนวนแถว:** 198

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(20) | ✗ | PK | รหัสประจำ (Primary Key) |
| `vn` | int(20) | ✓ | - | เลขที่ผู้ป่วยนอก (Visit Number) |
| `hn` | int(20) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `error_log` | text | ✓ | - | - |
| `vaccine_count` | int(11) | ✓ | - | จำนวน vaccine |
| `error_datetime` | datetime | ✓ | - | - |

---

### vaccine_mophic_history

**คำอธิบาย:** -

**จำนวนแถว:** 10,171

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(20) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `cid` | bigint(20) | ✗ | - | เลขบัตรประชาชน |
| `json_data` | text | ✓ | - | - |
| `fullname` | varchar(100) | ✗ | - | - |
| `visit_date` | date | ✗ | - | วันที่ visit |
| `update_date` | date | ✗ | - | วันที่ update |
| `update_time` | time | ✓ | - | เวลา update |

---

### vaccine_mophic_vaccination_list

**คำอธิบาย:** -

**จำนวนแถว:** 35,148

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(20) | ✗ | PK | รหัสประจำ (Primary Key) |
| `cid` | varchar(13) | ✓ | IDX | เลขบัตรประชาชน |
| `vaccine_dose_no` | int(20) | ✓ | - | เลขที่ vaccine_dose |
| `prefix` | varchar(50) | ✓ | - | - |
| `first_name` | varchar(100) | ✓ | - | ชื่อ first |
| `last_name` | varchar(100) | ✓ | - | ชื่อ last |
| `vaccine_date` | date | ✓ | - | วันที่ vaccine |
| `vaccine_name` | varchar(100) | ✓ | - | ชื่อ vaccine |
| `vaccine_manufacturer_name` | text | ✓ | - | ชื่อ vaccine_manufacturer |
| `vaccine_lot_number` | varchar(100) | ✓ | - | - |
| `vaccine_place` | varchar(100) | ✓ | - | - |

---

### vaccine_pregnancy

**คำอธิบาย:** -

**จำนวนแถว:** 166

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `cup_code` | varchar(255) | ✓ | - | รหัส cup |
| `cup_name` | varchar(255) | ✓ | - | ชื่อ cup |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `fname` | varchar(255) | ✓ | - | ชื่อจริง |
| `name` | varchar(255) | ✓ | - | ชื่อ |

---

### vaccineaefi

**คำอธิบาย:** -

**จำนวนแถว:** 1,033

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `visit_guid` | varchar(255) | ✓ | - | - |
| `is_target_person` | varchar(255) | ✓ | - | เป็นtarget_person หรือไม่ |
| `need_aefi_followup` | varchar(255) | ✓ | - | - |
| `cid` | varchar(255) | ✓ | - | เลขบัตรประชาชน |
| `hn` | int(8) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `visit_date` | varchar(255) | ✓ | - | วันที่ visit |
| `visit_time` | varchar(255) | ✓ | - | เวลา visit |
| `imd1` | varchar(255) | ✓ | - | - |
| `vaccine_manufacturer` | varchar(255) | ✓ | - | - |
| `patient_name` | varchar(255) | ✓ | - | ชื่อผู้ป่วย |
| `birth_date` | varchar(255) | ✓ | - | วันเกิด |
| `gender_name` | varchar(255) | ✓ | - | ชื่อ gender |
| `vaccine_code` | varchar(255) | ✓ | - | รหัส vaccine |
| `lot_number` | varchar(255) | ✓ | - | - |
| `expiration_date` | varchar(255) | ✓ | - | วันที่ expiration |
| `vaccine_manufacturer_id` | varchar(255) | ✓ | - | รหัส vaccine_manufacturer |
| `immunization_datetime` | varchar(255) | ✓ | - | - |
| `vaccine_ref_name` | varchar(255) | ✓ | - | ชื่อ vaccine_ref |
| `vaccine_serial_no` | varchar(255) | ✓ | - | เลขที่ vaccine_serial |
| `found_aefi` | varchar(255) | ✓ | - | - |
| `vaccine_plan_no` | varchar(255) | ✓ | - | เลขที่ vaccine_plan |
| `practitioner_name` | varchar(255) | ✓ | - | ชื่อ practitioner |
| `practitioner_role` | varchar(255) | ✓ | - | - |
| `practitioner_license_number` | varchar(255) | ✓ | - | - |
| `followup_count` | varchar(255) | ✓ | - | จำนวน followup |
| `aefi_list_text` | varchar(255) | ✓ | - | - |
| `phone` | varchar(255) | ✓ | - | โทรศัพท์ |
| `update_datetime` | varchar(255) | ✓ | - | - |
| `his_identifier` | varchar(255) | ✓ | - | - |

---

### vaccinemap

**คำอธิบาย:** -

**จำนวนแถว:** 0

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | int(1) | ✗ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `วันที่ฉีดเข็มที่1` | int(1) | ✗ | - | - |
| `วัคซีนที่ฉีด` | int(1) | ✗ | - | - |
| `ชื่อแผน` | int(1) | ✗ | - | - |
| `นัดวันที่` | int(1) | ✗ | - | - |
| `วัคซีนทีได้รับ` | int(1) | ✗ | - | - |

---

### vaccinenotappoint

**คำอธิบาย:** -

**จำนวนแถว:** 99

**Engine:** InnoDB

**Primary Key:** ⚠️ ไม่มี

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `vaccine` | varchar(255) | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `popid` | varchar(255) | ✓ | - | - |

---

### vaccineoffline

**คำอธิบาย:** -

**จำนวนแถว:** 275

**Engine:** InnoDB

**Primary Key:** `id`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `id` | int(11) | ✗ | PK | รหัสประจำ (Primary Key) |
| `hn` | varchar(255) | ✓ | - | เลขที่ผู้ป่วย (Hospital Number) |
| `temperature` | varchar(255) | ✓ | - | - |
| `bp` | varchar(255) | ✓ | - | - |
| `high` | varchar(10) | ✓ | - | - |
| `weight` | varchar(10) | ✓ | - | - |
| `allergy` | varchar(255) | ✓ | - | - |
| `vaccine` | varchar(255) | ✓ | - | - |
| `lot` | varchar(255) | ✓ | - | - |
| `sn` | varchar(255) | ✓ | - | - |
| `exdate` | datetime | ✓ | - | - |
| `bottle` | varchar(255) | ✓ | - | - |
| `does` | varchar(255) | ✓ | - | - |
| `allergy2` | varchar(255) | ✓ | - | - |
| `bplast` | varchar(255) | ✓ | - | - |
| `appointment` | date | ✓ | - | - |
| `datevaccine` | date | ✓ | - | - |
| `name` | varchar(255) | ✓ | - | ชื่อ |
| `popid` | varchar(13) | ✓ | - | - |

---


## xray

### xray

**คำอธิบาย:** รังสีวิทยา

**จำนวนแถว:** 209

**Engine:** MyISAM

**Primary Key:** `xrycode`

| Column | Type | Nullable | Key | Description |
|--------|------|----------|-----|-------------|
| `xrycode` | varchar(4) | ✗ | PK | - |
| `unit` | int(5) | ✓ | - | หน่วย |
| `film_xray` | int(5) | ✓ | - | - |
| `pricexry` | int(5) | ✗ | - | - |
| `pricexrycgd` | int(5) | ✗ | - | - |
| `xryname` | varchar(300) | ✓ | IDX | - |
| `ptright` | varchar(200) | ✗ | - | ผู้ป่วย right |
| `cgd` | varchar(5) | ✗ | - | - |
| `etype` | varchar(100) | ✗ | - | - |
| `chkshow` | varchar(1) | ✗ | - | - |
| `remark` | text | ✓ | - | หมายเหตุ |
| `chkchg` | varchar(1) | ✓ | - | - |
| `icd9cm` | varchar(7) | ✓ | - | รหัสหัตถการ ICD-9-CM |
| `sendpacs` | enum('Y','N') | ✗ | - | - |
| `adp_code` | varchar(20) | ✓ | - | รหัส adp |
| `adp_type` | varchar(2) | ✓ | - | ประเภท adp |

---

## 📊 สรุป

### สถิติตาราง

| รายการ | จำนวน |
|--------|--------|
| ตารางทั้งหมด | 847 |
| ตารางที่มี Primary Key | 605 |
| ตารางที่ไม่มี Primary Key | 242 |
| ตารางที่มี Foreign Key | 0 |
| ตารางที่ไม่มี Foreign Key | 847 |

### ข้อควรระวัง

- ตารางที่ไม่มี Primary Key ควรเพิ่มเพื่อประสิทธิภาพและความถูกต้องของข้อมูล
- ตารางที่ไม่มี Foreign Key constraint อาจมีปัญหา data integrity
- ดูรายการแนะนำเพิ่มเติมใน `outputs/recommended_indexes.sql`

---

*เอกสารนี้สร้างโดยระบบอัตโนมัติ*  
*หากต้องการปรับปรุงคำอธิบาย โปรดติดต่อทีม Database Administrator*
