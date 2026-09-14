"use client";

import { useState } from "react";
import { staff } from "../../data/staff";
import { cn } from "@/lib/utils";

export const Staff = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="page-container relative z-10 py-16">
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 className="heading-display mb-4">The Oslo Team 💭</h2>
        <p className="body-lg">I wear a lot of hats around here.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {staff.map((member, index) => (
          <article
            key={member.id}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "relative h-60 w-full overflow-hidden rounded-lg transition-all duration-300 ease-out md:h-96",
              hovered !== null && hovered !== index && "md:scale-[0.98] md:blur-sm"
            )}
          >
            <img
              src={`/img/${member.id}.jpg`}
              alt={member.position}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className={cn(
                "absolute inset-0 flex items-end bg-black/50 px-4 py-8 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-100 md:opacity-0"
              )}
            >
              <div>
                <h3 className="heading-h5 mb-1">{member.position}</h3>
                <p className="body-md">{member.name}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
