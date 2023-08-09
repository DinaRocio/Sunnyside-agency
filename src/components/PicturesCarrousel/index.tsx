import milkbottlesDK from "./../../assets/desktop/image-gallery-milkbottles.jpg";
import orangeDK from "./../../assets/desktop/image-gallery-orange.jpg";
import coneDK from "./../../assets/desktop/image-gallery-cone.jpg";
import sugarcubesDK from "./../../assets/desktop/image-gallery-sugarcubes.jpg";
import styled from "@emotion/styled";

interface PictureProps {
  image: string;
}

const PicturesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Picture = styled.div<PictureProps>`
  background-image: url(${(props) => props.image});
  height: 550px;
  width: 25%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 600px) {
    height: 300px;
    width: 50%;
  }
`;

function PicturesCarrousel() {
  return (
    <PicturesContainer id="pictures-carrousel">
      <Picture image={milkbottlesDK} className="reverse-image" />
      <Picture image={orangeDK} className="reverse-image" />
      <Picture image={coneDK} className="reverse-image" />
      <Picture image={sugarcubesDK} className="reverse-image" />
    </PicturesContainer>
  );
}

export default PicturesCarrousel;
