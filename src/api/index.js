import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "https://beautiful-wind-cave-54166.herokuapp.com",
  timeout: 15000,
});

export default API;
