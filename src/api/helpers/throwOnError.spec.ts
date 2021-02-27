import throwOnError from './throwOnError';

describe('throwOnError', () => {
  it('throws on error', () => {
    const props = { error: 'something' };
    expect(() => throwOnError(props)).toThrow('something');
  });

  it('returns original object if there is no error', () => {
    const props = { data: 'something' };

    const res = throwOnError(props);
    expect(res).toEqual(props);
  });
});
