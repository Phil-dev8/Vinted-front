import logo from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="header">
        <img src={logo} alt="logo de la marque" />
        <input
          className="header-input"
          type="text"
          placeholder="Rechercher des articles"
        />
        <div className="button">
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <button className="sale-it">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
