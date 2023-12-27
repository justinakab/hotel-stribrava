import './style.css';

export const Banner = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="banner__background">
        <div className="small-stripe"></div>
        <div className="banner__stripe">
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
      </div>
    </>
  );
};

{
  /* <h1 className="banner__h1">Hotel Stříbrava</h1>
          <p className="banner__p">
            Rodinný hotel v malebné krajině Českého středohoří.
          </p> */
}
