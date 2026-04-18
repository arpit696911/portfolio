// Footer

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center bg-black">
        <p className="text-zinc-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Arpit Verma. Built with React.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">GitHub</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
