import React from "react";
import { Container } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { PlusCircle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {};

export function Button({ ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container {...rest}>
      <PlusCircle size={18} color={COLORS.WHITE} />
    </Container>
  );
}
