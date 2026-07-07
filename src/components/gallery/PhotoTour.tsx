"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { photos, photoTourRooms } from "@/lib/data";
import { Icon } from "../icons";

export function PhotoTour({
  onClose,
  onOpenPhoto,
}: {
  onClose: () => void;
  onOpenPhoto: (index: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  const indexOf = (src: string) => photos.findIndex((p) => p.src === src);

  const scrollToRoom = (name: string) => {
    const el = document.getElementById(
      `tour-${name.replace(/\s+/g, "-").toLowerCase()}`
    );
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="abb-fade-in fixed inset-0 z-50 bg-white"
    >
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white">
        <div className="relative mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
          <button
            ref={closeRef}
            onClick={onClose}
            className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full text-abb-fg transition-colors hover:bg-neutral-100"
            aria-label="Close photo tour"
          >
            <Icon.ChevronLeft size={18} />
          </button>
          <p className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-base font-semibold text-abb-fg">
            Photo tour
          </p>
          <div className="flex items-center gap-1">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-abb-fg transition-colors hover:bg-neutral-100"
              aria-label="Share"
            >
              <Icon.Share size={16} />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-abb-fg transition-colors hover:bg-neutral-100"
              aria-label="Save"
            >
              <Icon.Heart size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll area */}
      <div ref={scrollRef} className="h-[calc(100vh-64px)] overflow-y-auto">
        {/* Category tiles */}
        <div className="mx-auto max-w-[1000px] px-6 pb-10 pt-4">
          <div className="grid grid-cols-4 gap-x-3 gap-y-4 sm:grid-cols-6 md:grid-cols-8">
            {photoTourRooms.map((room) => (
              <button
                key={room.name}
                onClick={() => scrollToRoom(room.name)}
                className="group text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={room.photos[0].src}
                    alt={room.name}
                    fill
                    sizes="120px"
                    className="abb-photo object-cover"
                  />
                </div>
                <p className="mt-1.5 text-xs font-medium leading-tight text-abb-fg">
                  {room.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Room sections */}
        <div className="mx-auto max-w-[1000px] px-6 pb-24">
          {photoTourRooms.map((room) => (
            <section
              key={room.name}
              id={`tour-${room.name.replace(/\s+/g, "-").toLowerCase()}`}
              className="scroll-mt-20 border-t border-abb-border-light py-10 first:border-t-0"
            >
              <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-start">
                <div className="bg-white md:sticky md:top-0 md:self-start md:py-3">
                  <h2 className="text-[22px] font-semibold text-abb-fg">
                    {room.name}
                  </h2>
                  {room.caption && (
                    <p className="mt-1 text-sm text-abb-muted">{room.caption}</p>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  {room.photos.length === 1 && (
                    <button
                      onClick={() => onOpenPhoto(indexOf(room.photos[0].src))}
                      className="group relative aspect-[3/2] w-full overflow-hidden rounded-xl"
                      aria-label={`Open ${room.photos[0].alt}`}
                    >
                      <Image
                        src={room.photos[0].src}
                        alt={room.photos[0].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="abb-photo object-cover"
                      />
                    </button>
                  )}

                  {room.photos.length === 2 && (
                    <div className="grid grid-cols-2 gap-4">
                      {room.photos.map((photo) => (
                        <button
                          key={photo.src}
                          onClick={() => onOpenPhoto(indexOf(photo.src))}
                          className="group relative aspect-[3/2] overflow-hidden rounded-xl"
                          aria-label={`Open ${photo.alt}`}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 700px"
                            className="abb-photo object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {room.photos.length === 3 && (
                    <>
                      <button
                        onClick={() => onOpenPhoto(indexOf(room.photos[0].src))}
                        className="group relative aspect-[3/2] w-full overflow-hidden rounded-xl"
                        aria-label={`Open ${room.photos[0].alt}`}
                      >
                        <Image
                          src={room.photos[0].src}
                          alt={room.photos[0].alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 700px"
                          className="abb-photo object-cover"
                        />
                      </button>
                      <div className="grid grid-cols-2 gap-4">
                        {room.photos.slice(1).map((photo) => (
                          <button
                            key={photo.src}
                            onClick={() => onOpenPhoto(indexOf(photo.src))}
                            className="group relative aspect-[3/2] overflow-hidden rounded-xl"
                            aria-label={`Open ${photo.alt}`}
                          >
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 700px"
                              className="abb-photo object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {room.photos.length === 4 && (
                    <div className="grid grid-cols-2 gap-4">
                      {room.photos.map((photo) => (
                        <button
                          key={photo.src}
                          onClick={() => onOpenPhoto(indexOf(photo.src))}
                          className="group relative aspect-[3/2] overflow-hidden rounded-xl"
                          aria-label={`Open ${photo.alt}`}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 700px"
                            className="abb-photo object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {room.photos.length === 5 && (
                    <>
                      <button
                        onClick={() => onOpenPhoto(indexOf(room.photos[0].src))}
                        className="group relative aspect-[3/2] w-full overflow-hidden rounded-xl"
                        aria-label={`Open ${room.photos[0].alt}`}
                      >
                        <Image
                          src={room.photos[0].src}
                          alt={room.photos[0].alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 700px"
                          className="abb-photo object-cover"
                        />
                      </button>
                      <div className="grid grid-cols-2 gap-4">
                        {room.photos.slice(1).map((photo) => (
                          <button
                            key={photo.src}
                            onClick={() => onOpenPhoto(indexOf(photo.src))}
                            className="group relative aspect-[3/2] overflow-hidden rounded-xl"
                            aria-label={`Open ${photo.alt}`}
                          >
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 700px"
                              className="abb-photo object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {room.photos.length > 5 && (
                    <>
                      {room.photos.length % 2 !== 0 ? (
                        <>
                          <button
                            onClick={() => onOpenPhoto(indexOf(room.photos[0].src))}
                            className="group relative aspect-[3/2] w-full overflow-hidden rounded-xl"
                            aria-label={`Open ${room.photos[0].alt}`}
                          >
                            <Image
                              src={room.photos[0].src}
                              alt={room.photos[0].alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 700px"
                              className="abb-photo object-cover"
                            />
                          </button>
                          <div className="grid grid-cols-2 gap-4">
                            {room.photos.slice(1).map((photo) => (
                              <button
                                key={photo.src}
                                onClick={() => onOpenPhoto(indexOf(photo.src))}
                                className="group relative aspect-[3/2] overflow-hidden rounded-xl"
                                aria-label={`Open ${photo.alt}`}
                              >
                                <Image
                                  src={photo.src}
                                  alt={photo.alt}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 700px"
                                  className="abb-photo object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div className="grid grid-cols-2 gap-4">
                          {room.photos.map((photo) => (
                            <button
                              key={photo.src}
                              onClick={() => onOpenPhoto(indexOf(photo.src))}
                              className="group relative aspect-[3/2] overflow-hidden rounded-xl"
                              aria-label={`Open ${photo.alt}`}
                            >
                              <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 700px"
                                className="abb-photo object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
