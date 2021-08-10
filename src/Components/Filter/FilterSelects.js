const FilterSelects = (props) => {
  let filterValues = {};

  const buildOptions = (select) => {
    return select.options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    ));
  };

  const buildLabel = (select) => (
    <label
      htmlFor={select.id}
      className={`filter__label ${select.label.modifier}`}
    >
      {select.label.text}
    </label>
  );

  const buildSelects = () => {
    return props.selects.map((select) => (
      <fieldset className="filter__item" key={select.id}>
        {buildLabel(select)}
        <select
          id={select.id}
          className="filter__select"
          defaultValue="null"
          onChange={onChangeSelect}
        >
          <option disabled value="null">
            Select...
          </option>
          {buildOptions(select)}
        </select>
      </fieldset>
    ));
  };

  const onChangeSelect = (event) => {
    filterValues[event.target.id] = event.target.value;

    if (Object.keys(filterValues).length === 3) {
      props.handleFilterChange(filterValues);
    }
  };

  return <>{buildSelects()}</>;
};

export default FilterSelects;
