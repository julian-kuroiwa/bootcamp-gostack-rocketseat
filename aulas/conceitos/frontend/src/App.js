import React, {useState, useEffect} from "react";
import Header from "./components/Header";

import api from "./services/api";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("projects")
      .then(response => {
        setProjects(response.data);
      });
  }, []);

  async function clickHandle() {
    const response = await api.post("projects", {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Julian Kuroiwa"
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={clickHandle}>Adicionar Projeto</button>
    </>
  );
}

export default App;