import { ErrorMessage, Field, Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import {
  RegisterDesc,
  RegisterImgStyle,
  RegisterImgBox,
  RegisterInput,
  RegisterSection,
  RegisterContentBox,
} from './register.styles';
import * as Yup from 'yup';
import { SendButton } from '../../components/SendButton/SendButton';
import { api } from '../../API/api';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/token/tokenAction';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/user/userAction';

export const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userRegister = async (val) => {
    const data = await api.userRegister(val);
    const dataUser = await api.userData(data.data.token);
    console.log(dataUser.data);
    if (data.status === 201) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(dataUser.data));

      dispatch(setToken(data.data.token));
      dispatch(setUser(dataUser.data));
      navigate('/');
    }
  };

  const onSubmit = (values) => {
    userRegister(values);
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
      .min(7, 'Phone number should not be less than 7!')
      .max(9, 'The phone number should not be more than 9!'),
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
        <div className="container ml-auto">
          <RegisterImgBox className="flex items-center justify-center px-9">
            <RegisterImgStyle></RegisterImgStyle>
          </RegisterImgBox>
          <RegisterContentBox>
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
                <SendButton btnText="Next step" />
              </Form>
            </Formik>
          </RegisterContentBox>
        </div>
      </RegisterSection>
    </>
  );
};
