-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2021 at 07:04 AM
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
(4, 'schema', '449f834b4a9ad516417c4f675f94b676', '449f834b4a9ad516417c4f675f94b676', 'SCHEMA ADMIN', 'Kurt T. Tiempo', 'Admin', 'Kurt', 'Tiempo', 'Tiempo', '0000-00-00', 'ADMIN', 0),
(5, 'JAYSON', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'ADMIN', 'JAYSON C. CAGA-ANAN', '', 'JAYSON', 'C', 'CAGA-ANAN', '0000-00-00', 'DRMD', 10),
(6, 'JOEY', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'JOEY  HUKDONG', '', 'JOEY', '', 'HUKDONG', '0000-00-00', 'DRMD', 10),
(7, 'FELIX', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'FELIX  BILBAR', '', 'FELIX', '', 'BILBAR', '0000-00-00', 'DRMD', 10),
(9, 'DRMD', '97db1846570837fce6ff62a408f1c26a', '97db1846570837fce6ff62a408f1c26a', 'ADMIN', 'DRMD  admin', '', 'DRMD', '', 'admin', '0000-00-00', 'DRMD', 10),
(11, 'Supply', '97db1846570837fce6ff62a408f1c26a', '97db1846570837fce6ff62a408f1c26a', 'ADMIN', 'Supply  Admin', '', 'Supply', '', 'Admin', '0000-00-00', 'SUPPLY', 9),
(12, 'Jade', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'ADMIN', 'Jade  Lustre', '', 'Jade', '', 'Lustre', '0000-00-00', '', 0),
(13, 'FRANCIS', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'FRANCIS  MONDAGA', '', 'FRANCIS', '', 'MONDAGA', '0000-00-00', 'HG', 4),
(14, 'Daryl', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'SUPPLY', 'Daryl  Tanggol', '', 'Daryl', '', 'Tanggol', '0000-00-00', 'RO - SUPPLY', 9),
(15, 'SUPPLY', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'SUPPLY', 'SUPPLY  CUSTODIAN', '', 'SUPPLY', '', 'CUSTODIAN', '0000-00-00', 'RO - SUPPLY', 9),
(16, 'Blanch', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'AA', 'Blanch  Acero', '', 'Blanch', '', 'Acero', '0000-00-00', 'RO- FMD', 12),
(17, 'PANTAWID', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'PANTAWID  ADMIN', '', 'PANTAWID', '', 'ADMIN', '0000-00-00', 'PANTAWID', 8),
(18, 'Irene', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'Irene  Acao', '', 'Irene', '', 'Acao', '0000-00-00', 'PANTAWID', 8),
(19, 'Rhean', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'MEMBER', 'Rhean S. Esfra', '', 'Rhean', 'S', 'Esfra', '0000-00-00', 'KALAHI', 25),
(20, 'Julian Martin', 'ab1768ab5bf8233b648a6bb58977e655', 'ab1768ab5bf8233b648a6bb58977e655', 'VIEWER', 'Julian Martin S. Dollente', '', 'Julian Martin', 'S', 'Dollente', '0000-00-00', '', 0),
(21, 'Lyra', '05108f5fc08d3b5897adf1691598fafb', '05108f5fc08d3b5897adf1691598fafb', 'VIEWER', 'Lyra  Ilagan', '', 'Lyra', '', 'Ilagan', '0000-00-00', '', 0),
(22, 'Rey', '0ad3a40dbad50a6fb2c672e73ed2c493', '0ad3a40dbad50a6fb2c672e73ed2c493', 'ADMIN', 'Rey  Molina', '', 'Rey', '', 'Molina', '0000-00-00', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbllogin`
--
ALTER TABLE `tbllogin`
  ADD PRIMARY KEY (`LoginID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbllogin`
--
ALTER TABLE `tbllogin`
  MODIFY `LoginID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
