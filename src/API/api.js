import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const api = {
  userRegister: (val) => axios.post(BASE_URL + '/user/register', val),
  userLogin: (val) => axios.post(BASE_URL + '/user/login', val),
  userData: (token) =>
    axios.get(BASE_URL + '/user/me', {
      headers: {
        Authorization: token,
      },
    }),
  setAuthor: (user, token) =>
    axios.post(BASE_URL + '/author', user, {
      headers: { Authorization: token },
    }),
  getAuthor: (id, token) =>
    axios.get(BASE_URL + '/author/authorId/' + id, {
      headers: {
        Authorization: token,
      },
    }),
  getAuthorSearch: (val) =>
    axios.get(BASE_URL + `/author/search?author=${val}`),
  getAuthor: (id, token) =>
    axios.get(BASE_URL + '/author/authorId/' + id, {
      headers: {
        Authorization: token,
      },
    }),
  getAuthorBooks: (id, token) =>
    axios.get(BASE_URL + '/author/books/' + id, {
      headers: {
        Authorization: token,
      },
    }),
  setBook: (book, token) =>
    axios.post(BASE_URL + '/book', book, {
      headers: {
        Authorization: token,
      },
    }),
  getBookInfo: (id, token) =>
    axios.get(BASE_URL + '/book/bookId/' + id, {
      headers: {
        Authorization: token,
      },
    }),
  setChangeGenre: (id) => axios.get(BASE_URL + '/author/genreId/' + id),
  getBook: (val) => axios.get(BASE_URL + '/book/search?book=' + val),

  editProfile: (val, token) =>
    axios.put(BASE_URL + '/user/account/', val, {
      headers: {
        Authorization: token,
      },
    }),
  editPassword: (val, token) =>
    axios.put(BASE_URL + '/user/security', val, {
      headers: {
        Authorization: token,
      },
    }),

  getTemuriylarAuthors: () => axios.get(BASE_URL + '/author/genreId/1'),
  getSovetAuthors: () => axios.get(BASE_URL + '/author/genreId/3'),
  getMustaqillikAuthors: () => axios.get(BASE_URL + '/author/genreId/2'),
  getJadidlarAuthors: () => axios.get(BASE_URL + '/author/genreId/4'),

  // GET SORT BOOKS

  getTemuriylarBooks: () => axios.get(BASE_URL + '/book/genreId/1'),
  getMustaqillikBooks: () => axios.get(BASE_URL + '/book/genreId/2'),
  getSovetBooks: () => axios.get(BASE_URL + '/book/genreId/3'),
  getJadidlarBooks: () => axios.get(BASE_URL + '/book/genreId/4'),
};
