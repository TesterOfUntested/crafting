export default function Contact() {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2 className="contact-title">Kontakt</h2>
      <p className="contact-desc">Masz pytania lub propozycję współpracy? Odezwij się lub zajrzyj na moje profile!</p>
      <div className="contact-links">
        <a
          href="https://www.instagram.com/kingacrafts/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="contact-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9.75 2.25h.008v.008h-.008v-.008zM12 8.25A3.75 3.75 0 1 0 12 15.75a3.75 3.75 0 0 0 0-7.5z" />
          </svg>
          Instagram
        </a>
        <a
          href="https://www.ravelry.com/stores/kingacrafts"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="contact-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H6.4" />
            <circle cx="10" cy="19" r="1" />
            <circle cx="17" cy="19" r="1" />
          </svg>
          Ravelry
        </a>
        <a
          href="https://linktr.ee/kingacrafts"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="contact-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
          </svg>
          Wszystkie linki
        </a>
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc1TyGvrrcJxUmDcga5YBulPm4w7eF3VjR_qBK4kFvdgPPw6w/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-mail"
      >
        Zamów wzór!
      </a>
    </section>
  )
}
  