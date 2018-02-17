DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
    position INT NOT NULL,
	artist VARCHAR(100) NOT NULL,
	song VARCHAR(100) NOT NULL,
	year INT NOT NULL,
	raw_total DECIMAL(10,4) NULL,
	raw_usa DECIMAL(10,4) NULL,
	raw_uk DECIMAL(10,4) NULL,
	raw_eur DECIMAL(10,4) NULL,
	raw_row DECIMAL(10,4) NULL,
 -- Set the primary key of the table to id --
	PRIMARY KEY (position)
);

CREATE TABLE topAlbums (
    position INT NOT NULL,
	artist VARCHAR(100) NOT NULL,
	album VARCHAR(100) NOT NULL,
	year INT NOT NULL,
	raw_total DECIMAL(10,4) NULL,
	raw_usa DECIMAL(10,4) NULL,
	raw_uk DECIMAL(10,4) NULL,
	raw_eur DECIMAL(10,4) NULL,
	raw_row DECIMAL(10,4) NULL,
 -- Set the primary key of the table to id --
	PRIMARY KEY (position)
);

SELECT * FROM top5000;

ALTER TABLE top5000 ADD INDEX artist_index(artist);

CREATE INDEX artist_index ON top5000 (artist);

SELECT top5000.artist, top5000.song, top5000.year, top5000.position, album
FROM top5000
RIGHT JOIN topalbums ON top5000.year = topalbums.year;

SELECT topalbums.year, topalbums.album, topalbums.position, topalbums.song, topalbums.artist 
FROM topalbums
INNER JOIN top5000 ON (topalbums.artist = top5000.artist AND topalbums.year = topalbums.year)
WHERE (topalbums.artist = ? AND topalbums.artist = ?)
ORDER BY topalbums.year;



