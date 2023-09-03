import React from "react";

export default function PageTitle({ text }: { text: string }) {
  return <h2 className="mr-2 text-3xl font-bold tracking-tight">{text}</h2>;
}
