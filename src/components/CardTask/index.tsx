import { Circle, Trash } from "phosphor-react-native";
import React from "react";
import { useTheme } from "styled-components/native";
import { Container, Text, Button } from "./styles";

type Props = {
  text: string;
  onDelete: () => void;
};

export function CardTask({ text, onDelete }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Circle size={20} color={COLORS.BLUE} />
      <Text>{text}</Text>
      <Button onPress={() => onDelete()}>
        <Trash size={20} color={COLORS.GRAY_300} />
      </Button>
    </Container>
  );
}
