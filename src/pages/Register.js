import { useState } from "react";
import "../styles/partials/_login.scss";
import "../styles/partials/_register.scss";
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faLock,faUserPlus } from "@fortawesome/free-solid-svg-icons"

export default function Register(){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const onChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: formData.username,
            password: formData.password,
        }

        axios.post("http://localhost:8080/api/v1/user/register", data)
        .then((result) => {
            if(result){
                window.location.href = "/"
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return(
      <>
      <h2>Register Your New Account:</h2><br/>
       <div className="register">
        <form onSubmit={handleSubmit}>
       
        <label >
          <FontAwesomeIcon icon={faPeopleGroup}/> 
          <b>Username:</b>
          <br/>
          <br/>
        <input className="un"
          type="text" 
          placeholder="create username...."
          name="username"
          value={formData.username}
          onChange={onChange}
        />
        </label><br/>

        <label >
          <FontAwesomeIcon icon={faLock}/>
          <b>Password:</b>
          <br/>
          <br/>
        <input className="pw"
          type="password" 
          placeholder="create password...."
          name="password"
          value={formData.password}
          onChange={onChange}

        />
        </label><br/>

        <button className="btn" type="submit">
          <FontAwesomeIcon icon={faUserPlus} /> Register
        </button>
        </form>

      </div>
    </>
    )
}