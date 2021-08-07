import "./Filter.css";

const Filter = () => {
  return (
    <section id="filter" className="filter">
      <div className="container">
        <form className="filter__form">
          <fieldset className="filter__item">
            <label htmlFor="sun" className="filter__label">
              <b>1.</b> Set the amount of <b>sunlight</b> your plant will get.
            </label>
            <select id="sun" className="filter__select" defaultValue="null">
              <option disabled value="null">
                Select...
              </option>
              <option value="no">No sunlight</option>
              <option value="low">Low sunlight</option>
              <option value="high">High sunlight</option>
            </select>
          </fieldset>
          <fieldset className="filter__item">
            <label
              htmlFor="water"
              className="filter__label filter__label--center"
            >
              <b>2.</b> How often do you want to
              <b>water</b> your plant?
            </label>
            <select id="water" className="filter__select" defaultValue="null">
              <option disabled value="null">
                Select...
              </option>
              <option value="rarely">Rarely</option>
              <option value="regularly">Regularly</option>
              <option value="daily">Daily</option>
            </select>
          </fieldset>
          <fieldset className="filter__item">
            <label htmlFor="pets" className="filter__label filter__label--last">
              <b>3.</b> Do you have pets? Do they
              <b>chew</b>
              plants?
            </label>
            <select id="pets" className="filter__select" defaultValue="null">
              <option disabled value="null">
                Select...
              </option>
              <option value="false">No/They don't care</option>
              <option value="true">Yes</option>
            </select>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Filter;
