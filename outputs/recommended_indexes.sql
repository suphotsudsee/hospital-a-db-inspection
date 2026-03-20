-- Recommended Indexes for hidb10949
-- Generated: 2026-03-20T09:37:32.006503
-- Run these statements to improve database performance

-- Primary Keys (Critical for data integrity)
-- WARNING: Review these carefully before executing

-- Table has 29 rows but no primary key
-- ALTER TABLE `accident` ADD PRIMARY KEY (`nameaccdnt`);

-- Table has 4 rows but no primary key
-- ALTER TABLE `allgtype` ADD PRIMARY KEY (`allgtype`);

-- Table has 9522 rows but no primary key
-- ALTER TABLE `bhtr` ADD PRIMARY KEY (`an`);

-- Table has 542 rows but no primary key
-- ALTER TABLE `bhtri` ADD PRIMARY KEY (`an`);

-- Table has 11224 rows but no primary key
-- ALTER TABLE `bhtro` ADD PRIMARY KEY (`an`);

-- Table has 123 rows but no primary key
-- ALTER TABLE `BP` ADD PRIMARY KEY (`HN`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `ccd_appointment` ADD PRIMARY KEY (`hospcode`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `ccd_opd_visit` ADD PRIMARY KEY (`hospcode`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `ccd_opd_visit_diag` ADD PRIMARY KEY (`hospcode`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `ccd_opd_visit_diag_text` ADD PRIMARY KEY (`hospcode`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `ccd_opd_visit_procedure` ADD PRIMARY KEY (`hospcode`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `ccd_opd_visit_screen` ADD PRIMARY KEY (`hospcode`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `ccd_person` ADD PRIMARY KEY (`hospcode`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `checkcovid` ADD PRIMARY KEY (`hn`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `checkvaccine` ADD PRIMARY KEY (`vn`);

-- Table has 450 rows but no primary key
-- ALTER TABLE `CHRONIC-hi` ADD PRIMARY KEY (`pcucode`);

-- Table has 233 rows but no primary key
-- ALTER TABLE `CHRONICk` ADD PRIMARY KEY (`PCUCODE`);

-- Table has 226 rows but no primary key
-- ALTER TABLE `CHRONICm` ADD PRIMARY KEY (`PCUCODE`);

-- Table has 2478 rows but no primary key
-- ALTER TABLE `cidhn` ADD PRIMARY KEY (`hn`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `ckd` ADD PRIMARY KEY (`visit_date`);

-- Table has 634 rows but no primary key
-- ALTER TABLE `Claim_E` ADD PRIMARY KEY (`HN`);

-- Table has 656 rows but no primary key
-- ALTER TABLE `Claim_HI` ADD PRIMARY KEY (`an`);

-- Table has 5914 rows but no primary key
-- ALTER TABLE `CMI` ADD PRIMARY KEY (`ECLAIM_NO`);

-- Table has 92 rows but no primary key
-- ALTER TABLE `ctzshp` ADD PRIMARY KEY (`namectzshp`);

-- Table has 270 rows but no primary key
-- ALTER TABLE `datahn` ADD PRIMARY KEY (`HN`);

-- Table has 5 rows but no primary key
-- ALTER TABLE `datapit` ADD PRIMARY KEY (`HCODE`);

-- Table has 8437993 rows but no primary key
-- ALTER TABLE `data_correct` ADD PRIMARY KEY (`hospcode`);

-- Table has 60 rows but no primary key
-- ALTER TABLE `data_ini` ADD PRIMARY KEY (`data`);

-- Table has 493488 rows but no primary key
-- ALTER TABLE `deaDMn` ADD PRIMARY KEY (`cid`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `dengue` ADD PRIMARY KEY (`visit_date`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `dengue_ny` ADD PRIMARY KEY (`visit_date`);

-- Table has 1990 rows but no primary key
-- ALTER TABLE `disability` ADD PRIMARY KEY (`pcucode`);

-- Table has 12856 rows but no primary key
-- ALTER TABLE `eclaim` ADD PRIMARY KEY (`ID`);

-- Table has 13 rows but no primary key
-- ALTER TABLE `emp` ADD PRIMARY KEY (`DEPTNO`);

-- Table has 76534 rows but no primary key
-- ALTER TABLE `export21f` ADD PRIMARY KEY (`pcucode`);

-- Table has 234 rows but no primary key
-- ALTER TABLE `foodorder` ADD PRIMARY KEY (`an`);

-- Table has 138066 rows but no primary key
-- ALTER TABLE `foodsum` ADD PRIMARY KEY (`an`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `ftdate` ADD PRIMARY KEY (`mini`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `generator_16` ADD PRIMARY KEY (`n`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `generator_256` ADD PRIMARY KEY (`n`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `generator_4k` ADD PRIMARY KEY (`n`);

-- Table has 0 rows but no primary key
-- ALTER TABLE `generator_64k` ADD PRIMARY KEY (`n`);

-- Table has 14920 rows but no primary key
-- ALTER TABLE `hcode` ADD PRIMARY KEY (`namehosp`);

-- Table has 1399 rows but no primary key
-- ALTER TABLE `hifields` ADD PRIMARY KEY (`field_name`);

-- Table has 1361 rows but no primary key
-- ALTER TABLE `hifields1` ADD PRIMARY KEY (`field_name`);

-- Table has 28 rows but no primary key
-- ALTER TABLE `hi_ini` ADD PRIMARY KEY (`data`);

-- Table has 2491 rows but no primary key
-- ALTER TABLE `hnble` ADD PRIMARY KEY (`hn`);

-- Table has 3075 rows but no primary key
-- ALTER TABLE `hndb` ADD PRIMARY KEY (`Cnt`);


-- Regular Indexes (Performance improvements)

-- Common query column in patient module
CREATE INDEX `idx_Claim_HI_an` ON `Claim_HI` (`an`);

-- Common query column in patient module
CREATE INDEX `idx_HNDM_hn` ON `HNDM` (`hn`);

-- Common query column in patient module
CREATE INDEX `idx_Mrs_No_Pttype_HN` ON `Mrs_No_Pttype` (`HN`);

-- Common query column in patient module
CREATE INDEX `idx_Mrs_newSammary_AN` ON `Mrs_newSammary` (`AN`);

-- Common query column in patient module
CREATE INDEX `idx_Mrsc_Re_check_An` ON `Mrsc_Re_check` (`An`);

-- Common query column in patient module
CREATE INDEX `idx_PERSON_hn` ON `PERSON` (`hn`);

-- Common query column in patient module
CREATE INDEX `idx_PERSONk_HN` ON `PERSONk` (`HN`);

-- Common query column in patient module
CREATE INDEX `idx_PERSONm_HN` ON `PERSONm` (`HN`);

-- Common query column in patient module
CREATE INDEX `idx_PTTY_hn` ON `PTTY` (`hn`);

-- Common query column in patient module
CREATE INDEX `idx_aipn_patient__vn` ON `aipn_patient_` (`vn`);

-- Common query column in patient module
CREATE INDEX `idx_bhtr_an` ON `bhtr` (`an`);

-- Common query column in patient module
CREATE INDEX `idx_bhtri_hn` ON `bhtri` (`hn`);

-- Common query column in patient module
CREATE INDEX `idx_bhtro_an` ON `bhtro` (`an`);

-- Common query column in patient module
CREATE INDEX `idx_ccd_person_hn` ON `ccd_person` (`hn`);

-- Common query column in patient module
CREATE INDEX `idx_child_hn` ON `child` (`hn`);

-- Common query column in patient module
CREATE INDEX `idx_chksitdrfee_vstdate` ON `chksitdrfee` (`vstdate`);

-- Common query column in opd module
CREATE INDEX `idx_Mrs_OPD_Card_hn` ON `Mrs_OPD_Card` (`hn`);

-- Common query column in opd module
CREATE INDEX `idx_Mrs_OPD_Card_IN_hn` ON `Mrs_OPD_Card_IN` (`hn`);

-- Common query column in opd module
CREATE INDEX `idx_Mrs_OPD_EKG_hn` ON `Mrs_OPD_EKG` (`hn`);

-- Common query column in opd module
CREATE INDEX `idx_Mrs_ssDATA_OPD_HN` ON `Mrs_ssDATA_OPD` (`HN`);

-- Common query column in opd module
CREATE INDEX `idx_Mrss_OPD_HN` ON `Mrss_OPD` (`HN`);

-- Common query column in opd module
CREATE INDEX `idx_Mrss_R_OPD_HN` ON `Mrss_R_OPD` (`HN`);

-- Common query column in opd module
CREATE INDEX `idx_ccd_opd_visit_hn` ON `ccd_opd_visit` (`hn`);

-- Common query column in opd module
CREATE INDEX `idx_ccd_opd_visit_diag_hn` ON `ccd_opd_visit_diag` (`hn`);

-- Common query column in opd module
CREATE INDEX `idx_ccd_opd_visit_diag_text_hn` ON `ccd_opd_visit_diag_text` (`hn`);

-- Common query column in opd module
CREATE INDEX `idx_ccd_opd_visit_procedure_hn` ON `ccd_opd_visit_procedure` (`hn`);

-- Common query column in opd module
CREATE INDEX `idx_ccd_opd_visit_screen_hn` ON `ccd_opd_visit_screen` (`hn`);

-- Common query column in opd module
CREATE INDEX `idx_chkuseopd_status` ON `chkuseopd` (`status`);

-- Common query column in opd module
CREATE INDEX `idx_ovst_an` ON `ovst` (`an`);

-- Common query column in opd module
CREATE INDEX `idx_ovst_28-11-2565_an` ON `ovst_28-11-2565` (`an`);

-- Common query column in ipd module
CREATE INDEX `idx_IPD51_1_AN` ON `IPD51_1` (`AN`);

-- Common query column in ipd module
CREATE INDEX `idx_IPD52_1_AN` ON `IPD52_1` (`AN`);

-- Common query column in ipd module
CREATE INDEX `idx_IPD53_1_AN` ON `IPD53_1` (`AN`);

-- Common query column in ipd module
CREATE INDEX `idx_IPD54_1_AN` ON `IPD54_1` (`AN`);

-- Common query column in ipd module
CREATE INDEX `idx_IPD56n_AN` ON `IPD56n` (`AN`);

-- Common query column in ipd module
CREATE INDEX `idx_Mrs_ssDATA_IPD_AN` ON `Mrs_ssDATA_IPD` (`AN`);

-- Common query column in ipd module
CREATE INDEX `idx_Mrs_ssDATA_nIPD_AN` ON `Mrs_ssDATA_nIPD` (`AN`);

-- Common query column in ipd module
CREATE INDEX `idx_Mrsc_check_in_AN` ON `Mrsc_check_in` (`AN`);

-- Common query column in ipd module
CREATE INDEX `idx_Mrss_IPD_AN` ON `Mrss_IPD` (`AN`);

-- Common query column in ipd module
CREATE INDEX `idx_Mrss_R_IPD_AN` ON `Mrss_R_IPD` (`AN`);

-- Common query column in ipd module
CREATE INDEX `idx_RWipd_vn` ON `RWipd` (`vn`);

-- Common query column in pharmacy module
CREATE INDEX `idx_iprsc_hn` ON `iprsc` (`hn`);

