const services = [
  {
    title: "Sole trader accounts",
    description:
      "Self-assessment, bookkeeping, and tax planning that fits around running the business itself — not the other way round.",
  },
  {
    title: "Limited company accounts",
    description:
      "Statutory accounts, corporation tax, and Companies House filings handled end to end, with a clear annual calendar so nothing is a surprise.",
  },
  {
    title: "Payroll & VAT",
    description:
      "Monthly payroll and VAT returns managed on schedule, with a direct line to ask questions before small issues become large ones.",
  },
  {
    title: "Ongoing advice",
    description:
      "Quarterly check-ins on cash flow and tax position, so decisions get made with current numbers rather than last year's.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            What we handle
          </h2>
          <p className="mt-4 text-slate text-lg leading-relaxed">
            Four core areas, covered properly rather than spread thin. If it
            doesn&rsquo;t fit here, we&rsquo;ll tell you plainly and point you
            to someone who can help.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone rounded-2xl overflow-hidden">
          {services.map((service) => (
            <div key={service.title} className="bg-paper p-8 sm:p-9">
              <h3 className="font-serif text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-slate leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <a
          href="/services"
          className="mt-10 inline-flex items-center gap-2 text-ink font-medium border-b-2 border-rust pb-1 hover:gap-3 transition-all"
        >
          See the full breakdown of our services →
        </a>
      </div>
    </section>
  );
}
