import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const api = {
  userRegister: (val) => axios.post(BASE_URL + '/user/register', val),
  // userLogin: (val) => axios.post(BASE_URL + '/user/login', val),
  userData: (token) =>
    axios.get(BASE_URL + '/user/me', {
      headers: {
        Authorization: token,
      },
    }),
};
