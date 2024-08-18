import { Container } from "@/components/layout";
import { InfoBox } from "@/components/ui";

export const metadata = {
  title: "Order Confirmation",
};

export default function OrderConfirmation() {
  return (
    <Container className="md:w-[600px]">
      <InfoBox
        imageSrc="/images/order-confirm.jpg"
        title="Your order has been confirmed!"
        subtitle="Thank you for your purchase."
        buttonText="Continue Shopping"
        buttonLink="/"
      />
    </Container>
  );
}
