-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2015 at 08:14 PM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wedding`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `message` text NOT NULL,
  `attending` varchar(25) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `message`, `attending`) VALUES
(1, 'Mudit Dhagat', 'er.ashishsinghchouhan', '+919923225860', '', 'Attending'),
(2, 'Mudit Dhagat', 'muditdhagat@gmail.com', '+919923225860', 'okay lets see this in action', 'Trying');

-- --------------------------------------------------------

--
-- Table structure for table `wishes`
--

CREATE TABLE IF NOT EXISTS `wishes` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `relation` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `email` varchar(150) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wishes`
--

INSERT INTO `wishes` (`id`, `name`, `relation`, `message`, `email`) VALUES
(1, 'Shuchita Selot', 'Sister', 'Wish you a happy married life !', 'shuchit.selot@gmail.com'),
(2, 'Aditya Garg', 'Brother in Law', 'Wish you a very happy and prosperous married life.', 'adi.garg22@gmail.com'),
(3, 'Shruti Dhagat', 'Sister', 'Wish you a very happy and prosperous married life ahead. Enjoy your time together.', 'shrutidhagat@gmail.com'),
(4, 'Aditi Garg', 'Wife', 'Hey Couple !  You look Cute together, Super Cool infact. And a Lovely Website, Nice work man. \n\nKeep in touch', 'aditigarg246@gmail.com'),
(5, 'Mudit', 'Self', 'Wooahh.. The website looks classy man.', 'muditdhagat@gmail'),
(6, 'Prateek Ghate', 'Friend', 'Wish you a happy life !', 'prateekghate89@gmail'),
(7, 'Harjot', 'Friend', 'Hey ! Wish you a happy life ahead.', 'hardymax@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishes`
--
ALTER TABLE `wishes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `wishes`
--
ALTER TABLE `wishes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
