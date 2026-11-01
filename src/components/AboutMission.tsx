"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, Lightbulb, Users, Shield, Heart } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const coreValues = [
  { icon: Lightbulb, title: "Innovation", desc: "Encouraging curiosity, creativity, and meaningful research that drives positive change in healthcare." },
  { icon: Shield, title: "Integrity", desc: "Upholding the highest standards of ethics, professionalism, transparency, and accountability." },
  { icon: Users, title: "Collaboration", desc: "Building strong partnerships with students, faculty, healthcare professionals, and external organizations." },
  { icon: Heart, title: "Inclusivity", desc: "Creating an environment where every individual is respected, valued, and empowered to contribute." },
  { icon: Target, title: "Leadership", desc: "Leading by example through initiative, responsibility, mentorship, and continuous learning." },
  { icon: BookOpen, title: "Impact", desc: "Inspiring a sustainable research culture by empowering students and advancing scientific knowledge." }
];

export default function AboutMission() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-32 relative"
        >
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-genesis-orange to-transparent hidden md:block" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About <span className="text-genesis-orange">Us</span></h2>
          <p className="text-xl text-genesis-light/80 leading-relaxed max-w-4xl">
            GENESIS is the Research Club of H.B.T. Medical College & Dr. R.N. Cooper Hospital, created to inspire curiosity, innovation, and a passion for research among medical students. We provide opportunities to learn, collaborate, and grow through research projects, workshops, journal clubs, competitions, and mentorship from experienced researchers.
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div id="mission" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="p-8 rounded-2xl bg-genesis-navy/10 border border-genesis-navy/30 backdrop-blur-sm hover:border-genesis-orange/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-genesis-orange/20 flex items-center justify-center mb-6">
              <Target className="text-genesis-orange" size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
            <ul className="space-y-4 text-genesis-light/80">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-genesis-orange mt-2 shrink-0" />
                <p>Foster a strong culture of research and evidence-based medicine.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-genesis-orange mt-2 shrink-0" />
                <p>Equip students with essential research skills through mentorship and projects.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-genesis-orange mt-2 shrink-0" />
                <p>Encourage innovation, critical thinking, and interdisciplinary collaboration.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="p-8 rounded-2xl bg-genesis-navy/10 border border-genesis-navy/30 backdrop-blur-sm hover:border-genesis-orange/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-genesis-orange/20 flex items-center justify-center mb-6">
              <BookOpen className="text-genesis-orange" size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
            <ul className="space-y-4 text-genesis-light/80">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-genesis-orange mt-2 shrink-0" />
                <p>Build a community of inquisitive and research-driven medical professionals.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-genesis-orange mt-2 shrink-0" />
                <p>Make quality research accessible to every student, regardless of experience.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-genesis-orange mt-2 shrink-0" />
                <p>Establish GENESIS as a center of academic excellence and empower future clinician-scientists.</p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          >
            Core <span className="text-genesis-orange">Values</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group p-6 rounded-xl bg-genesis-navy/5 border border-genesis-navy/20 hover:bg-genesis-navy/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-genesis-darker border border-genesis-navy/30 group-hover:border-genesis-orange/50 transition-colors">
                    <value.icon className="text-genesis-orange" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white">{value.title}</h4>
                </div>
                <p className="text-sm text-genesis-light/70 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
