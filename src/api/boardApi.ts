import axios from 'axios';
import { Board } from '../types';

const API_URL = 'https://your-backend-service.com/api/boards';

export const saveBoard = async (board: Board) => {
  const response = await axios.post(API_URL, board);
  return response.data;
};

export const getBoard = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
