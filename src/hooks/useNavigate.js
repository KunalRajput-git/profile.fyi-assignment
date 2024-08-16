"use client";
import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();
  // Function to navigate to a specified path.
  const navigateTo = (path) => {
    router.push(path);
  };

  // Return the navigateTo function for use in other components.
  return { navigateTo };
};
