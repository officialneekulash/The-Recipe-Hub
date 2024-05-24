import  { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faLock, faSignIn, faUserPlus, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: formData.username,
      password: formData.password,
    };

    axios
      .post("http://localhost:8080/api/v1/user/login", data)
      .then((result) => {
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <div className="login">
        <h2>Login</h2><br/>
      
      <form
        onSubmit={handleSubmit}>
        <label>
        <FontAwesomeIcon icon={faPeopleGroup}/>
            <b>Username:</b>
            <br/><br/>
        <input className="username"
          type="text" 
          placeholder="Enter username...."
          name="username"
          value={formData.username}
          onChange={onChange}
        />
      </label><br/>

      
      <label>
      <FontAwesomeIcon icon={faLock}/>
        <b>Password:</b>
        <br/>
        <br/>
        <input className="password"
          type="password" 
          placeholder="Enter password...."
          name="password"
          value={formData.password}
          onChange={onChange}

        />
      </label><br/>

        <button className="btn" type="submit">
        <FontAwesomeIcon icon={faSignIn}/> Login
        </button>

      </form>
    
      <br/><br/>
        <h2>Create a new account:</h2><br/>
        <a href="/register" className="rgr">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Click Here to Register<FontAwesomeIcon icon={faUserPlus} />
        </a>
        </div>
    </>
    
  );
}