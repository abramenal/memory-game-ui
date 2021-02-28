import { render, screen } from '@testing-library/vue';

import Error from './Error.vue';

describe('Error', () => {
  it('renders error text', () => {
    render(Error, { props: { message: 'error' } });

    const el = screen.getByText('error');
    expect(el).toBeInTheDocument();
  });
});
