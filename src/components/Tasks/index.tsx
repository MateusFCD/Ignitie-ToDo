import React from "react";
import { Container, Situation, Box, Span } from "./styles";

export function Tasks() {
  return (
    <Container>
      <Box>
        <Situation type="PRIMARY">Criadas</Situation>
        <Span>0</Span>
      </Box>
      <Box>
        <Situation type="SECONDARY">Concluídas</Situation>
        <Span>0</Span>
      </Box>
    </Container>
  );
}
