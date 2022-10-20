import { Button } from "../Button";
import * as S from "./headerMenu.styles";

export const HeaderMenu = () => {
  return (
    <S.HeaderMenuWrapper>
      <S.CompanyName>Justpoint</S.CompanyName>
      <S.HeaderMenu>
        <li key='1'>
          <S.HeaderLink href="/">ABOUT US</S.HeaderLink>
        </li>
        <li key='2'>
          <S.HeaderLink href="/">KNOWLEDGE BASE</S.HeaderLink>
        </li>
        <li key='3'>
          <Button variant="primary">SUBMIT YOUR CASE</Button>
        </li>
        <li key='4'>
          <Button variant="secondary">(347) 560-4064</Button>
        </li>
      </S.HeaderMenu>
    </S.HeaderMenuWrapper>
  );
};
