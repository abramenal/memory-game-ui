import { createGame, submitGameTurn } from './game';

describe('createGame', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    globalThis.fetch = jest.fn((...args) =>
      Promise.resolve({
        json: () => args,
      }),
    );
  });

  it('calls HTTP API', async () => {
    const request = await createGame({ userId: 'test', turnsAmount: 4 });
    expect(request).toMatchSnapshot();
  });
});

describe('submitGameTurn', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    globalThis.fetch = jest.fn((...args) =>
      Promise.resolve({
        json: () => args,
      }),
    );
  });

  it('calls HTTP API', async () => {
    const request = await submitGameTurn({ userId: 'test', gameId: 'test2', value: 4 });
    expect(request).toMatchSnapshot();
  });
});
