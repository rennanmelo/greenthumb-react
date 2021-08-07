import "./Filter.css";

const Filter = () => {
  const selectItems = [
    {
      id: "sun",
      label: {
        text: "1. Set the amount of sunlight your plant will get.",
        modifier: "",
      },
      options: [
        {
          value: "no",
          text: "No sunlight",
        },
        {
          value: "low",
          text: "Low sunlight",
        },
        {
          value: "high",
          text: "High sunlight",
        },
      ],
    },
    {
      id: "water",
      label: {
        text: "2. How often do you want to water your plant?",
        modifier: "filter__label--center",
      },
      options: [
        {
          value: "rarely",
          text: "Rarely",
        },
        {
          value: "regularly",
          text: "Regularly",
        },
        {
          value: "daily",
          text: "Daily",
        },
      ],
    },
    {
      id: "pets",
      label: {
        text: "3. Do you have pets? Do they chew plants?",
        modifier: "filter__label--last",
      },
      options: [
        {
          value: "false",
          text: "No/They don't care",
        },
        {
          value: "true",
          text: "Yes",
        },
      ],
    },
  ];

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

  const buildSelects = (selectItems) => {
    return selectItems.map((select) => (
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

  return (
    <section id="filter" className="filter">
      <div className="container">
        <form className="filter__form">{buildSelects(selectItems)}</form>
      </div>
    </section>
  );
};

export default Filter;
