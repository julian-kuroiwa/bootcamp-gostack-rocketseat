import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from "react-native";

import api from "./services/api";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then(response => setProjects(response.data));
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
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item }) => <Text style={styles.project}>{item.title}</Text>} />

        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={clickHandle}>
          <Text style={styles.textButton}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1"
  },
  project: {
    color: "#fff",
    fontSize: 30
  },
  button: {
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 16
  }
})