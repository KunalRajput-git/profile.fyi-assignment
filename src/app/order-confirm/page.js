import { InfoBox } from "@/components/ui";

export default function OrderConfirmation() {
  return (
    <div className="pt-20 pb-6 md:pt-24 px-3 md:px-8 m-auto w-full md:w-[600px]">
      <InfoBox
        imageSrc="/images/order-confirm.jpg"
        title="Your order has been confirmed!"
        subtitle="Thank you for your purchase."
        buttonText="Continue Shopping"
        buttonLink="/"
      />
    </div>
  );
}
