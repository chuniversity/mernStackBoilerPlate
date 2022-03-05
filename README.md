# MERN Stack Template

## Description: 
Easily set up a Frontend React App with Backend Node.JS Express server with example controllers, routes, and models pre-configured. 

Technology used: 
-Node Express
-Mongodb
-Mongoose
-Create React App


## Directions:
### Set Up Node Server

open a new terminal
cd into server
run: `npm install`

install MongoDB if not installed and open the MongoDB CLI. 

create MongoDB database: 
`use [name_of_database]`

create a user and password for this database:
 `db.createUser( { user: "[name_of_user]", pwd: "[name_of_password]", roles: ["readWrite"] })`

create the file: /server/config.js 
populate the config.js 
`
module.exports = {
  user: 'test',
  pass: 'test',
  dbName: 'test'
};
`

Replace the contents with the name of your db credentials

edit server/mongoConnect.js with the pathing to mongoDB database for your machine

run `npm run start`

### Set up React App
cd into client
run: `npm install`
run: `npm run start`

