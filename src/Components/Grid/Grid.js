import "./Grid.css";
import noSun from "../../images/no-sun.svg";
import sun from "../../images/low-sun.svg";
import rarelyWater from "../../images/1-drop.svg";
import regularlyWater from "../../images/2-drops.svg";
import dailyWater from "../../images/3-drops.svg";
import toxicity from "../../images/toxic.svg";
import noToxicity from "../../images/pet.svg";

const Grid = (props) => {
  const filterIcons = {
    sunlight: {
      no: noSun,
      low: sun,
      high: sun,
    },
    water: {
      rarely: rarelyWater,
      regularly: regularlyWater,
      daily: dailyWater,
    },
    pets: {
      true: toxicity,
      false: noToxicity,
    },
  };

  return (
    <div className="grid">
      {props.plants &&
        props.plants.map((plant) => (
          <div
            key={plant.name}
            className={`grid__item ${
              plant.staff_favorite === true ? "grid__item--favorite" : ""
            }`}
          >
            <div className="grid__illustration">
              <img className="grid__image" src={plant.url} alt={plant.name} />
            </div>
            <div className="grid__info">
              <h3 className="grid__name">{plant.name}</h3>
              <div className="grid__price-icons">
                <span className="grid__price">${plant.price}</span>
                <div className="grid__icons">
                  <img
                    className="grid__icon"
                    src={filterIcons.sunlight[plant.sun]}
                    alt={plant.sun}
                  />
                  <img
                    className="grid__icon"
                    src={filterIcons.water[plant.water]}
                    alt={plant.water}
                  />
                  <img
                    className="grid__icon"
                    src={filterIcons.pets[plant.toxicity]}
                    alt={plant.pets}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Grid;
