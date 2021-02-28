import { render, screen } from '@testing-library/vue';

import History from './History.vue';
import { getUserHistory } from '../api';
import mockGameHistory from '../api/__mocks__/gameHistory.json';

jest.mock('../api', () => ({
  getUserHistory: jest.fn(() => Promise.resolve(mockGameHistory)),
}));

describe('History', () => {
  beforeEach(() => {
    render(History, { props: { userId: 'test' } });
  });

  it('calls API to fetch data', () => {
    expect(getUserHistory).toBeCalledTimes(1);
    expect(getUserHistory).toBeCalledWith({ userId: 'test' });
  });

  it('renders game history', () => {
    expect(screen.queryByTestId('Game title')).toBeInTheDocument();
    expect(screen.queryByTestId('Game cards')).toBeInTheDocument();
    expect(screen.queryByTestId('Game cards')?.children).toHaveLength(1);
  });
});
