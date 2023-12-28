import { DesktopMenu } from '../DesktopMenu';
import { HamburgerIcon, HamburgerMenu } from '../HamburgerMenu';
import './style.css';

export const Banner = () => {
  return (
    <>
      <div className="banner__background">
        <div className="banner__top">
          <div className="small-stripe"></div>
          <div className="banner__stripe">
            <div className="logo--hamburger">
              <img
                className="logo__img--hamburger"
                src="images/logo_white.png"
                alt=""
              />
            </div>
            <DesktopMenu></DesktopMenu>
            <HamburgerIcon></HamburgerIcon>
          </div>
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
