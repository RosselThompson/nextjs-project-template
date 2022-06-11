import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MidContainer } from 'components/MidContainer';

const TEST_ID = 'midContainerTestId';

describe('Test MidContainer component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<MidContainer />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with children', () => {
    const { getByTestId } = render(
      <MidContainer>
        <div data-testid={TEST_ID}></div>
      </MidContainer>
    );

    expect(getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
