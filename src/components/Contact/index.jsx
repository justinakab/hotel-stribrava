import './style.css';

export const Contact = () => {
  return (
    <div className="container container__contact">
      <div className="container--left">
        <h1>Kontakt</h1>
        <p>
          Hotel Stříbrava<br></br>
          Ke Kamenné lávce 12<br></br>
          317 24 Libnice nad Stříbravou
        </p>
        <a href="recepce@hotelstribrava.cz" type="email">
          recepce@hotelstribrava.cz
        </a>
      </div>
      <div className="container--right">
        <div className="contact__map">
          <img className="contact__map--img" src="images/map.png" alt="mapa" />
        </div>
      </div>
    </div>
  );
};
