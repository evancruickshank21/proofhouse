import Link from "next/link";
import RegistrationMark from "./RegistrationMark";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f5f3ee] px-6 py-8 text-black md:px-12 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-black/55">
              <RegistrationMark size={14} />
              <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em]">
                Proofhouse Studio
              </p>
            </div>
            <p className="mt-2 font-brand-mono text-[10px] uppercase tracking-[0.22em] text-black/35">
              Volume 01 · MMXXVI
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/55">
              <Link
                href="/"
                className="transition-opacity duration-200 hover:opacity-65"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="transition-opacity duration-200 hover:opacity-65"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="transition-opacity duration-200 hover:opacity-65"
              >
                About
              </Link>
              <a
                href="mailto:hello@proofhousestudio.com"
                className="transition-opacity duration-200 hover:opacity-65"
              >
                Contact
              </a>
            </nav>

            <p className="font-brand-mono text-[10px] uppercase tracking-[0.22em] text-black/35">
              Print · Object · Wall Art
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-brand-mono text-[9px] uppercase tracking-[0.24em] text-black/30">
            © 2026 Proofhouse Studio. All works catalogued with care.
          </p>
          <a
            href="mailto:hello@proofhousestudio.com"
            className="font-brand-mono text-[10px] uppercase tracking-[0.22em] text-[#4f6fbf] transition-opacity duration-200 hover:opacity-65"
          >
            hello@proofhousestudio.com
          </a>
        </div>
      </div>
    </footer>
  );
}
