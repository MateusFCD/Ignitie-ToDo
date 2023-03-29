import { Circle, Trash } from "phosphor-react-native";
import React from "react";
import { useTheme } from "styled-components/native";
import { Container, Text } from "./styles";

type Props = {
  text: string;
};

export function CardTask({ text }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Circle size={20} color={COLORS.BLUE} />
      <Text>{text}</Text>
      <Trash size={20} color={COLORS.GRAY_300} />
    </Container>
  );
}
