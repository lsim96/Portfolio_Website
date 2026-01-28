import {
  ArrowRight,
  Github,
  Linkedin,
  ChevronDown,
  Download,
} from "lucide-react";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import resume from "../assets/Resume.pdf";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "NestJs",
  "PostgreSQL",
  "MongoDB",
  "Tailwindcss",
  "Angular",
  "Express.js",
  "GitHub Actions",
  "JavaScript",
  "HTML5",
  "SCSS",
];

export const Hero = () => {
  const drips = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    borderRadius: `${50 + Math.random() * 10}% ${50 + Math.random() * 10}% ${50 + Math.random() * 10}% ${40 + Math.random() * 20}% / ${60 + Math.random() * 10}% ${60 + Math.random() * 10}% ${30 + Math.random() * 20}% ${30 + Math.random() * 20}%`,
    size: 4 + Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* {Bacgrkound image} */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.avif"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* {Dots floating} */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {drips.map((drip, i) => (
          <div
            key={i}
            className="absolute  opacity-60"
            style={{
              backgroundColor: "#7a0000",
              left: `${drip.x}%`,
              top: `${drip.y}%`,
              width: `${drip.size}px`,
              height: `${drip.size * 1.3}px`,
              borderRadius: drip.borderRadius,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* {Content} */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10j">
        <div className="grid lg: grid-cols-2 gap-12 items-center">
          {/* {Left Column - Text} */}

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Web Developer
              </span>
            </div>

            {/* {Headline} */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Bulding
                <span className="text-primary glow-text"> experiences</span>
                <br /> that <br />
                <span className="font-serif italic font-normal text-white">
                  matter.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Leonid Simonoski - a web developer specializing in both
                front-end and back-end technologies. I'm excited for future
                opportunities where I can showcase my skills!
              </p>
            </div>

            {/* {Call to action} */}

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href={resume} download="Leonid_CV">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* {Social Links} */}

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/lsim96" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/leonid-simonoski-32200b365/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* {Right Column - Profile Image} */}

          <div className="relative animate-fade-in animation-delay-300">
            {/* {Profile Image} */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Leon Simonoski"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* {Floating Badge} */}

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* {Stats Badge} */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {Skills Section} */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
