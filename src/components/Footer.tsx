import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#080d12] border-t border-genesis-navy/30 pt-16 pb-8 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-genesis-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-3 inline-block">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-genesis-orange/50">
                <Image
                  src="/logo.jpg"
                  alt="GENESIS Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-2xl tracking-wider text-white">
                GENE<span className="text-genesis-orange">SIS</span>
              </span>
            </Link>
            <p className="text-sm text-genesis-light/70 leading-relaxed max-w-sm">
              The Research Club of H.B.T. Medical College & Dr. R.N. Cooper Hospital, created to inspire curiosity, innovation, and a passion for research among medical students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Mission & Vision", "The Council", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="text-sm text-genesis-light/70 hover:text-genesis-orange transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-genesis-light/70">
                <MapPin className="text-genesis-orange shrink-0 mt-0.5" size={18} />
                <span>
                  H.B.T. Medical College & <br />
                  Dr. R.N. Cooper Hospital,<br />
                  Mumbai
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-genesis-light/70">
                <Mail className="text-genesis-orange shrink-0" size={18} />
                <a href="mailto:hbtmcgenesis@gmail.com" className="hover:text-genesis-orange transition-colors">
                  hbtmcgenesis@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-genesis-light/70">
                <FaInstagram className="text-genesis-orange shrink-0" size={18} />
                <a href="#" className="hover:text-genesis-orange transition-colors">
                  @hbtmc_genesis (Example)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-genesis-navy/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-genesis-light/50">
            © {new Date().getFullYear()} GENESIS HBTMC. All rights reserved.
          </p>
          <p className="text-xs text-genesis-light/50">
            In Scientia, Crescimus - Through Knowledge, We Grow.
          </p>
        </div>
      </div>
    </footer>
  );
}
