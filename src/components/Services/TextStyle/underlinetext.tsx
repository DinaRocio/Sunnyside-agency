import styled from "@emotion/styled";

interface Props {
  text: string;
  color: string;
}

interface UnderlineProps {
  color: string;
}
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  p {
    font-family: var(--ff-fraunces);
  }
`;
const Underline = styled.span<UnderlineProps>`
  position: absolute;
  bottom: 1px;
  width: 100%;
  z-index: -1;
  border-bottom: 9px solid currentColor;
  border-radius: 4px;
  color: ${(props) => props.color};
`;

export default function UnderlineText({ text, color }: Props) {
  return (
    <Container>
      <p>{text}</p>
      <Underline color={color} />
    </Container>
  );
}
