export default function Projects() {
  return (
    <section id="projects" className="py-20 px-2 bg-transparent rounded-3xl mt-12">
      <h2 className="projects-title">
        Projekty
      </h2>
  <div className="projects-grid">
        {/* Projekt 1 */}
        <div className="project-card">
          <img
            src="/photos/photo_coffee.jpeg"
            alt="Sweter Zimowy poranek"
            className="project-img"
          />
          <h3 className="project-name">Sweter "Zimowy poranek"</h3>
          <p className="project-desc">Ciepły, ręcznie robiony sweter z wełny merino, idealny na chłodne dni.</p>
        </div>
        {/* Projekt 2 */}
        <div className="project-card">
          <img
            src="/photos/photo_layer.jpeg"
            alt="Kardigan Jesienny liść"
            className="project-img"
          />
          <h3 className="project-name">Kardigan "Jesienny liść"</h3>
          <p className="project-desc">Lekki kardigan z mieszanki bawełny, ozdobiony delikatnym wzorem liści.</p>
        </div>
        {/* Projekt 3 */}
        <div className="project-card">
          <img
            src="/photos/photo_phone.jpeg"
            alt="Chusta Letni wiatr"
            className="project-img"
          />
          <h3 className="project-name">Chusta "Letni wiatr"</h3>
          <p className="project-desc">Przewiewna chusta z lnu, idealna jako dodatek do letnich stylizacji.</p>
        </div>
      </div>
    </section>
  )
}
  