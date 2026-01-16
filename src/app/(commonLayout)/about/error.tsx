"use client";
import React, { use, useEffect } from "react";

export default function AboutError({ error, reset } : { error: Error; reset: () => void }) {
  useEffect(() => {
    //we can log the error to an error reporting service
    console.error("Error in About Page:", error);
  }, [error]);
  return (
    <div>
      Something went wrong
      <br />
      <br />
      Please try again later.
      <button onClick={() => reset()}> Retry </button>
    </div>
  );
}
