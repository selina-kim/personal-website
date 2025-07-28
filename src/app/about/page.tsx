export default function AboutPage() {
  return (
    <section className="flex flex-col gap-y-3 text-sm">
      <p>
        hi, i'm <b>selina kim :D</b>
      </p>

      <p>
        i'm a software developer based in <b>canada</b> and currently a{" "}
        <em>computer science</em> student in my final year at{" "}
        <a
          target="_blank"
          href="https://www.mcmaster.ca"
          className="font-bold underline"
        >
          mcmaster university
        </a>
        .
      </p>

      <p>
        i mainly work on <b>frontend</b> and <b>backend</b> development
        alongside other random coding side quests like scripting, web design,
        and reverse engineering existing apps -- depending on what piques my
        interest at the moment.
      </p>

      <p>
        feel free to check out my previous{" "}
        <a href="/experience" className="text-accent underline">
          experience
        </a>{" "}
        as well as{" "}
        <a href="/projects" className="text-accent underline">
          projects
        </a>{" "}
        i've been working on.
      </p>

      <br />

      <i>last updated: Jul. 2025</i>
    </section>
  );
}
