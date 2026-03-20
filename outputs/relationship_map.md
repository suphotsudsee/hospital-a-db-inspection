# Relationship Map Report

**Database:** hidb10949  
**Analyzed:** 2026-03-20T09:37:01.948495

## Statistics

| Metric | Count |
|--------|-------|
| Explicit Foreign Keys | 0 |
| Tables with FKs | 0 |
| Implicit Relationships | 720 |
| Orphan Tables | 847 |

## Hub Tables (Most Referenced)

Tables that are referenced by many other tables:

| Table | Referenced By |
|-------|---------------|

## Sample Foreign Key Relationships

| From Table | Column | To Table | To Column |
|------------|--------|----------|----------|

## Orphan Tables (No Relationships)

Tables with no foreign keys and not referenced:

- BP
- CHRONIC-hi
- CHRONICk
- CHRONICm
- CMI
- Claim_E
- Claim_HI
- HNDM
- IP50new
- IP51new
- IP52new
- IP53new
- IP54new
- IPD50_1
- IPD51_1
- IPD52_1
- IPD53_1
- IPD54_1
- IPD56n
- Mrs_Center
- Mrs_Dead
- Mrs_No_Pttype
- Mrs_OPD_Card
- Mrs_OPD_Card_IN
- Mrs_OPD_EKG
- Mrs_OPD_Sub
- Mrs_newSammary
- Mrs_pttype
- Mrs_ssDATA_IPD
- Mrs_ssDATA_OPD
- ... and 20 more

## Potential Implicit Relationships

Tables that may have relationships based on column naming conventions:

| Table | Column | Potential References |
|-------|--------|---------------------|
| aipn_ccode | ccode | lmculture |
| aipn_checkcode | an | aipn_patient_, deldc, ipt (+2) |
| aipn_patient_ | vn | chksitdrfee, chkuseopd, chronicfu (+31) |
| aipn_patient_ | AN | aipn_checkcode, deldc, ipt (+2) |
| aipn_patient_ | hn | bldalert, firstdm, firstht (+7) |
| anc | vn | chksitdrfee, chkuseopd, chronicfu (+31) |
| anc | rcptno | rcpt, rcpt_15.09.59 |
| anes_co_dct | orno | ansno, operation, orblood (+6) |
| anes_dct | orno | ansno, operation, orblood (+6) |
| ans | orno | ansno, operation, orblood (+6) |
| ansno | orno | operation, orblood, orfind (+5) |
| asa | orno | ansno, operation, orblood (+6) |
| bhtr | an | aipn_checkcode, aipn_patient_, deldc (+3) |
| bhtr | hn | bldalert, firstdm, firstht (+7) |
| bhtr | vn | chksitdrfee, chkuseopd, chronicfu (+31) |
| bhtri | an | aipn_checkcode, aipn_patient_, deldc (+3) |
| bhtri | hn | bldalert, firstdm, firstht (+7) |
| bhtri | vn | chksitdrfee, chkuseopd, chronicfu (+31) |
| bhtro | an | aipn_checkcode, aipn_patient_, deldc (+3) |
| bhtro | hn | bldalert, firstdm, firstht (+7) |
