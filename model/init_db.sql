DROP TABLE IF EXISTS properties;

CREATE TABLE properties(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(500) NOT NULL,
    title VARCHAR(500),
    location VARCHAR(255) NOT NULL,
    availability VARCHAR(255) NOT NULL,
    numofrooms INT NOT NULL,
    numofpeople INT NOT NULL,
    rating INT NOT NULL,
    description VARCHAR(2000)
);

INSERT INTO properties (url, title, location, availability, numofrooms, numofpeople, rating, description)
VALUES
    ("https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600", "Offering my place in Barcelona for an apartment in Europe", "Barcelona", "November", 1, 2, 5, "I'm looking for a short term swap for a long weekend in November, 4 days max. Since there is not much time, I prefer another big city in Europe that is well connected with Barcelona. I'm flexible on the dates, can be any weekend in November. I have a nice 1 bedroom apartment with a king size bed so it can comfortably fit 4 people. I'm travelling solo so any place with a bed will do. I would like a central location though."),
    ("https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=600", "Cozy little studio in the Plateau, the best neighborhood in Montreal!", "Montreal", "December", 0, 1, 5, "I want to experience the Christmas season somewhere outside of Canada. Since I'm used to the cold and the snow, I wouldn't mind to spend Christmas on a beach somehwhere. I can offer a tiny but very cute studio that is more than enough for one person. You will be surrounded by coffee places, bars and restaurants, it's very lively here."),
    ("https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600", "Offering my place in Prague for an apartment in Europe", "Prague", "November", 1, 2, 3, "I'm looking for a short term swap for a long weekend in November"),
    ("https://images.pexels.com/photos/1776574/pexels-photo-1776574.jpeg?auto=compress&cs=tinysrgb&w=600", "Offering my place in Edinburgh for an apartment in Europe", "Edinburgh", "November", 2, 3, 4, "I'm looking for a short term swap for a long weekend in November"),
    ("https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg?auto=compress&cs=tinysrgb&w=600", "Offering my place in Toronto for an apartment in Europe", "Toronto", "December", 0, 1, 4, "I'm looking for a short term swap for a long weekend in November"),
    ("https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600", "Offering my place in Berlin for an apartment in Europe", "Berlin", "December", 2, 5, 3, "I'm looking for a short term swap for a long weekend in November"),
    ("https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=600", "Offering my place in Melbourne for an apartment in Europe", "Melbourne", "November", 1, 2, 4, "I'm looking for a short term swap for a long weekend in November"),
    ("https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600", "Offering my place in NY for an apartment in Europe", "New York", "November", 1, 1, 3, "I'm looking for a short term swap for a long weekend in November"),
    ("https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg?auto=compress&cs=tinysrgb&w=600", "Offering my place in Amsterdam for an apartment in Europe", "Amsterdam", "December", 0, 2, 4, "I'm looking for a short term swap for a long weekend in November"),
    ("https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600", "Offering my place in Vancouver for an apartment in Europe", "Vancouver", "November", 1, 2, 5, "I'm looking for a short term swap for a long weekend in November");
