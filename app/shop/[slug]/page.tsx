import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-[#0c0c0c] px-8 py-12 text-white md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <Link
            href="/shop"
            className="font-brand-sans text-[10px] uppercase tracking-[0.24em] text-white/38 transition-opacity duration-200 hover:opacity-55"
          >
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="overflow-hidden bg-white/[0.02] p-3">
            <img
              src={product.image}
              alt={product.name}
              className="h-auto w-full object-cover shadow-[0_20px_60px_rgba(0,0,0,0.6)] saturate-[0.96] transition-transform duration-700 ease-out hover:scale-[1.01]"
            />
          </div>

          <div className="max-w-xl">
            <p className="font-brand-sans text-[10px] uppercase tracking-[0.22em] text-white/38">
              {product.details.medium}
            </p>

            <h1 className="mt-4 max-w-[16ch] font-brand-serif text-4xl leading-[0.88] tracking-[-0.05em] md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-4 font-brand-sans text-[13px] text-white/38">
              {product.year}
            </p>

            <p className="mt-8 font-brand-sans text-[14px] leading-8 text-white/62 md:text-[15px]">
              {product.description}
            </p>

            <p className="mt-10 font-brand-sans text-[18px] uppercase tracking-[0.12em] text-white">
              {product.price}
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <dl className="grid grid-cols-1 gap-y-5">
                <div>
                  <dt className="font-brand-sans text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Artist
                  </dt>
                  <dd className="mt-2 font-brand-sans text-[14px] text-white/82">
                    {product.details.artist}
                  </dd>
                </div>

                <div>
                  <dt className="font-brand-sans text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Medium
                  </dt>
                  <dd className="mt-2 font-brand-sans text-[14px] text-white/82">
                    {product.details.medium}
                  </dd>
                </div>

                <div>
                  <dt className="font-brand-sans text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Category
                  </dt>
                  <dd className="mt-2 font-brand-sans text-[14px] text-white/82">
                    {product.details.category}
                  </dd>
                </div>

                <div>
                  <dt className="font-brand-sans text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Size
                  </dt>
                  <dd className="mt-2 font-brand-sans text-[14px] text-white/82">
                    {product.details.size}
                  </dd>
                </div>

                <div>
                  <dt className="font-brand-sans text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Condition
                  </dt>
                  <dd className="mt-2 font-brand-sans text-[14px] text-white/82">
                    {product.details.condition}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`mailto:hello@proofhouse.ca?subject=Inquiry%20about%20${encodeURIComponent(product.name)}`}
                className="inline-flex items-center justify-center border border-white bg-white px-5 py-3 font-brand-sans text-[10px] uppercase tracking-[0.24em] text-black transition-all duration-200 hover:opacity-85"
              >
                Inquire
              </Link>

              <Link
                href="/shop"
                className="inline-flex items-center justify-center border border-white/15 px-5 py-3 text-center font-brand-sans text-[10px] uppercase tracking-[0.24em] text-white transition-opacity duration-200 hover:opacity-55"
              >
                Continue Browsing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}