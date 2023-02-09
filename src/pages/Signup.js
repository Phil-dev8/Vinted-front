import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: false,
        }
      );
      setSubmit(response.data);
      console.log(response.data);
      Cookies.set("token", response.data.account.token);
      console.log(Cookies);
    } catch (error) {
      console.log(error.response, "NOWAY");
    }
  };

  return (
    <div>
      <h1>S'inscrire</h1>
      <form
        onSubmit={fetchData}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          style={{ width: "150px" }}
          value={username}
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          style={{ width: "150px" }}
          value={email}
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          style={{ width: "150px" }}
          value={password}
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="checkbox" />

        <p>
          En m'inscrivant je confirme avoir lu et accepté les Terme & Conditions
          et Politique de Confidentialité de Vinted. Je confirme avoir au moins
          18 ans.
        </p>
      </form>
      <button type="submit" style={{ backgroundColor: "#2aaeb7" }}>
        S'enregistrer !
      </button>
      <Link to="/login"> Tu as déjà un compte? Connecte-toi ! </Link>
    </div>
  );
};

export default Signup;
