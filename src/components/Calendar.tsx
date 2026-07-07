import { Icon } from "./icons";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function Month({
  year,
  month,
  rangeStart,
  rangeEnd,
}: {
  year: number;
  month: number; // 0-indexed
  rangeStart?: { y: number; m: number; d: number };
  rangeEnd?: { y: number; m: number; d: number };
}) {
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = first.getDay();
  const monthName = first.toLocaleString("en-US", { month: "long" });

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isStart = (d: number) =>
    rangeStart && rangeStart.y === year && rangeStart.m === month && rangeStart.d === d;
  const isEnd = (d: number) =>
    rangeEnd && rangeEnd.y === year && rangeEnd.m === month && rangeEnd.d === d;
  const inRange = (d: number) => {
    if (!rangeStart || !rangeEnd) return false;
    const cur = new Date(year, month, d).getTime();
    const s = new Date(rangeStart.y, rangeStart.m, rangeStart.d).getTime();
    const e = new Date(rangeEnd.y, rangeEnd.m, rangeEnd.d).getTime();
    return cur > s && cur < e;
  };

  return (
    <div className="flex-1">
      <p className="mb-4 text-center text-base font-semibold text-abb-fg">
        {monthName} {year}
      </p>
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS.map((w, i) => (
          <span key={i} className="pb-2 text-xs font-medium text-abb-muted">
            {w}
          </span>
        ))}
        {cells.map((d, i) => {
          if (d === null) return <span key={i} />;
          const start = isStart(d);
          const end = isEnd(d);
          const mid = inRange(d);
          return (
            <div
              key={i}
              className={`relative flex justify-center ${
                mid || end ? "bg-neutral-100" : ""
              } ${start ? "rounded-l-full bg-neutral-100" : ""} ${
                end ? "rounded-r-full" : ""
              }`}
            >
              <button
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors ${
                  start || end
                    ? "bg-abb-fg font-semibold text-white"
                    : "text-abb-fg hover:border hover:border-abb-fg"
                }`}
              >
                {d}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Calendar() {
  return (
    <section className="border-b border-abb-border-light py-12">
      <h2 className="text-[22px] font-semibold text-abb-fg">
        5 nights in Candolim
      </h2>
      <p className="mt-1 text-sm text-abb-muted">Oct 18, 2026 – Oct 23, 2026</p>

      <div className="relative mt-8">
        <div className="absolute right-0 top-0 flex gap-2">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full text-abb-fg transition-colors hover:bg-neutral-100"
            aria-label="Previous month"
          >
            <Icon.ChevronLeft size={14} />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full text-abb-fg transition-colors hover:bg-neutral-100"
            aria-label="Next month"
          >
            <Icon.ChevronRight size={14} />
          </button>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:gap-14">
          <Month
            year={2026}
            month={9}
            rangeStart={{ y: 2026, m: 9, d: 18 }}
            rangeEnd={{ y: 2026, m: 9, d: 23 }}
          />
          <Month year={2026} month={10} />
        </div>
      </div>
    </section>
  );
}
