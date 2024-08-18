const CouponInfoRow = ({ code, description }) => {
  return (
    <h1>
      Use <span className="font-bold">&quot;{code}&quot;</span> to get{" "}
      {description} off!
    </h1>
  );
};

export default function CouponInfo({ name, value }) {
  return (
    <div className="mt-3">
      <CouponInfoRow code="Selected100" description="flat 100₹" />
      <CouponInfoRow code="Offer25" description="25%" />
    </div>
  );
}
