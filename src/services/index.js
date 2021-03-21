import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const responseBody = (res) => res;
const errResponse = (err) => {
  throw err;
};

const request = {
  get: (URL) => api.get(`${URL}`).then(responseBody, errResponse),
  post: (URL, reqBody) =>
    api.post(`${URL}`, reqBody).then(responseBody, errResponse),
};

export default request;
