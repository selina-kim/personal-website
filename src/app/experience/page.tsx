import TechPill from "@/components/TechPill";
import { EXPERIENCE } from "@/data/experience";
import ExternalLinkIcon from "@/icons/ExternalLinkIcon";

export default function ExperiencePage() {
  return (
    <section className="flex flex-col gap-y-3">
      {EXPERIENCE.map((exp) => (
        <div
          className="card rounded-lg p-3 text-sm leading-snug"
          key={`exp_${exp.company}`}
        >
          {/* <div className="card-bg-fill rounded-lg" /> */}
          <div className="flex justify-between gap-x-2">
            <a
              href={exp.url}
              target="_blank"
              className="font-bold text-nowrap underline"
            >
              {exp.company}
              <div className="ml-0.5 inline-block w-3">
                <ExternalLinkIcon />
              </div>
            </a>
            <div className="text-right font-bold">
              <span className="text-nowrap">{exp.time[0]}</span> –{" "}
              <span className="text-nowrap">{exp.time[1]}</span>
            </div>
          </div>
          <div className="text-accent mt-0.5">{exp.position}</div>
          <div>{exp.desc}</div>
          <div className="mt-1 flex flex-wrap gap-x-1.5 gap-y-1">
            {exp.tech.map((tech, i) => (
              <TechPill key={i} content={tech} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
