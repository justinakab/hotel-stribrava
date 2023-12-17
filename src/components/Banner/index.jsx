import './style.css';

export const Banner = () => {
  return (
    <div className="banner__background">
      <div className="banner__stripe">
        <div className="banner__info container">
          <h1 className="banner__h1">Hotel Stříbrava</h1>
          <p className="banner__p">
            Rodinný hotel v malebné krajině Českého středohoří.
          </p>
        </div>
      </div>
    </div>
  );
};
