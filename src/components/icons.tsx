import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(size = 24): SVGProps<SVGSVGElement> {
  return {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    "aria-hidden": true,
    focusable: false,
  };
}

/** Airbnb-style filled stroke icons (viewBox 0 0 32 32) */
export const Icon = {
  Logo: ({ size = 32, ...p }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden
      {...p}
    >
      <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.98-6.65 6.98-2.362 0-4.847-1.51-6.994-4.185C13.759 30.99 11.273 32.5 8.91 32.5c-3.773 0-6.65-2.918-6.65-6.98l.002-.36.011-.412c.06-1.033.37-2.02 1.15-3.9.86-2.056 5.207-11.11 7.244-15.05l.35-.673C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.017 14.66l-.181.442c-.502 1.256-.667 1.9-.667 2.72 0 2.941 2.02 4.98 4.65 4.98 1.885 0 3.913-1.229 5.647-3.395C13.058 22.09 12 19.5 12 16.5c0-2.482 1.79-4.5 4-4.5s4 2.018 4 4.5c0 3-1.058 5.59-2.955 8.605C18.78 27.771 20.807 29 22.692 29c2.63 0 4.65-2.039 4.65-4.98 0-.82-.165-1.464-.667-2.72l-.181-.442c-.957-2.23-5.091-10.884-7.017-14.66l-.523-1.008C17.03 3.539 17.239 3 16 3zm0 11c-1.105 0-2 .903-2 2.5 0 2.4.877 4.507 2 6.5 1.123-1.993 2-4.1 2-6.5 0-1.597-.895-2.5-2-2.5z" />
    </svg>
  ),

  Search: ({ size = 16, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
        stroke="currentColor"
        strokeWidth={3.5}
        strokeLinecap="round"
      />
    </svg>
  ),

  Globe: ({ size = 16, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M16 1a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 2c1.9 0 4.5 3.8 5.3 10H10.7C11.5 6.8 14.1 3 16 3zM3.2 15A13 13 0 0 1 8 4.9 24 24 0 0 0 6.7 13H3.2zm0 2h3.5A24 24 0 0 0 8 27.1 13 13 0 0 1 3.2 17zm5.5 0h6.3v8c-3 0-5.6-3.4-6.3-8zm0-2h6.3V7c-3 0-5.6 3.4-6.3 8zm8.3 0V7c3 0 5.6 3.4 6.3 8h-6.3zm0 10v-8h6.3c-.7 4.6-3.3 8-6.3 8zm7-2A24 24 0 0 0 25.3 17h3.5A13 13 0 0 1 24 27.1zM25.3 13A24 24 0 0 0 24 4.9 13 13 0 0 1 28.8 13h-3.5z"
        fill="currentColor"
      />
    </svg>
  ),

  Menu: ({ size = 16, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M2 16h28M2 8h28M2 24h28"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  ),

  Share: ({ size = 16, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M27 18v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9M16 3v21M9 10l7-7 7 7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Heart: ({ size = 16, filled, ...p }: IconProps & { filled?: boolean }) => (
    <svg {...base(size)} fill={filled ? "currentColor" : "none"} {...p}>
      <path
        d="M16 28c7-4.7 13-10.3 13-16 0-4-3.2-7-7-7-3 0-4.7 1.7-6 3.5C14.7 6.7 13 5 10 5 6.2 5 3 8 3 12c0 5.7 6 11.3 13 16z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  ),

  Star: ({ size = 12, ...p }: IconProps) => (
    <svg {...base(size)} fill="currentColor" {...p}>
      <path d="M16 1l4.7 9.5 10.5 1.5-7.6 7.4 1.8 10.4L16 25.3 6.6 30.2l1.8-10.4L.8 12l10.5-1.5L16 1z" />
    </svg>
  ),

  ChevronLeft: ({ size = 16, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M20 28 8 16 20 4"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  ChevronRight: ({ size = 16, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M12 4l12 12-12 12"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  ChevronDown: ({ size = 16, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M4 10l12 12 12-12"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Close: ({ size = 16, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M6 6l20 20M26 6 6 26"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  ),

  Grid: ({ size = 16, ...p }: IconProps) => (
    <svg {...base(size)} fill="currentColor" {...p}>
      <path d="M6 3a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6zm0 2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm15-2a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5zm0 2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM6 18a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3H6zm0 2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm15-2a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-5zm0 2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z" />
    </svg>
  ),

  Trophy: ({ size = 28, ...p }: IconProps) => (
    <svg {...base(size)} fill="currentColor" {...p}>
      <path d="M16 1c3.6 0 6.7.3 9.2.8l.6.2.2.6c.2 1 .3 2 .3 3.1v.5h3.9v3.5c0 3.5-2.6 6.4-6 6.9-1 2.2-2.8 3.9-5 4.6l-.2.1V27h4v3H9.9v-3h4v-5.1l-.2-.1c-2.2-.7-4-2.4-5-4.6-3.4-.5-6-3.4-6-6.9V6.7h3.9v-.5c0-1 .1-2 .3-3l.2-.7.6-.2C10.3 1.4 13.4 1 16 1z" />
    </svg>
  ),

  Check: ({ size = 16, ...p }: IconProps) => (
    <svg
      {...base(size)}
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M7 16.5 13.5 23 25 9.5" />
    </svg>
  ),

  Fan: ({ size = 30, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M16 16c0-6 2-11 4-11s3 3 1 7c-1.5 3-5 4-5 4zm0 0c6 0 11 2 11 4s-3 3-7 1c-3-1.5-4-5-4-5zm0 0c0 6-2 11-4 11s-3-3-1-7c1.5-3 5-4 5-4zm0 0c-6 0-11-2-11-4s3-3 7-1c3 1.5 4 5 4 5z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="1.8" fill="currentColor" />
    </svg>
  ),

  Outdoor: ({ size = 30, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M4 28h24M6 28V14l10-8 10 8v14M12 28v-7h8v7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Key: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M21 4a7 7 0 0 0-6.7 9L4 23.3V28h4.7l1-1v-2h2v-2h2l2.3-2.3A7 7 0 1 0 21 4zm2 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  ),

  Pool: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M2 24c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 18c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M10 20V8a3 3 0 0 1 6 0M22 20V8a3 3 0 0 0-6 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Wifi: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M6 13a15 15 0 0 1 20 0M10 18a9 9 0 0 1 12 0M14 23a3 3 0 0 1 4 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx="16" cy="27" r="1.2" fill="currentColor" />
    </svg>
  ),

  Kitchen: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M8 3v10M12 3v10M8 13a4 4 0 0 1-4-4V3M10 3v26M22 3c-2 0-4 2-4 6s2 6 4 6V3zm0 12v14"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Washer: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <rect x="6" y="3" width="20" height="26" rx="2" stroke="currentColor" strokeWidth={2} />
      <circle cx="16" cy="18" r="6" stroke="currentColor" strokeWidth={2} />
      <circle cx="10" cy="8" r="1" fill="currentColor" />
      <circle cx="14" cy="8" r="1" fill="currentColor" />
    </svg>
  ),

  Tv: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <rect x="3" y="6" width="26" height="18" rx="2" stroke="currentColor" strokeWidth={2} />
      <path d="M11 29h10M16 24v5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  ),

  Ac: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <rect x="3" y="5" width="26" height="12" rx="2" stroke="currentColor" strokeWidth={2} />
      <path d="M8 21v2M16 21v4M24 21v2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  ),

  Gym: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path
        d="M6 12v8M10 8v16M22 8v16M26 12v8M10 16h12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  ),

  Parking: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth={2} />
      <path d="M12 23V9h5a4 4 0 0 1 0 8h-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Workspace: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <rect x="4" y="6" width="24" height="15" rx="2" stroke="currentColor" strokeWidth={2} />
      <path d="M2 26h28M10 21v5M22 21v5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  ),

  HotTub: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path d="M4 15h24v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-8z" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
      <path d="M10 15V8a2 2 0 0 1 4 0M18 11a2 2 0 1 1 4 0" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  ),

  Elevator: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <rect x="6" y="3" width="20" height="26" rx="2" stroke="currentColor" strokeWidth={2} />
      <path d="M13 12l3-3 3 3M13 20l3 3 3-3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Cctv: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path d="M4 8l20-4 2 6-20 5-2-7zM6 15v7M14 13v4a4 4 0 0 1-8 1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Sparkle: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path d="M16 3l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9z" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  ),

  Accuracy: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path d="M13 3h6l1 4 3 1 3-2 3 3-2 3 1 3 4 1v6l-4 1-1 3 2 3-3 3-3-2-3 1-1 4h-6l-1-4-3-1-3 2-3-3 2-3-1-3-4-1v-6" stroke="currentColor" strokeWidth={1.6} />
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth={2} />
    </svg>
  ),

  Chat: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path d="M4 6h24v16H12l-6 5v-5H4V6z" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  ),

  Pin: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path d="M16 29c6-7 9-12 9-16A9 9 0 0 0 7 13c0 4 3 9 9 16z" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
      <circle cx="16" cy="13" r="3" stroke="currentColor" strokeWidth={2} />
    </svg>
  ),

  Tag: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path d="M4 4h11l13 13-11 11L4 15V4z" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    </svg>
  ),

  Discount: ({ size = 24, ...p }: IconProps) => (
    <svg {...base(size)} fill="none" {...p}>
      <path d="M4 4h11l13 13-11 11L4 15V4z" fill="#e7f5ec" stroke="#128a3f" strokeWidth={2} strokeLinejoin="round" />
      <circle cx="10.5" cy="10.5" r="1.6" fill="#128a3f" />
    </svg>
  ),
};

export type IconName = keyof typeof Icon;
