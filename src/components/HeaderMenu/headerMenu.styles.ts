import styled from 'styled-components/macro';

export const HeaderMenuWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 10px;
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: green;
  }
`;

export const CompanyName = styled.h1`
  font-family: 'Lora';
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;