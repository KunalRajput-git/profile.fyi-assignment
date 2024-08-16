import { useCartActions } from "../../hooks/useCartActions";
import { Plus, Dash } from "react-bootstrap-icons";

export default function QtySelector({ qty, id }) {
  const { incrementQty, decrementQty } = useCartActions(); // Get the incrementQty function from useCartActions.

  return (
    <div className="flex items-center gap-2">
      {/* Decrease quantity button  */}
      <Dash
        className="border rounded-md border-blue-950 text-xl"
        onClick={() => decrementQty(id, qty)}
      />
      {/* Display the current quantity */}
      <span>{qty}</span>
      {/* Increase quantity button */}
      <Plus
        className="border rounded-md border-blue-950 text-xl"
        onClick={() => incrementQty(id)}
      />
    </div>
  );
}
