"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-genesis-orange/5 rounded-full mix-blend-screen filter blur-[80px] -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-genesis-navy/10 border border-genesis-navy/30 rounded-3xl p-8 md:p-16 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Inner Glow */}
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-genesis-orange to-transparent opacity-50" />

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Get in <span className="text-genesis-orange">Touch</span>
            </h2>
            <p className="text-lg text-genesis-light/70">
              Have questions or want to collaborate? Reach out to us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-genesis-darker rounded-lg border border-genesis-navy/30 text-genesis-orange shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email Us</h4>
                  <a href="mailto:hbtmcgenesis@gmail.com" className="text-genesis-light/70 hover:text-genesis-orange transition-colors">
                    hbtmcgenesis@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-genesis-darker rounded-lg border border-genesis-navy/30 text-genesis-orange shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                  <p className="text-genesis-light/70">
                    H.B.T. Medical College & <br />
                    Dr. R.N. Cooper Hospital,<br />
                    Vile Parle West, Mumbai
                  </p>
                </div>
              </div>
            </div>

            {/* Socials & Connect */}
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect with us</h4>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-genesis-darker rounded-lg border border-genesis-navy/30 text-genesis-light hover:text-white hover:border-genesis-orange transition-all hover:-translate-y-1">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="p-3 bg-genesis-darker rounded-lg border border-genesis-navy/30 text-genesis-light hover:text-white hover:border-genesis-orange transition-all hover:-translate-y-1">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="#" className="p-3 bg-genesis-darker rounded-lg border border-genesis-navy/30 text-genesis-light hover:text-white hover:border-genesis-orange transition-all hover:-translate-y-1">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-genesis-navy/20">
                <h4 className="text-xl font-bold text-white mb-2">Happy Researching!</h4>
                <p className="text-sm text-genesis-light/50">Join us in shaping the future of healthcare research.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
