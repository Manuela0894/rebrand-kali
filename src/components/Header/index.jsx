import React from "react";
import kaliIcon from "../../assets/icons/kali-icon.svg";
import docIcon from "../../assets/icons/doc-icon.svg";

import * as S from "./style"; 

const NavBar = () => {
  return (
    <S.NavContainer>
      <S.Logo src={kaliIcon} alt="Kali Logo" />

      <S.NavContent>
        <S.NavList>
          <li><a href="#">Get Kali</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Community</a></li>
        </S.NavList>

        <S.DocWrapper>
          <img src={docIcon} alt="Docs" />
          <a href="#">Doc</a>
        </S.DocWrapper>
      </S.NavContent>

      <S.BottomBorder />
    </S.NavContainer>
  );
};

export default NavBar;