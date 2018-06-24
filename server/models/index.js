"use strict";

let fs        = require("fs");
let path      = require("path");
const Sequelize = require("sequelize");

/*Connector for DB, please ,change URI_DATABASE_CREDENTIALS to your credentials
 *For this example, I installed the lib for MySQL and PostgresSQL, so if you want for sqlite
 *and SQL Server please install them using your terminal with the follow commands
 *For sqlite
 npm install --save sqlite3
 *For SqlServer
 npm install --save tedious
 */

//const sequelize = new Sequelize('URI_DATABASE_CREDENTIALS',{native: true});
//var sequelize = new Sequelize('postgres://hmrcrtjbehstbh:0f920f70bfb63f1277905dc4a6196fa956212d441242ebb2a5ae8d5e64ab0036@ec2-50-19-224-165.compute-1.amazonaws.com:5432/d1qgvqegt68u3u',{native: true});
const sequelize = new Sequelize('postgres://hmrcrtjbehstbh:0f920f70bfb63f1277905dc4a6196fa956212d441242ebb2a5ae8d5e64ab0036@ec2-50-19-224-165.compute-1.amazonaws.com:5432/d1qgvqegt68u3u',{native: true});

const db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;