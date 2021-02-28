import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';

import Banner from './Banner.vue';

describe('Banner', () => {
  it('renders heading', () => {
    render(Banner);

    expect(screen.queryByTestId('Banner')).toBeInTheDocument();
  });
});
