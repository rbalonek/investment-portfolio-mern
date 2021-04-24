import axios from "axios";

const apiUrl = "https://investment-portfolio-mern.herokuapp.com/api";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
