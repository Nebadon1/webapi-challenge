const express = require("express");

const Actions = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/:id", validateActionId, (req, res) => {
    Actions.get(req.params.id)
      .then(action => res.status(200).json(action))
      .catch(() =>
        res.status(500).json({ errorMessage: "Couldnt sent the action project" })
      );
  });

  router.post("/", validateActionResource, (req, res) => {
    Actions.insert(req.body)
      .then(add => res.status(201).json({ Created: add }))
      .catch(() =>
        res
          .status(500)
          .json({ errorMessage: "Error with adding new action to database" })
      );
  });

  