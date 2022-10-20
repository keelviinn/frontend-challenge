import { Button } from "../Button";
import * as S from "./headerMenu.styles";

export const HeaderMenu = () => {
  return (
    <S.HeaderMenuWrapper>
      <S.CompanyName>Justpoint</S.CompanyName>
      <S.HeaderMenu>
        <li>
          <S.HeaderLink href="/">ABOUT US</S.HeaderLink>
        </li>
        <li>
          <S.HeaderLink href="/">KNOWLEDGE BASE</S.HeaderLink>
        </li>
        <li>
          <Button variant="primary">SUBMIT YOUR CASE</Button>
        </li>
        <li>
          <Button variant="secondary">(347) 560-4064</Button>
        </li>
      </S.HeaderMenu>
    </S.HeaderMenuWrapper>
  );
};
