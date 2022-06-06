import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header unselectable">
      <div className="header__content">
        <Link to="/" className="header__logo">
          DarkFrog Food
        </Link>
        <div className="header__nav">
          <ul>
            <li>
              <Link className="nav__link__About" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav__link__Contact" to="/contact">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Header };
