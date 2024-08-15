import { Plus, Dash } from "react-bootstrap-icons";

export default function QtySelector({ qty }) {
  return (
    <div className="flex items-center gap-2">
      <Dash className="border rounded-md border-blue-950 text-xl" />
      <span>{qty}</span>
      <Plus className="border rounded-md border-blue-950 text-xl" />
    </div>
  );
}
