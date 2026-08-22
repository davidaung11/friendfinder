import { profiles } from "@/data/profile";
import ProfileCard from "./ProfileCard";

export default function ProfileGrid() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[11px] font-extrabold tracking-[1.5px] text-pink-500">
              DISCOVER
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
              People you might like
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Explore some of the people waiting to connect.
            </p>
          </div>

          {/* Mock */}
          <button
            type="button"
            className="flex w-fit items-center gap-2 text-sm font-bold text-pink-500 transition-all duration-200 hover:gap-3"
          >
            View all
            <span>→</span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
}
