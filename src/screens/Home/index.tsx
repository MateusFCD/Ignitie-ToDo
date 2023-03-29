import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Button";
import { CardTask } from "../../components/CardTask";
import { EmptyTask } from "../../components/EmptyTask";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Tasks } from "../../components/Tasks";
import { Container, Content, Box } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Box>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button />
        </Box>
        <Tasks />
        <EmptyTask />
        <CardTask text="Estudar React Native" />
      </Content>
    </Container>
  );
}
