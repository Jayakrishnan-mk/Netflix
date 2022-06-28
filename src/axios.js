import axios from "axios";
import {baseUrl} from './Components/constants/constants.js';

const instance = axios.create({
    baseURL: baseUrl,
   
  });

  export default instance;