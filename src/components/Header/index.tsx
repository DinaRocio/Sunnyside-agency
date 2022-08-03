import { t } from "i18next";
import { H1, HeroContent, HeroImage } from "../../pages/Home/home.styles";
import { Navbar } from "../Navbar";
import heroImage from "./../../assets/desktop/image-header.jpg";
import ArrowDown from "./../../assets/icon-arrow-down.svg";

export default function Header() {
  return (
    <div id="about">
      <Navbar />
      <HeroImage image={heroImage} />
      <HeroContent>
        <H1>{t("header.title")}</H1>
        <img src={ArrowDown} alt="logo" />
      </HeroContent>
    </div>
  );
}
