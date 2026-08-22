import SearchBar from "@/components/search/SearchBar";

const categories = [
  "All",
  "Popular",
  "New",
  "Nearby",
  "Verified",
  "Long-term",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-violet-50">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-60 -right-40 h-[600px] w-[600px] rounded-full bg-violet-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[590px] max-w-5xl items-center px-5 py-20 sm:px-6 lg:px-8">

        <div className="w-full text-center">

          {/* Eyebrow */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-xs font-bold text-pink-500 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_0_4px_rgba(244,63,112,0.1)]" />
            Find your people
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-[-2.5px] text-slate-900 sm:text-6xl lg:text-7xl">

            Meet people who

            <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              match your vibe.
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Discover interesting people around you,
            explore new experiences, and find someone
            who grant your wishes.
          </p>

          {/* Search */}
          <div className="mt-9">
            <SearchBar />
          </div>

          {/* Categories */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">

            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  index === 0
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white/80 text-slate-500 hover:-translate-y-0.5 hover:border-pink-400 hover:text-pink-500"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}