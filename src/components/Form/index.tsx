import { createRef } from "react";
import { Form as AntdForm } from "antd";
import type { FormInstance } from "antd/es/form";

import * as S from "./form.styles";
import { Input } from "../Input/Input";
import { Button } from "../Button";

export const Form = () => {
  const formRef = createRef<FormInstance>();

  return (
    <S.FormWrapper>
      <S.FormCard>
        <S.FormHeader>
          <h2>The right attorney for your specific case</h2>
          <p>Fill the form below and we’ll contact you within 24 hours</p>
        </S.FormHeader>

        <S.Form>
          <AntdForm
            ref={formRef}
            name="control-ref"
            layout="vertical"
            autoComplete="off"
            onFinish={() => console.log("finish")}
            className="flex flex-col"
          >
            <Input 
              name="Full Name"
              required={true}
              placeholder="First and last name*"
            />
            <Input 
              name="Phone Number"
              required={true}
              placeholder="Phone number*"
            />
            <Input 
              name="Email"
              required={false}
              placeholder="Email address"
            />
            <Button
              type="primary"
              htmlType="submit"
              className="self-center"
            >
              EVALUATE MY CASE NOW
            </Button>
          </AntdForm>
        </S.Form>

        <S.FormFooter>
          <p>
            <span>
              By submitting your information you indicate that you’ve read and
              agree to our disclaimer & privacy policy.
            </span>
          </p>
          <p>
            Next step: We use a mix of artificial intelligence combined with
            personalized analysis to match you with the right attorney for your
            specific case.
          </p>
        </S.FormFooter>
      </S.FormCard>
    </S.FormWrapper>
  );
};
