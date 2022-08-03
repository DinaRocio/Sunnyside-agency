import styled from "@emotion/styled";
import React from "react";
import { clientTestimonials } from "../../data";
import emily from "./../../assets/image-emily.jpg";
import thomas from "./../../assets/image-thomas.jpg";
import jennie from "./../../assets/image-jennie.jpg";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface ProfileImgProps {
  image: string;
}

const TestimoniesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 130px;
  padding: 170px 190px;
  @media only screen and (max-width: 600px) {
    gap: 60px;
    padding: 60px;
  }
  h2 {
    font-family: var(--ff-fraunces);
    color: var(--clr-dark-grayish-blue);
    font-size: 1.4rem;
  }
`;

const TestimoniesBody = styled.section`
  display: flex;
  gap: 40px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  align-items: center;
  p {
    color: var(--clr-very-dark-grayish-blue);
  }
`;

const ProfileImg = styled.div<ProfileImgProps>`
  background-image: url(${(props) => props.image});
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Names = styled.div`
  h3 {
    font-family: var(--ff-fraunces);
    color: var(--clr-dark-blue);
    font-size: 1rem;
  }
  h4 {
    font-family: var(--ff-barlow);
    color: var(--clr-very-dark-grayish-blue);
    font-size: 0.8rem;
  }
`;

function Testimonies() {
  const { t } = useTranslation("translation", {
    keyPrefix: "clientTestimonials",
  });

  const clientTestimonials = [
    {
      fullname: "Emily R.",
      position: t("first.position"),
      testimony: t("first.testimony"),
    },
    {
      fullname: "Thomas S.",
      position: t("second.position"),
      testimony: t("second.testimony"),
    },
    {
      fullname: "Jennie F.",
      position: t("third.position"),
      testimony: t("third.testimony"),
    },
  ];
  return (
    <TestimoniesSection id="projects">
      <h2>{t("title")}</h2>
      <TestimoniesBody>
        <ProfileCard>
          <ProfileImg image={emily} />
          <p>{clientTestimonials[0].testimony}</p>
          <Names>
            <h3> {clientTestimonials[0].fullname}</h3>
            <h4> {clientTestimonials[0].position}</h4>
          </Names>
        </ProfileCard>

        <ProfileCard>
          <ProfileImg image={thomas} />
          <p>{clientTestimonials[1].testimony}</p>
          <Names>
            <h3> {clientTestimonials[1].fullname}</h3>
            <h4> {clientTestimonials[1].position}</h4>
          </Names>
        </ProfileCard>

        <ProfileCard>
          <ProfileImg image={jennie} />
          <p>{clientTestimonials[2].testimony}</p>
          <Names>
            <h3> {clientTestimonials[2].fullname}</h3>
            <h4> {clientTestimonials[2].position}</h4>
          </Names>
        </ProfileCard>
      </TestimoniesBody>
    </TestimoniesSection>
  );
}

export default Testimonies;
