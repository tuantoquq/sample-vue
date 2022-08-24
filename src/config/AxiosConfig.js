import { BASE_API_URL } from '@/constants/Constants';
import axios from 'axios';

export default axios.create({
  baseURL: BASE_API_URL,
});
