"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { photos } from "@/lib/data";
import { PhotoTour } from "./PhotoTour";
import { Lightbox } from "./Lightbox";

type View =
  | { kind: "closed" }
  | { kind: "tour" }
  | { kind: "lightbox"; index: number };

type GalleryContextValue = {
  openTour: () => void;
  openLightbox: (index: number) => void;
  close: () => void;
};

const GalleryContext = createContext<GalleryContextValue | null>(null);

export function useGallery() {
  const ctx = useContext(GalleryContext);
  if (!ctx) throw new Error("useGallery must be used within GalleryProvider");
  return ctx;
}

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<View>({ kind: "closed" });
  // Element focused before an overlay opened, restored on close.
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  // Remember tour scroll offset so lightbox -> back returns in place.
  const tourScrollRef = useRef(0);

  const rememberFocus = () => {
    restoreFocusRef.current = document.activeElement as HTMLElement | null;
  };

  const openTour = useCallback(() => {
    rememberFocus();
    const params = new URLSearchParams(window.location.search);
    params.set("modal", "PHOTO_TOUR_SCROLLABLE");
    window.history.pushState(null, "", "?" + params.toString());
    setView({ kind: "tour" });
  }, []);

  const openLightbox = useCallback((index: number) => {
    rememberFocus();
    setView({ kind: "lightbox", index });
  }, []);

  const close = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("modal") === "PHOTO_TOUR_SCROLLABLE") {
      params.delete("modal");
      const search = params.toString();
      window.history.pushState(
        null,
        "",
        search ? "?" + search : window.location.pathname
      );
    }
    setView({ kind: "closed" });
    // Restore focus to the trigger for keyboard users.
    requestAnimationFrame(() => restoreFocusRef.current?.focus?.());
  }, []);

  // Open lightbox from within the tour, keeping the tour mounted underneath.
  const openLightboxFromTour = useCallback((index: number) => {
    setView({ kind: "lightbox", index });
  }, []);

  const backToTour = useCallback(() => {
    setView({ kind: "tour" });
  }, []);

  const next = useCallback(() => {
    setView((v) =>
      v.kind === "lightbox"
        ? { kind: "lightbox", index: (v.index + 1) % photos.length }
        : v
    );
  }, []);

  const prev = useCallback(() => {
    setView((v) =>
      v.kind === "lightbox"
        ? {
            kind: "lightbox",
            index: (v.index - 1 + photos.length) % photos.length,
          }
        : v
    );
  }, []);

  // Lock body scroll while any overlay is open.
  useEffect(() => {
    if (view.kind === "closed") return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [view.kind]);

  // Sync with URL query parameter ?modal=PHOTO_TOUR_SCROLLABLE
  useEffect(() => {
    const checkUrl = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get("modal") === "PHOTO_TOUR_SCROLLABLE") {
        setView((prev) => (prev.kind === "closed" ? { kind: "tour" } : prev));
      } else {
        setView((prev) => (prev.kind === "tour" ? { kind: "closed" } : prev));
      }
    };

    window.addEventListener("popstate", checkUrl);
    checkUrl();

    return () => window.removeEventListener("popstate", checkUrl);
  }, []);

  // Global keyboard handling for overlays.
  useEffect(() => {
    if (view.kind === "closed") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        if (view.kind === "lightbox") close();
        else close();
      }
      if (view.kind === "lightbox") {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          next();
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          prev();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view, close, next, prev]);

  return (
    <GalleryContext.Provider value={{ openTour, openLightbox, close }}>
      {children}
      {view.kind === "tour" && (
        <PhotoTour
          onClose={close}
          onOpenPhoto={(i) => {
            tourScrollRef.current = window.scrollY;
            openLightboxFromTour(i);
          }}
        />
      )}
      {view.kind === "lightbox" && (
        <Lightbox
          index={view.index}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </GalleryContext.Provider>
  );
}
