import React from "react";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  throw new Error("Failed to load About Page");
  return <div>about page </div>;
}
