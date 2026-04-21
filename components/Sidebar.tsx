import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      {/* Mobile: horizontal top bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#f5f3ee]/95 px-5 py-3 backdrop-blur-sm md:hidden">
        <Link href="/" className="block">
          <img
            src="/proofhouse_logo_transparent.png"
            alt="proofhouse logo"
            className="h-7 w-auto"
          />
        </Link>
        <nav className="flex gap-6 font-brand-sans text-[10px] uppercase tracking-[0.24em] text-black/60">
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-[#2a5ea8]"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="transition-colors duration-200 hover:text-[#2a5ea8]"
          >
            Shop
          </Link>
        </nav>
      </header>

      {/* Desktop: vertical sidebar */}
      <aside className="hidden w-28 shrink-0 border-r border-black/10 bg-[#f5f3ee] px-4 py-5 md:flex md:w-32 md:px-5 md:py-6">
        <div className="flex min-h-full w-full flex-col justify-between">
          <div>
            <Link href="/" className="block">
              <img
                src="/proofhouse_logo_transparent.png"
                alt="proofhouse logo"
                className="h-auto w-full max-w-[96px]"
              />
            </Link>

            <nav className="mt-10 flex flex-col gap-4 font-brand-sans text-[10px] uppercase tracking-[0.24em] text-black/60">
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-[#2a5ea8]"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="transition-colors duration-200 hover:text-[#2a5ea8]"
              >
                Shop
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-brand-mono text-[9px] uppercase tracking-[0.22em] text-black/30">
              print / object / wall art
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
