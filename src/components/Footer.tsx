import Logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-0 py-12">
        <div className="grid grid-cols-4 gap-14">
          <div>
            <img
              src={Logo}
              alt="Dev Stack"
              className= "width: 90px"
            />

            <p className="mt-3 max-width: 285px; text-[10px] leading-4 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex gap-4 text-[10px] text-slate-700">
              <a
                href=""
                className="transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href=""
                className="transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href=""
                className="transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-[9px] font-semibold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <ul className="space-y-2 text-[10px] text-slate-500">
              <li>
                <a
                  href=""
                  className="transition hover:text-slate-900"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="transition hover:text-slate-900"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="transition hover:text-slate-900"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[9px] font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <ul className="space-y-2 text-[10px] text-slate-500">
              <li>
                <a
                  href="#"
                  className="transition hover:text-slate-900"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-slate-900"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="transition hover:text-slate-900"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[9px] font-semibold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <ul className="space-y-2 text-[10px] text-slate-500">
              <li>
                <a
                  href="#"
                  className="transition hover:text-slate-900"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-slate-900"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-5 text-[9px] text-slate-400">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href=""
              className="transition hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href=""
              className="transition hover:text-slate-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;