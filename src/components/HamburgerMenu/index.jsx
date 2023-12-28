import './style.css';
import { useState } from 'react';

export const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hamburgerMenu">
        <button
          className={!isOpen ? 'hamburger' : 'hamburger hamburger--otevrene'}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isOpen ? (
        <nav className="hamburger-nav">
          <a href="#about">O nás</a>
          <a href="#rooms">Katalog pokojů</a>
          <a href="#rooms">Objednat ubytování</a>
          <a href="#contact">Kontakt</a>
        </nav>
      ) : null}
    </>
  );
};

export const HamburgerMenu = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="hamburger-menu__container">
          <nav className="hamburger-nav">
            <a href="#about">O nás</a>
            <a href="#rooms">Katalog pokojů</a>
            <a href="#rooms">Objednat ubytování</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      ) : null}
    </>
  );
};
