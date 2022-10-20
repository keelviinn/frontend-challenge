import { Form as AntdForm, Input as AntdInput } from "antd";

import * as S from './input.styles';

type InputProps = {
  name: string;
  required?: boolean;
  placeholder: string;
  className?: string;
};

export const Input = ({
  name,
  required,
  placeholder,
  className
}: InputProps) => {
  return (
    <S.Input>
      <AntdForm.Item
        name={name}
        rules={[{ required }]}
      >
        <AntdInput
          autoComplete="off"
          placeholder={placeholder}
        />
      </AntdForm.Item>
    </S.Input>
  )
}