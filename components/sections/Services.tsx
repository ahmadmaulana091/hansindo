"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  Truck,
  Package,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-7 h-7" />,
  Container: <Package className="w-7 h-7" />,
};

/* ── Swipeable Photo Carousel ──────────────────────────────────── */
const PhotoCarousel = ({
  photos,
}: {
  photos: { src: string; alt: string; caption: string; position?: string; }[];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
  const [activeIdx, setActiveIdx] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIdx(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative group">
      {/* Carousel viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-2xl shadow-lg"
      >
        <div className="flex">
          {photos.map((photo, idx) => (
            <div
              key={photo.src + idx}
              className="relative min-w-0 shrink-0 grow-0 basis-full w-full pt-[75%] bg-slate-50"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover ${photo.position ?? "object-center"}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-10">
                <p className="text-white text-xs sm:text-sm font-medium drop-shadow">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        aria-label="Next photo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === activeIdx
              ? "w-6 bg-[#F26522]"
              : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            aria-label={`Go to photo ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Main Services Section ─────────────────────────────────────── */
export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            What We Do
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            We provide two specialized logistics services to support your industrial supply chain across Indonesia.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-20">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                  {/* ── Photo Column (Swipeable Carousel) ── */}
                  <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                    <PhotoCarousel photos={service.gallery} />
                  </div>

                  {/* ── Text Column ── */}
                  <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                    {/* Icon + Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0B4DA2] text-white flex items-center justify-center shrink-0 shadow-md">
                        {ICON_MAP[service.iconName]}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 text-[#0B4DA2] border border-blue-100">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {service.fullDesc}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-3 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      href={`/contact?service=${service.id}`}
                      variant="accent"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Request This Service
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
