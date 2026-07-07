import Image from "next/image";
import { similarListings } from "@/lib/data";
import { Icon } from "./icons";

export function SimilarListings() {
  return (
    <section className="py-12">
      <h2 className="mb-6 text-[22px] font-medium text-abb-fg">
          More stays nearby
      </h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
        {similarListings.map((item) => (
          <a key={item.title} href="#" className="group flex flex-col gap-2">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="abb-photo object-cover"
              />
              <span className="absolute right-3 top-3 text-white/90">
                <Icon.Heart size={22} />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="truncate text-[15px] font-medium text-abb-fg">
                {item.title}
              </p>
              <p className="flex shrink-0 items-center gap-1 text-sm text-abb-fg">
                <Icon.Star size={10} /> {item.rating}
              </p>
            </div>
            <p className="text-sm text-abb-fg">
              <span className="font-semibold">{item.price}</span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
