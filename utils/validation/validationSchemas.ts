import * as Yup from 'yup';
import { useTranslation } from 'next-i18next';

export const SignInSchema = (): Yup.AnyObjectSchema => {
  const { t } = useTranslation();
  return Yup.object().shape({
    email: Yup.string()
      .required(t('signin.form.input.email.isRequired'))
      .email(t('signin.form.input.email.isEmail')),
    password: Yup.string().required(t('signin.form.input.password.isRequired')),
  });
};
