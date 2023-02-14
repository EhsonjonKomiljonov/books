import { ErrorMessage, Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import {
  LoginDesc,
  LoginImgStyle,
  LoginImgBox,
  LoginInput,
  LoginSection,
  LoginContentBox,
} from './login.styles';
import * as Yup from 'yup';
import { SendButton } from '../../components/SendButton/SendButton';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import axios from 'axios';

export const Login = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onSubmit = (values) => {
    // axios.post('http:localhost:5000/user/login');
    console.log(values);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required!').email('Enter Email correctly!'),
    password: Yup.string()
      .required('Required!')
      .min(4, 'The password should not be less than 4!')
      .max(15, 'The password should not be more than 15!'),
  });

  return (
    <div>
      <LoginSection>
        {/* <button onClick={() => setTheme(theme ? '' : 'dark')}>Click</button> */}
        <div className="container ml-auto">
          <LoginImgBox className="flex items-center justify-center px-9">
            <LoginImgStyle></LoginImgStyle>
          </LoginImgBox>
          <LoginContentBox>
            <h1 className="mb-2.5 font-black text-4xl text-black dark:text-white">
              Sign in
            </h1>
            <LoginDesc className="text-black dark:text-white">
              Do not you have an account?{' '}
              <NavLink className="text-link" to="/register">
                Sign up
              </NavLink>
            </LoginDesc>
            <Formik
              onSubmit={onSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <Form className="mt-6">
                <div className="mb-4">
                  <LoginInput
                    className="bg-transparent"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <span className="text-red-700">
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <div className="mb-4">
                  <LoginInput
                    className="bg-transparent"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <span className="text-red-700">
                    <ErrorMessage name="password" />
                  </span>
                </div>
                <SendButton btnText="Next step" />
              </Form>
            </Formik>
          </LoginContentBox>
        </div>
      </LoginSection>
    </div>
  );
};
