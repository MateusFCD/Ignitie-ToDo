import React from "react";
import { Container, Situation, Box, Span, Content } from "./styles";

export function Tasks() {
  return (
    <Container>
      <Content>
        <Box>
          <Situation type="PRIMARY">Criadas</Situation>
          <Span>0</Span>
        </Box>
        <Box>
          <Situation type="SECONDARY">Concluídas</Situation>
          <Span>0</Span>
        </Box>
      </Content>
    </Container>
  );
}
