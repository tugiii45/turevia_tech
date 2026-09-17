import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiArrowRight,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080D1A] text-slate-300">
      {/* Call To Action */}
      <div className="border-b border-slate-800/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-slate-900 to-cyan-500/5 p-8 sm:p-12">
            {/* Background glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  Have an idea?
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let's build something meaningful.
                </h2>

                <p className="mt-4 text-slate-400">
                  Whether you need a website, web application, or custom
                  software solution, let's turn your idea into something real.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Start a conversation

                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="group mb-5 inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white">
                T
              </div>

              <div>
                <span className="block text-lg font-bold text-white">
                  Turevia Technologies
                </span>

                <span className="text-xs text-slate-500">
                  Technology • Innovation • Solutions
                </span>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Building modern websites, web applications, and custom software
              that turn ideas into useful digital experiences.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/tugiii45"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FiGithub className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>

              {/* Email */}
              <a
                href="mailto:your@email.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-cyan-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition hover:text-cyan-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="transition hover:text-cyan-400"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition hover:text-cyan-400"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>Web Development</li>
              <li>Web Applications</li>
              <li>Custom Software</li>
              <li>UI Implementation</li>
              <li>Website Customization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-slate-500">
            © {currentYear} Turevia Technologies. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 text-slate-500 transition hover:text-cyan-400"
          >
            Back to top
            <FiArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;