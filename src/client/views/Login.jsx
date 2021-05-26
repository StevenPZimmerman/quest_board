import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
      fetch("/characters")
        .then((res) => res.json())
        .then((data) => setCharacters(data));
    }, []);



return (
    <div>
<p>You made it to the login screen.</p>
<input type="text" name="familyLogin" id="familyLogin" />
<input type="text" name="familyPassword" id="familyPassword" />

<h3>Select Hero</h3>
{characters.map((character) =>(
    <div>
        <button>{character.CharacterName}</button>
    </div>


))}

<br />
 <h2>Quest Manager</h2>
 <input type="number" name="enterQM" id="enterQM" placeholder="PIN"/>
 <Link to="/Manager" className="activeNav" className="navLink">
        <img className="image" src="../img/sign_1.jpg" alt="welcomeImage" />
      </Link>



        </div>
)


}

export default Login;