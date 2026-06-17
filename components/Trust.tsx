const stats = [
  { value: "14 yrs", label: "Practising as chartered accountants" },
  { value: "Same day", label: "Typical response time to client calls" },
  { value: "1", label: "Named accountant per client, not a rotating team" },
];

export default function Trust() {
  return (
    <section className="bg-paper py-16 sm:py-20 border-b border-stone">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-rust pl-5">
              <p className="font-serif text-3xl font-semibold text-ink">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-slate leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mt-14 sm:mt-16 max-w-2xl">
          <p className="font-serif text-xl sm:text-2xl text-ink leading-snug">
            &ldquo;I called at 5pm on a Friday about a VAT query and had an
            answer before I left the office. That&rsquo;s the whole reason I
            switched.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-slate">
            — Owner, independent design studio, Hackney
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
