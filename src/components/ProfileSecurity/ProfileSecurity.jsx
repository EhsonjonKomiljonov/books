import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { api } from '../../API/api';
import { SaveChangesBtn } from '../SaveChangesBtn/SaveChangesBtn';
import { LocalizationContext } from '../../context/LocalizationContext';
import { lang } from '../../lang/lang';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export const ProfileSecurity = () => {
  const { lang: language } = useContext(LocalizationContext);
  const token = useSelector((state) => state.token.token);
  const navigate = useNavigate();

  const getUser = async (userData) => {
    const data = await api.userData(token);
    console.log(data);
    console.log(userData);
  };

  const editPassword = async (val) => {
    const data = await api.editPassword(val, token).catch((err) => {
      toast.error(
        err.response?.data?.message === 'This email already exists'
          ? 'Yangi email kiriting!'
          : err.response?.data?.message === 'Wrong current password specified'
          ? 'Parol hato kiritildi!'
          : err.response?.data?.message === 'Wrong current password specified'
      );
    });

    if (data.status === 201) {
      navigate('/');
      getUser(data);
    }
  };

  const initialValues = {
    email: '',
    currentPassword: '',
    newPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Please enter your Email!')
      .email('Enter Email correctly!'),
    currentPassword: Yup.string().required('Please enter your password!'),
    newPassword: Yup.string().required('Please enter your new password!'),
  });

  const onSubmit = (values) => {
    editPassword(values);
  };

  return (
    <section style={{ height: '100vh' }} className="py-36">
      <div className="container">
        <div style={{ width: '712px' }} className="mx-auto">
          <h2
            className={`${
              lang.ru ? 'font-normal' : 'font-poppins'
            } dark:text-white text-lg`}
          >
            {
              lang[language].ProfilePage.ProfileSecurityPage
                .ProfileSecurityTitle
            }
          </h2>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className="pt-8 pb-7">
              <div className="mb-11 pb-7">
                <div className="mb-6">
                  <label className="flex flex-col text-xs">
                    <span className="text-editProfileLabel dark:text-white opacity-80">
                      {
                        lang[language].ProfilePage.ProfileSecurityPage
                          .ProfileSecurityEmailInput
                      }
                    </span>
                    <Field
                      className="rounded focus:outline-gray-400 py-3 px-5 bg-editProfileInput mt-2"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <span className="text-editProfileSpan  dark:mt-1">
                      <ErrorMessage name="email" />
                    </span>
                  </label>
                </div>
                <div className="mb-6">
                  <label className="flex flex-col text-xs">
                    <span className="text-editProfileLabel dark:text-white opacity-80">
                      {
                        lang[language].ProfilePage.ProfileSecurityPage
                          .ProfileSecurityCurrentPassInput
                      }
                    </span>
                    <Field
                      className="rounded focus:outline-gray-400 py-3 px-5 bg-editProfileInput mt-2"
                      type="password"
                      name="currentPassword"
                      placeholder="Enter your current password"
                    />
                    <span className="text-editProfileSpan dark: mt-1">
                      <ErrorMessage name="currentPassword" />
                    </span>
                  </label>
                </div>
                <div>
                  <label className="flex flex-col text-xs">
                    <span className="text-editProfileLabel dark:text-white opacity-80">
                      {
                        lang[language].ProfilePage.ProfileSecurityPage
                          .ProfileSecurityNewPassInput
                      }
                    </span>
                    <Field
                      className="rounded focus:outline-gray-400  py-3 px-5 bg-editProfileInput mt-2"
                      type="password"
                      name="newPassword"
                      placeholder="Enter your new password"
                    />
                    <span
                      style={{ width: '130px' }}
                      className="block text-editProfileSpan dark: mt-1"
                    >
                      <ErrorMessage name="newPassword" />
                    </span>
                  </label>
                </div>
              </div>
              <SaveChangesBtn text={lang[language].SaveChangesBtn} />
            </Form>
          </Formik>
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
      </div>
    </section>
  );
};
