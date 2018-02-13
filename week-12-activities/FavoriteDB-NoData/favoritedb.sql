DROP DATABASE IF EXISTS favorite;

CREATE DATABASE favorite;

USE favorite;

CREATE TABLE favorite_foods (
  id INTEGER(11) AUTO_INCREMENT NOT NULL, 
  food VARCHAR(50) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  score INTEGER(10),
  PRIMARY KEY (id)
);


CREATE TABLE favorite_song (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  song VARCHAR(100) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  artist VARCHAR(50) NOT NULL,
  score INTEGER(10),
  PRIMARY KEY (id)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(100) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN DEFAULT false,
  -- Make an integer column called "score" --
  score INTEGER(10),
  -- Set the primary key of the table to id --
  PRIMARY KEY (id)
);

SELECT * FROM favorite.favorite_foods;

delete from favorite_foods where id = 6;

INSERT INTO favorite_foods (food, score) VALUES ("Pizza", 100), ("Chicken", 56), ("Cookies", 23);

INSERT INTO favorite_foods (food, score) VALUES ("Donuts", 90);

INSERT INTO favorite_foods (food, score) VALUES ("Chocolate", 80);

INSERT INTO favorite_song (song, artist, score) VALUES ("What ifs", "Kane Brown", 75);

INSERT INTO favorite_song (song, artist, score) VALUES ("I want it that way", "Backstreet Boys", 100);

INSERT INTO favorite_song (song, artist, score) VALUES ("songtitle", "songartist", 50);

INSERT INTO favorite_movies (movie, five_times, score) VALUES ("Social Network", TRUE, 100);

INSERT INTO favorite_movies (movie, five_times, score) VALUES ("Space Jam", TRUE, 100);

INSERT INTO favorite_movies (movie, five_times, score) VALUES ("Notebook", FALSE, 86);
);

