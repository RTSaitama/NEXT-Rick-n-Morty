import React from "react";
import { fetchLocation } from "@/app/lib/api";

type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
};

export default async function LocationPage({ params }: { params: { id: string } }) {
  const location: Location = await fetchLocation(Number(params.id));

  return (
    <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
      <div className="max-w-sm bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
        <p>
          <span className="font-semibold">Type:</span> {location.type}
        </p>
        <p>
          <span className="font-semibold">Dimension:</span> {location.dimension}
        </p>
      </div>
    </div>
  );
}
