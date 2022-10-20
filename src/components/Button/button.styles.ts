import styled, { css } from 'styled-components/macro';

export const Button = styled.button<{ variant?: string }>`
  ${({ variant }: any) => css`
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    background-color: ${variant === 'primary' ? '#ffff' : variant === 'optional' ? '#000000' : '#A0CDBF'};
    color: ${variant === 'optional' ? '#FDFCF5' : '#000'};
    border: ${variant === 'primary' || 'secundary-bordered' ? '1px solid #000' : 'none'};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${variant === 'primary' ? '#000' : '#A0CDBF'};
      color: #ffff;
    }

    &:focus {
      outline: none;
    }
  `}
`;