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
import { listing } from "@/lib/data";

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
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Laurel className="h-10 w-auto shrink-0" />
                    <p className="text-center text-[15px] font-semibold leading-tight text-abb-fg">
                      Guest
                      <br />
                      favourite
                    </p>
                    <Laurel className="h-10 w-auto shrink-0 -scale-x-100" />
                  </div>
                  <p className="max-w-[260px] text-sm text-abb-fg">
                    One of the most loved homes on Airbnb, according to guests
                  </p>
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
                  { src: "/photos/bedroom.png", title: "Bedroom", sub: "1 queen bed" },
                  { src: "/photos/living.png", title: "Living room", sub: "1 sofa bed" },
                ].map((room) => (
                  <div key={room.title}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-abb-border-light">
                      <Image
                        src={room.src}
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

function Laurel({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4895 25.417L14.8276 24.4547L16.5303 23.6492L17.1923 24.6116L16.3409 25.0143L17.1923 24.6116C18.6638 26.751 17.9509 29.3868 15.5999 30.4989C14.8548 30.8513 14.0005 31.0196 13.1221 30.987L12.8044 30.9752L12.7297 29.2305L13.0474 29.2423C13.5744 29.2618 14.0871 29.1608 14.5341 28.9494C15.9447 28.2821 16.3725 26.7007 15.4895 25.417Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.32441 10.235C10.0819 8.96204 10.9247 7.4878 10.853 5.81232C10.7813 4.13685 9.80929 2.59524 7.93708 1.18749C6.17964 2.46049 5.33678 3.93473 5.40851 5.6102C5.48024 7.28568 6.45221 8.82729 8.32441 10.235Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.19425 0.489275C7.55718 0.226387 8.10753 0.246818 8.49416 0.537533C10.5385 2.07473 11.7071 3.84975 11.7923 5.84026C11.8775 7.83076 10.8574 9.52453 8.93841 10.9146C8.57548 11.1775 8.02513 11.157 7.6385 10.8663C5.59415 9.32914 4.4256 7.55411 4.34039 5.56361C4.25517 3.57311 5.27521 1.87933 7.19425 0.489275ZM7.92362 2.3684C6.77985 3.38355 6.29788 4.47199 6.3478 5.63813C6.39772 6.80428 6.97457 7.93203 8.20904 9.03547C9.35281 8.02032 9.83478 6.93187 9.78486 5.76573C9.73493 4.59959 9.15809 3.47184 7.92362 2.3684Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15.6806 24.0529C14.1314 22.353 12.4326 21.4688 10.5842 21.4001C8.73575 21.3315 7.10737 22.0923 5.69905 23.6824C7.24822 25.3823 8.94702 26.2666 10.7955 26.3352C12.6439 26.4038 14.2723 25.6431 15.6806 24.0529Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.90529 24.1787C4.60807 23.8526 4.58911 23.4097 4.8593 23.1046C6.38985 21.3765 8.27538 20.4331 10.521 20.5164C12.7666 20.5998 14.7391 21.6864 16.4227 23.5339C16.7199 23.86 16.7389 24.303 16.4687 24.608C14.9381 26.3361 13.0526 27.2795 10.807 27.1962C8.56134 27.1128 6.5889 26.0262 4.90529 24.1787ZM6.98781 23.7198C8.22307 24.8808 9.46778 25.4045 10.7323 25.4515C11.9968 25.4984 13.2005 25.0656 14.3402 23.9928C13.1049 22.8318 11.8602 22.3081 10.5957 22.2611C9.3312 22.2142 8.12744 22.6471 6.98781 23.7198Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6766 20.7043C10.2137 18.5957 9.16392 17.0928 7.52727 16.1956C5.89062 15.2984 3.99442 15.1864 1.83867 15.8596C2.30157 17.9683 3.35135 19.4712 4.988 20.3684C6.62465 21.2656 8.52085 21.3775 10.6766 20.7043Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0.791956 15.9443C0.703053 15.5393 0.94431 15.1569 1.37329 15.023C3.7337 14.2859 5.9714 14.3695 7.95247 15.4554C9.92449 16.5364 11.1013 18.3139 11.6022 20.5956C11.6911 21.0006 11.4499 21.3829 11.0209 21.5169C8.66048 22.254 6.42277 22.1704 4.4417 21.0844C2.46969 20.0034 1.29285 18.226 0.791956 15.9443ZM2.95349 16.4656C3.43375 17.9951 4.27991 19.007 5.41321 19.6282C6.5306 20.2407 7.84423 20.4286 9.44069 20.0743C8.96043 18.5448 8.11427 17.5329 6.98097 16.9116C5.86358 16.2991 4.54995 16.1113 2.95349 16.4656Z" fill="#222222" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.90911 15.6267C8.65652 13.6743 8.53705 11.9555 7.55072 10.4702C6.56438 8.98484 4.90844 8.03014 2.58291 7.60605C1.8355 9.55846 1.95497 11.2773 2.9413 12.7626C3.92764 14.2479 5.58357 15.2026 7.90911 15.6267Z" fill="#F7F7F7" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.66037 7.28295C1.80927 6.89397 2.26578 6.67525 2.74598 6.76282C5.29848 7.22831 7.26368 8.31371 8.44396 10.0911C9.61955 11.8614 9.70866 13.854 8.89805 15.9715C8.74915 16.3605 8.29264 16.5792 7.81244 16.4916C5.25994 16.0261 3.29474 14.9407 2.11446 13.1634C0.938866 11.393 0.849755 9.40048 1.66037 7.28295ZM3.3385 8.6613C2.94038 10.1267 3.14588 11.3465 3.83454 12.3835C4.51397 13.4067 5.60091 14.1584 7.21992 14.5931C7.61804 13.1278 7.41254 11.9079 6.72388 10.8709C6.04445 9.84774 4.95751 9.09607 3.3385 8.6613Z" fill="#222222" />
    </svg>
  );
}
