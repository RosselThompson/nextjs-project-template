import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PrimaryButton } from 'components/Buttons/PrimaryButton';

const TEST_TEXT = 'Test Button';
const TEST_TYPE = 'submit';
const TEST_ONCLICK = jest.fn();

describe('Test Primary Button component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<PrimaryButton text={TEST_TEXT} />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with text property', () => {
    const { getByText } = render(<PrimaryButton text={TEST_TEXT} />);
    expect(getByText(TEST_TEXT)).toBeInTheDocument();
  });

  it('should render component with type property', () => {
    const { getByRole } = render(
      <PrimaryButton text={TEST_TEXT} type={TEST_TYPE} />
    );
    expect(getByRole('button')).toHaveAttribute('type', TEST_TYPE);
  });

  it('should render component with onClick property', () => {
    const { getByRole } = render(
      <PrimaryButton text={TEST_TEXT} onClick={TEST_ONCLICK} />
    );
    getByRole('button').click();
    expect(TEST_ONCLICK).toHaveBeenCalled()
  });

  it('should render component with disabled property', () => {
    const { getByRole } = render(<PrimaryButton isDisabled text={TEST_TEXT} />);
    expect(getByRole('button')).toHaveAttribute('disabled');
  });
});
