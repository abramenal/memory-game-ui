export type GameStatus = 'started' | 'completed' | 'failed';

export type Game = {
  id: string;
  status: GameStatus;
  sequence: number[];
  currentTurn: number;
  turnsTotal: number;
  userId: string;
  createdAt: number;
  updatedAt: number;
}
