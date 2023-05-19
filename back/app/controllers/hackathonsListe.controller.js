const db = require("../models");
const hackathonsListe = db.hackathones
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const hackathonsListe = new Tutorial({
    Nom:req.body.Nom,
    Prenom:req.body.Prenom,
    NumTel:req.body.NumTel,
    Genre: req.body.Genre,
    Nationalite: req.body.Nationalite,
  });

  // Save Tutorial in the database
  hackathonsListe
    .save(hackathonsListe)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the hackathon."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const Nom = req.query.Nom;
  var condition = title ? { title: { $regex: new RegExp(Nom), $options: "i" } } : {};

  Tutorial.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Hackathons."
      });
    });
};