import styled from "@emotion/styled";

interface HeroImageProps {
  readonly image: string;
}

export const HeroImage = styled.div<HeroImageProps>`
  position: relative;
  background-image: url(${(props) => props.image});
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
