export default function Contact() {
  return (
    <section id="contact" className="w-[90%] mx-auto py-16 px-6 bg-transparent rounded-3xl shadow-inner mt-12 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-[#3a2c1a] border-b-2 border-[#bfae99] inline-block pb-1">Kontakt</h2>
      <p className="mb-8 text-[#5b4a36] text-lg">Masz pytania lub propozycję współpracy? Odezwij się lub zajrzyj na moje profile!</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#bfae99] hover:bg-[#8a9a7b] text-[#3a2c1a] px-6 py-3 rounded-xl font-semibold shadow transition border border-[#8a9a7b]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9.75 2.25h.008v.008h-.008v-.008zM12 8.25A3.75 3.75 0 1 0 12 15.75a3.75 3.75 0 0 0 0-7.5z" />
          </svg>
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#bfae99] hover:bg-[#8a9a7b] text-[#3a2c1a] px-6 py-3 rounded-xl font-semibold shadow transition border border-[#8a9a7b]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25A3.75 3.75 0 0 1 20.25 12v3.75A3.75 3.75 0 0 1 16.5 19.5h-9A3.75 3.75 0 0 1 3.75 15.75V12A3.75 3.75 0 0 1 7.5 8.25h9zm-7.5 3.75v3.75m0-3.75V12a1.5 1.5 0 1 1 3 0v3.75m0-3.75V12a1.5 1.5 0 1 1 3 0v3.75" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://buycoffee.to/krzysztofbigos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#bfae99] hover:bg-[#8a9a7b] text-[#3a2c1a] px-6 py-3 rounded-xl font-semibold shadow transition border border-[#8a9a7b]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21h7.5m-7.5 0a3.75 3.75 0 0 1-3.75-3.75V7.5A3.75 3.75 0 0 1 8.25 3.75h7.5A3.75 3.75 0 0 1 19.5 7.5v9.75A3.75 3.75 0 0 1 15.75 21h-7.5zm0 0v-1.5a3.75 3.75 0 0 1 3.75-3.75h0a3.75 3.75 0 0 1 3.75 3.75V21" />
          </svg>
          Postaw kawę
        </a>
      </div>
      <a
        href="mailto:krzysztof.bigos@example.com"
        className="inline-block bg-[#bfae99] hover:bg-[#8a9a7b] text-[#3a2c1a] px-8 py-3 rounded-xl font-semibold shadow transition mt-2 border border-[#8a9a7b]"
      >
        Napisz maila ✉️
      </a>
    </section>
  )
}
  