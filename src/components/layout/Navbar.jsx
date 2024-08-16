import Image from "next/image";
import { MyCartButton } from "../cart/";

export default function Navbar() {
  return (
    <nav className="border py-3 px-4 border-gray-300 flex items-center justify-between fixed w-full bg-white z-10">
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
