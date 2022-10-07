import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLanguage } from "../slice/site";

export default function Footer() {
  const dispatch = useDispatch();

  const { dark, language } = useSelector((state) => state.site);
  const languages = ["az", "en"];
  const handleLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div>
      Footer
      <div>
        {languages.map((lang, index) => (
          <button
            onClick={() => handleLanguage(lang)}
            className={lang == language ? "active" : ""}
            key={index}
          >
            {lang}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(setDarkMode())}>
          {dark ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </div>
  );
}
