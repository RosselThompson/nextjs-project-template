import { Story, Meta } from '@storybook/react/types-6-0';
import { SecondaryButton } from 'components/Buttons/SecondaryButton';
import { ISecondaryButton } from 'types/components';

const MetaObject: Meta = {
  title: 'Controls/Buttons/SecondaryButton',
  component: SecondaryButton,
};

const Template: Story<ISecondaryButton> = (args) => (
  <SecondaryButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Secondary Button',
  isDisabled: true,
};

export default MetaObject;
