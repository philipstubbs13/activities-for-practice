-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Make a string column called "food" which cannot contain null --
	food VARCHAR(50) NOT NULL,
  -- Make an numeric column called "score" --
	score INTEGER(11) NOT NULL,
    primary key (id)
);

INSERT INTO favorite_foods (food,score)
VALUES ("pizza", 100), ("burger", 50), ("cheesecake", 90), ("cookies", 87)

select * from favorite_foods;

delete from favorite_foods where id = 3;


CREATE TABLE favorite_songs (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Make a string column called "song" which cannot contain null --
	song VARCHAR(100) NOT NULL,
  -- Make a string column called "artist" --
	artist VARCHAR(50) NOT NULL,
  -- Make an integer column called "score" --
	score INTEGER(11) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("What Ifs", "Kane Brown", 100), ("Legends", "Kelsea Ballerini", 90), ("Rascal Flats", "Life is a Highway", 95)

CREATE TABLE favorite_movies (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  -- Create a string column called "movie" which cannot be null --
	movie VARCHAR(50) NOT NULL,
 -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
	five_times BOOLEAN DEFAULT false,
 -- Make an integer column called "score" --
	score INTEGER(11) NOT NULL,
 -- Set the primary key of the table to id --
	PRIMARY KEY  (id)
);

INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Social Network", TRUE, 100), ("Hunger Games", TRUE, 96), ("Notebook", FALSE, 74)

UPDATE favorite_movies
SET movie = "Mockingjay", five_times = FALSE, score = 85
WHERE id =2;