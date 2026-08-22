export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © 2026 YourSite. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="transition-colors hover:text-slate-900"
          >
            Terms
          </a>

          <a
            href="#"
            className="transition-colors hover:text-slate-900"
          >
            Privacy
          </a>

          <a
            href="#"
            className="transition-colors hover:text-slate-900"
          >
            Safety
          </a>
        </div>
      </div>
    </footer>
  );
}