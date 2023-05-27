import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { Planetdata } from "./PlanetData";

import { useState } from "react";
import MenuTitles from "./MenuTitles";
export default function Header() {
  const [click, setClick] = useState(false);

  return (
    <StyledHeader>
      <h1>The planets</h1>
      <nav>
        <ul>
          <Link to="mercury">
            <li>mercury</li>
          </Link>
          <Link to="earth">
            <li>earth</li>
          </Link>
          <Link to="venus">
            <li>venus</li>
          </Link>
          <Link to="mars">
            <li>mars</li>
          </Link>
          <Link to="jupiter">
            <li>jupiter</li>
          </Link>
          <Link to="saturn">
            <li>saturn</li>
          </Link>
          <Link to="uranus">
            <li>uranus</li>
          </Link>
          <Link to="neptune">
            <li>neptune</li>
          </Link>
        </ul>
      </nav>
      <div className="burger">
        <svg
          onClick={() => setClick(!click)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
        >
          <g
            style={{ fill: `${click ? "grey" : "white"}` }}
            fill-rule="evenodd"
          >
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </div>
      {click ? (
        <div className="modal-menu" style={{ opacity: `${click ? 1 : 0}` }}>
          {Planetdata.map((elem, index) => (
            <MenuTitles
              key={index}
              color={elem.color}
              text={elem.name}
              path={elem.path}
              handler={() => {
                setClick(false);
              }}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </StyledHeader>
  );
}
