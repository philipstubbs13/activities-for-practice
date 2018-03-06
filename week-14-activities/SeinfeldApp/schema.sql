-- Created the DB "seinfeld_db" (only works on local connections)
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "actors" 
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int(11) NOT NULL,
  attitude varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry Seinfeld", 100, "Positive" );
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jason Alexander", 50, "Negative");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Michael Richards", 90, "Neutral" );
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Julia Louis-Dreyfus", 75, "Negative");