import { Code2, Flame, ShieldHalf, Telescope } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Messy code is my pet peeve, so writing clean, readable code comes naturally to me",
  },
  {
    icon: Flame,
    title: "Passion",
    description:
      "I first started diving into full-stack programming by myself, and later attended an academy to boost my skills. I'm still mastering technologies like React, Nest.js, PostgreSQL, and NextJs",
  },
  {
    icon: Telescope,
    title: "Vision",
    description:
      "As I continue to grow as a developer, I'm eager to bring my commitment to code quality to challenging projects across the stack. Whether I'm crafting intuitive user interfaces, building robust back-end systems, or working on full-stack solutions",
  },
  {
    icon: ShieldHalf,
    title: "Team Player",
    description:
      "While I enjoy the focus and autonomy of solo work, I've found that team collaboration brings invaluable benefits—diverse perspectives that challenge my assumptions, knowledge sharing that accelerates learning, and the collective problem-solving that often leads to more elegant solutions",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* {Left Column} */}

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building what's next,
              <span className="font-serif italic font-normal text-white">
                {" "}
                component by component.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a web developer with a strong focus on building scalable,
                maintainable, and user friendly applications.
              </p>

              <p>
                After starting my journey through self-learning, I formalized my
                development path in 2024 at Avenga Academy in Skopje, where I
                strengthened my understanding of modern frontend and backend
                engineering practices.
              </p>

              <p>
                I specialize in React, TypeScript, Nest.js, PostgreSQL. I
                combine technical knowledge with an emphasis on design and UX.
              </p>

              <p>
                Outside of coding, I'm exploring new technologies, hitting the
                trails, running, or snowboarding.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to join a team that values both technical
                excellence and great design, where I can showcase my full-stack
                abilities while tackling challenging problems."
              </p>
            </div>
          </div>

          {/* {Right Column - Highlights} */}

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
