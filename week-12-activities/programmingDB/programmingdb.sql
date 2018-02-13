CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages (
  id INTEGER(11) AUTO_INCREMENT NOT NULL, 
  languages VARCHAR(50) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  rating INTEGER(10),
  mastered BOOLEAN DEFAULT true,
  PRIMARY KEY (id)
);

INSERT INTO programming_languages (languages, rating) VALUES ("MySQL", 100), ("Javascript", 90), ("CSS", 100), ("Java", 50);

SELECT * FROM programming_db.programming_languages;

UPDATE programming_languages
SET rating = 40, languages = "Node"
WHERE id = 4;

delete from programming_languages where id = 2;