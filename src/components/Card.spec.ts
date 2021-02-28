import { render, screen } from '@testing-library/vue';

import Card from './Card.vue';

describe('Card', () => {
  it('renders card label if "isVisible" is true', () => {
    render(Card, { props: { isVisible: true, value: 5, type: 'default', isClickable: false } });

    const el = screen.queryByTestId('Card label');
    expect(el).toBeVisible();
  });

  it('does not render card label if "isVisible" is false', () => {
    render(Card, { props: { isVisible: false, value: 5, type: 'default', isClickable: false } });

    const el = screen.queryByTestId('Card label');
    expect(el).not.toBeVisible();
  });
});
