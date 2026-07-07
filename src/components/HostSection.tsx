import Image from "next/image";
import { listing } from "@/lib/data";
import { Icon } from "./icons";

type CoHost = {
  name: string;
  img?: string;
  bg?: string;
  fg?: string;
};

const coHosts: CoHost[] = [
  { name: "Sharath", img: "/cohost/Sharath.png" },
  { name: "Aman Dev Pahwa", img: "/cohost/Aman-Dev-Pahwa.png" },
  { name: "Maria Karen Priyanka", img: "/cohost/Maria-Karen-Priyanka.png" },
  { name: "Simran", img: "/cohost/simran.png" },
  { name: "Pallavi", img: "/cohost/Pallavi.png" },
  { name: "Sanyukta", img: "/cohost/Sanyukta.png" },
  { name: "Shruti", bg: "#f7d7e3", fg: "#c1355f" },
  { name: "Amisha", bg: "#d7e5f7", fg: "#3b6fb0" },
];

export function HostSection() {
  const { host } = listing;
  return (
    <section className="border-b border-abb-border-light py-12">
      <h2 className="mb-8 text-[22px] font-semibold text-abb-fg">
        Meet your Host
      </h2>

      <div className="grid gap-8 md:grid-cols-[380px_1fr]">
        {/* Host card & indicators column */}
        <div className="flex flex-col">
          {/* Card */}
          <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-1">
                <span className="relative flex h-28 w-28 items-center justify-center">
                  <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#1e4d3f]">
                    <Image
                      src="/photos/Mirashya-Homes.png"
                      alt={`${host.name} logo`}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="absolute bottom-0.5 right-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-abb-rausch text-white ring-4 ring-white">
                    <Icon.Check size={16} />
                  </span>
                </span>
                <p className="mt-3 text-2xl font-semibold text-abb-fg">
                  {host.name}
                </p>
                <p className="text-sm font-medium text-abb-fg">Host</p>
              </div>
              <div className="flex flex-col gap-4 pr-2">
                <div>
                  <p className="text-xl font-semibold text-abb-fg">1,463</p>
                  <p className="text-[11px] text-abb-fg">Reviews</p>
                </div>
                <span className="h-px w-full bg-abb-border-light" />
                <div>
                  <p className="flex items-center gap-1 text-xl font-semibold text-abb-fg">
                    4.68 <Icon.Star size={12} />
                  </p>
                  <p className="text-[11px] text-abb-fg">Rating</p>
                </div>
                <span className="h-px w-full bg-abb-border-light" />
                <div>
                  <p className="text-xl font-semibold text-abb-fg">2</p>
                  <p className="text-[11px] text-abb-fg">Years hosting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub indicators */}
          <div className="mt-6 flex flex-col gap-4 px-2">
            <div className="flex items-center gap-3 text-[15px] text-abb-fg">
              <Icon.Balloon size={20} className="shrink-0" />
              <span>Born in the 80s</span>
            </div>
            <div className="flex items-center gap-3 text-[15px] text-abb-fg">
              <Icon.Education size={20} className="shrink-0" />
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* Host details */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-lg font-semibold text-abb-fg">
              Co-Hosts
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {coHosts.map((coHost) => (
                <div key={coHost.name} className="flex items-center gap-2">
                  {coHost.img ? (
                    <Image
                      src={coHost.img}
                      alt={coHost.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: coHost.bg,
                        color: coHost.fg,
                      }}
                    >
                      {coHost.name.charAt(0)}
                    </span>
                  )}
                  <span className="text-sm text-abb-fg">{coHost.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-lg font-semibold text-abb-fg">
              Host details
            </p>
            <p className="text-[15px] text-abb-fg">Response rate: 100%</p>
            <p className="mt-1 text-[15px] text-abb-fg">
              Responds within an hour
            </p>
          </div>

          <button className="w-fit rounded-xl border border-[#222222] bg-white px-6 py-3 text-sm font-semibold text-[#222222] transition-colors hover:bg-neutral-50 cursor-pointer">
            Message host
          </button>

          <div className="flex items-start gap-3 max-w-xl text-xs leading-5 text-abb-muted">
            <Icon.Shield size={16} className="shrink-0 mt-0.5" />
            <p>
              To help protect your payment, always use Airbnb to send money and
              communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
