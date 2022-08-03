import styled from "@emotion/styled";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface Props {
  text?: string;
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
  const { t } = useTranslation("translation", {
    keyPrefix: "utils",
  });
  return (
    <Container>
      <p>{text ?? t("learn_more")}</p>
      <Underline color={color} />
    </Container>
  );
}
