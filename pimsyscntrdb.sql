-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2022 at 10:19 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pimsyscntrdb`
--

-- --------------------------------------------------------

--
-- Stand-in structure for view `acct_detailed_expense_link`
-- (See below for the actual view)
--
CREATE TABLE `acct_detailed_expense_link` (
`unitcost_bal` double
,`item_code` varchar(500)
,`stock_no` varchar(2000)
,`unit_name` varchar(500)
,`item_name` varchar(5000)
,`item_description` varchar(5000)
,`office` varchar(500)
,`office_code` varchar(500)
,`office_idlink` bigint(20)
,`total` double
,`totalcost` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `acct_detailed_expense_linkcenter`
-- (See below for the actual view)
--
CREATE TABLE `acct_detailed_expense_linkcenter` (
`unitcost_bal` double
,`item_code` varchar(500)
,`stock_no` varchar(2000)
,`center_idlink` bigint(20)
,`unit_name` varchar(500)
,`item_name` varchar(5000)
,`item_description` varchar(5000)
,`office` varchar(500)
,`office_code` varchar(500)
,`office_idlink` bigint(20)
,`total` double
,`totalcost` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `acct_expense`
-- (See below for the actual view)
--
CREATE TABLE `acct_expense` (
`unitcost_bal` double
,`stock_no` varchar(2000)
,`unit_name` varchar(500)
,`po_num` varchar(500)
,`item_code` varchar(500)
,`item_name` varchar(5000)
,`item_description` varchar(5000)
,`office` varchar(500)
,`office_code` varchar(500)
,`office_idlink` bigint(20)
,`total` double
,`totalcost` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `acct_expensecenter`
-- (See below for the actual view)
--
CREATE TABLE `acct_expensecenter` (
`unitcost_bal` double
,`stock_no` varchar(2000)
,`center_idlink` bigint(20)
,`unit_name` varchar(500)
,`po_num` varchar(500)
,`item_code` varchar(500)
,`item_name` varchar(5000)
,`item_description` varchar(5000)
,`office` varchar(500)
,`office_code` varchar(500)
,`office_idlink` bigint(20)
,`total` double
,`totalcost` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `acct_expense_link`
-- (See below for the actual view)
--
CREATE TABLE `acct_expense_link` (
`unitcost_bal` double
,`item_code` varchar(500)
,`stock_no` varchar(2000)
,`unit_name` varchar(500)
,`item_name` varchar(5000)
,`item_description` varchar(5000)
,`office` varchar(500)
,`office_code` varchar(500)
,`office_idlink` bigint(20)
,`total` double
,`totalcost` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `acct_expense_linkcenter`
-- (See below for the actual view)
--
CREATE TABLE `acct_expense_linkcenter` (
`unitcost_bal` double
,`item_code` varchar(500)
,`stock_no` varchar(2000)
,`center_idlink` bigint(20)
,`unit_name` varchar(500)
,`item_name` varchar(5000)
,`item_description` varchar(5000)
,`office` varchar(500)
,`office_code` varchar(500)
,`office_idlink` bigint(20)
,`total` double
,`totalcost` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `acct_link_expense`
-- (See below for the actual view)
--
CREATE TABLE `acct_link_expense` (
`unitcost_bal` double
,`item_code` varchar(500)
,`item_name` varchar(5000)
,`item_description` varchar(5000)
,`office` varchar(500)
,`office_code` varchar(500)
,`office_idlink` bigint(20)
,`total` double
,`totalcost` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `chartaccountlinkage`
-- (See below for the actual view)
--
CREATE TABLE `chartaccountlinkage` (
`subacct_id` bigint(20)
,`stock_no` varchar(2000)
,`subaccount` varchar(5000)
,`description` varchar(5000)
,`acct_link` bigint(20)
,`office_id` bigint(20)
,`office_code` varchar(1000)
,`office_UACS` varchar(1000)
,`office` varchar(1000)
,`formula` varchar(2500)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `ending_balance_per_center_view`
-- (See below for the actual view)
--
CREATE TABLE `ending_balance_per_center_view` (
`center_idlink` bigint(20)
,`office` varchar(500)
,`office_code` varchar(500)
,`totalcost` double
,`office_idlink` bigint(20)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `ending_balance_view`
-- (See below for the actual view)
--
CREATE TABLE `ending_balance_view` (
`totalcost` double
,`office` varchar(500)
,`office_code` varchar(500)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `podtllink_totaldelivery_view`
-- (See below for the actual view)
--
CREATE TABLE `podtllink_totaldelivery_view` (
`podtl_id` bigint(20)
,`stock_no` varchar(1000)
,`pohdr_link` bigint(20)
,`property_no` varchar(5000)
,`unit` varchar(500)
,`item_name` varchar(5000)
,`description` varchar(5000)
,`additional_desc` varchar(5000)
,`del1st` varchar(500)
,`unit_costindivi` double
,`center_idlink` bigint(20)
,`center_name` varchar(1500)
,`center_fname` varchar(1500)
,`unit_cost` double
,`original_price` double
,`amount` double
,`unitid_link` bigint(20)
,`del2nd` varchar(500)
,`del3rd` varchar(500)
,`del4th` varchar(500)
,`del5th` varchar(500)
,`del6th` varchar(500)
,`del7th` varchar(500)
,`del8th` varchar(500)
,`del9th` varchar(500)
,`del10th` varchar(500)
,`del11th` varchar(500)
,`del12th` varchar(500)
,`adjustment` varchar(500)
,`quantity` double
,`office_idlink` bigint(20)
,`office` varchar(2000)
,`uacs_code` varchar(2000)
,`office_code` varchar(2000)
,`formula` varchar(2500)
,`cancellation_status` varchar(1000)
,`cancellation_reason` varchar(1000)
,`canceled_by` varchar(200)
,`delivery_status` varchar(1500)
,`totaldelivery` double
,`deliverystat` varchar(11)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `podtl_totaldelivery_view`
-- (See below for the actual view)
--
CREATE TABLE `podtl_totaldelivery_view` (
`podtl_id` bigint(20)
,`stock_no` varchar(1000)
,`pohdr_link` bigint(20)
,`property_no` varchar(5000)
,`unit` varchar(500)
,`item_name` varchar(5000)
,`description` varchar(5000)
,`additional_desc` varchar(5000)
,`del1st` varchar(500)
,`unit_costindivi` double
,`center_idlink` bigint(20)
,`center_name` varchar(1500)
,`center_fname` varchar(1500)
,`unit_cost` double
,`original_price` double
,`amount` double
,`unitid_link` bigint(20)
,`del2nd` varchar(500)
,`del3rd` varchar(500)
,`del4th` varchar(500)
,`del5th` varchar(500)
,`del6th` varchar(500)
,`del7th` varchar(500)
,`del8th` varchar(500)
,`del9th` varchar(500)
,`del10th` varchar(500)
,`del11th` varchar(500)
,`del12th` varchar(500)
,`adjustment` varchar(500)
,`quantity` double
,`office_idlink` bigint(20)
,`office` varchar(2000)
,`uacs_code` varchar(2000)
,`office_code` varchar(2000)
,`formula` varchar(2500)
,`cancellation_status` varchar(1000)
,`cancellation_reason` varchar(1000)
,`canceled_by` varchar(200)
,`delivery_status` varchar(1500)
,`totaldelivery` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `series`
-- (See below for the actual view)
--
CREATE TABLE `series` (
`series` decimal(41,0)
,`account_link` bigint(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `tblaccountseries`
--

CREATE TABLE `tblaccountseries` (
  `id_series` bigint(20) NOT NULL,
  `series` bigint(20) NOT NULL,
  `account_link` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblaccountseries`
--

INSERT INTO `tblaccountseries` (`id_series`, `series`, `account_link`) VALUES
(1, 1, 0),
(2, 1, 3),
(3, 1, 338),
(4, 1, 284),
(5, 1, 337),
(6, 1, 299),
(7, 1, 0),
(8, 1, 0),
(9, 1, 338),
(10, 1, 338),
(11, 1, 338),
(12, 1, 338),
(13, 1, 0),
(14, 1, 337),
(15, 1, 299),
(16, 1, 284),
(17, 1, 0),
(18, 1, 299),
(19, 1, 0),
(20, 1, 338),
(21, 1, 3),
(22, 1, 4),
(23, 1, 4),
(24, 1, 0),
(25, 1, 4),
(26, 1, 338),
(27, 1, 284),
(28, 1, 292),
(29, 1, 338),
(30, 1, 284),
(31, 1, 337),
(32, 1, 299),
(33, 1, 0),
(34, 1, 337),
(35, 1, 284),
(36, 1, 0),
(37, 1, 0),
(38, 1, 338),
(39, 1, 284),
(40, 1, 337),
(41, 1, 299),
(42, 1, 0),
(43, 1, 0),
(44, 1, 0),
(45, 1, 0),
(46, 1, 0),
(47, 1, 338),
(48, 1, 284),
(49, 1, 337),
(50, 1, 299),
(51, 1, 338),
(52, 1, 286),
(53, 1, 0),
(54, 1, 0),
(55, 1, 0),
(56, 1, 338),
(57, 1, 286),
(58, 1, 337),
(59, 1, 299),
(60, 1, 0),
(61, 1, 0),
(62, 1, 0),
(63, 1, 0),
(64, 1, 338),
(65, 1, 338),
(66, 1, 338),
(67, 1, 338),
(68, 1, 338),
(69, 1, 286),
(70, 1, 0),
(71, 1, 338),
(72, 1, 285),
(73, 1, 337),
(74, 1, 3),
(75, 1, 338),
(76, 1, 343),
(77, 1, 343),
(78, 1, 343),
(79, 1, 343),
(80, 1, 344),
(81, 1, 286),
(82, 1, 343),
(83, 1, 338),
(84, 1, 343),
(85, 1, 343),
(86, 1, 0),
(87, 1, 343),
(88, 1, 343),
(89, 1, 343),
(90, 1, 343),
(91, 1, 343),
(92, 1, 343),
(93, 1, 0),
(94, 1, 343),
(95, 1, 343),
(96, 1, 343),
(97, 1, 343),
(98, 1, 343),
(99, 1, 343),
(100, 1, 343),
(101, 1, 343);

-- --------------------------------------------------------

--
-- Table structure for table `tblbank`
--

CREATE TABLE `tblbank` (
  `BankID` bigint(20) NOT NULL,
  `BankName` varchar(100) NOT NULL,
  `BankBranch` varchar(100) NOT NULL,
  `BankCompany` varchar(100) NOT NULL,
  `BankBranchID` bigint(20) NOT NULL,
  `BankCompID` bigint(20) NOT NULL,
  `AccountNumber` varchar(60) NOT NULL,
  `CheckSeries` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblbank`
--

INSERT INTO `tblbank` (`BankID`, `BankName`, `BankBranch`, `BankCompany`, `BankBranchID`, `BankCompID`, `AccountNumber`, `CheckSeries`) VALUES
(1, 'PNB', 'VELEZ', 'PNB', 0, 0, '21839054874', '');

-- --------------------------------------------------------

--
-- Table structure for table `tblbatchhdr`
--

CREATE TABLE `tblbatchhdr` (
  `batch_id` bigint(20) NOT NULL,
  `batch_no` varchar(2000) NOT NULL,
  `item_desc` varchar(5000) NOT NULL,
  `production_date` date NOT NULL,
  `item_name` varchar(2000) NOT NULL,
  `subacct_idlink` bigint(20) NOT NULL,
  `office_idlink` bigint(20) NOT NULL,
  `office` varchar(1000) NOT NULL,
  `office_code` varchar(2000) NOT NULL,
  `uacs_code` varchar(2000) NOT NULL,
  `formula` varchar(1000) NOT NULL,
  `batch_output` varchar(2000) NOT NULL,
  `unit_cost` double NOT NULL,
  `weighted` double NOT NULL,
  `qty_distribute` bigint(20) NOT NULL,
  `cost_distribute` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblbranch`
--

CREATE TABLE `tblbranch` (
  `BID` bigint(20) NOT NULL,
  `CompanyID` bigint(20) NOT NULL,
  `Company` varchar(1000) NOT NULL,
  `BranchCode` varchar(10) NOT NULL,
  `Branch` varchar(1000) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblbranch`
--

INSERT INTO `tblbranch` (`BID`, `CompanyID`, `Company`, `BranchCode`, `Branch`, `date_created`, `date_updated`) VALUES
(1, 1, 'PGHAI', '0001', 'MAIN', '2020-05-29 05:58:29', '2020-06-19 08:40:45');

-- --------------------------------------------------------

--
-- Table structure for table `tblcenterunit`
--

CREATE TABLE `tblcenterunit` (
  `center_id` bigint(20) NOT NULL,
  `center_name` varchar(1000) NOT NULL,
  `center_fname` varchar(1500) NOT NULL,
  `subadmin_access` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcenterunit`
--

INSERT INTO `tblcenterunit` (`center_id`, `center_name`, `center_fname`, `subadmin_access`) VALUES
(1, 'BS', 'BAHAY SILUNGAN', 0),
(2, 'RRCY', 'REGIONAL REHABILITATION CENTER FOR YOUTH', 0),
(3, 'HAVEN', 'HAVEN FOR WOMEN', 0),
(4, 'HG', 'HOME FOR GIRLS', 0),
(5, 'RSCC', 'RECEPTION AND STUDY CENTER FOR CHILDREN', 0),
(7, 'SLP', 'SUSTAINABLE LIVELIHOOD PROGRAM', 0),
(8, 'PANTAWID', 'PANTAWID PAMILYANG PILIPINO PROGRAM', 0),
(9, 'RO - SUPPLY', 'SUPPLY UNIT', 1),
(10, 'DRMD', 'DISASTER RESPONSE AND MANAGEMENT DIVISION', 0),
(11, 'RO - ARRS', 'ADOPTION RESOURCE AND REFERRAL SECTION', 1),
(12, 'RO- FMD', 'FINANCIAL MANAGEMENT DIVISION', 1),
(13, 'RO - SFP', 'SUPPLEMENTARY FEEDING PROGRAM', 1),
(14, 'RO - SP', 'SOCIAL PENSION', 1),
(15, 'RO - Bangun', 'BANGSAMORO UMPUNGAN SA NUTRISYON PROGRAM', 1),
(16, 'RO - SOCTECH', 'SOCIAL TECHNOLOGY UNIT', 1),
(17, 'RO - RIACAT-CP-VAWC', 'Regional Inter-Agency Committee Against Trafficking, Child Pornography, Violence Against Women and their Children', 1),
(18, 'RO - CIU', 'CRISI INTERVENTION UNIT', 1),
(19, 'RO - ORD', 'OFFICE OF THE REGIONAL DIRECTOR', 1),
(20, 'RO-SFP', 'Supplementary Feeding Program', 1),
(21, 'RO - SECTORAL', 'SECTORAL', 1),
(22, 'RO - PSD', 'PROTECTIVE SERVICE DIVISION', 1),
(23, 'RO - PLANNING', 'PLANNING', 1),
(24, 'RO - CRCF', 'CENTER AND RESIDENTIAL CARE FACILITIES', 1),
(25, 'KALAHI', 'KALAHI - CIDDS', 0),
(26, 'RO - GSU', 'General Services Unit', 1),
(27, 'RO - RICTMU', 'Regional Information and Communication Technology Management Unit', 1),
(28, 'RO - HRW', 'HUMAN RESOURCE AND WELFARE', 1),
(29, 'RO - UCT', 'UNCONDITIONAL CASH TRANSFER', 1),
(30, 'RO - SMU', 'SOCIAL MARKETING UNIT', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblchartaccount`
--

CREATE TABLE `tblchartaccount` (
  `office_id` bigint(20) NOT NULL,
  `office_code` varchar(1000) NOT NULL,
  `office_UACS` varchar(1000) NOT NULL,
  `office` varchar(1000) NOT NULL,
  `formula` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblchartaccount`
--

INSERT INTO `tblchartaccount` (`office_id`, `office_code`, `office_UACS`, `office`, `formula`) VALUES
(1, '', '1040401000', 'Office Supplies Inventory', ''),
(2, '', '1040405000', 'Food Supplies Inventory', ''),
(3, '', '1040406000', 'Drugs and Medicines Inventory', ''),
(4, '', '1040407000', 'Medical, Dental and Laboratory Supplies Inventory', ''),
(5, '', '1040408000', 'Fuel, Oil and Lubricants Inventory', ''),
(6, '', '1040413000', 'Construction Materials Inventory', ''),
(7, '1', '1040499000', 'Other Supplies and Materials Inventory', ' '),
(9, '', '1040501000', 'Semi-Expendable Machinery', 'noneweighted'),
(10, '', '1040502000', 'Semi-Expendable Office Equipment', 'noneweighted'),
(11, '', '1040503000', 'Semi-Expendable Information and Communications Technology Equipment', 'noneweighted'),
(12, '', '1040507000', 'Semi-Expendable Communications Equipment', 'noneweighted'),
(13, '', '1040510000', 'Semi-Expendable Medical Equipment', 'noneweighted'),
(14, '', '1040512000', 'Semi-Expendable Sports Equipment', 'noneweighted'),
(15, '', '1040513000', 'Semi-Expendable Technical and Scientific Equipment', 'noneweighted'),
(16, '', '1040599000', 'Semi-Expendable Other Equipment', 'noneweighted'),
(17, ' ', '1040601000', 'Semi-Expendable Furniture and Fixtures', 'noneweighted'),
(18, '1', '1040202000', 'Welfare Goods for Distribution', ''),
(19, '2', '1040202000', 'Welfare Goods for Distribution', ''),
(20, '3', '1040202000', 'Welfare Goods for Distribution', 'noneweighted'),
(21, '', '5029903000', 'Representation Expenses', ''),
(22, ' ', '5029901000', 'Advertising, Promotional and Marketing Expenses', ' '),
(23, '', '5020201002', 'Training Expenses', ''),
(24, ' ', '1040299000', 'Other Supplies and Materials Held for Distribution', 'noneweighted'),
(25, ' ', '5020399000', 'Other Supplies Expenses', ' '),
(27, ' ', '5021305099', 'Repairs and Maintenance - Other Equipment', ' '),
(28, 'KALAHI', '1040407000', 'Medical, Dental and Laboratory Supplies Inventory - KALAHI', ' '),
(29, 'KALAHI', '1040499000', 'Other Supplies and Materials Inventory', ' ');

-- --------------------------------------------------------

--
-- Table structure for table `tblcompany`
--

CREATE TABLE `tblcompany` (
  `CID` bigint(20) NOT NULL,
  `CompanyCode` varchar(30) NOT NULL,
  `Company` varchar(1000) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcompany`
--

INSERT INTO `tblcompany` (`CID`, `CompanyCode`, `Company`, `date_created`, `date_updated`) VALUES
(1, '0001', 'PGHAI', '2020-05-29 05:58:10', '2020-06-22 01:24:07');

-- --------------------------------------------------------

--
-- Table structure for table `tblcontract`
--

CREATE TABLE `tblcontract` (
  `ContractID` bigint(20) NOT NULL,
  `Auto_contract` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcontract`
--

INSERT INTO `tblcontract` (`ContractID`, `Auto_contract`) VALUES
(1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `tbldelivery`
--

CREATE TABLE `tbldelivery` (
  `del_id` bigint(20) NOT NULL,
  `podtl_idlink` bigint(20) NOT NULL,
  `delivery` varchar(5000) NOT NULL,
  `qty` int(11) NOT NULL,
  `unit_cost` double NOT NULL,
  `total_cost` double NOT NULL,
  `unit_name` varchar(500) NOT NULL,
  `trans_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbldistribution`
--

CREATE TABLE `tbldistribution` (
  `distribution_id` bigint(20) NOT NULL,
  `batch_idlink` bigint(20) NOT NULL,
  `qty_distribute` int(11) NOT NULL,
  `batch_no` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbldistribution`
--

INSERT INTO `tbldistribution` (`distribution_id`, `batch_idlink`, `qty_distribute`, `batch_no`) VALUES
(1, 2, 300, '07-28-2021-2');

-- --------------------------------------------------------

--
-- Table structure for table `tblduedate`
--

CREATE TABLE `tblduedate` (
  `DDID` bigint(20) NOT NULL,
  `Type` varchar(30) NOT NULL,
  `Month` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblduedate`
--

INSERT INTO `tblduedate` (`DDID`, `Type`, `Month`, `day`, `date_created`, `date_updated`) VALUES
(1, 'Monthly', 0, 25, '2020-05-22 06:13:49', '2020-06-11 07:15:45'),
(2, 'Annual', 4, 25, '2020-05-25 07:49:04', '2020-06-11 07:20:14');

-- --------------------------------------------------------

--
-- Table structure for table `tblformlist`
--

CREATE TABLE `tblformlist` (
  `FormID` int(11) NOT NULL,
  `FormName` varchar(100) NOT NULL,
  `FormGroup` varchar(100) NOT NULL,
  `FormLocation` varchar(100) NOT NULL,
  `FormURL` varchar(100) NOT NULL,
  `FormStates` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblformlist`
--

INSERT INTO `tblformlist` (`FormID`, `FormName`, `FormGroup`, `FormLocation`, `FormURL`, `FormStates`) VALUES
(4, 'User List', 'Administrative', 'app.administrative.user-list', '/user-list', 'Administrative > User List'),
(5, 'Signatory List', 'Administrative', 'app.administrative.signatory-list', '/signatory-list', 'Administrative > Signatory List'),
(45, 'Fund Source List', 'Masterfile', 'app.masterfile.fundsource-list', '/fundsource-list', 'Masterfile > Fund Source List'),
(46, 'Unit List', 'Masterfile', 'app.masterfile.unit-list', '/unit-list', 'Masterfile > Unit List'),
(47, 'Inventory Entry', 'Transaction', 'app.transaction.inventory', '', ''),
(48, 'Supplier List', 'Masterfile', 'app.masterfile.supplier-list', '', ''),
(49, 'Chart of Account', 'Masterfile', 'app.masterfile.office-list', '', ''),
(50, 'Inventory Issuance', 'Transaction', 'app.transaction.slc', '', ''),
(51, 'Manual Adjustment', 'Transaction', 'app.transaction.adjustment', '', ''),
(53, 'Activity Logs', 'Administrative', 'app.administrative.activity-logs', '', ''),
(54, 'Production', 'Transaction', 'app.transaction.production', '', ''),
(55, 'Center List', 'Masterfile', 'app.masterfile.center-list', '/office-list', 'Masterfile > Center List'),
(56, 'Admin Lock', 'Administrative', 'app.administrative.admin-lock', '', ''),
(57, 'Distribution', 'Transaction', 'app.transaction.distribution', '', ''),
(58, 'Requisition and Issue Slip', 'Transaction', 'app.transaction.ris', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tblfundsource`
--

CREATE TABLE `tblfundsource` (
  `fund_id` bigint(20) NOT NULL,
  `fund_name` varchar(200) NOT NULL,
  `fund_code` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblfundsource`
--

INSERT INTO `tblfundsource` (`fund_id`, `fund_name`, `fund_code`) VALUES
(2, 'Foreign Assisted Project Funds', '02'),
(3, 'Regular Agency Fund', '01'),
(4, 'Special Account - Locally Funded/Domestic Grants Fund', '03'),
(5, 'Special Account - Foreign Assisted/Foreign Grants Fund', '04'),
(6, 'Internally Generated Funds', '05'),
(7, 'Business Related Funds', '06'),
(8, 'Trust Receipts', '07');

-- --------------------------------------------------------

--
-- Table structure for table `tbllock`
--

CREATE TABLE `tbllock` (
  `lock_id` int(11) NOT NULL,
  `status` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbllock`
--

INSERT INTO `tbllock` (`lock_id`, `status`) VALUES
(1, 'UNLOCK');

-- --------------------------------------------------------

--
-- Table structure for table `tbllogin`
--

CREATE TABLE `tbllogin` (
  `LoginID` bigint(20) UNSIGNED NOT NULL,
  `Username` varchar(15) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `RetypePassword` varchar(500) NOT NULL,
  `UserLevel` varchar(20) NOT NULL,
  `FullName` varchar(30) DEFAULT NULL,
  `Description` varchar(30) DEFAULT NULL,
  `FirstName` varchar(100) NOT NULL,
  `MiddleName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `DateOfBirth` date NOT NULL,
  `center_name` varchar(1000) NOT NULL,
  `center_idlink` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbllogin`
--

INSERT INTO `tbllogin` (`LoginID`, `Username`, `Password`, `RetypePassword`, `UserLevel`, `FullName`, `Description`, `FirstName`, `MiddleName`, `LastName`, `DateOfBirth`, `center_name`, `center_idlink`) VALUES
(3, 'Kurt', '97db1846570837fce6ff62a408f1c26a', '97db1846570837fce6ff62a408f1c26a', 'SCHEMA ADMIN', 'Kurt J. Tiempo', 'Admin Veterinary', 'Kurt', 'Joshua', 'Tiempo', '0000-00-00', '', 0),
(4, 'schema', '449f834b4a9ad516417c4f675f94b676', '449f834b4a9ad516417c4f675f94b676', 'SCHEMA ADMIN', 'Kurt T. Tiempo', 'Admin', 'Kurt', 'Tiempo', 'Tiempo', '0000-00-00', '', 0),
(5, 'JAYSON', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'ADMIN', 'JAYSON C. CAGA-ANAN', '', 'JAYSON', 'C', 'CAGA-ANAN', '0000-00-00', 'DRMD', 10),
(6, 'JOEY', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'JOEY  HUKDONG', '', 'JOEY', '', 'HUKDONG', '0000-00-00', 'DRMD', 10),
(7, 'FELIX', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'FELIX  BILBAR', '', 'FELIX', '', 'BILBAR', '0000-00-00', 'DRMD', 10),
(9, 'DRMD', '97db1846570837fce6ff62a408f1c26a', '97db1846570837fce6ff62a408f1c26a', 'ADMIN', 'DRMD  admin', '', 'DRMD', '', 'admin', '0000-00-00', 'DRMD', 10),
(11, 'Supply', '97db1846570837fce6ff62a408f1c26a', '97db1846570837fce6ff62a408f1c26a', 'ADMIN', 'Supply  Admin', '', 'Supply', '', 'Admin', '0000-00-00', 'SUPPLY', 9),
(12, 'Jade', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'ADMIN', 'Jade  Lustre', '', 'Jade', '', 'Lustre', '0000-00-00', '', 0),
(13, 'FRANCIS', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'FRANCIS  MONDAGA', '', 'FRANCIS', '', 'MONDAGA', '0000-00-00', 'HG', 4),
(14, 'Daryl', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'RO-SUPPLY', 'Daryl  Tanggol', '', 'Daryl', '', 'Tanggol', '0000-00-00', 'RO - SUPPLY', 9),
(15, 'SUPPLY', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'SUPPLY', 'SUPPLY  CUSTODIAN', '', 'SUPPLY', '', 'CUSTODIAN', '0000-00-00', 'RO - SUPPLY', 9),
(16, 'Blanch', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'AA', 'Blanch  Acero', '', 'Blanch', '', 'Acero', '0000-00-00', 'RO- FMD', 12),
(17, 'PANTAWID', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'PANTAWID  ADMIN', '', 'PANTAWID', '', 'ADMIN', '0000-00-00', 'PANTAWID', 8),
(18, 'Irene', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'Irene  Acao', '', 'Irene', '', 'Acao', '0000-00-00', 'PANTAWID', 8),
(19, 'Rhean', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'Rhean S. Esfra', '', 'Rhean', 'S', 'Esfra', '0000-00-00', 'KALAHI', 25),
(20, 'Julian Martin', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'VIEWER', 'Julian Martin S. Dollente', '', 'Julian Martin', 'S', 'Dollente', '0000-00-00', '', 0),
(21, 'Lyra', '05108f5fc08d3b5897adf1691598fafb', '05108f5fc08d3b5897adf1691598fafb', 'VIEWER', 'Lyra  Ilagan', '', 'Lyra', '', 'Ilagan', '0000-00-00', '', 0),
(22, 'Rey', '0ad3a40dbad50a6fb2c672e73ed2c493', '0ad3a40dbad50a6fb2c672e73ed2c493', 'ADMIN', 'Rey  Molina', '', 'Rey', '', 'Molina', '0000-00-00', '', 0),
(24, 'Roy', 'f58782e2b3a1da1d0cf981cad877a4c8', 'f58782e2b3a1da1d0cf981cad877a4c8', 'MEMBER', 'Roy  Ortizo', '', 'Roy', '', 'Ortizo', '0000-00-00', 'RRCY', 2),
(25, 'Judith', '951cc50ab2deff8f0d013b8b3a28a240', '951cc50ab2deff8f0d013b8b3a28a240', 'MEMBER', 'Judith  Tabac', '', 'Judith', '', 'Tabac', '0000-00-00', 'RSCC', 5),
(26, 'Aaron', '100ff65fafdd91294b1b31865216a882', '100ff65fafdd91294b1b31865216a882', 'MEMBER', 'Aaron  Parcon', '', 'Aaron', '', 'Parcon', '0000-00-00', 'DRMD', 10),
(27, 'Noel', '464e8f40f49bed1f3d255ec5581f6eb2', '464e8f40f49bed1f3d255ec5581f6eb2', 'SUPPLY', 'Noel  Villanueva', '', 'Noel', '', 'Villanueva', '0000-00-00', 'RO - SUPPLY', 9),
(28, 'Clark', '3875079fa86705cc86a371c559270df4', '3875079fa86705cc86a371c559270df4', 'AA', 'Clark  Solarte', '', 'Clark', '', 'Solarte', '0000-00-00', 'RO - RICTMU', 27);

-- --------------------------------------------------------

--
-- Table structure for table `tbllotrate`
--

CREATE TABLE `tbllotrate` (
  `LRID` bigint(20) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Rate` double NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbllotrate`
--

INSERT INTO `tbllotrate` (`LRID`, `Type`, `Rate`, `date_created`, `date_updated`) VALUES
(1, 'HOUSE AND LOT', 2.5, '2020-05-21 05:24:52', '2020-07-15 01:57:15'),
(2, 'LOT', 1.5, '2020-05-21 05:24:52', '2020-06-05 09:29:35'),
(3, 'ENCLAVE', 2.5, '2020-07-15 01:57:46', '2020-07-15 01:57:46'),
(4, 'ENCLAVE LOT ONLY', 1.5, '2020-07-15 01:57:46', '2020-07-15 01:57:46');

-- --------------------------------------------------------

--
-- Table structure for table `tbloffice`
--

CREATE TABLE `tbloffice` (
  `office_id` bigint(20) NOT NULL,
  `office` varchar(500) NOT NULL,
  `office_code` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbloffice`
--

INSERT INTO `tbloffice` (`office_id`, `office`, `office_code`) VALUES
(1, 'Office Supplies', '01'),
(3, 'Fuel', '02'),
(4, 'LOT 1 - CLOTHING BED LINENS', '03');

-- --------------------------------------------------------

--
-- Table structure for table `tblorsetup`
--

CREATE TABLE `tblorsetup` (
  `setupID` bigint(20) NOT NULL,
  `OrNo` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblorsetup`
--

INSERT INTO `tblorsetup` (`setupID`, `OrNo`) VALUES
(1, '16');

-- --------------------------------------------------------

--
-- Table structure for table `tblpayment_logs`
--

CREATE TABLE `tblpayment_logs` (
  `payment_id` bigint(20) NOT NULL,
  `ada_date` date NOT NULL,
  `ada_number` varchar(2000) NOT NULL,
  `jev_number` varchar(2000) NOT NULL,
  `payment_amt` double NOT NULL,
  `po_num` varchar(2000) NOT NULL,
  `po_hdridlink` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblpodtl`
--

CREATE TABLE `tblpodtl` (
  `podtl_id` bigint(20) NOT NULL,
  `pohdr_link` bigint(20) NOT NULL,
  `property_no` varchar(5000) NOT NULL,
  `unit` varchar(500) NOT NULL,
  `stock_no` varchar(1000) NOT NULL,
  `item_name` varchar(5000) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `additional_desc` varchar(5000) NOT NULL,
  `del1st` varchar(500) NOT NULL,
  `unit_costindivi` double NOT NULL,
  `center_idlink` bigint(20) NOT NULL,
  `center_name` varchar(1500) NOT NULL,
  `center_fname` varchar(1500) NOT NULL,
  `unit_cost` double NOT NULL,
  `original_price` double NOT NULL,
  `amount` double NOT NULL,
  `unitid_link` bigint(20) NOT NULL,
  `del2nd` varchar(500) NOT NULL,
  `del3rd` varchar(500) NOT NULL,
  `del4th` varchar(500) NOT NULL,
  `del5th` varchar(500) NOT NULL,
  `del6th` varchar(500) NOT NULL,
  `del7th` varchar(500) NOT NULL,
  `del8th` varchar(500) NOT NULL,
  `del9th` varchar(500) NOT NULL,
  `del10th` varchar(500) NOT NULL,
  `del11th` varchar(500) NOT NULL,
  `del12th` varchar(500) NOT NULL,
  `adjustment` varchar(500) NOT NULL,
  `quantity` double NOT NULL,
  `office_idlink` bigint(20) NOT NULL,
  `office` varchar(2000) NOT NULL,
  `uacs_code` varchar(2000) NOT NULL,
  `office_code` varchar(2000) NOT NULL,
  `formula` varchar(2500) NOT NULL,
  `cancellation_status` varchar(1000) NOT NULL,
  `cancellation_reason` varchar(1000) NOT NULL,
  `canceled_by` varchar(200) NOT NULL,
  `delivery_status` varchar(1500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblpodtl`
--

INSERT INTO `tblpodtl` (`podtl_id`, `pohdr_link`, `property_no`, `unit`, `stock_no`, `item_name`, `description`, `additional_desc`, `del1st`, `unit_costindivi`, `center_idlink`, `center_name`, `center_fname`, `unit_cost`, `original_price`, `amount`, `unitid_link`, `del2nd`, `del3rd`, `del4th`, `del5th`, `del6th`, `del7th`, `del8th`, `del9th`, `del10th`, `del11th`, `del12th`, `adjustment`, `quantity`, `office_idlink`, `office`, `uacs_code`, `office_code`, `formula`, `cancellation_status`, `cancellation_reason`, `canceled_by`, `delivery_status`) VALUES
(1, 1, '5020201002-712', 'pcs', '', 'Ink', 'Epson Ink, 4 colors (not refill)', ' ', '10', 500, 3, 'HAVEN', ' ', 500, 500, 5000, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 23, 'Training Expenses', '5020201002', ' ', ' ', '', '', '', ''),
(2, 2, '1040401000-785', 'piece', '', 'Certificate holder', 'Certificate holder', ' ', '25', 100, 21, 'RO - SECTORAL', ' ', 100, 100, 2500, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 25, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(3, 2, '1040401000-786', 'pack', '', 'SPECIAL PAPER', 'SCENTED SPECIAL PAPER WHITE 90 GSM / PACK', ' ', '10', 200, 21, 'RO - SECTORAL', ' ', 200, 200, 2000, 6, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(4, 2, '1040401000-787', 'piece', '', 'ENVELOPE', 'BROWN ENVELOPE', ' ', '25', 3, 21, 'RO - SECTORAL', ' ', 3, 3, 75, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 25, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(5, 2, '1040401000-788', 'Box', '', 'SIGN PEN', 'HIGH QUALITY BLACK SIGN PEN .7MM / BOX', ' ', '2', 400, 21, 'RO - SECTORAL', ' ', 400, 400, 800, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(6, 2, '1040401000-789', 'Box', '', 'BOARD PEN', 'HIGH QUALITY PENTEL BOARD PEN / BOX', ' ', '1', 500, 21, 'RO - SECTORAL', ' ', 500, 500, 500, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 1, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(7, 2, '1040401000-790', 'Rea', '', 'METACARDS', 'METACARDS, GENERAL', ' ', '4', 50, 21, 'RO - SECTORAL', ' ', 50, 50, 200, 41, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 4, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(8, 2, '1040401000-791', 'piece', '', 'NOTEBOOK', 'HIGH QUALITY NOTEBOOK', ' ', '25', 30, 21, 'RO - SECTORAL', ' ', 30, 30, 750, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 25, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(9, 2, '1040401000-792', 'piece', '', 'MANILA PAPER', 'MANILA PAPER, GENERAL', ' ', '20', 10, 21, 'RO - SECTORAL', ' ', 10, 10, 200, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(10, 2, '1040401000-793', 'piece', '', 'TAPE', 'MASKING TAPE 2-INCH DIAMETER', ' ', '2', 70, 21, 'RO - SECTORAL', ' ', 77.14, 70, 140, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(11, 2, '1040401000-794', 'roll', '', 'STICKY NOTE', 'STICKY NOTE ROLL, MATERIAL: PAPER + PLASTIC ROLL DESIGN PAPER LENGTH:8M/314.95\"(APPROX)', ' ', '22', 50, 21, 'RO - SECTORAL', ' ', 50, 50, 1100, 10, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 22, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(12, 3, '1040407000-795', 'Bottle', '', 'ALCOHOL', 'ISOPROPYL ALCOHOL(350ML)', ' ', '1600', 78, 28, 'RO - HRW', ' ', 78, 78, 124800, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 1600, 4, 'Medical, Dental and Laboratory Supplies Inventory', '1040407000', ' ', ' ', '', '', '', ''),
(13, 3, '1040407000-796', 'Bottle', '', 'ALCOHOL', 'ISOPROPYL ALCOHOL(1 LITER)', ' ', '40', 184, 28, 'RO - HRW', ' ', 184, 184, 7360, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 40, 4, 'Medical, Dental and Laboratory Supplies Inventory', '1040407000', ' ', ' ', '', '', '', ''),
(14, 3, '1040407000-797', 'Box', '', 'FACE MASK', 'FACE MASK / BOX', ' ', '50', 150, 28, 'RO - HRW', ' ', 150, 150, 7500, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 50, 4, 'Medical, Dental and Laboratory Supplies Inventory', '1040407000', ' ', ' ', '', '', '', ''),
(15, 4, '1040401000-18', 'Box', '', 'Bond Paper', 'PAPER, Multi-Purpose (COPY) Legal, 70 gsm', ' ', '3', 500, 8, 'PANTAWID', ' ', 500, 500, 1500, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(16, 5, '1040401000-79', 'pcs', '', 'Stapler', 'STAPLER, BINDER TYPE, heavy duty, desktop', ' ', '3', 343, 8, 'PANTAWID', ' ', 343, 343, 1029, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(17, 5, '1040401000-25', 'Box', '', 'Staple wire', 'STAPLE WIRE, for heavy duty staplers, (23/13)', ' ', '2', 42.75, 8, 'PANTAWID', ' ', 42.75, 42.75, 85.5, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(18, 5, '1040401000-28', 'pcs', '', 'USB', 'FLASH DRIVE, 16 GB capacity', ' ', '2', 282.75, 8, 'PANTAWID', ' ', 282.75, 282.75, 565.5, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(19, 5, '1040401000-803', 'Box', '', 'SIGN PEN', 'SIGN PEN, GENERAL /BOX', ' ', '3', 294.99, 8, ' ', ' ', 294.99, 213.3, 639.9000000000001, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(20, 5, '1040401000-76', 'pcs', '', 'Puncher', 'PUNCHER, paper, heavy duty, with two hole guide', ' ', '1', 141.1, 8, 'PANTAWID', ' ', 141.1, 141.1, 141.1, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 1, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(21, 5, '1040401000-799', 'pcs', '', 'SCISSOR', 'SCISSOR, GENERAL', ' ', '3', 17.55, 8, 'PANTAWID', ' ', 17.55, 17.55, 52.650000000000006, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(22, 5, '1040401000-99', 'pcs', '', 'Ink', 'INK CART, CANON PG-810, Black', ' ', '20', 1045, 8, 'PANTAWID', ' ', 1045, 1045, 20900, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(23, 5, '1040401000-800', 'pcs', '', 'Ink', 'INK CART, CANON PG-810, COLORED', ' ', '20', 1405, 8, 'PANTAWID', ' ', 1405, 1405, 28100, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(24, 5, '1040401000-801', 'pcs', '', 'FOLDER', 'FOLDER (PINK)', ' ', '100', 10, 8, 'PANTAWID', ' ', 10, 10, 1000, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 100, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(25, 5, '1040401000-802', 'pcs', '', 'FOLDER', 'BROWN FOLDER', ' ', '100', 9, 8, 'PANTAWID', ' ', 9, 9, 900, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 100, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(26, 5, '1040401000-336', 'ream', '', 'Bond Paper', 'Bond paper , A4', ' ', '1', 280, 8, 'PANTAWID', ' ', 280, 280, 280, 11, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 1, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(27, 6, '1040401000-56', 'Box', '', 'Fastener', 'FASTENER, METAL, 70mm between prongs', ' ', '3', 28, 8, ' ', ' ', 28, 28, 84, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(28, 6, '1040401000-716', 'pcs', '', 'Correction tape', 'Correction tape, general', ' ', '2', 31.5, 8, ' ', ' ', 31.5, 31.5, 63, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(29, 6, '1040401000-804', 'Bottle', '', 'Ink', '003 black epson', ' ', '4', 345, 8, 'PANTAWID', ' ', 345, 345, 1380, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 4, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(30, 6, '1040401000-805', 'pcs', '', 'Logbook', 'Logbook, general', ' ', '2', 80, 8, 'PANTAWID', ' ', 80, 80, 160, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(31, 6, '1040401000-74', 'pcs', '', 'Cutter', 'CUTTER KNIFE, for general purpose', ' ', '2', 29, 8, 'PANTAWID', ' ', 29, 29, 58, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(34, 7, '1040401000-1', 'Bottle', '07-COS-010', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', ' ', '10', 100, 1, 'BS', ' ', 100, 100, 1000, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(35, 8, '1040401000-3', 'Bottle', ' ', 'Cartolina', 'CARTOLINA, assorted colors', ' ', '50', 10, 4, 'HG', ' ', 10, 10, 500, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 50, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(36, 9, '5020201002-696', 'ream', ' ', 'Bond paper', 'Bond paper, A4', ' ', '15', 206, 16, 'RO - SOCTECH', ' ', 206, 206, 3090, 11, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 15, 23, 'Training Expenses', '5020201002', ' ', ' ', '', '', '', ''),
(37, 9, '5020201002-806', 'ream', ' ', 'Bond Paper', 'Long Bond Paper', ' ', '15', 216, 16, 'RO - SOCTECH', ' ', 216, 216, 3240, 11, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 15, 23, 'Training Expenses', '5020201002', ' ', ' ', '', '', '', ''),
(38, 9, '5020201002-807', 'piece', ' ', 'Notebook', '50 leaves notebook', ' ', '57', 22, 16, 'RO - SOCTECH', ' ', 22, 22, 1254, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 57, 23, 'Training Expenses', '5020201002', ' ', ' ', '', '', '', ''),
(39, 9, '5020201002-808', 'piece', ' ', 'Ballpen', 'Good quality black ballpen', ' ', '57', 12, 16, 'RO - SOCTECH', ' ', 12, 12, 684, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 57, 23, 'Training Expenses', '5020201002', ' ', ' ', '', '', '', ''),
(40, 9, '5020201002-809', 'piece', ' ', 'Envelope', 'Plastic envelope with handle', ' ', '57', 65, 16, 'RO - SOCTECH', ' ', 65, 65, 3705, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 57, 23, 'Training Expenses', '5020201002', ' ', ' ', '', '', '', ''),
(41, 9, '5020201002-810', 'piece', ' ', 'Envelope', 'Brown Expanded envelope', ' ', '57', 30, 16, 'RO - SOCTECH', ' ', 30, 30, 1710, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 57, 23, 'Training Expenses', '5020201002', ' ', ' ', '', '', '', ''),
(42, 9, '5020201002-811', 'piece', ' ', 'Tape', 'Correction tape', ' ', '2', 22, 16, 'RO - SOCTECH', ' ', 22, 22, 44, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 23, 'Training Expenses', '5020201002', ' ', ' ', '', '', '', ''),
(43, 9, '5020201002-812', 'Bottle', ' ', 'Ink', 'Epson ink 003 refill', ' ', '5', 455, 16, 'RO - SOCTECH', ' ', 455, 455, 2275, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 5, 23, 'Training Expenses', '5020201002', ' ', ' ', '', '', '', ''),
(44, 10, '1040401000-813', 'piece', ' ', 'Filer', 'Filer jumbo with cover', ' ', '80', 500, 8, 'PANTAWID', ' ', 500, 500, 40000, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 80, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(45, 11, '1040401000-235', 'Box', ' ', 'Sign pen', 'SIGN PEN, RED, liquid/gel ink, 0.5mm needle tip', ' ', '2', 230, 19, 'RO - ORD', ' ', 230, 230, 460, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(46, 11, '1040401000-234', 'Box', ' ', 'Sign pen', 'SIGN PEN, BLUE, liquid/gel ink, 0.5mm needle tip', ' ', '2', 230, 19, 'RO - ORD', ' ', 230, 230, 460, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(47, 11, '1040401000-233', 'Box', ' ', 'Sign pen', 'SIGN PEN, BLACK, liquid/gel ink, 0.5mm needle tip', ' ', '2', 230, 19, 'RO - ORD', ' ', 230, 230, 460, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(48, 11, '1040401000-794', 'pcs', ' ', 'STICKY NOTE', 'STICKY NOTE ROLL, MATERIAL: PAPER + PLASTIC ROLL DESIGN PAPER LENGTH:8M/314.95\"(APPROX)', ' ', '15', 50, 19, 'RO - ORD', ' ', 50, 50, 750, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 15, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(49, 11, '1040401000-823', 'Box', ' ', 'Bond paper', 'Bond paper long', ' ', '2', 1167.39, 19, 'RO - ORD', ' ', 1167.39, 1167.39, 2334.78, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(50, 11, '1040401000-76', 'pcs', ' ', 'Puncher', 'PUNCHER, paper, heavy duty, with two hole guide', ' ', '1', 141.1, 19, 'RO - ORD', ' ', 141.1, 141.1, 141.1, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 1, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(51, 12, '1040503000-828', 'piece', ' ', 'Scanner', 'Portable Scanner', ' ', '1', 12000, 16, 'RO - SOCTECH', ' ', 12000, 12000, 12000, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 1, 11, 'Semi-Expendable Information and Communications Technology Equipment', '1040503000', ' ', 'noneweighted', '', '', '', ''),
(52, 12, '1040407000-829', 'piece', ' ', 'Alcohol', 'Hand Sanitizer Alcohol', ' ', '10', 340, 16, 'RO - SOCTECH', ' ', 340, 340, 3400, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 4, 'Medical, Dental and Laboratory Supplies Inventory', '1040407000', ' ', ' ', '', '', '', ''),
(53, 12, '1040503000-824', 'piece', ' ', 'Printer', 'Epson Printer (Eco tank L3250)', ' ', '2', 10696, 16, 'RO - SOCTECH', ' ', 10696, 10696, 21392, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 11, 'Semi-Expendable Information and Communications Technology Equipment', '1040503000', ' ', 'noneweighted', '', '', '', ''),
(54, 12, '5029901000-825', 'piece', ' ', 'Polo Shirt', 'Polo Shirt Advocacy materials', ' ', '10', 400, 16, 'RO - SOCTECH', ' ', 400, 400, 4000, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 22, 'Advertising, Promotional and Marketing Expenses', '5029901000', ' ', ' ', '', '', '', ''),
(55, 12, '5029901000-827', 'piece', ' ', 'Polo Shirt', 'Polo Shirt Advocacy Materials Pangantucan Buk', ' ', '43', 400, 16, 'RO - SOCTECH', ' ', 400, 400, 17200, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 43, 22, 'Advertising, Promotional and Marketing Expenses', '5029901000', ' ', ' ', '', '', '', ''),
(56, 12, '5029901000-830', 'piece', ' ', 'Polo shirt', 'Yakap Bayan', ' ', '24', 400, 16, 'RO - SOCTECH', ' ', 400, 400, 9600, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 24, 22, 'Advertising, Promotional and Marketing Expenses', '5029901000', ' ', ' ', '', '', '', ''),
(57, 16, '1040406000-831', 'Bottle', ' ', 'Keppra', 'Solution', ' ', '2', 2124, 5, 'RSCC', ' ', 2124, 2124, 10620, 15, '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 5, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(58, 17, '1040406000-831', 'Bottle', ' ', 'Keppra', 'Solution', ' ', ' ', 0, 2, 'RRCY', ' ', 2124, 2124, 10620, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 5, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(59, 20, '1040499000-847', 'Bottle', ' ', 'Cleanser', 'Cetaphil cleanser', ' ', ' ', 0, 5, 'RSCC', ' ', 832, 832, 2496, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 8, 'Other Supplies and Materials Inventory', '1040499000', '2', 'noneweighted', '', '', '', ''),
(60, 23, '1040406000-831', 'Bottle', ' ', 'Keppra', 'Solution', ' ', '4', 2124, 5, 'RSCC', ' ', 2124, 2124, 10620, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 5, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(61, 25, '1040401000-336', 'ream', ' ', 'Bond Paper', 'Bond paper , A4', ' ', '5', 280, 10, 'DRMD', ' ', 280, 280, 2800, 11, '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(62, 17, '1040406000-832', 'Tab', ' ', 'Lexdin', 'Lexdin 10mgs', ' ', '50', 16.75, 2, 'RRCY', ' ', 16.75, 16.75, 837.5, 37, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 50, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(63, 17, '1040406000-833', 'Tab', ' ', 'Responz', '10mgs', ' ', '80', 39.25, 2, 'RRCY', ' ', 39.25, 39.25, 3140, 37, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 80, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(64, 17, '1040406000-834', 'Tab', ' ', 'Baclofen', '10mgs', ' ', '80', 26.5, 2, 'RRCY', ' ', 26.5, 26.5, 2120, 37, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 80, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(65, 17, '1040406000-835', 'Bottle', ' ', 'Phenobarbital', '30mgs', ' ', '8', 305, 2, 'RRCY', ' ', 305, 305, 2440, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 8, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(66, 17, '1040406000-836', 'Bottle', ' ', 'Phenobarbital', '90mgs', ' ', '2', 535, 2, 'RRCY', ' ', 535, 535, 1070, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(67, 17, '1040406000-837', 'Tab', ' ', 'Valpros', '500mgs', ' ', '80', 26.75, 2, 'RRCY', ' ', 26.75, 26.75, 2140, 37, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 80, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(68, 17, '1040406000-838', 'Bottle', ' ', 'Valpros', 'Syrup', ' ', '10', 276.5, 2, 'RRCY', ' ', 276.5, 276.5, 2765, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(69, 17, '1040406000-839', 'Bottle', ' ', 'Omegabloc', 'Omegabloc ,general', ' ', '8', 360, 2, 'RRCY', ' ', 360, 360, 2880, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 8, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(70, 17, '1040406000-840', 'Bottle', ' ', 'Paracetamol', 'Tempra syrup (120ml)', ' ', '10', 159.5, 2, 'RRCY', ' ', 159.5, 159.5, 1595, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(71, 17, '1040406000-841', 'Box', ' ', 'Hydrite', 'Granules', ' ', '1', 1575, 2, 'RRCY', ' ', 1575, 1575, 1575, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 1, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(72, 17, '1040406000-842', 'Piece', ' ', 'Hydrasec', 'Granules', ' ', '50', 55, 2, 'RRCY', ' ', 55, 55, 2750, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 50, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(73, 17, '1040406000-843', 'Bottle', ' ', 'Phenylephrine', 'syrup,drops', ' ', '12', 113, 2, 'RRCY', ' ', 113, 113, 1356, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 12, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(74, 17, '1040406000-844', 'Tube', ' ', 'Terramycin', 'Opthatmic drop', ' ', '2', 689, 2, 'RRCY', ' ', 689, 689, 1378, 23, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 3, 'Drugs and Medicines Inventory', '1040406000', ' ', ' ', '', '', '', ''),
(75, 28, '1040401000-803', 'Box', ' ', 'SIGN PEN', 'SIGN PEN, GENERAL /BOX', ' ', ' ', 0, 10, 'DRMD', ' ', 294.99, 213.3, 2133, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(76, 30, '5029901000-852', 'Piece', ' ', 'Planner', 'Social technology planner', ' ', '83', 600, 16, ' ', ' ', 600, 600, 49800, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 83, 22, 'Advertising, Promotional and Marketing Expenses', '5029901000', ' ', ' ', '', '', '', ''),
(77, 30, '1040503000-851', 'Piece', ' ', 'Printer', 'Printer wifi all in one tank printer', ' ', '3', 14500, 16, ' ', ' ', 14500, 14500, 43500, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 11, 'Semi-Expendable Information and Communications Technology Equipment', '1040503000', ' ', 'noneweighted', '', '', '', ''),
(78, 30, '1040601000-849', 'Piece', ' ', 'Cabinet', 'Mobile cabinet', ' ', '3', 4000, 16, ' ', ' ', 4000, 4000, 12000, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 17, 'Semi-Expendable Furniture and Fixtures', '1040601000', ' ', 'noneweighted', '', '', '', ''),
(79, 30, '1040601000-850', 'Piece', ' ', 'Chair', 'Shivel', ' ', '3', 7000, 16, ' ', ' ', 7000, 7000, 21000, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 17, 'Semi-Expendable Furniture and Fixtures', '1040601000', ' ', 'noneweighted', '', '', '', ''),
(80, 31, '1040401000-854', 'Piece', ' ', 'STAMP PAD', 'STAMP PAD, GENERAL', ' ', '3', 52.79, 8, 'PANTAWID', ' ', 52.79, 52.8, 158.39999999999998, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(81, 31, '1040401000-803', 'Box', ' ', 'SIGN PEN', 'SIGN PEN, GENERAL /BOX', ' ', '7', 294.99, 8, 'PANTAWID', ' ', 294.99, 330, 2310, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 7, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(82, 31, '1040401000-870', 'Box', ' ', 'Bond paper', 'Bond paper, A4 (Box)', ' ', '10', 1200, 8, 'PANTAWID', ' ', 1200, 1200, 12000, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(83, 31, '1040401000-871', 'Box', ' ', 'Bond paper', 'Bond paper, legal (Box)', ' ', '10', 1200, 8, 'PANTAWID', ' ', 1200, 1200, 12000, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(84, 31, '1040401000-56', 'Box', ' ', 'Fastener', 'FASTENER, METAL, 70mm between prongs', ' ', '3', 28, 8, 'PANTAWID', ' ', 28, 28, 84, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(85, 31, '1040401000-793', 'piece', ' ', 'TAPE', 'MASKING TAPE 2-INCH DIAMETER', ' ', '5', 80, 8, 'PANTAWID', ' ', 77.14, 80, 400, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 5, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(86, 31, '1040401000-78', 'Piece', ' ', 'Stapler', 'STAPLER, STANDARD TYPE, load cap: 200 staples min', ' ', '5', 203.5, 8, 'PANTAWID', ' ', 203.5, 203.5, 1017.5, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 5, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(87, 31, '1040401000-77', 'Piece', ' ', 'Scissor', 'SCISSORS, symmetrical, blade length: 65mm min', ' ', '10', 45, 8, 'PANTAWID', ' ', 45, 45, 450, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 10, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(88, 31, '1040401000-27', 'Piece', ' ', 'Ruler', 'RULER, plastic, 450mm (18\"), width: 38mm min', ' ', '3', 25, 8, 'PANTAWID', ' ', 25, 25, 75, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(89, 31, '1040401000-858', 'Bottle', ' ', 'INK 003', 'Black', ' ', '20', 350, 8, 'PANTAWID', ' ', 350, 350, 7000, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(90, 31, '1040401000-857', 'Bottle', ' ', 'INK 003', 'Cyan', ' ', '20', 350, 8, 'PANTAWID', ' ', 350, 350, 7000, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(91, 31, '1040401000-856', 'Bottle', ' ', 'INK 003', 'Yellow', ' ', '20', 350, 8, 'PANTAWID', ' ', 350, 350, 7000, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(92, 31, '1040401000-855', 'Bottle', ' ', 'INK 003', 'INK 003 Magenta', ' ', '20', 350, 8, 'PANTAWID', ' ', 350, 350, 7000, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(93, 31, '1040401000-859', 'Cartridge', ' ', 'HP 680', 'Black', ' ', '20', 600, 8, 'PANTAWID', ' ', 600, 600, 12000, 43, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(94, 31, '1040401000-860', 'Cartridge', ' ', 'HP 680', 'HP 680 colored', ' ', '20', 600, 8, 'PANTAWID', ' ', 600, 600, 12000, 43, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(95, 31, '1040401000-861', 'Box', ' ', 'Pentel pen', 'Pentel pen', ' ', '2', 38, 8, 'PANTAWID', ' ', 38, 38, 76, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(96, 31, '1040401000-716', 'pcs', ' ', 'Correction tape', 'Correction tape, general', ' ', '20', 31.5, 8, 'PANTAWID', ' ', 31.5, 31.5, 630, 12, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(97, 31, '1040401000-26', 'Box', ' ', 'Staple wire', 'STAPLE WIRE, STANDARD, (26/6)', ' ', '5', 42, 8, 'PANTAWID', ' ', 42, 42, 210, 13, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 5, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(98, 31, '1040401000-863', 'Roll', ' ', 'Tape', 'Tape packaging', ' ', '4', 58, 8, 'PANTAWID', ' ', 58, 58, 232, 10, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 4, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(99, 31, '1040401000-864', 'Roll', ' ', 'Tape', 'Scotch tape', ' ', '3', 75, 8, 'PANTAWID', ' ', 75, 75, 225, 10, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(100, 31, '1040401000-865', 'Bottle', ' ', 'INK 664', 'Black', ' ', '4', 350, 8, 'PANTAWID', ' ', 350, 350, 1400, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 4, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(101, 31, '1040401000-866', 'Bottle', ' ', 'INK 664', 'INK 664 Cyan', ' ', '4', 350, 8, 'PANTAWID', ' ', 350, 350, 1400, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 4, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(102, 31, '1040401000-867', 'Bottle', ' ', 'INK 664', 'INK 664 magenta', ' ', '4', 350, 8, 'PANTAWID', ' ', 350, 350, 1400, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 4, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(103, 31, '1040401000-868', 'Bottle', ' ', 'INK 664', 'INK 664 yellow', ' ', '4', 350, 8, 'PANTAWID', ' ', 350, 350, 1400, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 4, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(105, 31, '1040401000-872', 'Roll', ' ', 'Tissue', 'Tissue, general', ' ', '45', 15, 8, ' ', ' ', 15, 15, 675, 10, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 45, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', ''),
(106, 32, '5020399000-873', 'Piece', ' ', 'Plywood', 'Marine plywood (PLIGO)', ' ', '14', 800, 11, ' ', ' ', 800, 800, 11200, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 14, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(107, 32, '5020399000-874', 'Piece', ' ', 'Hinges', 'Hydraulic Hinges', ' ', '46', 120, 11, ' ', ' ', 120, 120, 5520, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 46, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(108, 32, '5020399000-875', 'Kilogram', ' ', 'Nails', 'Finishing nails NO.2', ' ', '3', 145, 11, ' ', ' ', 145, 145, 435, 4, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(109, 32, '5020399000-876', 'Kilogram', ' ', 'Nails', 'Finishing nails NO.1 1/2', ' ', '3', 145, 11, ' ', ' ', 145, 145, 435, 4, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(110, 32, '5020399000-877', 'Gallon', ' ', 'Enamel', 'Flat wall white enamel', ' ', '3', 665, 11, ' ', ' ', 665, 665, 1995, 14, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(111, 32, '5020399000-878', 'Gallon', ' ', 'Enamel', 'Gloss enamel - ready mixed mint green', ' ', '4', 980, 11, ' ', ' ', 980, 980, 3920, 14, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 4, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(112, 32, '5020399000-879', 'Piece', ' ', 'Brush', 'Paint brush', ' ', '3', 100, 11, ' ', ' ', 100, 100, 300, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(113, 32, '5020399000-880', 'Bottle', ' ', 'Thinner', 'Paint Thinner', ' ', '4', 58, 11, ' ', ' ', 58, 58, 232, 15, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 4, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(114, 32, '5020399000-881', 'Piece', ' ', 'Sandpaper', 'Sandpaper NO.120', ' ', '3', 30, 11, ' ', ' ', 30, 30, 90, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 3, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(115, 32, '5020399000-882', 'Piece', ' ', 'Roller', 'Baby Roller', ' ', '2', 110, 11, ' ', ' ', 110, 110, 220, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(116, 32, '5020399000-883', 'Piece', ' ', 'Roller Tray', 'Paint roller tray', ' ', '2', 75, 11, ' ', ' ', 75, 75, 150, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 2, 25, 'Other Supplies Expenses', '5020399000', ' ', ' ', '', '', '', ''),
(117, 33, '1040601000-884', 'Piece', ' ', 'Table', 'Coffee table set', ' ', '1', 5000, 11, 'RO - ARRS', ' ', 5000, 5000, 5000, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 1, 17, 'Semi-Expendable Furniture and Fixtures', '1040601000', ' ', 'noneweighted', '', '', '', ''),
(118, 33, '1040601000-690', 'Piece', ' ', 'Cabinet', 'Steel Cabinet', ' ', '1', 6000, 11, 'RO - ARRS', ' ', 6000, 6000, 6000, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 1, 17, 'Semi-Expendable Furniture and Fixtures', '1040601000', ' ', 'noneweighted', '', '', '', ''),
(119, 33, '1040601000-886', 'Piece', ' ', 'Chair', 'Office chair', ' ', '20', 4250, 11, 'RO - ARRS', ' ', 4250, 4250, 85000, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 20, 17, 'Semi-Expendable Furniture and Fixtures', '1040601000', ' ', 'noneweighted', '', '', '', ''),
(120, 34, '5029901000-887', 'Piece', ' ', 'Vest', 'DSWD RED VEST', ' ', '137', 1450, 11, 'RO - ARRS', ' ', 1450, 1450, 198650, 1, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 137, 22, 'Advertising, Promotional and Marketing Expenses', '5029901000', ' ', ' ', '', '', '', ''),
(123, 36, '1040401000-191', 'Cartridge', ' ', 'Toner', 'Toner Cartridge, HP CF283A (HP83A) LaserJet Black', ' ', '5', 2950, 8, 'PANTAWID', ' ', 2950, 2950, 14750, 43, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '', 5, 1, 'Office Supplies Inventory', '1040401000', ' ', ' ', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tblpohdr`
--

CREATE TABLE `tblpohdr` (
  `po_id` bigint(20) NOT NULL,
  `po_num` varchar(500) NOT NULL,
  `supplier_idlink` bigint(20) NOT NULL,
  `supplier` varchar(500) NOT NULL,
  `sup_address` varchar(5000) NOT NULL,
  `sup_tin` varchar(500) NOT NULL,
  `po_date` date NOT NULL,
  `mode_procurement` varchar(500) NOT NULL,
  `orsburs_no` varchar(500) NOT NULL,
  `date_orsburs` date NOT NULL,
  `amount_orsburs` double NOT NULL,
  `award_date` date NOT NULL,
  `office` varchar(500) NOT NULL,
  `uacs_code` varchar(500) NOT NULL,
  `office_code` varchar(500) NOT NULL,
  `office_idlink` bigint(20) NOT NULL,
  `fund_idlink` bigint(20) NOT NULL,
  `fund_name` varchar(200) NOT NULL,
  `fund_code` varchar(200) NOT NULL,
  `status` varchar(1500) NOT NULL,
  `cancellation_status` varchar(1000) NOT NULL,
  `cancellation_reason` varchar(5000) NOT NULL,
  `canceled_by` varchar(1000) NOT NULL,
  `center_name` varchar(1500) NOT NULL,
  `center_idlink` bigint(20) NOT NULL,
  `subadmin_access` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblpohdr`
--

INSERT INTO `tblpohdr` (`po_id`, `po_num`, `supplier_idlink`, `supplier`, `sup_address`, `sup_tin`, `po_date`, `mode_procurement`, `orsburs_no`, `date_orsburs`, `amount_orsburs`, `award_date`, `office`, `uacs_code`, `office_code`, `office_idlink`, `fund_idlink`, `fund_name`, `fund_code`, `status`, `cancellation_status`, `cancellation_reason`, `canceled_by`, `center_name`, `center_idlink`, `subadmin_access`) VALUES
(1, '2021-10-06666', 18, 'ACE DE ORO COMMERCIAL', 'CAGAYAN DE ORO CITY', ' ', '2021-12-17', 'Competitive Bidding', ' ', '0000-00-00', 5000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'HAVEN', 3, 0),
(2, '2021-10-1058', 5, 'GLORIETTA MARKETING CORPORATION', 'Cagayan de Oro City', ' ', '2021-10-20', 'Competitive Bidding', ' ', '0000-00-00', 8265, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - SECTORAL', 21, 1),
(3, '2021-10-1033', 34, 'MERCURY DRUG CORPORATION', 'TOMAS SACO, CAGAYAN DE ORO CITY', '000-388-474-00585', '2021-10-28', 'Competitive Bidding', ' ', '0000-00-00', 139660, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - HRW', 28, 1),
(4, 'FOR REQUEST', 5, 'GLORIETTA MARKETING CORPORATION', 'Cagayan de Oro City', ' ', '2021-09-09', 'Competitive Bidding', ' ', '0000-00-00', 1500, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'PANTAWID', 8, 0),
(5, 'FOR REQUEST PANTAWID', 28, 'KAJ SCHOOL AND OFFICE SUPPLIES TRADING', 'PABAYO ST., CAGAYAN DE ORO CITY', '335-278-412', '2022-01-06', 'Competitive Bidding', ' ', '0000-00-00', 10000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'PANTAWID', 8, 0),
(6, 'Request pantawid', 28, 'KAJ SCHOOL AND OFFICE SUPPLIES TRADING', 'PABAYO ST., CAGAYAN DE ORO CITY', '335-278-412', '2022-01-13', 'Competitive Bidding', ' ', '0000-00-00', 100000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'PANTAWID', 8, 0),
(7, 'testing', 18, 'ACE DE ORO COMMERCIAL', 'CAGAYAN DE ORO CITY', ' ', '2022-01-24', 'Competitive Bidding', ' ', '0000-00-00', 1000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'BS', 1, 0),
(8, '2021-140-121211', 18, 'ACE DE ORO COMMERCIAL', 'CAGAYAN DE ORO CITY', ' ', '2022-01-25', 'Competitive Bidding', ' ', '0000-00-00', 500, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'HG', 4, 0),
(9, '2021-12-1252', 28, 'KAJ SCHOOL AND OFFICE SUPPLIES TRADING', 'PABAYO ST., CAGAYAN DE ORO CITY', '335-278-412', '2022-02-02', 'Competitive Bidding', ' ', '0000-00-00', 16002, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - SOCTECH', 16, 1),
(10, 'request for pantawid 2/3/2022', 28, 'KAJ SCHOOL AND OFFICE SUPPLIES TRADING', 'PABAYO ST., CAGAYAN DE ORO CITY', '335-278-412', '2022-02-03', 'Competitive Bidding', ' ', '0000-00-00', 40000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'PANTAWID', 8, 0),
(11, 'ORD request 2021-09-0393', 20, 'MICROTRONIX MARKETING SALES AND SERVICES CENTER', '100 Gomez st., Cagayand de Oro City', ' ', '2022-02-08', 'Competitive Bidding', ' ', '0000-00-00', 2000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - ORD', 19, 1),
(12, 'SOCTECH request', 5, 'GLORIETTA MARKETING CORPORATION', 'Cagayan de Oro City', ' ', '2022-02-10', 'Competitive Bidding', ' ', '0000-00-00', 15000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - SOCTECH', 16, 1),
(13, 'test', 18, 'ACE DE ORO COMMERCIAL', 'CAGAYAN DE ORO CITY', ' ', '2022-02-21', 'Competitive Bidding', ' ', '0000-00-00', 12000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - SUPPLY', 9, 0),
(14, '2021-10-1000', 3, 'ACE HARDWARE', 'Patag Highway', '12334564', '2022-02-21', 'Competitive Bidding', ' ', '0000-00-00', 40000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - SECTORAL', 21, 1),
(15, '202120', 15, 'BIOMEDICAL TRADE MERCHANDISE AND SERVICES', 'Capistrano-Kalambaguhan, CAGAYAN DE ORO CITY', '253-002-594-000', '2022-02-21', 'Competitive Bidding', ' ', '0000-00-00', 20000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - SECTORAL', 21, 1),
(16, '2021-11-1130', 34, 'MERCURY DRUG CORPORATION', 'TOMAS SACO, CAGAYAN DE ORO CITY', '000-388-474-00585', '2021-11-17', 'Competitive Bidding', ' ', '0000-00-00', 43850, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RSCC', 5, 0),
(17, '2021-11-1128', 34, 'MERCURY DRUG CORPORATION', 'TOMAS SACO, CAGAYAN DE ORO CITY', '000-388-474-00585', '2021-11-17', 'Competitive Bidding', ' ', '0000-00-00', 43850.5, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RRCY', 2, 0),
(18, '2021-11-1129', 34, 'MERCURY DRUG CORPORATION', 'TOMAS SACO, CAGAYAN DE ORO CITY', '000-388-474-00585', '2021-11-17', 'Competitive Bidding', ' ', '0000-00-00', 0, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'KALAHI', 25, 0),
(19, '2021-11-1129a', 34, 'MERCURY DRUG CORPORATION', 'TOMAS SACO, CAGAYAN DE ORO CITY', '000-388-474-00585', '2021-11-17', 'Competitive Bidding', ' ', '0000-00-00', 43850.5, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RSCC', 5, 0),
(20, '2021-11-1129c', 34, 'MERCURY DRUG CORPORATION', 'TOMAS SACO, CAGAYAN DE ORO CITY', '000-388-474-00585', '2022-02-22', 'Competitive Bidding', ' ', '0000-00-00', 43, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RSCC', 5, 0),
(21, '2021-11-1128e', 34, 'MERCURY DRUG CORPORATION', 'TOMAS SACO, CAGAYAN DE ORO CITY', '000-388-474-00585', '2022-02-22', 'Competitive Bidding', ' ', '0000-00-00', 43850.5, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RSCC', 5, 0),
(22, '2021-06-0608', 7, 'EG Tech Enterprise', 'Corrales Hayes St.,', ' ', '2022-02-22', 'Competitive Bidding', ' ', '0000-00-00', 0, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'KALAHI', 25, 0),
(23, '2021-12-10101', 15, 'BIOMEDICAL TRADE MERCHANDISE AND SERVICES', 'Capistrano-Kalambaguhan, CAGAYAN DE ORO CITY', '253-002-594-000', '2022-02-22', 'Competitive Bidding', ' ', '0000-00-00', 5000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RSCC', 5, 0),
(24, '2021445-7894', 18, 'ACE DE ORO COMMERCIAL', 'CAGAYAN DE ORO CITY', ' ', '2022-02-22', 'Competitive Bidding', ' ', '0000-00-00', 1000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'DRMD', 10, 0),
(25, '2020-15-1478', 5, 'GLORIETTA MARKETING CORPORATION', 'Cagayan de Oro City', ' ', '2022-02-24', 'Competitive Bidding', ' ', '0000-00-00', 1000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'DRMD', 10, 0),
(26, '2021-12-1192', 34, 'MERCURY DRUG CORPORATION', 'TOMAS SACO, CAGAYAN DE ORO CITY', '000-388-474-00585', '2021-12-12', 'Competitive Bidding', ' ', '0000-00-00', 43, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - SUPPLY', 9, 0),
(27, '1234-15-4789', 5, 'GLORIETTA MARKETING CORPORATION', 'Cagayan de Oro City', ' ', '2022-02-22', 'Competitive Bidding', ' ', '0000-00-00', 100000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'DRMD', 10, 0),
(28, '9999-99-9999', 5, 'GLORIETTA MARKETING CORPORATION', 'Cagayan de Oro City', ' ', '2022-02-22', 'Competitive Bidding', ' ', '0000-00-00', 100, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'DRMD', 10, 0),
(29, 'SOCTECH REQUEST 2', 31, 'INTELISOFT MICROCOMPUTER SYSTEMS', 'FERNANDEZ- TIANO STS., CAGAYAN DE ORO CITY', '106-128-099', '2022-03-04', 'Competitive Bidding', ' ', '0000-00-00', 5000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - SOCTECH', 16, 1),
(30, 'SOCTECH REQUEST 1', 31, 'INTELISOFT MICROCOMPUTER SYSTEMS', 'FERNANDEZ- TIANO STS., CAGAYAN DE ORO CITY', '106-128-099', '2022-03-04', 'Competitive Bidding', ' ', '0000-00-00', 50000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - SOCTECH', 16, 1),
(31, 'REQUEST PANTAWID 2', 35, 'VARIOUS SUPPLIER', 'VARIOUS SUPPLIER', 'VARIOUS SUPPLIER', '2022-03-07', 'Competitive Bidding', ' ', '0000-00-00', 88142.9, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'PANTAWID', 8, 0),
(32, '2021-12-1358', 36, 'ALDRICCO GENERAL MERCHANDISE', '73 Yacapin Ext. Brgy. 32 (Pob.), Cagayan de Oro City', '445-649-657', '2022-03-08', 'Competitive Bidding', ' ', '0000-00-00', 24497, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - ARRS', 11, 1),
(33, '2021-11-1244', 5, 'GLORIETTA MARKETING CORPORATION', 'Cagayan de Oro City', ' ', '2022-03-08', 'Competitive Bidding', ' ', '0000-00-00', 96000, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - ARRS', 11, 1),
(34, '2021-12-1318', 37, 'A and R Clothing solutions', ' ', ' ', '2022-03-08', 'Competitive Bidding', ' ', '0000-00-00', 198650, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'RO - ARRS', 11, 1),
(36, 'Pantawid request', 35, 'VARIOUS SUPPLIER', 'VARIOUS SUPPLIER', 'VARIOUS SUPPLIER', '2022-03-10', 'Competitive Bidding', ' ', '0000-00-00', 147500, '0000-00-00', ' ', ' ', ' ', 0, 3, 'Regular Agency Fund', '01', 'UNPAID', '', '', '', 'PANTAWID', 8, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tblrisdtl`
--

CREATE TABLE `tblrisdtl` (
  `ris_dtl_id` bigint(20) NOT NULL,
  `ris_hdridlink` bigint(20) NOT NULL,
  `po_id` bigint(20) NOT NULL,
  `podtl_id` bigint(20) NOT NULL,
  `unit` varchar(1500) NOT NULL,
  `item_name` varchar(2000) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `qty` double NOT NULL,
  `center_idlink` bigint(20) NOT NULL,
  `center_name` varchar(2000) NOT NULL,
  `property_no` varchar(2000) NOT NULL,
  `po_num` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblrisdtl`
--

INSERT INTO `tblrisdtl` (`ris_dtl_id`, `ris_hdridlink`, `po_id`, `podtl_id`, `unit`, `item_name`, `description`, `qty`, `center_idlink`, `center_name`, `property_no`, `po_num`) VALUES
(6, 7, 3, 13, 'Bottle', 'ALCOHOL', 'ISOPROPYL ALCOHOL(1 LITER)', 10, 28, 'RO - HRW', '1040407000-796', '2021-10-1033'),
(7, 7, 3, 14, 'Box', 'FACE MASK', 'FACE MASK / BOX', 20, 28, 'RO - HRW', '1040407000-797', '2021-10-1033'),
(8, 8, 8, 35, 'Bottle', 'Cartolina', 'CARTOLINA, assorted colors', 20, 4, 'HG', '1040401000-3', '2021-140-121211');

-- --------------------------------------------------------

--
-- Table structure for table `tblrishdr`
--

CREATE TABLE `tblrishdr` (
  `ris_idhdr` bigint(20) NOT NULL,
  `ris_no` varchar(2000) NOT NULL,
  `responsibility_center` varchar(2000) NOT NULL,
  `status` varchar(2000) NOT NULL,
  `ris_date` date NOT NULL,
  `center_idlink` bigint(20) NOT NULL,
  `center_name` varchar(1500) NOT NULL,
  `center_fname` varchar(1500) NOT NULL,
  `purpose` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblrishdr`
--

INSERT INTO `tblrishdr` (`ris_idhdr`, `ris_no`, `responsibility_center`, `status`, `ris_date`, `center_idlink`, `center_name`, `center_fname`, `purpose`) VALUES
(4, '2022-02-4', 'HRW', 'PENDING', '2022-02-27', 4, 'HG', 'HOME FOR GIRLS', 'TEST'),
(5, '2022-02-5', 'PSD', 'APPROVED', '2022-02-27', 4, 'HG', 'HOME FOR GIRLS', 'TEST'),
(7, '2022-02-7', 'HRW', 'PENDING', '2022-02-27', 28, 'RO - HRW', 'HUMAN RESOURCE AND WELFARE', 'Workshop'),
(8, '2022-03-8', 'HG', 'PENDING', '2022-03-10', 4, 'HG', 'HOME FOR GIRLS', 'NURSE supplies');

-- --------------------------------------------------------

--
-- Table structure for table `tblris_series`
--

CREATE TABLE `tblris_series` (
  `id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblris_series`
--

INSERT INTO `tblris_series` (`id`) VALUES
(0),
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8);

-- --------------------------------------------------------

--
-- Table structure for table `tblsignaturedesignation`
--

CREATE TABLE `tblsignaturedesignation` (
  `SigID` bigint(20) NOT NULL,
  `Signature` varchar(150) NOT NULL,
  `Designation` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblsignaturedesignation`
--

INSERT INTO `tblsignaturedesignation` (`SigID`, `Signature`, `Designation`) VALUES
(3, 'KURT TIEMPO', 'AO II /IT'),
(4, 'HANILYN T. CIMAFRANCA, CPA', 'CHIEF ACCOUNTANT / HEAD OF ACCOUNTING DIVISION / UNIT'),
(5, 'JAYSON C. CAGA-ANAN', 'PDO II'),
(6, 'JOEY P. HUKDONG', 'WAREHOUSE MAN'),
(7, 'FELIX Y. BILBAR', 'WAREHOUSE MAN'),
(8, 'JADE V. LUSTRE, CPA', 'AO - II'),
(9, 'IRENE T. ACAO', 'AA-III'),
(10, 'RHEAN S. ESFRA', 'AA-III'),
(11, 'JULIAN MARTIN S. DOLLENTE', 'AA-II'),
(12, 'DARYL T. TANGGOL', 'AA-VI'),
(13, 'NOEL JOSEPH V. VILLANUEVA', 'AO-III'),
(14, 'REAGAN M. AZUELO', 'ITO-II/RICTMS HEAD'),
(15, 'RETSON R. LADICA', 'AA-IV'),
(16, 'EVELYN S. MADRIO', 'SWO IV / SOCTECH HEAD'),
(17, 'MONAVIC M. BUDIONGAN', 'ADMIN-CHIEF'),
(18, 'JORLAN SALICO', 'AA - III'),
(19, 'MONAVIC BUDIONGAN', 'SWO-IV/ADMIN HEAD');

-- --------------------------------------------------------

--
-- Table structure for table `tblslc`
--

CREATE TABLE `tblslc` (
  `slc_id` bigint(20) NOT NULL,
  `stock_no` varchar(2000) NOT NULL,
  `pohdr_idlink` bigint(20) NOT NULL,
  `podtl_idlink` bigint(20) NOT NULL,
  `po_num` varchar(500) NOT NULL,
  `fund_idlink` bigint(20) NOT NULL,
  `fund_name` varchar(500) NOT NULL,
  `fund_code` varchar(500) NOT NULL,
  `item_name` varchar(5000) NOT NULL,
  `item_description` varchar(5000) NOT NULL,
  `unit_idlink` bigint(20) NOT NULL,
  `unit_name` varchar(500) NOT NULL,
  `item_code` varchar(500) NOT NULL,
  `reorder_point` varchar(500) NOT NULL,
  `ris` varchar(500) NOT NULL,
  `jev` varchar(500) NOT NULL,
  `qty_rec` double NOT NULL,
  `unit_rec` double NOT NULL,
  `totalcost_rec` double NOT NULL,
  `qty_issue` double NOT NULL,
  `unitcost_issue` double NOT NULL,
  `totalcost_issue` double NOT NULL,
  `qty_bal` double NOT NULL,
  `unitcost_bal` double NOT NULL,
  `totalcost_bal` double NOT NULL,
  `daysto_consume` varchar(500) NOT NULL,
  `trans_date` date NOT NULL,
  `delivery` varchar(1000) NOT NULL,
  `office` varchar(500) NOT NULL,
  `office_code` varchar(500) NOT NULL,
  `office_idlink` bigint(20) NOT NULL,
  `division_unit` varchar(2000) NOT NULL,
  `cancellation_status` varchar(1000) NOT NULL,
  `cancellation_reason` varchar(1000) NOT NULL,
  `canceled_by` varchar(500) NOT NULL,
  `batch_idlink` bigint(20) NOT NULL,
  `batch_no` varchar(1000) NOT NULL,
  `remarks` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblslc`
--

INSERT INTO `tblslc` (`slc_id`, `stock_no`, `pohdr_idlink`, `podtl_idlink`, `po_num`, `fund_idlink`, `fund_name`, `fund_code`, `item_name`, `item_description`, `unit_idlink`, `unit_name`, `item_code`, `reorder_point`, `ris`, `jev`, `qty_rec`, `unit_rec`, `totalcost_rec`, `qty_issue`, `unitcost_issue`, `totalcost_issue`, `qty_bal`, `unitcost_bal`, `totalcost_bal`, `daysto_consume`, `trans_date`, `delivery`, `office`, `office_code`, `office_idlink`, `division_unit`, `cancellation_status`, `cancellation_reason`, `canceled_by`, `batch_idlink`, `batch_no`, `remarks`) VALUES
(1, '', 1, 1, '2021-10-06666', 3, 'Regular Agency Fund', '01', 'Ink', 'Epson Ink, 4 colors (not refill)', 12, 'pcs', '5020201002-712', ' ', ' ', ' ', 10, 500, 5000, 0, 0, 0, 10, 500, 5000, ' ', '2021-12-17', '1st', 'Training Expenses', ' ', 23, 'HAVEN', '', '', '', 0, '', ''),
(2, '', 2, 11, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'STICKY NOTE', 'STICKY NOTE ROLL, MATERIAL: PAPER + PLASTIC ROLL DESIGN PAPER LENGTH:8M/314.95\"(APPROX)', 10, 'roll', '1040401000-794', ' ', ' ', ' ', 22, 50, 1100, 0, 0, 0, 22, 50, 1100, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', ''),
(3, '', 2, 10, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'TAPE', 'MASKING TAPE 2-INCH DIAMETER', 1, 'piece', '1040401000-793', ' ', ' ', ' ', 2, 70, 140, 0, 0, 0, 2, 70, 140, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', ''),
(4, '', 2, 9, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'MANILA PAPER', 'MANILA PAPER, GENERAL', 1, 'piece', '1040401000-792', ' ', ' ', ' ', 20, 10, 200, 0, 0, 0, 20, 10, 200, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', ''),
(5, '', 2, 8, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'NOTEBOOK', 'HIGH QUALITY NOTEBOOK', 1, 'piece', '1040401000-791', ' ', ' ', ' ', 25, 30, 750, 0, 0, 0, 25, 30, 750, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', ''),
(6, '', 2, 7, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'METACARDS', 'METACARDS, GENERAL', 41, 'Rea', '1040401000-790', ' ', ' ', ' ', 4, 50, 200, 0, 0, 0, 4, 50, 200, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', ''),
(7, '', 2, 6, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'BOARD PEN', 'HIGH QUALITY PENTEL BOARD PEN / BOX', 13, 'Box', '1040401000-789', ' ', ' ', ' ', 1, 500, 500, 0, 0, 0, 1, 500, 500, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', ''),
(8, '', 2, 5, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'SIGN PEN', 'HIGH QUALITY BLACK SIGN PEN .7MM / BOX', 13, 'Box', '1040401000-788', ' ', ' ', ' ', 2, 400, 800, 0, 0, 0, 2, 400, 800, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', ''),
(9, '', 2, 4, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'ENVELOPE', 'BROWN ENVELOPE', 1, 'piece', '1040401000-787', ' ', ' ', ' ', 25, 3, 75, 0, 0, 0, 25, 3, 75, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', ''),
(10, '', 2, 3, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'SPECIAL PAPER', 'SCENTED SPECIAL PAPER WHITE 90 GSM / PACK', 6, 'pack', '1040401000-786', ' ', ' ', ' ', 10, 200, 2000, 0, 0, 0, 10, 200, 2000, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', ''),
(11, '', 2, 2, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'Certificate holder', 'Certificate holder', 1, 'piece', '1040401000-785', ' ', ' ', ' ', 25, 100, 2500, 0, 0, 0, 25, 100, 2500, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', ''),
(12, '', 3, 14, '2021-10-1033', 3, 'Regular Agency Fund', '01', 'FACE MASK', 'FACE MASK / BOX', 13, 'Box', '1040407000-797', ' ', ' ', ' ', 50, 150, 7500, 0, 0, 0, 50, 150, 7500, ' ', '2021-12-20', '1st', 'Medical, Dental and Laboratory Supplies Inventory', ' ', 4, 'RO - HRW', '', '', '', 0, '', ''),
(13, '', 3, 13, '2021-10-1033', 3, 'Regular Agency Fund', '01', 'ALCOHOL', 'ISOPROPYL ALCOHOL(1 LITER)', 15, 'Bottle', '1040407000-796', ' ', ' ', ' ', 40, 184, 7360, 0, 0, 0, 40, 184, 7360, ' ', '2021-12-20', '1st', 'Medical, Dental and Laboratory Supplies Inventory', ' ', 4, 'RO - HRW', '', '', '', 0, '', ''),
(14, '', 3, 12, '2021-10-1033', 3, 'Regular Agency Fund', '01', 'ALCOHOL', 'ISOPROPYL ALCOHOL(350ML)', 15, 'Bottle', '1040407000-795', ' ', ' ', ' ', 1600, 78, 124800, 0, 0, 0, 1600, 78, 124800, ' ', '2021-12-20', '1st', 'Medical, Dental and Laboratory Supplies Inventory', ' ', 4, 'RO - HRW', '', '', '', 0, '', ''),
(15, '', 4, 15, 'FOR REQUEST', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'PAPER, Multi-Purpose (COPY) Legal, 70 gsm', 13, 'Box', '1040401000-18', ' ', ' ', ' ', 3, 500, 1500, 0, 0, 0, 3, 500, 1500, ' ', '2021-12-09', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(16, '', 5, 25, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'FOLDER', 'BROWN FOLDER', 12, 'pcs', '1040401000-802', ' ', ' ', ' ', 100, 9, 900, 0, 0, 0, 100, 9, 900, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(17, '', 5, 24, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'FOLDER', 'FOLDER (PINK)', 12, 'pcs', '1040401000-801', ' ', ' ', ' ', 100, 10, 1000, 0, 0, 0, 100, 10, 1000, ' ', '2022-01-24', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(18, '', 5, 23, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Ink', 'INK CART, CANON PG-810, COLORED', 12, 'pcs', '1040401000-800', ' ', ' ', ' ', 20, 1405, 28100, 0, 0, 0, 20, 1405, 28100, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(19, '', 5, 22, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Ink', 'INK CART, CANON PG-810, Black', 12, 'pcs', '1040401000-99', ' ', ' ', ' ', 20, 1045, 20900, 0, 0, 0, 20, 1045, 20900, ' ', '2021-12-28', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(20, '', 5, 21, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'SCISSOR', 'SCISSOR, GENERAL', 12, 'pcs', '1040401000-799', ' ', ' ', ' ', 3, 17.55, 52.650000000000006, 0, 0, 0, 3, 17.55, 52.650000000000006, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(21, '', 5, 20, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Puncher', 'PUNCHER, paper, heavy duty, with two hole guide', 12, 'pcs', '1040401000-76', ' ', ' ', ' ', 1, 141.1, 141.1, 0, 0, 0, 1, 141.1, 141.1, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(22, '', 5, 19, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'SIGN PEN', 'SIGN PEN, GENERAL /BOX', 13, 'Box', '1040401000-803', ' ', ' ', ' ', 3, 213.3, 639.9000000000001, 0, 0, 0, 3, 213.3, 639.9000000000001, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(23, '', 5, 18, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'USB', 'FLASH DRIVE, 16 GB capacity', 12, 'pcs', '1040401000-28', ' ', ' ', ' ', 2, 282.75, 565.5, 0, 0, 0, 2, 282.75, 565.5, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(24, '', 5, 17, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Staple wire', 'STAPLE WIRE, for heavy duty staplers, (23/13)', 13, 'Box', '1040401000-25', ' ', ' ', ' ', 2, 42.75, 85.5, 0, 0, 0, 2, 42.75, 85.5, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(25, '', 5, 16, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Stapler', 'STAPLER, BINDER TYPE, heavy duty, desktop', 12, 'pcs', '1040401000-79', ' ', ' ', ' ', 3, 343, 1029, 0, 0, 0, 3, 343, 1029, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(26, '', 5, 26, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'Bond paper , A4', 11, 'ream', '1040401000-336', ' ', ' ', ' ', 1, 280, 280, 0, 0, 0, 1, 280, 280, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(27, '', 6, 29, 'Request pantawid', 3, 'Regular Agency Fund', '01', 'Ink', '003 black epson', 15, 'Bottle', '1040401000-804', ' ', ' ', ' ', 4, 345, 1380, 0, 0, 0, 4, 345, 1380, ' ', '2022-01-13', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(28, '', 6, 28, 'Request pantawid', 3, 'Regular Agency Fund', '01', 'Correction tape', 'Correction tape, general', 12, 'pcs', '1040401000-716', ' ', ' ', ' ', 2, 31.5, 63, 0, 0, 0, 2, 31.5, 63, ' ', '2022-01-13', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(29, '', 6, 27, 'Request pantawid', 3, 'Regular Agency Fund', '01', 'Fastener', 'FASTENER, METAL, 70mm between prongs', 13, 'Box', '1040401000-56', ' ', ' ', ' ', 3, 28, 84, 0, 0, 0, 3, 28, 84, ' ', '2022-01-13', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(30, '', 6, 30, 'Request pantawid', 3, 'Regular Agency Fund', '01', 'Logbook', 'Logbook, general', 12, 'pcs', '1040401000-805', ' ', ' ', ' ', 2, 80, 160, 0, 0, 0, 2, 80, 160, ' ', '2022-01-13', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(31, '', 6, 31, 'Request pantawid', 3, 'Regular Agency Fund', '01', 'Cutter', 'CUTTER KNIFE, for general purpose', 12, 'pcs', '1040401000-74', ' ', ' ', ' ', 2, 29, 58, 0, 0, 0, 2, 29, 58, ' ', '2022-01-13', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(32, '07-COS-010', 7, 34, 'testing', 3, 'Regular Agency Fund', '01', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', 15, 'Bottle', '1040401000-1', ' ', ' ', ' ', 10, 100, 1000, 0, 0, 0, 10, 100, 1000, ' ', '2022-01-25', '1st', 'Office Supplies Inventory', ' ', 1, 'BS', '', '', '', 0, '', ''),
(34, ' ', 8, 35, '2021-140-121211', 3, 'Regular Agency Fund', '01', 'Cartolina', 'CARTOLINA, assorted colors', 15, 'Bottle', '1040401000-3', ' ', ' ', ' ', 50, 10, 500, 0, 0, 0, 50, 10, 500, ' ', '2022-01-25', '1st', 'Office Supplies Inventory', ' ', 1, 'HG', '', '', '', 0, '', ''),
(35, '', 8, 35, '', 3, 'Regular Agency Fund', '01', 'Cartolina', 'CARTOLINA, assorted colors', 15, 'Bottle', '1040401000-3', ' ', '2022-1-2000', ' ', 0, 0, 0, 20, 10, 200, 30, 10, 300, ' ', '2022-01-25', ' ', 'Office Supplies Inventory', ' ', 1, 'HG', '', '', '', 0, ' ', ' '),
(36, '', 3, 12, '', 3, 'Regular Agency Fund', '01', 'ALCOHOL', 'ISOPROPYL ALCOHOL(350ML)', 15, 'Bottle', '1040407000-795', ' ', '2021-10-0022', ' ', 0, 0, 0, 500, 78, 39000, -499, 78, 85800, ' ', '2021-12-27', ' ', 'Medical, Dental and Laboratory Supplies Inventory', ' ', 4, 'RO - HRW', '', '', '', 0, ' ', ' '),
(37, ' ', 9, 43, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Ink', 'Epson ink 003 refill', 15, 'Bottle', '5020201002-812', ' ', ' ', ' ', 5, 455, 2275, 0, 0, 0, 5, 455, 2275, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', ''),
(38, ' ', 9, 42, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Tape', 'Correction tape', 1, 'piece', '5020201002-811', ' ', ' ', ' ', 2, 22, 44, 0, 0, 0, 2, 22, 44, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', ''),
(39, ' ', 9, 41, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Envelope', 'Brown Expanded envelope', 1, 'piece', '5020201002-810', ' ', ' ', ' ', 57, 30, 1710, 0, 0, 0, 57, 30, 1710, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', ''),
(40, ' ', 9, 40, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Envelope', 'Plastic envelope with handle', 1, 'piece', '5020201002-809', ' ', ' ', ' ', 57, 65, 3705, 0, 0, 0, 57, 65, 3705, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', ''),
(41, ' ', 9, 39, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Ballpen', 'Good quality black ballpen', 1, 'piece', '5020201002-808', ' ', ' ', ' ', 57, 12, 684, 0, 0, 0, 57, 12, 684, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', ''),
(42, ' ', 9, 38, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Notebook', '50 leaves notebook', 1, 'piece', '5020201002-807', ' ', ' ', ' ', 57, 22, 1254, 0, 0, 0, 57, 22, 1254, ' ', '2022-02-02', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', ''),
(43, ' ', 9, 37, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'Long Bond Paper', 11, 'ream', '5020201002-806', ' ', ' ', ' ', 15, 216, 3240, 0, 0, 0, 15, 216, 3240, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', ''),
(44, ' ', 9, 36, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Bond paper', 'Bond paper, A4', 11, 'ream', '5020201002-696', ' ', ' ', ' ', 15, 206, 3090, 0, 0, 0, 15, 206, 3090, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', ''),
(45, ' ', 10, 44, 'request for pantawid 2/3/2022', 3, 'Regular Agency Fund', '01', 'Filer', 'Filer jumbo with cover', 1, 'piece', '1040401000-813', ' ', ' ', ' ', 80, 500, 40000, 0, 0, 0, 80, 500, 40000, ' ', '2022-02-03', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', ''),
(46, ' ', 11, 49, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'Bond paper', 'Bond paper long', 13, 'Box', '1040401000-823', ' ', ' ', ' ', 2, 1167.39, 2334.78, 0, 0, 0, 2, 1167.39, 2334.78, ' ', '2021-12-10', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', ''),
(47, ' ', 11, 50, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'Puncher', 'PUNCHER, paper, heavy duty, with two hole guide', 12, 'pcs', '1040401000-76', ' ', ' ', ' ', 1, 141.1, 141.1, 0, 0, 0, 2, 141.1, 282.2, ' ', '2021-12-30', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', ''),
(48, ' ', 11, 48, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'STICKY NOTE', 'STICKY NOTE ROLL, MATERIAL: PAPER + PLASTIC ROLL DESIGN PAPER LENGTH:8M/314.95\"(APPROX)', 12, 'pcs', '1040401000-794', ' ', ' ', ' ', 15, 50, 750, 0, 0, 0, 37, 50, 1850, ' ', '2021-12-30', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', ''),
(49, ' ', 11, 47, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'Sign pen', 'SIGN PEN, BLACK, liquid/gel ink, 0.5mm needle tip', 13, 'Box', '1040401000-233', ' ', ' ', ' ', 2, 230, 460, 0, 0, 0, 2, 230, 460, ' ', '2021-12-30', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', ''),
(50, ' ', 11, 46, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'Sign pen', 'SIGN PEN, BLUE, liquid/gel ink, 0.5mm needle tip', 13, 'Box', '1040401000-234', ' ', ' ', ' ', 2, 230, 460, 0, 0, 0, 2, 230, 460, ' ', '2021-12-30', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', ''),
(51, ' ', 11, 45, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'Sign pen', 'SIGN PEN, RED, liquid/gel ink, 0.5mm needle tip', 13, 'Box', '1040401000-235', ' ', ' ', ' ', 2, 230, 460, 0, 0, 0, 2, 230, 460, ' ', '2021-12-30', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', ''),
(52, ' ', 12, 56, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Polo shirt', 'Yakap Bayan', 1, 'piece', '5029901000-830', ' ', ' ', ' ', 24, 400, 9600, 0, 0, 0, 24, 400, 9600, ' ', '2022-02-10', '1st', 'Advertising, Promotional and Marketing Expenses', ' ', 22, 'RO - SOCTECH', '', '', '', 0, '', ''),
(53, ' ', 12, 55, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Polo Shirt', 'Polo Shirt Advocacy Materials Pangantucan Buk', 1, 'piece', '5029901000-827', ' ', ' ', ' ', 43, 400, 17200, 0, 0, 0, 43, 400, 17200, ' ', '2022-02-10', '1st', 'Advertising, Promotional and Marketing Expenses', ' ', 22, 'RO - SOCTECH', '', '', '', 0, '', ''),
(54, ' ', 12, 54, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Polo Shirt', 'Polo Shirt Advocacy materials', 1, 'piece', '5029901000-825', ' ', ' ', ' ', 10, 400, 4000, 0, 0, 0, 10, 400, 4000, ' ', '2022-02-10', '1st', 'Advertising, Promotional and Marketing Expenses', ' ', 22, 'RO - SOCTECH', '', '', '', 0, '', ''),
(55, ' ', 12, 53, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Printer', 'Epson Printer (Eco tank L3250)', 1, 'piece', '1040503000-824', ' ', ' ', ' ', 2, 10696, 21392, 0, 0, 0, 2, 10696, 21392, ' ', '2022-02-10', '1st', 'Semi-Expendable Information and Communications Technology Equipment', ' ', 11, 'RO - SOCTECH', '', '', '', 0, '', ''),
(56, ' ', 12, 52, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Alcohol', 'Hand Sanitizer Alcohol', 1, 'piece', '1040407000-829', ' ', ' ', ' ', 10, 340, 3400, 0, 0, 0, 10, 340, 3400, ' ', '2022-02-10', '1st', 'Medical, Dental and Laboratory Supplies Inventory', ' ', 4, 'RO - SOCTECH', '', '', '', 0, '', ''),
(57, ' ', 12, 51, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Scanner', 'Portable Scanner', 1, 'piece', '1040503000-828', ' ', ' ', ' ', 1, 12000, 12000, 0, 0, 0, 1, 12000, 12000, ' ', '2022-02-10', '1st', 'Semi-Expendable Information and Communications Technology Equipment', ' ', 11, 'RO - SOCTECH', '', '', '', 0, '', ''),
(58, ' ', 16, 57, '2021-11-1130', 3, 'Regular Agency Fund', '01', 'Keppra', 'Solution', 15, 'Bottle', '1040406000-831', ' ', ' ', ' ', 2, 2124, 4248, 0, 0, 0, 2, 2124, 4248, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, ' ', '', '', '', 0, '', ''),
(59, ' ', 16, 57, '2021-11-1130', 3, 'Regular Agency Fund', '01', 'Keppra', 'Solution', 15, 'Bottle', '1040406000-831', ' ', ' ', ' ', 3, 2124, 6372, 0, 0, 0, 5, 2124, 10620, ' ', '2022-02-22', '2nd', 'Drugs and Medicines Inventory', ' ', 3, ' ', '', '', '', 0, '', ''),
(60, '', 16, 57, '', 3, 'Regular Agency Fund', '01', 'Keppra', 'Solution', 15, 'Bottle', '1040406000-831', ' ', '2021-12-22', ' ', 0, 0, 0, 4, 2124, 8496, 1, 2124, 2124, ' ', '2022-02-22', ' ', 'Drugs and Medicines Inventory', ' ', 3, ' ', '', '', '', 0, ' ', ' '),
(61, ' ', 23, 60, '2021-12-10101', 3, 'Regular Agency Fund', '01', 'Keppra', 'Solution', 15, 'Bottle', '1040406000-831', ' ', ' ', ' ', 4, 2124, 8496, 0, 0, 0, 5, 2124, 10620, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RSCC', '', '', '', 0, '', ''),
(62, ' ', 25, 61, '2020-15-1478', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'Bond paper , A4', 11, 'ream', '1040401000-336', ' ', ' ', ' ', 5, 280, 1400, 0, 0, 0, 6, 280, 1680, ' ', '2022-02-22', '1st', 'Office Supplies Inventory', ' ', 1, 'DRMD', '', '', '', 0, '', ''),
(63, ' ', 25, 61, '2020-15-1478', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'Bond paper , A4', 11, 'ream', '1040401000-336', ' ', ' ', ' ', 5, 280, 1400, 0, 0, 0, 11, 280, 3080, ' ', '2022-02-22', '2nd', 'Office Supplies Inventory', ' ', 1, 'DRMD', '', '', '', 0, '', ''),
(64, '', 25, 61, '', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'Bond paper , A4', 11, 'ream', '1040401000-336', ' ', '1234', ' ', 0, 0, 0, 5, 280, 1400, 6, 280, 1680, ' ', '2022-02-22', ' ', 'Office Supplies Inventory', ' ', 1, 'DRMD', '', '', '', 0, ' ', ' '),
(65, ' ', 17, 62, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Lexdin', 'Lexdin 10mgs', 37, 'Tab', '1040406000-832', ' ', ' ', ' ', 50, 16.75, 837.5, 0, 0, 0, 50, 16.75, 837.5, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(66, ' ', 17, 63, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Responz', '10mgs', 37, 'Tab', '1040406000-833', ' ', ' ', ' ', 0, 39.25, 0, 0, 0, 0, 0, 0, 0, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(67, ' ', 17, 63, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Responz', '10mgs', 37, 'Tab', '1040406000-833', ' ', ' ', ' ', 80, 39.25, 3140, 0, 0, 0, 80, 39.25, 3140, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(68, ' ', 17, 64, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Baclofen', '10mgs', 37, 'Tab', '1040406000-834', ' ', ' ', ' ', 80, 26.5, 2120, 0, 0, 0, 80, 26.5, 2120, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(69, ' ', 17, 65, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Phenobarbital', '30mgs', 15, 'Bottle', '1040406000-835', ' ', ' ', ' ', 8, 305, 2440, 0, 0, 0, 8, 305, 2440, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(70, ' ', 17, 66, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Phenobarbital', '90mgs', 15, 'Bottle', '1040406000-836', ' ', ' ', ' ', 2, 535, 1070, 0, 0, 0, 2, 535, 1070, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(71, ' ', 17, 67, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Valpros', '500mgs', 37, 'Tab', '1040406000-837', ' ', ' ', ' ', 80, 26.75, 2140, 0, 0, 0, 80, 26.75, 2140, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(72, ' ', 17, 68, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Valpros', 'Syrup', 15, 'Bottle', '1040406000-838', ' ', ' ', ' ', 10, 276.5, 2765, 0, 0, 0, 10, 276.5, 2765, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(73, ' ', 17, 69, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Omegabloc', 'Omegabloc ,general', 15, 'Bottle', '1040406000-839', ' ', ' ', ' ', 8, 360, 2880, 0, 0, 0, 8, 360, 2880, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(74, ' ', 17, 70, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Paracetamol', 'Tempra syrup (120ml)', 15, 'Bottle', '1040406000-840', ' ', ' ', ' ', 10, 159.5, 1595, 0, 0, 0, 10, 159.5, 1595, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(75, ' ', 17, 71, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Hydrite', 'Granules', 13, 'Box', '1040406000-841', ' ', ' ', ' ', 1, 1575, 1575, 0, 0, 0, 1, 1575, 1575, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(76, ' ', 17, 72, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Hydrasec', 'Granules', 1, 'Piece', '1040406000-842', ' ', ' ', ' ', 50, 55, 2750, 0, 0, 0, 50, 55, 2750, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(77, ' ', 17, 73, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Phenylephrine', 'syrup,drops', 15, 'Bottle', '1040406000-843', ' ', ' ', ' ', 12, 113, 1356, 0, 0, 0, 12, 113, 1356, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(78, ' ', 17, 74, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Terramycin', 'Opthatmic drop', 23, 'Tube', '1040406000-844', ' ', ' ', ' ', 2, 689, 1378, 0, 0, 0, 2, 689, 1378, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', ''),
(79, ' ', 30, 79, 'SOCTECH REQUEST 1', 3, 'Regular Agency Fund', '01', 'Chair', 'Shivel', 1, 'Piece', '1040601000-850', ' ', ' ', ' ', 3, 7000, 21000, 0, 0, 0, 3, 7000, 21000, ' ', '2022-03-04', '1st', 'Semi-Expendable Furniture and Fixtures', ' ', 17, ' ', '', '', '', 0, '', ''),
(80, ' ', 30, 78, 'SOCTECH REQUEST 1', 3, 'Regular Agency Fund', '01', 'Cabinet', 'Mobile cabinet', 1, 'Piece', '1040601000-849', ' ', ' ', ' ', 3, 4000, 12000, 0, 0, 0, 3, 4000, 12000, ' ', '2022-03-04', '1st', 'Semi-Expendable Furniture and Fixtures', ' ', 17, ' ', '', '', '', 0, '', ''),
(81, ' ', 30, 77, 'SOCTECH REQUEST 1', 3, 'Regular Agency Fund', '01', 'Printer', 'Printer wifi all in one tank printer', 1, 'Piece', '1040503000-851', ' ', ' ', ' ', 3, 14500, 43500, 0, 0, 0, 3, 14500, 43500, ' ', '2022-03-04', '1st', 'Semi-Expendable Information and Communications Technology Equipment', ' ', 11, ' ', '', '', '', 0, '', ''),
(82, ' ', 30, 76, 'SOCTECH REQUEST 1', 3, 'Regular Agency Fund', '01', 'Planner', 'Social technology planner', 1, 'Piece', '5029901000-852', ' ', ' ', ' ', 83, 600, 49800, 0, 0, 0, 83, 600, 49800, ' ', '2022-03-04', '1st', 'Advertising, Promotional and Marketing Expenses', ' ', 22, ' ', '', '', '', 0, '', ''),
(83, ' ', 31, 85, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'TAPE', 'MASKING TAPE 2-INCH DIAMETER', 1, 'piece', '1040401000-793', ' ', ' ', ' ', 5, 80, 400, 0, 0, 0, 7, 77.14, 540, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(84, ' ', 31, 99, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Tape', 'Scotch tape', 10, 'Roll', '1040401000-864', ' ', ' ', ' ', 3, 75, 225, 0, 0, 0, 3, 75, 225, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(85, ' ', 31, 94, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'HP 680', 'HP 680 colored', 43, 'Cartridge', '1040401000-860', ' ', ' ', ' ', 20, 600, 12000, 0, 0, 0, 20, 600, 12000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(86, ' ', 31, 93, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'HP 680', 'Black', 43, 'Cartridge', '1040401000-859', ' ', ' ', ' ', 20, 600, 12000, 0, 0, 0, 20, 600, 12000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(87, ' ', 31, 98, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Tape', 'Tape packaging', 10, 'Roll', '1040401000-863', ' ', ' ', ' ', 4, 58, 232, 0, 0, 0, 4, 58, 232, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(88, ' ', 31, 80, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'STAMP PAD', 'STAMP PAD, GENERAL', 1, 'Piece', '1040401000-854', ' ', ' ', ' ', 3, 52.8, 158.39999999999998, 0, 0, 0, 3, 52.79, 158.39999999999998, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(89, ' ', 31, 87, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Scissor', 'SCISSORS, symmetrical, blade length: 65mm min', 1, 'Piece', '1040401000-77', ' ', ' ', ' ', 10, 45, 450, 0, 0, 0, 10, 45, 450, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(90, ' ', 31, 97, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Staple wire', 'STAPLE WIRE, STANDARD, (26/6)', 13, 'Box', '1040401000-26', ' ', ' ', ' ', 5, 42, 210, 0, 0, 0, 5, 42, 210, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(91, ' ', 31, 95, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Pentel pen', 'Pentel pen', 13, 'Box', '1040401000-861', ' ', ' ', ' ', 2, 38, 76, 0, 0, 0, 2, 38, 76, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(92, ' ', 31, 103, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 664', 'INK 664 yellow', 15, 'Bottle', '1040401000-868', ' ', ' ', ' ', 4, 350, 1400, 0, 0, 0, 4, 350, 1400, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(93, ' ', 31, 102, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 664', 'INK 664 magenta', 15, 'Bottle', '1040401000-867', ' ', ' ', ' ', 4, 350, 1400, 0, 0, 0, 4, 350, 1400, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(94, ' ', 31, 101, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 664', 'INK 664 Cyan', 15, 'Bottle', '1040401000-866', ' ', ' ', ' ', 4, 350, 1400, 0, 0, 0, 4, 350, 1400, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(95, ' ', 31, 100, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 664', 'Black', 15, 'Bottle', '1040401000-865', ' ', ' ', ' ', 4, 350, 1400, 0, 0, 0, 4, 350, 1400, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(96, ' ', 31, 92, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 003', 'INK 003 Magenta', 15, 'Bottle', '1040401000-855', ' ', ' ', ' ', 20, 350, 7000, 0, 0, 0, 20, 350, 7000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(97, ' ', 31, 91, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 003', 'Yellow', 15, 'Bottle', '1040401000-856', ' ', ' ', ' ', 20, 350, 7000, 0, 0, 0, 20, 350, 7000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(98, ' ', 31, 90, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 003', 'Cyan', 15, 'Bottle', '1040401000-857', ' ', ' ', ' ', 20, 350, 7000, 0, 0, 0, 20, 350, 7000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(99, ' ', 31, 89, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 003', 'Black', 15, 'Bottle', '1040401000-858', ' ', ' ', ' ', 20, 350, 7000, 0, 0, 0, 20, 350, 7000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(100, ' ', 31, 81, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'SIGN PEN', 'SIGN PEN, GENERAL /BOX', 13, 'Box', '1040401000-803', ' ', ' ', ' ', 7, 330, 2310, 0, 0, 0, 10, 294.99, 2949.9, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(101, ' ', 31, 96, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Correction tape', 'Correction tape, general', 12, 'pcs', '1040401000-716', ' ', ' ', ' ', 20, 31.5, 630, 0, 0, 0, 22, 31.5, 693, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(102, ' ', 31, 84, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Fastener', 'FASTENER, METAL, 70mm between prongs', 13, 'Box', '1040401000-56', ' ', ' ', ' ', 3, 28, 84, 0, 0, 0, 6, 28, 168, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(103, ' ', 31, 88, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Ruler', 'RULER, plastic, 450mm (18\"), width: 38mm min', 1, 'Piece', '1040401000-27', ' ', ' ', ' ', 3, 25, 75, 0, 0, 0, 3, 25, 75, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(104, ' ', 31, 86, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Stapler', 'STAPLER, STANDARD TYPE, load cap: 200 staples min', 1, 'Piece', '1040401000-78', ' ', ' ', ' ', 5, 203.5, 1017.5, 0, 0, 0, 5, 203.5, 1017.5, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(106, ' ', 31, 83, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Bond paper', 'Bond paper, legal (Box)', 13, 'Box', '1040401000-871', ' ', ' ', ' ', 10, 1200, 12000, 0, 0, 0, 10, 1200, 12000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(107, ' ', 31, 82, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Bond paper', 'Bond paper, A4 (Box)', 13, 'Box', '1040401000-870', ' ', ' ', ' ', 10, 1200, 12000, 0, 0, 0, 10, 1200, 12000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(108, ' ', 31, 105, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Tissue', 'Tissue, general', 10, 'Roll', '1040401000-872', ' ', ' ', ' ', 45, 15, 675, 0, 0, 0, 45, 15, 675, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', ''),
(109, ' ', 32, 116, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Roller Tray', 'Paint roller tray', 1, 'Piece', '5020399000-883', ' ', ' ', ' ', 2, 75, 150, 0, 0, 0, 2, 75, 150, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', ''),
(110, ' ', 32, 115, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Roller', 'Baby Roller', 1, 'Piece', '5020399000-882', ' ', ' ', ' ', 2, 110, 220, 0, 0, 0, 2, 110, 220, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', ''),
(111, ' ', 32, 114, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Sandpaper', 'Sandpaper NO.120', 1, 'Piece', '5020399000-881', ' ', ' ', ' ', 3, 30, 90, 0, 0, 0, 3, 30, 90, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', ''),
(112, ' ', 32, 113, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Thinner', 'Paint Thinner', 15, 'Bottle', '5020399000-880', ' ', ' ', ' ', 4, 58, 232, 0, 0, 0, 4, 58, 232, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', ''),
(113, ' ', 32, 112, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Brush', 'Paint brush', 1, 'Piece', '5020399000-879', ' ', ' ', ' ', 3, 100, 300, 0, 0, 0, 3, 100, 300, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', ''),
(114, ' ', 32, 111, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Enamel', 'Gloss enamel - ready mixed mint green', 14, 'Gallon', '5020399000-878', ' ', ' ', ' ', 4, 980, 3920, 0, 0, 0, 4, 980, 3920, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', ''),
(115, ' ', 32, 110, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Enamel', 'Flat wall white enamel', 14, 'Gallon', '5020399000-877', ' ', ' ', ' ', 3, 665, 1995, 0, 0, 0, 3, 665, 1995, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', ''),
(116, ' ', 32, 109, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Nails', 'Finishing nails NO.1 1/2', 4, 'Kilogram', '5020399000-876', ' ', ' ', ' ', 3, 145, 435, 0, 0, 0, 3, 145, 435, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', ''),
(117, ' ', 32, 108, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Nails', 'Finishing nails NO.2', 4, 'Kilogram', '5020399000-875', ' ', ' ', ' ', 3, 145, 435, 0, 0, 0, 3, 145, 435, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', ''),
(118, ' ', 32, 107, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Hinges', 'Hydraulic Hinges', 1, 'Piece', '5020399000-874', ' ', ' ', ' ', 46, 120, 5520, 0, 0, 0, 46, 120, 5520, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', ''),
(119, ' ', 32, 106, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Plywood', 'Marine plywood (PLIGO)', 1, 'Piece', '5020399000-873', ' ', ' ', ' ', 14, 800, 11200, 0, 0, 0, 14, 800, 11200, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, 'RO - ARRS', '', '', '', 0, '', ''),
(120, ' ', 33, 119, '2021-11-1244', 3, 'Regular Agency Fund', '01', 'Chair', 'Office chair', 1, 'Piece', '1040601000-886', ' ', ' ', ' ', 20, 4250, 85000, 0, 0, 0, 20, 4250, 85000, ' ', '2022-03-08', '1st', 'Semi-Expendable Furniture and Fixtures', ' ', 17, 'RO - ARRS', '', '', '', 0, '', ''),
(121, ' ', 33, 118, '2021-11-1244', 3, 'Regular Agency Fund', '01', 'Cabinet', 'Steel Cabinet', 1, 'Piece', '1040601000-690', ' ', ' ', ' ', 1, 6000, 6000, 0, 0, 0, 1, 6000, 6000, ' ', '2022-03-08', '1st', 'Semi-Expendable Furniture and Fixtures', ' ', 17, 'RO - ARRS', '', '', '', 0, '', ''),
(122, ' ', 33, 117, '2021-11-1244', 3, 'Regular Agency Fund', '01', 'Table', 'Coffee table set', 1, 'Piece', '1040601000-884', ' ', ' ', ' ', 1, 5000, 5000, 0, 0, 0, 1, 5000, 5000, ' ', '2022-03-08', '1st', 'Semi-Expendable Furniture and Fixtures', ' ', 17, 'RO - ARRS', '', '', '', 0, '', ''),
(123, ' ', 34, 120, '2021-12-1318', 3, 'Regular Agency Fund', '01', 'Vest', 'DSWD RED VEST', 1, 'Piece', '5029901000-887', ' ', ' ', ' ', 137, 1450, 198650, 0, 0, 0, 137, 1450, 198650, ' ', '2022-03-08', '1st', 'Advertising, Promotional and Marketing Expenses', ' ', 22, 'RO - ARRS', '', '', '', 0, '', ''),
(126, ' ', 36, 123, 'Pantawid request', 3, 'Regular Agency Fund', '01', 'Toner', 'Toner Cartridge, HP CF283A (HP83A) LaserJet Black', 43, 'Cartridge', '1040401000-191', ' ', ' ', ' ', 5, 2950, 14750, 0, 0, 0, 5, 2950, 14750, ' ', '2022-03-10', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tblslcactivitylogs`
--

CREATE TABLE `tblslcactivitylogs` (
  `activity_id` bigint(20) NOT NULL,
  `activity` varchar(1000) NOT NULL,
  `deleted_by` varchar(500) NOT NULL,
  `delete_id` bigint(20) NOT NULL,
  `delete_username` varchar(500) NOT NULL,
  `pohdr_idlink` bigint(20) NOT NULL,
  `podtl_idlink` bigint(20) NOT NULL,
  `po_num` varchar(2000) NOT NULL,
  `item_name` varchar(1000) NOT NULL,
  `item_description` varchar(5000) NOT NULL,
  `item_code` varchar(1000) NOT NULL,
  `qty_rec` varchar(2000) NOT NULL,
  `unit_rec` varchar(2000) NOT NULL,
  `totalcost_rec` varchar(2000) NOT NULL,
  `qty_issue` varchar(2000) NOT NULL,
  `unitcost_issue` varchar(2000) NOT NULL,
  `totalcost_issue` varchar(2000) NOT NULL,
  `qty_bal` varchar(2000) NOT NULL,
  `unitcost_bal` varchar(2000) NOT NULL,
  `totalcost_bal` varchar(2000) NOT NULL,
  `reason` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblslcactivitylogs`
--

INSERT INTO `tblslcactivitylogs` (`activity_id`, `activity`, `deleted_by`, `delete_id`, `delete_username`, `pohdr_idlink`, `podtl_idlink`, `po_num`, `item_name`, `item_description`, `item_code`, `qty_rec`, `unit_rec`, `totalcost_rec`, `qty_issue`, `unitcost_issue`, `totalcost_issue`, `qty_bal`, `unitcost_bal`, `totalcost_bal`, `reason`) VALUES
(1, 'INSERT', 'DRMD  admin', 0, ' ', 2, 1, '2020-10-101010', 'Ladder', 'Heavy duty steel foldable ladder, 12ft', '1040601000-325', '1', '6000', '6000', ' ', ' ', ' ', '1', '6000', '6000', ' '),
(2, 'DELETION OF ISSUANCE', 'Kurt T. Tiempo', 4, 'schema', 2, 1, ' ', 'Ladder', 'Heavy duty steel foldable ladder, 12ft', '1040601000-325', ' ', ' ', ' ', '1', '6000', '6000', '-1', '6000', '-6000', 'test'),
(3, 'INSERT', 'Jade  Lustre', 0, ' ', 2, 2, '2021-02-0027', 'Umbrella', 'Color Black, Size XL with print', '1040499000-371', '44', '750.00', '33000', ' ', ' ', ' ', '44', '750', '33000', ' '),
(4, 'DELETION OF ISSUANCE', 'Jade  Lustre', 12, 'Jade', 2, 2, ' ', 'Umbrella', 'Color Black, Size XL with print', '1040499000-371', ' ', ' ', ' ', '40', '750', '30000', '-36', '750', '-27000', 'FEEL KO LANG'),
(5, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 1, 1, '2020-10-00000', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '2', '500', '1000', ' ', ' ', ' ', '2', '500', '1000', ' '),
(6, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 1, '2020-10-0000', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '10', '600', '6000', ' ', ' ', ' ', ' ', ' ', ' ', ' '),
(7, 'INSERT', 'Jade  Lustre', 0, ' ', 1, 1, '2021-04-0243', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '192', '1010', '193920', ' ', ' ', ' ', '192', '1010', '193920', ' '),
(8, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 1, 1, ' ', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', ' ', ' ', ' ', '10', '1010', '10100', '172', '1010', '173720', 'test'),
(9, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 0, 1, ' ', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', ' ', ' ', ' ', '10', '1010', '10100', '182', '1010', '183820', 'test'),
(10, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 1, 1, '2021-04-0243', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '192', '1010', '193920', ' ', ' ', ' ', '192', '1010', '193920', 'test'),
(11, 'INSERT', 'Jade  Lustre', 0, ' ', 2, 2, '2020-12-0851', 'Prednisone', '40mg tab', '1040406000-372', '8', '501.00', '4008', ' ', ' ', ' ', '8', '501', '4008', ' '),
(12, 'INSERT', 'Jade  Lustre', 0, ' ', 2, 3, '2020-12-0851', 'Co-amoxiclav', '625mg tab', '1040406000-373', '12', '140', '1680', ' ', ' ', ' ', '12', '140', '1680', ' '),
(13, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 9, '2020-12-0771', 'Air Freshener', 'General', '1040499000-374', '15', '88', '1320', ' ', ' ', ' ', '15', '88', '1320', ' '),
(14, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 10, '2020-12-0771', 'Broom', 'General', '1040499000-375', '5', '133', '665', ' ', ' ', ' ', '5', '133', '665', ' '),
(15, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 11, '2020-12-0771', 'Disinfectant Spray', 'General', '1040499000-376', '10', '123', '1230', ' ', ' ', ' ', '10', '123', '1230', ' '),
(16, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 12, '2020-12-0771', 'Insecticide', 'General', '1040499000-377', '12', '142', '1704', ' ', ' ', ' ', '12', '142', '1704', ' '),
(17, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 13, '2020-12-0771', 'Mop', 'MOPHEAD, made of rayon, weight: 400 grams min', '1040499000-276', '6', '125', '750', ' ', ' ', ' ', '6', '125', '750', ' '),
(18, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 14, '2020-12-0771', 'Floorwax', 'General', '1040499000-379', '45', '23', '1035', ' ', ' ', ' ', '45', '23', '1035', ' '),
(19, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 15, '2020-12-0771', 'Dishwashing Paste', 'General', '1040499000-380', '60', '46', '2760', ' ', ' ', ' ', '60', '46', '2760', ' '),
(20, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 16, '2020-12-0771', 'Feather Duster', 'General', '1040499000-381', '3', '20', '60', ' ', ' ', ' ', '3', '20', '60', ' '),
(21, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 17, '2020-12-0771', 'Glass Cleaner', 'General', '1040499000-382', '18', '162', '2916', ' ', ' ', ' ', '18', '162', '2916', ' '),
(22, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 18, '2020-12-0771', 'Liquid Bleach', 'General', '1040499000-383', '30', '51', '1530', ' ', ' ', ' ', '30', '51', '1530', ' '),
(23, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 19, '2020-12-0771', 'Mop', 'General', '1040499000-384', '6', '0.00', ' ', ' ', ' ', ' ', '6', ' ', ' ', ' '),
(24, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 20, '2020-12-0771', 'Toilet Deodorizing cake', 'General', '1040499000-385', '30', '31', '930', ' ', ' ', ' ', '30', '31', '930', ' '),
(25, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 21, '2020-12-0771', 'Trash Bag', 'Plastic', '1040499000-386', '30', '41', '1230', ' ', ' ', ' ', '30', '41', '1230', ' '),
(26, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 25, '2020-12-0852', 'Phenylephrine+Bromphenamine', '500mg tab', '1040406000-390', '6', '171.6', '1029.6', ' ', ' ', ' ', '6', '171.6', '1029.6', ' '),
(27, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 26, '2020-12-0852', 'Cefalexin', '100s tab', '1040406000-391', '10', '338.14', '3381.3999999999996', ' ', ' ', ' ', '10', '338.14', '3381.3999999999996', ' '),
(28, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 27, '2020-12-0852', 'Amoxicillin', '500mg tab (100s)', '1040406000-392', '10', '157.41', '1574.1', ' ', ' ', ' ', '10', '157.41', '1574.1', ' '),
(29, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 28, '2020-12-0852', 'Amoxicillin', '250mg syrup', '1040406000-393', '10', '25.41', '254.1', ' ', ' ', ' ', '10', '25.41', '254.1', ' '),
(30, 'DELETION OF ISSUANCE', 'Jade  Lustre', 12, 'Jade', 2, 2, ' ', 'Prednisone', '40mg tab', '1040406000-372', ' ', ' ', ' ', '1', '501', '501', '6', '501', '3006', 'test'),
(31, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 29, '2020-12-0852', 'Cefuroxime', '500mg', '1040406000-394', '10', '253', '2530', ' ', ' ', ' ', '10', '253', '2530', ' '),
(32, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 30, '2020-12-0852', 'Aluminum Magnesium', '500mg tab', '1040406000-395', '10', '180.73', '1807.3', ' ', ' ', ' ', '10', '180.73', '1807.3', ' '),
(33, 'DELETION OF ISSUANCE', 'Jade  Lustre', 12, 'Jade', 3, 16, ' ', 'Feather Duster', 'General', '1040499000-381', ' ', ' ', ' ', '1', '20', '20', '1', '20', '20', 'testing'),
(34, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 31, '2020-12-0852', 'hyocine', '10mg tab', '1040406000-396', '10', '517', '5170', ' ', ' ', ' ', '10', '517', '5170', ' '),
(35, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 32, '2020-12-0852', 'Salbutamol', '2mg tab', '1040406000-397', '15', '44', '660', ' ', ' ', ' ', '15', '44', '660', ' '),
(36, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 33, '2020-12-0852', 'Cetirizine', '10mg tab', '1040406000-398', '5', '101.2', '506', ' ', ' ', ' ', '5', '101.2', '506', ' '),
(37, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 34, '2020-12-0852', 'Ascorbic Acid', '500mg tab', '1040406000-399', '25', '174.9', '4372.5', ' ', ' ', ' ', '25', '174.9', '4372.5', ' '),
(38, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 35, '2020-12-0852', 'Multivitamins', '500mg tab', '1040406000-400', '25', '294.8', '7370', ' ', ' ', ' ', '25', '294.8', '7370', ' '),
(39, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 36, '2020-12-0852', 'Cefixime', '200mg', '1040406000-401', '3', '618.2', '1854.6000000000001', ' ', ' ', ' ', '3', '618.2', '1854.6000000000001', ' '),
(40, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 37, '2020-12-0852', 'Domperidone', 'General tab', '1040406000-402', '3', '130.6', '391.79999999999995', ' ', ' ', ' ', '3', '130.6', '391.79999999999995', ' '),
(41, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 38, '2020-12-0852', 'Ferrous Sulfate', 'General', '1040406000-403', '5', '101.2', '506', ' ', ' ', ' ', '5', '101.2', '506', ' '),
(42, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 39, '2020-12-0852', 'Calcium Carbonate', 'General', '1040406000-404', '5', '116', '580', ' ', ' ', ' ', '5', '116', '580', ' '),
(43, 'INSERT', 'Jade  Lustre', 0, ' ', 5, 40, '2020-12-0714', 'Cereal', 'Powdered Cereal Drink (26-32 gram)(240 sachet/box)', '1040405000-357', '51', '2010', '102510', ' ', ' ', ' ', '51', '2010', '102510', ' '),
(44, 'INSERT', 'Jade  Lustre', 0, ' ', 6, 41, '2020-12-0796', 'Bedsheets', 'General', '1040499000-405', '50', '349', '17450', ' ', ' ', ' ', '50', '349', '17450', ' '),
(45, 'INSERT', 'Jade  Lustre', 0, ' ', 6, 42, '2020-12-0796', 'Blanket', 'General', '1040499000-406', '50', '299', '14950', ' ', ' ', ' ', '50', '299', '14950', ' '),
(46, 'INSERT', 'Jade  Lustre', 0, ' ', 6, 43, '2020-12-0796', 'Cloth', '50m/roll', '1040499000-407', '50', '148', '7400', ' ', ' ', ' ', '50', '148', '7400', ' '),
(47, 'INSERT', 'Jade  Lustre', 0, ' ', 6, 44, '2020-12-0796', 'Pillow Case', 'General', '1040499000-408', '50', '99', '4950', ' ', ' ', ' ', '50', '99', '4950', ' '),
(48, 'INSERT', 'Jade  Lustre', 0, ' ', 6, 45, '2020-12-0796', 'Table Cloth', 'General', '1040499000-409', '10', '308.75', '3087.5', ' ', ' ', ' ', '10', '308.75', '3087.5', ' '),
(49, 'INSERT', 'Jade  Lustre', 0, ' ', 6, 46, '2020-12-0796', 'Curtains', 'Assorted Color', '1040499000-410', '100', '275.0', '27500', ' ', ' ', ' ', '100', '275', '27500', ' '),
(50, 'INSERT', 'Jade  Lustre', 0, ' ', 7, 47, '2020-12-0774', 'Sauce', 'Meat Sauce, 380g', '1040405000-411', '120', '50', '6000', ' ', ' ', ' ', '120', '50', '6000', ' '),
(51, 'INSERT', 'Jade  Lustre', 0, ' ', 7, 48, '2020-12-0774', 'Tableya', 'General', '1040405000-412', '12', '49', '588', ' ', ' ', ' ', '12', '49', '588', ' '),
(52, 'INSERT', 'Jade  Lustre', 0, ' ', 7, 49, '2020-12-0774', 'Coffee', '3 in 1, 29g/24s', '1040405000-413', '40', '63', '2520', ' ', ' ', ' ', '40', '63', '2520', ' '),
(53, 'INSERT', 'Jade  Lustre', 0, ' ', 7, 50, '2020-12-0774', 'Spread', 'Cheese Spread, 470ml', '1040405000-414', '16', '166', '2656', ' ', ' ', ' ', '16', '166', '2656', ' '),
(54, 'INSERT', 'Jade  Lustre', 0, ' ', 7, 51, '2020-12-0774', 'Milk', 'Evaporated Milk, 410ml', '1040405000-415', '240', '26', '6240', ' ', ' ', ' ', '240', '26', '6240', ' '),
(55, 'INSERT', 'Jade  Lustre', 0, ' ', 7, 52, '2020-12-0774', 'Pasta', 'Macaroni Pasta, 1000g', '1040405000-416', '40', '105', '4200', ' ', ' ', ' ', '40', '105', '4200', ' '),
(56, 'INSERT', 'Jade  Lustre', 0, ' ', 8, 53, '2020-12-0797', 'Light', 'Decoration Light (Colored)', '1040499000-417', '10', '499', '4990', ' ', ' ', ' ', '10', '499', '4990', ' '),
(57, 'INSERT', 'Jade  Lustre', 0, ' ', 8, 54, '2020-12-0797', 'Balls', 'Decoration Balls, Large Size', '1040499000-418', '15', '399', '5985', ' ', ' ', ' ', '15', '399', '5985', ' '),
(58, 'INSERT', 'Jade  Lustre', 0, ' ', 8, 55, '2020-12-0797', 'Flowers', 'Poinsettia Flowers, Large Size', '1040499000-419', '40', '69', '2760', ' ', ' ', ' ', '40', '69', '2760', ' '),
(59, 'INSERT', 'Jade  Lustre', 0, ' ', 8, 56, '2020-12-0797', 'Wreath', 'Decoration Wreath', '1040499000-420', '5', '799', '3995', ' ', ' ', ' ', '5', '799', '3995', ' '),
(60, 'PO CANCELLATION', 'Jade  Lustre', 12, ' ', 8, 56, '2020-12-0797', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Expense'),
(61, 'DELETION', 'Jade  Lustre', 12, 'Jade', 2, 3, '2020-12-0851', 'Co-amoxiclav', '625mg tab', '1040406000-373', '12', '140', '1680', ' ', ' ', ' ', '12', '140', '1680', 'Expense'),
(62, 'DELETION', 'Jade  Lustre', 12, 'Jade', 2, 2, '2020-12-0851', 'Prednisone', '40mg tab', '1040406000-372', '8', '501', '4008', ' ', ' ', ' ', '8', '501', '4008', 'Expense'),
(63, 'DELETION', 'Jade  Lustre', 12, 'Jade', 3, 9, '2020-12-0771', 'Air Freshener', 'General', '1040499000-374', '15', '88', '1320', ' ', ' ', ' ', '15', '88', '1320', 'Exp.'),
(64, 'DELETION', 'Jade  Lustre', 12, 'Jade', 3, 10, '2020-12-0771', 'Broom', 'General', '1040499000-375', '5', '133', '665', ' ', ' ', ' ', '5', '133', '665', 'Exp.'),
(65, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 21, '2020-12-0771', 'Trash Bag', 'Plastic', '1040499000-386', '30', '41', '1230', ' ', ' ', ' ', '30', '41', '1230', 'expense'),
(66, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 20, '2020-12-0771', 'Toilet Deodorizing cake', 'General', '1040499000-385', '30', '31', '930', ' ', ' ', ' ', '30', '31', '930', 'exp'),
(67, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 19, '2020-12-0771', 'Mop', 'General', '1040499000-384', '6', ' ', ' ', ' ', ' ', ' ', '6', ' ', ' ', 'exp'),
(68, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 18, '2020-12-0771', 'Liquid Bleach', 'General', '1040499000-383', '30', '51', '1530', ' ', ' ', ' ', '30', '51', '1530', 'exp'),
(69, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 17, '2020-12-0771', 'Glass Cleaner', 'General', '1040499000-382', '18', '162', '2916', ' ', ' ', ' ', '18', '162', '2916', 'exp'),
(70, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 16, '2020-12-0771', 'Feather Duster', 'General', '1040499000-381', '3', '20', '60', ' ', ' ', ' ', '3', '20', '60', 'exp'),
(71, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 15, '2020-12-0771', 'Dishwashing Paste', 'General', '1040499000-380', '60', '46', '2760', ' ', ' ', ' ', '60', '46', '2760', 'exp'),
(72, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 14, '2020-12-0771', 'Floorwax', 'General', '1040499000-379', '45', '23', '1035', ' ', ' ', ' ', '45', '23', '1035', 'exp'),
(73, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 12, '2020-12-0771', 'Insecticide', 'General', '1040499000-377', '12', '142', '1704', ' ', ' ', ' ', '12', '142', '1704', 'exp'),
(74, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 11, '2020-12-0771', 'Disinfectant Spray', 'General', '1040499000-376', '10', '123', '1230', ' ', ' ', ' ', '10', '123', '1230', 'exp'),
(75, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 3, 13, '2020-12-0771', 'Mop', 'MOPHEAD, made of rayon, weight: 400 grams min', '1040499000-276', '6', '125', '750', ' ', ' ', ' ', '6', '125', '750', 'exp'),
(76, 'PO REACTIVATION', 'Kurt T. Tiempo', 4, ' ', 0, 0, '2020-12-0797', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'test'),
(77, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 8, 56, '2020-12-0797', 'Wreath', 'Decoration Wreath', '1040499000-420', '5', '799', '3995', ' ', ' ', ' ', '5', '799', '3995', 'exp'),
(78, 'DELETION', 'Jade  Lustre', 12, 'Jade', 8, 55, '2020-12-0797', 'Flowers', 'Poinsettia Flowers, Large Size', '1040499000-419', '40', '69', '2760', ' ', ' ', ' ', '40', '69', '2760', 'exp'),
(79, 'DELETION', 'Jade  Lustre', 12, 'Jade', 8, 54, '2020-12-0797', 'Balls', 'Decoration Balls, Large Size', '1040499000-418', '15', '399', '5985', ' ', ' ', ' ', '15', '399', '5985', 'exp'),
(80, 'DELETION', 'Jade  Lustre', 12, 'Jade', 8, 53, '2020-12-0797', 'Light', 'Decoration Light (Colored)', '1040499000-417', '10', '499', '4990', ' ', ' ', ' ', '10', '499', '4990', 'exp'),
(81, 'DELETION', 'Jade  Lustre', 12, 'Jade', 7, 52, '2020-12-0774', 'Pasta', 'Macaroni Pasta, 1000g', '1040405000-416', '40', '105', '4200', ' ', ' ', ' ', '40', '105', '4200', 'exp'),
(82, 'DELETION', 'Jade  Lustre', 12, 'Jade', 7, 51, '2020-12-0774', 'Milk', 'Evaporated Milk, 410ml', '1040405000-415', '240', '26', '6240', ' ', ' ', ' ', '240', '26', '6240', 'exp'),
(83, 'DELETION', 'Jade  Lustre', 12, 'Jade', 7, 50, '2020-12-0774', 'Spread', 'Cheese Spread, 470ml', '1040405000-414', '16', '166', '2656', ' ', ' ', ' ', '16', '166', '2656', 'exp'),
(84, 'DELETION', 'Jade  Lustre', 12, 'Jade', 7, 49, '2020-12-0774', 'Coffee', '3 in 1, 29g/24s', '1040405000-413', '40', '63', '2520', ' ', ' ', ' ', '40', '63', '2520', 'exp'),
(85, 'DELETION', 'Jade  Lustre', 12, 'Jade', 7, 48, '2020-12-0774', 'Tableya', 'General', '1040405000-412', '12', '49', '588', ' ', ' ', ' ', '12', '49', '588', 'exp'),
(86, 'DELETION', 'Jade  Lustre', 12, 'Jade', 7, 47, '2020-12-0774', 'Sauce', 'Meat Sauce, 380g', '1040405000-411', '120', '50', '6000', ' ', ' ', ' ', '120', '50', '6000', 'exp'),
(87, 'DELETION', 'Jade  Lustre', 12, 'Jade', 5, 40, '2020-12-0714', 'Cereal', 'Powdered Cereal Drink (26-32 gram)(240 sachet/box)', '1040405000-357', '51', '2010', '102510', ' ', ' ', ' ', '51', '2010', '102510', 'exp'),
(88, 'INSERT', 'Jade  Lustre', 0, ' ', 9, 57, '2020-12-0787', 'Table', 'Office table (wooden with drawer)', '1040601000-433', '6', '4500', '27000', ' ', ' ', ' ', '6', '4500', '27000', ' '),
(89, 'INSERT', 'Jade  Lustre', 0, ' ', 10, 60, '2021-03-0140', 'Zapper', 'Indoor insect and mosquito zapper', '1040502000-422', '4', '2000', '8000', ' ', ' ', ' ', '4', '2000', '8000', ' '),
(90, 'INSERT', 'Jade  Lustre', 0, ' ', 10, 59, '2021-03-0140', 'Sterilizer', 'UV Sterilizer', '1040502000-421', '6', '14000', '84000', ' ', ' ', ' ', '6', '14000', '84000', ' '),
(91, 'INSERT', 'Jade  Lustre', 0, ' ', 11, 65, '2020-12-0848', 'Walker', 'General', '1040407000-427', '8', '2000', '16000', ' ', ' ', ' ', '8', '2000', '16000', ' '),
(92, 'DELETION', 'Jade  Lustre', 12, 'Jade', 11, 65, '2020-12-0848', 'Walker', 'General', '1040407000-427', '8', '2000', '16000', ' ', ' ', ' ', '8', '2000', '16000', 'wrong date'),
(93, 'INSERT', 'Jade  Lustre', 0, ' ', 11, 65, '2020-12-0848', 'Walker', 'General', '1040407000-427', '8', '2000', '16000', ' ', ' ', ' ', '8', '2000', '16000', ' '),
(94, 'INSERT', 'Jade  Lustre', 0, ' ', 11, 64, '2020-12-0848', 'Cane', 'White cane', '1040407000-426', '6', '550', '3300', ' ', ' ', ' ', '6', '550', '3300', ' '),
(95, 'INSERT', 'Jade  Lustre', 0, ' ', 11, 63, '2020-12-0848', 'Crutches', 'Stainless crutches', '1040407000-425', '10', '1000', '10000', ' ', ' ', ' ', '10', '1000', '10000', ' '),
(96, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 11, 63, '2020-12-0848', 'Crutches', 'Stainless crutches', '1040407000-425', '10', '1000', '10000', ' ', ' ', ' ', '10', '1000', '10000', 'mistaken delivery date'),
(97, 'INSERT', 'Jade  Lustre', 0, ' ', 11, 62, '2020-12-0848', 'Wheelchair', 'Pedia wheelchair, heavy duty, stainless', '1040407000-424', '5', '6000', '30000', ' ', ' ', ' ', '5', '6000', '30000', ' '),
(98, 'INSERT', 'Jade  Lustre', 0, ' ', 11, 61, '2020-12-0848', 'Wheelchair', 'Adult wheelchair, heavy duty, stainless', '1040407000-423', '20', '6000', '120000', ' ', ' ', ' ', '20', '6000', '120000', ' '),
(99, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 66, '2020-12-0768', 'Margarine', 'General', '1040405000-435', '12', '412', '4944', ' ', ' ', ' ', '12', '412', '4944', ' '),
(100, 'INSERT', 'Jade  Lustre', 0, ' ', 13, 103, '2020-12-0842', 'Plates', 'Plates', '1040499000-346', '2', '1000', '2000', ' ', ' ', ' ', '2', '1000', '2000', ' '),
(101, 'INSERT', 'Jade  Lustre', 0, ' ', 13, 101, '2020-12-0842', 'Utensil', 'Teaspoon', '1040499000-345', '2', '300', '600', ' ', ' ', ' ', '2', '300', '600', ' '),
(102, 'INSERT', 'Jade  Lustre', 0, ' ', 13, 100, '2020-12-0842', 'Bowl', 'Bowl', '1040499000-344', '2', '400', '800', ' ', ' ', ' ', '2', '400', '800', ' '),
(103, 'INSERT', 'Jade  Lustre', 0, ' ', 13, 98, '2020-12-0842', 'Glass', 'Cup & saucer, glass', '1040499000-343', '2', '600', '1200', ' ', ' ', ' ', '2', '600', '1200', ' '),
(104, 'INSERT', 'Jade  Lustre', 0, ' ', 13, 96, '2020-12-0842', 'Glass', 'Transparent Glass', '1040499000-342', '2', '500', '1000', ' ', ' ', ' ', '2', '500', '1000', ' '),
(105, 'INSERT', 'Jade  Lustre', 0, ' ', 13, 95, '2020-12-0842', 'Utensil', 'Spoon and Fork', '1040499000-341', '3', '800', '2400', ' ', ' ', ' ', '3', '800', '2400', ' '),
(106, 'INSERT', 'Jade  Lustre', 0, ' ', 14, 104, '2021-03-0065', 'Television', 'Television, 32-inch, full HD, Smart TV', '1040502000-428', '1', '14995', '14995', ' ', ' ', ' ', '1', '14995', '14995', ' '),
(107, 'INSERT', 'Jade  Lustre', 0, ' ', 14, 105, '2021-03-0065', 'Aircon', 'Aircon, 1 HP, window type', '1040502000-429', '2', '14995', '29990', ' ', ' ', ' ', '2', '14995', '29990', ' '),
(108, 'INSERT', 'Jade  Lustre', 0, ' ', 15, 106, '2020-12-0731', 'Utensil', 'Stainless steel spoon and forks as set or pair', '1040499000-430', '30', '98', '2940', ' ', ' ', ' ', '30', '98', '2940', ' '),
(109, 'INSERT', 'Jade  Lustre', 0, ' ', 15, 107, '2020-12-0731', 'Glass', 'Cups and saucers in set', '1040499000-431', '30', '100', '3000', ' ', ' ', ' ', '30', '100', '3000', ' '),
(110, 'INSERT', 'Jade  Lustre', 0, ' ', 15, 108, '2020-12-0731', 'Knives', 'Knives set w/ wooden stand storage', '1040499000-432', '2', '555', '1110', ' ', ' ', ' ', '2', '555', '1110', ' '),
(111, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 9, 57, '2020-12-0787', 'Table', 'Office table (wooden with drawer)', '1040601000-433', '6', '4500', '27000', ' ', ' ', ' ', '6', '4500', '27000', 'update delivery date'),
(112, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 67, '2020-12-0768', 'Chocolate', 'Unsweetened', '1040405000-436', '2', '575', '1150', ' ', ' ', ' ', '2', '575', '1150', ' '),
(113, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 9, 57, '2020-12-0787', 'Table', 'Office table (wooden with drawer)', '1040601000-433', '6', '4500', '27000', ' ', ' ', ' ', '6', '4500', '27000', 'date update'),
(114, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 68, '2020-12-0768', 'Raisins', '200g', '1040405000-437', '24', '46', '1104', ' ', ' ', ' ', '24', '46', '1104', ' '),
(115, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 69, '2020-12-0768', 'Milk', 'Milk powder, 900g', '1040405000-438', '210', '446', '93660', ' ', ' ', ' ', '210', '446', '93660', ' '),
(116, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 70, '2020-12-0768', 'Sinigang Mix', '70g', '1040405000-439', '8', '32', '256', ' ', ' ', ' ', '8', '32', '256', ' '),
(117, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 71, '2020-12-0768', 'Sauce', 'Soy sauce, 3.785ml', '1040405000-440', '24', '140', '3360', ' ', ' ', ' ', '24', '140', '3360', ' '),
(118, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 73, '2020-12-0768', 'Sugar', 'White Sugar, 1000g', '1040405000-442', '60', '56', '3360', ' ', ' ', ' ', '60', '56', '3360', ' '),
(119, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 73, '2020-12-0768', 'Sugar', 'White Sugar, 1000g', '1040405000-442', '60', '56', '3360', ' ', ' ', ' ', '60', '56', '3360', ' '),
(120, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 74, '2020-12-0768', 'Sugar', 'Brown Sugar, 1000g', '1040405000-443', '150', '46', '6900', ' ', ' ', ' ', '150', '46', '6900', ' '),
(121, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 75, '2020-12-0768', 'Corn', 'Young Corn Whole, 410g', '1040405000-444', '30', '48', '1440', ' ', ' ', ' ', '30', '48', '1440', ' '),
(122, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 76, '2020-12-0768', 'Vinegar', '3.785ml', '1040405000-445', '24', '126', '3024', ' ', ' ', ' ', '24', '126', '3024', ' '),
(123, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 77, '2020-12-0768', 'Black Pepper', 'Black Pepper, ground, 35g', '1040405000-446', '12', '76', '912', ' ', ' ', ' ', '12', '76', '912', ' '),
(124, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 78, '2020-12-0768', 'Laurel', 'General', '1040405000-447', '12', '9', '108', ' ', ' ', ' ', '12', '9', '108', ' '),
(125, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 10, 60, '2021-03-0140', 'Zapper', 'Indoor insect and mosquito zapper', '1040502000-422', '4', '2000', '8000', ' ', ' ', ' ', '4', '2000', '8000', 'date update'),
(126, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 79, '2020-12-0768', 'Black Pepper', 'Black Pepper, Whole, 35g', '1040405000-448', '12', '75', '900', ' ', ' ', ' ', '12', '75', '900', ' '),
(127, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 80, '2020-12-0768', 'Baking Soda', 'General', '1040405000-449', '2', '85', '170', ' ', ' ', ' ', '2', '85', '170', ' '),
(128, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 81, '2020-12-0768', 'Vanilla', '8g', '1040405000-450', '12', '27', '324', ' ', ' ', ' ', '12', '27', '324', ' '),
(129, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 82, '2020-12-0768', 'Wrap', 'Vegetable Wrap, 20m', '1040405000-451', '1', '618', '618', ' ', ' ', ' ', '1', '618', '618', ' '),
(130, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 83, '2020-12-0768', 'Oil', 'Cooking Oil, 17kl', '1040405000-452', '18', '1345', '24210', ' ', ' ', ' ', '18', '1345', '24210', ' '),
(131, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 84, '2020-12-0768', 'Sauce', 'Tomato Sauce, 1kl', '1040405000-453', '30', '71', '2130', ' ', ' ', ' ', '30', '71', '2130', ' '),
(132, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 85, '2020-12-0768', 'Nata de Coco', '680g', '1040405000-454', '48', '96', '4608', ' ', ' ', ' ', '48', '96', '4608', ' '),
(133, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 86, '2020-12-0768', 'Kaong', '680g', '1040405000-455', '48', '116', '5568', ' ', ' ', ' ', '48', '116', '5568', ' '),
(134, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 87, '2020-12-0768', 'Patis', 'General', '1040405000-456', '24', '61', '1464', ' ', ' ', ' ', '24', '61', '1464', ' '),
(135, 'DELETION', 'Jade  Lustre', 12, 'Jade', 12, 87, '2020-12-0768', 'Patis', 'General', '1040405000-456', '24', '61', '1464', ' ', ' ', ' ', '24', '61', '1464', 'Feel ko lang'),
(136, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 87, '2020-12-0768', 'Patis', 'General', '1040405000-456', '24', '61', '1464', ' ', ' ', ' ', '24', '61', '1464', ' '),
(137, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 88, '2020-12-0768', 'Pineapple', 'Pineapple Crush, 822g', '1040405000-457', '36', '71', '2556', ' ', ' ', ' ', '36', '71', '2556', ' '),
(138, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 89, '2020-12-0768', 'Pineapple', 'Tidbits, 822g', '1040405000-458', '36', '71', '2556', ' ', ' ', ' ', '36', '71', '2556', ' '),
(139, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 90, '2020-12-0768', 'Pineapple', 'Pineapple Juice, 1/2gal. four season', '1040405000-459', '72', '81', '5832', ' ', ' ', ' ', '72', '81', '5832', ' '),
(140, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 91, '2020-12-0768', 'Mushroom', 'Mushroom Soup Powder, 70g', '1040405000-460', '45', '38/', '1710', ' ', ' ', ' ', '45', '38', '1710', ' '),
(141, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 92, '2020-12-0768', 'Mushroom', 'Mushroom Whole, 400g', '1040405000-461', '30', '46', '1380', ' ', ' ', ' ', '30', '46', '1380', ' '),
(142, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 93, '2020-12-0768', 'Green Peas', 'Green Peas, 410g', '1040405000-462', '40', '24', '960', ' ', ' ', ' ', '40', '24', '960', ' '),
(143, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 94, '2020-12-0768', 'Rice', 'Commercial Rice, Premium', '1040405000-463', '60', '2890', '173400', ' ', ' ', ' ', '60', '2890', '173400', ' '),
(144, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 97, '2020-12-0768', 'Rice', 'Rice Pilit, Premium', '1040405000-464', '30', '56', '1680', ' ', ' ', ' ', '30', '56', '1680', ' '),
(145, 'DELETION', 'Jade  Lustre', 12, 'Jade', 12, 97, '2020-12-0768', 'Rice', 'Rice Pilit, Premium', '1040405000-464', '30', '56', '1680', ' ', ' ', ' ', '30', '56', '1680', 'ok'),
(146, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 97, '2020-12-0768', 'Rice', 'Rice Pilit, Premium', '1040405000-464', '30', '56', '1680', ' ', ' ', ' ', '30', '56', '1680', ' '),
(147, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 99, '2020-12-0768', 'Rice', 'Rice Tapol, Premium', '1040405000-465', '8', '86', '688', ' ', ' ', ' ', '8', '86', '688', ' '),
(148, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 102, '2020-12-0768', 'Biscuits', 'Assorted Biscuits', '1040405000-466', '500', '47', '23500', ' ', ' ', ' ', '500', '47', '23500', ' '),
(149, 'INSERT', 'Jade  Lustre', 0, ' ', 16, 109, '2021-03-0099', 'POSTER COLOR', 'GENERAL', '1040401000-467', '3', '140', '420', ' ', ' ', ' ', '3', '140', '420', ' '),
(150, 'INSERT', 'Jade  Lustre', 0, ' ', 16, 110, '2021-03-0099', 'BRUSH', 'PAINT BRUSH', '1040401000-468', '40', '25', '1000', ' ', ' ', ' ', '40', '25', '1000', ' '),
(151, 'INSERT', 'Jade  Lustre', 0, ' ', 16, 111, '2021-03-0099', 'FOLDER', 'EXPANDABLE FOLDER, maroon', '1040401000-469', '100', '13', '1300', ' ', ' ', ' ', '100', '13', '1300', ' '),
(152, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 112, '2020-12-0766', 'Underwear', 'Underwear, Ladies, small', '1040499000-470', '90', '72', '6480', ' ', ' ', ' ', '90', '72', '6480', ' '),
(153, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 113, '2020-12-0766', 'Underwear', 'Underwear, Ladies, medium', '1040499000-471', '90', '72', '6480', ' ', ' ', ' ', '90', '72', '6480', ' '),
(154, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 114, '2020-12-0766', 'Underwear', 'Underwear, Ladies, Large', '1040499000-472', '90', '72', '6480', ' ', ' ', ' ', '90', '72', '6480', ' '),
(155, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 115, '2020-12-0766', 'Underwear', 'Underwear, men, small', '1040499000-473', '90', '72', '6480', ' ', ' ', ' ', '90', '72', '6480', ' '),
(156, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 116, '2020-12-0766', 'T-shirt', 'T-shirt, small', '1040499000-474', '90', '96', '8640', ' ', ' ', ' ', '90', '96', '8640', ' '),
(157, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 117, '2020-12-0766', 'T-shirt', 'T-shirt, medium', '1040499000-475', '90', '96', '8640', ' ', ' ', ' ', '90', '96', '8640', ' '),
(158, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 118, '2020-12-0766', 'T-shirt', 'T-shirt, large', '1040499000-476', '90', '96', '8640', ' ', ' ', ' ', '90', '96', '8640', ' '),
(159, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 119, '2020-12-0766', 'Pajama', 'Pajama, small', '1040499000-477', '90', '96', '8640', ' ', ' ', ' ', '90', '96', '8640', ' '),
(160, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 120, '2020-12-0766', 'Pajama', 'Pajama, medium', '1040499000-478', '90', '96', '8640', ' ', ' ', ' ', '90', '96', '8640', ' '),
(161, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 121, '2020-12-0766', 'Pajama', 'Pajama, large', '1040499000-479', '90', '96', '8640', ' ', ' ', ' ', '90', '96', '8640', ' '),
(162, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 122, '2020-12-0766', 'Bra', 'Baby bra', '1040499000-480', '2', '1148', '2296', ' ', ' ', ' ', '2', '1148', '2296', ' '),
(163, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 123, '2020-12-0766', 'Bra', 'Bra, assorted size', '1040499000-481', '2', '1735', '3470', ' ', ' ', ' ', '2', '1735', '3470', ' '),
(164, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 124, '2020-12-0766', 'Porontong', 'General', '1040499000-482', '2', '1902', '3804', ' ', ' ', ' ', '2', '1902', '3804', ' '),
(165, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 125, '2020-12-0766', 'Underwear', 'Panty, children', '1040499000-483', '2', '667', '1334', ' ', ' ', ' ', '2', '667', '1334', ' '),
(166, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 126, '2020-12-0766', 'Underwear', 'Pantylettes', '1040499000-484', '3', '1495', '4485', ' ', ' ', ' ', '3', '1495', '4485', ' '),
(167, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 127, '2020-12-0766', 'Blouse', 'Blouse, assorted size', '1040499000-485', '3', '4783', '14349', ' ', ' ', ' ', '3', '4783', '14349', ' '),
(168, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 128, '2020-12-0766', 'Pants', 'Pants, assorted size', '1040499000-486', '2', '5035', '10070', ' ', ' ', ' ', '2', '5035', '10070', ' '),
(169, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 129, '2020-12-0766', 'Towel', 'Bath towel', '1040499000-487', '40', '275', '11000', ' ', ' ', ' ', '40', '275', '11000', ' '),
(170, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 130, '2020-12-0766', 'Sando', 'General', '1040499000-488', '5', '1195', '5975', ' ', ' ', ' ', '5', '1195', '5975', ' '),
(171, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 131, '2020-12-0766', 'Bag', 'Sako bag', '1040499000-489', '20', '120', '2400', ' ', ' ', ' ', '20', '120', '2400', ' '),
(172, 'INSERT', 'Jade  Lustre', 0, ' ', 17, 132, '2020-12-0766', 'Dress', 'General', '1040499000-490', '40', '495', '19800', ' ', ' ', ' ', '40', '495', '19800', ' '),
(173, 'INSERT', 'Jade  Lustre', 0, ' ', 18, 133, '2020-12-0776', 'Detergent', 'Detergent bar', '1040499000-491', '88', '22', '1936', ' ', ' ', ' ', '88', '22', '1936', ' '),
(174, 'INSERT', 'Jade  Lustre', 0, ' ', 18, 134, '2020-12-0776', 'Detergent', 'Detergent powder', '1040499000-492', '120', '12', '1440', ' ', ' ', ' ', '120', '12', '1440', ' '),
(175, 'INSERT', 'Jade  Lustre', 0, ' ', 18, 135, '2020-12-0776', 'Dishwashing', 'Dishwashing liquid', '1040499000-493', '120', '12', '1440', ' ', ' ', ' ', '120', '12', '1440', ' '),
(176, 'INSERT', 'Jade  Lustre', 0, ' ', 18, 136, '2020-12-0776', 'Dustpan', 'General', '1040499000-497', '10', '45', '450', ' ', ' ', ' ', '10', '45', '450', ' '),
(177, 'INSERT', 'Jade  Lustre', 0, ' ', 18, 137, '2020-12-0776', 'Fabric Conditioner', 'General', '1040499000-494', '36', '67.10', '2415.6', ' ', ' ', ' ', '36', '67.1', '2415.6', ' '),
(178, 'INSERT', 'Jade  Lustre', 0, ' ', 18, 138, '2020-12-0776', 'Rags', 'General', '1040499000-495', '15', '71', '1065', ' ', ' ', ' ', '15', '71', '1065', ' '),
(179, 'INSERT', 'Jade  Lustre', 0, ' ', 18, 139, '2020-12-0776', 'Cleaner', 'Toilet bowl and urinal cleaner', '1040499000-496', '15', '81', '1215', ' ', ' ', ' ', '15', '81', '1215', ' '),
(180, 'INSERT', 'Jade  Lustre', 0, ' ', 19, 140, '2020-12-0772', 'LPG', 'LPG Gasul w/tank,11kg', '1040499000-498', '3', '2678', '8034', ' ', ' ', ' ', '3', '2678', '8034', ' '),
(181, 'INSERT', 'Jade  Lustre', 0, ' ', 19, 141, '2020-12-0772', 'Regulator', 'Regulator Gasul-full bulb', '1040499000-499', '3', '928', '2784', ' ', ' ', ' ', '3', '928', '2784', ' '),
(182, 'INSERT', 'Jade  Lustre', 0, ' ', 19, 142, '2020-12-0772', 'Hose', 'Gasul hose Stainless', '1040499000-500', '3', '298', '894', ' ', ' ', ' ', '3', '298', '894', ' '),
(183, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 143, '2020-12-0770', 'Toothbrush', 'General', '1040499000-501', '100', '13', '1300', ' ', ' ', ' ', '100', '13', '1300', ' '),
(184, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 144, '2020-12-0770', 'Shampoo', 'Shampoo bottle,90ml', '1040499000-502', '15', '50', '750', ' ', ' ', ' ', '15', '50', '750', ' '),
(185, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 145, '2020-12-0770', 'Soap', 'Bath Soap, 90g', '1040499000-503', '15', '28', '420', ' ', ' ', ' ', '15', '28', '420', ' '),
(186, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 146, '2020-12-0770', 'Albatross', 'Albatross w/handle', '1040499000-504', '30', '51.75', '1552.5', ' ', ' ', ' ', '30', '51.75', '1552.5', ' '),
(187, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 147, '2020-12-0770', 'Toothpaste', 'Toothpaste,70gm (tube)', '1040499000-505', '150', '45', '6750', ' ', ' ', ' ', '150', '45', '6750', ' '),
(188, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 148, '2020-12-0770', 'Shampoo', 'Lice, shampoo, 60ml', '1040499000-506', '30', '73.75', '2212.5', ' ', ' ', ' ', '30', '73.75', '2212.5', ' '),
(189, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 149, '2020-12-0770', 'Tawas', 'Tawas powder', '1040499000-507', '150', '7.50', '1125', ' ', ' ', ' ', '150', '7.5', '1125', ' '),
(190, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 150, '2020-12-0770', 'Pads', 'Hot pads', '1040499000-508', '8', '87', '696', ' ', ' ', ' ', '8', '87', '696', ' '),
(191, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 151, '2020-12-0770', 'Brooms', 'Stick brooms', '1040499000-509', '50', '32', '1600', ' ', ' ', ' ', '50', '32', '1600', ' '),
(192, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 152, '2020-12-0770', 'Gloves', 'Plastic gloves', '1040499000-510', '2', '83', '166', ' ', ' ', ' ', '2', '83', '166', ' '),
(193, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 153, '2020-12-0770', 'Lysol', 'Lysol, 510ml', '1040499000-511', '6', '430', '2580', ' ', ' ', ' ', '6', '430', '2580', ' '),
(194, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 154, '2020-12-0770', 'Hairnet', 'General', '1040499000-512', '15', '18', '270', ' ', ' ', ' ', '15', '18', '270', ' '),
(195, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 155, '2020-12-0770', 'Mop Handle', 'General', '1040499000-513', '4', '97', '388', ' ', ' ', ' ', '4', '97', '388', ' '),
(196, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 156, '2020-12-0770', 'Hanger', 'Panty Hanger', '1040499000-514', '45', '147', '6615', ' ', ' ', ' ', '45', '147', '6615', ' '),
(197, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 157, '2020-12-0770', 'Diaper', 'Disposable diaper, medium(64/pack)', '1040499000-515', '12', '322', '3864', ' ', ' ', ' ', '12', '322', '3864', ' '),
(198, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 158, '2020-12-0770', 'Diaper', 'Disposable Diaper, small (64/pack)', '1040499000-516', '12', '308', '3696', ' ', ' ', ' ', '12', '308', '3696', ' '),
(199, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 159, '2020-12-0770', 'Deodorant', 'Deodorant, sachet', '1040499000-517', '12', '6.75', '81', ' ', ' ', ' ', '12', '6.75', '81', ' '),
(200, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 160, '2020-12-0770', 'Handwash', 'Handwash 225ml', '1040499000-518', '10', '113', '1130', ' ', ' ', ' ', '10', '113', '1130', ' '),
(201, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 161, '2020-12-0770', 'Cleanser', 'Cleanser powder 500ml', '1040499000-519', '30', '47', '1410', ' ', ' ', ' ', '30', '47', '1410', ' '),
(202, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 162, '2020-12-0770', 'Wrapper', 'Ice Wrapper', '1040499000-520', '6', '23', '138', ' ', ' ', ' ', '6', '23', '138', ' '),
(203, 'INSERT', 'Jade  Lustre', 0, ' ', 20, 163, '2020-12-0770', 'Safety match', 'General', '1040499000-521', '9', '18', '162', ' ', ' ', ' ', '9', '18', '162', ' '),
(204, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 21, 164, '2020-12-0775', 'Napkin', 'Napkin w/ wings', '1040499000-522', '2', '735', '1470', ' ', ' ', ' ', '2', '735', '1470', ' '),
(205, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 21, 165, '2020-12-0775', 'Scouring', 'Scouring pad w/ foam-doz', '1040499000-523', '4', '432', '1728', ' ', ' ', ' ', '4', '432', '1728', ' '),
(206, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 21, 166, '2020-12-0775', 'Scouring', 'Scouring balls- doz', '1040499000-524', '4', '494', '1976', ' ', ' ', ' ', '4', '494', '1976', ' '),
(207, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 21, 167, '2020-12-0775', 'Holder', 'Pot holder', '1040499000-525', '30', '23', '690', ' ', ' ', ' ', '30', '23', '690', ' '),
(208, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 21, 168, '2020-12-0775', 'Apron', 'General', '1040499000-526', '10', '76', '760', ' ', ' ', ' ', '10', '76', '760', ' '),
(209, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 21, 169, '2020-12-0775', 'Hanger', 'General', '1040499000-527', '12', '81', '972', ' ', ' ', ' ', '12', '81', '972', ' '),
(210, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 22, 170, '2020-12-0798', 'Chair', 'Office Chair ( swivel, steel base w/ armrest)', '1040601000-528', '4', '3000', '12000', ' ', ' ', ' ', '4', '3000', '12000', ' '),
(211, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 23, 171, '2020-12-0794', 'Table runner', 'General', '1040499000-529', '8', '409', '3272', ' ', ' ', ' ', '8', '409', '3272', ' '),
(212, 'UPDATE', 'Kurt T. Tiempo', 4, 'schema', 23, 171, '2020-12-0794', 'Table runner', 'General', '1040499000-529', '8', '409', '3272', ' ', ' ', ' ', '8', '409', '3272', 'test'),
(213, 'INSERT', 'Jade  Lustre', 0, ' ', 24, 172, '2021-03-0145', 'Aircon', 'Aircon, 1 HP, window type', '1040502000-429', '1', '14999', '14999', ' ', ' ', ' ', '3', '14999', '44997', ' '),
(214, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 23, 171, '2020-12-0794', 'Table runner', 'General', '1040499000-529', '8', '409', '3272', ' ', ' ', ' ', '8', '409', '3272', 'testing'),
(215, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 23, 171, '2020-12-0794', 'Table runner', 'General', '1040499000-529', '8', '409', '3272', ' ', ' ', ' ', '8', '409', '3272', 'date correction'),
(216, 'INSERT', 'Jade  Lustre', 0, ' ', 25, 174, '2020-12-0841', 'Ladder', 'Heavy Duty Steel Ladder, 12ft.', '1040502000-533', '1', '5000', '5000', ' ', ' ', ' ', '1', '5000', '5000', ' '),
(217, 'INSERT', 'Jade  Lustre', 0, ' ', 25, 173, '2020-12-0841', 'Platform', 'Heavy Duty Steel Platform', '1040502000-532', '1', '6000', '6000', ' ', ' ', ' ', '1', '6000', '6000', ' '),
(218, 'INSERT', 'Jade  Lustre', 0, ' ', 26, 175, '2021-03-0142', 'Scanner', 'Portable Scanner (Brother DS-720D)', '1040503000-534', '1', '13500', '13500', ' ', ' ', ' ', '1', '13500', '13500', ' '),
(219, 'DELETION OF ISSUANCE', 'Jade  Lustre', 12, 'Jade', 4, 25, ' ', 'Phenylephrine+Bromphenamine', '500mg tab', '1040406000-390', ' ', ' ', ' ', '2', '171.6', '343.2', '2', '171.6', '343.2', 'test'),
(220, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', ' '),
(221, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '2', '500', '1000', ' '),
(222, 'DELETION', 'Jade  Lustre', 12, 'Jade', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', 'test'),
(223, 'DELETION', 'Jade  Lustre', 12, 'Jade', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', 'testing'),
(224, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', ' '),
(225, 'DELETION', 'Jade  Lustre', 12, 'Jade', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', 'test'),
(226, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', ' '),
(227, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '2', '500', '1000', ' '),
(228, 'DELETION', 'Jade  Lustre', 12, 'Jade', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', 'test'),
(229, 'DELETION', 'Jade  Lustre', 12, 'Jade', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', 'test'),
(230, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', ' '),
(231, 'DELETION', 'Jade  Lustre', 12, 'Jade', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', 'test'),
(232, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', ' '),
(233, 'DELETION', 'Jade  Lustre', 12, 'Jade', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', 'test'),
(234, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', ' '),
(235, 'DELETION', 'Jade  Lustre', 12, 'Jade', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', 'test'),
(236, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '2', '500', '1000', ' ', ' ', ' ', '2', '500', '1000', ' '),
(237, 'DELETION', 'Jade  Lustre', 12, 'Jade', 27, 177, '102020', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '2', '500', '1000', ' ', ' ', ' ', '2', '500', '1000', 'test'),
(238, 'INSERT', 'Jade  Lustre', 0, ' ', 27, 176, '2021-06-0659', 'Refrigerator', 'Non-frost', '1040502000-535', '1', '14900', '14900', ' ', ' ', ' ', '1', '14900', '14900', ' '),
(239, 'DELETION', 'Jade  Lustre', 12, 'Jade', 27, 176, '2021-06-0659', 'Refrigerator', 'Non-frost', '1040502000-535', '1', '14900', '14900', ' ', ' ', ' ', '1', '14900', '14900', 'Lacking specs'),
(240, 'INSERT', 'Jade  Lustre', 0, ' ', 27, 177, '2021-06-0659', 'Refrigerator', 'Non-frost, Sharp Silver', '1040502000-535', '1', '14900', '14900', ' ', ' ', ' ', '1', '14900', '14900', ' '),
(241, 'INSERT', 'Jade  Lustre', 0, ' ', 28, 182, '2021-05-0438', 'Walker', 'General', '1040299000-540', '10', '2000', '20000', ' ', ' ', ' ', '10', '2000', '20000', ' '),
(242, 'INSERT', 'Jade  Lustre', 0, ' ', 28, 181, '2021-05-0438', 'Cane', 'White cane', '1040299000-539', '10', '550', '5500', ' ', ' ', ' ', '10', '550', '5500', ' '),
(243, 'INSERT', 'Jade  Lustre', 0, ' ', 28, 180, '2021-05-0438', 'Crutches', 'General', '1040299000-538', '10', '1000', '10000', ' ', ' ', ' ', '10', '1000', '10000', ' '),
(244, 'INSERT', 'Jade  Lustre', 0, ' ', 28, 179, '2021-05-0438', 'Wheelchair', 'Pedia', '1040299000-537', '10', '5500', '55000', ' ', ' ', ' ', '10', '5500', '55000', ' '),
(245, 'INSERT', 'Jade  Lustre', 0, ' ', 28, 178, '2021-05-0438', 'Wheelchair', 'Adult', '1040299000-536', '30', '6000', '180000', ' ', ' ', ' ', '30', '6000', '180000', ' '),
(246, 'DELETION', 'Jade  Lustre', 12, 'Jade', 11, 61, '2020-12-0848', 'Wheelchair', 'Adult wheelchair, heavy duty, stainless', '1040407000-423', '20', '6000', '120000', ' ', ' ', ' ', '20', '6000', '120000', 'test'),
(247, 'DELETION', 'Jade  Lustre', 12, 'Jade', 11, 62, '2020-12-0848', 'Wheelchair', 'Pedia wheelchair, heavy duty, stainless', '1040407000-424', '5', '6000', '30000', ' ', ' ', ' ', '5', '6000', '30000', 'wrong account'),
(248, 'DELETION', 'Jade  Lustre', 12, 'Jade', 11, 63, '2020-12-0848', 'Crutches', 'Stainless crutches', '1040407000-425', '10', '1000', '10000', ' ', ' ', ' ', '10', '1000', '10000', 'wrong account'),
(249, 'DELETION', 'Jade  Lustre', 12, 'Jade', 11, 64, '2020-12-0848', 'Cane', 'White cane', '1040407000-426', '6', '550', '3300', ' ', ' ', ' ', '6', '550', '3300', 'wrong account'),
(250, 'DELETION', 'Jade  Lustre', 12, 'Jade', 11, 65, '2020-12-0848', 'Walker', 'General', '1040407000-427', '8', '2000', '16000', ' ', ' ', ' ', '8', '2000', '16000', 'wrong account'),
(251, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 187, '2020-12-0848', 'Wheelchair', 'Adult wheelchair, heavy duty, stainless', '1040299000-541', '20', '6000', '120000', ' ', ' ', ' ', '20', '6000', '120000', ' '),
(252, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 186, '2020-12-0848', 'Wheelchair', 'Pedia wheelchair, heavy duty, stainless', '1040299000-542', '5', '6000', '30000', ' ', ' ', ' ', '5', '6000', '30000', ' '),
(253, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 185, '2020-12-0848', 'Crutches', 'Stainless crutches', '1040299000-543', '10', '1000', '10000', ' ', ' ', ' ', '10', '1000', '10000', ' '),
(254, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 184, '2020-12-0848', 'Cane', 'White cane', '1040299000-539', '6', '550', '3300', ' ', ' ', ' ', '16', '550', '8800', ' '),
(255, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 11, 184, '2020-12-0848', 'Cane', 'White cane', '1040299000-539', '6', '550', '3300', ' ', ' ', ' ', '6', '550', '3300', 'update date'),
(256, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 183, '2020-12-0848', 'Walker', 'General', '1040299000-540', '8', '2000', '16000', ' ', ' ', ' ', '18', '2000', '36000', ' '),
(257, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 188, '2021-05-0494', 'Welding Machine', 'Portable Welding Machine 200 amp. Mitsuden', '1040501000-544', '1', '6950', '6950', ' ', ' ', ' ', '1', '6950', '6950', ' '),
(258, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 189, '2021-05-0494', 'Compressor Tee', 'Compressor Tee ga. 1/2', '5020399000-545', '12', '198', '2376', ' ', ' ', ' ', '12', '198', '2376', ' '),
(259, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 190, '2021-05-0494', 'Tile Grout', 'White, 2kls/pack', '5020399000-546', '10', '100', '1000', ' ', ' ', ' ', '10', '100', '1000', ' '),
(260, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 191, '2021-05-0494', 'Door knob', 'Door knob good quality', '5020399000-547', '20', '1620', '32400', ' ', ' ', ' ', '20', '1620', '32400', ' '),
(261, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 192, '2021-05-0494', 'Faucet', 'Lavatory Faucet, good quality 1/2', '5020399000-548', '10', '745', '7450', ' ', ' ', ' ', '10', '745', '7450', ' '),
(262, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 193, '2021-05-0494', 'Plug', 'GI Plug, 1/2', '5020399000-549', '20', '20', '400', ' ', ' ', ' ', '20', '20', '400', ' '),
(263, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 194, '2021-05-0494', 'Valve', 'GI Gate Valve, 3/4 good quality', '5020399000-550', '10', '450', '4500', ' ', ' ', ' ', '10', '450', '4500', ' '),
(264, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 195, '2021-05-0494', 'Valve', 'GI Gate Valve, 1/2 good quality', '5020399000-551', '15', '400', '6000', ' ', ' ', ' ', '15', '400', '6000', ' '),
(265, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 196, '2021-05-0494', 'Valve', 'GI Gate Valve, 1 good quality', '5020399000-552', '5', '650', '3250', ' ', ' ', ' ', '5', '650', '3250', ' '),
(266, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 197, '2021-05-0494', 'Valve', 'Angle Valve Brass, 1/2 good quality', '5020399000-553', '15', '850', '12750', ' ', ' ', ' ', '15', '850', '12750', ' '),
(267, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 198, '2021-05-0494', 'Hose', 'Lavatory Flexible Hose, 1/2 x 12 good quality', '5020399000-554', '15', '250', '3750', ' ', ' ', ' ', '15', '250', '3750', ' '),
(268, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 199, '2021-05-0494', 'Valve', 'PVC Gate Valve, 1/2 good quality', '5020399000-555', '15', '450', '6750', ' ', ' ', ' ', '15', '450', '6750', ' '),
(269, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 200, '2021-05-0494', 'Compressor Coupling', 'PE Compressor Coupling, 1/2 good quality', '5020399000-556', '15', '200', '3000', ' ', ' ', ' ', '15', '200', '3000', ' '),
(270, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 201, '2021-05-0494', 'Elbow', 'PVC Elbow, blue, 1/2 good quality', '5020399000-557', '15', '20', '300', ' ', ' ', ' ', '15', '20', '300', ' '),
(271, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 202, '2021-05-0494', 'Connector', 'PVC Connector, Blue, 1/2 good quality', '5020399000-558', '15', '20', '300', ' ', ' ', ' ', '15', '20', '300', ' '),
(272, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 203, '2021-05-0494', 'Handle', 'PVC Handle Fush Bowl', '5020399000-559', '15', '370', '5550', ' ', ' ', ' ', '15', '370', '5550', ' '),
(273, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 204, '2021-05-0494', 'Repair Kit', 'Repair kit, General', '5020399000-560', '10', '900', '9000', ' ', ' ', ' ', '10', '900', '9000', ' '),
(274, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 205, '2021-05-0494', 'Blade', 'Hacksaw Blade', '5020399000-561', '20', '98', '1960', ' ', ' ', ' ', '20', '98', '1960', ' '),
(275, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 206, '2021-05-0494', 'Vulcaseal', 'Vulcaseal, General', '5020399000-562', '4', '1800', '7200', ' ', ' ', ' ', '4', '1800', '7200', ' '),
(276, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 207, '2021-05-0494', 'Plug', 'Water Plug (Davies Mortaflex Waterproofing)', '5020399000-563', '4', '1900', '7600', ' ', ' ', ' ', '4', '1900', '7600', ' '),
(277, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 208, '2021-05-0494', 'Mighty Bond', 'Mighty Bond, General', '5020399000-564', '15', '90', '1350', ' ', ' ', ' ', '15', '90', '1350', ' ');
INSERT INTO `tblslcactivitylogs` (`activity_id`, `activity`, `deleted_by`, `delete_id`, `delete_username`, `pohdr_idlink`, `podtl_idlink`, `po_num`, `item_name`, `item_description`, `item_code`, `qty_rec`, `unit_rec`, `totalcost_rec`, `qty_issue`, `unitcost_issue`, `totalcost_issue`, `qty_bal`, `unitcost_bal`, `totalcost_bal`, `reason`) VALUES
(278, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 209, '2021-05-0494', 'Contact Cement', 'Emerald PVC Contact Cement, 400 cc (Alasco Solvent Cement)', '5020399000-565', '15', '350', '5250', ' ', ' ', ' ', '15', '350', '5250', ' '),
(279, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 210, '2021-05-0494', 'Welding Handle', 'Welding Handle Jackson', '1040501000-566', '1', '980', '980', ' ', ' ', ' ', '1', '980', '980', ' '),
(280, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 211, '2021-05-0494', 'Pipe', 'PE Pipe, 1/2 sdr 11 (150m per roll) (cutting)', '5020399000-567', '1', '5000', '5000', ' ', ' ', ' ', '1', '5000', '5000', ' '),
(281, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 212, '2021-05-0494', 'Grinder', 'Electrical Grinder #4 good quality', '1040501000-568', '1', '9800', '9800', ' ', ' ', ' ', '1', '9800', '9800', ' '),
(282, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 213, '2021-05-0494', 'Adaptor', 'PVC Electrical Male Adaptor w/ Locknut, 1/2', '5020399000-569', '50', '20', '1000', ' ', ' ', ' ', '50', '20', '1000', ' '),
(283, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 214, '2021-05-0494', 'Adaptor', 'PVC Electrical Male Adaptor w/ Locknut, 3/4', '5020399000-570', '50', '25', '1250', ' ', ' ', ' ', '50', '25', '1250', ' '),
(284, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 215, '2021-05-0494', 'Switch', 'Flush type 2 gang switch, good quality', '5020399000-571', '10', '225', '2250', ' ', ' ', ' ', '10', '225', '2250', ' '),
(285, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 216, '2021-05-0494', 'Switch', 'Flush type 1 gang switch, good quality', '5020399000-572', '10', '150', '1500', ' ', ' ', ' ', '10', '150', '1500', ' '),
(286, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 217, '2021-05-0494', 'Switch', 'Flush type 3 gang switch, good quality', '5020399000-573', '10', '300', '3000', ' ', ' ', ' ', '10', '300', '3000', ' '),
(287, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 218, '2021-05-0494', 'Outlet', 'Flush type 2 gang outlet, good quality', '5020399000-574', '10', '225', '2250', ' ', ' ', ' ', '10', '225', '2250', ' '),
(288, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 219, '2021-05-0494', 'Outlet', 'Flush type 3 gang outlet, good quality', '5020399000-575', '10', '300', '3000', ' ', ' ', ' ', '10', '300', '3000', ' '),
(289, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 220, '2021-05-0494', 'Switch', 'Switch box surface type', '5020399000-576', '10', '1', '10', ' ', ' ', ' ', '10', '1', '10', ' '),
(290, 'DELETION', 'Jade  Lustre', 12, 'Jade', 29, 220, '2021-05-0494', 'Switch', 'Switch box surface type', '5020399000-576', '10', '1', '10', ' ', ' ', ' ', '10', '1', '10', 'erorr'),
(291, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 220, '2021-05-0494', 'Switch', 'Switch box surface type', '5020399000-576', '10', '170', '1700', ' ', ' ', ' ', '10', '170', '1700', ' '),
(292, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 221, '2021-05-0494', 'Receptacle', 'PVC receptacle, 4 x 4', '5020399000-577', '20', '35', '700', ' ', ' ', ' ', '20', '35', '700', ' '),
(293, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 222, '2021-05-0494', 'Bulb', 'Omni LED light bulb, 12w DL', '5020399000-578', '150', '180', '27000', ' ', ' ', ' ', '150', '180', '27000', ' '),
(294, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 223, '2021-05-0494', 'Starter', 'Fluorescent starter, 4-80 watts', '5020399000-579', '75', '10', '750', ' ', ' ', ' ', '75', '10', '750', ' '),
(295, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 224, '2021-05-0494', 'Solvent Cement', 'Solvent cement, good quality', '5020399000-580', '2', '130', '260', ' ', ' ', ' ', '2', '130', '260', ' '),
(296, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 225, '2021-05-0494', 'Butane', 'Butane gas', '5020399000-581', '5', '69', '345', ' ', ' ', ' ', '5', '69', '345', ' '),
(297, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 226, '2021-05-0494', 'Plug', 'Male plug rubber, heavy duty', '5020399000-582', '50', '55', '2750', ' ', ' ', ' ', '50', '55', '2750', ' '),
(298, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 227, '2021-05-0494', 'Plug', 'Male plug, 10a, plastic', '5020399000-583', '25', '45', '1125', ' ', ' ', ' ', '25', '45', '1125', ' '),
(299, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 228, '2021-05-0494', 'Outlet', 'Spring type outlet, 4 gang', '5020399000-584', '40', '85', '3400', ' ', ' ', ' ', '40', '85', '3400', ' '),
(300, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 229, '2021-05-0494', 'Outlet', 'Spring type outlet, 3 gang', '5020399000-585', '40', '75', '3000', ' ', ' ', ' ', '40', '75', '3000', ' '),
(301, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 230, '2021-05-0494', 'Connector', 'PVC electric connector 1/2', '5020399000-586', '40', '15', '600', ' ', ' ', ' ', '40', '15', '600', ' '),
(302, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 231, '2021-05-0494', 'Rod', 'Fuji welding rod, 12', '5020399000-587', '20', '175', '3500', ' ', ' ', ' ', '20', '175', '3500', ' '),
(303, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 232, '2021-05-0494', 'Tube', 'Ecolum LED tube, 16w (5w)', '5020399000-588', '50', '280', '14000', ' ', ' ', ' ', '50', '280', '14000', ' '),
(304, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 233, '2021-05-0494', 'Ballast', 'Ecolum ballast, 40w', '5020399000-589', '30', '150', '4500', ' ', ' ', ' ', '30', '150', '4500', ' '),
(305, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 234, '2021-05-0494', 'Tube', 'Fluorescent tube ,4w, good quality', '5020399000-590', '50', '100', '5000', ' ', ' ', ' ', '50', '100', '5000', ' '),
(306, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 235, '2021-05-0494', 'Bench Vise', 'Bench vise, General', '1040501000-591', '2', '1300', '2600', ' ', ' ', ' ', '2', '1300', '2600', ' '),
(307, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 236, '2021-05-0494', 'Outlet', 'Aircon outlet, flush type', '5020399000-592', '20', '300', '6000', ' ', ' ', ' ', '20', '300', '6000', ' '),
(308, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 237, '2021-05-0494', 'Extension Wires', 'Extension wires, 5 meters', '1040501000-593', '4', '500', '2000', ' ', ' ', ' ', '4', '500', '2000', ' '),
(309, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 238, '2021-05-0494', 'Tube', 'Fluorescent tube, 18watts w/ assembly', '5020399000-596', '30', '350', '10500', ' ', ' ', ' ', '30', '350', '10500', ' '),
(310, 'INSERT', 'Jade  Lustre', 0, ' ', 29, 239, '2021-05-0494', 'Tube', 'Fluorescent tube, 36watts w/ assembly', '5020399000-597', '30', '450', '13500', ' ', ' ', ' ', '30', '450', '13500', ' '),
(311, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 30, 240, 'TEST PO', 'TEST', 'Test item', '1000000000-598', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', ' '),
(312, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 241, 'TEST PO II', 'TEST', 'Test item', '1000000000-598', '1', '450', '450', ' ', ' ', ' ', '2', '475', '950', ' '),
(313, 'INSERT', 'Jade  Lustre', 0, ' ', 32, 242, '2021-05-0638a', 'Blood Pressure Machine', 'Blood pressure machine, digital', '1040510000-599', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', ' '),
(314, 'INSERT', 'Jade  Lustre', 0, ' ', 32, 243, '2021-05-0638a', 'Bed', 'Hospital bed', '1040601000-600', '1', '14800', '14800', ' ', ' ', ' ', '1', '14800', '14800', ' '),
(315, 'INSERT', 'Jade  Lustre', 0, ' ', 32, 244, '2021-05-0638a', 'Thermometer', 'Digital thermometer', '1040510000-601', '4', '100', '400', ' ', ' ', ' ', '4', '100', '400', ' '),
(316, 'INSERT', 'Jade  Lustre', 0, ' ', 32, 245, '2021-05-0638a', 'Thermal', 'Thermal scanner', '1040510000-602', '2', '1000', '2000', ' ', ' ', ' ', '2', '1000', '2000', ' '),
(317, 'INSERT', 'Jade  Lustre', 0, ' ', 32, 246, '2021-05-0638a', 'Wheelchair', 'Wheelchair, General', '1040599000-603', '2', '4000', '8000', ' ', ' ', ' ', '2', '4000', '8000', ' '),
(318, 'INSERT', 'Jade  Lustre', 0, ' ', 33, 247, '2021-03-0102b', 'Toner', 'Brother toner TN-2280, black', '5029903000-604', '8', '3500', '28000', ' ', ' ', ' ', '8', '3500', '28000', ' '),
(319, 'INSERT', 'Jade  Lustre', 0, ' ', 33, 248, '2021-03-0102b', 'Toner', 'HP laserjet CE285 AC toner, black', '5029903000-605', '4', '2500', '10000', ' ', ' ', ' ', '4', '2500', '10000', ' '),
(320, 'INSERT', 'Jade  Lustre', 0, ' ', 33, 249, '2021-03-0102b', 'Bond Paper', 'Short, bond paper', '5029903000-606', '10', '180', '1800', ' ', ' ', ' ', '10', '180', '1800', ' '),
(321, 'INSERT', 'Jade  Lustre', 0, ' ', 33, 250, '2021-03-0102b', 'Folder', 'Expanded folder, long', '5029903000-607', '48', '25', '1200', ' ', ' ', ' ', '48', '25', '1200', ' '),
(322, 'INSERT', 'Jade  Lustre', 0, ' ', 33, 251, '2021-03-0102b', 'Bond Paper', 'Legal, bond paper', '5029903000-608', '10', '200', '2000', ' ', ' ', ' ', '10', '200', '2000', ' '),
(323, 'INSERT', 'Jade  Lustre', 0, ' ', 34, 252, '2021-06-0683', 'Imaging Unit', 'Imaging unit (A1XU-R700-33)', '5021305099-609', '1', '8670', '8670', ' ', ' ', ' ', '1', '8670', '8670', ' '),
(324, 'INSERT', 'Jade  Lustre', 0, ' ', 34, 253, '2021-06-0683', 'Drum', 'Drum DR114', '5021305099-610', '1', '9880', '9880', ' ', ' ', ' ', '1', '9880', '9880', ' '),
(325, 'INSERT', 'Jade  Lustre', 0, ' ', 34, 254, '2021-06-0683', 'Developer', 'Developer DV116', '5021305099-611', '1', '1370', '1370', ' ', ' ', ' ', '1', '1370', '1370', ' '),
(326, 'INSERT', 'Jade  Lustre', 0, ' ', 34, 255, '2021-06-0683', 'Roller', 'Transfer Roller (A0XX-PP6H-00)', '5021305099-612', '1', '3918', '3918', ' ', ' ', ' ', '1', '3918', '3918', ' '),
(327, 'INSERT', 'Jade  Lustre', 0, ' ', 35, 256, '2021-05-0607', 'Toner', 'Kyocera 3035/4050/5050 (PPT toner)', '1040401000-613', '25', '2200', '55000', ' ', ' ', ' ', '25', '2200', '55000', ' '),
(328, 'INSERT', 'Jade  Lustre', 0, ' ', 37, 257, '2021-05-0367', 'Ink', 'Risograph ink', '1040401000-614', '15', '1400', '21000', ' ', ' ', ' ', '15', '1400', '21000', ' '),
(329, 'DELETION', 'Jade  Lustre', 12, 'Jade', 31, 241, 'TEST PO II', 'TEST', 'Test item', '1000000000-598', '1', '450', '450', ' ', ' ', ' ', '1', '450', '450', 'testing'),
(330, 'DELETION', 'Jade  Lustre', 12, 'Jade', 30, 240, 'TEST PO', 'TEST', 'Test item', '1000000000-598', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', 'testing'),
(331, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 39, 258, 'TEST PO', 'TEST', 'Test item', '1000000000-598', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', ' '),
(332, 'DELETION', 'Jade  Lustre', 12, 'Jade', 39, 258, 'TEST PO', 'TEST', 'Test item', '1000000000-598', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', 'testing'),
(333, 'INSERT', 'Jade  Lustre', 0, ' ', 39, 258, 'TEST PO', 'TEST', 'Test item', '1000000000-598', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', ' '),
(334, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 39, 258, 'TEST PO', 'TEST', 'Test item', '1000000000-598', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', 'test update'),
(335, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 39, 258, 'TEST PO', 'TEST', 'Test item', '1000000000-598', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', 'test update'),
(336, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 39, 258, 'TEST PO', 'TEST', 'Test item', '1000000000-598', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', 'update test'),
(337, 'INSERT', 'Rey  Molina', 0, ' ', 42, 260, '21-05-012', 'Tape', 'Electrical Tape', '1040401000-689', '12', '30', '360', ' ', ' ', ' ', '12', '30', '360', ' '),
(338, 'DELETION', 'Jade  Lustre', 12, 'Jade', 39, 258, 'TEST PO', 'TEST', 'Test item', '1000000000-598', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', 'test'),
(339, 'DELETION', 'Jade  Lustre', 12, 'Jade', 42, 260, ' ', 'Tape', 'Electrical Tape', '1040401000-689', ' ', ' ', ' ', '12', '30', '360', ' ', '30', ' ', 'test'),
(340, 'DELETION', 'Jade  Lustre', 12, 'Jade', 42, 260, '21-05-012', 'Tape', 'Electrical Tape', '1040401000-689', '12', '30', '360', ' ', ' ', ' ', '12', '30', '360', 'test'),
(341, 'INSERT', 'Rey  Molina', 0, ' ', 42, 260, '2021-05-0435', 'Camera', 'Web Camera (A4 Tech 1080p)', '1040507000-726', '2', '2700', '5400', ' ', ' ', ' ', '2', '2700', '5400', ' '),
(342, 'INSERT', 'Rey  Molina', 0, ' ', 42, 261, '2021-05-0435', 'Headphone', 'Headphone (Edifier K800 - USB port)', '1040507000-727', '1', '1980', '1980', ' ', ' ', ' ', '1', '1980', '1980', ' '),
(343, 'INSERT', 'Rey  Molina', 0, ' ', 44, 262, '2021-05-0437', 'Water Dispenser', 'Water Dispenser w/ bottom storage', '1040502000-725', '1', '8900', '8900', ' ', ' ', ' ', '1', '8900', '8900', ' '),
(344, 'INSERT', 'Rey  Molina', 0, ' ', 45, 263, '2021-05-0379, 0381, 0389', 'Ballpen', 'Ordinary, ballpen, black', '1040401000-350', '8', '8', '64', ' ', ' ', ' ', '8', '8', '64', ' '),
(345, 'INSERT', 'Rey  Molina', 0, ' ', 45, 264, '2021-05-0379, 0381, 0389', 'Correction tape', 'CORRECTION TAPE, film base type, UL 6m min', '1040401000-38', '180', '13', '2340', ' ', ' ', ' ', '180', '13', '2340', ' '),
(346, 'INSERT', 'Rey  Molina', 0, ' ', 45, 263, '2021-05-0379, 0381, 0389', 'Ballpen', 'Ordinary, ballpen, black', '1040401000-350', '172', '8', '1376', ' ', ' ', ' ', '180', '8', '1440', ' '),
(347, 'INSERT', 'Rey  Molina', 0, ' ', 45, 265, '2021-05-0379, 0381, 0389', 'Marker', 'MARKER, PERMANENT, bullet type, black', '1040401000-65', '180', '28', '5040', ' ', ' ', ' ', '180', '28', '5040', ' '),
(348, 'INSERT', 'Rey  Molina', 0, ' ', 45, 266, '2021-05-0379, 0381, 0389', 'Cartolina', 'CARTOLINA, assorted colors', '1040401000-3', '180', '18', '3240', ' ', ' ', ' ', '180', '18', '3240', ' '),
(349, 'INSERT', 'Rey  Molina', 0, ' ', 45, 267, '2021-05-0379, 0381, 0389', 'Highlighter', 'Highlighter pen', '1040401000-719', '60', '13', '780', ' ', ' ', ' ', '60', '13', '780', ' '),
(350, 'INSERT', 'Rey  Molina', 0, ' ', 45, 268, '2021-05-0379, 0381, 0389', 'Macrame Rope', 'Macrame Rope Twisted String Cotton Cord for handmade natural beige rope, DIY accessories 50/65/100 mtrs.', '1040499000-720', '2', '1790', '3580', ' ', ' ', ' ', '2', '1790', '3580', ' '),
(351, 'INSERT', 'Rey  Molina', 0, ' ', 45, 269, '2021-05-0379, 0381, 0389', 'Notebook', 'Notebook, 80 pages', '1040499000-721', '120', '18', '2160', ' ', ' ', ' ', '120', '18', '2160', ' '),
(352, 'INSERT', 'Rey  Molina', 0, ' ', 45, 270, '2021-05-0379, 0381, 0389', 'Envelope', 'Long brown envelope', '1040499000-722', '120', '28', '3360', ' ', ' ', ' ', '120', '28', '3360', ' '),
(353, 'INSERT', 'Rey  Molina', 0, ' ', 45, 271, '2021-05-0379, 0381, 0389', 'Cutter', 'Paper Cutter', '1040502000-723', '7', '995', '6965', ' ', ' ', ' ', '7', '995', '6965', ' '),
(354, 'INSERT', 'Rey  Molina', 0, ' ', 45, 272, '2021-05-0379, 0381, 0389', 'Extension wire', 'Extension wire, 10 mtrs. 3 sockets', '1040599000-724', '4', '370', '1480', ' ', ' ', ' ', '4', '370', '1480', ' '),
(355, 'INSERT', 'Rey  Molina', 0, ' ', 46, 273, '2021-05-0267', 'Ballpoint pen', 'Ballpoint pen, 0.5 (black)', '5020201002-694', '62', '15', '930', ' ', ' ', ' ', '62', '15', '930', ' '),
(356, 'INSERT', 'Rey  Molina', 0, ' ', 46, 274, '2021-05-0267', 'Envelope', 'Expanded envelope', '5020201002-695', '62', '15', '930', ' ', ' ', ' ', '62', '15', '930', ' '),
(357, 'INSERT', 'Rey  Molina', 0, ' ', 46, 275, '2021-05-0267', 'Marker', 'Permanent marker, black', '5020201002-711', '62', '48', '2976', ' ', ' ', ' ', '62', '48', '2976', ' '),
(358, 'INSERT', 'Rey  Molina', 0, ' ', 46, 276, '2021-05-0267', 'Ink', 'Epson Ink, 4 colors (not refill)', '5020201002-712', '4', '1000', '4000', ' ', ' ', ' ', '4', '1000', '4000', ' '),
(359, 'INSERT', 'Rey  Molina', 0, ' ', 46, 277, '2021-05-0267', 'Paper', 'Certificate paper, 10pcs/pack', '5020201002-713', '7', '40.5', '283.5', ' ', ' ', ' ', '7', '40.5', '283.5', ' '),
(360, 'INSERT', 'Rey  Molina', 0, ' ', 46, 278, '2021-05-0267', 'Bond paper', 'Bond paper, A4', '5020201002-696', '1', '180.5', '180.5', ' ', ' ', ' ', '1', '180.5', '180.5', ' '),
(361, 'INSERT', 'Rey  Molina', 0, ' ', 47, 279, '2021-05-0394', 'Toner', 'TONER, black, HP M127', '1040401000-709', '30', '1500', '45000', ' ', ' ', ' ', '30', '1500', '45000', ' '),
(362, 'INSERT', 'Rey  Molina', 0, ' ', 47, 280, '2021-05-0394', 'Toner', 'TONER, black, HP M26 A', '1040401000-710', '5', '1500', '7500', ' ', ' ', ' ', '5', '1500', '7500', ' '),
(363, 'DELETION', 'Jade  Lustre', 12, 'Jade', 45, 263, '2021-05-0379, 0381, 0389', 'Ballpen', 'Ordinary, ballpen, black', '1040401000-350', '172', '8', '1376', ' ', ' ', ' ', '172', '8', '1376', 'update delivery'),
(364, 'DELETION', 'Jade  Lustre', 12, 'Jade', 45, 263, '2021-05-0379, 0381, 0389', 'Ballpen', 'Ordinary, ballpen, black', '1040401000-350', '8', '8', '64', ' ', ' ', ' ', '8', '8', '64', 'update delivery'),
(365, 'INSERT', 'Jade  Lustre', 0, ' ', 45, 263, '2021-05-0379, 0381, 0389', 'Ballpen', 'Ordinary, ballpen, black', '1040401000-350', '180', '8', '1440', ' ', ' ', ' ', '180', '8', '1440', ' '),
(366, 'INSERT', 'Rey  Molina', 0, ' ', 48, 281, '2020-11-06850685', 'External Drive', 'EXTERNAL HARD DRIVE, 1TB, 2.5\"HDD, USB 3.0', '1040503000-313', '6', '3000', '18000', ' ', ' ', ' ', '6', '3000', '18000', ' '),
(367, 'INSERT', 'Rey  Molina', 0, ' ', 48, 282, '2020-11-06850685', 'Flash drive', 'Flash Drive, USB 3.0 512GB. OTG', '1040503000-700', '6', '1500', '9000', ' ', ' ', ' ', '6', '1500', '9000', ' '),
(368, 'INSERT', 'Rey  Molina', 0, ' ', 48, 283, '2020-11-06850685', 'Cable', 'HDMI cable, 20 meters', '1040503000-701', '1', '4200', '4200', ' ', ' ', ' ', '1', '4200', '4200', ' '),
(369, 'INSERT', 'Rey  Molina', 0, ' ', 48, 284, '2020-11-06850685', 'Mouse', 'Mouse, wireless, 3 button (1x wheel)', '1040401000-702', '5', '383', '1915', ' ', ' ', ' ', '5', '383', '1915', ' '),
(370, 'INSERT', 'Rey  Molina', 0, ' ', 48, 285, '2020-11-06850685', 'Extension wire', 'Extension wire, standard size', '1040599000-703', '1', '300', '300', ' ', ' ', ' ', '1', '300', '300', ' '),
(371, 'INSERT', 'Rey  Molina', 0, ' ', 48, 286, '2020-11-06850685', 'Printer', 'Printer, with feeder and scanner', '1040503000-704', '4', '14995', '59980', ' ', ' ', ' ', '4', '14995', '59980', ' '),
(372, 'INSERT', 'Rey  Molina', 0, ' ', 48, 287, '2020-11-06850685', 'Ink', 'Ink, Brother BT5000C, Cyan', '1040401000-705', '6', '395', '2370', ' ', ' ', ' ', '6', '395', '2370', ' '),
(373, 'INSERT', 'Rey  Molina', 0, ' ', 48, 288, '2020-11-06850685', 'Ink', 'Ink, Brother BT5000M, Magenta', '1040401000-706', '6', '395', '2370', ' ', ' ', ' ', '6', '395', '2370', ' '),
(374, 'INSERT', 'Rey  Molina', 0, ' ', 48, 289, '2020-11-06850685', 'Ink', 'Ink, Brother BT5000Y, Yellow', '1040401000-707', '6', '395', '2370', ' ', ' ', ' ', '6', '395', '2370', ' '),
(375, 'INSERT', 'Rey  Molina', 0, ' ', 48, 290, '2020-11-06850685', 'Ink', 'Ink, Brother BT6000BK, Black', '1040401000-708', '6', '395', '2370', ' ', ' ', ' ', '6', '395', '2370', ' '),
(376, 'INSERT', 'Rey  Molina', 0, ' ', 49, 291, '2021-05-0538, 0540', 'Notebook', 'Notebook, General', '5020201002-693', '13', '15', '195', ' ', ' ', ' ', '13', '15', '195', ' '),
(377, 'INSERT', 'Jade  Lustre', 0, ' ', 49, 293, '2021-05-0538,0540', 'Bond paper', 'Bond paper, A4', '5020201002-696', '45', '180', '8100', ' ', ' ', ' ', '46', '180.01', '8280.5', ' '),
(378, 'INSERT', 'Jade  Lustre', 0, ' ', 50, 294, '2021-05-03046', 'Modem', '4G LTE openline modem [TPLink Archer MR200 AC750 Wireless Dual Band 4G LTE Router]', '1040502000-692', '1', '5500', '5500', ' ', ' ', ' ', '1', '5500', '5500', ' '),
(379, 'INSERT', 'Jade  Lustre', 0, ' ', 49, 292, '2021-05-0538,0540', 'Ballpoint pen', 'Ballpoint pen, 0.5 (black)', '5020201002-694', '73', '15', '1095', ' ', ' ', ' ', '135', '15', '2025', ' '),
(380, 'INSERT', 'Jade  Lustre', 0, ' ', 49, 298, '2021-05-0538,0540', 'Staple wire', 'Staple wire, 23/6 - 23/-23', '5020201002-699', '2', '150', '300', ' ', ' ', ' ', '2', '150', '300', ' '),
(381, 'INSERT', 'Jade  Lustre', 0, ' ', 49, 297, '2021-05-0538,0540', 'Stapler', 'Heavy duty stapler, 23/6 - 23/23', '5020201002-698', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', ' '),
(382, 'INSERT', 'Jade  Lustre', 0, ' ', 49, 296, '2021-05-0538,0540', 'Frame', 'Certificate frame', '5020201002-697', '2', '67', '134', ' ', ' ', ' ', '2', '67', '134', ' '),
(383, 'INSERT', 'Jade  Lustre', 0, ' ', 49, 295, '2021-05-0538,0540', 'Envelope', 'Expanded envelope', '5020201002-695', '73', '15', '1095', ' ', ' ', ' ', '135', '15', '2025', ' '),
(384, 'INSERT', 'Jade  Lustre', 0, ' ', 51, 299, '2021-04-0389a', 'Cabinet', 'Steel Cabinet', '1040601000-690', '10', '9800', '98000', ' ', ' ', ' ', '10', '9800', '98000', ' '),
(385, 'INSERT', 'Rey  Molina', 0, ' ', 52, 300, '2021-05-0628,0639', 'Table', 'Dining table, 6 seater made of wood, good quality', '1040601000-728', '7', '14895', '104265', ' ', ' ', ' ', '7', '14895', '104265', ' '),
(386, 'INSERT', 'Rey  Molina', 0, ' ', 52, 301, '2021-05-0628,0639', 'Table', 'Conference table, 10 seater capacity, made of pressure board', '1040601000-729', '1', '14895', '14895', ' ', ' ', ' ', '1', '14895', '14895', ' '),
(387, 'INSERT', 'Rey  Molina', 0, ' ', 52, 302, '2021-05-0628,0639', 'Table', 'Laminated office table', '1040601000-730', '8', '8995', '71960', ' ', ' ', ' ', '8', '8995', '71960', ' '),
(388, 'INSERT', 'Rey  Molina', 0, ' ', 52, 303, '2021-05-0628,0639', 'Chair', 'Wooden dining chairs, made of wood, good quality', '1040601000-731', '52', '2995', '155740', ' ', ' ', ' ', '52', '2995', '155740', ' '),
(389, 'INSERT', 'Rey  Molina', 0, ' ', 52, 304, '2021-05-0628,0639', 'Chair', 'Swivel office chair w/ rollers', '1040601000-732', '8', '3995', '31960', ' ', ' ', ' ', '8', '3995', '31960', ' '),
(390, 'INSERT', 'Rey  Molina', 0, ' ', 52, 305, '2021-05-0628,0639', 'Shelves', 'Pantry shelves w/cover', '1040601000-733', '10', '12995', '129950', ' ', ' ', ' ', '10', '12995', '129950', ' '),
(391, 'INSERT', 'Rey  Molina', 0, ' ', 52, 306, '2021-05-0628,0639', 'Cabinet', 'Steel filing cabinets, 4 layers', '1040601000-734', '5', '13695', '68475', ' ', ' ', ' ', '5', '13695', '68475', ' '),
(392, 'INSERT', 'Rey  Molina', 0, ' ', 52, 307, '2021-05-0628,0639', 'Sofa', '4 seater sofa set, leatherette, color light gray', '1040601000-735', '3', '14795', '44385', ' ', ' ', ' ', '3', '14795', '44385', ' '),
(393, 'INSERT', 'Rey  Molina', 0, ' ', 53, 311, '2021-06-0634', 'Shoes', 'Rubber shoes', '1040499000-739', '30', '497', '14910', ' ', ' ', ' ', '30', '497', '14910', ' '),
(394, 'INSERT', 'Rey  Molina', 0, ' ', 53, 310, '2021-06-0634', 'Pajama', 'Pajama with blouse, size: large', '1040499000-738', '20', '198', '3960', ' ', ' ', ' ', '20', '198', '3960', ' '),
(395, 'INSERT', 'Rey  Molina', 0, ' ', 53, 309, '2021-06-0634', 'Pajama', 'Pajama with blouse, size: medium', '1040499000-737', '20', '198', '3960', ' ', ' ', ' ', '20', '198', '3960', ' '),
(396, 'INSERT', 'Rey  Molina', 0, ' ', 53, 308, '2021-06-0634', 'Pajama', 'Pajama with blouse, size: small', '1040499000-736', '20', '198', '3960', ' ', ' ', ' ', '20', '198', '3960', ' '),
(397, 'INSERT', 'Rey  Molina', 0, ' ', 54, 312, '2021-05-0279', 'Printer', 'Printer, ink tank, all in one w/ scanner, feeder (Brother DCP-T420W refill tank printer)', '1040503000-740', '2', '10200', '20400', ' ', ' ', ' ', '2', '10200', '20400', ' '),
(398, 'INSERT', 'Rey  Molina', 0, ' ', 55, 313, '2021-05-0588', 'Cabinet', 'Labor and Materials - CABINET w/ shelves', '1040601000-741', '4', '8500', '34000', ' ', ' ', ' ', '4', '8500', '34000', ' '),
(399, 'INSERT', 'Jade  Lustre', 0, ' ', 57, 315, '2021-06-0609', 'Cabinet', 'Steel Cabinet', '1040601000-690', '1', '14600', '14600', ' ', ' ', ' ', '11', '14600', '160600', ' '),
(400, 'INSERT', 'Jade  Lustre', 0, ' ', 57, 314, '2021-06-0609', 'Chair', 'Executive Chair', '1040601000-782', '1', '14750', '14750', ' ', ' ', ' ', '1', '14750', '14750', ' '),
(401, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 331, '2021-04-0579', 'Hyosine', 'Hyosine-N-B amp number 3', '1040406000-655', '1', '170', '170', ' ', ' ', ' ', '1', '170', '170', ' '),
(402, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 330, '2021-04-0579', 'Hydrocartism', 'Hydrocartism, 100g vial', '1040406000-654', '1', '200', '200', ' ', ' ', ' ', '1', '200', '200', ' '),
(403, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 329, '2021-04-0579', 'Tetanus', 'Tetanus toxoid amp', '1040406000-653', '1', '1000', '1000', ' ', ' ', ' ', '1', '1000', '1000', ' '),
(404, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 328, '2021-04-0579', 'Salinase', 'Salinase nasal spray,drop', '1040406000-652', '3', '120', '360', ' ', ' ', ' ', '3', '120', '360', ' '),
(405, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 327, '2021-04-0579', 'Salbutamol', 'Salbutamol nebule', '1040406000-651', '30', '45', '1350', ' ', ' ', ' ', '30', '45', '1350', ' '),
(406, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 326, '2021-04-0579', 'Oresol', 'Oresol,hydrite sachet', '1040406000-650', '1', '310', '310', ' ', ' ', ' ', '1', '310', '310', ' '),
(407, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 325, '2021-04-0579', 'Metronidazole', 'Metronidazole,500mg.tab', '1040406000-649', '100', '13', '1300', ' ', ' ', ' ', '100', '13', '1300', ' '),
(408, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 324, '2021-04-0579', 'Mebendazole', 'Mebendazole, 500mg.tab', '1040406000-648', '1', '1000', '1000', ' ', ' ', ' ', '1', '1000', '1000', ' '),
(409, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 323, '2021-04-0579', 'Metaclopromide', 'Metaclopromide tablet', '1040406000-647', '1', '1250', '1250', ' ', ' ', ' ', '1', '1250', '1250', ' '),
(410, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 322, '2021-04-0579', 'Bonamine', 'Bonamine tablet', '1040406000-646', '70', '5', '350', ' ', ' ', ' ', '70', '5', '350', ' '),
(411, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 321, '2021-04-0579', 'Phenylephrine', 'Phenylephrine syrup', '1040406000-645', '18', '95', '1710', ' ', ' ', ' ', '18', '95', '1710', ' '),
(412, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 320, '2021-04-0579', 'Celixime', 'Celixime syrup, 30ml. 100/5', '1040406000-644', '2', '180', '360', ' ', ' ', ' ', '2', '180', '360', ' '),
(413, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 319, '2021-04-0579', 'Vitamin C', 'Vitamin C syrup', '1040406000-643', '10', '50', '500', ' ', ' ', ' ', '10', '50', '500', ' '),
(414, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 318, '2021-04-0579', 'Nystatin', 'Nystatin drops', '1040406000-642', '5', '130', '650', ' ', ' ', ' ', '5', '130', '650', ' '),
(415, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 317, '2021-04-0579', 'Oitment', 'Bioderm Oitment, 15g', '1040406000-641', '7', '90', '630', ' ', ' ', ' ', '7', '90', '630', ' '),
(416, 'INSERT', 'Jade  Lustre', 0, ' ', 41, 316, '2021-04-0579', 'Hyoscine', 'Hyoscine, 10mg.tab', '1040406000-783', '10', '9', '90', ' ', ' ', ' ', '10', '9', '90', ' '),
(417, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 345, '2021-06-0186', 'Beef', 'Lean beef/ beef eye round', '1040405000-780', '3', '485', '1455', ' ', ' ', ' ', '3', '485', '1455', ' '),
(418, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 344, '2021-06-0186', 'Pork', 'Ground pork', '1040405000-779', '4', '295', '1180', ' ', ' ', ' ', '4', '295', '1180', ' '),
(419, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 343, '2021-06-0186', 'Chicken', 'Chicken thigh/ breast', '1040405000-778', '46', '195', '8970', ' ', ' ', ' ', '46', '195', '8970', ' '),
(420, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 342, '2021-06-0186', 'Chicken', 'Chicken nuggets', '1040405000-777', '2', '390', '780', ' ', ' ', ' ', '2', '390', '780', ' '),
(421, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 341, '2021-06-0186', 'Pork', 'Pork ribs, special', '1040405000-776', '4', '295', '1180', ' ', ' ', ' ', '4', '295', '1180', ' '),
(422, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 340, '2021-06-0186', 'Pork', 'Pork lean/belly/chop', '1040405000-775', '55', '345', '18975', ' ', ' ', ' ', '55', '345', '18975', ' '),
(423, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 339, '2021-06-0186', 'Milk', 'Al 110 milk, 500g', '1040405000-774', '6', '715', '4290', ' ', ' ', ' ', '6', '715', '4290', ' '),
(424, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 338, '2021-06-0186', 'Milk', 'Nan HW Infini Pro 2 and other milk prescribe', '1040405000-773', '10', '1495', '14950', ' ', ' ', ' ', '10', '1495', '14950', ' '),
(425, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 337, '2021-06-0186', 'Milk', 'Powder milk,1.2g.', '1040405000-772', '20', '490', '9800', ' ', ' ', ' ', '20', '490', '9800', ' '),
(426, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 335, '2021-06-0186', 'Pediasure', 'Pediasure, 1.9kg', '1040405000-771', '10', '2295', '22950', ' ', ' ', ' ', '10', '2295', '22950', ' '),
(427, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 334, '2021-06-0186', 'Infant formula', 'Infant formula 3, 1.3kg./1.6kg', '1040405000-770', '25', '795', '19875', ' ', ' ', ' ', '25', '795', '19875', ' '),
(428, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 333, '2021-06-0186', 'Infant formula', 'Infant formula 2, 1.3kg', '1040405000-769', '18', '595', '10710', ' ', ' ', ' ', '18', '595', '10710', ' '),
(429, 'INSERT', 'Jade  Lustre', 0, ' ', 58, 332, '2021-06-0186', 'Infant formula', 'Infant formula 1, 1.3kg', '1040405000-768', '12', '595', '7140', ' ', ' ', ' ', '12', '595', '7140', ' '),
(430, 'INSERT', 'Jade  Lustre', 0, ' ', 59, 346, '2021-04-0275', 'Walkie talkie', 'Two-way Radio UHT Transceiver walkie talkie with 2 pin earpiece (ICTS/COES)', '1040507000-781', '10', '1490', '14900', ' ', ' ', ' ', '10', '1490', '14900', ' '),
(431, 'INSERT', 'Jade  Lustre', 0, ' ', 60, 351, '21-05-012', 'Dart pin', 'Dart pin, general', '1040512000-767', '8', '200', '1600', ' ', ' ', ' ', '8', '200', '1600', ' '),
(432, 'INSERT', 'Jade  Lustre', 0, ' ', 60, 350, '21-05-012', 'Net', 'Volleyball net', '1040512000-766', '1', '250', '250', ' ', ' ', ' ', '1', '250', '250', ' '),
(433, 'INSERT', 'Jade  Lustre', 0, ' ', 60, 349, '21-05-012', 'Ball', 'Volleyball ball official', '1040512000-765', '3', '800', '2400', ' ', ' ', ' ', '3', '800', '2400', ' '),
(434, 'INSERT', 'Jade  Lustre', 0, ' ', 60, 348, '21-05-012', 'Net', 'Basketball net', '1040512000-764', '4', '144', '576', ' ', ' ', ' ', '4', '144', '576', ' '),
(435, 'INSERT', 'Jade  Lustre', 0, ' ', 60, 347, '21-05-012', 'Ball', 'Basketball ball official', '1040512000-763', '2', '1220', '2440', ' ', ' ', ' ', '2', '1220', '2440', ' '),
(436, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 378, '2021-05-0184', 'Clip', 'Cloth clip', '1040499000-639', '143', '9', '1287', ' ', ' ', ' ', '143', '9', '1287', ' '),
(437, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 377, '2021-05-0184', 'Lotion', 'Off lotion, insect repellant, 100ml', '1040499000-638', '2', '164', '328', ' ', ' ', ' ', '2', '164', '328', ' '),
(438, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 376, '2021-05-0184', 'Air Diffuser', 'Air diffuser, refill', '1040499000-637', '2', '156', '312', ' ', ' ', ' ', '2', '156', '312', ' '),
(439, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 375, '2021-05-0184', 'Air Freshener', 'Air Freshener, 320ml', '1040499000-636', '4', '196', '784', ' ', ' ', ' ', '4', '196', '784', ' '),
(440, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 374, '2021-05-0184', 'Liquid Sosa', 'Liquida sosa, 500ml', '1040499000-635', '4', '84', '336', ' ', ' ', ' ', '4', '84', '336', ' '),
(441, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 373, '2021-05-0184', 'Fabric Conditioner', 'Fabric conditioner, 800ml', '1040499000-634', '10', '133', '1330', ' ', ' ', ' ', '10', '133', '1330', ' '),
(442, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 372, '2021-05-0184', 'Scotch brite', 'Scotch brite, heavy duty', '1040499000-633', '5', '34', '170', ' ', ' ', ' ', '5', '34', '170', ' '),
(443, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 371, '2021-05-0184', 'Soap', 'Detergent bar soap', '1040499000-632', '20', '26', '520', ' ', ' ', ' ', '20', '26', '520', ' '),
(444, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 370, '2021-05-0184', 'Alcohol', 'Alcohol, ethyl, 70% solution, 500ml', '1040407000-631', '60', '88', '5280', ' ', ' ', ' ', '60', '88', '5280', ' '),
(445, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 369, '2021-05-0184', 'Bleach', 'Laundry bleach, 1 gal.', '1040499000-630', '10', '136', '1360', ' ', ' ', ' ', '10', '136', '1360', ' '),
(446, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 368, '2021-05-0184', 'Soap', 'Laundry powder soap, 1000g', '1040499000-629', '25', '106', '2650', ' ', ' ', ' ', '25', '106', '2650', ' '),
(447, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 367, '2021-05-0184', 'Dishwashing paste', 'Dishwashing paste, 400g', '1040499000-628', '17', '42', '714', ' ', ' ', ' ', '17', '42', '714', ' '),
(448, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 365, '2021-05-0184', 'Spray', 'Insect Spray, 500ml, odorless', '1040499000-627', '12', '325', '3900', ' ', ' ', ' ', '12', '325', '3900', ' '),
(449, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 364, '2021-05-0184', 'Cleaner', 'Glass cleaner, 500ml', '1040499000-626', '11', '131', '1441', ' ', ' ', ' ', '11', '131', '1441', ' '),
(450, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 363, '2021-05-0184', 'Cleaner', 'All around cleaner, multipurpose', '1040499000-625', '11', '91', '1001', ' ', ' ', ' ', '11', '91', '1001', ' '),
(451, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 362, '2021-05-0184', 'Diaper', 'Disposable diaper, XXL, 48s', '1040499000-624', '20', '395', '7900', ' ', ' ', ' ', '20', '395', '7900', ' '),
(452, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 361, '2021-05-0184', 'Diaper', 'Disposable diaper, XL, 48s', '1040499000-623', '12', '395', '4740', ' ', ' ', ' ', '12', '395', '4740', ' '),
(453, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 360, '2021-05-0184', 'Diaper', 'Disposable diaper, large, 48s', '1040499000-622', '10', '346', '3460', ' ', ' ', ' ', '10', '346', '3460', ' '),
(454, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 359, '2021-05-0184', 'Diaper', 'Disposable diaper, medium, 60s', '1040499000-621', '8', '361', '2888', ' ', ' ', ' ', '8', '361', '2888', ' '),
(455, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 358, '2021-05-0184', 'Wipes', 'Wipes, 80sheets', '1040499000-620', '4', '86', '344', ' ', ' ', ' ', '4', '86', '344', ' '),
(456, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 357, '2021-05-0184', 'Lotion', 'Baby lotion, 200ml', '1040499000-619', '6', '141', '846', ' ', ' ', ' ', '6', '141', '846', ' '),
(457, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 356, '2021-05-0184', 'Shampoo', 'Shampoo, baby, 100g', '1040499000-618', '8', '86', '688', ' ', ' ', ' ', '8', '86', '688', ' '),
(458, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 355, '2021-05-0184', 'Soap', 'Baby soap, moisturizing, 100g', '1040499000-617', '30', '56', '1680', ' ', ' ', ' ', '30', '56', '1680', ' '),
(459, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 354, '2021-05-0184', 'Shampoo', 'Shampoo, 180ml', '1040499000-616', '10', '133', '1330', ' ', ' ', ' ', '10', '133', '1330', ' '),
(460, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 353, '2021-05-0184', 'Soap', 'Bath Soap, 90g', '1040499000-503', '30', '33', '990', ' ', ' ', ' ', '45', '31.33', '1410', ' '),
(461, 'INSERT', 'Jade  Lustre', 0, ' ', 61, 352, '2021-05-0184', 'Toothpaste', 'Toothpaste, 214gm', '1040499000-615', '10', '136', '1360', ' ', ' ', ' ', '10', '136', '1360', ' '),
(462, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 399, '2021-06-0190', 'Cocoa', 'Cocoa, Bensdorf', '1040405000-762', '1', '401', '401', ' ', ' ', ' ', '1', '401', '401', ' '),
(463, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 398, '2021-06-0190', 'Flour', 'All purpose flour', '1040405000-761', '10', '51', '510', ' ', ' ', ' ', '10', '51', '510', ' '),
(464, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 397, '2021-06-0190', 'Sauce', 'Spaghetti sauce, 1kg.', '1040405000-760', '10', '86', '860', ' ', ' ', ' ', '10', '86', '860', ' '),
(465, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 396, '2021-06-0190', 'Pasta', 'Macaroni pasta, 1kg.', '1040405000-759', '6', '96', '576', ' ', ' ', ' ', '6', '96', '576', ' '),
(466, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 395, '2021-06-0190', 'Pasta', 'Spaghetti pasta, 1kl.', '1040405000-758', '8', '89', '712', ' ', ' ', ' ', '8', '89', '712', ' '),
(467, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 394, '2021-06-0190', 'Pancit Canton', 'Pancit Canton, 1 kilo', '1040405000-757', '5', '116', '580', ' ', ' ', ' ', '5', '116', '580', ' '),
(468, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 393, '2021-06-0190', 'Sotanghon', 'Sotanghon, 1kl.', '1040405000-756', '3', '244', '732', ' ', ' ', ' ', '3', '244', '732', ' '),
(469, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 392, '2021-06-0190', 'Cream', 'All purpose cream, 300ml', '1040405000-755', '6', '75', '450', ' ', ' ', ' ', '6', '75', '450', ' '),
(470, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 391, '2021-06-0190', 'Sugar', 'White sugar,1kg', '1040405000-754', '5', '55', '275', ' ', ' ', ' ', '5', '55', '275', ' '),
(471, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 390, '2021-06-0190', 'Tableya', 'Tableya, general', '1040405000-753', '6', '46', '276', ' ', ' ', ' ', '6', '46', '276', ' '),
(472, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 389, '2021-06-0190', 'Coffee', 'Coffee, 3 in 1, 30g x30', '1040405000-752', '2', '216', '432', ' ', ' ', ' ', '2', '216', '432', ' '),
(473, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 388, '2021-06-0190', 'Mayonnaise', 'Mayonnaise, 1.8liters', '1040405000-751', '2', '376', '752', ' ', ' ', ' ', '2', '376', '752', ' '),
(474, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 387, '2021-06-0190', 'Pineapple', 'Pineapple slice, 822g', '1040405000-750', '3', '90', '270', ' ', ' ', ' ', '3', '90', '270', ' '),
(475, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 386, '2021-06-0190', 'Fruit Cocktail', 'Fruit Cocktail, 3060g', '1040405000-749', '2', '221', '442', ' ', ' ', ' ', '2', '221', '442', ' '),
(476, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 385, '2021-06-0190', 'Peanut butter', 'Peanut butter, 340g', '1040405000-748', '5', '139', '695', ' ', ' ', ' ', '5', '139', '695', ' '),
(477, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 384, '2021-06-0190', 'Canned', 'Sausage, 127g', '1040405000-747', '20', '30', '600', ' ', ' ', ' ', '20', '30', '600', ' '),
(478, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 383, '2021-06-0190', 'Canned', 'Luncheon meat, 360g', '1040405000-746', '20', '81', '1620', ' ', ' ', ' ', '20', '81', '1620', ' '),
(479, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 382, '2021-06-0190', 'Canned', 'Beef loaf, 215g', '1040405000-745', '20', '26', '520', ' ', ' ', ' ', '20', '26', '520', ' '),
(480, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 381, '2021-06-0190', 'Canned', 'Tuna flakes, 155g', '1040405000-744', '20', '35', '700', ' ', ' ', ' ', '20', '35', '700', ' '),
(481, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 380, '2021-06-0190', 'Canned', 'Sardines', '1040405000-743', '20', '16', '320', ' ', ' ', ' ', '20', '16', '320', ' '),
(482, 'INSERT', 'Jade  Lustre', 0, ' ', 56, 379, '2021-06-0190', 'Canned', 'Corned beef, 215', '1040405000-742', '20', '56', '1120', ' ', ' ', ' ', '20', '56', '1120', ' '),
(483, 'INSERT', 'Jade  Lustre', 0, ' ', 1, 1, '2020-10-36', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '200', '200', ' ', ' ', ' ', '1', '200', '200', ' '),
(484, 'INSERT', 'Jade  Lustre', 0, ' ', 1, 1, '2020-10-36', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '8', '200', '1600', ' ', ' ', ' ', '9', '200', '1800', ' '),
(485, 'INSERT', 'Jade  Lustre', 0, ' ', 1, 1, '2020-10-36', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '200', '200', ' ', ' ', ' ', '10', '200', '2000', ' '),
(486, 'INSERT', 'Jade  Lustre', 0, ' ', 1, 1, '2021-10-0823', 'Alcohol', 'Alcohol, ethyl, 70% solution, 500ml', '1040407000-631', '10', '250', '2500', ' ', ' ', ' ', '10', '250', '2500', ' '),
(487, 'INSERT', 'Jade  Lustre', 0, ' ', 2, 2, '2021-10-0445', 'Alcohol', 'Alcohol, ethyl, 70% solution, 500ml', '1040407000-631', '10', '300', '3000', ' ', ' ', ' ', '15', '283.33', '4250', ' '),
(488, 'INSERT', 'Jade  Lustre', 0, ' ', 3, 3, '2021-10-0366', 'Alcohol', 'Alcohol, ethyl, 70% solution, 500ml', '1040407000-631', '30', '200', '6000', ' ', ' ', ' ', '31', '202.68', '6283.33', ' '),
(489, 'INSERT', 'Jade  Lustre', 0, ' ', 6, 5, '2020-36-232323', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', ' '),
(490, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 6, 5, '2020-36-232323', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', 'test'),
(491, 'UPDATE', 'Jade  Lustre', 12, 'Jade', 6, 5, '2020-36-232323', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', 'testing'),
(492, 'DELETION', 'Jade  Lustre', 12, 'Jade', 6, 5, '2020-36-232323', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '1', '2000', '2000', ' ', ' ', ' ', '1', '2000', '2000', 'test'),
(493, 'INSERT', 'Jade  Lustre', 0, ' ', 7, 6, '201212', 'Sign pen', 'SIGN PEN, BLACK, liquid/gel ink, 0.5mm needle tip', '1040401000-233', '50', '100', '5000', ' ', ' ', ' ', '50', '100', '5000', ' '),
(494, 'INSERT', 'Jade  Lustre', 0, ' ', 8, 7, '1010-10-11010', 'Book', 'CLEARBOOK, 20 transparent pockets, for LEGAL size', '1040401000-231', '100', '50', '5000', ' ', ' ', ' ', '100', '50', '5000', ' '),
(495, 'INSERT', 'Jade  Lustre', 0, ' ', 8, 8, '1010-10-11010', 'Electric Fan', 'ELECTRIC FAN, INDUSTRIAL, ground type, metal blade', '1040502000-299', '1', '3000', '3000', ' ', ' ', ' ', '1', '3000', '3000', ' '),
(496, 'INSERT', 'Jade  Lustre', 0, ' ', 8, 9, '1010-10-11010', 'Chair', 'Executive Chair', '1040601000-782', '2', '1000', '2000', ' ', ' ', ' ', '2', '1000', '2000', ' '),
(497, 'INSERT', 'Jade  Lustre', 0, ' ', 8, 10, '1010-10-11010', 'Sign pen', 'SIGN PEN, RED, liquid/gel ink, 0.5mm needle tip', '1040401000-235', '40', '50', '2000', ' ', ' ', ' ', '40', '50', '2000', ' '),
(498, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 1, 1, '2021-10-06666', 'Ink', 'Epson Ink, 4 colors (not refill)', '5020201002-712', '10', '500', '5000', ' ', ' ', ' ', '10', '500', '5000', ' '),
(499, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 11, '2021-10-1058', 'STICKY NOTE', 'STICKY NOTE ROLL, MATERIAL: PAPER + PLASTIC ROLL DESIGN PAPER LENGTH:8M/314.95\"(APPROX)', '1040401000-794', '22', '50', '1100', ' ', ' ', ' ', '22', '50', '1100', ' '),
(500, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 10, '2021-10-1058', 'TAPE', 'MASKING TAPE 2-INCH DIAMETER', '1040401000-793', '2', '70', '140', ' ', ' ', ' ', '2', '70', '140', ' '),
(501, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 9, '2021-10-1058', 'MANILA PAPER', 'MANILA PAPER, GENERAL', '1040401000-792', '20', '10', '200', ' ', ' ', ' ', '20', '10', '200', ' '),
(502, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 8, '2021-10-1058', 'NOTEBOOK', 'HIGH QUALITY NOTEBOOK', '1040401000-791', '25', '30', '750', ' ', ' ', ' ', '25', '30', '750', ' '),
(503, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 7, '2021-10-1058', 'METACARDS', 'METACARDS, GENERAL', '1040401000-790', '4', '50', '200', ' ', ' ', ' ', '4', '50', '200', ' '),
(504, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 6, '2021-10-1058', 'BOARD PEN', 'HIGH QUALITY PENTEL BOARD PEN / BOX', '1040401000-789', '1', '500', '500', ' ', ' ', ' ', '1', '500', '500', ' '),
(505, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 5, '2021-10-1058', 'SIGN PEN', 'HIGH QUALITY BLACK SIGN PEN .7MM / BOX', '1040401000-788', '2', '400', '800', ' ', ' ', ' ', '2', '400', '800', ' '),
(506, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 4, '2021-10-1058', 'ENVELOPE', 'BROWN ENVELOPE', '1040401000-787', '25', '3', '75', ' ', ' ', ' ', '25', '3', '75', ' '),
(507, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 3, '2021-10-1058', 'SPECIAL PAPER', 'SCENTED SPECIAL PAPER WHITE 90 GSM / PACK', '1040401000-786', '10', '200', '2000', ' ', ' ', ' ', '10', '200', '2000', ' '),
(508, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 2, 2, '2021-10-1058', 'Certificate holder', 'Certificate holder', '1040401000-785', '25', '100', '2500', ' ', ' ', ' ', '25', '100', '2500', ' '),
(509, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 3, 14, '2021-10-1033', 'FACE MASK', 'FACE MASK / BOX', '1040407000-797', '50', '150', '7500', ' ', ' ', ' ', '50', '150', '7500', ' '),
(510, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 3, 13, '2021-10-1033', 'ALCOHOL', 'ISOPROPYL ALCOHOL(1 LITER)', '1040407000-796', '40', '184', '7360', ' ', ' ', ' ', '40', '184', '7360', ' '),
(511, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 3, 12, '2021-10-1033', 'ALCOHOL', 'ISOPROPYL ALCOHOL(350ML)', '1040407000-795', '1600', '78', '124800', ' ', ' ', ' ', '1600', '78', '124800', ' '),
(512, 'INSERT', 'Jade  Lustre', 0, ' ', 4, 15, 'FOR REQUEST', 'Bond Paper', 'PAPER, Multi-Purpose (COPY) Legal, 70 gsm', '1040401000-18', '3', '500', '1500', ' ', ' ', ' ', '3', '500', '1500', ' '),
(513, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 25, 'FOR REQUEST PANTAWID', 'FOLDER', 'BROWN FOLDER', '1040401000-802', '100', '9', '900', ' ', ' ', ' ', '100', '9', '900', ' '),
(514, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 24, 'FOR REQUEST PANTAWID', 'FOLDER', 'FOLDER (PINK)', '1040401000-801', '100', '10', '1000', ' ', ' ', ' ', '100', '10', '1000', ' '),
(515, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 23, 'FOR REQUEST PANTAWID', 'Ink', 'INK CART, CANON PG-810, COLORED', '1040401000-800', '20', '1405', '28100', ' ', ' ', ' ', '20', '1405', '28100', ' '),
(516, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 22, 'FOR REQUEST PANTAWID', 'Ink', 'INK CART, CANON PG-810, Black', '1040401000-99', '20', '1045', '20900', ' ', ' ', ' ', '20', '1045', '20900', ' '),
(517, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 21, 'FOR REQUEST PANTAWID', 'SCISSOR', 'SCISSOR, GENERAL', '1040401000-799', '3', '17.55', '52.650000000000006', ' ', ' ', ' ', '3', '17.55', '52.650000000000006', ' '),
(518, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 20, 'FOR REQUEST PANTAWID', 'Puncher', 'PUNCHER, paper, heavy duty, with two hole guide', '1040401000-76', '1', '141.1', '141.1', ' ', ' ', ' ', '1', '141.1', '141.1', ' '),
(519, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 19, 'FOR REQUEST PANTAWID', 'SIGN PEN', 'SIGN PEN, GENERAL /BOX', '1040401000-803', '3', '213.3', '639.9000000000001', ' ', ' ', ' ', '3', '213.30', '639.9000000000001', ' '),
(520, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 18, 'FOR REQUEST PANTAWID', 'USB', 'FLASH DRIVE, 16 GB capacity', '1040401000-28', '2', '282.75', '565.5', ' ', ' ', ' ', '2', '282.75', '565.5', ' '),
(521, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 17, 'FOR REQUEST PANTAWID', 'Staple wire', 'STAPLE WIRE, for heavy duty staplers, (23/13)', '1040401000-25', '2', '42.75', '85.5', ' ', ' ', ' ', '2', '42.75', '85.5', ' '),
(522, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 16, 'FOR REQUEST PANTAWID', 'Stapler', 'STAPLER, BINDER TYPE, heavy duty, desktop', '1040401000-79', '3', '343', '1029', ' ', ' ', ' ', '3', '343', '1029', ' '),
(523, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 5, 26, 'FOR REQUEST PANTAWID', 'Bond Paper', 'Bond paper , A4', '1040401000-336', '1', '280', '280', ' ', ' ', ' ', '1', '280', '280', ' '),
(524, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 6, 29, 'Request pantawid', 'Ink', '003 black epson', '1040401000-804', '4', '345', '1380', ' ', ' ', ' ', '4', '345', '1380', ' '),
(525, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 6, 28, 'Request pantawid', 'Correction tape', 'Correction tape, general', '1040401000-716', '2', '31.5', '63', ' ', ' ', ' ', '2', '31.5', '63', ' '),
(526, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 6, 27, 'Request pantawid', 'Fastener', 'FASTENER, METAL, 70mm between prongs', '1040401000-56', '3', '28', '84', ' ', ' ', ' ', '3', '28', '84', ' '),
(527, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 6, 30, 'Request pantawid', 'Logbook', 'Logbook, general', '1040401000-805', '2', '80', '160', ' ', ' ', ' ', '2', '80', '160', ' '),
(528, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 6, 31, 'Request pantawid', 'Cutter', 'CUTTER KNIFE, for general purpose', '1040401000-74', '2', '29', '58', ' ', ' ', ' ', '2', '29', '58', ' '),
(529, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 7, 33, 'testing', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '10', '100', '1000', ' ', ' ', ' ', '10', '100', '1000', ' '),
(530, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 7, 34, 'testing', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '10', '100', '1000', ' ', ' ', ' ', '20', '100', '2000', ' '),
(531, 'DELETION', 'Jade  Lustre', 12, 'Jade', 7, 34, 'testing', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '10', '100', '1000', ' ', ' ', ' ', '10', '100', '1000', 'test'),
(532, 'DELETION', 'Jade  Lustre', 12, 'Jade', 7, 33, 'testing', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '10', '100', '1000', ' ', ' ', ' ', '10', '100', '1000', 'test'),
(533, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 7, 34, 'testing', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '10', '100', '1000', ' ', ' ', ' ', '10', '100', '1000', ' '),
(534, 'DELETION', 'Jade  Lustre', 12, 'Jade', 7, 34, 'testing', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '10', '100', '1000', ' ', ' ', ' ', '10', '100', '1000', 'test'),
(535, 'INSERT', 'Jade  Lustre', 0, ' ', 7, 34, 'testing', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', '10', '100', '1000', ' ', ' ', ' ', '10', '100', '1000', ' '),
(536, 'DELETION OF ISSUANCE', 'Jade  Lustre', 12, 'Jade', 7, 34, ' ', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '1040401000-1', ' ', ' ', ' ', '5', '100', '500', ' ', '100', ' ', 'test'),
(537, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 8, 35, '2021-140-121211', 'Cartolina', 'CARTOLINA, assorted colors', '1040401000-3', '50', '10', '500', ' ', ' ', ' ', '50', '10', '500', ' '),
(538, 'DELETION OF ISSUANCE', 'Jade  Lustre', 12, 'Jade', 3, 12, ' ', 'ALCOHOL', 'ISOPROPYL ALCOHOL(350ML)', '1040407000-795', ' ', ' ', ' ', '100', '78', '7800', '-99', '78', '70200', 'test'),
(539, 'DELETION OF ISSUANCE', 'Jade  Lustre', 12, 'Jade', 3, 12, ' ', 'ALCOHOL', 'ISOPROPYL ALCOHOL(350ML)', '1040407000-795', ' ', ' ', ' ', '160', '78', '12480', '630', '78', '49140', 'test'),
(540, 'DELETION OF ISSUANCE', 'Jade  Lustre', 12, 'Jade', 3, 12, ' ', 'ALCOHOL', 'ISOPROPYL ALCOHOL(350ML)', '1040407000-795', ' ', ' ', ' ', '150', '78', '11700', '800', '78', '62400', 'testing'),
(541, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 9, 43, '2021-12-1252', 'Ink', 'Epson ink 003 refill', '5020201002-812', '5', '455', '2275', ' ', ' ', ' ', '5', '455', '2275', ' '),
(542, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 9, 42, '2021-12-1252', 'Tape', 'Correction tape', '5020201002-811', '2', '22', '44', ' ', ' ', ' ', '2', '22', '44', ' '),
(543, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 9, 41, '2021-12-1252', 'Envelope', 'Brown Expanded envelope', '5020201002-810', '57', '30', '1710', ' ', ' ', ' ', '57', '30', '1710', ' ');
INSERT INTO `tblslcactivitylogs` (`activity_id`, `activity`, `deleted_by`, `delete_id`, `delete_username`, `pohdr_idlink`, `podtl_idlink`, `po_num`, `item_name`, `item_description`, `item_code`, `qty_rec`, `unit_rec`, `totalcost_rec`, `qty_issue`, `unitcost_issue`, `totalcost_issue`, `qty_bal`, `unitcost_bal`, `totalcost_bal`, `reason`) VALUES
(544, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 9, 40, '2021-12-1252', 'Envelope', 'Plastic envelope with handle', '5020201002-809', '57', '65', '3705', ' ', ' ', ' ', '57', '65', '3705', ' '),
(545, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 9, 39, '2021-12-1252', 'Ballpen', 'Good quality black ballpen', '5020201002-808', '57', '12', '684', ' ', ' ', ' ', '57', '12', '684', ' '),
(546, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 9, 38, '2021-12-1252', 'Notebook', '50 leaves notebook', '5020201002-807', '57', '22', '1254', ' ', ' ', ' ', '57', '22', '1254', ' '),
(547, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 9, 37, '2021-12-1252', 'Bond Paper', 'Long Bond Paper', '5020201002-806', '15', '216', '3240', ' ', ' ', ' ', '15', '216', '3240', ' '),
(548, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 9, 36, '2021-12-1252', 'Bond paper', 'Bond paper, A4', '5020201002-696', '15', '206', '3090', ' ', ' ', ' ', '15', '206', '3090', ' '),
(549, 'INSERT', 'Jade  Lustre', 0, ' ', 10, 44, 'request for pantawid 2/3/2022', 'Filer', 'Filer jumbo with cover', '1040401000-813', '80', '500', '40000', ' ', ' ', ' ', '80', '500', '40000', ' '),
(550, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 49, 'ORD request 2021-09-0393', 'Bond paper', 'Bond paper long', '1040401000-823', '2', '1167.39', '2334.78', ' ', ' ', ' ', '2', '1167.39', '2334.78', ' '),
(551, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 50, 'ORD request 2021-09-0393', 'Puncher', 'PUNCHER, paper, heavy duty, with two hole guide', '1040401000-76', '1', '141.1', '141.1', ' ', ' ', ' ', '2', '141.1', '282.2', ' '),
(552, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 48, 'ORD request 2021-09-0393', 'STICKY NOTE', 'STICKY NOTE ROLL, MATERIAL: PAPER + PLASTIC ROLL DESIGN PAPER LENGTH:8M/314.95\"(APPROX)', '1040401000-794', '15', '50', '750', ' ', ' ', ' ', '37', '50', '1850', ' '),
(553, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 47, 'ORD request 2021-09-0393', 'Sign pen', 'SIGN PEN, BLACK, liquid/gel ink, 0.5mm needle tip', '1040401000-233', '2', '230', '460', ' ', ' ', ' ', '2', '230', '460', ' '),
(554, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 46, 'ORD request 2021-09-0393', 'Sign pen', 'SIGN PEN, BLUE, liquid/gel ink, 0.5mm needle tip', '1040401000-234', '2', '230', '460', ' ', ' ', ' ', '2', '230', '460', ' '),
(555, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 11, 45, 'ORD request 2021-09-0393', 'Sign pen', 'SIGN PEN, RED, liquid/gel ink, 0.5mm needle tip', '1040401000-235', '2', '230', '460', ' ', ' ', ' ', '2', '230', '460', ' '),
(556, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 56, 'SOCTECH request', 'Polo shirt', 'Yakap Bayan', '5029901000-830', '24', '400', '9600', ' ', ' ', ' ', '24', '400', '9600', ' '),
(557, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 55, 'SOCTECH request', 'Polo Shirt', 'Polo Shirt Advocacy Materials Pangantucan Buk', '5029901000-827', '43', '400', '17200', ' ', ' ', ' ', '43', '400', '17200', ' '),
(558, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 54, 'SOCTECH request', 'Polo Shirt', 'Polo Shirt Advocacy materials', '5029901000-825', '10', '400', '4000', ' ', ' ', ' ', '10', '400', '4000', ' '),
(559, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 53, 'SOCTECH request', 'Printer', 'Epson Printer (Eco tank L3250)', '1040503000-824', '2', '10696', '21392', ' ', ' ', ' ', '2', '10696', '21392', ' '),
(560, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 52, 'SOCTECH request', 'Alcohol', 'Hand Sanitizer Alcohol', '1040407000-829', '10', '340', '3400', ' ', ' ', ' ', '10', '340', '3400', ' '),
(561, 'INSERT', 'Jade  Lustre', 0, ' ', 12, 51, 'SOCTECH request', 'Scanner', 'Portable Scanner', '1040503000-828', '1', '12000', '12000', ' ', ' ', ' ', '1', '12000', '12000', ' '),
(562, 'INSERT', 'Jade  Lustre', 0, ' ', 16, 57, '2021-11-1130', 'Keppra', 'Solution', '1040406000-831', '2', '2124', '4248', ' ', ' ', ' ', '2', '2124', '4248', ' '),
(563, 'INSERT', 'Jade  Lustre', 0, ' ', 16, 57, '2021-11-1130', 'Keppra', 'Solution', '1040406000-831', '3', '2124', '6372', ' ', ' ', ' ', '5', '2124', '10620', ' '),
(564, 'INSERT', 'Jade  Lustre', 0, ' ', 23, 60, '2021-12-10101', 'Keppra', 'Solution', '1040406000-831', '4', '2124', '8496', ' ', ' ', ' ', '5', '2124', '10620', ' '),
(565, 'INSERT', 'Aaron  Parcon', 0, ' ', 25, 61, '2020-15-1478', 'Bond Paper', 'Bond paper , A4', '1040401000-336', '5', '280', '1400', ' ', ' ', ' ', '6', '280', '1680', ' '),
(566, 'INSERT', 'Aaron  Parcon', 0, ' ', 25, 61, '2020-15-1478', 'Bond Paper', 'Bond paper , A4', '1040401000-336', '5', '280', '1400', ' ', ' ', ' ', '11', '280', '3080', ' '),
(567, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 62, '2021-11-1128', 'Lexdin', 'Lexdin 10mgs', '1040406000-832', '50', '16.75', '837.5', ' ', ' ', ' ', '50', '16.75', '837.5', ' '),
(568, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 63, '2021-11-1128', 'Responz', '10mgs', '1040406000-833', ' ', '39.25', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '),
(569, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 63, '2021-11-1128', 'Responz', '10mgs', '1040406000-833', '80', '39.25', '3140', ' ', ' ', ' ', '80', '39.25', '3140', ' '),
(570, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 64, '2021-11-1128', 'Baclofen', '10mgs', '1040406000-834', '80', '26.5', '2120', ' ', ' ', ' ', '80', '26.5', '2120', ' '),
(571, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 65, '2021-11-1128', 'Phenobarbital', '30mgs', '1040406000-835', '8', '305', '2440', ' ', ' ', ' ', '8', '305', '2440', ' '),
(572, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 66, '2021-11-1128', 'Phenobarbital', '90mgs', '1040406000-836', '2', '535', '1070', ' ', ' ', ' ', '2', '535', '1070', ' '),
(573, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 67, '2021-11-1128', 'Valpros', '500mgs', '1040406000-837', '80', '26.75', '2140', ' ', ' ', ' ', '80', '26.75', '2140', ' '),
(574, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 68, '2021-11-1128', 'Valpros', 'Syrup', '1040406000-838', '10', '276.5', '2765', ' ', ' ', ' ', '10', '276.5', '2765', ' '),
(575, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 69, '2021-11-1128', 'Omegabloc', 'Omegabloc ,general', '1040406000-839', '8', '360', '2880', ' ', ' ', ' ', '8', '360', '2880', ' '),
(576, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 70, '2021-11-1128', 'Paracetamol', 'Tempra syrup (120ml)', '1040406000-840', '10', '159.5', '1595', ' ', ' ', ' ', '10', '159.5', '1595', ' '),
(577, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 71, '2021-11-1128', 'Hydrite', 'Granules', '1040406000-841', '1', '1575', '1575', ' ', ' ', ' ', '1', '1575', '1575', ' '),
(578, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 72, '2021-11-1128', 'Hydrasec', 'Granules', '1040406000-842', '50', '55', '2750', ' ', ' ', ' ', '50', '55', '2750', ' '),
(579, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 73, '2021-11-1128', 'Phenylephrine', 'syrup,drops', '1040406000-843', '12', '113', '1356', ' ', ' ', ' ', '12', '113', '1356', ' '),
(580, 'INSERT', 'Roy  Ortizo', 0, ' ', 17, 74, '2021-11-1128', 'Terramycin', 'Opthatmic drop', '1040406000-844', '2', '689', '1378', ' ', ' ', ' ', '2', '689', '1378', ' '),
(581, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 30, 79, 'SOCTECH REQUEST 1', 'Chair', 'Shivel', '1040601000-850', '3', '7000', '21000', ' ', ' ', ' ', '3', '7000', '21000', ' '),
(582, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 30, 78, 'SOCTECH REQUEST 1', 'Cabinet', 'Mobile cabinet', '1040601000-849', '3', '4000', '12000', ' ', ' ', ' ', '3', '4000', '12000', ' '),
(583, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 30, 77, 'SOCTECH REQUEST 1', 'Printer', 'Printer wifi all in one tank printer', '1040503000-851', '3', '14500', '43500', ' ', ' ', ' ', '3', '14500', '43500', ' '),
(584, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 30, 76, 'SOCTECH REQUEST 1', 'Planner', 'Social technology planner', '5029901000-852', '83', '600', '49800', ' ', ' ', ' ', '83', '600', '49800', ' '),
(585, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 85, 'REQUEST PANTAWID 2', 'TAPE', 'MASKING TAPE 2-INCH DIAMETER', '1040401000-793', '5', '80', '400', ' ', ' ', ' ', '7', '77.14', '540', ' '),
(586, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 99, 'REQUEST PANTAWID 2', 'Tape', 'Scotch tape', '1040401000-864', '3', '75', '225', ' ', ' ', ' ', '3', '75', '225', ' '),
(587, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 94, 'REQUEST PANTAWID 2', 'HP 680', 'HP 680 colored', '1040401000-860', '20', '600', '12000', ' ', ' ', ' ', '20', '600', '12000', ' '),
(588, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 93, 'REQUEST PANTAWID 2', 'HP 680', 'Black', '1040401000-859', '20', '600', '12000', ' ', ' ', ' ', '20', '600', '12000', ' '),
(589, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 98, 'REQUEST PANTAWID 2', 'Tape', 'Tape packaging', '1040401000-863', '4', '58', '232', ' ', ' ', ' ', '4', '58', '232', ' '),
(590, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 80, 'REQUEST PANTAWID 2', 'STAMP PAD', 'STAMP PAD, GENERAL', '1040401000-854', '3', '52.8', '158.39999999999998', ' ', ' ', ' ', '3', '52.79', '158.39999999999998', ' '),
(591, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 87, 'REQUEST PANTAWID 2', 'Scissor', 'SCISSORS, symmetrical, blade length: 65mm min', '1040401000-77', '10', '45', '450', ' ', ' ', ' ', '10', '45', '450', ' '),
(592, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 97, 'REQUEST PANTAWID 2', 'Staple wire', 'STAPLE WIRE, STANDARD, (26/6)', '1040401000-26', '5', '42', '210', ' ', ' ', ' ', '5', '42', '210', ' '),
(593, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 95, 'REQUEST PANTAWID 2', 'Pentel pen', 'Pentel pen', '1040401000-861', '2', '38', '76', ' ', ' ', ' ', '2', '38', '76', ' '),
(594, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 103, 'REQUEST PANTAWID 2', 'INK 664', 'INK 664 yellow', '1040401000-868', '4', '350', '1400', ' ', ' ', ' ', '4', '350', '1400', ' '),
(595, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 102, 'REQUEST PANTAWID 2', 'INK 664', 'INK 664 magenta', '1040401000-867', '4', '350', '1400', ' ', ' ', ' ', '4', '350', '1400', ' '),
(596, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 101, 'REQUEST PANTAWID 2', 'INK 664', 'INK 664 Cyan', '1040401000-866', '4', '350', '1400', ' ', ' ', ' ', '4', '350', '1400', ' '),
(597, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 100, 'REQUEST PANTAWID 2', 'INK 664', 'Black', '1040401000-865', '4', '350', '1400', ' ', ' ', ' ', '4', '350', '1400', ' '),
(598, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 92, 'REQUEST PANTAWID 2', 'INK 003', 'INK 003 Magenta', '1040401000-855', '20', '350', '7000', ' ', ' ', ' ', '20', '350', '7000', ' '),
(599, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 91, 'REQUEST PANTAWID 2', 'INK 003', 'Yellow', '1040401000-856', '20', '350', '7000', ' ', ' ', ' ', '20', '350', '7000', ' '),
(600, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 90, 'REQUEST PANTAWID 2', 'INK 003', 'Cyan', '1040401000-857', '20', '350', '7000', ' ', ' ', ' ', '20', '350', '7000', ' '),
(601, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 89, 'REQUEST PANTAWID 2', 'INK 003', 'Black', '1040401000-858', '20', '350', '7000', ' ', ' ', ' ', '20', '350', '7000', ' '),
(602, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 81, 'REQUEST PANTAWID 2', 'SIGN PEN', 'SIGN PEN, GENERAL /BOX', '1040401000-803', '7', '330', '2310', ' ', ' ', ' ', '10', '294.99', '2949.9', ' '),
(603, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 96, 'REQUEST PANTAWID 2', 'Correction tape', 'Correction tape, general', '1040401000-716', '20', '31.5', '630', ' ', ' ', ' ', '22', '31.5', '693', ' '),
(604, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 84, 'REQUEST PANTAWID 2', 'Fastener', 'FASTENER, METAL, 70mm between prongs', '1040401000-56', '3', '28', '84', ' ', ' ', ' ', '6', '28', '168', ' '),
(605, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 88, 'REQUEST PANTAWID 2', 'Ruler', 'RULER, plastic, 450mm (18\"), width: 38mm min', '1040401000-27', '3', '25', '75', ' ', ' ', ' ', '3', '25', '75', ' '),
(606, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 86, 'REQUEST PANTAWID 2', 'Stapler', 'STAPLER, STANDARD TYPE, load cap: 200 staples min', '1040401000-78', '5', '203.5', '1017.5', ' ', ' ', ' ', '5', '203.5', '1017.5', ' '),
(607, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 104, 'REQUEST PANTAWID 2', 'Tissue', 'Tissue, general', '1040499000-869', '45', '15', '675', ' ', ' ', ' ', '45', '15', '675', ' '),
(608, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 83, 'REQUEST PANTAWID 2', 'Bond paper', 'Bond paper, legal (Box)', '1040401000-871', '10', '1200', '12000', ' ', ' ', ' ', '10', '1200', '12000', ' '),
(609, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 82, 'REQUEST PANTAWID 2', 'Bond paper', 'Bond paper, A4 (Box)', '1040401000-870', '10', '1200', '12000', ' ', ' ', ' ', '10', '1200', '12000', ' '),
(610, 'DELETION', 'Kurt T. Tiempo', 4, 'schema', 31, 104, 'REQUEST PANTAWID 2', 'Tissue', 'Tissue, general', '1040499000-869', '45', '15', '675', ' ', ' ', ' ', '45', '15', '675', 'test'),
(611, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 31, 105, 'REQUEST PANTAWID 2', 'Tissue', 'Tissue, general', '1040401000-872', '45', '15', '675', ' ', ' ', ' ', '45', '15', '675', ' '),
(612, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 116, '2021-12-1358', 'Roller Tray', 'Paint roller tray', '5020399000-883', '2', '75', '150', ' ', ' ', ' ', '2', '75', '150', ' '),
(613, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 115, '2021-12-1358', 'Roller', 'Baby Roller', '5020399000-882', '2', '110', '220', ' ', ' ', ' ', '2', '110', '220', ' '),
(614, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 114, '2021-12-1358', 'Sandpaper', 'Sandpaper NO.120', '5020399000-881', '3', '30', '90', ' ', ' ', ' ', '3', '30', '90', ' '),
(615, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 113, '2021-12-1358', 'Thinner', 'Paint Thinner', '5020399000-880', '4', '58', '232', ' ', ' ', ' ', '4', '58', '232', ' '),
(616, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 112, '2021-12-1358', 'Brush', 'Paint brush', '5020399000-879', '3', '100', '300', ' ', ' ', ' ', '3', '100', '300', ' '),
(617, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 111, '2021-12-1358', 'Enamel', 'Gloss enamel - ready mixed mint green', '5020399000-878', '4', '980', '3920', ' ', ' ', ' ', '4', '980', '3920', ' '),
(618, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 110, '2021-12-1358', 'Enamel', 'Flat wall white enamel', '5020399000-877', '3', '665', '1995', ' ', ' ', ' ', '3', '665', '1995', ' '),
(619, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 109, '2021-12-1358', 'Nails', 'Finishing nails NO.1 1/2', '5020399000-876', '3', '145', '435', ' ', ' ', ' ', '3', '145', '435', ' '),
(620, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 108, '2021-12-1358', 'Nails', 'Finishing nails NO.2', '5020399000-875', '3', '145', '435', ' ', ' ', ' ', '3', '145', '435', ' '),
(621, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 107, '2021-12-1358', 'Hinges', 'Hydraulic Hinges', '5020399000-874', '46', '120', '5520', ' ', ' ', ' ', '46', '120', '5520', ' '),
(622, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 32, 106, '2021-12-1358', 'Plywood', 'Marine plywood (PLIGO)', '5020399000-873', '14', '800', '11200', ' ', ' ', ' ', '14', '800', '11200', ' '),
(623, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 33, 119, '2021-11-1244', 'Chair', 'Office chair', '1040601000-886', '20', '4250', '85000', ' ', ' ', ' ', '20', '4250', '85000', ' '),
(624, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 33, 118, '2021-11-1244', 'Cabinet', 'Steel Cabinet', '1040601000-690', '1', '6000', '6000', ' ', ' ', ' ', '1', '6000', '6000', ' '),
(625, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 33, 117, '2021-11-1244', 'Table', 'Coffee table set', '1040601000-884', '1', '5000', '5000', ' ', ' ', ' ', '1', '5000', '5000', ' '),
(626, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 34, 120, '2021-12-1318', 'Vest', 'DSWD RED VEST', '5029901000-887', '137', '1450', '198650', ' ', ' ', ' ', '137', '1450', '198650', ' '),
(627, 'INSERT', 'Jade  Lustre', 0, ' ', 35, 121, '2021-10-2020', 'Vitamin C', 'Berroca tablet', '1040407000-888', '10', '350', '3500', ' ', ' ', ' ', '10', '350', '3500', ' '),
(628, 'DELETION', 'Jade  Lustre', 12, 'Jade', 35, 121, '2021-10-2020', 'Vitamin C', 'Berroca tablet', '1040407000-888', '10', '350', '3500', ' ', ' ', ' ', '10', '350', '3500', 'Test'),
(629, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 35, 122, '2021-10-2020', 'Vitamin C', 'Berroca tablet', '1040407000-888', '15', '333.33', '4999.95', ' ', ' ', ' ', '15', '333.33', '4999.95', ' '),
(630, 'INSERT', 'Kurt T. Tiempo', 0, ' ', 36, 123, 'Pantawid request', 'Toner', 'Toner Cartridge, HP CF283A (HP83A) LaserJet Black', '1040401000-191', '5', '2950', '14750', ' ', ' ', ' ', '5', '2950', '14750', ' '),
(631, 'DELETION', 'Jade  Lustre', 12, 'Jade', 35, 122, '2021-10-2020', 'Vitamin C', 'Berroca tablet', '1040407000-888', '15', '333.33', '4999.95', ' ', ' ', ' ', '15', '333.33', '4999.95', 'Test');

-- --------------------------------------------------------

--
-- Table structure for table `tblslccenters`
--

CREATE TABLE `tblslccenters` (
  `slc_id` bigint(20) NOT NULL,
  `stock_no` varchar(2000) NOT NULL,
  `pohdr_idlink` bigint(20) NOT NULL,
  `podtl_idlink` bigint(20) NOT NULL,
  `po_num` varchar(500) NOT NULL,
  `fund_idlink` bigint(20) NOT NULL,
  `fund_name` varchar(500) NOT NULL,
  `fund_code` varchar(500) NOT NULL,
  `item_name` varchar(5000) NOT NULL,
  `item_description` varchar(5000) NOT NULL,
  `unit_idlink` bigint(20) NOT NULL,
  `unit_name` varchar(500) NOT NULL,
  `item_code` varchar(500) NOT NULL,
  `reorder_point` varchar(500) NOT NULL,
  `ris` varchar(500) NOT NULL,
  `jev` varchar(500) NOT NULL,
  `qty_rec` double NOT NULL,
  `unit_rec` double NOT NULL,
  `totalcost_rec` double NOT NULL,
  `qty_issue` double NOT NULL,
  `unitcost_issue` double NOT NULL,
  `totalcost_issue` double NOT NULL,
  `qty_bal` double NOT NULL,
  `unitcost_bal` double NOT NULL,
  `totalcost_bal` double NOT NULL,
  `daysto_consume` varchar(500) NOT NULL,
  `trans_date` date NOT NULL,
  `delivery` varchar(1000) NOT NULL,
  `office` varchar(500) NOT NULL,
  `office_code` varchar(500) NOT NULL,
  `office_idlink` bigint(20) NOT NULL,
  `division_unit` varchar(2000) NOT NULL,
  `cancellation_status` varchar(1000) NOT NULL,
  `cancellation_reason` varchar(1000) NOT NULL,
  `canceled_by` varchar(500) NOT NULL,
  `batch_idlink` bigint(20) NOT NULL,
  `batch_no` varchar(1000) NOT NULL,
  `center_idlink` bigint(20) NOT NULL,
  `center_name` varchar(1500) NOT NULL,
  `remarks` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblslccenters`
--

INSERT INTO `tblslccenters` (`slc_id`, `stock_no`, `pohdr_idlink`, `podtl_idlink`, `po_num`, `fund_idlink`, `fund_name`, `fund_code`, `item_name`, `item_description`, `unit_idlink`, `unit_name`, `item_code`, `reorder_point`, `ris`, `jev`, `qty_rec`, `unit_rec`, `totalcost_rec`, `qty_issue`, `unitcost_issue`, `totalcost_issue`, `qty_bal`, `unitcost_bal`, `totalcost_bal`, `daysto_consume`, `trans_date`, `delivery`, `office`, `office_code`, `office_idlink`, `division_unit`, `cancellation_status`, `cancellation_reason`, `canceled_by`, `batch_idlink`, `batch_no`, `center_idlink`, `center_name`, `remarks`) VALUES
(1, '', 1, 1, '2021-10-06666', 3, 'Regular Agency Fund', '01', 'Ink', 'Epson Ink, 4 colors (not refill)', 12, 'pcs', '5020201002-712', ' ', ' ', ' ', 10, 500, 5000, 0, 0, 0, 10, 500, 5000, ' ', '2021-12-17', '1st', 'Training Expenses', ' ', 23, 'HAVEN', '', '', '', 0, '', 3, 'HAVEN', ''),
(2, '', 2, 11, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'STICKY NOTE', 'STICKY NOTE ROLL, MATERIAL: PAPER + PLASTIC ROLL DESIGN PAPER LENGTH:8M/314.95\"(APPROX)', 10, 'roll', '1040401000-794', ' ', ' ', ' ', 22, 50, 1100, 0, 0, 0, 22, 50, 1100, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', 21, 'RO - SECTORAL', ''),
(3, '', 2, 10, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'TAPE', 'MASKING TAPE 2-INCH DIAMETER', 1, 'piece', '1040401000-793', ' ', ' ', ' ', 2, 70, 140, 0, 0, 0, 2, 70, 140, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', 21, 'RO - SECTORAL', ''),
(4, '', 2, 9, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'MANILA PAPER', 'MANILA PAPER, GENERAL', 1, 'piece', '1040401000-792', ' ', ' ', ' ', 20, 10, 200, 0, 0, 0, 20, 10, 200, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', 21, 'RO - SECTORAL', ''),
(5, '', 2, 8, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'NOTEBOOK', 'HIGH QUALITY NOTEBOOK', 1, 'piece', '1040401000-791', ' ', ' ', ' ', 25, 30, 750, 0, 0, 0, 25, 30, 750, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', 21, 'RO - SECTORAL', ''),
(6, '', 2, 7, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'METACARDS', 'METACARDS, GENERAL', 41, 'Rea', '1040401000-790', ' ', ' ', ' ', 4, 50, 200, 0, 0, 0, 4, 50, 200, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', 21, 'RO - SECTORAL', ''),
(7, '', 2, 6, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'BOARD PEN', 'HIGH QUALITY PENTEL BOARD PEN / BOX', 13, 'Box', '1040401000-789', ' ', ' ', ' ', 1, 500, 500, 0, 0, 0, 1, 500, 500, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', 21, 'RO - SECTORAL', ''),
(8, '', 2, 5, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'SIGN PEN', 'HIGH QUALITY BLACK SIGN PEN .7MM / BOX', 13, 'Box', '1040401000-788', ' ', ' ', ' ', 2, 400, 800, 0, 0, 0, 2, 400, 800, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', 21, 'RO - SECTORAL', ''),
(9, '', 2, 4, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'ENVELOPE', 'BROWN ENVELOPE', 1, 'piece', '1040401000-787', ' ', ' ', ' ', 25, 3, 75, 0, 0, 0, 25, 3, 75, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', 21, 'RO - SECTORAL', ''),
(10, '', 2, 3, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'SPECIAL PAPER', 'SCENTED SPECIAL PAPER WHITE 90 GSM / PACK', 6, 'pack', '1040401000-786', ' ', ' ', ' ', 10, 200, 2000, 0, 0, 0, 10, 200, 2000, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', 21, 'RO - SECTORAL', ''),
(11, '', 2, 2, '2021-10-1058', 3, 'Regular Agency Fund', '01', 'Certificate holder', 'Certificate holder', 1, 'piece', '1040401000-785', ' ', ' ', ' ', 25, 100, 2500, 0, 0, 0, 25, 100, 2500, ' ', '2021-12-06', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - SECTORAL', '', '', '', 0, '', 21, 'RO - SECTORAL', ''),
(12, '', 3, 14, '2021-10-1033', 3, 'Regular Agency Fund', '01', 'FACE MASK', 'FACE MASK / BOX', 13, 'Box', '1040407000-797', ' ', ' ', ' ', 50, 150, 7500, 0, 0, 0, 50, 150, 7500, ' ', '2021-12-20', '1st', 'Medical, Dental and Laboratory Supplies Inventory', ' ', 4, 'RO - HRW', '', '', '', 0, '', 28, 'RO - HRW', ''),
(13, '', 3, 13, '2021-10-1033', 3, 'Regular Agency Fund', '01', 'ALCOHOL', 'ISOPROPYL ALCOHOL(1 LITER)', 15, 'Bottle', '1040407000-796', ' ', ' ', ' ', 40, 184, 7360, 0, 0, 0, 40, 184, 7360, ' ', '2021-12-20', '1st', 'Medical, Dental and Laboratory Supplies Inventory', ' ', 4, 'RO - HRW', '', '', '', 0, '', 28, 'RO - HRW', ''),
(14, '', 3, 12, '2021-10-1033', 3, 'Regular Agency Fund', '01', 'ALCOHOL', 'ISOPROPYL ALCOHOL(350ML)', 15, 'Bottle', '1040407000-795', ' ', ' ', ' ', 1600, 78, 124800, 0, 0, 0, 1600, 78, 124800, ' ', '2021-12-20', '1st', 'Medical, Dental and Laboratory Supplies Inventory', ' ', 4, 'RO - HRW', '', '', '', 0, '', 28, 'RO - HRW', ''),
(15, '', 4, 15, 'FOR REQUEST', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'PAPER, Multi-Purpose (COPY) Legal, 70 gsm', 13, 'Box', '1040401000-18', ' ', ' ', ' ', 3, 500, 1500, 0, 0, 0, 3, 500, 1500, ' ', '2021-12-09', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(16, '', 5, 25, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'FOLDER', 'BROWN FOLDER', 12, 'pcs', '1040401000-802', ' ', ' ', ' ', 100, 9, 900, 0, 0, 0, 100, 9, 900, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(17, '', 5, 24, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'FOLDER', 'FOLDER (PINK)', 12, 'pcs', '1040401000-801', ' ', ' ', ' ', 100, 10, 1000, 0, 0, 0, 100, 10, 1000, ' ', '2022-01-24', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(18, '', 5, 23, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Ink', 'INK CART, CANON PG-810, COLORED', 12, 'pcs', '1040401000-800', ' ', ' ', ' ', 20, 1405, 28100, 0, 0, 0, 20, 1405, 28100, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(19, '', 5, 22, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Ink', 'INK CART, CANON PG-810, Black', 12, 'pcs', '1040401000-99', ' ', ' ', ' ', 20, 1045, 20900, 0, 0, 0, 20, 1045, 20900, ' ', '2021-12-28', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(20, '', 5, 21, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'SCISSOR', 'SCISSOR, GENERAL', 12, 'pcs', '1040401000-799', ' ', ' ', ' ', 3, 17.55, 52.650000000000006, 0, 0, 0, 3, 17.55, 52.650000000000006, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(21, '', 5, 20, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Puncher', 'PUNCHER, paper, heavy duty, with two hole guide', 12, 'pcs', '1040401000-76', ' ', ' ', ' ', 1, 141.1, 141.1, 0, 0, 0, 1, 141.1, 141.1, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(22, '', 5, 19, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'SIGN PEN', 'SIGN PEN, GENERAL /BOX', 13, 'Box', '1040401000-803', ' ', ' ', ' ', 3, 213.3, 639.9000000000001, 0, 0, 0, 3, 213.3, 639.9000000000001, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(23, '', 5, 18, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'USB', 'FLASH DRIVE, 16 GB capacity', 12, 'pcs', '1040401000-28', ' ', ' ', ' ', 2, 282.75, 565.5, 0, 0, 0, 2, 282.75, 565.5, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(24, '', 5, 17, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Staple wire', 'STAPLE WIRE, for heavy duty staplers, (23/13)', 13, 'Box', '1040401000-25', ' ', ' ', ' ', 2, 42.75, 85.5, 0, 0, 0, 2, 42.75, 85.5, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(25, '', 5, 16, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Stapler', 'STAPLER, BINDER TYPE, heavy duty, desktop', 12, 'pcs', '1040401000-79', ' ', ' ', ' ', 3, 343, 1029, 0, 0, 0, 3, 343, 1029, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(26, '', 5, 26, 'FOR REQUEST PANTAWID', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'Bond paper , A4', 11, 'ream', '1040401000-336', ' ', ' ', ' ', 1, 280, 280, 0, 0, 0, 1, 280, 280, ' ', '2021-12-27', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(27, '', 6, 29, 'Request pantawid', 3, 'Regular Agency Fund', '01', 'Ink', '003 black epson', 15, 'Bottle', '1040401000-804', ' ', ' ', ' ', 4, 345, 1380, 0, 0, 0, 4, 345, 1380, ' ', '2022-01-13', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(28, '', 6, 28, 'Request pantawid', 3, 'Regular Agency Fund', '01', 'Correction tape', 'Correction tape, general', 12, 'pcs', '1040401000-716', ' ', ' ', ' ', 2, 31.5, 63, 0, 0, 0, 2, 31.5, 63, ' ', '2022-01-13', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(29, '', 6, 27, 'Request pantawid', 3, 'Regular Agency Fund', '01', 'Fastener', 'FASTENER, METAL, 70mm between prongs', 13, 'Box', '1040401000-56', ' ', ' ', ' ', 3, 28, 84, 0, 0, 0, 3, 28, 84, ' ', '2022-01-13', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(30, '', 6, 30, 'Request pantawid', 3, 'Regular Agency Fund', '01', 'Logbook', 'Logbook, general', 12, 'pcs', '1040401000-805', ' ', ' ', ' ', 2, 80, 160, 0, 0, 0, 2, 80, 160, ' ', '2022-01-13', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(31, '', 6, 31, 'Request pantawid', 3, 'Regular Agency Fund', '01', 'Cutter', 'CUTTER KNIFE, for general purpose', 12, 'pcs', '1040401000-74', ' ', ' ', ' ', 2, 29, 58, 0, 0, 0, 2, 29, 58, ' ', '2022-01-13', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(32, '07-COS-010', 7, 34, 'testing', 3, 'Regular Agency Fund', '01', 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', 15, 'Bottle', '1040401000-1', ' ', ' ', ' ', 10, 100, 1000, 0, 0, 0, 10, 100, 1000, ' ', '2022-01-25', '1st', 'Office Supplies Inventory', ' ', 1, 'BS', '', '', '', 0, '', 1, 'BS', ''),
(34, ' ', 8, 35, '2021-140-121211', 3, 'Regular Agency Fund', '01', 'Cartolina', 'CARTOLINA, assorted colors', 15, 'Bottle', '1040401000-3', ' ', ' ', ' ', 50, 10, 500, 0, 0, 0, 50, 10, 500, ' ', '2022-01-25', '1st', 'Office Supplies Inventory', ' ', 1, 'HG', '', '', '', 0, '', 4, 'HG', ''),
(35, '', 8, 35, '', 3, 'Regular Agency Fund', '01', 'Cartolina', 'CARTOLINA, assorted colors', 15, 'Bottle', '1040401000-3', ' ', '2022-1-2000', ' ', 0, 0, 0, 20, 10, 200, 30, 10, 300, ' ', '2022-01-25', ' ', 'Office Supplies Inventory', ' ', 1, 'HG', '', '', '', 0, ' ', 4, 'HG', ' '),
(36, '', 3, 12, '', 3, 'Regular Agency Fund', '01', 'ALCOHOL', 'ISOPROPYL ALCOHOL(350ML)', 15, 'Bottle', '1040407000-795', ' ', '2021-10-0022', ' ', 0, 0, 0, 500, 78, 39000, -499, 78, 85800, ' ', '2021-12-27', ' ', 'Medical, Dental and Laboratory Supplies Inventory', ' ', 4, 'RO - HRW', '', '', '', 0, ' ', 28, 'RO - HRW', ' '),
(37, ' ', 9, 43, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Ink', 'Epson ink 003 refill', 15, 'Bottle', '5020201002-812', ' ', ' ', ' ', 5, 455, 2275, 0, 0, 0, 5, 455, 2275, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(38, ' ', 9, 42, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Tape', 'Correction tape', 1, 'piece', '5020201002-811', ' ', ' ', ' ', 2, 22, 44, 0, 0, 0, 2, 22, 44, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(39, ' ', 9, 41, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Envelope', 'Brown Expanded envelope', 1, 'piece', '5020201002-810', ' ', ' ', ' ', 57, 30, 1710, 0, 0, 0, 57, 30, 1710, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(40, ' ', 9, 40, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Envelope', 'Plastic envelope with handle', 1, 'piece', '5020201002-809', ' ', ' ', ' ', 57, 65, 3705, 0, 0, 0, 57, 65, 3705, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(41, ' ', 9, 39, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Ballpen', 'Good quality black ballpen', 1, 'piece', '5020201002-808', ' ', ' ', ' ', 57, 12, 684, 0, 0, 0, 57, 12, 684, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(42, ' ', 9, 38, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Notebook', '50 leaves notebook', 1, 'piece', '5020201002-807', ' ', ' ', ' ', 57, 22, 1254, 0, 0, 0, 57, 22, 1254, ' ', '2022-02-02', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(43, ' ', 9, 37, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'Long Bond Paper', 11, 'ream', '5020201002-806', ' ', ' ', ' ', 15, 216, 3240, 0, 0, 0, 15, 216, 3240, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(44, ' ', 9, 36, '2021-12-1252', 3, 'Regular Agency Fund', '01', 'Bond paper', 'Bond paper, A4', 11, 'ream', '5020201002-696', ' ', ' ', ' ', 15, 206, 3090, 0, 0, 0, 15, 206, 3090, ' ', '2022-01-26', '1st', 'Training Expenses', ' ', 23, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(45, ' ', 10, 44, 'request for pantawid 2/3/2022', 3, 'Regular Agency Fund', '01', 'Filer', 'Filer jumbo with cover', 1, 'piece', '1040401000-813', ' ', ' ', ' ', 80, 500, 40000, 0, 0, 0, 80, 500, 40000, ' ', '2022-02-03', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', ''),
(46, ' ', 11, 49, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'Bond paper', 'Bond paper long', 13, 'Box', '1040401000-823', ' ', ' ', ' ', 2, 1167.39, 2334.78, 0, 0, 0, 2, 1167.39, 2334.78, ' ', '2021-12-10', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', 19, 'RO - ORD', ''),
(47, ' ', 11, 50, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'Puncher', 'PUNCHER, paper, heavy duty, with two hole guide', 12, 'pcs', '1040401000-76', ' ', ' ', ' ', 1, 141.1, 141.1, 0, 0, 0, 2, 141.1, 282.2, ' ', '2021-12-30', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', 19, 'RO - ORD', ''),
(48, ' ', 11, 48, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'STICKY NOTE', 'STICKY NOTE ROLL, MATERIAL: PAPER + PLASTIC ROLL DESIGN PAPER LENGTH:8M/314.95\"(APPROX)', 12, 'pcs', '1040401000-794', ' ', ' ', ' ', 15, 50, 750, 0, 0, 0, 37, 50, 1850, ' ', '2021-12-30', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', 19, 'RO - ORD', ''),
(49, ' ', 11, 47, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'Sign pen', 'SIGN PEN, BLACK, liquid/gel ink, 0.5mm needle tip', 13, 'Box', '1040401000-233', ' ', ' ', ' ', 2, 230, 460, 0, 0, 0, 2, 230, 460, ' ', '2021-12-30', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', 19, 'RO - ORD', ''),
(50, ' ', 11, 46, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'Sign pen', 'SIGN PEN, BLUE, liquid/gel ink, 0.5mm needle tip', 13, 'Box', '1040401000-234', ' ', ' ', ' ', 2, 230, 460, 0, 0, 0, 2, 230, 460, ' ', '2021-12-30', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', 19, 'RO - ORD', ''),
(51, ' ', 11, 45, 'ORD request 2021-09-0393', 3, 'Regular Agency Fund', '01', 'Sign pen', 'SIGN PEN, RED, liquid/gel ink, 0.5mm needle tip', 13, 'Box', '1040401000-235', ' ', ' ', ' ', 2, 230, 460, 0, 0, 0, 2, 230, 460, ' ', '2021-12-30', '1st', 'Office Supplies Inventory', ' ', 1, 'RO - ORD', '', '', '', 0, '', 19, 'RO - ORD', ''),
(52, ' ', 12, 56, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Polo shirt', 'Yakap Bayan', 1, 'piece', '5029901000-830', ' ', ' ', ' ', 24, 400, 9600, 0, 0, 0, 24, 400, 9600, ' ', '2022-02-10', '1st', 'Advertising, Promotional and Marketing Expenses', ' ', 22, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(53, ' ', 12, 55, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Polo Shirt', 'Polo Shirt Advocacy Materials Pangantucan Buk', 1, 'piece', '5029901000-827', ' ', ' ', ' ', 43, 400, 17200, 0, 0, 0, 43, 400, 17200, ' ', '2022-02-10', '1st', 'Advertising, Promotional and Marketing Expenses', ' ', 22, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(54, ' ', 12, 54, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Polo Shirt', 'Polo Shirt Advocacy materials', 1, 'piece', '5029901000-825', ' ', ' ', ' ', 10, 400, 4000, 0, 0, 0, 10, 400, 4000, ' ', '2022-02-10', '1st', 'Advertising, Promotional and Marketing Expenses', ' ', 22, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(55, ' ', 12, 53, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Printer', 'Epson Printer (Eco tank L3250)', 1, 'piece', '1040503000-824', ' ', ' ', ' ', 2, 10696, 21392, 0, 0, 0, 2, 10696, 21392, ' ', '2022-02-10', '1st', 'Semi-Expendable Information and Communications Technology Equipment', ' ', 11, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(56, ' ', 12, 52, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Alcohol', 'Hand Sanitizer Alcohol', 1, 'piece', '1040407000-829', ' ', ' ', ' ', 10, 340, 3400, 0, 0, 0, 10, 340, 3400, ' ', '2022-02-10', '1st', 'Medical, Dental and Laboratory Supplies Inventory', ' ', 4, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(57, ' ', 12, 51, 'SOCTECH request', 3, 'Regular Agency Fund', '01', 'Scanner', 'Portable Scanner', 1, 'piece', '1040503000-828', ' ', ' ', ' ', 1, 12000, 12000, 0, 0, 0, 1, 12000, 12000, ' ', '2022-02-10', '1st', 'Semi-Expendable Information and Communications Technology Equipment', ' ', 11, 'RO - SOCTECH', '', '', '', 0, '', 16, 'RO - SOCTECH', ''),
(58, ' ', 16, 57, '2021-11-1130', 3, 'Regular Agency Fund', '01', 'Keppra', 'Solution', 15, 'Bottle', '1040406000-831', ' ', ' ', ' ', 2, 2124, 4248, 0, 0, 0, 2, 2124, 4248, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, ' ', '', '', '', 0, '', 5, ' ', ''),
(59, ' ', 16, 57, '2021-11-1130', 3, 'Regular Agency Fund', '01', 'Keppra', 'Solution', 15, 'Bottle', '1040406000-831', ' ', ' ', ' ', 3, 2124, 6372, 0, 0, 0, 5, 2124, 10620, ' ', '2022-02-22', '2nd', 'Drugs and Medicines Inventory', ' ', 3, ' ', '', '', '', 0, '', 5, ' ', ''),
(60, '', 16, 57, '', 3, 'Regular Agency Fund', '01', 'Keppra', 'Solution', 15, 'Bottle', '1040406000-831', ' ', '2021-12-22', ' ', 0, 0, 0, 4, 2124, 8496, 1, 2124, 2124, ' ', '2022-02-22', ' ', 'Drugs and Medicines Inventory', ' ', 3, ' ', '', '', '', 0, ' ', 5, ' ', ' '),
(61, ' ', 23, 60, '2021-12-10101', 3, 'Regular Agency Fund', '01', 'Keppra', 'Solution', 15, 'Bottle', '1040406000-831', ' ', ' ', ' ', 4, 2124, 8496, 0, 0, 0, 5, 2124, 10620, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RSCC', '', '', '', 0, '', 5, 'RSCC', ''),
(62, ' ', 25, 61, '2020-15-1478', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'Bond paper , A4', 11, 'ream', '1040401000-336', ' ', ' ', ' ', 5, 280, 1400, 0, 0, 0, 6, 280, 1680, ' ', '2022-02-22', '1st', 'Office Supplies Inventory', ' ', 1, 'DRMD', '', '', '', 0, '', 10, 'DRMD', ''),
(63, ' ', 25, 61, '2020-15-1478', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'Bond paper , A4', 11, 'ream', '1040401000-336', ' ', ' ', ' ', 5, 280, 1400, 0, 0, 0, 11, 280, 3080, ' ', '2022-02-22', '2nd', 'Office Supplies Inventory', ' ', 1, 'DRMD', '', '', '', 0, '', 10, 'DRMD', ''),
(64, '', 25, 61, '', 3, 'Regular Agency Fund', '01', 'Bond Paper', 'Bond paper , A4', 11, 'ream', '1040401000-336', ' ', '1234', ' ', 0, 0, 0, 5, 280, 1400, 6, 280, 1680, ' ', '2022-02-22', ' ', 'Office Supplies Inventory', ' ', 1, 'DRMD', '', '', '', 0, ' ', 10, 'DRMD', ' '),
(65, ' ', 17, 62, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Lexdin', 'Lexdin 10mgs', 37, 'Tab', '1040406000-832', ' ', ' ', ' ', 50, 16.75, 837.5, 0, 0, 0, 50, 16.75, 837.5, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(66, ' ', 17, 63, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Responz', '10mgs', 37, 'Tab', '1040406000-833', ' ', ' ', ' ', 0, 39.25, 0, 0, 0, 0, 0, 0, 0, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(67, ' ', 17, 63, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Responz', '10mgs', 37, 'Tab', '1040406000-833', ' ', ' ', ' ', 80, 39.25, 3140, 0, 0, 0, 80, 39.25, 3140, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(68, ' ', 17, 64, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Baclofen', '10mgs', 37, 'Tab', '1040406000-834', ' ', ' ', ' ', 80, 26.5, 2120, 0, 0, 0, 80, 26.5, 2120, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(69, ' ', 17, 65, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Phenobarbital', '30mgs', 15, 'Bottle', '1040406000-835', ' ', ' ', ' ', 8, 305, 2440, 0, 0, 0, 8, 305, 2440, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(70, ' ', 17, 66, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Phenobarbital', '90mgs', 15, 'Bottle', '1040406000-836', ' ', ' ', ' ', 2, 535, 1070, 0, 0, 0, 2, 535, 1070, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(71, ' ', 17, 67, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Valpros', '500mgs', 37, 'Tab', '1040406000-837', ' ', ' ', ' ', 80, 26.75, 2140, 0, 0, 0, 80, 26.75, 2140, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(72, ' ', 17, 68, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Valpros', 'Syrup', 15, 'Bottle', '1040406000-838', ' ', ' ', ' ', 10, 276.5, 2765, 0, 0, 0, 10, 276.5, 2765, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(73, ' ', 17, 69, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Omegabloc', 'Omegabloc ,general', 15, 'Bottle', '1040406000-839', ' ', ' ', ' ', 8, 360, 2880, 0, 0, 0, 8, 360, 2880, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(74, ' ', 17, 70, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Paracetamol', 'Tempra syrup (120ml)', 15, 'Bottle', '1040406000-840', ' ', ' ', ' ', 10, 159.5, 1595, 0, 0, 0, 10, 159.5, 1595, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(75, ' ', 17, 71, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Hydrite', 'Granules', 13, 'Box', '1040406000-841', ' ', ' ', ' ', 1, 1575, 1575, 0, 0, 0, 1, 1575, 1575, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(76, ' ', 17, 72, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Hydrasec', 'Granules', 1, 'Piece', '1040406000-842', ' ', ' ', ' ', 50, 55, 2750, 0, 0, 0, 50, 55, 2750, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(77, ' ', 17, 73, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Phenylephrine', 'syrup,drops', 15, 'Bottle', '1040406000-843', ' ', ' ', ' ', 12, 113, 1356, 0, 0, 0, 12, 113, 1356, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(78, ' ', 17, 74, '2021-11-1128', 3, 'Regular Agency Fund', '01', 'Terramycin', 'Opthatmic drop', 23, 'Tube', '1040406000-844', ' ', ' ', ' ', 2, 689, 1378, 0, 0, 0, 2, 689, 1378, ' ', '2022-02-22', '1st', 'Drugs and Medicines Inventory', ' ', 3, 'RRCY', '', '', '', 0, '', 2, 'RRCY', ''),
(79, ' ', 30, 79, 'SOCTECH REQUEST 1', 3, 'Regular Agency Fund', '01', 'Chair', 'Shivel', 1, 'Piece', '1040601000-850', ' ', ' ', ' ', 3, 7000, 21000, 0, 0, 0, 3, 7000, 21000, ' ', '2022-03-04', '1st', 'Semi-Expendable Furniture and Fixtures', ' ', 17, ' ', '', '', '', 0, '', 16, ' ', ''),
(80, ' ', 30, 78, 'SOCTECH REQUEST 1', 3, 'Regular Agency Fund', '01', 'Cabinet', 'Mobile cabinet', 1, 'Piece', '1040601000-849', ' ', ' ', ' ', 3, 4000, 12000, 0, 0, 0, 3, 4000, 12000, ' ', '2022-03-04', '1st', 'Semi-Expendable Furniture and Fixtures', ' ', 17, ' ', '', '', '', 0, '', 16, ' ', ''),
(81, ' ', 30, 77, 'SOCTECH REQUEST 1', 3, 'Regular Agency Fund', '01', 'Printer', 'Printer wifi all in one tank printer', 1, 'Piece', '1040503000-851', ' ', ' ', ' ', 3, 14500, 43500, 0, 0, 0, 3, 14500, 43500, ' ', '2022-03-04', '1st', 'Semi-Expendable Information and Communications Technology Equipment', ' ', 11, ' ', '', '', '', 0, '', 16, ' ', ''),
(82, ' ', 30, 76, 'SOCTECH REQUEST 1', 3, 'Regular Agency Fund', '01', 'Planner', 'Social technology planner', 1, 'Piece', '5029901000-852', ' ', ' ', ' ', 83, 600, 49800, 0, 0, 0, 83, 600, 49800, ' ', '2022-03-04', '1st', 'Advertising, Promotional and Marketing Expenses', ' ', 22, ' ', '', '', '', 0, '', 16, ' ', ''),
(83, ' ', 31, 85, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'TAPE', 'MASKING TAPE 2-INCH DIAMETER', 1, 'piece', '1040401000-793', ' ', ' ', ' ', 5, 80, 400, 0, 0, 0, 7, 80, 540, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(84, ' ', 31, 99, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Tape', 'Scotch tape', 10, 'Roll', '1040401000-864', ' ', ' ', ' ', 3, 75, 225, 0, 0, 0, 3, 75, 225, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(85, ' ', 31, 94, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'HP 680', 'HP 680 colored', 43, 'Cartridge', '1040401000-860', ' ', ' ', ' ', 20, 600, 12000, 0, 0, 0, 20, 600, 12000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(86, ' ', 31, 93, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'HP 680', 'Black', 43, 'Cartridge', '1040401000-859', ' ', ' ', ' ', 20, 600, 12000, 0, 0, 0, 20, 600, 12000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(87, ' ', 31, 98, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Tape', 'Tape packaging', 10, 'Roll', '1040401000-863', ' ', ' ', ' ', 4, 58, 232, 0, 0, 0, 4, 58, 232, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(88, ' ', 31, 80, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'STAMP PAD', 'STAMP PAD, GENERAL', 1, 'Piece', '1040401000-854', ' ', ' ', ' ', 3, 52.8, 158.39999999999998, 0, 0, 0, 3, 52.79, 158.39999999999998, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(89, ' ', 31, 87, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Scissor', 'SCISSORS, symmetrical, blade length: 65mm min', 1, 'Piece', '1040401000-77', ' ', ' ', ' ', 10, 45, 450, 0, 0, 0, 10, 45, 450, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(90, ' ', 31, 97, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Staple wire', 'STAPLE WIRE, STANDARD, (26/6)', 13, 'Box', '1040401000-26', ' ', ' ', ' ', 5, 42, 210, 0, 0, 0, 5, 42, 210, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(91, ' ', 31, 95, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Pentel pen', 'Pentel pen', 13, 'Box', '1040401000-861', ' ', ' ', ' ', 2, 38, 76, 0, 0, 0, 2, 38, 76, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(92, ' ', 31, 103, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 664', 'INK 664 yellow', 15, 'Bottle', '1040401000-868', ' ', ' ', ' ', 4, 350, 1400, 0, 0, 0, 4, 350, 1400, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(93, ' ', 31, 102, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 664', 'INK 664 magenta', 15, 'Bottle', '1040401000-867', ' ', ' ', ' ', 4, 350, 1400, 0, 0, 0, 4, 350, 1400, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(94, ' ', 31, 101, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 664', 'INK 664 Cyan', 15, 'Bottle', '1040401000-866', ' ', ' ', ' ', 4, 350, 1400, 0, 0, 0, 4, 350, 1400, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(95, ' ', 31, 100, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 664', 'Black', 15, 'Bottle', '1040401000-865', ' ', ' ', ' ', 4, 350, 1400, 0, 0, 0, 4, 350, 1400, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(96, ' ', 31, 92, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 003', 'INK 003 Magenta', 15, 'Bottle', '1040401000-855', ' ', ' ', ' ', 20, 350, 7000, 0, 0, 0, 20, 350, 7000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(97, ' ', 31, 91, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 003', 'Yellow', 15, 'Bottle', '1040401000-856', ' ', ' ', ' ', 20, 350, 7000, 0, 0, 0, 20, 350, 7000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(98, ' ', 31, 90, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 003', 'Cyan', 15, 'Bottle', '1040401000-857', ' ', ' ', ' ', 20, 350, 7000, 0, 0, 0, 20, 350, 7000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(99, ' ', 31, 89, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'INK 003', 'Black', 15, 'Bottle', '1040401000-858', ' ', ' ', ' ', 20, 350, 7000, 0, 0, 0, 20, 350, 7000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(100, ' ', 31, 81, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'SIGN PEN', 'SIGN PEN, GENERAL /BOX', 13, 'Box', '1040401000-803', ' ', ' ', ' ', 7, 330, 2310, 0, 0, 0, 10, 294.99, 2949.9, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(101, ' ', 31, 96, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Correction tape', 'Correction tape, general', 12, 'pcs', '1040401000-716', ' ', ' ', ' ', 20, 31.5, 630, 0, 0, 0, 22, 31.5, 693, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(102, ' ', 31, 84, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Fastener', 'FASTENER, METAL, 70mm between prongs', 13, 'Box', '1040401000-56', ' ', ' ', ' ', 3, 28, 84, 0, 0, 0, 6, 28, 168, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(103, ' ', 31, 88, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Ruler', 'RULER, plastic, 450mm (18\"), width: 38mm min', 1, 'Piece', '1040401000-27', ' ', ' ', ' ', 3, 25, 75, 0, 0, 0, 3, 25, 75, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(104, ' ', 31, 86, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Stapler', 'STAPLER, STANDARD TYPE, load cap: 200 staples min', 1, 'Piece', '1040401000-78', ' ', ' ', ' ', 5, 203.5, 1017.5, 0, 0, 0, 5, 203.5, 1017.5, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(106, ' ', 31, 83, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Bond paper', 'Bond paper, legal (Box)', 13, 'Box', '1040401000-871', ' ', ' ', ' ', 10, 1200, 12000, 0, 0, 0, 10, 1200, 12000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(107, ' ', 31, 82, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Bond paper', 'Bond paper, A4 (Box)', 13, 'Box', '1040401000-870', ' ', ' ', ' ', 10, 1200, 12000, 0, 0, 0, 10, 1200, 12000, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(108, ' ', 31, 105, 'REQUEST PANTAWID 2', 3, 'Regular Agency Fund', '01', 'Tissue', 'Tissue, general', 10, 'Roll', '1040401000-872', ' ', ' ', ' ', 45, 15, 675, 0, 0, 0, 45, 15, 675, ' ', '2022-03-07', '1st', 'Office Supplies Inventory', ' ', 1, ' ', '', '', '', 0, '', 8, ' ', ''),
(109, ' ', 32, 116, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Roller Tray', 'Paint roller tray', 1, 'Piece', '5020399000-883', ' ', ' ', ' ', 2, 75, 150, 0, 0, 0, 2, 75, 150, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', 11, ' ', ''),
(110, ' ', 32, 115, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Roller', 'Baby Roller', 1, 'Piece', '5020399000-882', ' ', ' ', ' ', 2, 110, 220, 0, 0, 0, 2, 110, 220, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', 11, ' ', ''),
(111, ' ', 32, 114, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Sandpaper', 'Sandpaper NO.120', 1, 'Piece', '5020399000-881', ' ', ' ', ' ', 3, 30, 90, 0, 0, 0, 3, 30, 90, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', 11, ' ', ''),
(112, ' ', 32, 113, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Thinner', 'Paint Thinner', 15, 'Bottle', '5020399000-880', ' ', ' ', ' ', 4, 58, 232, 0, 0, 0, 4, 58, 232, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', 11, ' ', ''),
(113, ' ', 32, 112, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Brush', 'Paint brush', 1, 'Piece', '5020399000-879', ' ', ' ', ' ', 3, 100, 300, 0, 0, 0, 3, 100, 300, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', 11, ' ', ''),
(114, ' ', 32, 111, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Enamel', 'Gloss enamel - ready mixed mint green', 14, 'Gallon', '5020399000-878', ' ', ' ', ' ', 4, 980, 3920, 0, 0, 0, 4, 980, 3920, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', 11, ' ', ''),
(115, ' ', 32, 110, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Enamel', 'Flat wall white enamel', 14, 'Gallon', '5020399000-877', ' ', ' ', ' ', 3, 665, 1995, 0, 0, 0, 3, 665, 1995, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', 11, ' ', ''),
(116, ' ', 32, 109, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Nails', 'Finishing nails NO.1 1/2', 4, 'Kilogram', '5020399000-876', ' ', ' ', ' ', 3, 145, 435, 0, 0, 0, 3, 145, 435, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', 11, ' ', ''),
(117, ' ', 32, 108, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Nails', 'Finishing nails NO.2', 4, 'Kilogram', '5020399000-875', ' ', ' ', ' ', 3, 145, 435, 0, 0, 0, 3, 145, 435, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', 11, ' ', ''),
(118, ' ', 32, 107, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Hinges', 'Hydraulic Hinges', 1, 'Piece', '5020399000-874', ' ', ' ', ' ', 46, 120, 5520, 0, 0, 0, 46, 120, 5520, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, ' ', '', '', '', 0, '', 11, ' ', ''),
(119, ' ', 32, 106, '2021-12-1358', 3, 'Regular Agency Fund', '01', 'Plywood', 'Marine plywood (PLIGO)', 1, 'Piece', '5020399000-873', ' ', ' ', ' ', 14, 800, 11200, 0, 0, 0, 14, 800, 11200, ' ', '2022-03-08', '1st', 'Other Supplies Expenses', ' ', 25, 'RO - ARRS', '', '', '', 0, '', 11, 'RO - ARRS', ''),
(120, ' ', 33, 119, '2021-11-1244', 3, 'Regular Agency Fund', '01', 'Chair', 'Office chair', 1, 'Piece', '1040601000-886', ' ', ' ', ' ', 20, 4250, 85000, 0, 0, 0, 20, 4250, 85000, ' ', '2022-03-08', '1st', 'Semi-Expendable Furniture and Fixtures', ' ', 17, 'RO - ARRS', '', '', '', 0, '', 11, 'RO - ARRS', ''),
(121, ' ', 33, 118, '2021-11-1244', 3, 'Regular Agency Fund', '01', 'Cabinet', 'Steel Cabinet', 1, 'Piece', '1040601000-690', ' ', ' ', ' ', 1, 6000, 6000, 0, 0, 0, 1, 6000, 6000, ' ', '2022-03-08', '1st', 'Semi-Expendable Furniture and Fixtures', ' ', 17, 'RO - ARRS', '', '', '', 0, '', 11, 'RO - ARRS', ''),
(122, ' ', 33, 117, '2021-11-1244', 3, 'Regular Agency Fund', '01', 'Table', 'Coffee table set', 1, 'Piece', '1040601000-884', ' ', ' ', ' ', 1, 5000, 5000, 0, 0, 0, 1, 5000, 5000, ' ', '2022-03-08', '1st', 'Semi-Expendable Furniture and Fixtures', ' ', 17, 'RO - ARRS', '', '', '', 0, '', 11, 'RO - ARRS', ''),
(123, ' ', 34, 120, '2021-12-1318', 3, 'Regular Agency Fund', '01', 'Vest', 'DSWD RED VEST', 1, 'Piece', '5029901000-887', ' ', ' ', ' ', 137, 1450, 198650, 0, 0, 0, 137, 1450, 198650, ' ', '2022-03-08', '1st', 'Advertising, Promotional and Marketing Expenses', ' ', 22, 'RO - ARRS', '', '', '', 0, '', 11, 'RO - ARRS', ''),
(126, ' ', 36, 123, 'Pantawid request', 3, 'Regular Agency Fund', '01', 'Toner', 'Toner Cartridge, HP CF283A (HP83A) LaserJet Black', 43, 'Cartridge', '1040401000-191', ' ', ' ', ' ', 5, 2950, 14750, 0, 0, 0, 5, 2950, 14750, ' ', '2022-03-10', '1st', 'Office Supplies Inventory', ' ', 1, 'PANTAWID', '', '', '', 0, '', 8, 'PANTAWID', '');

-- --------------------------------------------------------

--
-- Table structure for table `tblsubaccount`
--

CREATE TABLE `tblsubaccount` (
  `subacct_id` bigint(20) NOT NULL,
  `subaccount` varchar(5000) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `stock_no` varchar(2000) NOT NULL,
  `acct_link` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblsubaccount`
--

INSERT INTO `tblsubaccount` (`subacct_id`, `subaccount`, `description`, `stock_no`, `acct_link`) VALUES
(1, 'Ink', 'STAMP PAD INK, purple or violet, 50ml (min.)', '', 1),
(2, 'Ink', 'STAMP PAD INK, purple or violet, 100ml (min.)', '', 1),
(3, 'Cartolina', 'CARTOLINA, assorted colors', '', 1),
(4, 'Form', 'CONTINUOUS FORM, 1 PLY, 280 x 241mm', '', 1),
(5, 'Form', 'CONTINUOUS FORM, 1 PLY, 280 x 378mm', '', 1),
(6, 'Form', 'CONTINUOUS FORM, 2 ply, 280 x 378mm, carbonless', '', 1),
(7, 'Form', 'CONTINUOUS FORM, 2 ply, 280mm x 241mm, carbonless', '', 1),
(8, 'Form', 'CONTINUOUS FORM, 3 PLY, 280 x 241mm, carbonless', '', 1),
(9, 'Form', 'CONTINUOUS FORM, 3 PLY, 280 x 378mm, carbonless', '', 1),
(10, 'Cover', 'LOOSELEAF COVER, made of chipboard, for legal', '', 1),
(11, 'Note Pad', 'NOTE PAD, stick on, 50mm x 76mm (2\" x 3\") min', '', 1),
(12, 'Note Pad', 'NOTE PAD, stick on, 76mm x 100mm (3\" x 4\") min', '', 1),
(13, 'Note Pad', 'NOTE PAD, stick on, 76mm x 76mm (3\" x 3\") min', '', 1),
(14, 'Notebook', 'NOTEBOOK, STENOGRAPHER, spiral, 40 leaves', '', 1),
(15, 'Bond Paper', 'PAPER, MULTICOPY, 80gsm, size: 210mm x 297mm', '', 1),
(16, 'Bond Paper', 'PAPER, MULTICOPY, 80gsm, size: 216mm x 330mm', '', 1),
(17, 'Bond Paper', 'PAPER, Multi-Purpose (COPY) A4, 70 gsm', '', 1),
(18, 'Bond Paper', 'PAPER, Multi-Purpose (COPY) Legal, 70 gsm', '', 1),
(19, 'Paper', 'PAPER, PAD, ruled, size: 216mm x 330mm (? 2mm)', '', 1),
(20, 'Paper', 'PAPER, PARCHMENT, size: 210 x 297mm, multi-purpose', '', 1),
(21, 'Paper', 'PAPER, THERMAL, 55gsm, size: 216mm?1mm x 30m-0.3m', '', 1),
(22, 'Book', 'RECORD BOOK, 300 PAGES, size: 214mm x 278mm min', '', 1),
(23, 'Book', 'RECORD BOOK, 500 PAGES, size: 214mm x 278mm min', '', 1),
(24, 'Glue', 'GLUE, all purpose, gross weight: 200 grams min', '', 1),
(25, 'Staple wire', 'STAPLE WIRE, for heavy duty staplers, (23/13)', '', 1),
(26, 'Staple wire', 'STAPLE WIRE, STANDARD, (26/6)', '', 1),
(27, 'Ruler', 'RULER, plastic, 450mm (18\"), width: 38mm min', '', 1),
(28, 'USB', 'FLASH DRIVE, 16 GB capacity', '', 1),
(29, 'Mouse', 'MOUSE, OPTICAL, USB CONNECTION TYPE, 1 unit in ind', '', 1),
(30, 'Mouse', 'MOUSE, WIRELESS, USB', '', 1),
(31, 'Chalk', 'CHALK, molded, white, dustless, length: 78mm min', '', 1),
(32, 'Clip', 'CLIP, BACKFOLD, all metal, clamping: 19mm (-1mm)', '', 1),
(33, 'Clip', 'CLIP, BACKFOLD, all metal, clamping: 25mm (-1mm)', '', 1),
(34, 'Clip', 'CLIP, BACKFOLD, all metal, clamping: 32mm (-1mm)', '', 1),
(35, 'Clip', 'CLIP, BACKFOLD, all metal, clamping: 50mm (-1mm)', '', 1),
(36, 'Clip', 'PAPER CLIP, vinyl/plastic coat, length: 32mm min', '', 1),
(37, 'Clip', 'PAPER CLIP, vinyl/plastic coat, length: 50mm min', '', 1),
(38, 'Correction tape', 'CORRECTION TAPE, film base type, UL 6m min', '', 1),
(39, 'Box filer', 'DATA FILE BOX, made of chipboard, with closed ends', '', 1),
(40, 'Box filer', 'MAGAZINE FILE BOX, LARGE size, made of chipboard', '', 1),
(41, 'Folder', 'DATA FOLDER, made of chipboard, taglia lock', '', 1),
(42, 'Folder', 'FOLDER, FANCY, for A4 size documents', '', 1),
(43, 'Folder', 'FOLDER, FANCY, for legal size documents', '', 1),
(44, 'Folder', 'FOLDER, L-TYPE, PLASTIC, for A4 size documents', '', 1),
(45, 'Folder', 'FOLDER, L-TYPE, PLASTIC, for legal size documents', '', 1),
(46, 'Folder', 'FOLDER, PRESSBOARD, size: 240mm x 370mm (-5mm)', '', 1),
(47, 'Folder', 'FOLDER, TAGBOARD, for A4 size documents', '', 1),
(48, 'Folder', 'FOLDER, TAGBOARD, for legal size documents', '', 1),
(49, 'Envelope', 'ENVELOPE, DOCUMENTARY, for A4 size document', '', 1),
(50, 'Envelope', 'ENVELOPE, DOCUMENTARY, for legal size document', '', 1),
(51, 'Envelope', 'ENVELOPE, EXPANDING, KRAFTBOARD,for legal size doc', '', 1),
(52, 'Envelope', 'ENVELOPE, EXPANDING, PLASTIC, 0.50mm thickness min', '', 1),
(53, 'Envelope', 'ENVELOPE, mailing, white, 70gsm', '', 1),
(54, 'Envelope', 'ENVELOPE, mailing, white, with window', '', 1),
(55, 'Eraser', 'ERASER, FELT, for blackboard/whiteboard', '', 1),
(56, 'Fastener', 'FASTENER, METAL, 70mm between prongs', '', 1),
(57, 'File organizer', 'FILE ORGANIZER, expanding, plastic, 12 pockets', '', 1),
(58, 'Tab', 'FILE TAB DIVIDER, bristol board, for A4', '', 1),
(59, 'Tab', 'FILE TAB DIVIDER, bristol board, for legal', '', 1),
(60, 'Tab', 'INDEX TAB, self-adhesive, transparent', '', 1),
(61, 'Marker', 'MARKER, FLUORESCENT, 3 assorted colors per set', '', 1),
(62, 'Marker', 'MARKER, whiteboard, black, felt tip, bullet type', '', 1),
(63, 'Marker', 'MARKER, whiteboard, blue, felt tip, bullet type', '', 1),
(64, 'Marker', 'MARKER, whiteboard, red, felt tip, bullet type', '', 1),
(65, 'Marker', 'MARKER, PERMANENT, bullet type, black', '', 1),
(66, 'Marker', 'MARKER, PERMANENT, bullet type, blue', '', 1),
(67, 'Marker', 'MARKER, PERMANENT, bullet type, red', '', 1),
(68, 'Pencil', 'PENCIL, lead, w/ eraser, wood cased, hardness: HB', '', 1),
(69, 'Binder', 'RING BINDER, plastic, 32mm, 84 rings', '', 1),
(70, 'Rubber band', 'RUBBER BAND, 70mm min lay flat length (#18)', '', 1),
(71, 'Stamp', 'STAMP PAD, FELT, bed dimension: 60mm x 100mm min', '', 1),
(72, 'Stamp', 'DATING AND STAMPING MACHINE, heavy duty', '', 1),
(73, 'Cutter', 'CUTTER BLADE, for heavy duty cutter', '', 1),
(74, 'Cutter', 'CUTTER KNIFE, for general purpose', '', 1),
(75, 'Sharpener', 'PENCIL SHARPENER, manual, single cutter head', '', 1),
(76, 'Puncher', 'PUNCHER, paper, heavy duty, with two hole guide', '', 1),
(77, 'Scissor', 'SCISSORS, symmetrical, blade length: 65mm min', '', 1),
(78, 'Stapler', 'STAPLER, STANDARD TYPE, load cap: 200 staples min', '', 1),
(79, 'Stapler', 'STAPLER, BINDER TYPE, heavy duty, desktop', '', 1),
(80, 'Stapler', 'STAPLE REMOVER, PLIER-TYPE', '', 1),
(81, 'Tape dispenser', 'TAPE DISPENSER, TABLE TOP, for 24mm width tape', '', 1),
(82, 'Binding and Punching Machine ', 'BINDING AND PUNCHING MACHINE, binding cap: 50mm', '', 1),
(83, 'Calculator', 'CALCULATOR, compact, 12 digits', '', 1),
(84, 'Facsimile Machine', 'FACSIMILE MACHINE, uses thermal paper', '', 1),
(85, 'Cutting Machine', 'PAPER TRIMMER/CUTTING MACHINE, max paper size: B4', '', 1),
(86, 'Shredder', 'PAPER SHREDDER, cutting width: 3mm-4mm (Entry Level)', '', 1),
(87, 'Drum Cart', 'DRUM CART, BROTHER DR-3455 ', '', 1),
(88, 'Ink', 'INK CART, BROTHER LC67B, Black', '', 1),
(89, 'Ink', 'INK CART, BROTHER LC67HYBK, Black', '', 1),
(90, 'Toner', 'TONER CART, BROTHER DR-451CL, high yield 3000 pag', '', 1),
(91, 'Toner', 'TONER CART, BROTHER TN-456 BLACK, high yield 6500', '', 1),
(92, 'Toner', 'TONER CART, BROTHER TN-456 CYAN, high yield 6500', '', 1),
(93, 'Toner', 'TONER CART, BROTHER TN-456 MAGENTA, high yield 65', '', 1),
(94, 'Toner', 'TONER CART, BROTHER TN-456 YELLOW, high yield 650', '', 1),
(95, 'Toner', 'TONER CART, SAMSUNG ML-D2850B, Black', '', 1),
(96, 'Ink', 'INK CART, CANON CL-741, Col.', '', 1),
(97, 'Ink', 'INK CART, CANON CL-811, Colored', '', 1),
(98, 'Ink', 'INK CART, CANON PG-740, Black ', '', 1),
(99, 'Ink', 'INK CART, CANON PG-810, Black', '', 1),
(100, 'Ink', 'INK CART, EPSON C13T664100 (T6641), Black', '', 1),
(101, 'Ink', 'INK CART, EPSON C13T664200 (T6642), Cyan', '', 1),
(102, 'Ink', 'INK CART, EPSON C13T664300 (T6643), Magenta', '', 1),
(103, 'Ink', 'INK CART, EPSON C13T664400 (T6644), Yellow', '', 1),
(104, 'Ink', 'INK CART, HP C2P04AA (HP62) Black ', '', 1),
(105, 'Ink', 'INK CART, HP C2P06AA (HP62) Tri-color ', '', 1),
(106, 'Ink', 'INK CART, HP C9351AA, (HP21), Black', '', 1),
(107, 'Ink', 'INK CART, HP C9352AA, (HP22), Tri-color', '', 1),
(108, 'Ink', 'Ink Cartridge, HP C9397A (HP72) 69ml Photo Black', '', 1),
(109, 'Ink', 'Ink Cartridge, HP C9398A (HP72) 69ml Cyan', '', 1),
(110, 'Ink', 'Ink Cartridge, HP C9399A (HP72) 69ml Magenta', '', 1),
(111, 'Ink', 'Ink Cartridge, HP C9400A (HP72) 69ml Yellow', '', 1),
(112, 'Ink', 'Ink Cartridge, HP C9401A (HP72) 69ml Gray', '', 1),
(113, 'Ink', 'Ink Cartridge, HP C9403A (HP72) 130ml Matte Black', '', 1),
(114, 'Ink', 'INK CART, HP  CC640WA, (HP60),  Black', '', 1),
(115, 'Ink', 'INK CART, HP CC643WA, (HP60), Tri-color', '', 1),
(116, 'Ink', 'INK CART, HP CD887AA, (HP703), Black', '', 1),
(117, 'Ink', 'INK CART, HP CD888AA, (HP703), Tri-color', '', 1),
(118, 'Ink', 'INK CART, HP CD972AA, (HP 920XL), Cyan', '', 1),
(119, 'Ink', 'INK CART, HP CD973AA, (HP 920XL), Magenta', '', 1),
(120, 'Ink', 'INK CART, HP CD974AA, (HP 920XL), Yellow', '', 1),
(121, 'Ink', 'INK CART, HP CD975AA, (HP 920XL), Black', '', 1),
(122, 'Ink', 'INK CART, HP CH561WA, (HP61), Black', '', 1),
(123, 'Ink', 'INK CART, HP CH562WA, (HP61), Tricolor', '', 1),
(124, 'Ink', 'INK CART, HP CH565A (HP82) Black', '', 1),
(125, 'Ink', 'INK CART, HP CH566A (HP82) Cyan', '', 1),
(126, 'Ink', 'INK CART, HP CH567A (HP82) Magenta', '', 1),
(127, 'Ink', 'INK CART, HP CH568A (HP82) Yellow', '', 1),
(128, 'Ink', 'INK CART, HP CN045AA, (HP950XL), Black', '', 1),
(129, 'Ink', 'INK CART, HP CN046AA, (HP951XL), Cyan', '', 1),
(130, 'Ink', 'INK CART, HP CN047AA, (HP951XL), Magenta', '', 1),
(131, 'Ink', 'INK CART, HP CN048AA, (HP951XL). Yellow', '', 1),
(132, 'Ink', 'INK CART, HP CN692AA, (HP704), Black', '', 1),
(133, 'Ink', 'INK CART, HP CN693AA, (HP704), Tri-color', '', 1),
(134, 'Ink', 'INK CART, HP CZ107AA, (HP678), Black', '', 1),
(135, 'Ink', 'INK CART, HP CZ108AA, (HP678), Tricolor', '', 1),
(136, 'Ink', 'INK CART, HP CZ121A (HP685A), Black', '', 1),
(137, 'Ink', 'INK CART, HP CZ122A (HP685A), Cyan', '', 1),
(138, 'Ink', 'INK CART, HP CZ123A (HP685A), Magenta', '', 1),
(139, 'Ink', 'INK CART, HP CZ124A (HP685A), Yellow', '', 1),
(140, 'Ink', 'Ink Cartridge, HP F6V26AA (HP680) Tri-color', '', 1),
(141, 'Ink', 'Ink Cartridge, HP F6V27AA (HP680) Black', '', 1),
(142, 'Ink', 'Ink Cartridge, HP L0S51AA (HP955) Cyan Original', '', 1),
(143, 'Ink', 'Ink Cartridge, HP L0S54AA (HP955) Magenta Original', '', 1),
(144, 'Ink', 'Ink Cartridge, HP L0S57AA (HP955) Yellow Original', '', 1),
(145, 'Ink', 'Ink Cartridge, HP L0S60AA (HP955) Black Original', '', 1),
(146, 'Ink', 'Ink Cartridge, HP L0S63AA (HP955XL) Cyan Original', '', 1),
(147, 'Ink', 'Ink Cartridge, HP L0S66AA (HP955XL) Magenta Origin', '', 1),
(148, 'Ink', 'Ink Cartridge, HP L0S69AA (HP955XL) Yellow Origina', '', 1),
(149, 'Ink', 'Ink Cartridge, HP L0S72AA (HP955XL) Black Original', '', 1),
(150, 'Ink', 'Ink Cartridge, HP T6L89AA (HP905) Cyan Original', '', 1),
(151, 'Ink', 'Ink Cartridge, HP T6L93AA (HP905) Magenta Original', '', 1),
(152, 'Ink', 'Ink Cartridge, HP T6L97AA (HP905) Yellow Original', '', 1),
(153, 'Ink', 'Ink Cartridge, HP T6M01AA (HP905) Black Original', '', 1),
(154, 'Ribbon Cart', 'RIBBON CART, EPSON C13S015516 (#8750), Black', '', 1),
(155, 'Ribbon Cart', 'RIBBON CART, EPSON C13S015531 (S015086), Black', '', 1),
(156, 'Ribbon Cart', 'RIBBON CART, EPSON C13S015632, Black, forLX-310', '', 1),
(157, 'Toner', 'TONER CART, BROTHER TN-2025, Black', '', 1),
(158, 'Toner', 'TONER CART, BROTHER TN-2130, Black', '', 1),
(159, 'Toner', 'TONER CART, BROTHER TN-2150, Black', '', 1),
(160, 'Toner', 'TONER CART, BROTHER TN-3320, Black', '', 1),
(161, 'Toner', 'TONER CART,  BROTHER TN-3350, Black, for HL5450DN', '', 1),
(162, 'Toner', 'TONER CART, HP CB435A, Black', '', 1),
(163, 'Toner', 'TONER CART, HP CB540A, Black', '', 1),
(164, 'Toner', 'TONER CART, HP CE255A, Black', '', 1),
(165, 'Toner', 'TONER CART, HP CE278A, Black', '', 1),
(166, 'Toner', 'TONER CART, HP CE285A (HP85A), Black', '', 1),
(167, 'Toner', 'TONER CART, HP CE310A, Black', '', 1),
(168, 'Toner', 'TONER CART, HP CE311A, Cyan', '', 1),
(169, 'Toner', 'TONER CART, HP CE312A, Yellow', '', 1),
(170, 'Toner', 'TONER CART, HP CE313A, Magenta', '', 1),
(171, 'Toner', 'TONER CART, HP CE320A, Black', '', 1),
(172, 'Toner', 'TONER CART, HP CE321A, Cyan', '', 1),
(173, 'Toner', 'TONER CART, HP CE322A, Yellow', '', 1),
(174, 'Toner', 'TONER CART, HP CE323A, Magenta', '', 1),
(175, 'Toner', 'TONER CART, HP CE390A, Black', '', 1),
(176, 'Toner', 'TONER CART, HP CE400A, Black', '', 1),
(177, 'Toner', 'TONER CART, HP CE401A, Cyan', '', 1),
(178, 'Toner', 'TONER CART, HP CE402A, Yellow', '', 1),
(179, 'Toner', 'TONER CART, HP CE403A, Magenta', '', 1),
(180, 'Toner', 'TONER CART, HP CE410A, (HP305), Black', '', 1),
(181, 'Toner', 'TONER CART, HP CE411A, (HP305), Cyan', '', 1),
(182, 'Toner', 'TONER CART, HP CE412A, (HP305), Yellow', '', 1),
(183, 'Toner', 'TONER CART, HP CE413A, (HP305), Magenta', '', 1),
(184, 'Toner', 'TONER CART, HP CE505A, Black', '', 1),
(185, 'Toner', 'TONER CART, HP CE505X, Black, high cap', '', 1),
(186, 'Toner', 'Toner Cartridge, HP CF217A (HP17A) Black LaserJet', '', 1),
(187, 'Toner', 'Toner Cartridge, HP CF226A (HP26A) Black LaserJet', '', 1),
(188, 'Toner', 'Toner Cartridge, HP CF280A, LaserJet Pro M401/M425', '', 1),
(189, 'Toner', 'HP Toner CF280XC', '', 1),
(190, 'Toner', 'Toner Cartridge, HP CF281A (HP81A) Black LaserJet', '', 1),
(191, 'Toner', 'Toner Cartridge, HP CF283A (HP83A) LaserJet Black', '', 1),
(192, 'Toner', 'Toner Cartridge, HP CF283XC (HP83X) Blk Contract L', '', 1),
(193, 'Toner', 'Toner Cartridge, HP CF287A (HP87) black', '', 1),
(194, 'Toner', 'Toner Cartridge, HP CF325XC (HP25X) Black LaserJet', '', 1),
(195, 'Toner', 'Toner Cartridge, HP CF350A Black LJ', '', 1),
(196, 'Toner', 'Toner Cartridge, HP CF351A Cyan LJ', '', 1),
(197, 'Toner', 'Toner Cartridge, HP CF352A Yellow LJ', '', 1),
(198, 'Toner', 'Toner Cartridge, HP CF353A Magenta LJ', '', 1),
(199, 'Toner', 'Toner Cartridge, HP CF360A (HP508A) Black LaserJet', '', 1),
(200, 'Toner', 'Toner Cartridge, HP CF361A (HP508A) Cyan LaserJet', '', 1),
(201, 'Toner', 'Toner Cartridge, HP CF362A (HP508A) Yellow LaserJe', '', 1),
(202, 'Toner', 'Toner Cartridge, HP CF363A (HP508A) Magenta LaserJ', '', 1),
(203, 'Toner', 'Toner Cartridge, HP CF400A (HP201A) Black LaserJet', '', 1),
(204, 'Toner', 'Toner Cartridge, HP CF401A (HP201A) Cyan LaserJet', '', 1),
(205, 'Toner', 'Toner Cartridge, HP CF402A (HP201A) Yellow LaserJe', '', 1),
(206, 'Toner', 'Toner Cartridge, HP CF403A (HP201A) Magenta LaserJ', '', 1),
(207, 'Toner', 'Toner Cartridge, HP CF410A (HP410A) black', '', 1),
(208, 'Toner', 'Toner Cartridge, HP CF410XC (HP410XC) black', '', 1),
(209, 'Toner', 'Toner Cartridge, HP CF411A (HP410A) cyan', '', 1),
(210, 'Toner', 'Toner Cartridge, HP CF411XC (HP410XC) cyan', '', 1),
(211, 'Toner', 'Toner Cartridge, HP CF412A (HP410A) yellow', '', 1),
(212, 'Toner', 'Toner Cartridge, HP CF412XC (HP410XC) yellow', '', 1),
(213, 'Toner', 'Toner Cartridge, HP CF413A (HP410A) magenta', '', 1),
(214, 'Toner', 'Toner Cartridge, HP CF413XC (HP410XC) magenta', '', 1),
(215, 'Toner', 'TONER CART, HP Q2612A, Black', '', 1),
(216, 'Toner', 'TONER CART, HP Q7553A, Black', '', 1),
(217, 'Toner', 'TONER CART, SAMSUNG MLT-D101S, Black', '', 1),
(218, 'Toner', 'TONER CART, SAMSUNG MLT-D103S, Black', '', 1),
(219, 'Toner', 'TONER CART, SAMSUNG MLT-D104S, Black', '', 1),
(220, 'Toner', 'TONER CART, SAMSUNG MLT-D105L, Black', '', 1),
(221, 'Toner', 'TONER CART, SAMSUNG MLT-D108S, Black', '', 1),
(222, 'Toner', 'TONER CART, SAMSUNG MLT-D203E, Black', '', 1),
(223, 'Toner', 'TONER CART, SAMSUNG MLT-D203L, Black', '', 1),
(224, 'Toner', 'TONER CART, SAMSUNG MLT-D203U, black', '', 1),
(225, 'Toner', 'TONER CART, SAMSUNG MLT-D205E, Black', '', 1),
(226, 'Toner', 'TONER CART, SAMSUNG MLT-D205L, Black', '', 1),
(227, 'Toner', 'TONER CART, SAMSUNG SCX-D6555A, Black', '', 1),
(228, 'Toner', 'TONER CART, BROTHER TN-3478 Black', '', 1),
(229, 'Toner', 'TONER CART, CANON CRG 324 II', '', 1),
(230, 'Book', 'CLEARBOOK, 20 transparent pockets, for A4 size', '', 1),
(231, 'Book', 'CLEARBOOK, 20 transparent pockets, for LEGAL size', '', 1),
(232, 'Eraser', 'ERASER, PLASTIC/RUBBER, for pencil draft/writing', '', 1),
(233, 'Sign pen', 'SIGN PEN, BLACK, liquid/gel ink, 0.5mm needle tip', '', 1),
(234, 'Sign pen', 'SIGN PEN, BLUE, liquid/gel ink, 0.5mm needle tip', '', 1),
(235, 'Sign pen', 'SIGN PEN, RED, liquid/gel ink, 0.5mm needle tip', '', 1),
(236, 'Wrapping paper', 'WRAPPING PAPER, kraft, 65gsm (-5%)', '', 1),
(258, 'Flag', 'PHILIPPINE NATIONAL FLAG, 100% polyester', '', 7),
(259, 'Acetate', 'ACETATE, thickness: 0.075mm min (gauge #3)', '', 7),
(260, 'Tape', 'TAPE, ELECTRICAL, 18mm x 16M min', '', 7),
(261, 'Tape', 'TAPE, MASKING, width: 24mm (?1mm)', '', 7),
(262, 'Tape', 'TAPE, MASKING, width: 48mm (?1mm)', '', 7),
(263, 'Tape', 'TAPE, PACKAGING, width: 48mm (?1mm)', '', 7),
(264, 'Tape', 'TAPE, TRANSPARENT, width: 24mm (?1mm)', '', 7),
(265, 'Tape', 'TAPE, TRANSPARENT, width: 48mm (?1mm)', '', 7),
(266, 'Twine', 'TWINE, plastic, one (1) kilo per roll', '', 7),
(267, 'Broom', 'BROOM, soft (tambo)', '', 7),
(268, 'Broom', 'BROOM, STICK (TING-TING), usable length: 760mm min', '', 7),
(269, 'Broom', 'hand broom', '', 7),
(270, 'Cleaner', 'CLEANER,TOILET BOWL AND URINAL, 900ml-1000ml cap', '', 7),
(271, 'Cleaner', 'FURNITURE CLEANER, aerosol type, 300ml min per can', '', 7),
(272, 'Cleanser', 'CLEANSER, SCOURING POWDER, 350g min./can', '', 7),
(273, 'Dust pan', 'DUST PAN, non-rigid plastic, w/ detachable handle', '', 7),
(274, 'Mop', 'MOP BUCKET, heavy duty, hard plastic', '', 7),
(275, 'Mop', 'MOPHANDLE, heavy duty, aluminum, screw type', '', 7),
(276, 'Mop', 'MOPHEAD, made of rayon, weight: 400 grams min', '', 7),
(277, 'Rag', 'RAGS, all cotton, 32 pieces per kilogram min', '', 7),
(278, 'Scouring Pad', 'SCOURING PAD, 5 pieces per pack', '', 7),
(279, 'Hand Sanitizer', 'HAND SANITIZER, 500 ml', '', 4),
(280, 'Hand Sanitizer', 'HAND SANITIZER, 250 ml', '', 4),
(281, 'Hand Sanitizer', 'HAND SANITIZER, 1000 ml', '', 4),
(282, 'Alcohol', 'ALCOHOL, ethyl, 68%-72%, scented, 500ml (-5ml)', '', 4),
(283, 'Alcohol', 'ALCOHOL, ethyl, 68%-72%, scented, 3.785 liters', '', 4),
(284, 'Alcohol', 'ALCOHOL, isopropyl, 68%- 72%, 500ml (-5ml)', '', 4),
(285, 'Alcohol', 'ALCOHOL, isopropyl, 68%-72%, scented, 3.785 liters', '', 4),
(286, 'Iodine', 'POVIDONE IODINE, 10 % solution, 120 ml', '', 4),
(287, 'THERMOGUN', 'THERMOGUN', '', 4),
(288, 'Coverall', 'COVERALL, non-sterile, protective, medical grade', '', 4),
(289, 'Face Shield', 'FACE SHIELD, direct splash protection', '', 4),
(290, 'Googles', 'PROTECTIVE SAFETY GOGGLES', '', 4),
(291, 'Apron', 'Polyethylene Apron (50g)', '', 4),
(292, 'SURGICAL GOWN', 'SURGICAL GOWN', '', 4),
(293, 'Cover', 'HEAD COVER, disposable', '', 4),
(294, 'Cover', 'SHOE COVER, disposable', '', 4),
(295, 'Gloves', 'NITRILE GLOVES', '', 4),
(296, 'Gloves', 'PREMIUM LATEX GLOVES', '', 4),
(297, 'Mask', 'SURGICAL MASK, 3-ply', '', 4),
(298, 'Mask', 'KN95 FACE MASK', '', 4),
(299, 'Electric Fan', 'ELECTRIC FAN, INDUSTRIAL, ground type, metal blade', '', 10),
(300, 'Electric Fan', 'ELECTRIC FAN, ORBIT type, ceiling,  metal blade', '', 10),
(301, 'Electric Fan', 'ELECTRIC FAN, STAND type, plastic blade', '', 10),
(302, 'Electric Fan', 'ELECTRIC FAN, WALL type, plastic blade', '', 10),
(303, 'Binding and Punching Machine ', 'BINDING AND PUNCHING MACHINE, binding cap: 50mm', '', 10),
(304, 'Facsimile Machine', 'FACSIMILE MACHINE, uses thermal paper', '', 10),
(305, 'Cutting Machine', 'PAPER TRIMMER/CUTTING MACHINE, max paper size: B4', '', 10),
(306, 'Shredder', 'PAPER SHREDDER, cutting width: 3mm-4mm (Entry Level)', '', 10),
(307, 'Projector', 'MULTIMEDIA PROJECTOR, 4000 min ANSI Lumens', '', 10),
(308, 'Fire extiguisher', 'FIRE EXTINGUISHER, DRY CHEMICAL, 4.5kgs', '', 10),
(309, 'Fire extiguisher', 'FIRE EXTINGUISHER, PURE HCFC 123, 4.5kgs', '', 10),
(310, 'Desktop', 'MITHI DESKTOP, basic', '', 11),
(311, 'Desktop', 'MITHI DESKTOP, mid-range', '', 11),
(312, 'Desktop', 'MITHI LAPTOP, mid-range', '', 11),
(313, 'External Drive', 'EXTERNAL HARD DRIVE, 1TB, 2.5\"HDD, USB 3.0', '', 11),
(314, 'Printer', 'PRINTER, IMPACT DOT MATRIX, 24 pins, 136 column', '', 11),
(315, 'Printer', 'PRINTER, IMPACT DOT MATRIX, 9 pins, 80 columns', '', 11),
(316, 'Printer', 'PRINTER, laser, monochrome', '', 11),
(317, 'Printer', 'PRINTER, laser, colored', '', 11),
(318, 'Camera', 'DOCUMENT CAMERA', '', 12),
(319, 'Voice Recorder', 'DIGITAL VOICE RECORDER, memory: 4GB (expandable)', '', 12),
(320, 'Chair', 'CHAIR, monobloc, beige, with backrest, w/o armrest', '', 17),
(321, 'Chair', 'CHAIR,monobloc, white, with backrest, w/o armrest', '', 17),
(322, 'Table', 'TABLE, MONOBLOC, WHITE, 889 x 889mm (35\" x 35\")min', '', 17),
(323, 'Table', 'TABLE, MONOBLOC, BEIGE, 889 x 889mm (35\" x 35\")min', '', 17),
(326, 'Broom', 'Heavy duty broom, plastic bristle', '', 17),
(327, 'Dustpan', 'Heavy duty dustpan', '', 17),
(328, 'Broom', 'Heavy duty hand broom, plastic bristle', '', 17),
(329, 'Mask', 'Surgical Facemask, 50pcs', '', 4),
(330, 'Mask', 'N95 facemask', '', 4),
(335, 'Advocacy Materials', 'CY 2021 Planner', '', 22),
(336, 'Bond Paper', 'Bond paper , A4', '', 1),
(337, 'Folder', 'Folder , long', '', 1),
(338, 'Toner', 'TONER, HP 85A', '', 1),
(339, 'Advocacy Materials', 'Advocacy Materials', '', 22),
(340, 'VEST', 'DSWD VEST\n- color: red\n- logo: embroidered logo\n- design: with pockets & tucked hood', '', 22),
(341, 'Utensil', 'Spoon and Fork', '', 7),
(342, 'Glass', 'Transparent Glass', '', 7),
(343, 'Glass', 'Cup & saucer, glass', '', 7),
(344, 'Bowl', 'Bowl', '', 7),
(345, 'Utensil', 'Teaspoon', '', 7),
(346, 'Plates', 'Plates', '', 7),
(347, 'Blazer', 'DSWD Blazer', '', 22),
(348, 'Vitamin C', 'Vitamin C (10pcs/tube)\nEach tablet contains:\n> Vitamin B1 (Thiamine Hydrochloride) (as thiamine phosphate acid ester dihydrate)\n> Vitamin B2 (Riboflavin) (as riboflavin sodium phosphate)\n> Vitamin B3 (Nicotinamide)\n> Vitamin B5 (Pantothenic acid) (as calcium pantothenate)\n> Vitamin B6 (Pyridoxine hydrochloride)\n> Vitamin B12 (Cyanocobalamin)\n> Vitamin C (Ascorbic Acid)\n> Vitamin H (Biotin)\n> Folic Acid\n> Calcium (as calcium carbonate and calcium pantothenate)\n> Magnesium (as magnesium carbonate and magnesium sulfate dihydrate)\n> Zinc (as zinc citrate trihydrate)', '', 3),
(350, 'Ballpen', 'Ordinary, ballpen, black', '07-COS-010', 1),
(351, 'Crayon', '16 colors crayon', '', 1),
(352, 'Eraser', 'Pencil Eraser', '', 1),
(353, 'Board', '1/2 Illustration Board', '', 1),
(354, 'Pencil', 'HP pencil, 0.5', '', 1),
(356, 'Pencil', 'Pencil eraser', '', 1),
(357, 'Cereal', 'Powdered Cereal Drink (26-32 gram)(240 sachet/box)', '', 2),
(358, 'Canned', 'Canned Tuna (Flakes in oil 155 x 50 tins), assorted brand canned tuna flakes in oil, easy-open, HALAL certified. Expiry date not less than two (2) years from date of delivery', '', 2),
(359, 'Canned', 'Canned corned beef (150g)(155g x 100tins), assorted brand canned corned beef or carne norte, easy-open, HALAL certified. Expiry date not less than two (2) years from date of delivery', '', 2),
(360, 'Tape', 'Transparent tape (0.48 x 2inch x100m)', '', 20),
(361, 'Boxes', 'Empty Boxes', '', 20),
(362, 'Cellophane', 'Transparent cellophane', '', 20),
(363, 'RICE', 'NFA RICE', '', 20),
(364, 'Tuna', 'Tuna', '', 20),
(365, 'Corned Beef', 'Corned Beef, luck 7', '', 20),
(366, 'Sardines', 'Sardines(vinta)', '', 20),
(367, 'Coffee', 'Coffee', '', 20),
(368, 'Cereal', 'Cereal', '', 20),
(369, 'Rice Bag', 'Rice Bag(6kls)', '', 20),
(370, 'FAMILY FOOD PACKS', 'FAMILY FOOD PACKS(6kls rice, 4 Tins Tuna Flakes, 4 Tins Corned Beef 2 Tins Sardines, 5 Sachets Coffee, and 5 Sachets Cereal)', '', 18),
(371, 'Umbrella', 'Color Black, Size XL with print', '', 7),
(372, 'Prednisone', '40mg tab', '', 3),
(373, 'Co-amoxiclav', '625mg tab', '', 3),
(374, 'Air Freshener', 'General', '', 7),
(375, 'Broom', 'General', '', 7),
(376, 'Disinfectant Spray', 'General', '', 7),
(377, 'Insecticide', 'General', '', 7),
(378, 'Mophead', 'General', '', 7),
(379, 'Floorwax', 'General', '', 7),
(380, 'Dishwashing Paste', 'General', '', 7),
(381, 'Feather Duster', 'General', '', 7),
(382, 'Glass Cleaner', 'General', '', 7),
(383, 'Bleach', 'Liquid Bleach', '', 7),
(384, 'Mop', 'General', '', 7),
(385, 'Toilet Deodorizing cake', 'General', '', 7),
(386, 'Trash Bag', 'Plastic', '', 7),
(387, 'Trash Bag', 'XL, 30 x 36', '', 7),
(388, 'Tiles Floor Cleaner', 'General', '', 7),
(389, 'Wall Cleaner', 'General', '', 7),
(390, 'Phenylephrine+Bromphenamine', '500mg tab', '', 3),
(391, 'Cefalexin', '100s tab', '', 3),
(392, 'Amoxicillin', '500mg tab (100s)', '', 3),
(393, 'Amoxicillin', '250mg syrup', '', 3),
(394, 'Cefuroxime', '500mg', '', 3),
(395, 'Aluminum Magnesium', '500mg tab', '', 3),
(396, 'hyocine', '10mg tab', '', 3),
(397, 'Salbutamol', '2mg tab', '', 3),
(398, 'Cetirizine', '10mg tab', '', 3),
(399, 'Ascorbic Acid', '500mg tab', '', 3),
(400, 'Multivitamins', '500mg tab', '', 3),
(401, 'Cefixime', '200mg', '', 3),
(402, 'Domperidone', 'General tab', '', 3),
(403, 'Ferrous Sulfate', 'General', '', 3),
(404, 'Calcium Carbonate', 'General', '', 3),
(405, 'Bedsheets', 'General', '', 7),
(406, 'Blanket', 'General', '', 7),
(407, 'Cloth', '50m/roll', '', 7),
(408, 'Pillow Case', 'General', '', 7),
(409, 'Table Cloth', 'General', '', 7),
(410, 'Curtains', 'Assorted Color', '', 7),
(411, 'Sauce', 'Meat Sauce, 380g', '', 2),
(412, 'Tableya', 'General', '', 2),
(413, 'Coffee', '3 in 1, 29g/24s', '', 2),
(414, 'Spread', 'Cheese Spread, 470ml', '', 2),
(415, 'Milk', 'Evaporated Milk, 410ml', '', 2),
(416, 'Pasta', 'Macaroni Pasta, 1000g', '', 2),
(417, 'Light', 'Decoration Light (Colored)', '', 7),
(418, 'Balls', 'Decoration Balls, Large Size', '', 7),
(419, 'Flowers', 'Poinsettia Flowers, Large Size', '', 7),
(420, 'Wreath', 'Decoration Wreath', '', 7),
(421, 'Sterilizer', 'UV Sterilizer', '', 10),
(422, 'Zapper', 'Indoor insect and mosquito zapper', '', 10),
(423, 'Wheelchair', 'Adult wheelchair, heavy duty, stainless', '', 4),
(424, 'Wheelchair', 'Pedia wheelchair, heavy duty, stainless', '', 4),
(425, 'Crutches', 'Stainless crutches', '', 4),
(426, 'Cane', 'White cane', '', 4),
(427, 'Walker', 'General', '', 4),
(428, 'Television', 'Television, 32-inch, full HD, Smart TV', '', 10),
(429, 'Aircon', 'Aircon, 1 HP, window type', '', 10),
(430, 'Utensil', 'Stainless steel spoon and forks as set or pair', '', 7),
(431, 'Glass', 'Cups and saucers in set', '', 7),
(432, 'Knives', 'Knives set w/ wooden stand storage', '', 7),
(433, 'Table', 'Office table (wooden with drawer)', '', 17),
(434, 'Chair', 'Office chair (swivel mesh chair, steel base with permanently arm rest)', '', 17),
(435, 'Margarine', 'General', '', 2),
(436, 'Chocolate', 'Unsweetened', '', 2),
(437, 'Raisins', '200g', '', 2),
(438, 'Milk', 'Milk powder, 900g', '', 2),
(439, 'Sinigang Mix', '70g', '', 2),
(440, 'Sauce', 'Soy sauce, 3.785ml', '', 2),
(441, 'Pasta', 'Spaghetti Pasta, 1000g', '', 2),
(442, 'Sugar', 'White Sugar, 1000g', '', 2),
(443, 'Sugar', 'Brown Sugar, 1000g', '', 2),
(444, 'Corn', 'Young Corn Whole, 410g', '', 2),
(445, 'Vinegar', '3.785ml', '', 2),
(446, 'Black Pepper', 'Black Pepper, ground, 35g', '', 2),
(447, 'Laurel', 'General', '', 2),
(448, 'Black Pepper', 'Black Pepper, Whole, 35g', '', 2),
(449, 'Baking Soda', 'General', '', 2),
(450, 'Vanilla', '8g', '', 2),
(451, 'Wrap', 'Vegetable Wrap, 20m', '', 2),
(452, 'Oil', 'Cooking Oil, 17kl', '', 2),
(453, 'Sauce', 'Tomato Sauce, 1kl', '', 2),
(454, 'Nata de Coco', '680g', '', 2),
(455, 'Kaong', '680g', '', 2),
(456, 'Patis', 'General', '', 2),
(457, 'Pineapple', 'Pineapple Crush, 822g', '', 2),
(458, 'Pineapple', 'Tidbits, 822g', '', 2),
(459, 'Pineapple', 'Pineapple Juice, 1/2gal. four season', '', 2),
(460, 'Mushroom', 'Mushroom Soup Powder, 70g', '', 2),
(461, 'Mushroom', 'Mushroom Whole, 400g', '', 2),
(462, 'Green Peas', 'Green Peas, 410g', '', 2),
(463, 'Rice', 'Commercial Rice, Premium', '', 2),
(464, 'Rice', 'Rice Pilit, Premium', '', 2),
(465, 'Rice', 'Rice Tapol, Premium', '', 2),
(466, 'Biscuits', 'Assorted Biscuits', '', 2),
(467, 'POSTER COLOR', 'GENERAL', '', 1),
(468, 'BRUSH', 'PAINT BRUSH', '', 1),
(469, 'FOLDER', 'EXPANDABLE FOLDER, maroon', '', 1),
(470, 'Underwear', 'Underwear, Ladies, small', '', 7),
(471, 'Underwear', 'Underwear, Ladies, medium', '', 7),
(472, 'Underwear', 'Underwear, Ladies, Large', '', 7),
(473, 'Underwear', 'Underwear, men, small', '', 7),
(474, 'T-shirt', 'T-shirt, small', '', 7),
(475, 'T-shirt', 'T-shirt, medium', '', 7),
(476, 'T-shirt', 'T-shirt, large', '', 7),
(477, 'Pajama', 'Pajama, small', '', 7),
(478, 'Pajama', 'Pajama, medium', '', 7),
(479, 'Pajama', 'Pajama, large', '', 7),
(480, 'Bra', 'Baby bra', '', 7),
(481, 'Bra', 'Bra, assorted size', '', 7),
(482, 'Porontong', 'General', '', 7),
(483, 'Underwear', 'Panty, children', '', 7),
(484, 'Underwear', 'Pantylettes', '', 7),
(485, 'Blouse', 'Blouse, assorted size', '', 7),
(486, 'Pants', 'Pants, assorted size', '', 7),
(487, 'Towel', 'Bath towel', '', 7),
(488, 'Sando', 'General', '', 7),
(489, 'Bag', 'Sako bag', '', 7),
(490, 'Dress', 'General', '', 7),
(491, 'Detergent', 'Detergent bar', '', 7),
(492, 'Detergent', 'Detergent powder', '', 7),
(493, 'Dishwashing', 'Dishwashing liquid', '', 7),
(494, 'Fabric Conditioner', 'General', '', 7),
(495, 'Rags', 'General', '', 7),
(496, 'Cleaner', 'Toilet bowl and urinal cleaner', '', 7),
(497, 'Dustpan', 'General', '', 7),
(498, 'LPG', 'LPG Gasul w/tank,11kg', '', 7),
(499, 'Regulator', 'Regulator Gasul-full bulb', '', 7),
(500, 'Hose', 'Gasul hose Stainless', '', 7),
(501, 'Toothbrush', 'General', '', 7),
(502, 'Shampoo', 'Shampoo bottle,90ml', '', 7),
(503, 'Soap', 'Bath Soap, 90g', '', 7),
(504, 'Albatross', 'Albatross w/handle', '', 7),
(505, 'Toothpaste', 'Toothpaste,70gm (tube)', '', 7),
(506, 'Shampoo', 'Lice, shampoo, 60ml', '', 7),
(507, 'Tawas', 'Tawas powder', '', 7),
(508, 'Pads', 'Hot pads', '', 7),
(509, 'Brooms', 'Stick brooms', '', 7),
(510, 'Gloves', 'Plastic gloves', '', 7),
(511, 'Lysol', 'Lysol, 510ml', '', 7),
(512, 'Hairnet', 'General', '', 7),
(513, 'Mop Handle', 'General', '', 7),
(514, 'Hanger', 'Panty Hanger', '', 7),
(515, 'Diaper', 'Disposable diaper, medium(64/pack)', '', 7),
(516, 'Diaper', 'Disposable Diaper, small (64/pack)', '', 7),
(517, 'Deodorant', 'Deodorant, sachet', '', 7),
(518, 'Handwash', 'Handwash 225ml', '', 7),
(519, 'Cleanser', 'Cleanser powder 500ml', '', 7),
(520, 'Wrapper', 'Ice Wrapper', '', 7),
(521, 'Safety match', 'General', '', 7),
(522, 'Napkin', 'Napkin w/ wings', '', 7),
(523, 'Scouring', 'Scouring pad w/ foam-doz', '', 7),
(524, 'Scouring', 'Scouring balls- doz', '', 7),
(525, 'Holder', 'Pot holder', '', 7),
(526, 'Apron', 'General', '', 7),
(527, 'Hanger', 'General', '', 7),
(528, 'Chair', 'Office Chair ( swivel, steel base w/ armrest)', '', 17),
(529, 'Table runner', 'General', '', 7),
(532, 'Platform', 'Heavy Duty Steel Platform', '', 10),
(533, 'Ladder', 'Heavy Duty Steel Ladder, 12ft.', '', 10),
(534, 'Scanner', 'Portable Scanner (Brother DS-720D)', '', 11),
(535, 'Refrigerator', 'Non-frost, Sharp Silver', '', 10),
(536, 'Wheelchair', 'Adult', '', 24),
(537, 'Wheelchair', 'Pedia', '', 24),
(538, 'Crutches', 'General', '', 24),
(539, 'Cane', 'White cane', '', 24),
(540, 'Walker', 'General', '', 24),
(541, 'Wheelchair', 'Adult wheelchair, heavy duty, stainless', '', 24),
(542, 'Wheelchair', 'Pedia wheelchair, heavy duty, stainless', '', 24),
(543, 'Crutches', 'Stainless crutches', '', 24),
(544, 'Welding Machine', 'Portable Welding Machine 200 amp. Mitsuden', '', 9),
(545, 'Compressor Tee', 'Compressor Tee ga. 1/2', '', 25),
(546, 'Tile Grout', 'White, 2kls/pack', '', 25),
(547, 'Door knob', 'Door knob good quality', '', 25),
(548, 'Faucet', 'Lavatory Faucet, good quality 1/2', '', 25),
(549, 'Plug', 'GI Plug, 1/2', '', 25),
(550, 'Valve', 'GI Gate Valve, 3/4 good quality', '', 25),
(551, 'Valve', 'GI Gate Valve, 1/2 good quality', '', 25),
(552, 'Valve', 'GI Gate Valve, 1 good quality', '', 25),
(553, 'Valve', 'Angle Valve Brass, 1/2 good quality', '', 25),
(554, 'Hose', 'Lavatory Flexible Hose, 1/2 x 12 good quality', '', 25),
(555, 'Valve', 'PVC Gate Valve, 1/2 good quality', '', 25),
(556, 'Compressor Coupling', 'PE Compressor Coupling, 1/2 good quality', '', 25),
(557, 'Elbow', 'PVC Elbow, blue, 1/2 good quality', '', 25),
(558, 'Connector', 'PVC Connector, Blue, 1/2 good quality', '', 25),
(559, 'Handle', 'PVC Handle Fush Bowl', '', 25),
(560, 'Repair Kit', 'Repair kit, General', '', 25),
(561, 'Blade', 'Hacksaw Blade', '', 25),
(562, 'Vulcaseal', 'Vulcaseal, General', '', 25),
(563, 'Plug', 'Water Plug (Davies Mortaflex Waterproofing)', '', 25),
(564, 'Mighty Bond', 'Mighty Bond, General', '', 25),
(565, 'Contact Cement', 'Emerald PVC Contact Cement, 400 cc (Alasco Solvent Cement)', '', 25),
(566, 'Welding Handle', 'Welding Handle Jackson', '', 9),
(567, 'Pipe', 'PE Pipe, 1/2 sdr 11 (150m per roll) (cutting)', '', 25),
(568, 'Grinder', 'Electrical Grinder #4 good quality', '', 9),
(569, 'Adaptor', 'PVC Electrical Male Adaptor w/ Locknut, 1/2', '', 25),
(570, 'Adaptor', 'PVC Electrical Male Adaptor w/ Locknut, 3/4', '', 25),
(571, 'Switch', 'Flush type 2 gang switch, good quality', '', 25),
(572, 'Switch', 'Flush type 1 gang switch, good quality', '', 25),
(573, 'Switch', 'Flush type 3 gang switch, good quality', '', 25),
(574, 'Outlet', 'Flush type 2 gang outlet, good quality', '', 25),
(575, 'Outlet', 'Flush type 3 gang outlet, good quality', '', 25),
(576, 'Switch', 'Switch box surface type', '', 25),
(577, 'Receptacle', 'PVC receptacle, 4 x 4', '', 25),
(578, 'Bulb', 'Omni LED light bulb, 12w DL', '', 25),
(579, 'Starter', 'Fluorescent starter, 4-80 watts', '', 25),
(580, 'Solvent Cement', 'Solvent cement, good quality', '', 25),
(581, 'Butane', 'Butane gas', '', 25),
(582, 'Plug', 'Male plug rubber, heavy duty', '', 25),
(583, 'Plug', 'Male plug, 10a, plastic', '', 25),
(584, 'Outlet', 'Spring type outlet, 4 gang', '', 25),
(585, 'Outlet', 'Spring type outlet, 3 gang', '', 25),
(586, 'Connector', 'PVC electric connector 1/2', '', 25),
(587, 'Rod', 'Fuji welding rod, 12', '', 25),
(588, 'Tube', 'Ecolum LED tube, 16w (5w)', '', 25),
(589, 'Ballast', 'Ecolum ballast, 40w', '', 25),
(590, 'Tube', 'Fluorescent tube ,4w, good quality', '', 25),
(591, 'Bench Vise', 'Bench vise, General', '', 9),
(592, 'Outlet', 'Aircon outlet, flush type', '', 25),
(593, 'Extension Wires', 'Extension wires, 5 meters', '', 9),
(596, 'Tube', 'Fluorescent tube, 18watts w/ assembly', '', 25),
(597, 'Tube', 'Fluorescent tube, 36watts w/ assembly', '', 25),
(599, 'Blood Pressure Machine', 'Blood pressure machine, digital', '', 13),
(600, 'Bed', 'Hospital bed', '', 17),
(601, 'Thermometer', 'Digital thermometer', '', 13),
(602, 'Thermal', 'Thermal scanner', '', 13),
(603, 'Wheelchair', 'Wheelchair, General', '', 16),
(604, 'Toner', 'Brother toner TN-2280, black', '', 21),
(605, 'Toner', 'HP laserjet CE285 AC toner, black', '', 21),
(606, 'Bond Paper', 'Short, bond paper', '', 21),
(607, 'Folder', 'Expanded folder, long', '', 21),
(608, 'Bond Paper', 'Legal, bond paper', '', 21),
(609, 'Imaging Unit', 'Imaging unit (A1XU-R700-33)', '', 27),
(610, 'Drum', 'Drum DR114', '', 27),
(611, 'Developer', 'Developer DV116', '', 27),
(612, 'Roller', 'Transfer Roller (A0XX-PP6H-00)', '', 27),
(613, 'Toner', 'Kyocera 3035/4050/5050 (PPT toner)', '', 1),
(614, 'Ink', 'Risograph ink', '', 1),
(615, 'Toothpaste', 'Toothpaste, 214gm', '', 7),
(616, 'Shampoo', 'Shampoo, 180ml', '', 7),
(617, 'Soap', 'Baby soap, moisturizing, 100g', '', 7),
(618, 'Shampoo', 'Shampoo, baby, 100g', '', 7),
(619, 'Lotion', 'Baby lotion, 200ml', '', 7),
(620, 'Wipes', 'Wipes, 80sheets', '', 7),
(621, 'Diaper', 'Disposable diaper, medium, 60s', '', 7),
(622, 'Diaper', 'Disposable diaper, large, 48s', '', 7),
(623, 'Diaper', 'Disposable diaper, XL, 48s', '', 7),
(624, 'Diaper', 'Disposable diaper, XXL, 48s', '', 7),
(625, 'Cleaner', 'All around cleaner, multipurpose', '', 7),
(626, 'Cleaner', 'Glass cleaner, 500ml', '', 7),
(627, 'Spray', 'Insect Spray, 500ml, odorless', '', 7),
(628, 'Dishwashing paste', 'Dishwashing paste, 400g', '', 7),
(629, 'Soap', 'Laundry powder soap, 1000g', '', 7),
(630, 'Bleach', 'Laundry bleach, 1 gal.', '', 7),
(631, 'Alcohol', 'Alcohol, ethyl, 70% solution, 500ml', '', 4),
(632, 'Soap', 'Detergent bar soap', '', 7),
(633, 'Scotch brite', 'Scotch brite, heavy duty', '', 7),
(634, 'Fabric Conditioner', 'Fabric conditioner, 800ml', '', 7),
(635, 'Liquid Sosa', 'Liquida sosa, 500ml', '', 7),
(636, 'Air Freshener', 'Air Freshener, 320ml', '', 7),
(637, 'Air Diffuser', 'Air diffuser, refill', '', 7),
(638, 'Lotion', 'Off lotion, insect repellant, 100ml', '', 7),
(639, 'Clip', 'Cloth clip', '', 7),
(640, 'SMART PHONE', 'SMART PHONE, (REALME C15), RAM 4G, ROM 64G', '', 12),
(641, 'Oitment', 'Bioderm Oitment, 15g', '', 3),
(642, 'Nystatin', 'Nystatin drops', '', 3),
(643, 'Vitamin C', 'Vitamin C syrup', '', 3),
(644, 'Celixime', 'Celixime syrup, 30ml. 100/5', '', 3),
(645, 'Phenylephrine', 'Phenylephrine syrup', '', 3),
(646, 'Bonamine', 'Bonamine tablet', '', 3),
(647, 'Metaclopromide', 'Metaclopromide tablet', '', 3),
(648, 'Mebendazole', 'Mebendazole, 500mg.tab', '', 3),
(649, 'Metronidazole', 'Metronidazole,500mg.tab', '', 3),
(650, 'Oresol', 'Oresol,hydrite sachet', '', 3),
(651, 'Salbutamol', 'Salbutamol nebule', '', 3),
(652, 'Salinase', 'Salinase nasal spray,drop', '', 3),
(653, 'Tetanus', 'Tetanus toxoid amp', '', 3),
(654, 'Hydrocartism', 'Hydrocartism, 100g vial', '', 3),
(655, 'Hyosine', 'Hyosine-N-B amp number 3', '', 3),
(656, 'Zinc', 'Zinc Vita,250ml', '', 3),
(657, 'Symdex-D', 'Symdex-D, 15ml', '', 3),
(658, 'Symdex-D', 'Symdex-D, 60ml', '', 3),
(659, 'Symdex-D', 'Symdex-D, capsules', '', 3),
(660, 'Paracetamol', 'Paracetamol, 500mg tablets', '', 3),
(661, 'Mefenamic Acid', 'Mefenamic Acid, 50mg/5ml syrup', '', 3),
(662, 'Diphenhydramine', 'Diphenhydramine, 50mg capsules', '', 3),
(663, 'Hyoscine', 'Hyoscine N-Butylbromide', '', 3),
(664, 'Cetrizine', 'Cetrizine, 10mg tablets', '', 3),
(665, 'Carbocisteine', 'Carbocisteine, 500mg capsules', '', 3),
(666, 'Paracetamol', 'Paracetamol drops', '', 3),
(667, 'Cefaclor', 'Cefaclor, suspension', '', 3),
(668, 'Cefuroxime', 'Cefuroxime, 500mg capsule', '', 3),
(669, 'Cefalexin', 'Cefalexin, 500mg', '', 3),
(670, 'Cefalexin', 'Cefalexin, general', '', 3),
(671, 'Coamoxyclav', 'Coamoxyclav,62mg tablets', '', 3),
(672, 'Oresol', 'Oresol Hydrite, 20 sachets', '', 3),
(673, 'Vitamin B', 'Vitamin B Complex', '', 3),
(674, 'Erceflora', 'Erceflora Nebule', '', 3),
(675, 'Lagundi', 'Lagundi syrup', '', 3),
(676, 'Prednisone', 'Prednisone, 20mg tablet', '', 3),
(677, 'Prednisone', 'Prednisone, syrup', '', 3),
(678, 'Calmoseptine', 'Calmoseptine Ointment', '', 3),
(679, 'Bethamethasone', 'Bethamethasone Cream', '', 3),
(680, 'Mupirocin', 'Mupirocin Ointment, 20mg/ 5g', '', 3),
(681, 'Silver Sulfadiazine', 'Silver Sulfadiazine', '', 3),
(684, 'Cotton', 'Cotton balls, 300pcs', '', 4),
(685, 'Thermometer', 'Digital Thermometer', '', 4),
(686, 'Oximeter', 'Pulse Oximeter', '', 4),
(687, 'Aneroid', 'Aneroid BP Syphmomanometer w/ Stethoscope', '', 4),
(688, 'Soap', 'Bath Soap, 85g', '', 7),
(689, 'Tape', 'Electrical Tape', '', 1),
(690, 'Cabinet', 'Steel Cabinet', '', 17),
(691, 'Refrigerator', 'Refrigerator (non-frost)', '', 10),
(692, 'Modem', '4G LTE openline modem [TPLink Archer MR200 AC750 Wireless Dual Band 4G LTE Router]', '', 10),
(693, 'Notebook', 'Notebook, General', '', 23),
(694, 'Ballpoint pen', 'Ballpoint pen, 0.5 (black)', '', 23),
(695, 'Envelope', 'Expanded envelope', '', 23),
(696, 'Bond paper', 'Bond paper, A4', '', 23),
(697, 'Frame', 'Certificate frame', '', 23),
(698, 'Stapler', 'Heavy duty stapler, 23/6 - 23/23', '', 23),
(699, 'Staple wire', 'Staple wire, 23/6 - 23/-23', '', 23),
(700, 'Flash drive', 'Flash Drive, USB 3.0 512GB. OTG', '', 11),
(701, 'Cable', 'HDMI cable, 20 meters', '', 11),
(702, 'Mouse', 'Mouse, wireless, 3 button (1x wheel)', '', 1),
(703, 'Extension wire', 'Extension wire, standard size', '', 16),
(704, 'Printer', 'Printer, with feeder and scanner', '', 11),
(705, 'Ink', 'Ink, Brother BT5000C, Cyan', '', 1),
(706, 'Ink', 'Ink, Brother BT5000M, Magenta', '', 1),
(707, 'Ink', 'Ink, Brother BT5000Y, Yellow', '', 1),
(708, 'Ink', 'Ink, Brother BT6000BK, Black', '', 1),
(709, 'Toner', 'TONER, black, HP M127', '', 1),
(710, 'Toner', 'TONER, black, HP M26 A', '', 1),
(711, 'Marker', 'Permanent marker, black', '', 23),
(712, 'Ink', 'Epson Ink, 4 colors (not refill)', '', 23),
(713, 'Paper', 'Certificate paper, 10pcs/pack', '', 23),
(715, 'Ballpen', 'Ballpen, black', '', 1),
(716, 'Correction tape', 'Correction tape, general', '', 1),
(717, 'Marker', 'Permanent marker', '', 1),
(718, 'Cartolina', 'Cartolina, general', '', 1),
(719, 'Highlighter', 'Highlighter pen', '', 1),
(720, 'Macrame Rope', 'Macrame Rope Twisted String Cotton Cord for handmade natural beige rope, DIY accessories 50/65/100 mtrs.', '', 7),
(721, 'Notebook', 'Notebook, 80 pages', '', 7),
(722, 'Envelope', 'Long brown envelope', '', 7),
(723, 'Cutter', 'Paper Cutter', '', 10),
(724, 'Extension wire', 'Extension wire, 10 mtrs. 3 sockets', '', 16),
(725, 'Water Dispenser', 'Water Dispenser w/ bottom storage', '', 10),
(726, 'Camera', 'Web Camera (A4 Tech 1080p)', '', 12),
(727, 'Headphone', 'Headphone (Edifier K800 - USB port)', '', 12),
(728, 'Table', 'Dining table, 6 seater made of wood, good quality', '', 17),
(729, 'Table', 'Conference table, 10 seater capacity, made of pressure board', '', 17),
(730, 'Table', 'Laminated office table', '', 17),
(731, 'Chair', 'Wooden dining chairs, made of wood, good quality', '', 17),
(732, 'Chair', 'Swivel office chair w/ rollers', '', 17),
(733, 'Shelves', 'Pantry shelves w/cover', '', 17),
(734, 'Cabinet', 'Steel filing cabinets, 4 layers', '', 17),
(735, 'Sofa', '4 seater sofa set, leatherette, color light gray', '', 17),
(736, 'Pajama', 'Pajama with blouse, size: small', '', 7),
(737, 'Pajama', 'Pajama with blouse, size: medium', '', 7),
(738, 'Pajama', 'Pajama with blouse, size: large', '', 7),
(739, 'Shoes', 'Rubber shoes', '', 7),
(740, 'Printer', 'Printer, ink tank, all in one w/ scanner, feeder (Brother DCP-T420W refill tank printer)', '', 11),
(741, 'Cabinet', 'Labor and Materials - CABINET w/ shelves', '', 17),
(742, 'Canned', 'Corned beef, 215', '', 2),
(743, 'Canned', 'Sardines', '', 2),
(744, 'Canned', 'Tuna flakes, 155g', '', 2),
(745, 'Canned', 'Beef loaf, 215g', '', 2),
(746, 'Canned', 'Luncheon meat, 360g', '', 2),
(747, 'Canned', 'Sausage, 127g', '', 2),
(748, 'Peanut butter', 'Peanut butter, 340g', '', 2),
(749, 'Fruit Cocktail', 'Fruit Cocktail, 3060g', '', 2),
(750, 'Pineapple', 'Pineapple slice, 822g', '', 2),
(751, 'Mayonnaise', 'Mayonnaise, 1.8liters', '', 2),
(752, 'Coffee', 'Coffee, 3 in 1, 30g x30', '', 2),
(753, 'Tableya', 'Tableya, general', '', 2),
(754, 'Sugar', 'White sugar,1kg', '', 2),
(755, 'Cream', 'All purpose cream, 300ml', '', 2),
(756, 'Sotanghon', 'Sotanghon, 1kl.', '', 2),
(757, 'Pancit Canton', 'Pancit Canton, 1 kilo', '', 2),
(758, 'Pasta', 'Spaghetti pasta, 1kl.', '', 2),
(759, 'Pasta', 'Macaroni pasta, 1kg.', '', 2),
(760, 'Sauce', 'Spaghetti sauce, 1kg.', '', 2),
(761, 'Flour', 'All purpose flour', '', 2),
(762, 'Cocoa', 'Cocoa, Bensdorf', '', 2),
(763, 'Ball', 'Basketball ball official', '', 14),
(764, 'Net', 'Basketball net', '', 14),
(765, 'Ball', 'Volleyball ball official', '', 14),
(766, 'Net', 'Volleyball net', '', 14),
(767, 'Dart pin', 'Dart pin, general', '', 14),
(768, 'Infant formula', 'Infant formula 1, 1.3kg', '', 2),
(769, 'Infant formula', 'Infant formula 2, 1.3kg', '', 2),
(770, 'Infant formula', 'Infant formula 3, 1.3kg./1.6kg', '', 2),
(771, 'Pediasure', 'Pediasure, 1.9kg', '', 2),
(772, 'Milk', 'Powder milk,1.2g.', '', 2),
(773, 'Milk', 'Nan HW Infini Pro 2 and other milk prescribe', '', 2),
(774, 'Milk', 'Al 110 milk, 500g', '', 2),
(775, 'Pork', 'Pork lean/belly/chop', '', 2),
(776, 'Pork', 'Pork ribs, special', '', 2),
(777, 'Chicken', 'Chicken nuggets', '', 2),
(778, 'Chicken', 'Chicken thigh/ breast', '', 2),
(779, 'Pork', 'Ground pork', '', 2),
(780, 'Beef', 'Lean beef/ beef eye round', '', 2),
(781, 'Walkie talkie', 'Two-way Radio UHT Transceiver walkie talkie with 2 pin earpiece (ICTS/COES)', '', 12),
(782, 'Chair', 'Executive Chair', '', 17),
(783, 'Hyoscine', 'Hyoscine, 10mg.tab', '', 3),
(784, 'Paracetamol', 'Paracetamol syrup 250 mg', '', 3),
(785, 'Certificate holder', 'Certificate holder', '', 1),
(786, 'SPECIAL PAPER', 'SCENTED SPECIAL PAPER WHITE 90 GSM / PACK', '', 1),
(787, 'ENVELOPE', 'BROWN ENVELOPE', '', 1),
(788, 'SIGN PEN', 'HIGH QUALITY BLACK SIGN PEN .7MM / BOX', '', 1),
(789, 'BOARD PEN', 'HIGH QUALITY PENTEL BOARD PEN / BOX', '', 1),
(790, 'METACARDS', 'METACARDS, GENERAL', '', 1),
(791, 'NOTEBOOK', 'HIGH QUALITY NOTEBOOK', '', 1),
(792, 'MANILA PAPER', 'MANILA PAPER, GENERAL', '', 1),
(793, 'TAPE', 'MASKING TAPE 2-INCH DIAMETER', '', 1),
(794, 'STICKY NOTE', 'STICKY NOTE ROLL, MATERIAL: PAPER + PLASTIC ROLL DESIGN PAPER LENGTH:8M/314.95\"(APPROX)', '', 1),
(795, 'ALCOHOL', 'ISOPROPYL ALCOHOL(350ML)', '', 4),
(796, 'ALCOHOL', 'ISOPROPYL ALCOHOL(1 LITER)', '', 4),
(797, 'FACE MASK', 'FACE MASK / BOX', '', 4),
(798, 'PUNCHER', 'PUNCHER, GENERAL', '', 1),
(799, 'SCISSOR', 'SCISSOR, GENERAL', '', 1),
(800, 'Ink', 'INK CART, CANON PG-810, COLORED', '', 1),
(801, 'FOLDER', 'FOLDER (PINK)', '', 1),
(802, 'FOLDER', 'BROWN FOLDER', '', 1),
(803, 'SIGN PEN', 'SIGN PEN, GENERAL /BOX', '', 1),
(804, 'Ink', '003 black epson', '', 1),
(805, 'Logbook', 'Logbook, general', '', 1),
(806, 'Bond Paper', 'Long Bond Paper', ' ', 23),
(807, 'Notebook', '50 leaves notebook', ' ', 23),
(808, 'Ballpen', 'Good quality black ballpen', ' ', 23),
(809, 'Envelope', 'Plastic envelope with handle', ' ', 23),
(810, 'Envelope', 'Brown Expanded envelope', ' ', 23),
(811, 'Tape', 'Correction tape', ' ', 23),
(812, 'Ink', 'Epson ink 003 refill', ' ', 23),
(813, 'Filer', 'Filer jumbo with cover', ' ', 1),
(814, 'FILER', 'OFFICE FILER with cover (LARGE)\nH-12.5cm X W 40cm X H 24.5', ' ', 1),
(815, 'PAPER CUTTER BOARD', 'PAPER CUTTER BOARD wooden, 200mm x 180mm', ' ', 1),
(816, 'STORAGE BOX', 'STORAGE BOX, Mega Box, 70L, 63cm x 43.5cm x 38cm', ' ', 1),
(817, 'DESK ORGANIZER', 'DESK ORGANIZER, general', ' ', 1),
(823, 'Bond paper', 'Bond paper long', ' ', 1),
(824, 'Printer', 'Epson Printer (Eco tank L3250)', ' ', 11),
(825, 'Polo Shirt', 'Polo Shirt Yakap Bayan', ' ', 22),
(826, 'Polo Shirt', 'Polo Shirt Advocacy materials', ' ', 22),
(827, 'Polo Shirt', 'Polo Shirt Advocacy Materials Pangantucan Buk', ' ', 22),
(828, 'Scanner', 'Portable Scanner', ' ', 11),
(829, 'Alcohol', 'Hand Sanitizer Alcohol', ' ', 4),
(830, 'Polo shirt', 'Yakap Bayan', ' ', 22),
(831, 'Keppra', 'Solution', ' ', 3),
(832, 'Lexdin', 'Lexdin 10mgs', ' ', 3),
(833, 'Responz', '10mgs', ' ', 3),
(834, 'Baclofen', '10mgs', ' ', 3),
(835, 'Phenobarbital', '30mgs', ' ', 3),
(836, 'Phenobarbital', '90mgs', ' ', 3),
(837, 'Valpros', '500mgs', ' ', 3),
(838, 'Valpros', 'Syrup', ' ', 3),
(839, 'Omegabloc', 'Omegabloc ,general', ' ', 3),
(840, 'Paracetamol', 'Tempra syrup (120ml)', ' ', 3),
(841, 'Hydrite', 'Granules', ' ', 3),
(842, 'Hydrasec', 'Granules', ' ', 3),
(843, 'Phenylephrine', 'syrup,drops', ' ', 3),
(844, 'Terramycin', 'Opthatmic drop', ' ', 3),
(845, 'Meptin', 'Meptin Syrup', ' ', 3),
(846, 'Lotion', 'Desowen lotion', ' ', 7),
(847, 'Cleanser', 'Cetaphil cleanser', ' ', 7),
(848, 'PLANNER', 'Social technology planner', ' ', 1),
(849, 'Cabinet', 'Mobile cabinet', ' ', 17),
(850, 'Chair', 'Shivel', ' ', 17),
(851, 'Printer', 'Printer wifi all in one tank printer', ' ', 11),
(852, 'Planner', 'Social technology planner', ' ', 22),
(854, 'STAMP PAD', 'STAMP PAD, GENERAL', ' ', 1),
(855, 'INK 003', 'INK 003 Magenta', ' ', 1),
(856, 'INK 003', 'Yellow', ' ', 1),
(857, 'INK 003', 'Cyan', ' ', 1),
(858, 'INK 003', 'Black', ' ', 1),
(859, 'HP 680', 'Black', ' ', 1),
(860, 'HP 680', 'HP 680 colored', ' ', 1),
(861, 'Pentel pen', 'Pentel pen', ' ', 1),
(862, 'Tape', 'Correction Tape', ' ', 1),
(863, 'Tape', 'Tape packaging', ' ', 1),
(864, 'Tape', 'Scotch tape', ' ', 1),
(865, 'INK 664', 'Black', ' ', 1),
(866, 'INK 664', 'INK 664 Cyan', ' ', 1),
(867, 'INK 664', 'INK 664 magenta', ' ', 1),
(868, 'INK 664', 'INK 664 yellow', ' ', 1),
(869, 'Tissue', 'Tissue, general', ' ', 7),
(870, 'Bond paper', 'Bond paper, A4 (Box)', ' ', 1),
(871, 'Bond paper', 'Bond paper, legal (Box)', ' ', 1),
(872, 'Tissue', 'Tissue, general', ' ', 1),
(873, 'Plywood', 'Marine plywood (PLIGO)', ' ', 25),
(874, 'Hinges', 'Hydraulic Hinges', ' ', 25),
(875, 'Nails', 'Finishing nails NO.2', ' ', 25),
(876, 'Nails', 'Finishing nails NO.1 1/2', ' ', 25),
(877, 'Enamel', 'Flat wall white enamel', ' ', 25),
(878, 'Enamel', 'Gloss enamel - ready mixed mint green', ' ', 25),
(879, 'Brush', 'Paint brush', ' ', 25),
(880, 'Thinner', 'Paint Thinner', ' ', 25),
(881, 'Sandpaper', 'Sandpaper NO.120', ' ', 25),
(882, 'Roller', 'Baby Roller', ' ', 25),
(883, 'Roller Tray', 'Paint roller tray', ' ', 25),
(884, 'Table', 'Coffee table set', ' ', 17),
(885, 'Cabinet', 'Steel filing cabinet', ' ', 17),
(886, 'Chair', 'Office chair', ' ', 17),
(887, 'Vest', 'DSWD RED VEST', ' ', 22),
(888, 'Vitamin C', 'Berroca tablet', ' ', 28);

-- --------------------------------------------------------

--
-- Table structure for table `tblsupplier`
--

CREATE TABLE `tblsupplier` (
  `supplier_id` bigint(20) NOT NULL,
  `supplier_name` varchar(500) NOT NULL,
  `supplier_address` varchar(500) NOT NULL,
  `supplier_tin` varchar(500) NOT NULL,
  `proprietor_fname` varchar(500) NOT NULL,
  `proprietor_lname` varchar(500) NOT NULL,
  `proprietor_mname` varchar(500) NOT NULL,
  `mobile` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblsupplier`
--

INSERT INTO `tblsupplier` (`supplier_id`, `supplier_name`, `supplier_address`, `supplier_tin`, `proprietor_fname`, `proprietor_lname`, `proprietor_mname`, `mobile`, `email`) VALUES
(2, 'CITI HARDWARE', 'CUGMAN', '12313453', 'CITI', 'CORP', ' ', '093624554', 'citi@gmail.com'),
(3, 'ACE HARDWARE', 'Patag Highway', '12334564', 'ACE', 'Corporation', ' ', '12336456', 'ace@gmail.com'),
(4, 'MJN ENTERPRISES', 'Zone 1, Bulua, Cagayan de Oro City', '928-439-625-000', 'MJN ENTERPRISES', 'MJN ENTERPRISES', 'MJN ENTERPRISES', '09362255798', 'mjn@gmail.com'),
(5, 'GLORIETTA MARKETING CORPORATION', 'Cagayan de Oro City', ' ', ' ', ' ', ' ', ' ', ' '),
(6, 'LUKE MEDICAL SUPPLIES', 'Tiano del Pilar St. Cagayan de Oro City', '148-725-344', ' ', ' ', ' ', ' ', ' '),
(7, 'EG Tech Enterprise', 'Corrales Hayes St.,', ' ', ' ', ' ', ' ', ' ', ' '),
(8, 'SOLAR ACE PREMIUM PRODUCTS, INC', '280 Capistrano St. Cagayan de Oro City', '009-373-783-000', ' ', ' ', ' ', ' ', ' '),
(9, 'KAJ HOUSEHOLD GOODS TRADING', 'Pabayo St., Cagayan de Oro City', '335-278-412-003', ' ', ' ', ' ', ' ', ' '),
(10, 'LTS DEPARTMENT STORES INC.', 'Ramon Magsaysay Avenue, Davao City', '006-171-698-001', ' ', ' ', ' ', ' ', ' '),
(11, 'VERCEDE MOTOR PARTS & GEN. MSDE', 'Pasil Road Zone 4, Kauswagan, Cagayan de Oro City', '418-914-903-000', 'LEONORA', 'VERCEDE', 'S', ' ', ' '),
(12, 'PL INK SUPPLIES AND PRINTING STATION', 'Zone 1, Vamenta Blvd, Carmen, Cagayan de Oro City', '178-266-164-000', 'Jose Victor', 'Lopez', 'M', ' ', ' '),
(13, 'SO PHOTO PRINT TRADING', '# 255 Capistrano Corner Kalambaguhan St., Cagayan de Oro City', '915-274-729-000', 'SARAH', 'OGA', 'S', '(08822) 71-12-77 / 0997-684-3307', ' '),
(14, 'MINDANAO GLASSWARE AND NATIVE PROD. GEN. MSDE', 'Capt. Vicente Roa St. Cogon, Cagayan de Oro City', '103-311-678-000', 'FLORENCIO', 'RONTAL', 'Q', '859-3917 / (088) 859-3913', ' '),
(15, 'BIOMEDICAL TRADE MERCHANDISE AND SERVICES', 'Capistrano-Kalambaguhan, CAGAYAN DE ORO CITY', '253-002-594-000', ' ', ' ', ' ', ' ', ' '),
(16, 'King David Pharma Distributor', 'Cagayan de Oro City', ' ', ' ', ' ', ' ', ' ', ' '),
(17, 'ORORAMA SUPERCENTER', 'CAGAYAN DE ORO CITY', ' ', ' ', ' ', ' ', ' ', ' '),
(18, 'ACE DE ORO COMMERCIAL', 'CAGAYAN DE ORO CITY', ' ', ' ', ' ', ' ', ' ', ' '),
(19, 'METRO COOLAIRE TRADING CORP.', 'Blk. 2, Lot 2, West Field Subd., Iponan, CDOC', '466-396-780-000', ' ', ' ', ' ', ' ', ' '),
(20, 'MICROTRONIX MARKETING SALES AND SERVICES CENTER', '100 Gomez st., Cagayand de Oro City', ' ', ' ', ' ', ' ', ' ', ' '),
(21, 'CAGALAWAN ENTERPRISES', 'Tiano, Cagayan de Oro City', '186-237-691-000', ' ', ' ', ' ', ' ', ' '),
(22, 'JEJOR\'S CONSTRUCTION CORP.', 'Osmena St., Cagayan de Oro City', '003-579-641-001', ' ', ' ', ' ', ' ', ' '),
(23, 'COPYLANDIA OFFICE SYSTEM CORPORATION', 'G/F Montecarlo Bldg., Lapasan, Cagayan de Oro City', ' ', ' ', ' ', ' ', ' ', ' '),
(24, 'PHOTODYNAMIC CORPORATION', 'Pabayo-Yacapin, Cagayan de Oro City', '421-503-883-001', ' ', ' ', ' ', ' ', ' '),
(25, 'GAISANO INTERFACE COMPUTER SYSTEM', 'WEST PROMENADE LIMKETKAI MALL, LAPASAN, CAGAYAN DE ORO CITY', ' ', ' ', ' ', ' ', ' ', ' '),
(26, 'STEVE COMMERCIAL CENTER', 'Gingoog City', ' ', ' ', ' ', ' ', ' ', ' '),
(27, 'MC PAPER SMART MARKETING', 'PABAYO-YACAPIN STS., CAGAYAN DE ORO CITY', ' ', ' ', ' ', ' ', ' ', ' '),
(28, 'KAJ SCHOOL AND OFFICE SUPPLIES TRADING', 'PABAYO ST., CAGAYAN DE ORO CITY', '335-278-412', ' ', ' ', ' ', ' ', ' '),
(29, 'ROMEO V. AUSTRIA TRADING', 'JR BORJA EXT., CAGAYAN DE ORO CITY', '177-491-060-000', ' ', ' ', ' ', ' ', ' '),
(30, 'CAGAYAN EDUCATIONAL SUPPLY', 'MORTOLA-HAYES STS., CAGAYAN DE ORO CITY', '103-309-192-001', ' ', ' ', ' ', ' ', ' '),
(31, 'INTELISOFT MICROCOMPUTER SYSTEMS', 'FERNANDEZ- TIANO STS., CAGAYAN DE ORO CITY', '106-128-099', ' ', ' ', ' ', ' ', ' '),
(33, 'MAHOGANY FURNITURE MARKETING', 'Domingo Velez - Yacapin Extension, Cagayan de Oro City', '469-911-900-000', 'Danilyn', 'Alfonso', 'A', ' ', ' '),
(34, 'MERCURY DRUG CORPORATION', 'TOMAS SACO, CAGAYAN DE ORO CITY', '000-388-474-00585', ' ', ' ', ' ', ' ', ' '),
(35, 'VARIOUS SUPPLIER', 'VARIOUS SUPPLIER', 'VARIOUS SUPPLIER', ' ', ' ', ' ', ' ', ' '),
(36, 'ALDRICCO GENERAL MERCHANDISE', '73 Yacapin Ext. Brgy. 32 (Pob.), Cagayan de Oro City', '445-649-657', ' ', ' ', ' ', ' ', ' '),
(37, 'A and R Clothing solutions', ' ', ' ', ' ', ' ', ' ', ' ', ' ');

-- --------------------------------------------------------

--
-- Table structure for table `tblunit`
--

CREATE TABLE `tblunit` (
  `unit_id` bigint(20) NOT NULL,
  `unit_name` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblunit`
--

INSERT INTO `tblunit` (`unit_id`, `unit_name`) VALUES
(1, 'Piece'),
(3, 'ml'),
(4, 'Kilogram'),
(5, 'Sack'),
(6, 'Pack'),
(7, 'Dozen'),
(8, 'Meter'),
(9, 'Unit'),
(10, 'Roll'),
(11, 'Ream'),
(13, 'Box'),
(14, 'Gallon'),
(15, 'Bottle'),
(16, 'Case'),
(17, 'Inch'),
(18, 'Foot'),
(19, 'Milimeter'),
(20, 'Assy'),
(21, 'Set'),
(23, 'Tube'),
(24, 'Pair'),
(25, 'Pad'),
(27, 'Can'),
(28, 'Tins'),
(29, 'Sachet'),
(30, 'Container'),
(33, 'Bar'),
(34, 'Pourch'),
(35, 'Bundle'),
(36, 'Cylinder'),
(37, 'Tab'),
(38, 'Amp'),
(39, 'Vial'),
(40, 'Glass'),
(42, 'Liter'),
(43, 'Cartridge');

-- --------------------------------------------------------

--
-- Table structure for table `tbluseraccessrights`
--

CREATE TABLE `tbluseraccessrights` (
  `AccessRghtsControlNo` bigint(20) UNSIGNED NOT NULL,
  `AccessRghtsFormID` tinyint(20) NOT NULL,
  `AccessRghtsFormName` varchar(80) NOT NULL,
  `AccessRghtsUserID` tinyint(20) NOT NULL,
  `AccessRghtsFormType` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbluseraccessrights`
--

INSERT INTO `tbluseraccessrights` (`AccessRghtsControlNo`, `AccessRghtsFormID`, `AccessRghtsFormName`, `AccessRghtsUserID`, `AccessRghtsFormType`) VALUES
(316, 1, 'Home Owner List', 2, 'Masterfile'),
(317, 2, 'Other Income', 2, 'Masterfile'),
(318, 3, 'Chart of Account', 2, 'Masterfile'),
(319, 4, 'User List', 2, 'Administrative'),
(320, 5, 'Signatory List', 2, 'Administrative'),
(321, 6, 'Official Receipt Series Setup', 2, 'Administrative'),
(322, 7, 'Auto Debit Chart of Account', 2, 'Administrative'),
(323, 8, 'Set Annual Fee and Duedates', 2, 'Administrative'),
(324, 9, 'Set Lot Rate', 2, 'Administrative'),
(325, 10, 'Cashiering Payment', 2, 'Transaction'),
(326, 11, 'Petty Cash Entry', 2, 'Transaction'),
(327, 12, 'Check Issuance', 2, 'Transaction'),
(328, 13, 'General Journal Entry', 2, 'Transaction'),
(329, 14, 'Run Monthly Receivable', 2, 'Transaction'),
(330, 15, 'Run Annual Receivable', 2, 'Transaction'),
(331, 16, 'Beginning Balance Entry', 2, 'Transaction'),
(332, 17, 'Monthly Dues Ledger', 2, 'Transaction'),
(333, 18, 'Construction Bond', 2, 'Transaction'),
(334, 19, 'Ledger', 2, 'Transaction'),
(335, 20, 'Aging', 2, 'Transaction'),
(336, 21, 'Aging of Receivable', 2, 'Reports'),
(337, 22, 'Collection vs Receivable', 2, 'Reports'),
(338, 23, 'Construction Bond Report', 2, 'Reports'),
(339, 24, 'Cashier Daily Cash Disposition', 2, 'Reports'),
(340, 25, 'Cashier Summary', 2, 'Reports'),
(341, 26, 'Trial Balance', 2, 'Reports'),
(342, 27, 'Income Statement', 2, 'Reports'),
(343, 28, 'Balance Sheet', 2, 'Reports'),
(344, 29, 'Journal Book', 2, 'Reports'),
(345, 30, 'Renter List', 2, 'Masterfile'),
(346, 31, 'Payee List', 2, 'Administrative'),
(347, 33, 'CashFlow', 2, 'Masterfile'),
(348, 35, 'Bank Account List', 2, 'Administrative'),
(349, 1, 'Home Owner List', 1, 'Masterfile'),
(350, 2, 'Hog List', 1, 'Masterfile'),
(351, 3, 'Chart of Account', 1, 'Masterfile'),
(352, 4, 'User List', 1, 'Administrative'),
(353, 5, 'Signatory List', 1, 'Administrative'),
(354, 6, 'Official Receipt Series Setup', 1, 'Administrative'),
(355, 7, 'Auto Debit Chart of Account', 1, 'Administrative'),
(356, 8, 'Set Annual Fee and Duedates', 1, 'Administrative'),
(357, 9, 'Set Lot Rate', 1, 'Administrative'),
(358, 10, 'Cashiering Payment', 1, 'Transaction'),
(359, 11, 'Petty Cash Entry', 1, 'Transaction'),
(360, 12, 'Check Issuance', 1, 'Transaction'),
(361, 13, 'General Journal Entry', 1, 'Transaction'),
(362, 14, 'Run Monthly Receivable', 1, 'Transaction'),
(363, 15, 'Run Annual Receivable', 1, 'Transaction'),
(364, 19, 'Ledger', 1, 'Transaction'),
(365, 20, 'Aging', 1, 'Transaction'),
(366, 24, 'Cashier Daily Cash Disposition', 1, 'Reports'),
(367, 25, 'Cashier Summary', 1, 'Reports'),
(368, 26, 'Trial Balance', 1, 'Reports'),
(369, 29, 'Journal Book', 1, 'Reports'),
(370, 30, 'Renter List', 1, 'Masterfile'),
(371, 31, 'Payee List', 1, 'Administrative'),
(372, 33, 'CashFlow', 1, 'Masterfile'),
(373, 35, 'Bank Account List', 1, 'Administrative'),
(374, 36, 'Cattle List', 1, 'Masterfile'),
(499, 4, 'User List', 3, 'Administrative'),
(500, 19, 'Ledger', 3, 'Transaction'),
(501, 37, 'Recepient List', 3, 'Masterfile'),
(502, 42, 'Personnel List', 3, 'Masterfile'),
(503, 52, 'Certificate Issuance', 3, 'Transaction'),
(570, 5, 'Signatory List', 10, 'Administrative'),
(571, 50, 'Inventory Issuance', 10, 'Transaction'),
(578, 5, 'Signatory List', 5, 'Administrative'),
(579, 50, 'Inventory Issuance', 5, 'Transaction'),
(580, 5, 'Signatory List', 6, 'Administrative'),
(581, 50, 'Inventory Issuance', 6, 'Transaction'),
(582, 5, 'Signatory List', 7, 'Administrative'),
(583, 50, 'Inventory Issuance', 7, 'Transaction'),
(586, 5, 'Signatory List', 11, 'Administrative'),
(587, 45, 'Fund Source List', 11, 'Masterfile'),
(588, 46, 'Unit List', 11, 'Masterfile'),
(589, 47, 'Inventory Entry', 11, 'Transaction'),
(590, 48, 'Supplier List', 11, 'Masterfile'),
(591, 49, 'Chart of Account', 11, 'Masterfile'),
(592, 50, 'Inventory Issuance', 11, 'Transaction'),
(593, 51, 'Manual Adjustment', 11, 'Transaction'),
(594, 55, 'Center List', 11, 'Masterfile'),
(635, 5, 'Signatory List', 9, 'Administrative'),
(636, 46, 'Unit List', 9, 'Masterfile'),
(637, 47, 'Inventory Entry', 9, 'Transaction'),
(638, 48, 'Supplier List', 9, 'Masterfile'),
(639, 49, 'Chart of Account', 9, 'Masterfile'),
(640, 50, 'Inventory Issuance', 9, 'Transaction'),
(650, 47, 'Inventory Entry', 8, 'Transaction'),
(651, 49, 'Chart of Account', 8, 'Masterfile'),
(658, 49, 'Chart of Account', 16, 'Masterfile'),
(659, 50, 'Inventory Issuance', 17, 'Transaction'),
(660, 50, 'Inventory Issuance', 15, 'Transaction'),
(661, 50, 'Inventory Issuance', 18, 'Transaction'),
(668, 47, 'Inventory Entry', 20, 'Transaction'),
(669, 49, 'Chart of Account', 20, 'Masterfile'),
(674, 47, 'Inventory Entry', 21, 'Transaction'),
(675, 49, 'Chart of Account', 21, 'Masterfile'),
(676, 5, 'Signatory List', 22, 'Administrative'),
(677, 45, 'Fund Source List', 22, 'Masterfile'),
(678, 46, 'Unit List', 22, 'Masterfile'),
(679, 47, 'Inventory Entry', 22, 'Transaction'),
(680, 48, 'Supplier List', 22, 'Masterfile'),
(681, 49, 'Chart of Account', 22, 'Masterfile'),
(721, 47, 'Inventory Entry', 19, 'Transaction'),
(722, 49, 'Chart of Account', 19, 'Masterfile'),
(723, 50, 'Inventory Issuance', 19, 'Transaction'),
(726, 47, 'Inventory Entry', 14, 'Transaction'),
(727, 49, 'Chart of Account', 14, 'Masterfile'),
(728, 50, 'Inventory Issuance', 14, 'Transaction'),
(732, 47, 'Inventory Entry', 24, 'Transaction'),
(733, 49, 'Chart of Account', 24, 'Masterfile'),
(734, 50, 'Inventory Issuance', 24, 'Transaction'),
(735, 47, 'Inventory Entry', 25, 'Transaction'),
(736, 49, 'Chart of Account', 25, 'Masterfile'),
(737, 50, 'Inventory Issuance', 25, 'Transaction'),
(738, 47, 'Inventory Entry', 26, 'Transaction'),
(739, 49, 'Chart of Account', 26, 'Masterfile'),
(740, 50, 'Inventory Issuance', 26, 'Transaction'),
(741, 49, 'Chart of Account', 27, 'Masterfile'),
(755, 4, 'User List', 4, 'Administrative'),
(756, 5, 'Signatory List', 4, 'Administrative'),
(757, 45, 'Fund Source List', 4, 'Masterfile'),
(758, 46, 'Unit List', 4, 'Masterfile'),
(759, 47, 'Inventory Entry', 4, 'Transaction'),
(760, 48, 'Supplier List', 4, 'Masterfile'),
(761, 49, 'Chart of Account', 4, 'Masterfile'),
(762, 50, 'Inventory Issuance', 4, 'Transaction'),
(763, 51, 'Manual Adjustment', 4, 'Transaction'),
(764, 53, 'Activity Logs', 4, 'Administrative'),
(765, 55, 'Center List', 4, 'Masterfile'),
(766, 56, 'Admin Lock', 4, 'Administrative'),
(767, 58, 'Requisition and Issue Slip', 4, 'Transaction'),
(772, 47, 'Inventory Entry', 13, 'Transaction'),
(773, 49, 'Chart of Account', 13, 'Masterfile'),
(774, 50, 'Inventory Issuance', 13, 'Transaction'),
(775, 58, 'Requisition and Issue Slip', 13, 'Transaction'),
(776, 49, 'Chart of Account', 23, 'Masterfile'),
(777, 58, 'Requisition and Issue Slip', 23, 'Transaction'),
(778, 49, 'Chart of Account', 28, 'Masterfile'),
(779, 58, 'Requisition and Issue Slip', 28, 'Transaction'),
(780, 5, 'Signatory List', 12, 'Administrative'),
(781, 45, 'Fund Source List', 12, 'Masterfile'),
(782, 46, 'Unit List', 12, 'Masterfile'),
(783, 47, 'Inventory Entry', 12, 'Transaction'),
(784, 48, 'Supplier List', 12, 'Masterfile'),
(785, 49, 'Chart of Account', 12, 'Masterfile'),
(786, 50, 'Inventory Issuance', 12, 'Transaction'),
(787, 55, 'Center List', 12, 'Masterfile'),
(788, 56, 'Admin Lock', 12, 'Administrative'),
(789, 58, 'Requisition and Issue Slip', 12, 'Transaction');

-- --------------------------------------------------------

--
-- Structure for view `acct_detailed_expense_link`
--
DROP TABLE IF EXISTS `acct_detailed_expense_link`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY INVOKER VIEW `acct_detailed_expense_link`  AS  select (`acct_expense_link`.`totalcost` / `acct_expense_link`.`total`) AS `unitcost_bal`,`acct_expense_link`.`item_code` AS `item_code`,`acct_expense_link`.`stock_no` AS `stock_no`,`acct_expense_link`.`unit_name` AS `unit_name`,`acct_expense_link`.`item_name` AS `item_name`,`acct_expense_link`.`item_description` AS `item_description`,`acct_expense_link`.`office` AS `office`,`acct_expense_link`.`office_code` AS `office_code`,`acct_expense_link`.`office_idlink` AS `office_idlink`,`acct_expense_link`.`total` AS `total`,`acct_expense_link`.`totalcost` AS `totalcost` from `acct_expense_link` ;

-- --------------------------------------------------------

--
-- Structure for view `acct_detailed_expense_linkcenter`
--
DROP TABLE IF EXISTS `acct_detailed_expense_linkcenter`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `acct_detailed_expense_linkcenter`  AS  select (`acct_expense_linkcenter`.`totalcost` / `acct_expense_linkcenter`.`total`) AS `unitcost_bal`,`acct_expense_linkcenter`.`item_code` AS `item_code`,`acct_expense_linkcenter`.`stock_no` AS `stock_no`,`acct_expense_linkcenter`.`center_idlink` AS `center_idlink`,`acct_expense_linkcenter`.`unit_name` AS `unit_name`,`acct_expense_linkcenter`.`item_name` AS `item_name`,`acct_expense_linkcenter`.`item_description` AS `item_description`,`acct_expense_linkcenter`.`office` AS `office`,`acct_expense_linkcenter`.`office_code` AS `office_code`,`acct_expense_linkcenter`.`office_idlink` AS `office_idlink`,`acct_expense_linkcenter`.`total` AS `total`,`acct_expense_linkcenter`.`totalcost` AS `totalcost` from `acct_expense_linkcenter` ;

-- --------------------------------------------------------

--
-- Structure for view `acct_expense`
--
DROP TABLE IF EXISTS `acct_expense`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `acct_expense`  AS  select `tblslc`.`unitcost_bal` AS `unitcost_bal`,`tblslc`.`stock_no` AS `stock_no`,`tblslc`.`unit_name` AS `unit_name`,`tblslc`.`po_num` AS `po_num`,`tblslc`.`item_code` AS `item_code`,`tblslc`.`item_name` AS `item_name`,`tblslc`.`item_description` AS `item_description`,`tblslc`.`office` AS `office`,`tblslc`.`office_code` AS `office_code`,`tblslc`.`office_idlink` AS `office_idlink`,(sum(`tblslc`.`qty_rec`) - sum(`tblslc`.`qty_issue`)) AS `total`,(sum(`tblslc`.`totalcost_rec`) - sum(`tblslc`.`totalcost_issue`)) AS `totalcost` from `tblslc` group by `tblslc`.`podtl_idlink` ;

-- --------------------------------------------------------

--
-- Structure for view `acct_expensecenter`
--
DROP TABLE IF EXISTS `acct_expensecenter`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `acct_expensecenter`  AS  select `tblslccenters`.`unitcost_bal` AS `unitcost_bal`,`tblslccenters`.`stock_no` AS `stock_no`,`tblslccenters`.`center_idlink` AS `center_idlink`,`tblslccenters`.`unit_name` AS `unit_name`,`tblslccenters`.`po_num` AS `po_num`,`tblslccenters`.`item_code` AS `item_code`,`tblslccenters`.`item_name` AS `item_name`,`tblslccenters`.`item_description` AS `item_description`,`tblslccenters`.`office` AS `office`,`tblslccenters`.`office_code` AS `office_code`,`tblslccenters`.`office_idlink` AS `office_idlink`,(sum(`tblslccenters`.`qty_rec`) - sum(`tblslccenters`.`qty_issue`)) AS `total`,(sum(`tblslccenters`.`totalcost_rec`) - sum(`tblslccenters`.`totalcost_issue`)) AS `totalcost` from `tblslccenters` group by `tblslccenters`.`podtl_idlink`,`tblslccenters`.`center_idlink` ;

-- --------------------------------------------------------

--
-- Structure for view `acct_expense_link`
--
DROP TABLE IF EXISTS `acct_expense_link`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY INVOKER VIEW `acct_expense_link`  AS  select (`acct_expense`.`totalcost` / `acct_expense`.`total`) AS `unitcost_bal`,`acct_expense`.`item_code` AS `item_code`,`acct_expense`.`stock_no` AS `stock_no`,`acct_expense`.`unit_name` AS `unit_name`,`acct_expense`.`item_name` AS `item_name`,`acct_expense`.`item_description` AS `item_description`,`acct_expense`.`office` AS `office`,`acct_expense`.`office_code` AS `office_code`,`acct_expense`.`office_idlink` AS `office_idlink`,sum(`acct_expense`.`total`) AS `total`,sum(`acct_expense`.`totalcost`) AS `totalcost` from `acct_expense` group by `acct_expense`.`item_code` ;

-- --------------------------------------------------------

--
-- Structure for view `acct_expense_linkcenter`
--
DROP TABLE IF EXISTS `acct_expense_linkcenter`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `acct_expense_linkcenter`  AS  select (`acct_expensecenter`.`totalcost` / `acct_expensecenter`.`total`) AS `unitcost_bal`,`acct_expensecenter`.`item_code` AS `item_code`,`acct_expensecenter`.`stock_no` AS `stock_no`,`acct_expensecenter`.`center_idlink` AS `center_idlink`,`acct_expensecenter`.`unit_name` AS `unit_name`,`acct_expensecenter`.`item_name` AS `item_name`,`acct_expensecenter`.`item_description` AS `item_description`,`acct_expensecenter`.`office` AS `office`,`acct_expensecenter`.`office_code` AS `office_code`,`acct_expensecenter`.`office_idlink` AS `office_idlink`,sum(`acct_expensecenter`.`total`) AS `total`,sum(`acct_expensecenter`.`totalcost`) AS `totalcost` from `acct_expensecenter` group by `acct_expensecenter`.`item_code`,`acct_expensecenter`.`center_idlink` ;

-- --------------------------------------------------------

--
-- Structure for view `acct_link_expense`
--
DROP TABLE IF EXISTS `acct_link_expense`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY INVOKER VIEW `acct_link_expense`  AS  select (`acct_expense_link`.`totalcost` / `acct_expense_link`.`total`) AS `unitcost_bal`,`acct_expense_link`.`item_code` AS `item_code`,`acct_expense_link`.`item_name` AS `item_name`,`acct_expense_link`.`item_description` AS `item_description`,`acct_expense_link`.`office` AS `office`,`acct_expense_link`.`office_code` AS `office_code`,`acct_expense_link`.`office_idlink` AS `office_idlink`,`acct_expense_link`.`total` AS `total`,`acct_expense_link`.`totalcost` AS `totalcost` from `acct_expense_link` ;

-- --------------------------------------------------------

--
-- Structure for view `chartaccountlinkage`
--
DROP TABLE IF EXISTS `chartaccountlinkage`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY INVOKER VIEW `chartaccountlinkage`  AS  select `a`.`subacct_id` AS `subacct_id`,`a`.`stock_no` AS `stock_no`,`a`.`subaccount` AS `subaccount`,`a`.`description` AS `description`,`a`.`acct_link` AS `acct_link`,`b`.`office_id` AS `office_id`,`b`.`office_code` AS `office_code`,`b`.`office_UACS` AS `office_UACS`,`b`.`office` AS `office`,`b`.`formula` AS `formula` from (`tblsubaccount` `a` join `tblchartaccount` `b`) where (`a`.`acct_link` = `b`.`office_id`) ;

-- --------------------------------------------------------

--
-- Structure for view `ending_balance_per_center_view`
--
DROP TABLE IF EXISTS `ending_balance_per_center_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ending_balance_per_center_view`  AS  select `acct_detailed_expense_linkcenter`.`center_idlink` AS `center_idlink`,`acct_detailed_expense_linkcenter`.`office` AS `office`,`acct_detailed_expense_linkcenter`.`office_code` AS `office_code`,sum(`acct_detailed_expense_linkcenter`.`totalcost`) AS `totalcost`,`acct_detailed_expense_linkcenter`.`office_idlink` AS `office_idlink` from `acct_detailed_expense_linkcenter` group by `acct_detailed_expense_linkcenter`.`center_idlink`,`acct_detailed_expense_linkcenter`.`office` ;

-- --------------------------------------------------------

--
-- Structure for view `ending_balance_view`
--
DROP TABLE IF EXISTS `ending_balance_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ending_balance_view`  AS  select sum(`acct_detailed_expense_linkcenter`.`totalcost`) AS `totalcost`,`acct_detailed_expense_linkcenter`.`office` AS `office`,`acct_detailed_expense_linkcenter`.`office_code` AS `office_code` from `acct_detailed_expense_linkcenter` group by `acct_detailed_expense_linkcenter`.`office_idlink` ;

-- --------------------------------------------------------

--
-- Structure for view `podtllink_totaldelivery_view`
--
DROP TABLE IF EXISTS `podtllink_totaldelivery_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `podtllink_totaldelivery_view`  AS  select `podtl_totaldelivery_view`.`podtl_id` AS `podtl_id`,`podtl_totaldelivery_view`.`stock_no` AS `stock_no`,`podtl_totaldelivery_view`.`pohdr_link` AS `pohdr_link`,`podtl_totaldelivery_view`.`property_no` AS `property_no`,`podtl_totaldelivery_view`.`unit` AS `unit`,`podtl_totaldelivery_view`.`item_name` AS `item_name`,`podtl_totaldelivery_view`.`description` AS `description`,`podtl_totaldelivery_view`.`additional_desc` AS `additional_desc`,`podtl_totaldelivery_view`.`del1st` AS `del1st`,`podtl_totaldelivery_view`.`unit_costindivi` AS `unit_costindivi`,`podtl_totaldelivery_view`.`center_idlink` AS `center_idlink`,`podtl_totaldelivery_view`.`center_name` AS `center_name`,`podtl_totaldelivery_view`.`center_fname` AS `center_fname`,`podtl_totaldelivery_view`.`unit_cost` AS `unit_cost`,`podtl_totaldelivery_view`.`original_price` AS `original_price`,`podtl_totaldelivery_view`.`amount` AS `amount`,`podtl_totaldelivery_view`.`unitid_link` AS `unitid_link`,`podtl_totaldelivery_view`.`del2nd` AS `del2nd`,`podtl_totaldelivery_view`.`del3rd` AS `del3rd`,`podtl_totaldelivery_view`.`del4th` AS `del4th`,`podtl_totaldelivery_view`.`del5th` AS `del5th`,`podtl_totaldelivery_view`.`del6th` AS `del6th`,`podtl_totaldelivery_view`.`del7th` AS `del7th`,`podtl_totaldelivery_view`.`del8th` AS `del8th`,`podtl_totaldelivery_view`.`del9th` AS `del9th`,`podtl_totaldelivery_view`.`del10th` AS `del10th`,`podtl_totaldelivery_view`.`del11th` AS `del11th`,`podtl_totaldelivery_view`.`del12th` AS `del12th`,`podtl_totaldelivery_view`.`adjustment` AS `adjustment`,`podtl_totaldelivery_view`.`quantity` AS `quantity`,`podtl_totaldelivery_view`.`office_idlink` AS `office_idlink`,`podtl_totaldelivery_view`.`office` AS `office`,`podtl_totaldelivery_view`.`uacs_code` AS `uacs_code`,`podtl_totaldelivery_view`.`office_code` AS `office_code`,`podtl_totaldelivery_view`.`formula` AS `formula`,`podtl_totaldelivery_view`.`cancellation_status` AS `cancellation_status`,`podtl_totaldelivery_view`.`cancellation_reason` AS `cancellation_reason`,`podtl_totaldelivery_view`.`canceled_by` AS `canceled_by`,`podtl_totaldelivery_view`.`delivery_status` AS `delivery_status`,`podtl_totaldelivery_view`.`totaldelivery` AS `totaldelivery`,(case when (`podtl_totaldelivery_view`.`totaldelivery` = `podtl_totaldelivery_view`.`quantity`) then 'COMPLETED' when (`podtl_totaldelivery_view`.`totaldelivery` <= 0) then 'NO DELIVERY' when (`podtl_totaldelivery_view`.`totaldelivery` < `podtl_totaldelivery_view`.`quantity`) then 'PARTIAL' end) AS `deliverystat` from `podtl_totaldelivery_view` ;

-- --------------------------------------------------------

--
-- Structure for view `podtl_totaldelivery_view`
--
DROP TABLE IF EXISTS `podtl_totaldelivery_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `podtl_totaldelivery_view`  AS  select `tblpodtl`.`podtl_id` AS `podtl_id`,`tblpodtl`.`stock_no` AS `stock_no`,`tblpodtl`.`pohdr_link` AS `pohdr_link`,`tblpodtl`.`property_no` AS `property_no`,`tblpodtl`.`unit` AS `unit`,`tblpodtl`.`item_name` AS `item_name`,`tblpodtl`.`description` AS `description`,`tblpodtl`.`additional_desc` AS `additional_desc`,`tblpodtl`.`del1st` AS `del1st`,`tblpodtl`.`unit_costindivi` AS `unit_costindivi`,`tblpodtl`.`center_idlink` AS `center_idlink`,`tblpodtl`.`center_name` AS `center_name`,`tblpodtl`.`center_fname` AS `center_fname`,`tblpodtl`.`unit_cost` AS `unit_cost`,`tblpodtl`.`original_price` AS `original_price`,`tblpodtl`.`amount` AS `amount`,`tblpodtl`.`unitid_link` AS `unitid_link`,`tblpodtl`.`del2nd` AS `del2nd`,`tblpodtl`.`del3rd` AS `del3rd`,`tblpodtl`.`del4th` AS `del4th`,`tblpodtl`.`del5th` AS `del5th`,`tblpodtl`.`del6th` AS `del6th`,`tblpodtl`.`del7th` AS `del7th`,`tblpodtl`.`del8th` AS `del8th`,`tblpodtl`.`del9th` AS `del9th`,`tblpodtl`.`del10th` AS `del10th`,`tblpodtl`.`del11th` AS `del11th`,`tblpodtl`.`del12th` AS `del12th`,`tblpodtl`.`adjustment` AS `adjustment`,`tblpodtl`.`quantity` AS `quantity`,`tblpodtl`.`office_idlink` AS `office_idlink`,`tblpodtl`.`office` AS `office`,`tblpodtl`.`uacs_code` AS `uacs_code`,`tblpodtl`.`office_code` AS `office_code`,`tblpodtl`.`formula` AS `formula`,`tblpodtl`.`cancellation_status` AS `cancellation_status`,`tblpodtl`.`cancellation_reason` AS `cancellation_reason`,`tblpodtl`.`canceled_by` AS `canceled_by`,`tblpodtl`.`delivery_status` AS `delivery_status`,(((((((((((`tblpodtl`.`del1st` + `tblpodtl`.`del2nd`) + `tblpodtl`.`del3rd`) + `tblpodtl`.`del4th`) + `tblpodtl`.`del5th`) + `tblpodtl`.`del6th`) + `tblpodtl`.`del7th`) + `tblpodtl`.`del8th`) + `tblpodtl`.`del9th`) + `tblpodtl`.`del10th`) + `tblpodtl`.`del11th`) + `tblpodtl`.`del12th`) AS `totaldelivery` from `tblpodtl` ;

-- --------------------------------------------------------

--
-- Structure for view `series`
--
DROP TABLE IF EXISTS `series`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY INVOKER VIEW `series`  AS  select sum(`tblaccountseries`.`series`) AS `series`,`tblaccountseries`.`account_link` AS `account_link` from `tblaccountseries` group by `tblaccountseries`.`account_link` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblaccountseries`
--
ALTER TABLE `tblaccountseries`
  ADD PRIMARY KEY (`id_series`);

--
-- Indexes for table `tblbank`
--
ALTER TABLE `tblbank`
  ADD PRIMARY KEY (`BankID`);

--
-- Indexes for table `tblbatchhdr`
--
ALTER TABLE `tblbatchhdr`
  ADD PRIMARY KEY (`batch_id`);

--
-- Indexes for table `tblbranch`
--
ALTER TABLE `tblbranch`
  ADD PRIMARY KEY (`BID`);

--
-- Indexes for table `tblcenterunit`
--
ALTER TABLE `tblcenterunit`
  ADD PRIMARY KEY (`center_id`);

--
-- Indexes for table `tblchartaccount`
--
ALTER TABLE `tblchartaccount`
  ADD PRIMARY KEY (`office_id`);

--
-- Indexes for table `tblcompany`
--
ALTER TABLE `tblcompany`
  ADD PRIMARY KEY (`CID`);

--
-- Indexes for table `tblcontract`
--
ALTER TABLE `tblcontract`
  ADD PRIMARY KEY (`ContractID`);

--
-- Indexes for table `tbldelivery`
--
ALTER TABLE `tbldelivery`
  ADD PRIMARY KEY (`del_id`);

--
-- Indexes for table `tbldistribution`
--
ALTER TABLE `tbldistribution`
  ADD PRIMARY KEY (`distribution_id`);

--
-- Indexes for table `tblduedate`
--
ALTER TABLE `tblduedate`
  ADD PRIMARY KEY (`DDID`);

--
-- Indexes for table `tblformlist`
--
ALTER TABLE `tblformlist`
  ADD PRIMARY KEY (`FormID`);

--
-- Indexes for table `tblfundsource`
--
ALTER TABLE `tblfundsource`
  ADD PRIMARY KEY (`fund_id`);

--
-- Indexes for table `tbllock`
--
ALTER TABLE `tbllock`
  ADD PRIMARY KEY (`lock_id`);

--
-- Indexes for table `tbllogin`
--
ALTER TABLE `tbllogin`
  ADD PRIMARY KEY (`LoginID`);

--
-- Indexes for table `tbllotrate`
--
ALTER TABLE `tbllotrate`
  ADD PRIMARY KEY (`LRID`);

--
-- Indexes for table `tbloffice`
--
ALTER TABLE `tbloffice`
  ADD PRIMARY KEY (`office_id`);

--
-- Indexes for table `tblorsetup`
--
ALTER TABLE `tblorsetup`
  ADD PRIMARY KEY (`setupID`);

--
-- Indexes for table `tblpayment_logs`
--
ALTER TABLE `tblpayment_logs`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `tblpodtl`
--
ALTER TABLE `tblpodtl`
  ADD PRIMARY KEY (`podtl_id`);

--
-- Indexes for table `tblpohdr`
--
ALTER TABLE `tblpohdr`
  ADD PRIMARY KEY (`po_id`);

--
-- Indexes for table `tblrisdtl`
--
ALTER TABLE `tblrisdtl`
  ADD PRIMARY KEY (`ris_dtl_id`);

--
-- Indexes for table `tblrishdr`
--
ALTER TABLE `tblrishdr`
  ADD PRIMARY KEY (`ris_idhdr`);

--
-- Indexes for table `tblris_series`
--
ALTER TABLE `tblris_series`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblsignaturedesignation`
--
ALTER TABLE `tblsignaturedesignation`
  ADD PRIMARY KEY (`SigID`);

--
-- Indexes for table `tblslc`
--
ALTER TABLE `tblslc`
  ADD PRIMARY KEY (`slc_id`);

--
-- Indexes for table `tblslcactivitylogs`
--
ALTER TABLE `tblslcactivitylogs`
  ADD PRIMARY KEY (`activity_id`);

--
-- Indexes for table `tblslccenters`
--
ALTER TABLE `tblslccenters`
  ADD PRIMARY KEY (`slc_id`);

--
-- Indexes for table `tblsubaccount`
--
ALTER TABLE `tblsubaccount`
  ADD PRIMARY KEY (`subacct_id`);

--
-- Indexes for table `tblsupplier`
--
ALTER TABLE `tblsupplier`
  ADD PRIMARY KEY (`supplier_id`);

--
-- Indexes for table `tblunit`
--
ALTER TABLE `tblunit`
  ADD PRIMARY KEY (`unit_id`);

--
-- Indexes for table `tbluseraccessrights`
--
ALTER TABLE `tbluseraccessrights`
  ADD PRIMARY KEY (`AccessRghtsControlNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblaccountseries`
--
ALTER TABLE `tblaccountseries`
  MODIFY `id_series` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
--
-- AUTO_INCREMENT for table `tblbank`
--
ALTER TABLE `tblbank`
  MODIFY `BankID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tblbatchhdr`
--
ALTER TABLE `tblbatchhdr`
  MODIFY `batch_id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblbranch`
--
ALTER TABLE `tblbranch`
  MODIFY `BID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tblcenterunit`
--
ALTER TABLE `tblcenterunit`
  MODIFY `center_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `tblchartaccount`
--
ALTER TABLE `tblchartaccount`
  MODIFY `office_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `tblcompany`
--
ALTER TABLE `tblcompany`
  MODIFY `CID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tblcontract`
--
ALTER TABLE `tblcontract`
  MODIFY `ContractID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbldelivery`
--
ALTER TABLE `tbldelivery`
  MODIFY `del_id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbldistribution`
--
ALTER TABLE `tbldistribution`
  MODIFY `distribution_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tblduedate`
--
ALTER TABLE `tblduedate`
  MODIFY `DDID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tblformlist`
--
ALTER TABLE `tblformlist`
  MODIFY `FormID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
--
-- AUTO_INCREMENT for table `tblfundsource`
--
ALTER TABLE `tblfundsource`
  MODIFY `fund_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tbllock`
--
ALTER TABLE `tbllock`
  MODIFY `lock_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbllogin`
--
ALTER TABLE `tbllogin`
  MODIFY `LoginID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `tbllotrate`
--
ALTER TABLE `tbllotrate`
  MODIFY `LRID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbloffice`
--
ALTER TABLE `tbloffice`
  MODIFY `office_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tblorsetup`
--
ALTER TABLE `tblorsetup`
  MODIFY `setupID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tblpayment_logs`
--
ALTER TABLE `tblpayment_logs`
  MODIFY `payment_id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblpodtl`
--
ALTER TABLE `tblpodtl`
  MODIFY `podtl_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;
--
-- AUTO_INCREMENT for table `tblpohdr`
--
ALTER TABLE `tblpohdr`
  MODIFY `po_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `tblrisdtl`
--
ALTER TABLE `tblrisdtl`
  MODIFY `ris_dtl_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tblrishdr`
--
ALTER TABLE `tblrishdr`
  MODIFY `ris_idhdr` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tblris_series`
--
ALTER TABLE `tblris_series`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tblsignaturedesignation`
--
ALTER TABLE `tblsignaturedesignation`
  MODIFY `SigID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `tblslc`
--
ALTER TABLE `tblslc`
  MODIFY `slc_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
--
-- AUTO_INCREMENT for table `tblslcactivitylogs`
--
ALTER TABLE `tblslcactivitylogs`
  MODIFY `activity_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=632;
--
-- AUTO_INCREMENT for table `tblslccenters`
--
ALTER TABLE `tblslccenters`
  MODIFY `slc_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
--
-- AUTO_INCREMENT for table `tblsubaccount`
--
ALTER TABLE `tblsubaccount`
  MODIFY `subacct_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=889;
--
-- AUTO_INCREMENT for table `tblsupplier`
--
ALTER TABLE `tblsupplier`
  MODIFY `supplier_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `tblunit`
--
ALTER TABLE `tblunit`
  MODIFY `unit_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `tbluseraccessrights`
--
ALTER TABLE `tbluseraccessrights`
  MODIFY `AccessRghtsControlNo` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=790;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
