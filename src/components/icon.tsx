import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "arrow"
  | "check"
  | "home"
  | "info"
  | "message"
  | "menu"
  | "pin"
  | "snow"
  | "x";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8,
};

export function Icon({ name, ...props }: IconProps) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M4.5 12h14" /><path d="m13 6.5 5.5 5.5-5.5 5.5" /></>,
    check: <path d="m5 12.5 4.2 4.2L19 7" />,
    home: <><path d="m3 10 9-7 9 7" /><path d="M5.5 9v11h13V9M9 20v-6h6v6" /></>,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
    message: <><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.8-3.3A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8.5 11.5h7" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
    snow: <><path d="M12 2.5v19M4 7l16 10M4 17 20 7" /><path d="m9 4 3 2 3-2M9 20l3-2 3 2M4.5 10l3-1 1-3M19.5 14l-3 1-1 3M4.5 14l3 1 1 3M19.5 10l-3-1-1-3" /></>,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...common} {...props}>
      {paths[name]}
    </svg>
  );
}

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 44 36" className={className} fill="none">
      <path d="M2 31 16.4 5l8.1 14.1L31 9l11 22H2Z" fill="currentColor" />
      <path d="m12.5 31 8.4-15 8.3 15" stroke="white" strokeWidth="3.1" strokeLinejoin="round" />
      <path d="m28.8 31 4.1-7.2 4.1 7.2" stroke="white" strokeWidth="2.3" strokeLinejoin="round" />
    </svg>
  );
}
