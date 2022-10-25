DROP TABLE IF EXISTS properties;
-- CREATE TABLE students (
-- id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- first_name VARCHAR(100),
-- last_name VARCHAR(100)
-- );
-- INSERT INTO students (first_name, last_name)
-- VALUES ('Michael', 'Goleman'), ('Sara', 'Norgaard');


CREATE TABLE `properties`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `location` VARCHAR(255) NOT NULL,
    `availability` VARCHAR(255) NOT NULL,
    `numofrooms` INT NOT NULL,
    `numofpeople` INT NOT NULL,
    `rating` INT NOT NULL
);

INSERT INTO properties (location, availability, numofrooms, numofpeople, rating)
VALUES
    ("Barcelona", "November", 2, 4, 5),
    ("Montreal", "December", 0, 1, 5),
    ("Prague", "November", 1, 2, 3),
    ("Edinburgh", "November", 2, 3, 4),
    ("Toronto", "December", 0, 1, 4),
    ("Bangkok", "December", 2, 5, 3),
    ("Melbourne", "November", 1, 2, 4),
    ("New York", "November", 1, 1, 3),
    ("Hanoi", "December", 0, 2, 4),
    ("Chang Mai", "November", 1, 2, 5);
