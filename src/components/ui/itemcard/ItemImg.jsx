import Image from "next/image";
import { mergeClassNames } from "../../../lib/utils";

export default function ItemImg({ item, isFromCart }) {
  // Compute dynamic class names for the figure element
  const figureClassNames = mergeClassNames(
    "flex justify-center w-max",
    isFromCart ? "h-20" : "m-auto h-28"
  );

  // Compute dynamic class names for the Image component
  const imageClassNames = mergeClassNames(
    "object-contain flex-shrink-0 max-w-none",
    isFromCart && "border rounded-md"
  );

  return (
    <figure className={figureClassNames}>
      {/* Render the item image with dynamic width and height based on whether it’s from the cart */}
      <Image
        src={item.img}
        alt={item.name}
        width={isFromCart ? 85 : 105}
        height={isFromCart ? 85 : 105}
        className={imageClassNames}
      />
      <figcaption className="sr-only">{item.name}</figcaption>
    </figure>
  );
}
