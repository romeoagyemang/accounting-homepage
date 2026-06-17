export default function CTA() {
  return (
    <section id="contact" className="bg-ink text-paper py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
          Talk to an accountant this week, not next month.
        </h2>
        <p className="mt-4 text-paper/75 text-lg max-w-xl mx-auto leading-relaxed">
          A free 20-minute consultation, no obligation. We&rsquo;ll tell you
          honestly whether we&rsquo;re the right fit.
        </p>

        <form className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@yourbusiness.co.uk"
            className="flex-1 rounded-full px-5 py-3.5 text-ink bg-paper placeholder:text-slate/60 focus:outline-2 focus:outline-rust"
          />
          <button
            type="submit"
            className="rounded-full bg-rust text-paper font-medium px-7 py-3.5 hover:bg-rust/90 transition-colors"
          >
            Book a free consultation
          </button>
        </form>

        <p className="mt-6 text-sm text-paper/60">
          Or call us directly on 020 7946 0958
        </p>
      </div>
    </section>
  );
}
