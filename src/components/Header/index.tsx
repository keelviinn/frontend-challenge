import { HeaderMenu } from '../HeaderMenu';
import * as S from './header.styles';

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <HeaderMenu />
      <S.HeaderContent>
        <S.MainTextContent>
          Justpoint is connecting you to the personalized justice you deserve.
        </S.MainTextContent>
        <S.SecondaryTextContent>
          The personal injury landscape is flawed — we're redesigning it to be more human, more honest, and more effective for everyone involved. Our people and platform help you find the right attorney, so you can get answers, support, and personalized justice.
        </S.SecondaryTextContent>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}