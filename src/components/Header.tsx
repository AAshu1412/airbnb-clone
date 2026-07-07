import { Icon } from "./icons";

export function Header() {
  return (
    <header className="relative z-30 hidden border-b border-abb-border-light bg-white md:block">
      <div className="mx-auto flex h-20 max-w-[2032px] items-center justify-between px-10 lg:px-20 xl:px-20">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2 text-abb-rausch" aria-label="Airbnb homepage">
          <Icon.Logo size={32} />
          <span className="hidden text-2xl font-bold tracking-tight lg:inline">airbnb</span>
        </a>

        {/* Search pill */}
        <div className="flex flex-1 justify-center">
          <button
            className="flex h-16 items-center gap-1 rounded-full border border-abb-border bg-white pl-2 pr-2 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_2px_4px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.08)]"
            aria-label="Search"
          >
            <span className="flex h-12 items-center pl-4">
              <span className="text-2xl" aria-hidden>
                🏡
              </span>
            </span>
            <span className="px-4 text-sm font-medium text-abb-fg">Anywhere</span>
            <span className="h-8 w-px bg-abb-border" />
            <span className="px-4 text-sm font-medium text-abb-fg">Anytime</span>
            <span className="h-8 w-px bg-abb-border" />
            <span className="px-4 text-sm font-medium text-abb-muted">Add guests</span>
            <span className="ml-1 flex h-12 w-12 items-center justify-center rounded-full bg-abb-rausch text-white">
              <Icon.Search size={16} />
            </span>
          </button>
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
            className="flex h-10 w-10 items-center justify-center rounded-full text-abb-fg transition-colors hover:bg-neutral-100"
            aria-label="Choose a language and currency"
          >
            <Icon.Globe size={18} />
          </button>
          <button
            className="flex items-center gap-3 rounded-full border border-abb-border py-1.5 pl-3 pr-1.5 transition-shadow hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)]"
            aria-label="Main navigation menu"
          >
            <Icon.Menu size={16} />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-500 text-white">
              <svg viewBox="0 0 32 32" width={30} height={30} fill="currentColor" aria-hidden>
                <path d="M16 .7C7.6.7.7 7.6.7 16S7.6 31.3 16 31.3 31.3 24.4 31.3 16 24.4.7 16 .7zm0 28c-2.9 0-5.6-1-7.7-2.6 2-2.5 4.9-4 7.7-4s5.7 1.5 7.7 4c-2.1 1.7-4.8 2.6-7.7 2.6zm-3.5-11.3c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5zm12.8 7c-1.4-1.7-3.1-3-5-3.8 1.4-1 2.4-2.7 2.4-4.7 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.6-5.7 5.7c0 2 1 3.7 2.4 4.7-1.9.8-3.6 2.1-5 3.8C4 22.5 2.9 19.4 2.9 16 2.9 8.8 8.8 2.9 16 2.9S29.1 8.8 29.1 16c0 3.4-1.1 6.5-3.8 8.4z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
