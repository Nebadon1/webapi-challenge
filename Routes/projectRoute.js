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
  

router.get("/:id", validateProjectId, (req, res) => {
    Project.get(req.params.id).then(project =>
      res
        .status(200)
        .json(project)
        .catch(() =>
          res
            .status(500)
            .json({ errorMessage: "Couldnt sent the specific project" })
        )
    );
  });
  
  