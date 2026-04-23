import Link from "next/link";
import { products } from "@/lib/products";
import RegistrationMark from "@/components/RegistrationMark";

export default function HomePage() {
  const [featured, ...rest] = products;
  const featuredLot = "phs.001";

  return (
    <main className="min-h-screen bg-[#f5f3ee] px-6 py-10 text-black md:px-12 md:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Masthead */}
        <div className="flex items-center justify-between border-b border-black/10 pb-6">
          <div className="flex items-center gap-3 text-black/55">
            <RegistrationMark size={14} />
            <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em]">
              Proofhouse Studio — Volume 01
            </p>
          </div>

          <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/40">
            Current Feature
          </p>
        </div>

        {/* Featured lot */}
        <section className="mt-14 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Link
            href={`/shop/${featured.id}`}
            className="group block"
            aria-label={`View record for ${featured.name}`}
          >
            <div className="overflow-hidden bg-[#e9e6df] p-3 transition-colors duration-300 group-hover:bg-[#e3dfd6]">
              <div className="aspect-[4/5] w-full overflow-hidden bg-black/5">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="h-full w-full object-cover saturate-[0.97] transition-all duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </Link>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/40">
                {featuredLot}
              </p>
              <span className="h-px w-10 bg-black/15" aria-hidden="true" />
              <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/40">
                Featured Work
              </p>
            </div>

            <h1 className="mt-6 max-w-[14ch] font-brand-serif text-[2.6rem] leading-[0.92] tracking-[-0.05em] text-black md:text-[4.5rem]">
              {featured.name}
            </h1>

            <p className="mt-6 font-brand-mono text-[11px] uppercase tracking-[0.22em] text-black/45">
              {featured.details.category ?? featured.details.medium}
            </p>

            <p className="mt-8 max-w-md font-brand-sans text-[15px] leading-8 text-black/70">
              {featured.description}
            </p>

            <p className="mt-10 font-brand-mono text-[14px] uppercase tracking-[0.18em] text-black">
              {featured.price}
            </p>

            <div className="mt-10">
              <Link
                href={`/shop/${featured.id}`}
                className="inline-flex items-center font-brand-mono text-[11px] uppercase tracking-[0.24em] text-[#4f6fbf] transition-opacity duration-200 hover:opacity-65"
              >
                View Record →
              </Link>
            </div>
          </div>
        </section>

        {/* Index */}
        {rest.length > 0 && (
          <section className="mt-28 border-t border-black/10 pt-10 md:mt-36">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/40">
                  Index
                </p>

                <h2 className="mt-4 max-w-[18ch] font-brand-serif text-[2rem] leading-[0.95] tracking-[-0.04em] text-black md:text-[2.5rem]">
                  Also on view.
                </h2>
              </div>

              <Link
                href="/shop"
                className="shrink-0 font-brand-mono text-[10px] uppercase tracking-[0.24em] text-[#4f6fbf] transition-opacity duration-200 hover:opacity-65"
              >
                Full Collection →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((product, i) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  className="group block"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/40">
                      phs.{String(i + 2).padStart(3, "0")}
                    </p>

                    <p className="font-brand-mono text-[10px] uppercase tracking-[0.2em] text-[#4f6fbf]">
                      View →
                    </p>
                  </div>

                  <div className="overflow-hidden bg-[#e9e6df] p-2 transition-colors duration-300 group-hover:bg-[#e3dfd6]">
                    <div className="aspect-[4/5] w-full overflow-hidden bg-black/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover saturate-[0.97] transition-all duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <p className="mt-4 font-brand-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                    {product.details.category ?? product.details.medium}
                  </p>

                  <h3 className="mt-3 max-w-[15ch] font-brand-serif text-[1.5rem] leading-[0.98] tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-[#4f6fbf] md:text-[1.65rem]">
                    {product.name}
                  </h3>

                  <p className="mt-4 font-brand-mono text-[12px] uppercase tracking-[0.16em] text-black">
                    {product.price}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
