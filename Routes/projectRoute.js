const express = require("express");

const Project = require("../data/helpers/projectModel");
const actionRouter = require("../Routes/actionRoute");
const router = express.Router();

router.get("/", (req, res) => {
    Project.get()
      .then(project => res.status(200).json(project))
      .catch(() => {
        res.status(500).json({ errorMessage: "Couldn't retrieve all Projects" });
      });
  });
  
