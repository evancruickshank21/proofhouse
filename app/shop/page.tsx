import Link from "next/link";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] px-6 py-10 text-black md:px-12 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 md:mb-18">
          <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/40">
            Collection / Current Works
          </p>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="max-w-3xl font-brand-serif text-[2.6rem] leading-[0.92] tracking-[-0.05em] text-black md:text-[5.25rem]">
              Prints and objects selected for walls with point of view.
            </h1>

            <p className="max-w-sm font-brand-sans text-[14px] leading-7 text-black/55">
              A tightly edited collection of vintage print material, original
              works, and graphic objects with strong image value.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="group block"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="font-brand-mono text-[10px] uppercase tracking-[0.24em] text-black/40">
                  phs.{String(index + 1).padStart(3, "0")}
                </p>

                <p className="font-brand-mono text-[10px] uppercase tracking-[0.2em] text-[#4f6fbf]">
                  View Record →
                </p>
              </div>

              <div className="overflow-hidden bg-[#e9e6df] p-3 transition-colors duration-300 group-hover:bg-[#e3dfd6]">
                <div className="aspect-[4/5] w-full overflow-hidden bg-black/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover saturate-[0.97] transition-all duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <p className="font-brand-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
                  {product.details.category ?? product.details.medium}
                </p>

                <h2 className="mt-3 max-w-[15ch] font-brand-serif text-[1.85rem] leading-[0.96] tracking-[-0.045em] text-black transition-colors duration-300 group-hover:text-[#4f6fbf] md:text-[2.05rem]">
                  {product.name}
                </h2>

                {/\d/.test(product.year) && (
                  <p className="mt-3 font-brand-mono text-[11px] uppercase tracking-[0.2em] text-black/40">
                    {product.year}
                  </p>
                )}

                <p className="mt-4 max-w-[42ch] font-brand-sans text-[14px] leading-7 text-black/60">
                  {product.description}
                </p>

                <p className="mt-6 font-brand-mono text-[12px] uppercase tracking-[0.16em] text-black">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
