import styled from "@emotion/styled";
import { servicesData } from "../../data";
import egg from "./../../assets/desktop/image-transform.jpg";
import cup from "./../../assets/desktop/image-stand-out.jpg";
import UnderlineText from "./TextStyle/underlinetext";

interface ServiceImageProps {
  image: string;
}

const ProjectContainer = styled.section`
  display: grid;
  border: 1px solid red;
  width: 100%;
  height: 100%;
  grid-template-columns: 50% 50%;
  grid-template-rows: 600px 600px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 600px 600px 600px 600px;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--clr-dark-blue);
  width: 100%;
  height: 100%;
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

function Services() {
  return (
    <ProjectContainer>
      <ServiceCard>
        <h2>{servicesData[0].title}</h2>
        <p>{servicesData[0].summary}</p>
        <UnderlineText text="LEARN MORE" color={"hsl(51, 100%, 49%)"} />
      </ServiceCard>
      <ServiceImage image={egg} />

      <ServiceCard>
        <h2>{servicesData[1].title}</h2>
        <p>{servicesData[1].summary}</p>
        <UnderlineText text="LEARN MORE" color={"hsl(7, 99%, 70%)"} />
      </ServiceCard>
      <ServiceImage image={cup} />
    </ProjectContainer>
  );
}

export default Services;
