import { IErrorHandler } from 'types/components';

export const ErrorHandler: React.FC<IErrorHandler> = (props) => {
  const { message } = props;

  if (message === '') return <></>;
  return (
    <div className="w-full p-4 mb-4 bg-rose-200 rounded-md">
      <p className="text-xs text-rose-700">{message}</p>
    </div>
  );
};
