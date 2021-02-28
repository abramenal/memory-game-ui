import { render, screen } from '@testing-library/vue';

import Button from './Button.vue';

describe('Button', () => {
  it('renders in disabled state', () => {
    render(Button, { props: { disabled: true, text: 'test' } });

    const el = screen.getByTestId('Button');
    expect(el.getAttribute('disabled')).toEqual('');

    const text = screen.getByText('test');
    expect(text).toBeInTheDocument();
  });

  it('renders in clickable state', () => {
    render(Button, { props: { disabled: false, text: 'test' } });

    const el = screen.getByTestId('Button');
    expect(el.getAttribute('disabled')).toEqual(null);

    const text = screen.getByText('test');
    expect(text).toBeInTheDocument();
  });
});
