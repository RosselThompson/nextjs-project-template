import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Link } from 'components/Link';

const TEST_TO = '/#';
const TEST_TEXT = 'Text';

describe('Test Link component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Link text={TEST_TEXT} to={TEST_TO} />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with text property', () => {
    const { getByText } = render(<Link text={TEST_TEXT} to={TEST_TO} />);
    expect(getByText(TEST_TEXT)).toBeInTheDocument();
  });

  it('should render component with to property', () => {
    const { getByRole } = render(<Link text={TEST_TEXT} to={TEST_TO} />);
    expect(getByRole('link')).toHaveAttribute('href', TEST_TO);
  });
});
