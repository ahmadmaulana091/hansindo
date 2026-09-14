"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

// ── Photo list ──────────────────────────────────────────────────────────────
// Untuk menambahkan foto baru: letakkan file di public/images/documentation/
// lalu tambahkan entry baru di array ini.
const PHOTOS = [
  { src: "/images/documentation/doc_1.webp", alt: "Work Documentation 1" },
  { src: "/images/documentation/doc_2.webp", alt: "Work Documentation 2" },
  { src: "/images/documentation/doc_3.webp", alt: "Work Documentation 3" },
  { src: "/images/documentation/doc_4.webp", alt: "Work Documentation 4" },
  { src: "/images/documentation/doc_5.webp", alt: "Work Documentation 5" },
  { src: "/images/documentation/doc_6.webp", alt: "Work Documentation 6" },
  { src: "/images/documentation/doc_7.webp", alt: "Work Documentation 7" },
  { src: "/images/documentation/doc_8.webp", alt: "Work Documentation 8" },
  { src: "/images/documentation/doc_9.webp", alt: "Work Documentation 9" },
];

// ── Gallery Component ────────────────────────────────────────────────────────
export const DocumentationGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + PHOTOS.length) % PHOTOS.length);
  }, [activeIndex]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % PHOTOS.length);
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, goPrev, goNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        {/* ── Gallery Grid ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {PHOTOS.map((photo, index) => (
            <motion.button
              key={photo.src}
              id={`doc-photo-${index + 1}`}
              aria-label={`View ${photo.alt}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: (index % 4) * 0.07,
              }}
              onClick={() => openModal(index)}
              className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden
                         border border-slate-200/80
                         shadow-sm hover:shadow-xl
                         transition-shadow duration-300
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4DA2] focus-visible:ring-offset-2"
            >
              {/* Photo */}
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-[#0B4DA2]/0 group-hover:bg-[#0B4DA2]/20
                            transition-colors duration-300"
              />

              {/* Zoom icon hint */}
              <div
                className="absolute inset-0 flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#0B4DA2]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6"
                    />
                  </svg>
                </div>
              </div>

              {/* Photo index badge */}
              <div
                className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md
                            bg-black/40 text-white text-[10px] font-semibold tracking-wide
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
              >
                {index + 1} / {PHOTOS.length}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* ── Photo count info ─────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-slate-400 text-sm mt-10"
        >
          Showing {PHOTOS.length} photos
        </motion.p>
      </Container>

      {/* ── Lightbox Modal ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
            aria-label="Photo preview"
          >
            {/* Dark backdrop */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex items-center justify-center w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image wrapper */}
              <div className="relative w-full max-h-[85vh] flex items-center justify-center">
                <Image
                  src={PHOTOS[activeIndex].src}
                  alt={PHOTOS[activeIndex].alt}
                  width={1200}
                  height={900}
                  priority
                  className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />
              </div>
            </motion.div>

            {/* ── Controls ──────────────────────────────────────────────── */}

            {/* Close button */}
            <button
              id="doc-lightbox-close"
              onClick={closeModal}
              aria-label="Close photo preview"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full
                         bg-white/10 hover:bg-white/25 border border-white/20
                         flex items-center justify-center
                         text-white transition-colors duration-200 backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev button */}
            <button
              id="doc-lightbox-prev"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full
                         bg-white/10 hover:bg-white/25 border border-white/20
                         flex items-center justify-center
                         text-white transition-colors duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next button */}
            <button
              id="doc-lightbox-next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full
                         bg-white/10 hover:bg-white/25 border border-white/20
                         flex items-center justify-center
                         text-white transition-colors duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20
                            px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-sm
                            text-white text-xs font-semibold tracking-wide border border-white/10">
              {activeIndex + 1} / {PHOTOS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
