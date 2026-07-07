import { Icon } from "./icons";

const columns = [
  {
    title: "Support",
    links: [
      "Help Centre",
      "Get help with a safety issue",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Airbnb your home",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
    ],
  },
  {
    title: "Airbnb",
    links: [
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Gift cards",
      "Airbnb.org emergency stays",
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-abb-border-light bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-20">
        <div className="grid grid-cols-2 gap-8 border-b border-abb-border pb-10 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold text-abb-fg">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-abb-fg underline-offset-2 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-abb-fg md:flex-row">
          <div className="flex flex-wrap items-center gap-1">
            <span>© 2026 Airbnb, Inc.</span>
            <span aria-hidden>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span aria-hidden>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span aria-hidden>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 font-semibold">
              <Icon.Globe size={16} /> English (IN)
            </button>
            <button className="font-semibold">₹ INR</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
