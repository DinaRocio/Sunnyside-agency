import styled from "@emotion/styled";
import { servicesData } from "../../data";
import egg from "./../../assets/desktop/image-transform.jpg";
import cup from "./../../assets/desktop/image-stand-out.jpg";
import cherries from "./../../assets/desktop/image-graphic-design.jpg";
import orange from "./../../assets/desktop/image-photography.jpg";
import UnderlineText from "./TextStyle/underlinetext";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface ServiceImageProps {
  image: string;
}

const ProjectContainer = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(3, 600px);

  .firstText {
    order: 1;
  }
  .eggPic {
    order: 2;
  }
  .secondText {
    order: 4;
  }
  .cupPic {
    order: 3;
  }
  .cherries {
    order: 5;
  }
  .orange {
    order: 6;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(6, 600px);
    .firstText {
      order: 1;
    }
    .eggPic {
      order: 2;
    }
    .secondText {
      order: 3;
    }
    .cupPic {
      order: 4;
    }
    .cherries {
      order: 5;
    }
    .orange {
      order: 6;
    }
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--clr-dark-blue);
  width: 100%;

  padding: 120px;
  gap: 50px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }
  h2 {
    font-size: 2rem;
    font-family: var(--ff-fraunces);
  }
  p {
    font-size: 1.1rem;
    color: var(--clr-very-dark-grayish-blue);
  }
`;

const ServiceImage = styled.div<ServiceImageProps>`
  background-image: url(${(props) => props.image});
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const AbsoluteContainer = styled.div`
  position: relative;
`;

const AbsoluteText = styled(ServiceCard)`
  position: absolute;
  padding: 130px 130px 0px 130px;
  bottom: 50px;
  text-align: center;
  align-items: center;
`;

function Services() {
  const { t } = useTranslation("translation", {
    keyPrefix: "servicesData",
  });
  const servicesData = [
    {
      id: 143242,
      title: t("first.title"),
      summary: t("first.summary"),
    },
    {
      id: 24324,
      title: t("second.title"),
      summary: t("second.summary"),
    },
    {
      id: 22324,
      title: t("third.title"),
      summary: t("third.summary"),
    },
    {
      id: 27624,
      title: t("fourth.title"),
      summary: t("fourth.summary"),
    },
  ];

  const projectsData = [
    {
      title: t("projectsData.first.title"),
      summary: t("projectsData.first.summary"),
    },
    {
      title: t("projectsData.second.title"),
      summary: t("projectsData.second.summary"),
    },
  ];

  return (
    <ProjectContainer id="services">
      {/* 1 */}
      <ServiceCard className="firstText">
        <h2>{servicesData[0].title}</h2>
        <p>{servicesData[0].summary}</p>
        <UnderlineText color={"hsl(51, 100%, 49%)"} />
      </ServiceCard>
      {/* 2 */}
      <ServiceImage image={egg} className="eggPic" />

      {/* 3 */}
      <ServiceCard className="secondText">
        <h2>{servicesData[1].title}</h2>
        <p>{servicesData[1].summary}</p>
        <UnderlineText color={"hsl(7, 99%, 70%)"} />
      </ServiceCard>
      {/* 4 */}
      <ServiceImage image={cup} className="cupPic" />
      {/* 5 */}
      <AbsoluteContainer className="cherries">
        <ServiceImage image={cherries} />
        <AbsoluteText>
          <h2>{servicesData[2].title}</h2>
          <p>{servicesData[2].summary}</p>
        </AbsoluteText>
      </AbsoluteContainer>
      {/* 6 */}
      <AbsoluteContainer className="orange">
        <ServiceImage image={orange} />
        <AbsoluteText>
          <h2>{servicesData[3].title}</h2>
          <p>{servicesData[3].summary}</p>
        </AbsoluteText>
      </AbsoluteContainer>
    </ProjectContainer>
  );
}

export default Services;
