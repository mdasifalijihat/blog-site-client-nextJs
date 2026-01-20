import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <Link className="hover:underline" href="/sales">
          Sales
        </Link>{" "}
        |{" "}
        <Link className="hover:underline" href="/marketing">
          Marketing
        </Link>{" "}
        |{" "}
        <Link className="hover:underline" href="/development">
          Development
        </Link>
      </nav>
      {children}
    </div>
  );
}
