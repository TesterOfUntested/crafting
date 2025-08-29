export default function About() {
    return (
      <section id="about" className="h-[80vh] flex bg-transparent mt-8 border-b-4 border-[#5b4a36]">
        {/* Lewa strona - miejsce na zdjęcie */}
        <div className="w-[70%] flex items-center justify-center">
          <img 
            src="/photos/photo_K.jpeg" 
            alt="Kinga Bigos" 
            className="object-cover w-[90%] h-[90%] rounded-xl" 
          />
        </div>
        
        {/* Prawa strona - treść O mnie */}
        <div className="w-[30%] bg-[#5b4a36] p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-[#ede7de] border-b-2 border-[#bfae99] inline-block pb-1">O mnie</h2>
          <p className="text-[#ede7de] leading-relaxed text-base">
            Cześć! Nazywam się Kinga Bigos i tworzę z włóczki swetry oraz inne okrycia. 🧶
          </p>
          <p className="text-[#ede7de] leading-relaxed text-base mt-4">
            Moją pasją jest tworzenie na drutach swetrów i okryć z najwyższą dbałością o detale.
          </p>
        </div>
      </section>
    )
  }
  