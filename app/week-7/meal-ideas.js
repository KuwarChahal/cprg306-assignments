"use client";
import React, { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return [];
        }
    };

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };

    useEffect(() => {
        if(ingredient){
          loadMealIdeas();
        }
        else {
          setMeals([]);
        }
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Meal Ideas with {ingredient}</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-32 h-32 rounded-full" />
                        <span className="ml-2">{meal.strMeal}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;
