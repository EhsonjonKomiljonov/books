import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { api } from '../../API/api';
import * as Yup from 'yup';
import {
  AddBookFileUpload,
  AddBookFileUploadBox,
  AddBookSection,
  AddBookSelectArrow,
  FileName,
} from './add-book.styles';
import { SendButton } from '../../components/SendButton/SendButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { lang } from '../../lang/lang';
import { LocalizationContext } from '../../context/LocalizationContext';

export const AddBook = () => {
  const [fileName, setFileName] = useState('');
  const [changeGenre, setChangeGenre] = useState(false);
  const [changeAddAuthor, setChangeAddAuthor] = useState([]);
  const { lang: language } = useContext(LocalizationContext);

  const token = useSelector((state) => state.token.token);

  const fileUploadRef = useRef();
  const selectValRef = useRef();
  const changeAuthorRef = useRef();
  const navigate = useNavigate();

  const textAreaRef = useRef();

  const initialValues = {
    title: '',
    page: '',
    price: '',
    year: '',
    author_id: '',
    genre_id: '',
    description: '',
  };

  const postBook = async (val) => {
    const data = await api.setBook(val, token).catch((err) => {
      toast.error(
        err.response?.data?.message === '"image" must be of type object'
          ? 'Rasm joylash majburiy!'
          : err.response?.data?.message ===
            '"description" is not allowed to be empty'
          ? 'description yozish majburiy'
          : err.response?.data?.message ===
            '"description" length must be less than or equal to 1000 characters long'
          ? "description uzunligi 1000 tadan kam bo'lishi lozim!"
          : err.response?.data?.message === '"price" must be an integer'
          ? "Narx yirik bo'lishi lozim"
          : err.response?.data?.message === '"genre_id" must be a number'
          ? 'Genre kiriting!'
          : err.response?.data?.message ===
            'error: invalid input syntax for type integer: "NaN"'
          ? 'Author kiriting!'
          : err.response?.data?.message
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
    formData.set('title', values.title);
    formData.set('page', values.page);
    formData.set('year', +values.year);
    formData.set('price', +values.price);
    formData.set('author_id', +changeAuthorRef.current?.value);
    formData.set('genre_id', +selectValRef.current?.value);
    formData.set('description', textAreaRef.current?.value);

    console.log(values);
    postBook(formData);
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Required!')
      .min(4, 'The name of the book should be no less than 4 letters!'),
    page: Yup.number()
      .required('Required!')
      .typeError('Enter the number you can not enter the letter!')
      .min(10, 'The book page should be at least 10!'),
    year: Yup.number()
      .required('Required!')
      .min(99, 'The year of writing the book should be higher than 99!')
      .typeError('Enter the number you can not enter the letter!')
      .max(
        2023,
        'The year of writing the book should not be higher than 2023!'
      ),
    price: Yup.number()
      .required('Required!')
      .typeError('Enter the number you can not enter the letter!')
      .min(5, 'Book price should be at least 5$!')
      .max(5000, 'The book price should be at most 5000$!'),
    genre_id: Yup.string(),
    author_id: Yup.string(),
    description: Yup.string()
      .max(1000, 'It is not possible to enter more than 1000 words!')
      .min(10, 'It is impossible to enter less than 10 words'),
  });

  const changeAuthor = async (id) => {
    const data = await api.setChangeGenre(id);
    setChangeAddAuthor(data.data);
    console.log(data.data);
  };

  return (
    <AddBookSection style={{ height: '100vh' }}>
      <AddBookFileUploadBox className="dark:bg-bgDarkAdd">
        <AddBookFileUpload className="dark:bg-bgDarkAddImg dark:border-dashed dark:border-opacity-60 dark:border-white">
          <input
            onChange={(evt) => setFileName(evt.target?.files[0]?.name)}
            ref={fileUploadRef}
            type="file"
          />
          <p className="dark:text-white dark:opacity-60">
            {lang[language].AddFileUploadText}
          </p>
        </AddBookFileUpload>
        <FileName>{fileName}</FileName>
      </AddBookFileUploadBox>
      <div className="pl-32 pt-11">
        <h2
          className={`text-4xl ${
            lang.ru ? 'font-normal' : 'font-poppins'
          } font-black dark:text-white`}
        >
          {lang[language].AddBookPage.AddBookTitle}
        </h2>
        <Formik
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          <Form className="mt-3">
            <div className="flex justify-center flex-col mb-4 rounded-xl">
              <Field
                className="w-80 py-3 px-6 border-2 dark:text-white dark:bg-transparent focus:outline-slate-400 border-neutral-400 rounded-xl"
                name="title"
                type="text"
                placeholder={lang[language].AddBookPage.AddBookTitleInput}
              />
              <span className="text-red-700 text-xs">
                <ErrorMessage name="title" />
              </span>
            </div>
            <div className="flex justify-center flex-col mb-4 rounded-xl">
              <Field
                className="w-80 py-3 px-6 border-2 dark:text-white dark:bg-transparent focus:outline-slate-400 border-neutral-400 rounded-xl"
                name="page"
                type="text"
                placeholder={lang[language].AddBookPage.AddBookPagesInput}
              />
              <span className="text-red-700 text-xs">
                <ErrorMessage name="page" />
              </span>
            </div>
            <div className="flex justify-center flex-col mb-4 rounded-xl">
              <Field
                className="w-80 py-3 px-6 border-2 dark:text-white dark:bg-transparent focus:outline-slate-400 border-neutral-400 rounded-xl"
                name="year"
                type="text"
                placeholder={lang[language].AddBookPage.AddBookYearInput}
              />
              <span className="text-red-700 text-xs">
                <ErrorMessage name="year" />
              </span>
            </div>
            <div className="flex justify-center flex-col mb-4 rounded-xl">
              <Field
                className="w-80 py-3 px-6 border-2 dark:text-white dark:bg-transparent focus:outline-slate-400 border-neutral-400 rounded-xl"
                name="price"
                type="text"
                placeholder={lang[language].AddBookPage.AddBookPriceInput}
              />
              <span className="text-red-700 text-xs">
                <ErrorMessage name="price" />
              </span>
            </div>
            <div className="relative">
              <AddBookSelectArrow></AddBookSelectArrow>
              <select
                ref={selectValRef}
                onChange={(evt) => {
                  changeAuthor(+evt.target.value);
                  setChangeGenre(true);
                }}
                className="w-80 py-3 px-6 dark:bg-transparent focus:outline-slate-400 text-neutral-400 border-2 border-neutral-300 rounded-xl appearance-none"
                name="genre_id"
              >
                <option selected disabled>
                  {lang[language].AddGenre}
                </option>
                <option value="1">
                  {lang[language].HomePage.main.mainCategories.categoryTitle1}
                </option>
                <option value="2">
                  {lang[language].HomePage.main.mainCategories.categoryTitle2}
                </option>
                <option value="3">
                  {lang[language].HomePage.main.mainCategories.categoryTitle3}
                </option>
                <option value="4">
                  {lang[language].HomePage.main.mainCategories.categoryTitle4}
                </option>
              </select>
              <span className="text-red-700 text-xs">
                <ErrorMessage name="genre_id" />
              </span>
            </div>
            <div className="relative mt-4">
              <AddBookSelectArrow
                className={changeGenre ? 'block' : 'hidden'}
              ></AddBookSelectArrow>
              <select
                ref={changeAuthorRef}
                className={
                  changeGenre
                    ? 'block w-80 py-3 px-6 dark:bg-transparent focus:outline-slate-400 text-neutral-400 border-2  border-neutral-300 rounded-xl appearance-none'
                    : 'hidden'
                }
                name="author"
              >
                <option selected disabled>
                  {lang[language].AddBookPage.AddBookAuthor}
                </option>
                {changeAddAuthor.length
                  ? changeAddAuthor.map((item) => (
                      <option value={item.id}>
                        {item.first_name + ' ' + item.last_name}
                      </option>
                    ))
                  : ''}
              </select>
              <span className="text-red-700 text-xs">
                <ErrorMessage name="author" />
              </span>
            </div>
            <div className="flex justify-center flex-col mt-4 mb-4 rounded-xl">
              <textarea
                style={{ resize: 'none' }}
                className="w-80 h-24 dark:bg-transparent py-3 px-6 border-2 dark:text-white focus:outline-slate-400 border-neutral-300 rounded-xl"
                ref={textAreaRef}
                name="description"
                placeholder={lang[language].AddBookPage.AddBookDescInput}
                cols="30"
              ></textarea>
              <span className="text-red-700 text-xs">
                <ErrorMessage name="description" />
              </span>
            </div>
            <SendButton btnText={lang[language].AddSendBtn} />
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
    </AddBookSection>
  );
};
