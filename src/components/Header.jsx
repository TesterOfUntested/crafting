export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#f5f3ed] via-[#e6e3d6] to-[#bfae99] text-[#5b4a36] py-8 shadow-lg border-b-4 border-[#5b4a36]">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold font-pacifico leading-[1.3] pb-2 bg-gradient-to-r from-[#8a9a7b] via-[#bfae99] to-[#5b4a36] bg-clip-text text-transparent drop-shadow flex items-center gap-2">
          <svg className="w-7 h-7 text-[#8a9a7b]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
          Knitting with Kinga
        </h1>
        <nav className="space-x-6">
          <a href="#about" className="text-[#6e6b5e] hover:text-[#5b4a36] transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-[#8a9a7b] pb-1">
            O mnie
          </a>
          <a href="#projects" className="text-[#6e6b5e] hover:text-[#5b4a36] transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-[#8a9a7b] pb-1">
            Projekty
          </a>
          <a href="#contact" className="text-[#6e6b5e] hover:text-[#5b4a36] transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-[#8a9a7b] pb-1">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  )
}
  