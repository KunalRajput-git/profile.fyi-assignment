import { useCartState } from "@/context/CartContext";
import { findCartItem } from "../../../lib/utils";
import { useCartActions } from "@/hooks/useCartActions";
import { Plus } from "react-bootstrap-icons";
import QtySelector from "../QtySelector";
import { mergeClassNames } from "@/lib/utils";

export default function ItemActionRow({ item, isFromCart }) {
  // Get cart state and action handlers from context
  const { cart } = useCartState();
  const { addToCartHandler } = useCartActions();

  // Determine if the item is in the cart
  const cartItem = findCartItem(cart, item.id);

  // Define classes based on the `isFromCart` prop
  const containerClasses = mergeClassNames(
    "flex mt-3 items-center",
    isFromCart ? "justify-end gap-4" : "justify-between"
  );

  return (
    <div className={containerClasses}>
      <p className="truncate">₹{item.price}</p>
      {cartItem ? (
        <QtySelector qty={cartItem.qty} id={item.id} />
      ) : (
        <AddToCartButton item={item} onClick={() => addToCartHandler(item)} />
      )}
    </div>
  );
}

// Separate component for the Add to Cart button
const AddToCartButton = ({ item, onClick }) => (
  <Plus
    title={`Add ${item.name} to Cart.`}
    className="border rounded-md border-blue-950 text-xl"
    onClick={onClick}
  />
);
