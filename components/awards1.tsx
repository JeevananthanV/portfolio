import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export interface AwardItem {
  name: string;
  description: string;
  year: string;
  url?: string;
}

export interface Awards1Props {
  className?: string;
  badge?: string;
  heading?: string;
  description?: string;
  awards?: AwardItem[];
}

const defaultAwards: AwardItem[] = [
  {
    name: "Algorithm Arena — 1st Place Winner",
    description: "State-level inter-collegiate competitive programming and DSA solving hackathon.",
    year: "2024",
    url: "#",
  },
  {
    name: "Salesforce Trailhead Superbadge & Accreditation",
    description: "Certified Platform Developer recognition for enterprise Apex architecture and cloud triggers.",
    year: "2024",
    url: "#",
  },
  {
    name: "NPTEL IoT & Hardware Protocols Elite Honor",
    description: "Ranked among top performers nationally in IIT Kharagpur Internet of Things curriculum.",
    year: "2023",
    url: "#",
  },
  {
    name: "Full-Stack Web Engineering Commendation",
    description: "Institutional award for excellence in building scalable cloud web applications and API architectures.",
    year: "2023",
    url: "#",
  },
];

const Awards1 = ({
  className,
  badge = "[ RECOGNITION & HONORS ]",
  heading = "Awards & Accolades",
  description = "A timeline of technical competition victories, engineering honors, and industry accreditations.",
  awards = defaultAwards,
}: Awards1Props) => {
  return (
    <section id="awards" className={cn("py-20 md:py-32 relative bg-neutral-950 border-t border-white/5", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl">
          {badge && (
            <span className="text-[#ff3e00] font-mono tracking-widest text-xs uppercase font-semibold block mb-3">
              {badge}
            </span>
          )}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-syne">
            {heading}
          </h2>
          {description && (
            <p className="text-neutral-400 mt-4 text-sm md:text-base leading-relaxed font-sans">
              {description}
            </p>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="h-12 border-b border-white/10 text-left text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-400">
                <th className="font-semibold py-3 pr-4">Award / Honor</th>
                <th className="font-semibold py-3 px-4 hidden sm:table-cell">Description</th>
                <th className="text-right font-semibold py-3 pl-4">Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {awards.map((award, index) => (
                <tr
                  key={index}
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-5 pr-4 align-top">
                    <div className="text-base sm:text-lg font-semibold text-white group-hover:text-[#ff3e00] transition-colors flex items-center gap-2">
                      <span>{award.name}</span>
                      {award.url && award.url !== "#" && (
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#ff3e00]" />
                      )}
                    </div>
                    <div className="text-xs text-neutral-400 mt-1 sm:hidden">
                      {award.description}
                    </div>
                  </td>
                  <td className="py-5 px-4 text-sm text-neutral-400 align-top hidden sm:table-cell">
                    {award.description}
                  </td>
                  <td className="py-5 pl-4 text-right align-top">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#ff3e00] bg-[#ff3e00]/10 px-2.5 py-1 rounded-full border border-[#ff3e00]/20 inline-block whitespace-nowrap">
                      {award.year}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export { Awards1 };
