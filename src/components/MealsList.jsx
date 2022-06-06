import { Meal } from "./MealsItem";
import {useHistory} from 'react-router-dom'

function MealsList({ meals }) {
  const { goBack } = useHistory();

  return (
  <>
    <button className="butn__gb" onClick={goBack}>Go Back</button>
    <div className="list">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
    <button className="butn__gb" onClick={goBack}>Go Back</button>

  </>
  );
}

export { MealsList };
