module.exports = app => {
    const HackathonsListes= require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", HackathonsListes.create);
  
    // Retrieve all Tutorials
    router.get("/", HackathonsListes.findAll)

}