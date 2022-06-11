import { Story, Meta } from '@storybook/react/types-6-0';
import { Link } from 'components/Link';
import { ILink } from 'types/components';

const MetaObject: Meta = {
  title: 'Controls/Link/Link',
  component: Link,
};

const Template: Story<ILink> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = { to: '#', text: 'Link To' };

export default MetaObject;
