import axios from "axios";
import { useEffect,useState } from "react";
import { useParams,Link } from "react-router-dom"
import "../styles/partials/_recipedetails.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";


// import { param } from "../../backend/routes/user";

export default function RecipeDetails (){
    const {id} = useParams();

    const [recipeDetails, setRecipeDetails] = useState([]);
    
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((result) => {
            console.log(result)
            setRecipeDetails(result.data.meals[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    // console.log(typeof(recipeDetails))

    let keyOnly = Object.keys(recipeDetails);
     
    const hel = keyOnly[0];
    // console.log(hel);
    // console.log(keyOnly)
    // console.log({recipeDetails.keyOnly.0})
    // let parameter = recipeDetails.keyOnly[0];

  

    // console.log(id)

    return (
        <a>
            <a className="area">
               <h2>Prefered by:</h2>
               <FontAwesomeIcon icon={faArrowAltCircleRight}/><p className="aa"> {recipeDetails.strArea}</p>
            </a><br/><br/>
            <a className="ingredients">
                <h2>Ingredients:</h2>
                <FontAwesomeIcon icon={faArrowAltCircleRight}/><p className="bb">
                 {recipeDetails.strIngredient1}<br/>
                    {recipeDetails.strIngredient2}<br/>
                    {recipeDetails.strIngredient3}<br/>
                    {recipeDetails.strIngredient4}<br/>
                    {recipeDetails.strIngredient5}<br/>
                    {recipeDetails.strIngredient6}<br/>
                    {recipeDetails.strIngredient7}<br/>
                    {recipeDetails.strIngredient8}<br/>
                    {recipeDetails.strIngredient9} <br/>
                    {recipeDetails.strIngredient10}<br/>
                    {recipeDetails.strIngredient11}<br/>
                    {recipeDetails.strIngredient12}<br/>
                    {recipeDetails.strIngredient13}<br/>
                    {recipeDetails.strIngredient14}<br/>
                    {recipeDetails.strIngredient15}<br/>
                    {recipeDetails.strIngredient16}<br/>
                    {recipeDetails.strIngredient17}<br/>
                    {recipeDetails.strIngredient18}<br/>
                    {recipeDetails.strIngredient19}<br/>
                    {recipeDetails.strIngredient20}<br/>
                </p>
            </a><br/><br/>
            <a className="instructions">
                <h2>Instructions:</h2>
                <FontAwesomeIcon icon={faArrowAltCircleRight}/><p className="cc"> {recipeDetails.strInstructions} </p>
            </a><br/><br/>
            <Link className="youtube" to={recipeDetails.strYoutube} target="#">
                <h2>CLICK HERE TO WATCH VIDEO</h2>
            </Link>
        </a>
    )
}