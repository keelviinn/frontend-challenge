import styled from 'styled-components/macro';

export const Input = styled.div`
  input {
    width: 100%;
    border: 1px solid #A0CDBF;
    border-radius: 30px;
    padding: 10px 30px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;

    transition: all 0.3s ease-in-out;

    &:hover {
      border: 1px solid #DBE7E4;
    }

    &:focus {
      border: 1px solid #A0CDBF;
      outline: none;
    }
  }
`;