create database greatBay;

use greatBay;

CREATE TABLE bidItems (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	item VARCHAR(50) NOT NULL,
	category VARCHAR(50) NOT NULL,
	startingBid Int(11) NOT NuLL,
 -- Set the primary key of the table to id --
	PRIMARY KEY  (id)
);

CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO users (first_name, last_name, email, password)
VALUES ("Phil", "Stubbs", "example@gmail.com", "Password1");

INSERT INTO users (first_name, last_name, email, password)
VALUES ("Lonzo", "Ball", "ball@gmail.com", "Password2");



INSERT INTO bidItems (item, category, startingBid)
VALUES("Derek Jeter Autographed Baseball Glove", "Memorabilia", 1000);





