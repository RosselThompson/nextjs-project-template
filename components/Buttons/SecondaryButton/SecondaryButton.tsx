import { ISecondaryButton } from 'types/components';

export const SecondaryButton: React.FC<ISecondaryButton> = (props) => {
  const { text, onClick = () => {}, isDisabled = false } = props;
  return (
    <button
      type="button"
      className="
      inline-flex justify-center items-center h-9 py-1.5 px-4 text-sm font-medium rounded-md border-2 text-indigo-500 border-indigo-500 w-full
      hover:text-indigo-700 hover:border-indigo-700
      disabled:border-gray-200 disabled:text-gray-400 disabled:border-inherit"
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
