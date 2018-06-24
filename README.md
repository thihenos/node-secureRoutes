# node-secureRoutes
Node example of routes secured with user login using Node + PassportJS + Cookie Session

If you need help, call me:
[Twitter](https://twitter.com/thihenos), [Medium](https://medium.com/@thihenos)

### What I need ?

* SublimeText or other file editor
* NPM
* Node JS
* Express, node network app framework
* All libs from package.json installed

### Installation

Download the project, and inside the main folder, just run the follow command for dependences installation

```sh
$ npm install
```

### Test
In app.js file, I configurated the http PORT to 3000, you can change as you wanted, so, in this example, when start this example, it will be released in localhost:3000 address :)

 - Configure your database URI in `server/models/index.js`
 - In `app.js`, by default the app will recreate the table and insert **user: ADM password:ADM** in the database because of the `{force:true}` param.

To test if login example is working, you can check the address localhost:3000, the application will return the login page for you to try. 

So, open your favorite Terminal and run these command.
```sh
$ node app
```

### Tips & Tricks

 - If you don't know how to use [sequelize](https://github.com/sequelize/sequelize) you can check my example [node-sequelize](https://github.com/thihenos/node-sequelize)

### Todos
Give me some ideias :P

License
----
MIT

**Free Software, Free Examples, Free hugs!**