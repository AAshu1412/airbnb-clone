"use client";

import Image from "next/image";
import { photos } from "@/lib/data";
import { Icon } from "../icons";
import { useGallery } from "./GalleryProvider";

export function Gallery() {
  const { openLightbox, openTour } = useGallery();
  const hero = photos.slice(0, 5);

  return (
    <section className="relative mt-2">
      <div className="relative grid h-[calc(66vw*0.36)] max-h-[430px] min-h-[300px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
        {/* Big left image spans 2 cols x 2 rows */}
        <button
          onClick={() => openLightbox(0)}
          className="group relative col-span-2 row-span-2 overflow-hidden"
          aria-label={`View photo 1: ${hero[0].alt}`}
        >
          <Image
            src={hero[0].src}
            alt={hero[0].alt}
            fill
            priority
            sizes="50vw"
            className="abb-photo object-cover"
          />
        </button>

        {hero.slice(1, 5).map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => openLightbox(i + 1)}
            className="group relative overflow-hidden"
            aria-label={`View photo ${i + 2}: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="25vw"
              className="abb-photo object-cover"
            />
          </button>
        ))}

        {/* Show all photos button */}
        <button
          onClick={openTour}
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-abb-fg bg-white px-3.5 py-1.5 text-sm font-medium text-abb-fg shadow-sm transition-transform hover:scale-[1.02] active:scale-100"
        >
          <Icon.Grid size={14} />
          Show all photos
        </button>
      </div>
    </section>
  );
}
