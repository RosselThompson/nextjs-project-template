import { ITextButton } from "types/components";

export const TextButton: React.FC<ITextButton> = (props) => {
    const { onClick, isDisabled, text } = props;
  return (
    <button
      type="button"
      className="
      inline-flex justify-center items-center h-9 py-1.5 px-4 text-sm font-medium text-indigo-500 w-full
      hover:text-indigo-700
      disabled:text-gray-400"
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}
