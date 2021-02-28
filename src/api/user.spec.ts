import { login, getUserHistory } from './user';

describe('login', () => {
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
    const request = await login({ username: 'test' });
    expect(request).toMatchSnapshot();
  });
});

describe('getUserHistory', () => {
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
    const request = await getUserHistory({ userId: 'test' });
    expect(request).toMatchSnapshot();
  });
});
