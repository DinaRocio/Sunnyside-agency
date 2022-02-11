import styled from "@emotion/styled";

interface HeroImageProps {
  readonly image: string;
}

export const HeroImage = styled.div<HeroImageProps>`
  position: relative;
  background-image: url(${(props) => props.image});
  height: 796px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroContent = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
`;

export const H1 = styled.h1`
  font-family: var(--ff-fraunces);
  font-size: 3.5rem;
  color: var(--clr-white);
  letter-spacing: 5px;
  margin-bottom: 60px;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
