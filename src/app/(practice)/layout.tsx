import Link from "next/link";
import React from "react";

export default function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
}: {
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex gap-10 m-8 ">
        <Link className="hover:underline" href="/sales">
          Sales
        </Link>
        <Link className="hover:underline" href="/marketing">
          Marketing
        </Link>
        <Link className="hover:underline" href="/marketing/settings">
          Setting
        </Link>
        <Link className="hover:underline" href="/development">
          Development
        </Link>
      </nav>
      <div className="flex gap-10 m-8">
        {marketingSlot}
        {salesSlot}
      </div>
      {children}
    </div>
  );
}
