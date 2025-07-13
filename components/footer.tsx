import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo Wrapper */}
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="Fellowship logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="font-bold text-xl">MFMCF OOU Ibogun</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Mountain of Fire and Miracles Campus Fellowship – Building lives,
              impacting destinies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white"
              >
                About Us
              </Link>
              <Link
                href="/events"
                className="block text-gray-400 hover:text-white"
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/resources"
                className="block text-gray-400 hover:text-white"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <p className="text-gray-400 mb-2">mfmcf.oou@gmail.com</p>
            <p className="text-gray-400 mb-4">+234 8119 3181 50</p>
            <p className="text-gray-400 text-sm">
              Olabisi Onabanjo University, Ibogun Campus
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100069573073802"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mfmcfoouibogun/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MFMCF OOU Ibogun. All rights
            reserved.
          </p>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} By. Itunes
          </p>
        </div>
      </div>
    </footer>
  );
}
