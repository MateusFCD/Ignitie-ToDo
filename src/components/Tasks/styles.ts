import styled from "styled-components/native";

export type SituationProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: SituationProps;
};

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Box = styled.View`
  flex-direction: row;
  gap: 8px;

  justify-content: center;
  align-items: center;
`;

export const Situation = styled.Text<Props>`
  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Span = styled.Text`
  width: 25px;
  height: 19px;

  border-radius: 999px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 0px 8px 2px 8px;
  gap: 10px;

  justify-content: center;
  align-items: center;
`;
