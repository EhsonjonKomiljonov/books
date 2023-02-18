import { ErrorMessage, Form, Formik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
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
import { api } from '../../API/api';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/token/tokenAction';
import { setUser } from '../../redux/user/userAction';
import { toast, ToastContainer } from 'react-toastify';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = async (val) => {
    const data = await api
      .userLogin(val)
      .catch((err) =>
        toast.error(
          err.response?.data?.message === 'Wrong password specified'
            ? "Parol hato kiritildi! Qaytadan urinib ko'ring!"
            : 'Bunday emaildagi user mavjud emas!'
        )
      );
    const userData = await api
      .userData(data?.data?.token)
      .catch((err) => console.log(err));

    console.log(data);

    if (data.status === 201) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(userData.data));

      dispatch(setToken(data.data.token));
      dispatch(setUser(userData.data));

      navigate('/');
    }
  };

  const onSubmit = (values) => {
    userLogin(values);
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </LoginSection>
    </div>
  );
};
