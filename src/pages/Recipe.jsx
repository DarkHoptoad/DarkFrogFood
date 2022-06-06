import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(idMeal).then((data) => setRecipe(data.meals[0]));
  }, [idMeal]);
  return (
    <>
      <button className="butn__gb butn__gb--rp" onClick={goBack}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="meal">
          <div className="meal__img">
            <img
              className="img"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
          </div>
          <div className="meal__content">
            <div>
              <h1 className="meal__title">{recipe.strMeal}</h1>
            </div>
            <div className="meal__A__T">
              <span className="meal__category">
                Category: {recipe.strCategory}
              </span>

              {recipe.strArea ? (
                <span className="meal__area">Area: {recipe.strArea}</span>
              ) : null}

              <span className="meal__tags">Tags: {recipe.strTags}</span>
            </div>
            <div className="meal__instr">
              <span className="meal__instructions">Instruction:</span>{" "}
              {recipe.strInstructions}
            </div>

            <table className="centered">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>

            <div className="meal__video">
              {recipe.strYoutube ? (
                <div className="row">
                  <h5 className="video">Video Recipe</h5>
                  <iframe
                    title={idMeal}
                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                      -11
                    )}`}
                    allowfullscreen
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
      <button className="butn__gb" onClick={goBack}>
        Go Back
      </button>
    </>
  );
}

export { Recipe };
