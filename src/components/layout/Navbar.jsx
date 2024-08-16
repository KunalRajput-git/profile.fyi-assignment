import Image from "next/image";
import { Cart2 } from "react-bootstrap-icons";
import MyCartButton from "../cart/MyCartButton";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="border-b-2 py-3 px-4 border-dotted border-gray-300 flex items-center justify-between fixed w-full bg-white">
      <div className="flex-shrink-0">
        <Image
          src="/profile-transparent-blue.png" // Image source.
          alt="Profile Image"
          width={105}
          height={105}
          priority
        />
      </div>

      <div>
        {/* Cart button */}
        <MyCartButton />
      </div>
    </nav>
  );
}
