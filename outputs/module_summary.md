# Module Map Summary

**Database:** hidb10949  
**Classified:** 2026-03-20T09:36:30.348256  
**Total Tables:** 847  
**Modules Found:** 25

## Modules Overview

| Module | Tables | Rows | Size (MB) | Description |
|--------|--------|------|-----------|-------------|
| other | 322 | 43,688,780 | 5410.62 | อื่นๆ |
| patient | 130 | 28,944,572 | 5526.39 | ข้อมูลผู้ป่วยและบุคคล |
| ipd | 72 | 2,967,845 | 361.47 | บริการผู้ป่วยใน |
| icd | 41 | 1,985,476 | 328.89 | รหัสโรค ICD |
| laboratory | 38 | 1,637,955 | 463.72 | ห้องปฏิบัติการและผลตรวจ |
| system | 31 | 881,364 | 98.80 | ระบบและการตั้งค่า |
| pharmacy | 31 | 11,982,169 | 1634.62 | ระบบร้านขายยาและยา |
| opd | 28 | 20,885,760 | 2415.22 | บริการผู้ป่วยนอก |
| moph | 26 | 6,980,234 | 754.95 | เชื่อมต่อกระทรวงสาธารณสุข |
| vaccination | 24 | 163,291 | 140.45 | วัคซีนและภูมิคุ้มกัน |
| appointment | 19 | 1,980,949 | 350.09 | นัดหมายและคิว |
| report | 14 | 106 | 0.17 | รายงาน |
| hr | 13 | 7,366 | 2.94 | บุคลากร |
| refer | 10 | 19,342 | 10.56 | ส่งต่อผู้ป่วย |
| finance | 10 | 4,636 | 0.59 | การเงินและการเงิน |
| inventory | 9 | 21,570 | 4.98 | คลังและพัสดุ |
| nutrition | 9 | 138,363 | 13.82 | โภชนาการ |
| chronic | 7 | 1,224,335 | 158.71 | โรคเรื้อรังและ NCD |
| accident | 3 | 49,950 | 6.06 | อุบัติเหตุและฉุกเฉิน |
| blood | 3 | 18 | 0.08 | ธนาคารเลือด |
| insurance | 3 | 1,084,854 | 198.95 | สิทธิการรักษา |
| anc | 1 | 289,875 | 18.06 | ฝากครรภ์ |
| surgery | 1 | 11 | 0.02 | ห้องผ่าตัด |
| dental | 1 | 9,666 | 1.62 | ทันตกรรม |
| xray | 1 | 209 | 0.05 | รังสีวิทยา |

## Module Details

### OTHER

**Description:** อื่นๆ

**Tables (322):**

- **Data** (235): BP, Claim_E, IP50new, IP51new, IP52new, IP53new, IP54new, Mrs_Center, Mrs_Dead, Mrs_ssHealth_Check ... and 225 more
- **Reference** (50): Mrs_ssType, aetype, allgtype, areatype, btype, caseortype, dchtype, dctbtype, dctype, edtype ... and 40 more
- **Transaction** (35): chospital, data_correct, dbpop, disa_dbpop, dtdx, dtdx_new, hi7_checkinscl, hi7visittoday, inscl, lcgt ... and 25 more
- **Link** (2): drpdetail, note_detail

### PATIENT

**Description:** ข้อมูลผู้ป่วยและบุคคล

**Tables (130):**

- **Data** (68): Claim_HI, HNDM, PERSONk, PERSONm, PTTY, aipn_patient_, bhtr, bhtri, ccd_person, child ... and 58 more
- **Reference** (26): Mrs_No_Pttype, Mrs_pttype, drptype, hi7_claim_l_pttype, ipttype, kios_pttype, l_aptype, l_aptype_icd, l_typedischncd, l_viptype ... and 16 more
- **Transaction** (35): Mrs_newSammary, Mrsc_Re_check, PERSON, PTINFO, VR10949, bhtro, chksitdrfee, covidjully, deaDMn, dr ... and 25 more
- **Log** (1): psn_timer_history

### IPD

**Description:** บริการผู้ป่วยใน

**Tables (72):**

