import NextLink from 'next/link';
import { ILink } from 'types/components';

export const Link: React.FC<ILink> = (props) => {
  const { text = 'Link to', to = '#' } = props;
  return (
    <NextLink href={to}>
      <a
        className="
       text-sm text-indigo-500
       hover:underline"
      >
        {text}
      </a>
    </NextLink>
  );
};
