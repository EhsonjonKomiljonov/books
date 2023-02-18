import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FileUploadIcon } from './profile-edit.styles';
import * as Yup from 'yup';
import { api } from '../../API/api';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/user/userAction';
import loadingIcon from '../../assets/images/loading-icon.svg';
import loadingIconDark from '../../assets/images/loading-icon-dark.svg';
import { SaveChangesBtn } from '../SaveChangesBtn/SaveChangesBtn';
import { LocalizationContext } from '../../context/LocalizationContext';
import { lang } from '../../lang/lang';

export const ProfileEdit = () => {
  const { lang: language } = useContext(LocalizationContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editedImage, setEditedImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.token.token);
  const theme = useSelector((state) => state.theme.theme);

  const fileUploadRef = useRef();

  const getUser = async () => {
    const data = await api.userData(token).catch((err) => console.log(err));
    if (data.status === 201) {
      localStorage.setItem('user', JSON.stringify(data.data));
      dispatch(setUser(data.data));
    }
  };

  const editProfile = async (val) => {
    const data = await api.editProfile(val, token).catch((err) => {
      toast.error(
        err.response?.data?.message === '"image" is not allowed'
          ? "Rasm o'zgartirish majburiy!"
          : ''
      );
    });
    if (data.status === 201) {
      setLoading(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  const formData = new FormData();

  const onSubmit = (values) => {
    formData.set('image', fileUploadRef.current.files[0]);
    formData.set('first_name', values.first_name);
    formData.set('last_name', values.last_name);
    formData.set('phone', values.phone);
    editProfile(formData);
    getUser();
  };

  const initialValues = {
    first_name: user.first_name,
    last_name: user.last_name,
    phone: user.phone,
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Please enter your first name.'),
    last_name: Yup.string().required('Please enter your last name.'),
    phone: Yup.string().required('Please enter your phone name.'),
  });

  return (
    <section style={{ height: '100vh' }} className="pt-40">
      <div className="container \">
        <div className="flex justify-between">
          <div className="relative">
            <label
              style={{ width: '174px', height: '174px' }}
              className={`text-9xl inline-block ${
                user.image ? '' : 'px-14 pt-5 pb-7 bg-profilePlaceholderColor'
              } cursor-pointer text-white rounded-full`}
            >
              {user.image != null ? (
                <img
                  style={{ width: '174px', height: '174px' }}
                  className="rounded-full"
                  src={'http://localhost:5000/' + user.image}
                  alt={user.first_name}
                />
              ) : (
                user.first_name.at(0)
              )}

              {editedImage ? (
                <p className="text-profileLink text-2xl mt-10 text-center items-center flex flex-col">
                  <span className="mb-3">Updated!</span>
                  Enter by Save Changes!
                </p>
              ) : (
                ''
              )}

              <input
                onChange={() => setEditedImage(true)}
                ref={fileUploadRef}
                className="hidden"
                type="file"
              />
            </label>
            <FileUploadIcon className="dark:bg-editProfileSpanDark"></FileUploadIcon>
          </div>
          <div style={{ width: '812px' }} className="mt-10">
            <h2
              className={`${
                lang.ru ? 'font-normal' : 'font-poppins'
              } text-lg font-medium dark:text-editColorTitleDark`}
            >
              {lang[language].ProfilePage.ProfileEditPage.ProfileEditTitle}
            </h2>
            <Formik
              onSubmit={onSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <Form className="pt-8 pb-7">
                <div className="mb-11 pb-7 border-b-2 border-b-profileFormBorder">
                  <div className="mb-6">
                    <label className="flex flex-col text-xs">
                      <span className="text-editProfileLabel dark:text-white opacity-80">
                        {
                          lang[language].ProfilePage.ProfileEditPage
                            .ProfileFirstNameInput
                        }
                      </span>
                      <Field
                        className="rounded focus:outline-gray-400 py-3 px-5 bg-editProfileInput mt-2"
                        type="text"
                        name="first_name"
                        placeholder="Enter your First Name"
                      />
                      <span className="text-editProfileSpan  dark:mt-1">
                        <ErrorMessage name="first_name" />
                      </span>
                    </label>
                  </div>
                  <div className="mb-6">
                    <label className="flex flex-col text-xs">
                      <span className="text-editProfileLabel dark:text-white opacity-80">
                        {
                          lang[language].ProfilePage.ProfileEditPage
                            .ProfileLastNameInput
                        }
                      </span>
                      <Field
                        className="rounded focus:outline-gray-400 py-3 px-5 bg-editProfileInput mt-2"
                        type="text"
                        name="last_name"
                        placeholder="Enter your Last Name"
                      />
                      <span className="text-editProfileSpan dark: mt-1">
                        <ErrorMessage name="last_name" />
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col text-xs">
                      <span className="text-editProfileLabel dark:text-white opacity-80">
                        {
                          lang[language].ProfilePage.ProfileEditPage
                            .ProfilePhoneInput
                        }
                      </span>
                      <Field
                        className="rounded focus:outline-gray-400 w-1/2 py-3 px-5 bg-editProfileInput mt-2"
                        type="text"
                        name="phone"
                        placeholder="Enter your phone"
                      />
                      <span
                        style={{ width: '130px' }}
                        className="block text-editProfileSpan dark: mt-1"
                      >
                        <ErrorMessage name="phone" />
                      </span>
                    </label>
                  </div>
                </div>
                <SaveChangesBtn text={lang[language].SaveChangesBtn} />
              </Form>
            </Formik>
          </div>
        </div>
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
      {loading ? (
        theme ? (
          <img
            style={{
              position: 'absolute',
              top: '160px',
              right: '0',
              bottom: '0',
              left: '670px',
              width: '400px',
              height: '400px',
            }}
            src={loadingIcon}
            alt="Loading..."
          />
        ) : (
          <img
            style={{
              position: 'absolute',
              top: '160px',
              right: '0',
              bottom: '0',
              left: '670px',
              width: '400px',
              height: '400px',
            }}
            src={loadingIconDark}
            alt="Loading..."
          />
        )
      ) : (
        ''
      )}
    </section>
  );
};
