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
      <span className={unavailable ? "text-abb-muted" : "text-abb-fg"}>
        <IconComp size={24} />
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
    <section className="border-b border-abb-border-light py-12">
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
        className="mt-8 rounded-lg border border-abb-fg px-6 py-3 text-base font-semibold text-abb-fg transition-colors hover:bg-neutral-50"
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

  return (
    <div
      className="abb-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="What this place offers"
        className="abb-zoom-in flex max-h-[90vh] w-full max-w-[640px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-16 shrink-0 items-center px-6">
          <button
            ref={closeRef}
            onClick={onClose}
            className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-100"
            aria-label="Close"
          >
            <Icon.Close size={16} />
          </button>
        </div>
        <div className="overflow-y-auto px-6 pb-8">
          <h2 className="mb-6 text-2xl font-semibold text-abb-fg">
            What this place offers
          </h2>
          <div className="flex flex-col divide-y divide-abb-border-light">
            {amenities.map((a) => (
              <div key={a.label} className="py-4">
                <AmenityRow {...a} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
