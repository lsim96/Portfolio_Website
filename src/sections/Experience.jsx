const experiences = [
  {
    period: "March 2024 - November 2025",
    role: "Web Developer - Seasonal work",
    company: "LittleBig Founders",
    description:
      "Worked as part of a 5-member development team, contributing to both front-end and back-end features. Developed API endpoints using NestJS, supporting core application functionality and data flow. Integrated PostgreSQL for reliable data storage management, insuring performance and data integrity.",
    technologies: [
      "React",
      "NestJS",
      "Typescript",
      "PostgreSQL",
      "Figma",
      "Strapi",
    ],
    current: false,
  },
  {
    period: "October 2024 - October 2025",
    role: "Full stack developer",
    company: "Avenga Academy",
    description:
      "I completed Full Stack Development program where I gained hands-on experience in building modern web applications and gaining expertise across both frontend and backend technologies. I developed responsive and user friendly interface using HTML5, CSS3, JavaScript, TypeScript, React and Angular. I also gained experience with Figma, translating design concepts into functional UI and enhancing UX with animations and transitions using Framer Motion. Built different scalable backend applications and RESTful APIs using Node.js, NestJS and Express.js. I managed data using PostgreSQL, and MongoDB through TypeORM. Using Postman I designed and tested APIs, in order to insure reliability and performance, as well as GitHub for version control and collaboration.",
    technologies: [
      "HTML5",
      "CSS",
      "JavaScript",
      "PostgreSQL",
      "MongoDB",
      "TypeORM",
      "Node.js",
      "Typescript",
      "Nestjs",
      "Express.js",
      "React",
      "Angular",
      "Next.js",
    ],
    current: false,
  },
  {
    period: "October 2021 - October 2024",
    role: "HVAC technician / sales technician",
    company: "Millers Heating and Cooling",
    description:
      "Performed on-site system inspections and identified performance or efficiency issues. I managed service documentation, invoices, and customer records, as well as preparing and presenting service estimates, quotes, and proposals. Closed sales for repairs, upgrades, and new HVAC installations.",
    technologies: [],
    current: false,
  },
  {
    period: "April 2018 - October 2021",
    role: "Maintenance engineering",
    company: "Shamin hotels",
    description:
      "Started as a maintenance technician and moved towards a supervisor/manager role towards the end. I supervised and coordinated daily activities of the maintenance team, as well as ensuring timely resolution of maintenance issues. I trained and onboarded new maintenance staff and managed preventive maintenance schedules to reduce breakdowns.",
    technologies: [],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* {Section header} */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Career
          </span>
          <h2 className="text-4xl md:text-5xl font-boldmt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              I have obtained.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            This work experience timeline spans the past 8 years and illustrates
            my career transition to web development. It captures my journey as a
            curious beginner who initially taught myself to code independently,
            followed by my decision to pursue a more structured path through
            enrollment in a programming academy.
          </p>
        </div>

        {/* {Timeline} */}

        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* {Experience} */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* {Timeline dot} */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* {Content} */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
