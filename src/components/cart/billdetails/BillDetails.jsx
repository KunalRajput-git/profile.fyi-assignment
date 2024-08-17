import { ArrowRightSquareFill } from "react-bootstrap-icons";
import { Button } from "@/components/ui/";
import { useCartState } from "@/context/CartContext";
import { Discount, Row } from "./";
import { useCartActions } from "@/hooks/useCartActions";
import { useNavigate } from "@/hooks/useNavigate";

export default function BillDetails() {
  // Destructure the total amount and discount-related information from the cart state
  const {
    totalAmount,
    discount: { isCouponApplied, amount, coupon },
  } = useCartState();

  // Calculate the grand total after applying the discount
  const grandTotal = totalAmount - amount;
  // Destructure the clearCart action from the cart actions hook
  const { clearCart } = useCartActions();
  // Destructure the navigateTo function from the navigation hook
  const { navigateTo } = useNavigate();

  // Handler function to be called on paymentś
  const onPayHandler = () => {
    // Navigate to the order confirmation page
    navigateTo("/order-confirm");
    // Clear the cart after a short delay to ensure the navigation completes
    setTimeout(() => clearCart(), 100);
  };

  return (
    <div className="bg-white text-blue-950 text-sm rounded-2xl p-6 border w-full mt-3">
      <h3 className="font-bold">Bill details</h3>
      {/* Display the total amount of items in the cart */}
      <Row name="Items total" value={`₹${totalAmount}`} />
      {/* Component to display discount details */}
      <Discount />
      {/* If a coupon is applied, display the savings */}
      {isCouponApplied && (
        <Row
          name={`Total savings with "${coupon}"`}
          value={`-₹${amount}`}
          className="text-green-500"
        />
      )}
      {/* Display the grand total after applying any discounts */}
      <Row name="Grand total" value={`₹${grandTotal}`} className="font-bold" />
      {/* Button to proceed to payment with the calculated grand total */}
      <Button
        className="w-full flex items-center justify-between mt-6"
        onClick={() => onPayHandler}
      >
        <h3>Proceed to Pay {`₹${grandTotal}`}</h3>
        <ArrowRightSquareFill className="text-xl" />
      </Button>
    </div>
  );
}
