import './style.css';

export const DesktopMenu = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 195; // Adjust this value as needed
      const offsetTop = section.offsetTop - offset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="menuDesktop">
      <nav>
        <a href="#home" onClick={() => scrollToSection('home')}>
          O nás
        </a>
        <a href="#about" onClick={() => scrollToSection('rooms')}>
          Katalog pokojů
        </a>
        <div className="logo">
          <img className="logo__img" src="images/logo_white.png" alt="" />
        </div>
        <a href="#services" onClick={() => scrollToSection('rooms')}>
          Objednat ubytování
        </a>
        <a href="#kontakt" onClick={() => scrollToSection('contact')}>
          Kontakt
        </a>
      </nav>
    </div>
  );
};
