import { mergeClassNames } from "@/lib/utils";

export default function Container({ children, className }) {
  // Base styles for the container
  const baseClassNames = "pt-20 pb-6 md:pt-24 px-3 md:px-8 m-auto w-full";
  // Combine base styles with custom class names
  const combinedClassNames = mergeClassNames(baseClassNames, className);
  // Render the container with applied styles and children
  return <div className={combinedClassNames}>{children}</div>;
}