- **Data** (48): IPD50_1, IPD51_1, IPD52_1, IPD53_1, IPD54_1, IPD56n, Mrs_ssDATA_IPD, Mrs_ssDATA_nIPD, Mrs_ssRoom, Mrss_IPD ... and 38 more
- **Transaction** (19): Mrsc_check_in, anc, anes_co_dct, hcode, hospcode, hospcodeolde, invoice, iptadm, iptadm1, iptadm_copy1 ... and 9 more
- **Reference** (4): anstype, bedtype, bedtype_copy1, l_standing_order_group
- **Link** (1): l_roomdetail

### ICD

**Description:** รหัสโรค ICD

**Tables (41):**

- **Reference** (2): cgroup298disease_ก่อนปรับ, cicd298group
- **Data** (33): checkcovid, codeeye, diarrhea, disability, dpmicd10, icd102, icd103, icd1032, icd9cm, icd9cm2 ... and 23 more
- **Transaction** (6): icd101, icd101_NEW, ioprt, l_icd10, l_icd9cm-icd10tm, oprt

### LABORATORY

**Description:** ห้องปฏิบัติการและผลตรวจ

**Tables (38):**

- **Data** (23): ccd_lab_result, lab, lab-routine, lab_08/04/2564, lab_objective, lab_pcr_text, lab_pcr_text2, lab_pcr_text_3g, lab_permis, lab_provider ... and 13 more
- **Link** (6): l_maplab, lab_co_mapping, lab_mapping, lab_well_mapping, labcodemap, maplab
- **Reference** (4): lab_group, lab_speciment_type, labcat, labtype
- **Log** (2): lab_minio_log, vaccine_mophic_lab_log
- **Transaction** (3): laborderrun, lbbk_ก่อนปรับ labcode 362 เป็น 222, visitcvdrisk

### SYSTEM

**Description:** ระบบและการตั้งค่า

**Tables (31):**

- **Data** (15): Mrs_ssUser, Mrss_Day_User, hi7_user, l_dsyscore, l_mdiuser, orders, phm_user, q4u_tokens, q4u_user_service_points, q4u_users ... and 5 more
- **Reference** (6): aipn_config, aipn_config_, hi_api_config, hi_emr_config, que_config, ssop_config
- **Log** (10): dtdx_error, fdh_error_check, hi7_fdh_log, hierror, loglabdr, logvisit, phr_visit_log, report_error_mdr, ssop_opservices_log, view_pt_log

### PHARMACY

**Description:** ระบบร้านขายยาและยา

**Tables (31):**

- **Data** (21): drugitems, drugitems_, interact, interactdb, l_drugflag, l_drugs_unit, l_rxdrughiv, med2con, medgrp, meditem ... and 11 more
- **Transaction** (8): iprsc, l_drug_rdu, l_drugs, l_tmtdrug, l_tmtdrug1, prscdt, pt_meded, visitevalutedruguse_ttm
- **Reference** (2): med_edtype, typemed_claim

### OPD

**Description:** บริการผู้ป่วยนอก

**Tables (28):**

- **Data** (21): Mrs_OPD_Card, Mrs_OPD_Card_IN, Mrs_OPD_EKG, Mrs_OPD_Sub, Mrs_ssDATA_OPD, Mrss_OPD, Mrss_R_OPD, ccd_opd_visit, ccd_opd_visit_diag, ccd_opd_visit_diag_text ... and 11 more
- **Transaction** (7): ovst, ovst_28-11-2565, ovst_lso, ovstdr, ovstdx, ovstdx_28-11-2565, ovststatus

### MOPH

**Description:** เชื่อมต่อกระทรวงสาธารณสุข

**Tables (26):**

- **Data** (23): debt_account, hi7_endpoint, indexhi, l_disabpcu, l_syndrom, l_syndrom2, mophicchecklist, mophichi, orfind, orwound ... and 13 more
- **Transaction** (1): export21f
- **Log** (1): phistory
- **Reference** (1): woundtype

### VACCINATION

**Description:** วัคซีนและภูมิคุ้มกัน

**Tables (24):**

