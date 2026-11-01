"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const teamRoles = [
  {
    title: "Senior Secretary",
    desc: "Leads the Executive Research Committee, coordinates with board members, oversees records, and mentors incoming office bearers for continuous growth.",
    members: ["Member 1", "Member 2"]
  },
  {
    title: "Public Relations Secretary",
    desc: "Promotes initiatives, manages collaborations, secures sponsorships, and engages the student community through outreach campaigns.",
    members: ["Member 1", "Member 2"]
  },
  {
    title: "Journal Club Secretary",
    desc: "Coordinates Journal Club sessions, manages schedules, circulates materials, and provides guidance to student presenters.",
    members: ["Member 1", "Member 2"]
  },
  {
    title: "Research Database Secretary",
    desc: "Maintains official records, manages resource databases, and archives reference documents while ensuring data confidentiality.",
    members: ["Member 1", "Member 2"]
  },
  {
    title: "Tech and Design Secretary",
    desc: "Manages social media platforms, designs promotional materials, and provides technical support for ERC activities.",
    members: ["Member 1", "Member 2"]
  },
  {
    title: "Content Development Secretary",
    desc: "Curates research updates, develops learning resources, and creates engaging academic content to promote research awareness.",
    members: ["Member 1", "Member 2"]
  },
  {
    title: "Batch Representatives",
    desc: "Acts as a liaison between the ERC and their batch, promoting participation, resolving conflicts, and supporting batch-level activities.",
    members: ["Member 1", "Member 2"]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Council() {
  return (
    <section id="council" className="py-24 bg-[#0a0f16] border-y border-genesis-navy/20 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-genesis-navy/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Executive Research <span className="text-genesis-orange">Council</span>
          </h2>
          <p className="text-lg text-genesis-light/70 max-w-3xl mx-auto">
            The Dean and Advisory Board provide the leadership, mentorship, and institutional support that shape the vision of GENESIS. Meet the student council driving these initiatives.
          </p>
        </motion.div>

        <div className="space-y-16">
          {teamRoles.map((role, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-genesis-navy/10 border border-genesis-navy/30 rounded-3xl p-8 lg:p-12 hover:border-genesis-orange/30 transition-colors"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">

                {/* Role Description */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">{role.title}</h3>
                  <p className="text-genesis-light/80 leading-relaxed text-lg">
                    {role.desc}
                  </p>
                </div>

                {/* Member Placeholders */}
                <div className="flex gap-6 sm:gap-10 justify-center lg:justify-end shrink-0">
                  {role.members.map((member, mIdx) => (
                    <div key={mIdx} className="group flex flex-col items-center gap-4">
                      {/* Image Placeholder */}
                      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-genesis-darker border-2 border-genesis-navy/50 flex items-center justify-center relative overflow-hidden group-hover:border-genesis-orange transition-colors">
                        <User size={48} className="text-genesis-navy group-hover:text-genesis-orange/50 transition-colors" />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-genesis-orange/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Name/Label */}
                      <div className="text-center">
                        <h4 className="font-semibold text-white group-hover:text-genesis-orange transition-colors">
                          {member}
                        </h4>
                        <span className="text-xs text-genesis-light/50">To be announced</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
