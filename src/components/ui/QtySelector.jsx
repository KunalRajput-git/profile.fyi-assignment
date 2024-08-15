import { Plus, Dash } from "react-bootstrap-icons";

export default function QtySelector() {
  return (
    <div className="flex items-center gap-2">
      <Dash className="border rounded-md border-blue-950 text-xl" />
      <span>1</span>
      <Plus className="border rounded-md border-blue-950 text-xl" />
    </div>
  );
}
