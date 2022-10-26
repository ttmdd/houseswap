DROP TABLE IF EXISTS properties;

CREATE TABLE properties(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(500),
    location VARCHAR(255) NOT NULL,
    availability VARCHAR(255) NOT NULL,
    numofrooms INT NOT NULL,
    numofpeople INT NOT NULL,
    rating INT NOT NULL
);

INSERT INTO properties (url, location, availability, numofrooms, numofpeople, rating)
VALUES
    ("https://images.unsplash.com/photo-1567544948021-2e715dc696b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Barcelona", "November", 2, 4, 5),
    ("https://images.unsplash.com/photo-1567544948021-2e715dc696b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Montreal", "December", 0, 1, 5),
    ("https://images.unsplash.com/photo-1567544948021-2e715dc696b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Prague", "November", 1, 2, 3),
    ("https://images.unsplash.com/photo-1567544948021-2e715dc696b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Edinburgh", "November", 2, 3, 4),
    ("https://images.unsplash.com/photo-1567544948021-2e715dc696b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Toronto", "December", 0, 1, 4),
    ("https://images.unsplash.com/photo-1567544948021-2e715dc696b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Bangkok", "December", 2, 5, 3),
    ("https://images.unsplash.com/photo-1567544948021-2e715dc696b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Melbourne", "November", 1, 2, 4),
    ("https://images.unsplash.com/photo-1567544948021-2e715dc696b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "New York", "November", 1, 1, 3),
    ("https://images.unsplash.com/photo-1567544948021-2e715dc696b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Hanoi", "December", 0, 2, 4),
    ("https://images.unsplash.com/photo-1567544948021-2e715dc696b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Chang Mai", "November", 1, 2, 5);
