import { bandCatalog } from "@/mocks/bandas";
import { notFound } from "next/navigation";
type SlugBandProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return bandCatalog.map((band) => ({
    slug: band.url,
  }));
}


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
