# Life-insurance  application

## About

 This is a  application for a life-insurance company. Users are able to create their own profile and login. They can then view the contents of the application. An admin is able to login and update, create new and delete life-insurance plans.

## Usage

If you are an end user and would like to view and use the application, please check out the following link:
<a target="_blank" href="#"></a>

If you would like to view and play with the source code please follow the instillation proccess below:

## Installation
To run this code:
* 

  ```cd Life-insurance```

* Then run the command for install dependency and run he server

   ```npm install```

   ```npm start```

* Open a new terminal window and make sure you are in the frontend directory:

   ```cd frontend```

* Then run the following to install dependencies and start the frontend:

   ```npm install```

   ```npm start```


## To run the project
 
 Backend run ==> cd Life-insurance>npm start

 then frontend run  == cd frontend> npm start
 

## Seed Database


Run the following to seed the data to  DB

```
# Import data
npm run data:import
```

Run the following if you want to remove the seed data from your DB

```
npm run data:destroy
```
<
## Sample User Logins

These are the login details from the seeded data from the previous step. The admin has authorization that normal users dont have, so be sure to check out the application logged in as the admin. 

Users can create their  user profiles and login using them.

```
admin@example.com (Admin)
123456

nishad@example.com (Customer)
123456

tiwari@example.com (Customer)
123456
```


## Technologies

This web app was built using the following technologies:

* MongoDB
* Express
* React.js
* Redux
* Node.js
* JWT 
* React Bootstrap

## Swagger API documentation

 Swagger API documentation is in api.yaml file

 path url swagger UI == http://localhost:5000/api-docs 

 use prefix Bearer tyhen token like  "Bearer abcde12345"

