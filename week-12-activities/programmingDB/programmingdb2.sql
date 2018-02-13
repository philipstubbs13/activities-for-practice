-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db_example;
-- Create a database called programming_db --
CREATE DATABASE programming_db_example;

-- Use programming db for the following statements --
USE programming_db_example;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Create a string column called "language" --
	proglanguage VARCHAR(50),
  -- Create an integer column called "rating" --
	rating INTEGER(11),
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
	mastered BOOLEAN DEFAULT true,
  -- Set the id as this table's primary key
	PRIMARY KEY (id)
);

-- Create new example rows
INSERT INTO programming_languages (proglanguage, rating, mastered)
VALUES ("Javascript", 96, TRUE), ("mysql", 90, FALSE)


UPDATE programming_languages
SET proglanguage = "css"
WHERE id = 1;
