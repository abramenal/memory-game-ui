import { API_BASE_URL } from '../constants';
import { GameTurn, User } from '../types';

type LoginParams = {
  username: string;
}

export const login = ({ username }: LoginParams): Promise<User> => fetch(
  `${API_BASE_URL}/users/login`,
  {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
    }),
  },
).then((res) => res.json());

type GetHistoryParams = {
  userId: string;
}

export const getUserHistory = ({ userId }: GetHistoryParams): Promise<GameTurn[]> => fetch(
  `${API_BASE_URL}/users/${userId}/history`,
  {
    method: 'GET',
    mode: 'cors',
  },
).then((res) => res.json());
