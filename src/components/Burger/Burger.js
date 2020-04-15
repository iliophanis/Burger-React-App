import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/Burgeringredient";
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      //igKey took the array string like salad...
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        //i show the number of ingredient
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      // reduce take array initialize as [] and el take the ingredients
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0)
    transformedIngredients = <p>Please start adding ingredient</p>;
  console.log(transformedIngredients);

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
