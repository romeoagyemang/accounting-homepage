const team = [
  { initials: "EH", name: "Elaine Harrow", role: "Founder & Chartered Accountant" },
  { initials: "MC", name: "Marcus Cole", role: "Tax & Limited Company Accounts" },
  { initials: "PS", name: "Priya Shah", role: "Bookkeeping & Payroll" },
];

export default function Team() {
  return (
    <section id="about" className="bg-stone/40 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Three people, not a call queue
          </h2>
          <p className="mt-4 text-slate text-lg leading-relaxed">
            When you call, you get one of three people — all of whom already
            know your business. No account numbers, no being passed around.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col items-start">
              <div
                className="h-16 w-16 rounded-full bg-ink text-paper flex items-center justify-center font-serif text-lg font-semibold"
                aria-hidden="true"
              >
                {person.initials}
              </div>
              <p className="mt-4 font-semibold text-ink">{person.name}</p>
              <p className="text-sm text-slate mt-0.5">{person.role}</p>
            </div>
          ))}
        </div>

        <a
          href="/about"
          className="mt-12 inline-flex items-center gap-2 text-ink font-medium border-b-2 border-rust pb-1 hover:gap-3 transition-all"
        >
          Meet the full team →
        </a>
      </div>
    </section>
  );
}
