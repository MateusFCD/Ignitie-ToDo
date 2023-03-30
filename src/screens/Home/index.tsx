import React, { useState } from "react";
import { Alert, FlatList, Text } from "react-native";
import { Button } from "../../components/Button";
import { CardTask } from "../../components/CardTask";
import { EmptyTask } from "../../components/EmptyTask";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Loading } from "../../components/Loading";
import { Tasks } from "../../components/Tasks";
import { Container, Content, Box } from "./styles";

export function Home() {
  const [task, setTask] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask() {
    if (task.includes(newTaskText)) {
      return Alert.alert("Tarefa Existe", "Essa tarefa já existe");
    }
    setTask((prevState) => [...prevState, newTaskText]);
    setNewTaskText("");
  }

  function handleDeleteTask(tasks: string) {
    Alert.alert("Remover", "Deseja remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          setTask((prevState) => prevState.filter((task) => task !== tasks));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <Container>
      <Header />
      <Content>
        <Box>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChangeText={setNewTaskText}
          />
          <Button onPress={handleCreateNewTask} />
        </Box>
        <Tasks />

        {task.length === 0 ? (
          <EmptyTask />
        ) : (
          <FlatList
            data={task}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <CardTask text={item} onDelete={() => handleDeleteTask(item)} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={task.length === 0 && { flex: 1 }}
          />
        )}
      </Content>
    </Container>
  );
}
