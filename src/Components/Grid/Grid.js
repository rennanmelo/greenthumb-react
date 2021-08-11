import "./Grid.css";

const Grid = (props) => {
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
                <div className="grid__icons"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Grid;
