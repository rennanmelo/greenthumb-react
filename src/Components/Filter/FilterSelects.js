const FilterSelects = (props) => {
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
        <select id={select.id} className="filter__select" defaultValue="null">
          <option disabled value="null">
            Select...
          </option>
          {buildOptions(select)}
        </select>
      </fieldset>
    ));
  };

  return <>{buildSelects()}</>;
};

export default FilterSelects;
