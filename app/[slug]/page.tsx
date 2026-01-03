import { bandCatalog } from "@/mocks/bandas";
import { notFound } from "next/navigation";
type SlugBandProps = {
  params: {
    slug: string;
  };
};

export default async function SlugBand({ params }: SlugBandProps) {
  const { slug } = await params;
  const banda = bandCatalog.find(selectedBand => selectedBand.url === slug);
  if (!banda) {
    return notFound();
  }
  return (
    <h1>{banda.name}</h1>
  );
}
