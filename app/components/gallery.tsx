import Image from "next/image";

const galleryItems = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Holzgravur Beispiel 1",
    title: "Individuelle Schilder",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Schiefergravur Beispiel",
    title: "Schieferkunst",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Lasergeschnittenes Holzstück",
    title: "Filigrane Schnitte",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Holzgravur Beispiel 2",
    title: "Personalisierte Geschenke",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Großes Holzschild",
    title: "Geschäftsbeschilderung",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Detaillierte Holzkunst",
    title: "Künstlerische Kreationen",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="bg-amber-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-amber-900">
          Unsere Galerie
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
