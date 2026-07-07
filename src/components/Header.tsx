import { Icon } from "./icons";

export function Header() {
  return (
    <header className="relative z-30 hidden border-b border-abb-border-light bg-white md:block">
      <div className="mx-auto flex h-20 max-w-[2032px] items-center justify-between px-10 lg:px-20 xl:px-20">
        {/* Logo */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-2 text-abb-rausch transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Airbnb homepage"
        >
          <Icon.Logo size={32} />
          <span className="hidden text-2xl font-bold tracking-tight lg:inline">airbnb</span>
        </a>

        {/* Search pill */}
        <div className="abb-header-search flex flex-1 justify-center">
          <div
            role="search"
            className="group flex h-[52px] items-center rounded-full border border-abb-border bg-white p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[0_2px_4px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.08)]"
          >
            <span className="flex items-center pl-3 pr-1 text-xl" aria-hidden>
              🏡
            </span>
            <button className="rounded-full px-4 py-2 text-sm font-medium text-abb-fg transition-colors hover:bg-neutral-100">
              Anywhere
            </button>
            <span className="h-6 w-px bg-abb-border transition-opacity duration-200 group-hover:opacity-0" />
            <button className="rounded-full px-4 py-2 text-sm font-medium text-abb-fg transition-colors hover:bg-neutral-100">
              Anytime
            </button>
            <span className="h-6 w-px bg-abb-border transition-opacity duration-200 group-hover:opacity-0" />
            <button className="rounded-full px-4 py-2 text-sm font-medium text-abb-muted transition-colors hover:bg-neutral-100">
              Add guests
            </button>
            <button
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-abb-rausch text-white transition-transform duration-200 hover:scale-105 active:scale-95"
              aria-label="Search"
            >
              <Icon.Search size={16} />
            </button>
          </div>
        </div>

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#"
            className="rounded-full px-4 py-3 text-sm font-medium text-abb-fg transition-colors hover:bg-neutral-100"
          >
            Become a host
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-abb-fg transition-colors hover:bg-neutral-200"
            aria-label="Choose a language and currency"
          >
            <Icon.Globe size={18} />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-abb-fg transition-colors hover:bg-neutral-200"
            aria-label="Main navigation menu"
          >
            <Icon.Menu size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
