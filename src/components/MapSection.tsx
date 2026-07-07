import { Icon } from "./icons";

/** Stylized Airbnb-like map with beach (water) on the left and park blobs. */
export function MapSection() {
  return (
    <section className="border-b border-abb-border-light py-12">
      <h2 className="text-[22px] font-semibold text-abb-fg">Where you&apos;ll be</h2>
      <p className="mt-1 text-sm text-abb-muted">Candolim, Goa, India</p>

      <div className="relative mt-6 h-[420px] w-full overflow-hidden rounded-xl bg-[#e9e5dc]">
        {/* Base land */}
        <div className="absolute inset-0 bg-[#e8ece3]" />
        {/* Water (beach) diagonal on the left */}
        <div
          className="absolute inset-y-0 left-0 w-[38%] bg-[#a9d3ea]"
          style={{ clipPath: "polygon(0 0, 70% 0, 40% 100%, 0 100%)" }}
        />
        {/* Park blobs */}
        <div className="absolute left-[26%] top-[30%] h-24 w-24 rounded-full bg-[#cfe3c0]/70 blur-[2px]" />
        <div className="absolute left-[62%] top-[45%] h-40 w-40 rounded-full bg-[#cfe3c0]/70 blur-[2px]" />
        {/* Faint road grid */}
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(#8a8a6a_1px,transparent_1px),linear-gradient(90deg,#8a8a6a_1px,transparent_1px)] [background-size:120px_120px]" />

        {/* Zoom controls */}
        <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-md">
          <button className="flex h-9 w-9 items-center justify-center text-xl text-abb-fg hover:bg-neutral-100" aria-label="Zoom in">
            +
          </button>
          <span className="h-px w-full bg-abb-border-light" />
          <button className="flex h-9 w-9 items-center justify-center text-xl text-abb-fg hover:bg-neutral-100" aria-label="Zoom out">
            −
          </button>
        </div>

        {/* Property marker */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-abb-fg text-white shadow-lg ring-4 ring-white/40">
            <Icon.Outdoor size={22} />
          </span>
        </div>
      </div>

      <p className="mt-6 text-[15px] leading-6 text-abb-fg">
        Candolim, Goa, India
      </p>
      <p className="mt-2 max-w-3xl text-[15px] leading-6 text-abb-muted">
        Candolim is a relaxed North Goa neighbourhood known for its long sandy
        beach, beach shacks, and easy access to Calangute and Fort Aguada. Cafes,
        restaurants, and nightlife are all a short drive away.
      </p>
      <button className="mt-4 text-[15px] font-semibold text-abb-fg underline">
        Show more
      </button>
    </section>
  );
}
