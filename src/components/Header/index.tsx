import React from "react";
import { Container, Do, To, Logo } from "./styles";
import logoImg from "../../assets/rocket.png";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <To>to</To>
      <Do>do</Do>
    </Container>
  );
}
