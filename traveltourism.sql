-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.0.41-community-nt


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema travelandtourism
--

CREATE DATABASE IF NOT EXISTS travelandtourism;
USE travelandtourism;

--
-- Definition of table `busbooking`
--

DROP TABLE IF EXISTS `busbooking`;
CREATE TABLE `busbooking` (
  `busbookid` int(10) unsigned NOT NULL auto_increment,
  `busid` int(10) unsigned NOT NULL,
  `custid` int(10) unsigned NOT NULL,
  `bookingdate` date NOT NULL,
  `seatqty` int(10) unsigned NOT NULL,
  PRIMARY KEY  (`busbookid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `busbooking`
--

/*!40000 ALTER TABLE `busbooking` DISABLE KEYS */;
INSERT INTO `busbooking` (`busbookid`,`busid`,`custid`,`bookingdate`,`seatqty`) VALUES 
 (1,3,1,'2019-03-03',3);
/*!40000 ALTER TABLE `busbooking` ENABLE KEYS */;


--
-- Definition of table `busdetails`
--

DROP TABLE IF EXISTS `busdetails`;
CREATE TABLE `busdetails` (
  `busid` int(10) unsigned NOT NULL auto_increment,
  `busname` varchar(45) NOT NULL,
  `start` varchar(45) NOT NULL,
  `end` varchar(45) NOT NULL,
  `fare` double NOT NULL,
  `status` varchar(450) NOT NULL,
  `transdetid` int(10) unsigned NOT NULL,
  PRIMARY KEY  (`busid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `busdetails`
--

/*!40000 ALTER TABLE `busdetails` DISABLE KEYS */;
INSERT INTO `busdetails` (`busid`,`busname`,`start`,`end`,`fare`,`status`,`transdetid`) VALUES 
 (3,'Ena','Dhaka','Rajshahi',1200,'Available',9),
 (4,'Ena','Dhaka','Cumilla',1500,'Available',9),
 (5,'Shohag Paribahan','Gazipur','Dhaka',5000,'Available',10),
 (7,'Shohag Paribahan','Dhaka','Gazipur',5000,'Rent',10),
 (8,'Noah','Dhaka','Gazipur',4000,'Rent',7);
/*!40000 ALTER TABLE `busdetails` ENABLE KEYS */;


--
-- Definition of table `custbookingguide`
--

DROP TABLE IF EXISTS `custbookingguide`;
CREATE TABLE `custbookingguide` (
  `custguideid` int(10) unsigned NOT NULL auto_increment,
  `bookingid` int(10) unsigned NOT NULL,
  `gid` int(10) unsigned NOT NULL,
  `rate` double NOT NULL,
  `bookingdate` date NOT NULL,
  PRIMARY KEY  (`custguideid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `custbookingguide`
--

/*!40000 ALTER TABLE `custbookingguide` DISABLE KEYS */;
/*!40000 ALTER TABLE `custbookingguide` ENABLE KEYS */;


--
-- Definition of table `custbookinghotel`
--

DROP TABLE IF EXISTS `custbookinghotel`;
CREATE TABLE `custbookinghotel` (
  `bookingid` int(10) unsigned NOT NULL auto_increment,
  `hdetid` int(10) unsigned NOT NULL,
  `totalroom` int(10) unsigned NOT NULL,
  `subtotal` double NOT NULL,
  `busid` int(10) unsigned NOT NULL,
  `paystatus` varchar(45) NOT NULL,
  PRIMARY KEY  USING BTREE (`bookingid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `custbookinghotel`
--

/*!40000 ALTER TABLE `custbookinghotel` DISABLE KEYS */;
INSERT INTO `custbookinghotel` (`bookingid`,`hdetid`,`totalroom`,`subtotal`,`busid`,`paystatus`) VALUES 
 (98,8,1,1200,0,'Paid'),
 (99,9,1,5765,0,'Pending'),
 (100,8,1,1200,0,'Pending'),
 (414,9,1,5765,0,'Paid'),
 (415,0,1,24000,0,'Pending'),
 (416,9,1,5765,0,'Pending'),
 (417,0,1,45654,0,'Pending'),
 (418,12,1,23423,0,'Pending'),
 (419,9,1,11530,0,'Pending'),
 (420,0,1,14000,0,'Pending'),
 (421,0,1,4000,8,'Pending'),
 (422,0,1,1200,3,'Pending'),
 (423,12,1,23423,0,'Pending'),
 (424,0,1,14000,0,'Pending'),
 (425,9,1,11530,0,'Pending'),
 (426,0,1,1200,3,'Pending'),
 (427,0,1,4000,8,'Pending'),
 (428,12,1,23423,0,'Pending'),
 (429,0,1,2400,3,'Pending'),
 (430,18,1,333,0,'Pending'),
 (431,0,1,3000,4,'Pending'),
 (433,11,1,16000,0,'Pending'),
 (434,9,1,5765,0,'Pending'),
 (435,0,1,8000,8,'Paid'),
 (436,0,1,1200,3,'Paid'),
 (437,0,1,24000,0,'Pending'),
 (438,9,1,5765,0,'Pending'),
 (439,0,1,14000,0,'Paid'),
 (440,18,1,333,0,'Pending'),
 (441,0,1,24000,0,'Pending');
/*!40000 ALTER TABLE `custbookinghotel` ENABLE KEYS */;


--
-- Definition of table `customerbooking`
--

DROP TABLE IF EXISTS `customerbooking`;
CREATE TABLE `customerbooking` (
  `bookingid` int(10) unsigned NOT NULL auto_increment,
  `custid` int(10) unsigned NOT NULL,
  `tpackid` int(10) unsigned NOT NULL default '0',
  `tourstart` varchar(45) NOT NULL,
  `tourend` varchar(45) NOT NULL,
  `totalperson` int(10) unsigned NOT NULL,
  `bookingdate` datetime NOT NULL,
  PRIMARY KEY  (`bookingid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerbooking`
--

/*!40000 ALTER TABLE `customerbooking` DISABLE KEYS */;
INSERT INTO `customerbooking` (`bookingid`,`custid`,`tpackid`,`tourstart`,`tourend`,`totalperson`,`bookingdate`) VALUES 
 (98,1,0,'2020-06-06','2020-06-07',1,'2020-06-16 14:44:36'),
 (99,1,0,'2020-06-06','2020-06-07',1,'2020-06-16 14:44:36'),
 (100,1,0,'2020-06-06','2020-06-07',1,'2020-06-16 15:01:44'),
 (414,1,0,'2020-08-14','2020-08-15',1,'2020-08-13 13:46:28'),
 (415,1,0,'2020-08-14','2020-08-15',1,'2020-08-13 13:46:28'),
 (416,1,1,'2020-08-06','2020-08-07',1,'2020-08-13 13:49:11'),
 (417,1,5,'2020-08-11','2020-08-12',1,'2020-08-13 13:49:11'),
 (418,1,0,'2020-08-14','2020-08-16',1,'2020-08-13 13:50:35'),
 (419,1,1,'2020-08-14','2020-08-15',1,'2020-08-13 13:50:35'),
 (420,1,3,'2020-08-18','2020-08-20',1,'2020-08-13 13:50:35'),
 (421,1,0,'2020-08-26','2020-08-26',1,'2020-08-13 13:50:35'),
 (422,1,0,'2020-08-25','2020-08-25',1,'2020-08-13 13:50:35'),
 (423,1,0,'2020-08-14','2020-08-16',1,'2020-08-13 13:52:52'),
 (424,1,3,'2020-08-14','2020-08-15',1,'2020-08-13 13:52:52'),
 (425,1,3,'2020-08-18','2020-08-20',1,'2020-08-13 13:52:52'),
 (426,1,0,'2020-08-25','2020-08-25',1,'2020-08-13 13:52:52'),
 (427,1,0,'2020-08-26','2020-08-26',1,'2020-08-13 13:52:52'),
 (428,53,0,'2020-08-26','2020-08-27',1,'2020-08-13 14:00:27'),
 (429,53,0,'2020-08-26','2020-08-27',1,'2020-08-13 14:00:27'),
 (430,53,0,'2020-08-20','2020-08-21',1,'2020-08-13 14:04:44'),
 (431,53,0,'2020-08-20','2020-08-21',1,'2020-08-13 14:04:44'),
 (433,53,0,'2020-08-25','2020-08-26',1,'2020-08-13 14:07:09'),
 (434,53,0,'2020-08-30','2020-08-31',1,'2020-08-13 14:07:09'),
 (435,53,0,'2020-08-30','2020-08-31',1,'2020-08-13 14:07:09'),
 (436,53,0,'2020-08-30','2020-08-30',1,'2020-08-13 14:07:09'),
 (437,1,1,'2020-08-26','2020-08-27',1,'2020-08-24 10:13:06'),
 (438,1,0,'2020-08-25','2020-08-26',1,'2020-08-24 10:13:06'),
 (439,1,3,'2020-08-25','2020-08-26',1,'2020-08-24 14:49:27'),
 (440,1,0,'2020-08-25','2020-08-26',1,'2020-08-24 15:05:35'),
 (441,1,1,'2020-08-31','2020-08-01',1,'2020-08-24 16:01:21');
/*!40000 ALTER TABLE `customerbooking` ENABLE KEYS */;


--
-- Definition of table `customerinfo`
--

DROP TABLE IF EXISTS `customerinfo`;
CREATE TABLE `customerinfo` (
  `custid` int(10) unsigned NOT NULL auto_increment,
  `custname` varchar(45) NOT NULL,
  `custphone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `custaddress` varchar(450) NOT NULL,
  `image` varchar(45) NOT NULL,
  PRIMARY KEY  (`custid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerinfo`
--

/*!40000 ALTER TABLE `customerinfo` DISABLE KEYS */;
INSERT INTO `customerinfo` (`custid`,`custname`,`custphone`,`email`,`custaddress`,`image`) VALUES 
 (1,'Md. Foysal Ahmed','1','aaa@aa.com','Abdullahpur, Dhaka-1230','https://i.ibb.co/hYWjSTQ/person2.jpg'),
 (16,'kbkj  kjkj sdfsdf','21231211','gfd@fgf.com','qw','hgfhf'),
 (17,'jhj','65465','gdfd@fgf.com','nhnhgg','zdcc'),
 (18,'hjjgjh','5435435','hfh@df.lkj','hg','zdczxc'),
 (19,'sfjvjh','8779678697','zklfjvzkd@hsjh.sjhhj','shfzkusdh','zcc'),
 (21,'ajob','123','faltu@gmail.com','abc','zczx'),
 (22,'bjhbmh','8768','kjhjh@bnm.jj','jkj','zxcx'),
 (23,'gdchgjdc','1762576','kjdshk@ds.werf','hsdhg sdisk','xzcxc'),
 (33,'Md. Iftekhar Hossain','01521221338','iftekharhossain395@gmail.com','Borobari, National University, Gazipur.','zxcxc'),
 (49,'Md. Ishtiaq Hossain','01934839128','ihossain395@gmail.com','Gazipur, Dhaka, Bangladesh.','zxcxzc'),
 (50,'limon','340459569834752','adafdhag@jsfh.fs','frelj fjllkmg kjf',''),
 (51,'iftekhar hossain','1029387464','limon@hgm.com','Gazipur',''),
 (52,'jhjh','8668','dd@dd.nn','jhjh',''),
 (53,'Md. Noyon','01892732637','noyon@gmail.com','Demra',''),
 (54,'Alam','0123928398','dfhdfhgk@gj.cc','sdfsmdfm sdfsdf','');
/*!40000 ALTER TABLE `customerinfo` ENABLE KEYS */;


--
-- Definition of table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback` (
  `fid` int(10) unsigned NOT NULL auto_increment,
  `custid` int(10) unsigned NOT NULL,
  `feedbackfor` varchar(45) NOT NULL,
  `comment` varchar(450) NOT NULL,
  PRIMARY KEY  (`fid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` (`fid`,`custid`,`feedbackfor`,`comment`) VALUES 
 (1,1,'jhgh','jghj');
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;


--
-- Definition of table `guide`
--

DROP TABLE IF EXISTS `guide`;
CREATE TABLE `guide` (
  `gid` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(45) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  `address` varchar(450) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY  (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `guide`
--

/*!40000 ALTER TABLE `guide` DISABLE KEYS */;
INSERT INTO `guide` (`gid`,`name`,`mobile`,`address`,`email`) VALUES 
 (1,'fffjgfj','5456465476','mb bbb mbbm','fgfdg@dgf.hjk'),
 (2,'Iftekhar Hossain','018474453425','Gazipur','iftekharhossain395@gmail.com');
/*!40000 ALTER TABLE `guide` ENABLE KEYS */;


--
-- Definition of table `hotelagent`
--

DROP TABLE IF EXISTS `hotelagent`;
CREATE TABLE `hotelagent` (
  `hagentid` int(10) unsigned NOT NULL auto_increment,
  `hagentname` varchar(45) NOT NULL,
  `hagentmobile` varchar(45) NOT NULL,
  `hagentaddress` varchar(450) NOT NULL,
  `emailid` varchar(45) NOT NULL,
  PRIMARY KEY  (`hagentid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotelagent`
--

/*!40000 ALTER TABLE `hotelagent` DISABLE KEYS */;
INSERT INTO `hotelagent` (`hagentid`,`hagentname`,`hagentmobile`,`hagentaddress`,`emailid`) VALUES 
 (1,'ffvf','1231321','fvfdg','ffg@gfg.jg'),
 (2,'ffvf','123','fvfdg','ffg@gfg.jg'),
 (4,'ffvf','123','fvfdg','ffg@gfg.jg'),
 (5,'hbmh bnmjn','64675448','ghjghmb','nbmnb@hgfgf.kjh'),
 (6,'zjvbf','273869327','sdfjdg sdch sch cihs ','sdmbmds@zhbz.xck');
/*!40000 ALTER TABLE `hotelagent` ENABLE KEYS */;


--
-- Definition of table `hoteldetails`
--

DROP TABLE IF EXISTS `hoteldetails`;
CREATE TABLE `hoteldetails` (
  `hdetid` int(10) unsigned NOT NULL auto_increment,
  `hagentid` int(10) unsigned NOT NULL,
  `roomtype` varchar(45) NOT NULL,
  `rent` double NOT NULL,
  `facilities` varchar(1000) NOT NULL,
  `type` varchar(45) NOT NULL,
  `imgurl` varchar(450) NOT NULL,
  PRIMARY KEY  (`hdetid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoteldetails`
--

/*!40000 ALTER TABLE `hoteldetails` DISABLE KEYS */;
INSERT INTO `hoteldetails` (`hdetid`,`hagentid`,`roomtype`,`rent`,`facilities`,`type`,`imgurl`) VALUES 
 (8,1,'single',1200,'ghg gjhg jhg hgj jgjh yguygyf rd tgu','Hotel','https://i.ibb.co/Kyc54GD/BBlf9-Zf-img.jpg'),
 (9,2,'jhjkhkj',5765,'kjhkhl','Hotel','https://i.ibb.co/v3cKYmv/maxresdefault.jpg'),
 (10,2,'AC',24000,'vfvd vfjv oij usg sidh ihdv jhgh hjbj jg h hg hghhhhhhhh hvbj jhgj jhgv sdghdos siyd sdjb dsdjgd d gdvdsjkvbds vgfdv dsgv dfvg dvjgsjkvdbs','Resort','https://i.ibb.co/37CQhbF/bhawal-resort-and-spa-1024x576.jpg'),
 (11,1,'Non AC',16000,'asj jsdhvb sdvh sdvnj','Resort','https://i.ibb.co/cbxqQvb/mermaid-eco-resort.jpg'),
 (12,1,'dffg',23423,'xfvfxvfvs','Resort','https://i.ibb.co/cbxqQvb/mermaid-eco-resort.jpg'),
 (13,1,'thtr',1234,'ghgfhg','Resort','https://i.ibb.co/37CQhbF/bhawal-resort-and-spa-1024x576.jpg'),
 (14,2,'rtg',3455,'tyhtyh','Resort','https://i.ibb.co/cbxqQvb/mermaid-eco-resort.jpg'),
 (15,1,'rtgrt',6454,'tyhyth','Resort','https://i.ibb.co/37CQhbF/bhawal-resort-and-spa-1024x576.jpg'),
 (16,2,'rtg',1233,'tyhtyh','Resort','https://i.ibb.co/cbxqQvb/mermaid-eco-resort.jpg'),
 (17,1,'rtg',433,'tyhty','Resort','https://i.ibb.co/37CQhbF/bhawal-resort-and-spa-1024x576.jpg'),
 (18,2,'fgbgf',333,'dfgdf','Hotel','https://i.ibb.co/Kyc54GD/BBlf9-Zf-img.jpg'),
 (19,1,'gbgf',456,'ghnhgngfg','Hotel','https://i.ibb.co/v3cKYmv/maxresdefault.jpg'),
 (20,2,'hng',756,'dgfdg','Hotel','https://i.ibb.co/Kyc54GD/BBlf9-Zf-img.jpg'),
 (21,1,'rege',987,'ghgfh','Hotel','https://i.ibb.co/v3cKYmv/maxresdefault.jpg'),
 (22,2,'rthrth',7076,'hgjh','Hotel','https://i.ibb.co/Kyc54GD/BBlf9-Zf-img.jpg'),
 (23,1,'dfgd',6555,'sdfsd','Hotel','https://i.ibb.co/v3cKYmv/maxresdefault.jpg');
/*!40000 ALTER TABLE `hoteldetails` ENABLE KEYS */;


--
-- Definition of table `hotelimage`
--

DROP TABLE IF EXISTS `hotelimage`;
CREATE TABLE `hotelimage` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `picByte` blob NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotelimage`
--

/*!40000 ALTER TABLE `hotelimage` DISABLE KEYS */;
/*!40000 ALTER TABLE `hotelimage` ENABLE KEYS */;


--
-- Definition of table `receivepayment`
--

DROP TABLE IF EXISTS `receivepayment`;
CREATE TABLE `receivepayment` (
  `payid` int(10) unsigned NOT NULL auto_increment,
  `custid` int(10) unsigned NOT NULL,
  `bookingid` int(10) unsigned NOT NULL,
  `paydate` date NOT NULL,
  `amount` double NOT NULL,
  `paytype` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY  (`payid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `receivepayment`
--

/*!40000 ALTER TABLE `receivepayment` DISABLE KEYS */;
INSERT INTO `receivepayment` (`payid`,`custid`,`bookingid`,`paydate`,`amount`,`paytype`,`status`) VALUES 
 (2,1,1,'2020-03-26',500,'bkash','False'),
 (3,1,1,'2020-03-27',5000,'bkash','True'),
 (4,1,56,'2020-03-26',4500,'hbh','False'),
 (5,0,0,'2020-06-18',0,'','Paid'),
 (6,0,181,'2020-06-18',5765,'','Paid'),
 (7,0,182,'2020-06-18',1200,'','Paid'),
 (8,0,183,'2020-06-18',1200,'','Paid'),
 (9,0,185,'2020-06-18',1200,'Credit Card','Paid'),
 (10,1,190,'2020-06-18',17295,'Bkash','Paid'),
 (11,1,192,'2020-06-18',1200,'Bkash','Paid'),
 (12,1,203,'2020-06-18',5765,'Bkash','Paid'),
 (13,1,204,'2020-06-18',1200,'Rocket','Paid'),
 (14,1,286,'2020-07-20',8000,'Credit Card','Paid'),
 (15,1,319,'2020-08-07',333,'Bkash','Paid'),
 (16,1,327,'2020-08-11',6454,'Debit Card','Paid'),
 (17,1,328,'2020-08-11',24000,'Bkash','Paid'),
 (18,1,329,'2020-08-11',45654,'Bkash','Paid'),
 (19,1,330,'2020-08-11',12312,'Rocket','Paid'),
 (20,1,331,'2020-08-11',456,'Bkash','Paid'),
 (21,1,332,'2020-08-11',1233,'Debit Card','Paid'),
 (22,1,333,'2020-08-11',23423,'Debit Card','Paid'),
 (23,1,334,'2020-08-11',45654,'Rocket','Paid'),
 (24,1,338,'2020-08-11',2400,'Debit Card','Paid'),
 (25,1,339,'2020-08-11',433,'Debit Card','Paid'),
 (26,1,344,'2020-08-11',6569,'Bkash','Paid'),
 (27,1,345,'2020-08-11',450,'Rocket','Paid'),
 (28,1,346,'2020-08-11',987,'Rocket','Paid'),
 (29,1,348,'2020-08-11',456,'Bkash','Paid'),
 (30,1,349,'2020-08-11',7999,'Bkash','Paid'),
 (31,1,352,'2020-08-11',433,'Credit Card','Paid'),
 (32,1,353,'2020-08-11',650,'Bkash','Paid'),
 (55,1,414,'2020-08-24',5765,'Bkash','Paid'),
 (56,1,439,'2020-08-24',5765,'Bkash','Paid'),
 (57,1,414,'2020-08-24',5765,'Bkash','Paid');
/*!40000 ALTER TABLE `receivepayment` ENABLE KEYS */;


--
-- Definition of table `tourpackage`
--

DROP TABLE IF EXISTS `tourpackage`;
CREATE TABLE `tourpackage` (
  `tpackid` int(10) unsigned NOT NULL auto_increment,
  `tpackfrom` varchar(45) NOT NULL,
  `tpackto` varchar(45) NOT NULL,
  `tpackfare` double NOT NULL,
  `packagetype` varchar(150) NOT NULL,
  `packageday` varchar(45) NOT NULL,
  `packdesc` varchar(450) NOT NULL,
  `packimg` varchar(450) NOT NULL,
  PRIMARY KEY  (`tpackid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tourpackage`
--

/*!40000 ALTER TABLE `tourpackage` DISABLE KEYS */;
INSERT INTO `tourpackage` (`tpackid`,`tpackfrom`,`tpackto`,`tpackfare`,`packagetype`,`packageday`,`packdesc`,`packimg`) VALUES 
 (1,'Dhaka','Cox\'s Bazar',24000,'Family','2 Nights 3 Days','bcb kkjn ljlk jnkj','https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzRkMTRlMzFlLTdkNzAtNDE5NS05ZmU5LTI5OGUyY2M3NzljZmY0ZjFhYjI3MTQyOGZjZmZiZF8xMjAwcHgtQ294J3NfQmF6YXJfYmVhY2hfMTAxMC5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/1200px-Cox%27s_Bazar_beach_1010.jpg'),
 (3,'Dhaka','Patuakhali',14000,'Friends','1 night 2 days','hjgjhh jkygjh jyg jh mhg jh','https://tbsnews.net/sites/default/files/styles/very_big_1/public/images/2020/03/16/coxs_bazar_0.jpg'),
 (4,'Dhaka','jgh',6569,'Offers','bnb','jhgh','https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzRkMTRlMzFlLTdkNzAtNDE5NS05ZmU5LTI5OGUyY2M3NzljZmY0ZjFhYjI3MTQyOGZjZmZiZF8xMjAwcHgtQ294J3NfQmF6YXJfYmVhY2hfMTAxMC5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/1200px-Cox%27s_Bazar_beach_1010.jpg'),
 (5,'Dhaka','xcv',45654,'Family','dgfv','dfg','https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2FlZDY3NWZiLTYwNDctNGRmOS05NzY1LTk5OTM4ZTkyOTE2NmY2NmI4YjU1Mjk4ZjhjMDc0Ml84MDBweC1Db3gnc19CYXphcl9ib2F0cy5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/800px-Cox%27s_Bazar_boats.jpg'),
 (6,'Dhaka','mnbm',20000,'Group','ghnvb ','hbh jh jhj juhkjh kg khm','https://i.ibb.co/b2VW35H/800px-Cox-s-Bazar-boats.jpg'),
 (7,'Dhaka','fxv',2423,'Group','cbc','dfg dfxgvd dfvdrv','https://tbsnews.net/sites/default/files/styles/very_big_1/public/images/2020/03/16/coxs_bazar_0.jpg'),
 (8,'Dhaka','dfgd',654,'Family','cvbc','dfgdfv','https://i.ibb.co/b2VW35H/800px-Cox-s-Bazar-boats.jpg'),
 (9,'Dhaka','zdc',12312,'Offers','sdfd','fgfd','https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzRkMTRlMzFlLTdkNzAtNDE5NS05ZmU5LTI5OGUyY2M3NzljZmY0ZjFhYjI3MTQyOGZjZmZiZF8xMjAwcHgtQ294J3NfQmF6YXJfYmVhY2hfMTAxMC5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/1200px-Cox%27s_Bazar_beach_1010.jpg');
/*!40000 ALTER TABLE `tourpackage` ENABLE KEYS */;


--
-- Definition of table `transportagent`
--

DROP TABLE IF EXISTS `transportagent`;
CREATE TABLE `transportagent` (
  `tagentid` int(10) unsigned NOT NULL auto_increment,
  `tagentname` varchar(45) NOT NULL,
  `tagentmobile` varchar(45) NOT NULL,
  `tagentaddress` varchar(450) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY  (`tagentid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transportagent`
--

/*!40000 ALTER TABLE `transportagent` DISABLE KEYS */;
INSERT INTO `transportagent` (`tagentid`,`tagentname`,`tagentmobile`,`tagentaddress`,`email`) VALUES 
 (1,'sda','434','ssdsdss','abc@gmail.com');
/*!40000 ALTER TABLE `transportagent` ENABLE KEYS */;


--
-- Definition of table `transportdetails`
--

DROP TABLE IF EXISTS `transportdetails`;
CREATE TABLE `transportdetails` (
  `transdetid` int(10) unsigned NOT NULL auto_increment,
  `tagentid` int(10) unsigned NOT NULL,
  `tpackid` int(10) unsigned NOT NULL,
  `transtype` varchar(45) NOT NULL,
  `transdetails` varchar(450) NOT NULL,
  `image` varchar(4500) NOT NULL,
  PRIMARY KEY  (`transdetid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transportdetails`
--

/*!40000 ALTER TABLE `transportdetails` DISABLE KEYS */;
INSERT INTO `transportdetails` (`transdetid`,`tagentid`,`tpackid`,`transtype`,`transdetails`,`image`) VALUES 
 (7,1,0,'Car','ss sac bmhhn   ia ias sa sa as asicgals cagcascls cas ca scasc ascga scaslcgascas cas casgca scgaskc ask','https://upload.wikimedia.org/wikipedia/commons/3/3e/SteamMachineOfVerbiestIn1678.jpg'),
 (8,1,0,'Car',' jseh askhdc sadkuhc sku hcskhc skdhc kashc s dcsdhckashc shdc skhclksdhc lksadhc sdhcklasdhckasdkchsdkdchksjdj','https://upload.wikimedia.org/wikipedia/commons/1/15/Late_model_Ford_Model_T.jpg'),
 (9,1,0,'Bus','jsdh kdh sdf sdfhas faksdhf a','https://upload.wikimedia.org/wikipedia/commons/4/48/Murrays_-_Quad_axle_Austral_Pacific_bodied_Scania_K113TRBL_14-5m_00.jpg'),
 (10,1,0,'Bus','sdhf khzd fZKH ','https://upload.wikimedia.org/wikipedia/commons/6/6e/MTC_white_line_bus.jpg'),
 (11,1,0,'Bus','sjdfh sdf sidyfis dhfs fd','https://upload.wikimedia.org/wikipedia/commons/6/6e/MTC_white_line_bus.jpg'),
 (12,1,0,'Bus','jsdh kdh sdf sdfhas faksdhf a','https://upload.wikimedia.org/wikipedia/commons/4/48/Murrays_-_Quad_axle_Austral_Pacific_bodied_Scania_K113TRBL_14-5m_00.jpg'),
 (13,1,0,'Car','jsdh kdh sdf sdfhas faksdhf a','https://upload.wikimedia.org/wikipedia/commons/3/3e/SteamMachineOfVerbiestIn1678.jpg'),
 (15,1,0,'Car','jsdh kdh sdf sdfhas faksdhf a','https://upload.wikimedia.org/wikipedia/commons/1/15/Late_model_Ford_Model_T.jpg');
/*!40000 ALTER TABLE `transportdetails` ENABLE KEYS */;


--
-- Definition of table `transtype`
--

DROP TABLE IF EXISTS `transtype`;
CREATE TABLE `transtype` (
  `id` int(10) unsigned NOT NULL default '0',
  `bus` varchar(45) NOT NULL,
  `car` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `hotel` varchar(45) NOT NULL,
  `resort` varchar(45) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transtype`
--

/*!40000 ALTER TABLE `transtype` DISABLE KEYS */;
INSERT INTO `transtype` (`id`,`bus`,`car`,`status`,`hotel`,`resort`) VALUES 
 (0,'Bus','Car','False','Hotel','Resort');
/*!40000 ALTER TABLE `transtype` ENABLE KEYS */;


--
-- Definition of table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `emailid` varchar(45) NOT NULL,
  `phoneno` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY  (`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`emailid`,`phoneno`,`username`) VALUES 
 ('aaa@aa.com','123','fsdfd'),
 ('ghgh@fgd.kjh','131213','hgfhfg'),
 ('iftekharhossain395@gmail.com','345463','gfdgfb'),
 ('sfshgd@hb.kjl','12323123','sdfsdf');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


--
-- Definition of table `userrole`
--

DROP TABLE IF EXISTS `userrole`;
CREATE TABLE `userrole` (
  `emailid` varchar(450) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY  USING BTREE (`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userrole`
--

/*!40000 ALTER TABLE `userrole` DISABLE KEYS */;
INSERT INTO `userrole` (`emailid`,`password`,`role`,`status`) VALUES 
 ('aaa@aa.com','3212','Customer','Active'),
 ('adafdhag@jsfh.fs','45434','Customer','Active'),
 ('bbbbb@es.nnn','23232','Agent','Active'),
 ('dffd@werf.kk','78887','Customer','Active'),
 ('dfhdfhgk@gj.cc','111','Customer','Active'),
 ('ew@sdf.sfd','3132132','Customer','Active'),
 ('fghh@svbd.dsf','3454','Customer','Active'),
 ('ghfhg@th.kjhg','35','Customer','Active'),
 ('hgf@rghjk.lkjh','1324','Customer','Active'),
 ('himel@gmail.com','4523765','Agent','c'),
 ('iftekharhossain395@gmail.com','0000','Admin','Active'),
 ('ihossain395@gmail.com','3344','Agent','Active'),
 ('jhgjh@dfgh.lk','1231h','Customer','Active'),
 ('khkj@djfk.sedf','5646546','Customer','Active'),
 ('limon@hgm.com','434','Customer','Active'),
 ('noyon@gmail.com','123','Agent','Active'),
 ('sad@sr.ki','564553','Customer','Active'),
 ('sdf@sd.sdf','1221','Customer','Active'),
 ('sfshgd@hb.kjl','123','Customer','Active'),
 ('zzz@zzzzz.zz','87654','Customer','e');
/*!40000 ALTER TABLE `userrole` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
