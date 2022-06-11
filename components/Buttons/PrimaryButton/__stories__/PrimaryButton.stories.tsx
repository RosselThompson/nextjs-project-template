import { Story, Meta } from '@storybook/react/types-6-0';
import { PrimaryButton } from 'components/Buttons/PrimaryButton';
import { IPrimaryButton } from 'types/components';

const MetaObject: Meta = {
  title: 'Controls/Buttons/PrimaryButton',
  component: PrimaryButton,
};

const Template: Story<IPrimaryButton> = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Primary Button',
  type: 'button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Primary Button',
  type: 'button',
  isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  text: 'Primary Button',
  type: 'button',
  isDisabled: true,
  isLoading: true,
};

export default MetaObject;
