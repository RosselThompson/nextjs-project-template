import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => (
  <h1 className="text-3xl font-bold text-gray-900">Home</h1>
);

export const getServerSideProps = async ({
  locale,
}: {
  locale: string;
}): Promise<{
  props: unknown;
  revalidate?: number;
}> => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
