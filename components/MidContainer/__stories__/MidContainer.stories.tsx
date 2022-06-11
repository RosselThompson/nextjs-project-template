import { Story, Meta } from '@storybook/react/types-6-0';
import { MidContainer } from 'components/MidContainer';
import { IMidContainer } from 'types/components';

const MetaObject: Meta = {
  title: 'Layout/MidContainer',
  component: MidContainer,
};

const Template: Story<IMidContainer> = (args) => <MidContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <div className='flex w-full justify-center items-center'><p className='text-lg'>Content</p></div>
}


export default MetaObject;
