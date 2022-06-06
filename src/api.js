import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);

  return await response.json();
};

const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");

  return await response.json();
};

const filterByCategories = async (name) => {
  const response = await fetch(API_URL + "filter.php?c=" + name);

  return await response.json();
};

const filterByArea = async (areaName) => {
  const response = await fetch(API_URL + "filter.php?a=" + areaName);

  return await response.json();
};

const allMealsByFirstLiter = async (firstLater) => {
  const response = await fetch(API_URL + "search.php?f=" + firstLater);

  return await response.json();
};

const searchByName = async (name) => {
  const response = await fetch(API_URL + "search.php?s=" + name);

  return await response.json();
};

export {
  getAllCategories,
  getMealById,
  searchByName,
  allMealsByFirstLiter,
  filterByArea,
  filterByCategories,
};
