import Image from "next/image";
import { useNavigate } from "../../hooks/useNavigate";
import Button from "@/components/ui/Button";

// InfoBox component to display various types of informational messages.
const InfoBox = ({ imageSrc, title, subtitle, buttonText, buttonLink }) => {
  const { navigateTo } = useNavigate(); // Custom hook to handle navigation.

  return (
    <div className="bg-white rounded-2xl p-8 border w-full text-center">
      <h1 className="md:text-lg font-bold text-blue-950">{title}</h1>
      <h3 className="text-xs md:text-sm text-gray-500">{subtitle}</h3>
      <Image
        src={imageSrc}
        alt={title}
        width={250}
        height={250}
        className="object-contain m-auto"
      />
      {buttonText && (
        <Button
          className="text-sm font-light justify-center w-1/2 m-auto mt-3"
          onClick={() => navigateTo(buttonLink)} // Navigate to the specified link
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default InfoBox;
