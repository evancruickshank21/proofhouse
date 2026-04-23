import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] px-6 py-10 text-black md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center justify-between">
          <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/40">
            About / Position Statement
          </p>

          <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/30">
            phs.about
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="max-w-[20ch] font-brand-serif text-[2.6rem] leading-[0.92] tracking-[-0.05em] text-black md:text-[4.25rem]">
              A curated source for work that belongs in an archive.
            </h1>

            <p className="mt-10 max-w-xl font-brand-sans text-[15px] leading-8 text-black/70">
              Proofhouse sits between a gallery, a vintage print dealer, and a
              digital catalog. The focus is on prints, original works, and
              graphic objects that feel intentional, collectible, and worth
              owning — not mass-produced decor.
            </p>

            <p className="mt-6 max-w-xl font-brand-sans text-[15px] leading-8 text-black/70">
              Most online art sits at either extreme: generic and
              mass-produced, or inaccessible and over-priced. Proofhouse is the
              middle. Curated but approachable. Collectible but not
              pretentious. Unique without being chaotic.
            </p>
          </div>

          <div className="lg:pt-4">
            <dl className="grid grid-cols-1 gap-y-8 border-t border-black/10 pt-8">
              <div>
                <dt className="font-brand-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                  Position
                </dt>
                <dd className="mt-3 font-brand-sans text-[14px] leading-7 text-black/75">
                  Curated wall art with a narrower point of view — less
                  generic, more graphic, more collectible.
                </dd>
              </div>

              <div>
                <dt className="font-brand-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                  For
                </dt>
                <dd className="mt-3 font-brand-sans text-[14px] leading-7 text-black/75">
                  People who care about their space. Literate in design,
                  streetwear, vintage, and editorial culture. Want walls that
                  feel considered, not decorated.
                </dd>
              </div>

              <div>
                <dt className="font-brand-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                  Voice
                </dt>
                <dd className="mt-3 font-brand-sans text-[14px] leading-7 text-black/75">
                  Minimal. Confident. Slightly raw. Short, intentional, and
                  matter-of-fact — closer to a gallery label than a product
                  description.
                </dd>
              </div>

              <div>
                <dt className="font-brand-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                  Avoid
                </dt>
                <dd className="mt-3 font-brand-sans text-[14px] leading-7 text-black/75">
                  Generic. Corporate. Overly polished. Anything that reads like
                  a store rather than a record.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-20 border-t border-black/10 pt-10 md:mt-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/40">
                Reference
              </p>

              <p className="mt-4 font-brand-serif text-[28px] leading-[0.96] tracking-[-0.04em] text-black md:text-[34px]">
                Auction house listing. Museum inventory. Vintage editorial
                layout.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <p className="max-w-md font-brand-sans text-[14px] leading-7 text-black/60">
                Everything here is selected with the feeling that it could
                have come from a real archive. Clean but with character.
                Slightly imperfect, in the right way.
              </p>

              <div>
                <Link
                  href="/shop"
                  className="inline-flex items-center font-brand-mono text-[11px] uppercase tracking-[0.24em] text-[#4f6fbf] transition-opacity duration-200 hover:opacity-65"
                >
                  View the current collection →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
