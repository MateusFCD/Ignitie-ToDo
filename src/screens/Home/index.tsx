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

interface TaskProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

export function Home() {
  const [task, setTask] = useState<TaskProps[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const count = task.length;

  function handleCreateNewTask() {
    if (newTaskText) {
      setTask([
        ...task,
        {
          id: new Date().getTime(),
          text: newTaskText,
          isCompleted: false,
        },
      ]);
    }
    setNewTaskText("");
  }

  function handleDeleteTask(id: number) {
    Alert.alert("Remover", "Deseja remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          setTask((prevState) => prevState.filter((task) => task.id !== id));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const handleComplete = (id: number) => {
    let list = task.map((task) => {
      let item = {};
      if (task.id == id) {
        if (!task.isCompleted) {
          //Task is pending, modifying it to complete and increment the count
          setCompletedTaskCount(completedTaskCount + 1);
        } else {
          //Task is complete, modifying it back to pending, decrement Complete count
          setCompletedTaskCount(completedTaskCount - 1);
        }
        item = { ...task, isCompleted: !task.isCompleted };
      } else item = { ...task };
      return item;
    });
    setTask(list as any);
  };

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

        <Tasks count={count} concluded={completedTaskCount} />

        {task.length === 0 ? (
          <EmptyTask />
        ) : (
          <FlatList
            data={task}
            keyExtractor={(item) => item.text}
            renderItem={({ item }) => (
              <CardTask
                text={item.text}
                onDelete={() => handleDeleteTask(item.id)}
                onCompleted={() => handleComplete(item.id)}
                checked={item.isCompleted}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={task.length === 0 && { flex: 1 }}
          />
        )}
      </Content>
    </Container>
  );
}