- **Data** (15): checkvaccine, l_vaccine_reaction_stage, l_vaccine_reaction_symptom, l_vaccine_reaction_symptom_other, l_vaccine_screen, vaccine, vaccine060764, vaccine07062564check, vaccine_genqrcode1, vaccine_genqrcode_copy1 ... and 5 more
- **Reference** (1): l_vaccine_reaction_type
- **Transaction** (4): vaccine_genqrcode, vaccine_mophic, vaccine_mophic_copy2, vaccine_mophic_vaccination_list
- **Log** (3): vaccine_mophic_error_log, vaccine_mophic_error_log_copy1, vaccine_mophic_history
- **Link** (1): vaccinemap

### APPOINTMENT

**Description:** นัดหมายและคิว

**Tables (19):**

- **Data** (12): ccd_appointment, hi7_screen_queue, l_queue_status, q4u_monitorshow, q4u_queue_status, queue, queue_call, queue_number, vaccineall0664, vaccineallmonth060708 ... and 2 more
- **Transaction** (4): q4u_queue, q4u_queue_number, visitqueueid, visitqueueid_copy1
- **Link** (2): q4u_queue_detail, queue_detail
- **Reference** (1): q4u_queue_group_detail

### REPORT

**Description:** รายงาน

**Tables (14):**

- **Data** (13): hi_notify_template, que_printer, que_printer_sticker, que_printserver, report_er_dx, report_fs, report_ip_dx, report_ip_visit, report_op_visit, report_other_pp ... and 3 more
- **Reference** (1): report_grouppdx

### HR

**Description:** บุคลากร

**Tables (13):**

- **Data** (11): hi7_l_nurse_triage, hi7_l_screennurse, lr, nurse_notes, opstaff, orstaff, q4u_nursename, q4u_usernurse, rcstaff, visitnursenote ... and 1 more
- **Reference** (2): staff_master, staff_master_dedup

### REFER

**Description:** ส่งต่อผู้ป่วย

**Tables (10):**

- **Data** (1): CMI
- **Reference** (8): Mrs_ssRefer, l_referhosp, referresult, referresulto, report_refer, report_refer_er, report_refer_ip, report_refer_op
- **Transaction** (1): eclaim

### FINANCE

**Description:** การเงินและการเงิน

**Tables (10):**

- **Data** (10): income, l_income, prcd55, prcd_kn, prcd_n, prcd_pb, prcd_pbh, prcdv, ssop_billitem, ssop_billtran

### INVENTORY

**Description:** คลังและพัสดุ

**Tables (9):**

- **Data** (8): ccd_dispense_items, debt, debt_item, l_itemserviceoth, nhso_adp_code, nondrugitems, ssop_dispenseditem, standing_order_items
- **Transaction** (1): visititemoth

### NUTRITION

**Description:** โภชนาการ

**Tables (9):**

- **Data** (8): fooddm, foodmain, foodname, foodorder, foodsub, fooduser, l_childfood, office
- **Transaction** (1): foodsum

### CHRONIC

**Description:** โรคเรื้อรังและ NCD

**Tables (7):**

- **Data** (3): CHRONIC-hi, CHRONICk, CHRONICm
- **Reference** (1): cgroup298disease
- **Transaction** (3): chronic, chronicfu, t_chronic

### ACCIDENT

**Description:** อุบัติเหตุและฉุกเฉิน

**Tables (3):**

- **Data** (2): acci, accident
- **Transaction** (1): emergency

### BLOOD

**Description:** ธนาคารเลือด

**Tables (3):**

- **Data** (3): bloodgrp, orblood, vital_sign

### INSURANCE

**Description:** สิทธิการรักษา

**Tables (3):**

- **Transaction** (3): insure, insure_copy1, insure_copy2

### ANC

**Description:** ฝากครรภ์

**Tables (1):**

- **Transaction** (1): dead

### SURGERY

**Description:** ห้องผ่าตัด

**Tables (1):**

- **Data** (1): operation

### DENTAL

**Description:** ทันตกรรม

**Tables (1):**

- **Data** (1): visitdental

### XRAY

**Description:** รังสีวิทยา

**Tables (1):**

- **Data** (1): xray

