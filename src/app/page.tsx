"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { GalleryProvider } from "@/components/gallery/GalleryProvider";
import { Gallery } from "@/components/gallery/Gallery";
import { BookingCard } from "@/components/BookingCard";
import { Amenities } from "@/components/Amenities";
import { Calendar } from "@/components/Calendar";
import { Reviews } from "@/components/Reviews";
import { MapSection } from "@/components/MapSection";
import { HostSection } from "@/components/HostSection";
import { ThingsToKnow } from "@/components/ThingsToKnow";
import { SimilarListings } from "@/components/SimilarListings";
import { Icon } from "@/components/icons";
import { listing, photos } from "@/lib/data";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const rect = galleryRef.current.getBoundingClientRect();
        setShowStickyHeader(rect.bottom <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <GalleryProvider>
      <Header />
      <StickyHeader show={showStickyHeader} />

      <main className="mx-auto max-w-[1120px] px-6 pb-16 lg:px-10">
        {/* Title row */}
        <div className="flex items-end justify-between gap-4 pt-8">
          <h1 className="text-[26px] font-semibold leading-tight text-abb-fg">
            {listing.title}
          </h1>
          <div className="hidden shrink-0 items-center gap-1 md:flex">
            <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-abb-fg underline-offset-2 transition-colors hover:bg-neutral-100">
              <Icon.Share size={16} />
              <span className="underline">Share</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-abb-fg underline-offset-2 transition-colors hover:bg-neutral-100">
              <Icon.Heart size={16} />
              <span className="underline">Save</span>
            </button>
          </div>
        </div>

        <div id="photos" ref={galleryRef}>
          <Gallery />
        </div>

        {/* Two-column: content + sticky booking card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_372px] lg:gap-x-20">
          <div>
            {/* Overview */}
            <section className="border-b border-abb-border-light py-8">
              <h2 className="text-[22px] font-semibold text-abb-fg">
                {listing.type}
              </h2>
              <p className="mt-1 text-base text-abb-fg">
                {listing.specs.join(" · ")}
              </p>

              {/* Guest favourite box */}
              <div className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-abb-border-light px-6 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3">
                  <GuestFavIcon />
                  <div className="leading-tight">
                    <p className="text-[15px] font-semibold text-abb-fg">
                      Guest favourite
                    </p>
                    <p className="max-w-[220px] text-xs text-abb-muted">
                      One of the most loved homes on Airbnb, according to guests
                    </p>
                  </div>
                </div>
                <div className="flex items-stretch gap-4 text-center">
                  <div className="flex flex-col justify-center">
                    <p className="text-xl font-semibold text-abb-fg">
                      {listing.rating}
                    </p>
                    <span className="mt-0.5 flex justify-center gap-0.5 text-abb-fg">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon.Star key={i} size={9} />
                      ))}
                    </span>
                  </div>
                  <span className="w-px bg-abb-border-light" />
                  <div className="flex flex-col justify-center">
                    <p className="text-xl font-semibold text-abb-fg">
                      {listing.reviewCount}
                    </p>
                    <p className="text-[11px] font-medium text-abb-fg underline">
                      Reviews
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Host row */}
            <section className="flex items-center gap-4 border-b border-abb-border-light py-6">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#1e4d3f]">
                <Image
                  src="/photos/Mirashya-Homes.png"
                  alt={`${listing.host.name} logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <p className="text-[15px] font-semibold text-abb-fg">
                  Hosted by {listing.host.name}
                </p>
                <p className="text-sm text-abb-muted">{listing.host.since}</p>
              </div>
            </section>

            {/* Highlights */}
            <section className="flex flex-col gap-6 border-b border-abb-border-light py-8">
              {listing.highlights.map((h) => {
                const IconComp =
                  h.icon === "outdoor"
                    ? Icon.Outdoor
                    : h.icon === "fan"
                    ? Icon.Fan
                    : Icon.Key;
                return (
                  <div key={h.title} className="flex items-start gap-5">
                    <span className="mt-0.5 text-abb-fg">
                      <IconComp size={26} />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-abb-fg">
                        {h.title}
                      </p>
                      <p className="text-sm text-abb-muted">{h.body}</p>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Description */}
            <section className="border-b border-abb-border-light py-8">
              <div className="mb-6 rounded-xl bg-neutral-50 px-4 py-3 text-[15px] text-abb-fg border border-neutral-100">
                Some info has been automatically translated. <button className="font-semibold underline cursor-pointer hover:text-neutral-700">Show original</button>
              </div>
              <div className="relative">
                <p className={`text-[15px] leading-6 text-abb-fg ${isExpanded ? "" : "max-h-[96px] overflow-hidden"}`}>
                  {listing.description}
                </p>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                )}
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-1 text-[15px] font-semibold text-abb-fg underline cursor-pointer hover:text-neutral-700"
              >
                {isExpanded ? "Show less" : "Show more"}{" "}
                <Icon.ChevronRight
                  size={12}
                  className={`transition-transform duration-200 ${isExpanded ? "-rotate-90" : ""}`}
                />
              </button>
            </section>

            {/* Where you'll sleep */}
            <section className="border-b border-abb-border-light py-8">
              <h2 className="mb-6 text-[22px] font-semibold text-abb-fg">
                Where you&apos;ll sleep
              </h2>
              <div className="grid max-w-md grid-cols-2 gap-4">
                {[
                  { photo: photos[2], title: "Bedroom", sub: "1 queen bed" },
                  { photo: photos[0], title: "Living room", sub: "1 sofa bed" },
                ].map((room) => (
                  <div key={room.title}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-abb-border-light">
                      <Image
                        src={room.photo.src}
                        alt={room.title}
                        fill
                        sizes="240px"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-3 text-[15px] font-semibold text-abb-fg">
                      {room.title}
                    </p>
                    <p className="text-sm text-abb-muted">{room.sub}</p>
                  </div>
                ))}
              </div>
            </section>

            <Amenities />
            <Calendar />
          </div>

          {/* Sticky booking */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 pt-8">
              <BookingCard />
            </div>
          </aside>
        </div>

        <Reviews />
        <MapSection />
        <HostSection />
        <ThingsToKnow />
        <SimilarListings />
      </main>

      <Footer />
    </GalleryProvider>
  );
}

function GuestFavIcon() {
  return (
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" aria-hidden>
      <path
        d="M8 4C5 8 4 13 5 19c1 6 5 10 5 10"
        stroke="currentColor"
        strokeWidth={1.4}
        className="text-abb-fg"
      />
      <path
        d="M22 4c3 4 4 9 3 15-1 6-5 10-5 10"
        stroke="currentColor"
        strokeWidth={1.4}
        className="text-abb-fg"
      />
    </svg>
  );
}
