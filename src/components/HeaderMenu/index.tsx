import { useState } from 'react';

import * as S from "./headerMenu.styles";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";

export const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <S.HeaderMenuWrapper>
      <S.CompanyName>Justpoint</S.CompanyName>
      <Navigation />
      <MobileNavigation
        open={open}
        setOpen={setOpen}
      />
    </S.HeaderMenuWrapper>
  );
};
