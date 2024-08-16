"use client";
import { InfoBox } from "../ui";

export default function EmptyCart() {
  return (
    <InfoBox
      imageSrc="/images/empty-cart.jpg"
      title="You don't have any items in yout cart"
      subtitle=" Your favourite items are just a click away"
      buttonText="Start Shopping"
      buttonLink="/"
    />
  );
}
