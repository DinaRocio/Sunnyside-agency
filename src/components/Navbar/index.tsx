import logo from "./../../assets/logo.svg";
import hamburger from "./../../assets/icon-hamburger.svg";
import styled from "@emotion/styled";

const NAV = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  padding: 40px;

  ul {
    display: flex;
    list-style-type: none;
    gap: 40px;
  }

  ul li a {
    text-decoration: none;
    color: var(--clr-white);
  }
  ul li:hover a {
    border-radius: 20px;
    padding: 10px 25px;
    background-color: var(--clr-white);
    color: var(--clr-dark-blue);
  }

  @media only screen and (max-width: 600px) {
    ul {
      display: none;
    }
  }
`;

const Hamburger = styled.img`
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export const Navbar = () => {
  return (
    <NAV>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="https://github.com/DinaRocio">About</a>
        </li>
        <li>
          <a href="https://github.com/DinaRocio">Services</a>
        </li>
        <li>
          <a href="https://github.com/DinaRocio">Projects</a>
        </li>
        <li>
          <a href="https://github.com/DinaRocio">CONTACT</a>
        </li>
      </ul>

      <Hamburger
        src={hamburger}
        alt={"hamburguer icon"}
        onClick={() => console.log("open side menu")}
      />
    </NAV>
  );
};
