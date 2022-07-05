import axios from "axios";
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: "https://beautiful-wind-cave-54166.herokuapp.com",
  timeout: 15000,
});

API.interceptors.request.use((req) => {
  console.log(req);
  console.log(Cookies.get('myCookie'));
  // if(localStorage.getItem("profile")){
  //   req.headers.Authorization=`Bearee ${JSON.parse(localStorage.getItem("profile")).token}`;
  // }
  return req;
});

export default API;
