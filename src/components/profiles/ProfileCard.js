import Image from "next/image";

export default function ProfileCard({ profile }) {
  return (
    <article className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10">

      {/* Image */}
      <div className="relative h-87.5 overflow-hidden bg-linear-to-br from-slate-100 to-slate-200">

        {/* Photo */}
        {profile.image ? (
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-400">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-slate-300 shadow-sm">
              ♡
            </div>

            <span className="text-xs font-semibold">
              Photo
            </span>

          </div>
        )}

        {/* Online badge */}
        {profile.online && (
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-slate-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Online
          </div>
        )}

        {/* Verified */}
        {profile.verified && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-slate-900/85 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px]">
              ✓
            </span>
            Verified
          </div>
        )}

        {/* Favorite */}
        <button
          type="button"
          aria-label={`Favorite ${profile.name}`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl text-pink-500 shadow-sm backdrop-blur transition-transform duration-200 hover:scale-110"
        >
          ♡
        </button>

      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-start justify-between gap-3">

          <div>
            <h3 className="text-lg font-bold tracking-tight text-slate-800">
              {profile.name}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {profile.age}
              <span className="mx-1.5 text-slate-300">
                ·
              </span>
              {profile.location}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1.5 text-[11px] font-bold text-amber-700">
            <span className="text-amber-500">
              ★
            </span>
            {profile.rating}
          </div>

        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

          <span className="text-[11px] text-slate-400">
            {profile.reviews} reviews
          </span>

          <button
            type="button"
            className="flex items-center gap-1.5 text-[11px] font-bold text-pink-500 transition-all duration-200 hover:gap-2.5"
          >
            View profile
            <span>→</span>
          </button>

        </div>

      </div>

    </article>
  );
}