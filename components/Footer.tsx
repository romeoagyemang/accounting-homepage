export default function Footer() {
  return (
    <footer className="bg-paper py-10 border-t border-stone">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate">
        <p>© {new Date().getFullYear()} Harrow &amp; Cole Accountants. London, UK.</p>
        <p>Regulated by ICAEW · Company No. 00000000</p>
      </div>
    </footer>
  );
}
