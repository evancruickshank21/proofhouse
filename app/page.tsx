import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] px-8 py-10 text-black md:px-12 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-brand-sans text-[10px] uppercase tracking-[0.24em] text-black/35">
                Curated wall art / collectible prints / objects
              </p>

              <div className="mt-6">
                <img
                  src="/proofhouse_logo_transparent.png"
                  alt="proofhouse logo"
                  className="h-auto w-[420px] max-w-full"
                />
              </div>

              <p className="mt-8 max-w-xl font-brand-sans text-[15px] leading-8 text-black/65">
                Proofhouse is a curated source for vintage prints, original works,
                and graphic objects selected for strong image, cultural texture,
                and real-life presence.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/shop" className="btn-primary">
                  View Collection
                </Link>

                <Link href="/shop" className="btn-secondary">
                  Browse Works
                </Link>
              </div>
            </div>

            <div className="mt-16 border-t border-black/10 pt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <p className="font-brand-sans text-[10px] uppercase tracking-[0.24em] text-black/35">
                    Positioning
                  </p>
                  <p className="mt-2 max-w-sm font-brand-sans text-[13px] leading-6 text-black/55">
                    Affordable wall art with a narrower point of view — less generic,
                    more graphic, more collectible.
                  </p>
                </div>

                <div>
                  <p className="font-brand-sans text-[10px] uppercase tracking-[0.24em] text-black/35">
                    Current Focus
                  </p>
                  <p className="mt-2 max-w-sm font-brand-serif text-[28px] leading-[0.96] tracking-[-0.04em] text-black">
                    Vintage print ephemera, bold originals, and image-led pieces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <div className="overflow-hidden bg-black/5 p-2">
              <img
                src="/prints/andy-warhol-card-ph.jpg"
                alt="Andy Warhol print"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-12 overflow-hidden bg-black/5 p-2">
              <img
                src="/prints/estridge-sun.png"
                alt="Christopher Estridge Black Sun"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="col-span-2 ml-auto max-w-sm pt-4">
              <p className="font-brand-sans text-[10px] uppercase tracking-[0.24em] text-black/35">
                Why Proofhouse
              </p>

              <p className="mt-3 font-brand-serif text-[32px] leading-[0.95] tracking-[-0.04em] text-black">
                Built for people who want their walls to feel considered, not
                decorated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}