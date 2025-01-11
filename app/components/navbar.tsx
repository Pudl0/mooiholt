"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ContactForm } from "@/app/components/contact-form";

const navItems = [
  { name: "Startseite", href: "/" },
  { name: "Galerie", href: "#galerie" },
  { name: "Über uns", href: "#ueber-uns" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const toggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-amber-800 text-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Mooiholt
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-amber-700 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleContactForm}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-amber-700 hover:text-white"
              >
                Kontakt
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-amber-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-amber-700 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleContactForm}
              className="block w-full rounded-md px-3 py-2 text-left text-base font-medium hover:bg-amber-700 hover:text-white"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </nav>
  );
}
