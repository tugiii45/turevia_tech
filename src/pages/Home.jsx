
import {
  FiArrowRight,
  FiGithub,
  FiCode,
  FiLayers,
  FiCpu,
} from "react-icons/fi";

function Home() {
  return (
    <main>
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative min-h-[calc(100vh-1px)] overflow-hidden bg-[#0B1120] text-white">

        {/* Background Glow */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[calc(100vh-1px)] max-w-7xl items-center px-6 py-20 lg:px-8">

          <div className="grid w-full items-center gap-16 lg:grid-cols-2">

            {/* =========================
                LEFT SIDE
            ========================== */}
            <div>

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Building digital solutions
              </div>

              {/* Main Heading */}
              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Turning ideas into
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  digital solutions.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                I design and build modern websites, web applications, and
                custom software that help organizations bring their ideas
                to life.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
                >
                  Explore my work

                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                >
                  Let's work together
                </a>

              </div>

              {/* GitHub */}
              <a
                href="https://github.com/tugiii45"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-400"
              >
                <FiGithub />
                View GitHub
              </a>

            </div>

            {/* =========================
                RIGHT SIDE
            ========================== */}
            <div className="relative hidden lg:block">

              {/* Main Card */}
              <div className="relative mx-auto max-w-md">

                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

                <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6 shadow-2xl backdrop-blur">

                  {/* Window Header */}
                  <div className="mb-8 flex items-center justify-between">

                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-slate-600" />
                      <span className="h-3 w-3 rounded-full bg-slate-600" />
                      <span className="h-3 w-3 rounded-full bg-slate-600" />
                    </div>

                    <span className="text-xs text-slate-500">
                      software.js
                    </span>

                  </div>

                  {/* Code-style content */}
                  <div className="space-y-5 font-mono text-sm">

                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-cyan-300">solution</span>{" "}
                      <span className="text-slate-500">=</span>{" "}
                      <span className="text-yellow-300">{"{"}</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-blue-300">idea</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-green-300">
                        "Your vision"
                      </span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-blue-300">design</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-green-300">
                        "User focused"
                      </span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-blue-300">technology</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-green-300">
                        "Modern"
                      </span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-blue-300">result</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-green-300">
                        "Real impact"
                      </span>
                    </div>

                    <div>
                      <span className="text-yellow-300">{"}"}</span>
                    </div>

                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-10 grid grid-cols-3 gap-3">

                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center">
                      <FiCode className="mx-auto mb-2 text-blue-400" />
                      <span className="text-xs text-slate-500">
                        Development
                      </span>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center">
                      <FiLayers className="mx-auto mb-2 text-cyan-400" />
                      <span className="text-xs text-slate-500">
                        Full Stack
                      </span>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center">
                      <FiCpu className="mx-auto mb-2 text-blue-400" />
                      <span className="text-xs text-slate-500">
                        Innovation
                      </span>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-600 sm:flex">
          <span>Scroll to explore</span>

          <div className="h-8 w-px bg-slate-700" />
        </div>

      </section>

      {/* Temporary sections so anchor links work */}
      <section id="projects" className="h-10" />
      <section id="contact" className="h-10" />
    </main>
  );
}

export default Home;

