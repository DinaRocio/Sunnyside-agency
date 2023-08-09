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
      <a
        href="https://github.com/DinaRocio/Sunnyside-agency"
        data-testid="sunnyside-logo-footer"
      >
        <img src={logo} alt="logo" className="footer-logo" />
      </a>

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

      <LogoList id="social-media-logo">
        <li id="facebook">
          <SocialMediaLogo href="https://www.facebook.com/">
            <img src={facebook} alt="facebook" />
          </SocialMediaLogo>
        </li>
        <li id="instagram">
          <SocialMediaLogo href="https://www.instagram.com">
            <img src={instagram} alt="instagram" />{" "}
          </SocialMediaLogo>
        </li>
        <li id="twitter">
          <SocialMediaLogo href="https://www.twitter.com">
            <img src={twitter} alt="twitter" />{" "}
          </SocialMediaLogo>
        </li>
        <li id="pinterest">
          <SocialMediaLogo href="https://www.pinterest.com">
            <img src={pinterest} alt="pinterest" />{" "}
          </SocialMediaLogo>
        </li>
      </LogoList>
    </FooterContainer>
  );
}
