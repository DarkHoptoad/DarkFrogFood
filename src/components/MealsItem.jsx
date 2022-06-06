import { Link } from "react-router-dom";
function Meal(props) {
  const { idMeal, strMeal: nameMeal, strMealThumb: imgMeal } = props;

  return (
    <>
    <div className="card">
      <div className="card-image">
        <img src={imgMeal} alt={nameMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{nameMeal}</span>
        <Link className="butn" to={`/meal/${idMeal}`}>
          Watch Recipe
        </Link>
      </div>
    </div>
    </>
  );
}

export { Meal };
