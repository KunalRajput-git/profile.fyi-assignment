import { mergeClassNames } from "../../../lib/utils";

export default function ItemName({ item, isFromCart }) {
  // Compute dynamic class names for the h3 element
  const nameClassNames = mergeClassNames(
    "line-clamp-1",
    isFromCart && "w-11/12 ml-auto text-right mt-3"
  );

  return <h3 className={nameClassNames}>{item.name}</h3>;
}
