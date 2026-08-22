export default function SearchBar() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(16,24,40,0.08)] transition-all duration-300 focus-within:-translate-y-1 focus-within:shadow-[0_25px_60px_rgba(16,24,40,0.12)] sm:flex-row">

      <div className="flex min-w-0 flex-1 items-center px-3">

        <span className="mr-3 text-2xl text-slate-400">
          ⌕
        </span>

        <input
          type="text"
          placeholder="Search by name, location or interest..."
          className="w-full bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />

      </div>

      {/* Mock Search */}
      <button
        type="button"
        className="rounded-xl bg-pink-500 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/20"
      >
        Search
      </button>

    </div>
  );
}