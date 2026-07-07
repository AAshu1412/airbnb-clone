"use client";

import Image from "next/image";
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

function Avatar({ name, color, avatar }: { name: string; color: string; avatar?: string }) {
  if (avatar) {
    return (
      <Image
        src={avatar}
        alt={name}
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-full object-cover"
      />
    );
  }
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
  const [expanded, setExpanded] = useState(false);
  const isLong = review.body.length > 160;
  const showToggle = clamp && isLong;

  return (
    <article className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Avatar name={review.name} color={review.avatarColor} avatar={review.avatar} />
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
      <div>
        <p
          className={`text-[15px] leading-6 text-abb-fg ${
            showToggle && !expanded ? "line-clamp-3" : ""
          }`}
        >
          {review.body}
        </p>
        {showToggle && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-1 text-[15px] font-semibold text-abb-fg underline underline-offset-2 hover:text-black cursor-pointer"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </article>
  );
}

export function Reviews() {
  const [open, setOpen] = useState(false);

  return (
    <section id="reviews" className="border-b border-abb-border-light py-12">
      {/* Guest favourite banner */}
      <div className="flex flex-col items-center py-6 text-center">
        <div className="flex items-center justify-center gap-1 text-abb-fg">
          <Image
            src="/rating-left.png"
            alt=""
            width={240}
            height={365}
            className="h-[110px] w-auto select-none"
            aria-hidden
            priority
          />
          <span className="text-[90px] font-semibold leading-none tracking-tight">
            {listing.rating}
          </span>
          <Image
            src="/rating-right.png"
            alt=""
            width={240}
            height={365}
            className="h-[110px] w-auto select-none"
            aria-hidden
            priority
          />
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-abb-fg">
          Guest favourite
        </h2>
        <p className="mt-2 max-w-[340px] text-[15px] leading-5 text-abb-muted">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <a
          href="#"
          className="mt-2 text-[14px] font-semibold text-abb-fg underline underline-offset-2 hover:text-black"
        >
          How reviews work
        </a>
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
              className="flex flex-col gap-1.5 px-4 py-3 md:items-start md:py-0 md:text-start"
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

      {/* Horizontal scroll filters */}
      <div className="mt-8 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-3 px-1">
          {[
            { label: "Comfort", count: 6, icon: "🛋️" },
            { label: "Accuracy", count: 5, icon: "✅" },
            { label: "Hot tub", count: 5, icon: "♨️" },
            { label: "Condition", count: 4, icon: "📅" },
            { label: "Hospitality", count: 8, icon: "🎁" },
            { label: "Cleanliness", count: 4, icon: "🧼" },
            { label: "Amenities", count: 2, icon: "📦" },
            { label: "Value", count: 2, icon: "🏷️" },
            { label: "Location", count: 2, icon: "📍" },
          ].map((filter) => (
            <button
              key={filter.label}
              className="flex shrink-0 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-abb-fg hover:border-black transition-colors cursor-pointer"
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
              <span className="text-neutral-500 font-normal">{filter.count}</span>
            </button>
          ))}
        </div>
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
