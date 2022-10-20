import * as S from './button.styles';

export const Button = ({ variant, children, ...props }: any) => { 
  return (
    <S.Button
      variant={variant}
      {...props}
    >
      {children}
    </S.Button>
  );
}