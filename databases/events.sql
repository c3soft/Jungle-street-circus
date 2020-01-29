CREATE DATABASE events;
USE events;
CREATE TABLE `events` (
    `id_event` int auto_increment NOT NULL PRIMARY KEY,
    `name` varchar(50) NOT NULL,
    `start_date` DATETIME NOT NULL,
    `end_date` DATETIME NOT NULL,
);