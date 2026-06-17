export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* subtle texture: faint grid, ledger-like, restrained */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #FBF9F6 1px, transparent 1px), linear-gradient(to bottom, #FBF9F6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-rust font-medium text-sm tracking-wide uppercase mb-5">
            Accountants for sole traders &amp; limited companies
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
            An accountant who answers when you call.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-paper/80 max-w-xl leading-relaxed">
            We work with sole traders and limited companies turning over under
            £500k across London. No call centres, no junior rotating staff —
            one named accountant who knows your business.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-rust text-paper font-medium px-7 py-3.5 text-base hover:bg-rust/90 transition-colors"
            >
              Book a free consultation
            </a>
            <div className="inline-flex items-center gap-2 text-sm text-paper/70">
              <span className="h-2 w-2 rounded-full bg-rust" aria-hidden="true" />
              Most calls returned the same day
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
