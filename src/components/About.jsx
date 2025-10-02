export default function About() {
    return (
      <section id="about" className="about-section">
        {/* Lewa strona - miejsce na zdjęcie */}
        <div className="about-photo">
          <img 
            src="./photos/photo_K.jpeg" 
            alt="Kinga Bigos" 
            className="about-img" 
          />
        </div>
        
        {/* Prawa strona - treść O mnie */}
        <div className="about-content">
          <h2 className="about-title">O mnie</h2>
          <p className="about-text">
            Cześć! Nazywam się Kinga Bigos i tworzę z włóczki swetry oraz inne okrycia. 🧶
          </p>
          <p className="about-text mt">Moją pasją jest tworzenie na drutach swetrów i okryć z najwyższą dbałością o detale.</p>
        </div>
      </section>
    )
  }
  