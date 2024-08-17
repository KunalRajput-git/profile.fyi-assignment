import { mergeClassNames } from "../../lib/utils";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={mergeClassNames(
        "flex gap-2 font-bold bg-profile-red disabled:bg-red-300 px-4 py-3 text-white rounded-md focus:ring-2 focus:ring-red-200", // Apply default styles for button.
        className // Merge additional custom class names if provided.
      )}
    >
      {children}
    </button>
  );
};

export default Button;
