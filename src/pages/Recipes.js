import RecipeSearches from "../components/RecipeSearches"
import RecipeCard from "../components/RecipeCard"
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUtensils } from "@fortawesome/free-solid-svg-icons"
import "../styles/partials/_recipedetails.scss";

export default function Recipes(){
    // const recipes = [
    //     {
    //         title: "Chicken Pan Pizza",
    //         image: "/img/gallery/img_1.jpg",
    //         authorImg: "/img/top-chiefs/img_1.jpg",
    //     }, 
    //     {
    //         title: "Spaghetti and Meatballs",
    //         image: "/img/gallery/img_4.jpg",
    //         authorImg: "/img/top-chiefs/img_2.jpg",
    //     },
    //     {
    //         title: "American Cheese Burger",
    //         image: "/img/gallery/img_5.jpg",
    //         authorImg: "/img/top-chiefs/img_3.jpg",
    //     },
    //     {
    //         title: "Mutton Biriyani",
    //         image: "/img/gallery/img_6.jpg",
    //         authorImg: "/img/top-chiefs/img_5.jpg",
    //     },
    //     {
    //         title: "Japanese Sushi",
    //         image: "/img/gallery/img_10.jpg",
    //         authorImg: "/img/top-chiefs/img_6.jpg",
    //     },
    //     {
    //         title: "Chicken Pan Pizza",
    //         image: "/img/gallery/img_1.jpg",
    //         authorImg: "/img/top-chiefs/img_1.jpg",
    //     }, 
    //     {
    //         title: "Spaghetti and Meatballs",
    //         image: "/img/gallery/img_4.jpg",
    //         authorImg: "/img/top-chiefs/img_2.jpg",
    //     },
    //     {
    //         title: "American Cheese Burger",
    //         image: "/img/gallery/img_5.jpg",
    //         authorImg: "/img/top-chiefs/img_3.jpg",
    //     },
    //     {
    //         title: "Mutton Biriyani",
    //         image: "/img/gallery/img_6.jpg",
    //         authorImg: "/img/top-chiefs/img_5.jpg",
    //     },
    //     {
    //         title: "Japanese Sushi",
    //         image: "/img/gallery/img_10.jpg",
    //         authorImg: "/img/top-chiefs/img_6.jpg",
    //     },
    //     {
    //         title: "American Cheese Burger",
    //         image: "/img/gallery/img_5.jpg",
    //         authorImg: "/img/top-chiefs/img_3.jpg",
    //     },
    //     {
    //         title: "Mutton Biriyani",
    //         image: "/img/gallery/img_6.jpg",
    //         authorImg: "/img/top-chiefs/img_5.jpg",
    //     }
    // ].sort(() => Math.random() - 0.5)
   
    const [recipes, setRecipes] = useState([]);
    const [userSearch, setUserSearch] = useState("");

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearch}`

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(url)
       .then((result) => {
           console.log(result);
           setRecipes(result.data.meals)
    
       })
       .catch((err) => {
          setRecipes(null)
           
       })
    }
  
   

    return(
        <div className="recipe-searches section">
             <div >
            <h2><FontAwesomeIcon icon={faUtensils} />  Recipe Searches</h2>
          
            <div className="search-box">
                <form onSubmit={handleSubmit}>

                <input 
                    type="text" 
                    placeholder="Search for a recipe..." 
                    name="userSearch" 
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                />
                <button className="btn" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                </form>
            </div>
         </div>
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes === null ? "Recipe Not Found" :  
                recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
               
            </div>
        </div>
    )
}