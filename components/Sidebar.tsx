import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex w-28 shrink-0 border-r border-black/10 bg-[#f5f3ee] px-4 py-5 md:w-32 md:px-5 md:py-6">
      <div className="flex min-h-full flex-col justify-between">
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
          <p className="font-brand-sans text-[9px] uppercase tracking-[0.22em] text-black/30">
            print / object / wall art
          </p>
        </div>
      </div>
    </aside>
  );
}