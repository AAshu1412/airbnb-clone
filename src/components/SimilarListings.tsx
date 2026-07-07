"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { similarListings } from "@/lib/data";
import { Icon } from "./icons";

export function SimilarListings() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const pageWidth = el.clientWidth;
    const total = Math.max(1, Math.ceil((el.scrollWidth - 1) / pageWidth));
    setPageCount(total);
    setPage(Math.round(el.scrollLeft / pageWidth));
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByPage = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const atStart = page <= 0;
  const atEnd = page >= pageCount - 1;

  return (
    <section className="py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[22px] font-medium text-abb-fg">More stays nearby</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-abb-muted">
            {page + 1} / {pageCount}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByPage(-1)}
              disabled={atStart}
              aria-label="Previous"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-abb-fg transition hover:border-black disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
            >
              <Icon.ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollByPage(1)}
              disabled={atEnd}
              aria-label="Next"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-abb-fg transition hover:border-black disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
            >
              <Icon.ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={update}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {similarListings.map((item) => (
          <a
            key={item.title}
            href="#"
            className="group flex shrink-0 snap-start flex-col gap-2 basis-[calc((100%-2rem)/2.2)] sm:basis-[calc((100%-3rem)/3.2)] md:basis-[calc((100%-4rem)/5)]"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 31vw, 20vw"
                className="abb-photo object-cover"
              />
            </div>
            <p className="text-[15px] font-medium leading-5 text-abb-fg line-clamp-2">
              {item.title}
            </p>
            <p className="flex items-center gap-1.5 text-sm text-abb-fg">
              <span className="font-semibold">{item.price}</span>
              <Icon.Star size={11} />
              <span>{item.rating}</span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
