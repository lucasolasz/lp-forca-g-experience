"use client";
import { Clock, MapPin, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

const Stats = () => {
  return (
    <>
      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Duração Total", value: "50min", icon: Clock },
            { label: "Voo Acrobático", value: "20min", icon: Zap },
            { label: "Experiência", value: "3k+ Horas", icon: ShieldCheck },
            { label: "Localização", value: "RJ", icon: MapPin },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <stat.icon
                className="text-brand-sky mb-4 mx-auto md:mx-0"
                size={24}
              />
              <div className="text-3xl md:text-4xl font-display uppercase">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export { Stats };
