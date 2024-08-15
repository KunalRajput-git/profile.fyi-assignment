"use client";
import { CartState } from "../../context/CartContext";
import Image from "next/image";
import { Plus } from "react-bootstrap-icons";
import QtySelector from "./QtySelector";
import { findCartItem } from "../../context/cartReducer";
import { useCartActions } from "../../hooks/useCartActions";

const ItemCard = ({ item }) => {
  const {
    state: { cart }, // Destructure cart from the state using CartState.
  } = CartState();

  const { addToCartHandler } = useCartActions(); // Get the addToCartHandler function from useCartActions.
  const cartItem = findCartItem(cart, item.id); // Check if the current item is already in the cart.

  return (
    <article className="border p-4 w-[180px] md:w-56 h-max rounded-md shadow-sm cursor-pointer">
      {/* Card container */}
      <figure className="flex justify-center h-28">
        <Image
          src={item.img}
          alt={item.name}
          width={105}
          height={105}
          className="object-contain rounded-md"
        />
        <figcaption className="sr-only">{item.name}</figcaption>{" "}
      </figure>
      <section className="text-xs md:text-sm font-bold text-blue-950">
        <h3 className="mt-3 line-clamp-1">{item.name}</h3>{" "}
        <div className="flex mt-3 items-center justify-between">
          <p className="truncate">₹{item.price}</p>{" "}
          {/* Display the item price */}
          {cartItem ? (
            <QtySelector qty={cartItem.qty} /> // If the item is in the cart, show the quantity selector.
          ) : (
            <Plus
              className="border rounded-md border-blue-950 text-xl"
              onClick={() => {
                addToCartHandler(item); // Add the item to the cart when the Plus icon is clicked.
              }}
            />
          )}
        </div>
      </section>
    </article>
  );
};

export default ItemCard;
