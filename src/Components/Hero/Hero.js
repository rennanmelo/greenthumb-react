import "./Hero.css";
import logoWhite from "../../images/logo-white.svg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__illustration">
        <div className="hero__content">
          <div className="container">
            <img className="hero__logo" alt="Greenthumb" src={logoWhite} />
            <h1 className="hero__title">Find your next green friend</h1>
            <a className="hero__button" href="#filter">
              <span className="hero__icon"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
