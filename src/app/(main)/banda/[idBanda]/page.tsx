import { bandCatalog } from "@/mocks/bandas";
import { notFound } from "next/navigation";
import { Band } from "./components/band";

interface SlugBandProps {
  params: Promise<{idBanda: string}>
}

export async function generateStaticParams() {
  return bandCatalog.map((band) => ({
    idBanda: band.url,
  }));
}

export default async function SlugBand({ params }: SlugBandProps) {
  const { idBanda } = await params;
  const banda = bandCatalog.find((selectedBand) => selectedBand.url === idBanda);
  if (!banda) {
    return notFound();
  }
  return (
    <Band banda={banda} /> 
  );
}
