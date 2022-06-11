import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { TextButton } from 'components/Buttons/TextButton';

const TEST_TEXT = 'Test Button';
const TEST_ONCLICK = jest.fn();

describe('Test Text Button component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<TextButton text={TEST_TEXT} />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with text property', () => {
    const { getByText } = render(<TextButton text={TEST_TEXT} />);
    expect(getByText(TEST_TEXT)).toBeInTheDocument();
  });

  it('should render component with onClick property', () => {
    const { getByRole } = render(
      <TextButton text={TEST_TEXT} onClick={TEST_ONCLICK} />
    );
    getByRole('button').click();
    expect(TEST_ONCLICK).toHaveBeenCalled();
  });

  it('should render component with disabled property', () => {
    const { getByRole } = render(<TextButton isDisabled text={TEST_TEXT} />);
    expect(getByRole('button')).toHaveAttribute('disabled');
  });
});
