export default function AboutPage() {
  return (
    <section className="flex flex-col gap-y-3 text-sm">
      <p>
        hi, i'm <b>selina kim :D</b>
      </p>

      <p>
        i'm a software developer based in <b>canada</b> and currently a{" "}
        <b className="text-accent">computer science</b> student in my final year
        at{" "}
        <a href="https://www.mcmaster.ca" className="font-bold underline">
          mcmaster university
        </a>
        .
      </p>

      <br />

      <p className="italic">last updated: July 2025</p>
    </section>
  );
}
