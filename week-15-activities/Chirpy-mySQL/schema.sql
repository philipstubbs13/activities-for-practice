CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  author VARCHAR( 255) NOT NULL,
  chirp VARCHAR( 255 ) NOT NULL,
  created_at DATETIME NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO chirps (author, chirp, created_at) VALUES ("Phil", "tweet1", "2018-03-06 06:24:56"), ("Kyle", "tweet2", "2018-03-06 06:24:56");
