import React from "react"; // Import React to enable JSX syntax and component functionality.
import { mergeClassNames } from "../../lib/utils"; // Import mergeClassNames for combining and resolving class names.

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props} // Spread additional properties onto the button element.
      className={mergeClassNames(
        "flex gap-2 font-bold bg-profile-red px-4 py-3 text-white rounded-md", // Apply default styles for button layout and appearance.
        className // Merge additional custom class names if provided.
      )}
    >
      {children} {/* Render the content inside the button */}
    </button>
  );
};

export default Button; // Export the Button component for use in other parts of the application.
