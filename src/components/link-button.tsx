import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icon";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: "arrow";
};

export function LinkButton({ href, children, variant = "primary", icon }: LinkButtonProps) {
  return (
    <Link className={`button button-${variant}`} href={href}>
      <span>{children}</span>
      {icon ? <Icon name={icon} /> : null}
    </Link>
  );
}
