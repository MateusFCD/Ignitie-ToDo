import React from "react";
import { Container, Situation, Box, Span, Content } from "./styles";

interface Props {
  count: number;
  concluded: number;
}

export function Tasks({ count, concluded }: Props) {
  return (
    <Container>
      <Content>
        <Box>
          <Situation type="PRIMARY">Criadas</Situation>
          <Span>{count}</Span>
        </Box>
        <Box>
          <Situation type="SECONDARY">Concluídas</Situation>
          <Span>{concluded}</Span>
        </Box>
      </Content>
    </Container>
  );
}
