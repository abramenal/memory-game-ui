import { render, screen } from '@testing-library/vue';

import Credits from './Credits.vue';

describe('Credits', () => {
  it('renders credits list', () => {
    render(Credits);

    expect(screen.queryByTestId('Github link')).toBeInTheDocument();
    expect(screen.queryByTestId('Vue link')).toBeInTheDocument();
  });
});
