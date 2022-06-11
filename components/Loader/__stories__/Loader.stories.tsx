import { Story, Meta } from '@storybook/react/types-6-0';
import { Loader } from 'components/Loader';
import { ILoader } from 'types/components';

const MetaObject: Meta = {
  title: 'Utils/Loader',
  component: Loader,
};

const Template: Story<ILoader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const FullScreen = Template.bind({});
FullScreen.args = {
  isFullscreen: true,
};

export const Small = Template.bind({});
Small.args = {
  isSmall: true,
};

export const White = Template.bind({});
White.args = {
  isWhite: true,
};

export default MetaObject;
