import logo from "./../../assets/logo.svg";
import facebook from "./../../assets/icon-facebook.svg";
import twitter from "./../../assets/icon-twitter.svg";
import instagram from "./../../assets/icon-instagram.svg";
import pinterest from "./../../assets/icon-pinterest.svg";
import {
  FooterContainer,
  LinksList,
  LogoList,
  SocialMediaLogo,
} from "./styles";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("translation", {
    keyPrefix: "footer",
  });
  return (
    <FooterContainer id="contact">
      <img src={logo} alt="logo" className="footer-logo" />
      <LinksList>
        <li>
          <a href="https://github.com/DinaRocio">{t("about")}</a>
        </li>
        <li>
          <a href="https://github.com/DinaRocio">{t("services")}</a>
        </li>
        <li>
          <a href="https://github.com/DinaRocio"> {t("projects")}</a>
        </li>
      </LinksList>

      <LogoList>
        <li>
          <SocialMediaLogo href="https://www.facebook.com/">
            <img src={facebook} alt="facebook" />
          </SocialMediaLogo>
        </li>
        <li>
          <SocialMediaLogo href="https://www.instagram.com">
            {" "}
            <img src={instagram} alt="instagram" />{" "}
          </SocialMediaLogo>
        </li>
        <li>
          <SocialMediaLogo href="https://www.twitter.com">
            {" "}
            <img src={twitter} alt="twitter" />{" "}
          </SocialMediaLogo>
        </li>
        <li>
          <SocialMediaLogo href="https://www.pinterest.com">
            {" "}
            <img src={pinterest} alt="pinterest" />{" "}
          </SocialMediaLogo>
        </li>
      </LogoList>
    </FooterContainer>
  );
}
