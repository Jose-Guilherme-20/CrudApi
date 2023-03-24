const express = require("express");
const router = express.Router();
const Person = require("../model/Person");
const controller = require("../controller/personController");

router.get("/", controller.people);
router.get("/:id", controller.personId);
router.post("/", controller.person);
router.patch("/:id", controller.PersonUpdate);
router.delete("/:id", controller.deletePerson);
module.exports = router;
