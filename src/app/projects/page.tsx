import TechPill from "@/components/TechPill";
import { PROJECTS } from "@/data/projects";
import ExternalLinkIcon from "@/icons/ExternalLinkIcon";

export default function ProjectsPage() {
  return (
    <section className="flex flex-col gap-y-3">
      {PROJECTS.map((project) => (
        <div
          className="card rounded-lg p-3 text-sm leading-snug"
          key={`exp_${project.name}`}
        >
          <div className="font-bold">
            {project.name} {project.emoji}
          </div>
          <div className="flex gap-x-2">
            {project.urls?.map((url) => (
              <a
                key={url.name}
                href={url.link}
                target="_blank"
                className="text-accent underline-offset mt-0.5 underline"
              >
                {url.name}
                <div className="ml-0.5 inline-block w-3">
                  <ExternalLinkIcon />
                </div>
              </a>
            ))}
          </div>
          <div>{project.desc}</div>
          <div className="mt-1 flex flex-wrap gap-x-1.5 gap-y-1">
            {project.tech.map((tech, i) => (
              <TechPill key={i} content={tech} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
