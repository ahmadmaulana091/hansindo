"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TESTIMONIALS_DATA } from "@/lib/data";

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <Container>
        <SectionTitle
          badge="Client Endorsements"
          title="What Offshore Industry Leaders Say About Hansindo"
          subtitle="Direct feedback from marine operations vice presidents and logistics directors operating in demanding marine environments."
        />

        {/* Embla Carousel Viewport */}
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {TESTIMONIALS_DATA.map((t) => (
                <div key={t.id} className="flex-[0_0_100%] min-w-0 pl-4">
                  <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 relative flex flex-col justify-between">
                    <Quote className="w-12 h-12 text-blue-100 absolute top-8 right-8 pointer-events-none" />

                    <div>
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-6 text-amber-400">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400" />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-slate-800 text-lg sm:text-xl leading-relaxed italic font-normal mb-8">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Author Meta */}
                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-secondary shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-slate-900 text-base">
                          <span>{t.name}</span>
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          {t.role} • <strong className="text-slate-700">{t.company}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 shadow-md hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 shadow-md hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
