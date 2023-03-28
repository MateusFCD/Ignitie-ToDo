import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 173px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  align-items: center;
  text-align: center;

  justify-content: center;
  flex-direction: row;
`;

export const To = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Do = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.PURPLE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Logo = styled.Image`
  width: 20px;
  height: 31px;

  margin-right: 10px;
`;
