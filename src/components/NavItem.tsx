"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PropType = {
  item: {
    label: string;
    path: string;
  };
};
export default function NavItem({ item }: PropType) {
  const pathname = usePathname();
  return (
    <Link
      aria-current="page"
      className={`p-2 block duration-200 text-md font-medium rounded-full ${
        pathname == item.path && "bg-primary text-primary-foreground"
      }`}
      href={item.path}
    >
      {item.label}
    </Link>
  );
}
