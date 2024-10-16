import "./_header.scss";
import { Link } from "react-router-dom";
import logoBlog from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <div>
      <header className="container-header">
        <nav>
            <div className="logo">
              <img src={logoBlog} alt="" />
              <h1>The Day JS.</h1>
            </div>
          <ul>
            <li>
              <input type="text" placeholder="Search for something" />
            </li>
            <li>
              <Link to="/entrar">Logar</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
