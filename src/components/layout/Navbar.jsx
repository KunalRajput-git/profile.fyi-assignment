import Image from "next/image"; // Import Image for optimized image handling in Next.js.
import { Cart2 } from "react-bootstrap-icons"; // Import Cart2 icon for the cart button.
import Button from "../ui/Button"; // Import custom Button component.

export default function Navbar() {
  return (
    <nav className="border-b-2 py-3 px-4 border-dotted border-gray-300 flex items-center justify-between fixed w-full bg-white">
      {/* Navbar with a bottom border, padding, and flex layout for alignment. */}

      <div className="flex-shrink-0">
        {/* Profile image container */}
        <Image
          src="/profile-transparent-blue.png" // Image source.
          alt="Profile Image" // Alt text for accessibility.
          width={105} // Image width.
          height={105} // Image height.
          priority // Prioritize image loading.
        />
      </div>

      <div>
        {/* Cart button container */}
        <Button>
          <Cart2 size={20} /> {/* Cart icon with size 20 */}
          <span className="text-sm">My Cart</span> {/* Button text */}
        </Button>
      </div>
    </nav>
  );
}
