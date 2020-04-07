const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/projects", (request, response) => {
  return response.json(repositories);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  const project = {
    id: uuid(),
    title,
    owner
  };

  repositories.push(project);

  return response.json(project);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = repositories.findIndex(repository => repository.id === id);

  if(projectIndex < 0) {
    return response.status(400).json({error: "Project not found"});
  }

  const project = {
    id,
    title,
    owner
  };

  repositories[projectIndex] = project;

  return response.json(project);
});

app.delete("/projects/:id", (request, response) => {
  const { id } = request.params;

  const projectIndex = repositories.findIndex(repository => repository.id === id);

  if(projectIndex < 0) {
    return response.status(400).json({error: "Project not found"});
  }

  repositories.splice(projectIndex, 1);

  return response.status(201).send();
});

module.exports = app;