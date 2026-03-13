import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { SectionTitle } from "@/components/SectionTitle";
import { TESTIMONIALS } from "@/constants/constants";
import { Star } from "lucide-react";

const Depoimentos = () => {
  return (
    <section className="py-20 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionTitle subtitle="Depoimentos">Quem Já Voou</SectionTitle>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

        <InfiniteMarquee>
          {/* Double the array for infinite scroll effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
            <div
              key={i}
              className="glass p-8 rounded-3xl flex flex-col w-[350px] md:w-[400px] shrink-0"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-brand-accent fill-brand-accent"
                  />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-8 grow">
                {`"${testimonial.text}"`}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center font-display text-xl text-brand-sky shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-xs text-white/50 font-mono uppercase">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
};

export { Depoimentos };
