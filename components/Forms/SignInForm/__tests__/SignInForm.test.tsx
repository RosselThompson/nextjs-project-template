import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignInForm } from 'components/Forms/SignInForm';
import { ISignInFormValues } from 'types/components';

const TEST_INITIAL_VALUES: ISignInFormValues = {
  email: 'test-email',
  password: 'test-password',
};
const TEST_ONSUBMIT = jest.fn();
const TEST_ERROR_MESSAGE = 'test-error';

describe('Test Sign In form component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <SignInForm
        initialValues={TEST_INITIAL_VALUES}
        onSubmit={TEST_ONSUBMIT}
        errorMessage={TEST_ERROR_MESSAGE}
        isLoading={false}
      />
    );

    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with email initial value', () => {
    const { getByDisplayValue } = render(
      <SignInForm
        initialValues={TEST_INITIAL_VALUES}
        onSubmit={TEST_ONSUBMIT}
        errorMessage={TEST_ERROR_MESSAGE}
        isLoading={false}
      />
    );

    expect(getByDisplayValue(TEST_INITIAL_VALUES.email)).toBeInTheDocument();
  });

  it('should render component with password initial value', () => {
    const { getByDisplayValue } = render(
      <SignInForm
        initialValues={TEST_INITIAL_VALUES}
        onSubmit={TEST_ONSUBMIT}
        errorMessage={TEST_ERROR_MESSAGE}
        isLoading={false}
      />
    );

    expect(getByDisplayValue(TEST_INITIAL_VALUES.password)).toBeInTheDocument();
  });

  it('should render component with onSubmit function', async () => {
    const { getByRole } = render(
      <SignInForm
        initialValues={TEST_INITIAL_VALUES}
        onSubmit={TEST_ONSUBMIT}
        errorMessage={TEST_ERROR_MESSAGE}
        isLoading={false}
      />
    );
    await userEvent.click(getByRole('button'));
    await waitFor(() => expect(TEST_ONSUBMIT).toHaveBeenCalled());
  });

  it('should render component with server error message', () => {
    const { getByText } = render(
      <SignInForm
        initialValues={TEST_INITIAL_VALUES}
        onSubmit={TEST_ONSUBMIT}
        errorMessage={TEST_ERROR_MESSAGE}
        isLoading={false}
      />
    );

    expect(getByText(TEST_ERROR_MESSAGE)).toBeInTheDocument();
  });

  it('should render component with button is loading', () => {
    const { getByRole } = render(
      <SignInForm
        isLoading
        initialValues={TEST_INITIAL_VALUES}
        onSubmit={TEST_ONSUBMIT}
        errorMessage={TEST_ERROR_MESSAGE}
      />
    );

    expect(getByRole('button')).toHaveAttribute('disabled')
  });
});
