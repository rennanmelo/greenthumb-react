import "./Results.css";
import imgNoResults from "../../images/no-results.png";
import imgPick from "../../images/pick.png";
import Grid from "../Grid/Grid";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Results = (props) => {
  return (
    <section id="results" className="results">
      <div className="container">
        <div id="no-results" className="results__content">
          <div className="results__text">
            <h2 className="results__title">No results yet...</h2>
            <p className="results__description">
              Use the filters above to find the plant that best fits your
              environment :)
            </p>
          </div>
          <img className="results__image" src={imgNoResults} alt="No results" />
        </div>
        <div
          id="with-results"
          className="results__content results__content--filtered"
        >
          <img className="results__logo" src={imgPick} alt="Picks for you" />
          <h2 className="results__title">Our picks for you</h2>
          <Grid plants={props.plants} />
          <AnchorLink className="results__button" href="#hero">
            <span className="results__icon"></span> to top
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Results;
