export const PROJECTS: {
  name: string;
  emoji?: string;
  urls: { name: string; link: string }[];
  desc: string;
  tech: string[];
}[] = [
  {
    name: "mern stack markdown blog app",
    emoji: "✍️",
    urls: [
      {
        name: "github",
        link: "https://github.com/selina-kim/mern-blog-app",
      },
      {
        name: "demo",
        link: "https://mern-blog-app-client.netlify.app",
      },
    ],
    desc: "markdown blog platform that can host multiple users & blogs",
    tech: [
      "mongoDB",
      "expressjs",
      "reactjs",
      "nodejs",
      "typescript",
      "netlify",
      "vercel",
    ],
  },
  {
    name: "personal website",
    emoji: ":D",
    urls: [
      {
        name: "github",
        link: "https://github.com/selina-kim/personal-website",
      },
    ],
    desc: "you're looking at it!",
    tech: ["nextjs", "typescript", "tailwindcss"],
  },
  {
    name: "python tetris",
    emoji: "🕹️",
    urls: [
      {
        name: "github",
        link: "https://github.com/selina-kim/python-tetris-game",
      },
    ],
    desc: "tetris game built from scratch including game logic, ui, art, etc",
    tech: ["python", "pyglet", "pyinstaller"],
  },
  {
    name: "edu everywhere",
    emoji: "📚",
    urls: [
      {
        name: "github",
        link: "https://github.com/selina-kim/EDUEverywhere",
      },
    ],
    desc: "education platform focused on integrated translation features",
    tech: ["reactjs", "javascript", "python", "google cloud platform", "flask"],
  },
] as const;
