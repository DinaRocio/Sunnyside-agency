import styled from "@emotion/styled";
import React from "react";
import logo from "./../../assets/logo.svg";

const FooterContainer = styled.footer`
  background-color: var(--clr-dark-moderate-cyan);
`;

export default function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="logo" />
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>

      <ul>
        <li>
          {" "}
          <img src={logo} alt="logo" />
        </li>
        <li>
          {" "}
          <img src={logo} alt="logo" />
        </li>
        <li>
          {" "}
          <img src={logo} alt="logo" />
        </li>
      </ul>
    </FooterContainer>
  );
}
