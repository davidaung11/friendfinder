export default function FooterNotice() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs leading-6 text-slate-500">
          <span className="font-semibold text-slate-700">18+ Only:</span>{" "}
          This platform connects adults independently. We do not arrange or
          manage bookings or appointments. Any arrangements between users are
          their own responsibility, and everyone is expected to follow the
          laws applicable to their location.
        </p>
      </div>
    </section>
  );
}