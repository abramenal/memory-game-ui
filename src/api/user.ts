import throwOnError from './helpers/throwOnError';
import { API_BASE_URL } from '../constants';
import { GameHistory, User } from '../types';

type LoginParams = {
  username: string;
};

export const login = ({ username }: LoginParams): Promise<User> =>
  fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
    }),
  })
    .then(res => res.json())
    .then(throwOnError);

type GetHistoryParams = {
  userId: string;
};

export const getUserHistory = ({ userId }: GetHistoryParams): Promise<GameHistory[]> =>
  fetch(`${API_BASE_URL}/users/${userId}/history`, {
    method: 'GET',
    mode: 'cors',
  })
    .then(res => res.json())
    .then(throwOnError);
