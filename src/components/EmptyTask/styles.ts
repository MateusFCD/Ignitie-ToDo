import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;

  margin-top: 20px;
  padding: 48px 20px;
`;

export const Title = styled.Text`
  margin-top: 16px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
