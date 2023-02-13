import { ErrorMessage, Field, Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import {
  RegisterDesc,
  RegisterImg,
  RegisterImgBox,
  RegisterInput,
  RegisterSection,
} from './register.styles';
import * as Yup from 'yup';
import { SendButton } from '../../components/SendButton/SendButton';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Register = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Required!'),
    last_name: Yup.string().required('Required!'),
    phone: Yup.string()
      .required('Required!')
      .min(9, 'Phone number should not be less than 9!')
      .max(13, 'The phone number should not be more than 13!'),
    email: Yup.string().required('Required!').email('Enter Email correctly!'),
    password: Yup.string()
      .required('Required!')
      .min(4, 'The password should not be less than 4!')
      .max(15, 'The password should not be more than 15!'),
  });

  return (
    <>
      <RegisterSection>
        {/* <button onClick={() => setTheme(theme ? '' : 'dark')}>Click</button> */}
        <div>
          <RegisterImgBox className="flex items-center justify-center px-9">
            <RegisterImg></RegisterImg>
          </RegisterImgBox>
          <div className="pt-20 pl-36">
            <h1 className="mb-2.5 font-black text-4xl text-black dark:text-white">
              Sign up
            </h1>
            <RegisterDesc className="text-black dark:text-white">
              Already have an account?{' '}
              <NavLink className="text-link" to="/">
                Sign in
              </NavLink>
            </RegisterDesc>
            <Formik
              onSubmit={onSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <Form className="mt-6">
                <div className="mb-4">
                  <RegisterInput
                    className="bg-transparent"
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                  />
                  <span className="text-red-700">
                    <ErrorMessage name="first_name" />
                  </span>
                </div>
                <div className="mb-4">
                  <RegisterInput
                    className="bg-transparent"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                  />
                  <span className="text-red-700">
                    <ErrorMessage name="last_name" />
                  </span>
                </div>
                <div className="mb-4">
                  <RegisterInput
                    className="bg-transparent"
                    name="phone"
                    type="phone"
                    placeholder="Phone"
                  />
                  <span className="text-red-700">
                    <ErrorMessage name="phone" />
                  </span>
                </div>
                <div className="mb-4">
                  <RegisterInput
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
                  <RegisterInput
                    className="bg-transparent"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <span className="text-red-700">
                    <ErrorMessage name="password" />
                  </span>
                </div>
                <SendButton type="submit" btnText="Next step" />
              </Form>
            </Formik>
          </div>
        </div>
      </RegisterSection>
    </>
  );
};
