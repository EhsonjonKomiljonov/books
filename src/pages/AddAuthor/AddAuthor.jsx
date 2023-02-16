import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { api } from '../../API/api';
import * as Yup from 'yup';
import {
  AddAuthorFileUpload,
  AddAuthorFileUploadBox,
  AddAuthorSection,
  AddAuthorSelectArrow,
  FileName,
} from './add-author.styles';
import { SendButton } from '../../components/SendButton/SendButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const AddAuthor = () => {
  const [fileName, setFileName] = useState('');
  const token = useSelector((state) => state.token.token);

  const fileUploadRef = useRef();
  const selectValRef = useRef();
  const navigate = useNavigate();

  const textAreaRef = useRef();

  const initialValues = {
    first_name: '',
    last_name: '',
    date_of_birth: '',
    date_of_death: '',
    country: '',
    genre_id: +selectValRef.current?.children[2].value,
    bio: '',
  };

  const postAuthor = async (val) => {
    const data = await api.setAuthor(val, token).catch((err) => {
      toast.error(
        err.response?.data?.message === '"image" must be of type object'
          ? 'Rasm joylash majburiy!'
          : err.response?.data?.message === '"bio" is not allowed to be empty'
          ? 'Bio yozish majburiy'
          : err.response?.data?.message ===
            '"bio" length must be less than or equal to 1000 characters long'
          ? "Bio uzunligi 1000 tadan kam bo'lishi lozim!"
          : ''
      );
      console.log(err);
    });

    console.log(data);

    if (data.status === 201) {
      toast.success("Muallif qo'shildi");
      navigate('/');
    }
  };

  const onSubmit = (values) => {
    const formData = new FormData();

    formData.set('image', fileUploadRef.current.files[0]);
    formData.set('first_name', values.first_name);
    formData.set('last_name', values.last_name);
    formData.set('date_of_birth', values.date_of_birth);
    formData.set('date_of_death', values.date_of_death);
    formData.set('country', values.country);
    formData.set(
      'genre_id',
      isNaN(selectValRef.current.value)
        ? +selectValRef.current?.children[2].value
        : +selectValRef.current.value
    );
    formData.set('bio', textAreaRef.current?.value);

    postAuthor(formData);
  };

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .required('Required!')
      .min(3, 'The first name avtor should be more than 3 letters!'),
    last_name: Yup.string()
      .required('Required!')
      .min(3, 'The last name avtor should be more than 3 letters!'),
    date_of_birth: Yup.number()
      .required('Required!')
      .typeError('Enter the number you can not enter the letter!')
      .min(99, 'The year of birth of the author should be greater than 99!')
      .max(2000, 'The date of birth should be greater than 2000!'),
    date_of_death: Yup.number()
      .required('Required!')
      .typeError('Enter the number you can not enter the letter!')
      .max(
        2022,
        'The year of birth of the author should be greater than 2022!'
      ),
    country: Yup.string().required('Required!'),
    genre_id: Yup.string(),
    bio: Yup.string()
      .max(1000, 'It is not possible to enter more than 1000 words!')
      .min(10, 'It is impossible to enter less than 10 words'),
  });

  return (
    <AddAuthorSection>
      <AddAuthorFileUploadBox className="dark:bg-bgDarkAdd">
        <AddAuthorFileUpload className='dark:bg-bgDarkAddImg' >
          <input
            onChange={(evt) => setFileName(evt.target?.files[0]?.name)}
            ref={fileUploadRef}
            type="file"
          />
          <p>Click or drag file to this area to upload</p>
        </AddAuthorFileUpload>
        <FileName>{fileName}</FileName>
      </AddAuthorFileUploadBox>
      <div className="pl-32 pt-11">
        <h2 className="text-4xl font-poppins font-black dark:text-white">
          Add Author
        </h2>
        <Formik
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          <Form className="mt-3">
            <div className="flex justify-center flex-col mb-4 rounded-xl">
              <Field
                className="w-80 py-3 px-6 border-2 dark:bg-transparent focus:outline-slate-400 border-neutral-400 rounded-xl"
                name="first_name"
                type="text"
                placeholder="First name"
              />
              <span className="text-red-700">
                <ErrorMessage name="first_name" />
              </span>
            </div>
            <div className="flex justify-center flex-col mb-4 rounded-xl">
              <Field
                className="w-80 py-3 px-6 border-2 dark:bg-transparent focus:outline-slate-400 border-neutral-400 rounded-xl"
                name="last_name"
                type="text"
                placeholder="Last name"
              />
              <span className="text-red-700">
                <ErrorMessage name="last_name" />
              </span>
            </div>
            <div className="flex justify-center flex-col mb-4 rounded-xl">
              <Field
                className="w-80 py-3 px-6 border-2 dark:bg-transparent focus:outline-slate-400 border-neutral-400 rounded-xl"
                name="date_of_birth"
                type="text"
                placeholder="Date of birth"
              />
              <span className="text-red-700">
                <ErrorMessage name="date_of_birth" />
              </span>
            </div>
            <div className="flex justify-center flex-col mb-4 rounded-xl">
              <Field
                className="w-80 py-3 px-6 border-2 dark:bg-transparent focus:outline-slate-400 border-neutral-400 rounded-xl"
                name="date_of_death"
                type="text"
                placeholder="Date of death"
              />
              <span className="text-red-700">
                <ErrorMessage name="date_of_death" />
              </span>
            </div>
            <div className="flex justify-center flex-col mb-4 rounded-xl">
              <Field
                className="w-80 py-3 px-6 border-2 dark:bg-transparent focus:outline-slate-400 border-neutral-400 rounded-xl"
                name="country"
                type="text"
                placeholder="Country"
              />
              <span className="text-red-700">
                <ErrorMessage name="country" />
              </span>
            </div>
            <div className="relative">
              <AddAuthorSelectArrow></AddAuthorSelectArrow>
              <select
                ref={selectValRef}
                className="w-80 py-3 px-6 dark:bg-transparent focus:outline-slate-400 text-neutral-400 border-2 border-neutral-300 rounded-xl appearance-none"
                name="genreId"
              >
                <option selected disabled>
                  Genre
                </option>
                <option value="1">Temuriylar davri</option>
                <option value="2">Sovet davri</option>
                <option value="3">Mustaqillik davri</option>
                <option value="4">Jadidlar davri</option>
              </select>
              <span className="text-red-700">
                <ErrorMessage name="genreId" />
              </span>
            </div>
            <div className="flex justify-center flex-col mt-4 mb-4 rounded-xl">
              <textarea
                style={{ resize: 'none' }}
                className="w-80 h-24 dark:bg-transparent py-3 px-6 border-2 focus:outline-slate-400 border-neutral-300 rounded-xl"
                ref={textAreaRef}
                name="bio"
                placeholder="Bio"
                cols="30"
              ></textarea>
              <span className="text-red-700">
                <ErrorMessage name="bio" />
              </span>
            </div>
            <SendButton btnText="Create" />
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
    </AddAuthorSection>
  );
};
