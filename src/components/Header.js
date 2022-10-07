import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { dark, language } = useSelector((state) => state.site);
  return (
    <div>
      Header
      <nav>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </nav>
      <div>
        Dark mode={dark ? "true" : "false"}
        <br />
        Current lang={language}
      </div>
    </div>
  );
}
