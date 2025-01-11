"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("galerie");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[70vh] overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Holzgravur Hintergrund"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
          Mit Präzision gefertigt
        </h1>
        <p className="mb-8 text-xl md:text-2xl">
          Exquisite Holz- & Schiefergravur
        </p>
        <button
          onClick={scrollToGallery}
          className="rounded-full bg-amber-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          Entdecken Sie unsere Arbeit
        </button>
      </div>
    </div>
  );
}
