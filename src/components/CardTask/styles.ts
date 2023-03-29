import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;

  width: 327px;
  height: 64px;

  padding: 12px 8px;
  border-radius: 8px;
  gap: 8px;

  background: ${({ theme }) => theme.COLORS.GRAY_500};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

  margin-bottom: 8px;

  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
