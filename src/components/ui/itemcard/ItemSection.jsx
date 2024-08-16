import { mergeClassNames } from "../../../lib/utils";

export default function ItemSection({ children, isFromCart }) {
  // Compute dynamic class names for the section element
  const sectionClassNames = mergeClassNames(
    "text-xs md:text-sm font-bold text-blue-950",
    isFromCart && "w-4/5"
  );

  return <section className={sectionClassNames}>{children}</section>;
}
