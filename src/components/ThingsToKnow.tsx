import { Icon } from "./icons";

export function ThingsToKnow() {
  return (
    <section className="border-b border-abb-border-light py-12">
      <h2 className="mb-8 text-[22px] font-semibold text-abb-fg">
        Things to know
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Cancellation Policy */}
        <div className="flex flex-col">
          <Icon.Calendar size={24} className="text-abb-fg" />
          <h3 className="mt-3 mb-2 font-semibold text-abb-fg">
            Cancellation policy
          </h3>
          <p className="text-sm leading-relaxed text-abb-fg">
            Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-abb-muted">
            Review this host&apos;s full policy for details.
          </p>
          <a
            href="#"
            className="mt-4 text-sm font-semibold text-abb-fg underline underline-offset-2 hover:text-black w-fit"
          >
            Learn more
          </a>
        </div>

        {/* House Rules */}
        <div className="flex flex-col">
          <Icon.Key size={24} className="text-abb-fg" />
          <h3 className="mt-3 mb-2 font-semibold text-abb-fg">
            House rules
          </h3>
          <p className="text-sm leading-relaxed text-abb-fg">
            Check-in after 2:00 pm
          </p>
          <p className="mt-1 text-sm leading-relaxed text-abb-fg">
            Checkout before 11:00 am
          </p>
          <p className="mt-1 text-sm leading-relaxed text-abb-fg">
            3 guests maximum
          </p>
          <a
            href="#"
            className="mt-4 text-sm font-semibold text-abb-fg underline underline-offset-2 hover:text-black w-fit"
          >
            Learn more
          </a>
        </div>

        {/* Safety & Property */}
        <div className="flex flex-col">
          <Icon.Shield size={24} className="text-abb-fg" />
          <h3 className="mt-3 mb-2 font-semibold text-abb-fg">
            Safety & property
          </h3>
          <p className="text-sm leading-relaxed text-abb-fg">
            Carbon monoxide alarm not reported
          </p>
          <p className="mt-1 text-sm leading-relaxed text-abb-fg">
            Smoke alarm not reported
          </p>
          <p className="mt-1 text-sm leading-relaxed text-abb-fg">
            Exterior security cameras on property
          </p>
          <a
            href="#"
            className="mt-4 text-sm font-semibold text-abb-fg underline underline-offset-2 hover:text-black w-fit"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
