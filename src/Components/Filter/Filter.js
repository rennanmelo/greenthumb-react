import FilterSelects from "./FilterSelects";
import "./Filter.css";

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

const Filter = () => {
  const handleFilterChange = (selectInfo) => {
    apiCall(selectInfo);
  };

  const apiCall = (filters) => {
    fetch(
      `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${filters.sun}&water=${filters.water}&pets=${filters.pets}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.warn("Something went wrong. ", err);
      });
  };

  return (
    <section id="filter" className="filter">
      <div className="container">
        <form className="filter__form">
          <FilterSelects
            selects={selectItems}
            handleFilterChange={handleFilterChange}
          />
        </form>
      </div>
    </section>
  );
};

export default Filter;
