import { Story, Meta } from '@storybook/react/types-6-0';
import { TextButton } from 'components/Buttons/TextButton';
import { ITextButton } from 'types/components';

const MetaObject: Meta = {
  title: 'Controls/Buttons/TextButton',
  component: TextButton,
};

const Template: Story<ITextButton> = (args) => (
  <TextButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Text Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Text Button',
  isDisabled: true,
};

export default MetaObject;
