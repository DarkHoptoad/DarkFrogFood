import { useParams } from "react-router-dom";
import { filterByCategories } from "../api";
import { useState, useEffect } from "react";
import {Preloader} from '../components/Preloader'
import {MealsList} from '../components/MealsList'
function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([])

  useEffect(() => {
    filterByCategories(name).then(data => setMeals(data.meals))
  }, [name]);

  return <>
  {!meals.length ? <Preloader /> : <MealsList meals={meals} />}</>
}

export { Category };
