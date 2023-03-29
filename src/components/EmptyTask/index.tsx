import React from "react";
import { Container, Title, Subtitle } from "./styles";
import { ClipboardText } from "phosphor-react-native";
import { useTheme } from "styled-components";

export function EmptyTask() {
  const { COLORS } = useTheme();
  return (
    <Container>
      <ClipboardText size={60} color={COLORS.GRAY_400} />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
    </Container>
  );
}
