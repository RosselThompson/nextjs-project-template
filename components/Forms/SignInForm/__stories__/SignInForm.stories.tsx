import { Story, Meta } from '@storybook/react/types-6-0';
import { SignInForm } from 'components/Forms/SignInForm';
import { ISignInForm } from 'types/components';

const MetaObject: Meta = {
  title: 'Forms/SignIn',
  component: SignInForm,
};

const Template: Story<ISignInForm> = (args) => <SignInForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => {},
  initialValues: {
    email: 'rossel96t@gmail.com',
    password: '',
  },
  errorMessage: '',
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  onSubmit: () => {},
  initialValues: {
    email: 'rossel96t@gmail.com',
    password: 'example',
  },
  errorMessage: '',
  isLoading: true,
};

export const ServerError = Template.bind({});
ServerError.args = {
  onSubmit: () => {},
  initialValues: {
    email: '',
    password: '',
  },
  errorMessage: 'User does not exist in our database.',
  isLoading: false,
};


export default MetaObject;
