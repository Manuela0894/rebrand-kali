import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--secondary);
  background-color: transparent;
  position: relative;
  padding: 30px 110px;
`;

export const Logo = styled.img`
  width: 66px;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;

  li {
    font-weight: inherit;
    
    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const DocWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 22px;
  }

  a {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: inherit;
  }
`;

export const BottomBorder = styled.div`
  padding: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40%;
  height: 1px;
  background: linear-gradient(to right, #ae68ff, white);

`;