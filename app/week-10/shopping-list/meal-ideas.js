"use client";
import React, { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error("Error fetching meal details:", error);
      return null;
    }
  };

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const mealList = await fetchMealIdeas(ingredient);
    setMeals(mealList);
    setSelectedMeal(null);
  };

  const loadMealDetails = async (mealId) => {
    const mealDetails = await fetchMealDetails(mealId);
    setSelectedMeal(mealDetails);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  return (
    <div className="flex">
      <div className="ml-10 mr-10">
        <h2 className="text-2xl font-bold mb-4">Meal Ideas: {ingredient}</h2>
        {meals.length > 0 && (
          <ul>
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="flex items-center mb-4 hover:bg-orange-900"
                onClick={() => loadMealDetails(meal.idMeal)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-16 h-16 rounded-full"
                />
                <span className="ml-4">{meal.strMeal}</span>
              </li>
            ))}
          </ul>
        )}
        {!selectedMeal && meals.length === 0 && ingredient && (
          <p>No meal ideas found for {ingredient}</p>
        )}
      </div>
      {selectedMeal && (
        <div className="ml-10 mr-10">
          <h3 className="text-2xl font-bold mt-4">Ingredients for {selectedMeal.strMeal}</h3>
          <ul className="list-disc ml-8 mt-4">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
              const ingredientKey = `strIngredient${index}`;
              const measureKey = `strMeasure${index}`;
              const ingredient = selectedMeal[ingredientKey];
              const measure = selectedMeal[measureKey];

              if (ingredient && ingredient.trim() !== "") {
                return (
                  <li key={index} className="mb-2">
                    {`${measure ? `${measure} ` : ""}${ingredient}`}
                  </li>
                );
              }

              return null;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MealIdeas;