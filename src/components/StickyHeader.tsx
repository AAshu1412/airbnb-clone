"use client";

import { useEffect, useState } from "react";
import { listing } from "@/lib/data";
import { Icon } from "./icons";

interface StickyHeaderProps {
  show: boolean;
}

export function StickyHeader({ show }: StickyHeaderProps) {
  const [activeSection, setActiveSection] = useState("photos");

  useEffect(() => {
    if (!show) return;

    const sections = ["photos", "amenities", "reviews", "location"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // Trigger when the section occupies a good portion of the upper viewport
          rootMargin: "-80px 0px -60% 0px",
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, [show]);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToReserve = () => {
    // Scroll to the main booking card
    const target = document.querySelector("aside") || document.querySelector(".sticky");
    if (target) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: "Photos", id: "photos" },
    { label: "Amenities", id: "amenities" },
    { label: "Reviews", id: "reviews" },
    { label: "Location", id: "location" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 hidden h-[80px] bg-white border-b border-abb-border-light transition-all duration-300 md:block ${
        show
          ? "translate-y-0 opacity-100 shadow-[0_1px_12px_rgba(0,0,0,0.08)]"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6 lg:px-10">
        {/* Left Links */}
        <nav className="flex h-full items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollToSection(link.id)}
              className={`flex h-full items-center border-b-[3px] px-1 pt-1 text-sm font-semibold transition-all cursor-pointer hover:text-abb-fg ${
                activeSection === link.id
                  ? "border-abb-fg text-abb-fg"
                  : "border-transparent text-[#717171]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Info + CTA */}
        <div className="flex items-center">
          <div className="flex flex-col text-right leading-tight">
            <p className="text-[15px] font-bold text-abb-fg">
              {listing.price.total}{" "}
              <span className="font-normal text-abb-fg text-sm">
                for {listing.price.nights} nights
              </span>
            </p>
            <div className="flex items-center justify-end gap-1 text-[11px] text-abb-fg mt-0.5">
              <Icon.Star size={9} />
              <span className="font-semibold">{listing.rating}</span>
              <span className="text-abb-muted">·</span>
              <span className="underline text-abb-muted">{listing.reviewCount} reviews</span>
            </div>
          </div>
          <button
            onClick={handleScrollToReserve}
            className="abb-reserve-gradient rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-105 active:brightness-95 cursor-pointer ml-6"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
