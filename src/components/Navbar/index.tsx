import logo from "./../../assets/logo.svg";
import hamburger from "./../../assets/icon-hamburger.svg";
import { links } from "../../links";
import { Hamburger, NAV } from "./styles";

export const Navbar = () => {
  return (
    <NAV>
      <img src={logo} alt="logo" />
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.url} key={link.id}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      <Hamburger
        src={hamburger}
        alt={"hamburguer icon"}
        onClick={() => console.log("open side menu")}
      />
    </NAV>
  );
};
