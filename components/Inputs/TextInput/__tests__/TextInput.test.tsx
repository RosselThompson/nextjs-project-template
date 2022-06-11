import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { TextInput } from 'components/Inputs/TextInput';
import { ITextInput } from 'types/components';
import { Form, Formik } from 'formik';

const TEST_NAME = 'test';
const TEST_TITLE = 'test-title';
const TEST_PLACEHOLDER = 'test-placeholder';
const TEST_TYPE = 'password';

const TestTextInput: React.FC<ITextInput> = (props): JSX.Element => {
  const { name, title, placeholder, type } = props;
  return (
    <Formik initialValues={{ textinput: '' }} onSubmit={() => {}}>
      <Form>
        <TextInput
          name={name}
          title={title}
          placeholder={placeholder}
          type={type}
        />
      </Form>
    </Formik>
  );
};

describe('Test Text Input component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<TestTextInput name={TEST_NAME} />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with name', () => {
    const { getByRole } = render(<TestTextInput name={TEST_NAME} />);

    expect(getByRole('textbox')).toHaveAttribute('name', TEST_NAME);
  });

  it('should render component with title', () => {
    const { getByLabelText } = render(
      <TestTextInput name={TEST_NAME} title={TEST_TITLE} />
    );

    expect(getByLabelText(TEST_TITLE)).toBeInTheDocument();
  });

  it('should render component with placeholder', () => {
    const { getByPlaceholderText } = render(
      <TestTextInput name={TEST_NAME} placeholder={TEST_PLACEHOLDER} />
    );

    expect(getByPlaceholderText(TEST_PLACEHOLDER)).toBeInTheDocument();
  });

  it('should render component with password type', () => {
    const { getByLabelText } = render(
      <TestTextInput name={TEST_NAME} title={TEST_TITLE} type={TEST_TYPE} />
    );

    expect(getByLabelText(TEST_TITLE)).toHaveAttribute('type', TEST_TYPE);
  });
});
