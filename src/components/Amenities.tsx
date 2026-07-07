"use client";

import { useEffect, useRef, useState } from "react";
import { amenities } from "@/lib/data";
import { Icon } from "./icons";

const iconMap = {
  pool: Icon.Pool,
  wifi: Icon.Wifi,
  kitchen: Icon.Kitchen,
  washer: Icon.Washer,
  tv: Icon.Tv,
  ac: Icon.Ac,
  gym: Icon.Gym,
  parking: Icon.Parking,
  workspace: Icon.Workspace,
  hottub: Icon.HotTub,
  elevator: Icon.Elevator,
  cctv: Icon.Cctv,
  key: Icon.Key,
  outdoor: Icon.Outdoor,
  fan: Icon.Fan,
  pet: Icon.Pet,
  smoke: Icon.Smoke,
  carbon: Icon.Carbon,
  hairdryer: Icon.Hairdryer,
  cleaning: Icon.CleaningProducts,
  shampoo: Icon.Shampoo,
  hotwater: Icon.HotWater,
  showergel: Icon.ShowerGel,
  hanger: Icon.Hanger,
  linen: Icon.Linen,
  blinds: Icon.Blinds,
  iron: Icon.Iron,
  wardrobe: Icon.Wardrobe,
  book: Icon.Sparkle,
  fridge: Icon.Kitchen,
  microwave: Icon.Kitchen,
  pot: Icon.Kitchen,
  dishes: Icon.Kitchen,
  stove: Icon.Kitchen,
  oven: Icon.Kitchen,
  kettle: Icon.Kitchen,
  glass: Icon.Kitchen,
  table: Icon.Workspace,
  water: Icon.Pool,
  beach: Icon.Pool,
  patio: Icon.Outdoor,
  backyard: Icon.Outdoor,
  bbq: Icon.Outdoor,
  home: Icon.Outdoor,
  luggage: Icon.Key,
  calendar: Icon.Key,
  staff: Icon.Key,
  broom: Icon.Sparkle,
  breakfast: Icon.Kitchen,
  fire: Icon.Cctv,
} as const;

function AmenityRow({
  icon,
  label,
  unavailable,
}: {
  icon: string;
  label: string;
  unavailable?: boolean;
}) {
  const IconComp = iconMap[icon as keyof typeof iconMap] ?? Icon.Wifi;
  return (
    <div className="flex items-center gap-4 py-1">
      <span className={`relative flex h-6 w-6 items-center justify-center shrink-0 ${unavailable ? "text-abb-muted/50" : "text-abb-fg"}`}>
        <IconComp size={24} />
        {unavailable && (
          <svg
            className="absolute inset-0 h-full w-full text-abb-muted/70"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <line
              x1="3"
              y1="3"
              x2="21"
              y2="21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
      <span
        className={`text-base ${
          unavailable ? "text-abb-muted line-through" : "text-abb-fg"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function Amenities() {
  const [open, setOpen] = useState(false);
  const preview = amenities.slice(0, 10);

  return (
    <section id="amenities" className="border-b border-abb-border-light py-12">
      <h2 className="mb-6 text-[22px] font-semibold text-abb-fg">
        What this place offers
      </h2>
      <div className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
        {preview.map((a) => (
          <AmenityRow key={a.label} {...a} />
        ))}
      </div>
      <button
        onClick={() => setOpen(true)}
        className="mt-8 rounded-lg border border-abb-fg px-6 py-3 text-base font-semibold text-abb-fg transition-colors hover:bg-neutral-50 cursor-pointer"
      >
        Show all {amenities.length} amenities
      </button>

      {open && <AmenitiesModal onClose={() => setOpen(false)} />}
    </section>
  );
}

function AmenitiesModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // Group amenities by category
  const categories = amenities.reduce((acc, a) => {
    if (!acc[a.category]) {
      acc[a.category] = [];
    }
    acc[a.category].push(a);
    return acc;
  }, {} as Record<string, typeof amenities>);

  return (
    <div
      className="abb-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="What this place offers"
        className="abb-zoom-in flex max-h-[90vh] w-full max-w-[780px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-16 shrink-0 items-center px-6 border-b border-neutral-100">
          <button
            ref={closeRef}
            onClick={onClose}
            className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 cursor-pointer"
            aria-label="Close"
          >
            <Icon.Close size={16} />
          </button>
        </div>
        <div className="overflow-y-auto px-8 pb-12 pt-6">
          <h2 className="mb-8 text-[22px] font-semibold text-abb-fg">
            What this place offers
          </h2>
          <div className="flex flex-col gap-8">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="flex flex-col">
                <h3 className="mb-2 text-[18px] font-semibold text-abb-fg">
                  {category}
                </h3>
                <div className="flex flex-col">
                  {items.map((item) => (
                    <div
                      key={item.label}
                      className="border-b border-[#ebebeb] py-6"
                    >
                      <AmenityRow {...item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
