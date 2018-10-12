# AMMO Test-Project

This is a test-project being built for the Full-Stack Developer position at AMMO Varejo.
The project main purpose is to build a Single Page Application, which will be a Product List with filtering and pagination. 
This project is going to be published in Heroku (in the future I'll make a link here to connect to the project), and it is also possible to run it locally by following the instructions below.
Built by Nelson Dornelas using the NEVM Stack - node.js, express.js, vue.js, and MongoDB)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

node.js and npm
Install them following the website below and its instructions:
```
https://www.npmjs.com/get-npm
```

MongoDB
Install MongoDB following the website below and its instructions:
```
https://docs.mongodb.com/manual/installation/
```
### Installing

Install the server dependencies at the server folder( '/server' )

```
npm install
```

Install the client dependencies at the website folder( '/website' )

```
npm install
```

Run the server at the server folder( '/server' )

```
npm start
```

Run the client at the website folder( '/website' )

```
npm run serve
```

End with an example of getting some data out of the system or using it for a little demo

### Creating Mock Products

From project root, go to server folder:

```
cd server
```

And run the mock products script: 

```
npm run-script populate_products
```

## Built With the NEVM Stack

* [Vue.js](https://vuejs.org) - The front-end JavaScript framework used
* [node.js](https://nodejs.org/) - An open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
* [express.js](https://expressjs.com/) - Node.js web application framework
* [MongoDB](https://www.mongodb.com/) - A free and open-source cross-platform document-oriented NoSQL database program.

## Authors

* **Nelson Dornelas**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
