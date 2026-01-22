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
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
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

      <div className="container mx-auto px-6 pt-32 pb-20 relatiev z-10j">
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
            <div>
              <h1>
                Bulding{" "}
                <span className="text-primary glow-text">experiences</span>
                <br />
                that
                <br />
                <span className="font-serif italic font-normal text-white">
                  matter.
                </span>
              </h1>
              <p>Hi, I'm Leonid Simonoski - a web developer specializing in React, NestJS, TypesScript, Expressjs, and perfecting my Next.js skills. I build </p>
            </div>
          </div>
          {/* {Right Column - Profile Image} */}
        </div>
      </div>
    </section>
  );
};
