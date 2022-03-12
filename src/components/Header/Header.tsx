import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo-expense.svg";
import { CHARTS, HOME } from "../../utils/Constants/RoutesPath";

import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to={HOME} className="nav__item nav__item--link">
          <img
            src={logo}
            alt={"Expense Logo"}
            className="nav__item nav__item--logo"
          />
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={HOME} className="nav__item nav__item--link">
              <svg
                className="nav__item nav__item--icon"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5781 15.7812L16.7062 2.91875C16.6136 2.82589 16.5035 2.75221 16.3823 2.70195C16.2611 2.65168 16.1312 2.62581 16 2.62581C15.8688 2.62581 15.7389 2.65168 15.6177 2.70195C15.4965 2.75221 15.3864 2.82589 15.2937 2.91875L2.42188 15.7812C2.04688 16.1562 1.83438 16.6656 1.83438 17.1969C1.83438 18.3 2.73125 19.1969 3.83437 19.1969H5.19062V28.375C5.19062 28.9281 5.6375 29.375 6.19062 29.375H14V22.375H17.5V29.375H25.8094C26.3625 29.375 26.8094 28.9281 26.8094 28.375V19.1969H28.1656C28.6969 19.1969 29.2062 18.9875 29.5812 18.6094C30.3594 17.8281 30.3594 16.5625 29.5781 15.7812Z"
                  fill="white"
                />
              </svg>
              home
            </Link>
          </li>
          <li className="nav__item">
            <Link to={CHARTS} className="nav__item nav__item--link">
              <svg
                className="nav__item nav__item--icon"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M46.5 46.5H1.5V1.5H4.5V43.5H46.5V46.5Z" fill="white" />
                <path d="M18 40.5H7.5V19.5H18V40.5Z" fill="white" />
                <path d="M31.5 40.5H21V15H31.5V40.5Z" fill="white" />
                <path d="M44.9662 40.5H34.4662V9H44.9662V40.5Z" fill="white" />
              </svg>
              Charts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
