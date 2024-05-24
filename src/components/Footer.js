import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faFacebookSquare, faInstagram, faInstagramSquare, faTwitter, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope, faAddressBook, faMapMarker, faLocation, faMapLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-section">
                <p className="title"><FontAwesomeIcon icon={faLink}/>  therecipehub.com</p>
                <p>FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
                <p>&copy; 2021 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title"><FontAwesomeIcon icon={faAddressBook}/>  Contact Us</p>
                <p><FontAwesomeIcon icon={faEnvelope}/>  therecipehub@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone}/> +977 9861906090</p>
                <p><FontAwesomeIcon icon={faMapLocationDot}/>  Balkumar, Lalitpur</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p><FontAwesomeIcon icon={faFacebookSquare}/>  Facebook</p>
                <p><FontAwesomeIcon icon={faTwitterSquare}/>  Twitter</p>
                <p><FontAwesomeIcon icon={faInstagramSquare}/>  Instagram</p>
            </div>
        </div>
    )
}