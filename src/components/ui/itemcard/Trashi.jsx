import { useCartActions } from "@/hooks/useCartActions";
import { Trash } from "react-bootstrap-icons";
import { mergeClassNames } from "@/lib/utils";

export default function Trashi({ item }) {
  // Get removeFromCart action from cart actions hook
  const { removeFromCart } = useCartActions();

  // Define icon styles and classes
  const iconClasses = mergeClassNames(
    "absolute text-base top-2 right-2 text-blue-950 font-bold"
  );

  // Handle icon click event
  const handleRemoveClick = () => {
    removeFromCart(item.id);
  };

  return (
    <Trash
      title={`Remove ${item.name}.`}
      className={iconClasses}
      onClick={handleRemoveClick}
    />
  );
}
