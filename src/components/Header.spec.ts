import { fireEvent, render, screen } from '@testing-library/vue';

import Header from './Header.vue';

describe('Header', () => {
  [
    { name: 'Play', key: 'game' },
    { name: 'History', key: 'history' },
    { name: 'Credits', key: 'credits' },
  ].forEach(({ name, key }) => {
    it(`selects "${name}" tab`, () => {
      const { emitted } = render(Header, { props: {} });
      const tab = screen.getByText(name);

      fireEvent.click(tab);

      expect(emitted()).toHaveProperty('onLinkClick');

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      expect(emitted().onLinkClick[0][0]).toEqual(key);
    });
  });
});
