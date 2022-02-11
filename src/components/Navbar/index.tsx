import logo from "./../../assets/logo.svg";
import hamburger from "./../../assets/icon-hamburger.svg";
import { links } from "../../links";
import {
  DesktopUl,
  Hamburger,
  HamburgerMenu,
  MobileNavbar,
  MobileNavbarContainer,
  MobileUl,
  NAV,
  Triangle,
} from "./styles";
import { useState } from "react";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickHamburger = () => {
    setShowModal(!showModal);
  };

  return (
    <NAV>
      <img src={logo} alt="logo" />
      <DesktopUl>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url} key={link.id}>
              {link.text}
            </a>
          </li>
        ))}
      </DesktopUl>
      <HamburgerMenu>
        <Hamburger
          src={hamburger}
          alt={"hamburguer icon"}
          onClick={onClickHamburger}
        />

        {showModal && (
          <MobileNavbarContainer>
            <Triangle />
            <MobileNavbar>
              <MobileUl>
                {links.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} key={link.id}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </MobileUl>
            </MobileNavbar>
          </MobileNavbarContainer>
        )}
      </HamburgerMenu>
    </NAV>
  );
};
