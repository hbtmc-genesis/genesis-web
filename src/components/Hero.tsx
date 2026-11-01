"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-genesis-navy/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-genesis-orange/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-genesis-orange/20 blur-3xl rounded-full" />
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-genesis-navy/50 shadow-[0_0_50px_rgba(242,140,40,0.2)]">
              <Image
                src="/logo.jpg"
                alt="GENESIS Large Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-white">
              GENE<span className="text-genesis-orange">SIS</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-genesis-light/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Guidance, Education, Networking, and Empowerment-based <br className="hidden md:block"/>
              Smart Initiative for Students’ Research in Healthcare.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#about"
              className="px-8 py-4 bg-genesis-orange hover:bg-orange-600 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(242,140,40,0.4)]"
            >
              Discover More
            </a>
            <a
              href="#council"
              className="px-8 py-4 bg-transparent border border-genesis-navy hover:bg-genesis-navy/30 text-genesis-light rounded-full font-semibold transition-all hover:scale-105"
            >
              Meet The Council
            </a>
          </motion.div>

          {/* Motto */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 text-sm md:text-base font-medium tracking-[0.2em] text-genesis-orange uppercase"
          >
            In Scientia, Crescimus
            <span className="block mt-2 text-xs text-genesis-light/50 tracking-widest">
              Through Knowledge, We Grow
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-genesis-light/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-genesis-orange rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
