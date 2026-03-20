# Index Gap Analysis Report

**Database:** hidb10949  
**Analyzed:** 2026-03-20T09:37:32.006503

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total Tables | 847 |
| Tables with Primary Key | 605 |
| Tables without Primary Key | 242 |
| Tables with Indexes | 675 |
| Tables without Indexes | 172 |
| Recommended Improvements | 90 |

## Critical Issues

### Tables Without Primary Key

Tables without a primary key can cause performance issues and data integrity problems.

| Table | Row Count | Priority |
|-------|-----------|----------|
| accident | 29 | LOW |
| allgtype | 4 | LOW |
| bhtr | 9,522 | MEDIUM |
| bhtri | 542 | LOW |
| bhtro | 11,224 | HIGH |
| BP | 123 | LOW |
| ccd_appointment | 0 | LOW |
| ccd_dispense_items | 0 | LOW |
| ccd_lab_result | 0 | LOW |
| ccd_opd_visit | 0 | LOW |
| ccd_opd_visit_diag | 0 | LOW |
| ccd_opd_visit_diag_text | 0 | LOW |
| ccd_opd_visit_procedure | 0 | LOW |
| ccd_opd_visit_screen | 0 | LOW |
| ccd_person | 0 | LOW |
| checkcovid | 0 | LOW |
| checkvaccine | 0 | LOW |
| CHRONIC-hi | 450 | LOW |
| CHRONICk | 233 | LOW |
| CHRONICm | 226 | LOW |
| cidhn | 2,478 | MEDIUM |
| ckd | 0 | LOW |
| Claim_E | 634 | LOW |
| Claim_HI | 656 | LOW |
| CMI | 5,914 | MEDIUM |
| ctzshp | 92 | LOW |
| datahn | 270 | LOW |
| datapit | 5 | LOW |
| data_correct | 8,437,993 | HIGH |
| data_ini | 60 | LOW |

*... and 212 more tables*

### Large Tables Missing Proper Indexing

| Table | Rows | Has PK | Indexes | Sample Columns |
|-------|------|--------|---------|----------------|
| bhtr | 9,522 | ✗ | 0 | an, hn, vn, chwpart, amppart |
| bhtro | 11,224 | ✗ | 1 | an, hn, vn, chwpart, amppart |
| chkuseopd | 1,893 | ✓ | 1 | vn, dct, vstdttm, ipaddr, status |
| chronic | 135,555 | ✓ | 1 | hospcode, pid, date_diag, chronic, hosp_dx |
| cidhn | 2,478 | ✗ | 0 | hn, pop_id, cpop |
| CMI | 5,914 | ✗ | 0 | ECLAIM_NO, HCODE, HN, AN, DATEADM |
| covidjully | 17,043 | ✓ | 1 | id, runnumber, hn, name, cid |
| data_correct | 8,437,993 | ✗ | 0 | hospcode, tablename, data_correct, d_update, send_status |
| dbpop | 1,897,835 | ✓ | 1 | id, PID, TITLE, FNAME, LNAME |
| deaDMn | 493,488 | ✗ | 0 | cid, hn, ddisch, ddis |
| disability | 1,990 | ✗ | 1 | pcucode, hn, disabid, disabtype, disabcause |
| disa_dbpop | 44,199 | ✓ | 1 | pid, title, fname, lname, birthdate |
| eclaim | 12,856 | ✗ | 0 | ID, HCODE, HN, AN, DATEADM |
| export21f | 76,534 | ✗ | 4 | pcucode, pid, cid, seq, f_type |
| export_person | 45,310 | ✓ | 1 | pcucode, pid, exp_start, exp_end, exp_date |
| firstdm | 4,868 | ✓ | 1 | hn |
| firstht | 7,972 | ✓ | 1 | hn |
| foodsum | 138,066 | ✗ | 2 | an, fooddate, f1, f2, f3 |
| fp | 10,011 | ✓ | 1 | vn, drxtime, dct, pttype, new |
| hcode | 14,920 | ✗ | 3 | namehosp, codehosp, specifics, off_id, off_name1 |

## Recommended Indexes

### HIGH Priority

