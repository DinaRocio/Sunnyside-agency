import logo from "./../../assets/logo.svg";
import hamburger from "./../../assets/icon-hamburger.svg";
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
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "footer",
  });
  const [showModal, setShowModal] = useState(false);

  const onClickHamburger = () => {
    setShowModal(!showModal);
  };

  const links = [
    {
      id: 1,
      text: t("about"),
      url: "#about",
    },
    {
      id: 2,
      text: t("services"),
      url: "#services",
    },
    {
      id: 3,
      text: t("projects"),
      url: "#projects",
    },
    {
      id: 4,
      text: t("about"),
      url: "#contact",
    },
  ];

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
              <MobileUl id="#hamburguer-menu">
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
