export const EXPERIENCE: {
  company: string;
  url: string;
  time: string[];
  position: string;
  desc: string;
  tech: string[];
}[] = [
  {
    company: "Geotab",
    url: "https://altitude.geotab.com",
    time: ["Sep. 2024", "Aug. 2025"],
    position: "software developer intern",
    desc: "frontend + backend development on altitude platform",
    tech: [
      "typescript",
      "reactjs",
      "reduxjs",
      "tailwindcss",
      "python",
      "flask",
      "pytest",
      "gitlab",
    ],
  },
  {
    company: "DeltaHacks",
    url: "https://www.deltahacks.com",
    time: ["Jan. 2023", "present"],
    position: "hackathon technical executive",
    desc: "built landing page & improved internal tools (forms, admin portal, etc)",
    tech: ["typescript", "astrojs", "tailwindcss", "github"],
  },
  {
    company: "CIBC",
    url: "https://www.cibc.com/en/personal-banking.html",
    time: ["May 2023", "Aug. 2023"],
    position: "software developer intern",
    desc: "frontend development of internal telebanking tool",
    tech: ["java", ".NET", "azure", "jfrog", "jira", "github"],
  },
] as const;
