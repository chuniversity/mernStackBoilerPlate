MERN Stack Template

Node Express
Mongodb
Mongoose
Create React App

cd into client
run: `npm install`
run `npm run start`

open a new terminal
cd into server
run: `npm install`

Unzip the file

cd into client
run: `npm install`
run `npm run start`

open a new terminal
cd into server
run: `npm install`

install MongoDB if not installed. 
create MongoDB database called 
`use [name_of_database]`

create a user and password for this database
 `db.createUser( { user: "[name_of_user]", pwd: "[name_of_password]", roles: ["readWrite"] })`

make sure the /server/config.js is updated to reflect the database, user, and password

edit server/mongoConnect.js with the pathing to mongoDB database for your machine

run `npm run start`