- **bhtr**: Add PRIMARY KEY on `an` - Table has 9522 rows but no primary key
- **bhtro**: Add PRIMARY KEY on `an` - Table has 11224 rows but no primary key
- **cidhn**: Add PRIMARY KEY on `hn` - Table has 2478 rows but no primary key
- **CMI**: Add PRIMARY KEY on `ECLAIM_NO` - Table has 5914 rows but no primary key
- **data_correct**: Add PRIMARY KEY on `hospcode` - Table has 8437993 rows but no primary key
- **deaDMn**: Add PRIMARY KEY on `cid` - Table has 493488 rows but no primary key
- **disability**: Add PRIMARY KEY on `pcucode` - Table has 1990 rows but no primary key
- **eclaim**: Add PRIMARY KEY on `ID` - Table has 12856 rows but no primary key
- **export21f**: Add PRIMARY KEY on `pcucode` - Table has 76534 rows but no primary key
- **foodsum**: Add PRIMARY KEY on `an` - Table has 138066 rows but no primary key
- **hcode**: Add PRIMARY KEY on `namehosp` - Table has 14920 rows but no primary key
- **hifields**: Add PRIMARY KEY on `field_name` - Table has 1399 rows but no primary key
- **hifields1**: Add PRIMARY KEY on `field_name` - Table has 1361 rows but no primary key
- **hnble**: Add PRIMARY KEY on `hn` - Table has 2491 rows but no primary key
- **hndb**: Add PRIMARY KEY on `Cnt` - Table has 3075 rows but no primary key

### MEDIUM Priority

- **accident**: Add PRIMARY KEY on `nameaccdnt` - Table has 29 rows but no primary key
- **allgtype**: Add PRIMARY KEY on `allgtype` - Table has 4 rows but no primary key
- **bhtri**: Add PRIMARY KEY on `an` - Table has 542 rows but no primary key
- **BP**: Add PRIMARY KEY on `HN` - Table has 123 rows but no primary key
- **ccd_appointment**: Add PRIMARY KEY on `hospcode` - Table has 0 rows but no primary key
- **ccd_opd_visit**: Add PRIMARY KEY on `hospcode` - Table has 0 rows but no primary key
- **ccd_opd_visit_diag**: Add PRIMARY KEY on `hospcode` - Table has 0 rows but no primary key
- **ccd_opd_visit_diag_text**: Add PRIMARY KEY on `hospcode` - Table has 0 rows but no primary key
- **ccd_opd_visit_procedure**: Add PRIMARY KEY on `hospcode` - Table has 0 rows but no primary key
- **ccd_opd_visit_screen**: Add PRIMARY KEY on `hospcode` - Table has 0 rows but no primary key
- **ccd_person**: Add PRIMARY KEY on `hospcode` - Table has 0 rows but no primary key
- **checkcovid**: Add PRIMARY KEY on `hn` - Table has 0 rows but no primary key
- **checkvaccine**: Add PRIMARY KEY on `vn` - Table has 0 rows but no primary key
- **CHRONIC-hi**: Add PRIMARY KEY on `pcucode` - Table has 450 rows but no primary key
- **CHRONICk**: Add PRIMARY KEY on `PCUCODE` - Table has 233 rows but no primary key
- **CHRONICm**: Add PRIMARY KEY on `PCUCODE` - Table has 226 rows but no primary key
- **ckd**: Add PRIMARY KEY on `visit_date` - Table has 0 rows but no primary key
- **Claim_E**: Add PRIMARY KEY on `HN` - Table has 634 rows but no primary key
- **Claim_HI**: Add PRIMARY KEY on `an` - Table has 656 rows but no primary key
- **ctzshp**: Add PRIMARY KEY on `namectzshp` - Table has 92 rows but no primary key
- **datahn**: Add PRIMARY KEY on `HN` - Table has 270 rows but no primary key
- **datapit**: Add PRIMARY KEY on `HCODE` - Table has 5 rows but no primary key
- **data_ini**: Add PRIMARY KEY on `data` - Table has 60 rows but no primary key
- **dengue**: Add PRIMARY KEY on `visit_date` - Table has 0 rows but no primary key
- **dengue_ny**: Add PRIMARY KEY on `visit_date` - Table has 0 rows but no primary key
- **emp**: Add PRIMARY KEY on `DEPTNO` - Table has 13 rows but no primary key
- **foodorder**: Add PRIMARY KEY on `an` - Table has 234 rows but no primary key
- **ftdate**: Add PRIMARY KEY on `mini` - Table has 0 rows but no primary key
- **generator_16**: Add PRIMARY KEY on `n` - Table has 0 rows but no primary key
- **generator_256**: Add PRIMARY KEY on `n` - Table has 0 rows but no primary key
