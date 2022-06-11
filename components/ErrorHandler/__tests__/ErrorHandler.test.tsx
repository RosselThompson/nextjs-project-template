import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ErrorHandler } from 'components/ErrorHandler';

const TEST_MESSAGE = 'Test Message';

describe('Test Error Handler component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ErrorHandler message={TEST_MESSAGE} />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with message property', () => {
    const { getByText } = render(<ErrorHandler message={TEST_MESSAGE} />);
    expect(getByText(TEST_MESSAGE)).toBeInTheDocument();
  });

});
