import { Story, Meta } from '@storybook/react/types-6-0';
import { TextInput } from 'components/Inputs/TextInput';
import { Form, Formik } from 'formik';
import { ITextInput } from 'types/components';
import { TextInputTypes } from 'types/types';

const MetaObject: Meta = {
  title: 'Controls/Inputs/TextInput',
  component: TextInput,
};

const Template: Story<ITextInput> = (args) => (
  <Formik initialValues={{ textinput: '' }} onSubmit={() => {}}>
    <Form>
      <TextInput {...args} />
    </Form>
  </Formik>
);

const PasswordInputTemplate: Story<ITextInput> = (args) => (
  <Formik initialValues={{ textinput: '' }} onSubmit={() => {}}>
    <Form>
      <TextInput {...args} />
    </Form>
  </Formik>
);

const ErrorTemplate: Story<ITextInput> = (args) => (
  <Formik
    validateOnChange={false}
    initialValues={{ textinput: '' }}
    initialErrors={{ textinput: 'Input error handled' }}
    onSubmit={() => {}}
  >
    <Form>
      <TextInput {...args} />
    </Form>
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  name: 'textinput',
  title: 'Text Input',
  placeholder: 'placeholder',
  type: 'text',
};

export const Password = PasswordInputTemplate.bind({});
Password.args = {
  name: 'passwordinput',
  title: 'Password Input',
  placeholder: 'placeholder',
  type: 'password',
};

export const Error = ErrorTemplate.bind({});
Error.args = {
  name: 'textinput',
  title: 'Example',
  placeholder: 'placeholder',
  type: 'text',
};

export default MetaObject;
