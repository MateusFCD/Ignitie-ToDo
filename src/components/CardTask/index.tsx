import { CheckCircle, Circle, Trash } from "phosphor-react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { Container, Text, Button } from "./styles";

type Props = {
  text: string;
  onDelete: () => void;
  onCompleted: () => void;
  checked: boolean;
};

export function CardTask({ text, onDelete, onCompleted, checked }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <BouncyCheckbox
        onPress={() => onCompleted()}
        size={20}
        fillColor={COLORS.PURPLE}
        innerIconStyle={{ borderColor: COLORS.BLUE }}
        isChecked={checked}
      />
      <Text>{text}</Text>
      <Button onPress={() => onDelete()}>
        <Trash size={20} color={COLORS.GRAY_300} />
      </Button>
    </Container>
  );
}
