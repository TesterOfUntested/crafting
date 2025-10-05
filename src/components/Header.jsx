export default function Header({ onOpenLogin }) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title" style={{margin: 0}}>
          <img src="./photos/Kingacrafts-logo.png" alt="Kingacrafts logo" className="header-logo-img" style={{height: '100%', width: 'auto', display: 'block'}} />
        </h1>
        <nav className="header-nav">
          <a href="#about" className="header-link">O mnie</a>
          <a href="#projects" className="header-link">Projekty</a>
          <a href="#contact" className="header-link">Kontakt</a>
          <a 
            href="#header" 
            onClick={(e) => { e.preventDefault(); onOpenLogin(); }} 
            className="header-link"
            role="button"
            tabIndex={0}
          >
            Zaloguj
          </a>
        </nav>
      </div>
    </header>
  )
}
  