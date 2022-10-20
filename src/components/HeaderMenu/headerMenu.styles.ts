import styled from 'styled-components/macro';

export const HeaderMenuWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;

  .MobileNavigation {
      display: none;
    }

  @media (max-width: 768px) {
    padding: 20px 30px;
    flex-direction: column;

    .Navigation {
      display: none;
    }

    .MobileNavigation {
      display: flex;
      align-items: center;
    }
  
    .MobileNavigation .Hamburger {
      z-index: 10;
      position: absolute;
      right: 5%;
      cursor: pointer;
    }
  }

`;

export const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
    flex-direction: column;
    position: absolute;
    right: 0;
    width: 100%;
    top: 0;
    padding: 5rem 0;
    align-items: center;
    background-color: #181818;
  }

  li {
    margin: 0 10px;

    @media (max-width: 768px) {
      margin: 0;
      padding: 1rem 0;
      width: 100%;
      text-align: center;
    }
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 12px;
    color: #fff;
  }

  &:hover {
    color: green;
  }
`;

export const CompanyName = styled.h1`
  font-family: 'Lora';
  font-size: 24px;
  font-weight: 700;
  color: #000;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;