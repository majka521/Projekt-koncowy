import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SingleTransaction } from "./SingleTransaction";

export const SingleStatistic = ({ setStatisticMode, singleStatistic, activeCategory, setActiveCategory, activeCategorySum, setActiveCategorySum, currentlyDateStart, currentlyDateEnd }) => {
  //Sum of currently transactions group
  let sum = 0;
  //Exit button
  const handleExitTransaction = () => {
    setStatisticMode(false);
  };
  return (
    <section className="newTransaction section container singleStatistic">
      <div className="section__header">
        <h2 className="section__title">
          Kategoria wydatków: <span>{activeCategory}</span>
        </h2>
        <p className="section__timePeriod">
          {currentlyDateStart} - {currentlyDateEnd}
        </p>{" "}
        <h2>
          Łącznie kwota wydatków z wybranej kategorii: <span className="statistics__sum">-{activeCategorySum} zł</span>
        </h2>
      </div>
      <button className="btn btn-exit" onClick={handleExitTransaction}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <ul>
        {singleStatistic.map((el) => {
          sum += parseFloat(el.cost);
          return (
            <SingleTransaction
              key={el.id}
              dataID={el.id}
              dataCategory={el.category}
              dataCategoryTitle={el.categoryTitle}
              dataCost={el.cost}
              dataDescription={el.description}
              data={el}
              setActiveCategory={setActiveCategory}
              setActiveCategorySum={setActiveCategorySum}
              sum={sum}
            />
          );
        })}
      </ul>
    </section>
  );
};