import { LockOutlined, SettingOutlined } from '@ant-design/icons';
import { Divider, Space, Typography } from 'antd';
import { ReactComponent as MMILogo } from 'assets/MMI_Purple.svg';
import { FormikProps, useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { ILoginRequestPayload } from 'shared/interfaces/IAuth';
import { Button, Input } from 'shared/theme/elements';
import { getErrorMessage } from 'shared/utils/getErrorMessage';
import * as yup from 'yup';

import {
  FlexBetween,
  LoginCard,
  LoginCardHeader,
  LoginContainer,
  LoginForm,
  LoginWrapper,
  LogoContainer,
  RememberMeCheckbox,
} from './LoginPage.styled';

type Props = {
  handleSubmit: (payload: ILoginRequestPayload) => void;
  loading?: boolean;
};
const LoginView: React.FC<Props> = ({ handleSubmit, loading }) => {
  const initialValues: ILoginRequestPayload = {
    email: 'constantino.johnsovereign22@gmail.com',
    password: 'samplepassword',
  };

  const loginValidationSchema: yup.SchemaOf<ILoginRequestPayload> = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const form: FormikProps<ILoginRequestPayload> = useFormik<ILoginRequestPayload>({
    initialValues,
    onSubmit: (values) => handleSubmit(values),
    validationSchema: loginValidationSchema,
  });

  return (
    <LoginWrapper>
      <LoginContainer>
        <LogoContainer>
          <MMILogo />
        </LogoContainer>
        <LoginCard>
          <LoginCardHeader>
            <Typography.Text className="header__title">Login</Typography.Text>
          </LoginCardHeader>
          <Divider />
          <LoginForm
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            method="POST"
          >
            <Space size="large" direction="vertical" className="form-space">
              <Input
                size="large"
                name="email"
                placeholder="Email"
                prefix={<SettingOutlined />}
                errorMessage={getErrorMessage(form.touched.email, form.errors.email)}
                value={form.values.email}
                onChange={form.handleChange}
                $fullWidth
              />
              <Input
                type="password"
                size="large"
                placeholder="Password"
                prefix={<LockOutlined />}
                $fullWidth
                name="password"
                value={form.values.password}
                errorMessage={getErrorMessage(form.touched.password, form.errors.password)}
                onChange={form.handleChange}
              />
              <FlexBetween>
                <RememberMeCheckbox>Remember Me</RememberMeCheckbox>
                <Link to={'#'} style={{ color: '#292F4C' }}>
                  Forgot your password?
                </Link>
              </FlexBetween>
              <Button $fullwidth={true} htmlType="submit" loading={loading} disabled={loading}>
                Login
              </Button>
            </Space>
          </LoginForm>
        </LoginCard>
        {/* Card */}
        {/* Card Header */}
        {/* Card Body Form */}
        {/* Footer */}
      </LoginContainer>
    </LoginWrapper>
  );
};

export default LoginView;
