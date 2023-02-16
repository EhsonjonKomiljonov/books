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
  setChangeGenre: (id) => axios.get(BASE_URL + '/author/genreId/' + id),
  getBook: (val) => axios.get(BASE_URL + '/book/search?book=' + val),
  getTemuriylarAuthors: () => axios.get(BASE_URL + '/author/genreId/1'),
  getSovetAuthors: () => axios.get(BASE_URL + '/author/genreId/2'),
  getMustaqillikAuthors: () => axios.get(BASE_URL + '/author/genreId/3'),
  getJadidlarAuthors: () => axios.get(BASE_URL + '/author/genreId/4'),
};
