const { Router } = require("express");
const Person = require("../model/Person");

const person = async (req, res) => {
  const { name, salary, approved } = req.body;

  if (!name) {
    res.status(422).json({ error: "o nome é obrigatório" });
  }
  const person = {
    name,
    salary,
    approved,
  };
  try {
    await Person.create(person);
    res.status(201).json({ message: "pessoa inserida no sistema com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const people = async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json({ people });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const personId = async (req, res) => {
  const id = req.params.id;

  try {
    const person = await Person.findOne({ _id: id });
    if (!person) {
      res.status(422).json({ message: "usuario não encontrado" });
      return;
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const PersonUpdate = async (req, res) => {
  const id = req.params.id;

  const { name, salary, approved } = req.body;

  const person = {
    name,
    salary,
    approved,
  };

  try {
    const update = await Person.updateOne({ _id: id }, person);

    if (update.matchedCount === 0) {
      res.status(422).json({ message: "O usuário não foi encontrado!" });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const deletePerson = async (req, res) => {
  const id = req.params.id;

  const person = await Person.findOne({ _id: id });

  if (!person) {
    res.status(422).json({ message: "o usuário não foi encontrado!" });
  }
  try {
    await Person.deleteOne({ _id: id });
    res.status(200).json({ message: "Usuário removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
module.exports = {
  person,
  people,
  personId,
  PersonUpdate,
  deletePerson,
};
