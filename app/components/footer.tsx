import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Mooiholt</h3>
            <p className="text-sm text-amber-200">
              Ihr Spezialist für exquisite Holz- und Schiefergravuren. Wir
              bringen Ihre Ideen mit Präzision und Leidenschaft zum Leben.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Schnelllinks</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-300">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="#galerie" className="hover:text-amber-300">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="#ueber-uns" className="hover:text-amber-300">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Kontakt</h4>
            <address className="space-y-2 text-sm not-italic">
              <p>Holzweg 1</p>
              <p>12345 Waldstadt</p>
              <p>Deutschland</p>
              <p>Tel: +49 123 456789</p>
              <p>Email: info@mooiholt.de</p>
            </address>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Folgen Sie uns</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-amber-300">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-300">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-amber-800 pt-8 text-center">
          <p className="text-sm text-amber-200">
            &copy; {new Date().getFullYear()} Mooiholt. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
