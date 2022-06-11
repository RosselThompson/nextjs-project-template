import { ITextInput } from 'types/components';
import { useField } from 'formik';

export const TextInput: React.FC<ITextInput> = (props): JSX.Element => {
  const { name, title, placeholder, type } = props;
  const [field, meta] = useField(name);
  return (
    <div className="mt-2 mb-4">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {title}
      </label>
      <input
        className={`
        h-9 py-2 px-4 mt-2 w-full border border-gray-300 rounded-md text-sm
        focus:border-indigo-500
        lg:focus:border-indigo-500
        ${
          meta.error ? 'border-rose-500' : ''
        }`}
        type={type}
        id={name}
        placeholder={placeholder}
        {...field}
      />
      {meta.error ? (
        <div className="mt-2 text-xs text-rose-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
