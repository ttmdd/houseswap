# Full Stack House Swap App

House Swap is an app for people who want to temporarily exchange their home with another person. It's a low-cost option for people to travel and stay at a local's home.

Annonymous users of the app are able to view all the house listings and see everything except contact information.
<br/>
<br/>
Logged in users are able to see all listings and all information, they can save a property as favorite, can contact the owner of a house to arrange an exchange, can add their own property and can edit or delete their posting. 
<br/>
<br/>

Technology used to build the app: HTML, CSS, Bootstrap, JavaScript, React, Node/Express, MySQL.
<br/>
<br/>


All the frontend code can be found in the client folder.
All the backend code can be found in the server folder. 
<br/>
<br/>


## Setup

### Dependencies

Backend: Run `npm install` in the project folder to install dependencies related to Express (the server).

Frontend: `cd client` and run `npm install` install dependencies related to React (the client).


### Database Prep

Create `.env` file in project directory and add

```
DB_NAME=houseswap
DB_PASS=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password)

(For Mac users: Type `mysql -u root -p` to access the MySQL CLI using your password.)

In the MySQL CLI, type `create database houseswap;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Run `node model/database.js` in your **TERMINAL**, in the **project** folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'properties' in your database.

Run `npm run migrate` in your terminal


### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. 
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`


## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [React Documentation](https://reactjs.org/docs/hello-world.html)

  _This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
  
<br/>
<br/>
<br/>
<br/>

# MVP PROJECT 

## Future Features 

- log in option to separate anonymous and logged in users
- search through properties based on location, availability, number of people, number of rooms, rating
- implement a rating system
- leave reviews for properties you stayed at
- implement a calendar for availability 
- show listings from people who are looking to stay in your area 
- message function for logged in users 
- remove a favorite property from the Favorites section (not from the Home section as it is set up currently)
- show all properties on a map 
- being able to upload own images instead of using an url address
- proper styling

<br/>

## Database Schema
<br/>

 <img 
    src="table.png"
    alt="database table"
    style="display: inline-block; max-width: 300px">

## Api routes plan
<br/>

 <img 
    src="apiroutes1.jpg"
    alt="api routes"
    >
     <img 
    src="apiroutes2.jpg"
    alt="api routes"
    >

<br/>

## Technologies

Technology used to build the app: HTML, CSS, Bootstrap, JavaScript, React, Node/Express, MySQL.




  
