import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Content = styled.View`
  margin-left: 20px;
  margin-right: 24px;
  width: 327px;
`;

export const Box = styled.View`
  flex-direction: row;
  gap: 4px;
  margin-bottom: 10px;

  position: relative;
  top: -25px;
`;
