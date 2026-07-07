"use client";

import { useEffect, useRef, useState } from "react";
import { listing, reviewCategories, reviews, type Review } from "@/lib/data";
import { Icon } from "./icons";

const catIcon = {
  sparkle: Icon.Sparkle,
  accuracy: Icon.Accuracy,
  key: Icon.Key,
  chat: Icon.Chat,
  pin: Icon.Pin,
  tag: Icon.Tag,
} as const;

function Avatar({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
      style={{ backgroundColor: color }}
      aria-hidden
    >
      {name.charAt(0)}
    </span>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <span className="flex items-center gap-0.5 text-abb-fg" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Icon.Star key={i} size={10} />
      ))}
    </span>
  );
}

function ReviewCard({ review, clamp }: { review: Review; clamp?: boolean }) {
  return (
    <article className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Avatar name={review.name} color={review.avatarColor} />
        <div>
          <p className="text-[15px] font-semibold text-abb-fg">{review.name}</p>
          <p className="text-sm text-abb-muted">{review.meta}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-abb-fg">
        <Stars n={review.rating} />
        <span aria-hidden>·</span>
        <span className="text-abb-muted">{review.date}</span>
      </div>
      <p className={`text-[15px] leading-6 text-abb-fg ${clamp ? "line-clamp-4" : ""}`}>
        {review.body}
      </p>
    </article>
  );
}

export function Reviews() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-b border-abb-border-light py-12">
      {/* Guest favourite banner */}
      <div className="flex flex-col items-center py-6 text-center">
        <div className="flex items-center justify-center gap-2 text-abb-fg">
          <span className="scale-x-[-1] text-abb-fg">
            <LaurelLeft />
          </span>
          <span className="text-[64px] font-semibold leading-none tracking-tight">
            {listing.rating}
          </span>
          <LaurelLeft />
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-abb-fg">
          Guest favourite
        </h2>
        <p className="mt-2 max-w-sm text-[15px] leading-5 text-abb-muted">
          One of the most loved homes on Airbnb based on ratings, reviews, and
          reliability
        </p>
      </div>

      {/* Category strip */}
      <div className="mt-8 grid grid-cols-2 divide-abb-border-light sm:grid-cols-3 md:grid-cols-[1.4fr_repeat(6,1fr)] md:divide-x">
        {/* Overall rating with bars */}
        <div className="hidden flex-col gap-1 pr-6 md:flex">
          <p className="text-[13px] font-medium text-abb-fg">Overall rating</p>
          {[5, 4, 3, 2, 1].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <span className="w-2 text-[11px] text-abb-fg">{n}</span>
              <span className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-200">
                <span
                  className="block h-full rounded-full bg-abb-fg"
                  style={{ width: n === 5 ? "95%" : n === 4 ? "5%" : "0%" }}
                />
              </span>
            </div>
          ))}
        </div>

        {reviewCategories.map((cat) => {
          const IconComp = catIcon[cat.icon as keyof typeof catIcon];
          return (
            <div
              key={cat.label}
              className="flex flex-col gap-1.5 px-4 py-3 md:items-center md:py-0 md:text-center"
            >
              <p className="text-[13px] font-medium text-abb-fg">{cat.label}</p>
              <p className="text-[15px] font-semibold text-abb-fg">
                {cat.score.toFixed(cat.score % 1 === 0 ? 1 : 1)}
              </p>
              <span className="text-abb-fg">
                <IconComp size={24} />
              </span>
            </div>
          );
        })}
      </div>

      {/* Reviews grid */}
      <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
        {reviews.slice(0, 6).map((r) => (
          <ReviewCard key={r.name + r.date} review={r} clamp />
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="mt-10 rounded-lg border border-abb-fg px-6 py-3 text-base font-semibold text-abb-fg transition-colors hover:bg-neutral-50"
      >
        Show all {listing.reviewCount} reviews
      </button>

      {open && <ReviewsModal onClose={() => setOpen(false)} />}
    </section>
  );
}

function LaurelLeft() {
  return (
    <svg width="44" height="72" viewBox="0 0 44 72" fill="currentColor" aria-hidden>
      <path d="M28 2c-6 4-10 10-11 18-1 8 1 15 5 22 4 7 9 12 15 16-4-6-6-12-6-19 0-2 0-4 .3-6-3 1-6 1-9-1 3-1 5-2 7-4 .5-2 1-4 2-6-3 2-6 2-9 1 3-2 5-4 7-7 .4-2 1-3 2-5-3 2-6 3-9 2 3-2 6-5 8-9 .4-1 .7-2 1-3z" />
    </svg>
  );
}

function ReviewsModal({ onClose }: { onClose: () => void }) {
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
        aria-label={`${listing.reviewCount} reviews`}
        className="abb-zoom-in flex max-h-[90vh] w-full max-w-[780px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
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
        <div className="overflow-y-auto px-8 pb-10">
          <div className="mb-8 flex items-center gap-2">
            <Icon.Star size={18} />
            <span className="text-xl font-semibold text-abb-fg">
              {listing.rating} · {listing.reviewCount} reviews
            </span>
          </div>
          <div className="flex flex-col gap-8">
            {reviews.map((r) => (
              <ReviewCard key={r.name + r.date + "modal"} review={r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
