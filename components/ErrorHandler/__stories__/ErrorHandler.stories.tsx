import { Story, Meta } from '@storybook/react/types-6-0';
import { IErrorHandler } from 'types/components';
import { ErrorHandler } from 'components/ErrorHandler';

const MetaObject: Meta = {
  title: 'Utils/ErrorHandler',
  component: ErrorHandler,
};

const Template: Story<IErrorHandler> = (args) => <ErrorHandler {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Error message from server',
};


export default MetaObject;