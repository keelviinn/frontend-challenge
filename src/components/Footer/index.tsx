import { Button } from "../Button";
import * as S from "./footer.styles";

const footerInfos = [
  {
    title: "2018",
    description: "FOUNDED IN NEW YOUR",
  },
  {
    title: "100+",
    description: "CASES RECEIVED PER DAY",
  },
  {
    title: "1000+",
    description: "PARTNERS LAWYERS",
  },
  {
    title: "300,000+",
    description: "CLAIMS IN OUR DATABASE",
  },
];

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent variant="primary">
        <h2>Justice for all starts with answers for you.</h2>
        <Button variant="optional">GET STARTED</Button>
      </S.FooterContent>
      <S.FooterContent variant="secondary">
        {footerInfos.map(({ title, description }) => (
          <S.FooterContentInfo>
            <h3>{title}</h3>
            <Button variant="secundary-bordered">{description}</Button>
          </S.FooterContentInfo>
        ))}
      </S.FooterContent>
    </S.FooterContainer>
  );
};
