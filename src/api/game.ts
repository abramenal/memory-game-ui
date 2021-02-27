import throwOnError from './helpers/throwOnError';
import { API_BASE_URL } from '../constants';
import { Game } from '../types';

type CreateGameParams = {
  userId: string;
  turnsAmount: number;
};

export const createGame = ({ userId, turnsAmount }: CreateGameParams): Promise<Game> => fetch(
  `${API_BASE_URL}/games`,
  {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      turnsAmount,
    }),
  },
).then((res) => res.json()).then(throwOnError);

type SubmitGameParams = {
  gameId: string;
  userId: string;
  value: number;
};

export const submitGameTurn = ({ gameId, userId, value }: SubmitGameParams): Promise<Game> => fetch(
  `${API_BASE_URL}/games/${gameId}/turn`,
  {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      value,
    }),
  },
).then((res) => res.json()).then(throwOnError);
