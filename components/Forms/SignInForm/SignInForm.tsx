import { PrimaryButton } from 'components/Buttons/PrimaryButton';
import { ErrorHandler } from 'components/ErrorHandler';
import { TextInput } from 'components/Inputs/TextInput';
import { Link } from 'components/Link';
import { Formik, Form } from 'formik';
import { useTranslation } from 'next-i18next';
import { ISignInForm } from 'types/components';
import { SignInSchema } from 'utils/validation/validationSchemas';

export const SignInForm: React.FC<ISignInForm> = (props): JSX.Element => {
  const { onSubmit, isLoading, initialValues, errorMessage } = props;
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full h-full px-20 justify-center items-center">
      <h1 className="text-3xl font-bold">{t('signin.form.title')}</h1>
      <p className="text-sm text-gray-500 mt-4">{t('signin.form.subtitle')}</p>
      <div className="mt-8 w-3/4">
        <ErrorHandler message={errorMessage} />
        <Formik
          validationSchema={SignInSchema()}
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form>
            <TextInput
              name="email"
              title={t('signin.form.input.email')}
              placeholder={t('signin.form.input.email.placeholder')}
            />
            <TextInput
              name="password"
              title={t('signin.form.input.password')}
              type="password"
              placeholder={t('signin.form.input.password.placeholder')}
            />
            <div className="text-right">
              <Link
                text={t('signin.form.link.forgotpassword')}
                to="/forgot-password"
              />
            </div>
            <div className="mt-8">
              <PrimaryButton
                text={t('signin.form.submit')}
                type="submit"
                isLoading={isLoading}
                isDisabled={isLoading}
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
