import "./_header.scss";
import logoBlog from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <div>
      <header>
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
              <button>Login</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
