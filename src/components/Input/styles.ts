import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  min-height: 54px;
  max-height: 54px;

  width: 271px;

  border-radius: 6px;
  padding: 16px;

  background: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
