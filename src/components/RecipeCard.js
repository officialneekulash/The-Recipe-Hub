import CustomImage from "./CustomImage"
import { Link, useParams } from "react-router-dom";

export default function RecipeCard({recipe}){
  


    return(
        <div className="recipes-card">
            <CustomImage imgSrc={recipe.strMealThumb} pt="65%" />
            <div className="recipe-card-info"> 
               
                <p className="recipe-title">{recipe.strMeal}</p>
                <Link to={`/recipedetails/${recipe.idMeal}`}>
                    See Recipe
                </Link>
            </div>
        </div>
    )
}