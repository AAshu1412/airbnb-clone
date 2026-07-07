"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { photos } from "@/lib/data";
import { Icon } from "../icons";

export function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}`}
      className="abb-fade-in fixed inset-0 z-[60] flex flex-col bg-black"
    >
      {/* Top bar */}
      <div className="flex h-16 shrink-0 items-center justify-between px-5 text-white">
        <button
          ref={closeRef}
          onClick={onClose}
          className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          aria-label="Close photo viewer"
        >
          <Icon.Close size={16} />
        </button>
        <span className="text-sm font-medium tabular-nums" aria-live="polite">
          {index + 1} / {photos.length}
        </span>
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10">
            <Icon.Share size={16} /> Share
          </button>
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10">
            <Icon.Heart size={16} /> Save
          </button>
        </div>
      </div>

      {/* Stage */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-10">
        <button
          onClick={onPrev}
          className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur transition-transform hover:scale-105 hover:bg-black/50"
          aria-label="Previous photo"
        >
          <Icon.ChevronLeft size={16} />
        </button>

        <div
          key={index}
          className="abb-zoom-in relative h-full w-full max-w-[1200px]"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <button
          onClick={onNext}
          className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur transition-transform hover:scale-105 hover:bg-black/50"
          aria-label="Next photo"
        >
          <Icon.ChevronRight size={16} />
        </button>
      </div>

      {/* Caption */}
      <div className="shrink-0 pb-6 text-center text-sm text-white/80">
        {photo.alt}
      </div>
    </div>
  );
}
