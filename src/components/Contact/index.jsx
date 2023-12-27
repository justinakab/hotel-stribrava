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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40558.23572011601!2d13.853018648875143!3d50.55482056756088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47098655aa84d4d3%3A0xcc05da9a039c4f4b!2sChata%20Mile%C5%A1ovka!5e0!3m2!1scs!2scz!4v1703703269012!5m2!1scs!2scz"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};
