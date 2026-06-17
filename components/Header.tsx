import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-semibold text-ink tracking-tight">
          Harrow &amp; Cole
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          <Link href="#services" className="hover:text-ink transition-colors">
            Services
          </Link>
          <Link href="#about" className="hover:text-ink transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-ink transition-colors">
            Contact
          </Link>
        </nav>
        <Link
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-full bg-ink text-paper text-sm font-medium px-5 py-2.5 hover:bg-rust transition-colors"
        >
          Book a consultation
        </Link>
      </div>
    </header>
  );
}
