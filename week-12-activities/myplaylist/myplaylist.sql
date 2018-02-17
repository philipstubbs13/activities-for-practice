create database myplaylist;

use myplaylist;

CREATE TABLE playlists (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	title VARCHAR(50) NOT NULL,
	artist VARCHAR(50) NOT NULL,
	genre VARCHAR(50) NOT NuLL,
 -- Set the primary key of the table to id --
	PRIMARY KEY  (id)
);

INSERT INTO playlists (title, artist, genre)
VALUES("What Ifs", "Kane Brown", "Country"), ("I Want it That Way", "Backstreet Boys", "pop"), ("Legends","Kelsea Ballerini", "Country");

INSERT INTO playlists (title, artist, genre)
VALUES("Life is a Highway", "Rascal Flats", "Country"), ("Cruise", "Florida Georgia Line", "Country"), ("I Like the Sound of that", "Rascal Flatts", "Country");

INSERT INTO playlists (title, artist, genre)
VALUES ("Hello", "Adele", "pop");

select * from playlists;

delete from playlists where id in (1,3,4,5,6);

delete from playlists;