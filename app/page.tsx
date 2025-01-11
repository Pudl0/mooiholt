import Hero from "@/app/components/hero";
import Description from "@/app/components/description";
import Gallery from "@/app/components/gallery";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Description />
      <Gallery />
    </div>
  );
}
