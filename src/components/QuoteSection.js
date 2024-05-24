import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection(){
    return (
        <div className= "section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>
                A recipe has no soul. You, as the cook, must bring soul to the recipe.
            </p>
            <p className="quote-auther"> -Thomas Keller </p>
        </div>
    )
}