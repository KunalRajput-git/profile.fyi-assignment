import { mergeClassNames } from "@/lib/utils";

export default function Row({ className, name, value }) {
  return (
    // Render a row with dynamic class names and display the name and value
    <div className={mergeClassNames("mt-2 flex justify-between", className)}>
      <h5>{name}</h5>
      <h5>{value}</h5>
    </div>
  );
}
