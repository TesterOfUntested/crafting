export default function Projects() {
  return (
    <section id="projects" className="py-20 px-2 bg-transparent rounded-3xl mt-12">
      <h2 className="text-4xl font-extrabold mb-14 text-center text-[#5b4a36] tracking-tight">
        Projekty
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
        {/* Projekt 1 */}
        <div className="flex flex-col items-center bg-[#bfae99]/60 rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:bg-[#8a9a7b]/60 border border-[#8a9a7b]">
          <img
            src="/photos/photo_coffee.jpeg"
            alt="Sweter Zimowy poranek"
            className="object-contain max-h-[28rem] w-full rounded-2xl mb-8"
          />
          <h3 className="font-bold text-xl mb-2 text-[#3a2c1a] text-center">Sweter "Zimowy poranek"</h3>
          <p className="text-[#5b4a36] text-base text-center">Ciepły, ręcznie robiony sweter z wełny merino, idealny na chłodne dni.</p>
        </div>
        {/* Projekt 2 */}
        <div className="flex flex-col items-center bg-[#bfae99]/60 rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:bg-[#8a9a7b]/60 border border-[#8a9a7b]">
          <img
            src="/photos/photo_layer.jpeg"
            alt="Kardigan Jesienny liść"
            className="object-contain max-h-[28rem] w-full rounded-2xl mb-8"
          />
          <h3 className="font-bold text-xl mb-2 text-[#3a2c1a] text-center">Kardigan "Jesienny liść"</h3>
          <p className="text-[#5b4a36] text-base text-center">Lekki kardigan z mieszanki bawełny, ozdobiony delikatnym wzorem liści.</p>
        </div>
        {/* Projekt 3 */}
        <div className="flex flex-col items-center bg-[#bfae99]/60 rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:bg-[#8a9a7b]/60 border border-[#8a9a7b]">
          <img
            src="/photos/photo_phone.jpeg"
            alt="Chusta Letni wiatr"
            className="object-contain max-h-[28rem] w-full rounded-2xl mb-8"
          />
          <h3 className="font-bold text-xl mb-2 text-[#3a2c1a] text-center">Chusta "Letni wiatr"</h3>
          <p className="text-[#5b4a36] text-base text-center">Przewiewna chusta z lnu, idealna jako dodatek do letnich stylizacji.</p>
        </div>
      </div>
    </section>
  )
}
  