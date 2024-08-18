import { Container } from "@/components/layout";
import { ItemCard } from "@/components/ui/";
import { useApi } from "@/hooks/useApi";

export default async function Home() {
  const { getItems } = useApi(); // Destructuring the getItems function from useApi
  const items = await getItems(); // Fetching items from the API

  return (
    <Container className="flex flex-wrap gap-2 justify-center">
      {/* Mapping over the items and rendering an ItemCard for each */}
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </Container>
  );
}
