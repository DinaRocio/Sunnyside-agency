import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 77px 20px;
  gap: 50px;
  background-color: var(--clr-light-green);
  .footer-logo {
    filter: invert(39%) sepia(20%) saturate(995%) hue-rotate(116deg)
      brightness(96%) contrast(92%);
  }
`;

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  list-style-type: none;
  li a {
    color: var(--clr-dark-green);
    text-decoration: none;
  }

  li a:hover {
    color: var(--clr-white);
  }
  @media only screen and (max-width: 600px) {
    justify-content: space-around;
    width: 100%;
  }
`;

export const LogoList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 50%;
  list-style-type: none;
  li a svg {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(91deg)
      brightness(102%) contrast(106%);
  }
`;

export const SocialMediaLogo = styled.a`
  img:hover {
    filter: brightness(100);
  }
`;
