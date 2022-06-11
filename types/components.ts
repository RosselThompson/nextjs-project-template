/* eslint no-unused-vars: */
import { FormikHelpers } from 'formik';
import { TextInputTypes, ButtonTypes } from './types';

export interface IMidContainer {
  children?: JSX.Element;
}

export interface ITextInput {
  name: string;
  title?: string;
  type?: TextInputTypes;
  placeholder?: string;
}

export interface ILoader {
  isFullscreen?: boolean;
  isWhite?: boolean;
  isSmall?: boolean;
}

export interface IPrimaryButton {
  text: string;
  type?: ButtonTypes;
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export interface ISecondaryButton {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export interface ITextButton {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export interface ILink {
  to: string;
  text: string;
}

export interface IErrorHandler {
  message: string;
}

export interface ISignInFormValues {
  email: string;
  password: string;
}

export interface ISignInForm {
  initialValues: ISignInFormValues;
  onSubmit: (
    values: ISignInFormValues,
    actions: FormikHelpers<ISignInFormValues>
  ) => void;
  errorMessage: string;
  isLoading: boolean;
}
