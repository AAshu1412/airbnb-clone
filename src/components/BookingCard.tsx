import { listing } from "@/lib/data";
import { Icon } from "./icons";

export function BookingCard() {
  const { price } = listing;
  return (
    <div className="flex flex-col gap-4">
      {/* Promo */}
      <div className="flex items-center justify-between gap-3 rounded-xl border border-abb-border-light bg-white p-4 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
        <div className="flex items-start gap-3">
          <Icon.Discount size={26} />
          <div className="text-sm leading-tight">
            <p className="font-semibold text-abb-fg">Get 10% off your next stay.</p>
            <p className="text-abb-muted underline">Terms apply</p>
          </div>
        </div>
        <button className="shrink-0 rounded-lg border border-abb-fg bg-white px-4 py-2 text-sm font-medium text-abb-fg transition-colors hover:bg-neutral-50">
          Claim
        </button>
      </div>

      {/* Reserve card */}
      <div className="rounded-xl border border-abb-border bg-white p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <p className="mb-4 text-[22px] leading-tight text-abb-fg">
          <span className="font-semibold underline decoration-1 underline-offset-2">
            {price.total}
          </span>{" "}
          <span className="font-normal text-abb-fg">for {price.nights} nights</span>
        </p>

        {/* Date + guest grid */}
        <div className="rounded-xl border border-neutral-400/80">
          <div className="grid grid-cols-2">
            <div className="border-r border-neutral-400/80 px-3 py-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wide text-abb-fg">
                Check-in
              </p>
              <p className="mt-0.5 text-sm text-abb-fg">{price.checkIn}</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wide text-abb-fg">
                Checkout
              </p>
              <p className="mt-0.5 text-sm text-abb-fg">{price.checkOut}</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-neutral-400/80 px-3 py-2.5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-abb-fg">
                Guests
              </p>
              <p className="mt-0.5 text-sm text-abb-fg">{price.guests} guests</p>
            </div>
            <Icon.ChevronDown size={14} />
          </div>
        </div>

        {/* Free cancellation notice */}
        <div className="mt-4 rounded-lg bg-neutral-100 py-2.5 text-center text-xs text-abb-muted">
          Free cancellation before{" "}
          <span className="font-semibold text-abb-fg">
            {price.freeCancellationBefore}
          </span>
        </div>

        <button className="abb-reserve-gradient mt-4 w-full rounded-lg py-3.5 text-base font-semibold text-white transition-[filter] hover:brightness-105 active:brightness-95">
          Reserve
        </button>
        <p className="mt-3 text-center text-sm text-abb-muted">
          You won&apos;t be charged yet
        </p>
      </div>
    </div>
  );
}
