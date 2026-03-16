export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold tracking-widest mb-6">
        PROOFHOUSE
      </h1>

      <p className="text-xl text-neutral-300 max-w-xl text-center mb-10">
        Entry-level collectible art and objects for people who want their
        space to feel intentional.
      </p>

      <div className="flex gap-6">
        <button className="px-6 py-3 bg-white text-black font-medium rounded hover:opacity-80">
          Shop
        </button>

        <button className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition">
          Archive
        </button>
      </div>

      <div className="mt-16 text-neutral-500 text-sm">
        @proofhousestudio
      </div>
    </div>
  );
}