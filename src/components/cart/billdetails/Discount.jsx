"use client";
import Button from "@/components/ui/Button";
import {
  OFFER25,
  SELECTED100,
  COUPON_ERROR_MSG,
} from "@/context/CartConstants";
import { useCartState } from "@/context/CartContext";
import { useCartActions } from "@/hooks/useCartActions";
import { useState } from "react";
import { CouponInfo } from "./";

export default function Discount({ name, value }) {
  // Extract coupon and its application status from the cart state
  const {
    discount: { coupon, isCouponApplied },
  } = useCartState();

  // Local state to manage the input value for the coupon and error handling
  const [inputCoupon, setInputCoupon] = useState(coupon || "");
  const [error, setError] = useState({ state: false, message: "" });

  // Determine if the "Apply" button should be disabled
  let isBtnDisabled = inputCoupon.length === 0;
  // Extract the applyCoupon & removeCoupon functions from the custom hook useCartActions.
  const { applyCoupon, removeCoupon } = useCartActions();

  // Define a function to handle the coupon application process.
  const onApplyCouponHandler = () => {
    // Check if the entered coupon code matches a valid coupon.
    if (inputCoupon == SELECTED100 || inputCoupon == OFFER25) {
      // If the coupon code is valid, reset any existing error state and apply the coupon.
      setError({ state: false, message: "" });
      applyCoupon(inputCoupon);
    } else {
      // If the coupon code is invalid, set the error state with an appropriate message.
      setError({ state: true, message: COUPON_ERROR_MSG });
    }
  };

  const onRemoveCouponHandler = () => {
    removeCoupon();
    setInputCoupon("");
  };

  return (
    <div>
      {isCouponApplied ? (
        // If a coupon is applied, display it with an option to remove
        <div className="mt-2 flex justify-between items-center">
          <h4>{coupon} applied</h4>
          <h4
            className="border-b border-dashed border-blue-950 cursor-pointer"
            onClick={onRemoveCouponHandler}
          >
            remove
          </h4>
        </div>
      ) : (
        // If no coupon is applied, show input for entering a coupon
        <div className="flex items-center justify-between border rounded-lg mt-2">
          <input
            placeholder="Enter coupon"
            className="p-2 outline-none w-full font-bold"
            onChange={(e) => setInputCoupon(e.target.value)}
            value={inputCoupon}
          />
          <Button
            className="flex px-8 py-2 items-center justify-between disabled:cursor-not-allowed"
            disabled={isBtnDisabled}
            onClick={onApplyCouponHandler}
          >
            <h3>Apply</h3>
          </Button>
        </div>
      )}

      {/* Display an error message if there's an error */}
      {error.state && <h3 className="text-red-600 mt-1">{error.message}</h3>}

      {/* Display additional coupon information if no coupon is applied */}
      {!isCouponApplied && <CouponInfo />}
    </div>
  );
}
