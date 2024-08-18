const API_DEV = "http://localhost:3000"; // Base URL for the API

export const useApi = () => {
  const baseUrl = API_DEV; // Set base URL

  // Function to fetch items from the API
  const getItems = async (path) => {
    const apiUrl = `${baseUrl}/api/items`; // API endpoint URL
    const res = await fetch(apiUrl); // Fetch data

    if (!res.ok) {
      // Check if request was successful
      throw new Error("Failed to fetch items"); // Handle error
    }

    const items = await res.json(); // Parse and return data
    return items;
  };

  return { getItems }; // Return the function
};
