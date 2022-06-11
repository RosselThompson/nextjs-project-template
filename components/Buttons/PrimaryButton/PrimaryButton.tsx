import { useRef } from 'react';
import { IPrimaryButton } from 'types/components';
import { Loader } from 'components/Loader';

export const PrimaryButton: React.FC<IPrimaryButton> = (props) => {
  const {
    text,
    type = 'button',
    onClick = () => {},
    isDisabled = false,
    isLoading = false,
  } = props;
  const buttonRef = useRef(null);
  return (
    <button
      ref={buttonRef}
      type={type}
      className={`
      inline-flex justify-center items-center py-2 px-4 h-9 w-full border-0 shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-700 to-indigo-500
      hover:from-indigo-800 hover:to-indigo-600
      disabled:from-gray-200 disabled:to-gray-200 disabled:text-gray-400 disabled:shadow-none
      `}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading ? <Loader isSmall isWhite /> : text}
    </button>
  );
};
