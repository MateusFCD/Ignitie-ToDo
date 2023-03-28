import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 52px;
  height: 52px;

  background: ${({ theme }) => theme.COLORS.BLUE_DARK};

  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;
