import { NextPage } from 'next';
import { useState } from 'react';
import { SignInForm } from 'components/Forms/SignInForm';
import { MidContainer } from 'components/MidContainer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const SignInPage: NextPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [isFormLoading, setisFormLoading] = useState<boolean>(false);
  const [serverErrorMessage, setserverErrorMessage] = useState<string>('');
  const handleSubmit = () => {
    setisFormLoading(true);
    setTimeout(() => {
      setisFormLoading(false);
      setserverErrorMessage(t('signin.form.server.error.notfound'));
    }, 2000);
  };
  return (
    <MidContainer>
      <SignInForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        isLoading={isFormLoading}
        errorMessage={serverErrorMessage}
      />
    </MidContainer>
  );
};

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

export default SignInPage;
