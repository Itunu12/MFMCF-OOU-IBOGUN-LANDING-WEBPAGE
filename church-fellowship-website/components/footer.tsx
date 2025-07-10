import Link from "next/link";
import { Heart, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl">MFMCF OOU Ibogun</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Mountain of Fire and Miracles Campus Fellowship - Building lives,
              impacting destinies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/events"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/resources"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Resources
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <p className="text-gray-400 mb-2">mfmcf.oou@gmail.com</p>
            <p className="text-gray-400 mb-4">+234 8119 3181 50</p>
            <p className="text-gray-400 text-sm">
              Olabisi Onabanjo University, Ibogun Campus
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/photo/?fbid=599965984713426&set=a.254481002595261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/mfmcfoouibogun/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
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
