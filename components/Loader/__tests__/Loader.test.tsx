import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Loader } from 'components/Loader';

const TEST_ID = 'test-loader-container';
const TEST_IS_FULLSCREEN = 'h-screen w-screen';
const TEST_IS_SMALL = 'w-4 h-4';
const TEST_IS_WHITE = 'fill-white';

describe('Test Loader component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Loader />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with isFullScreen', () => {
    const { getByTestId } = render(<Loader isFullscreen />);
    expect(getByTestId(TEST_ID)).toHaveClass(TEST_IS_FULLSCREEN);
  });

  it('should render component with isSmall', () => {
    const { getByRole } = render(<Loader isSmall />);
    expect(getByRole('status')).toHaveClass(TEST_IS_SMALL);
  });


  it('should render component with isWhite', () => {
    const { getByRole } = render(<Loader isWhite />);
    expect(getByRole('status')).toHaveClass(TEST_IS_WHITE);
  });


});
