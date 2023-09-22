import { Moon, Sun } from "@phosphor-icons/react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-darkBlue text-whitey" : "bg-whitey text-darkerBlue"
      } flex justify-between shadow-md py-5 px-6 md:px-16 mb-8`}
    >
      <a href="/" className="text-lg font-bold cursor-pointer">
        Where in the world?
      </a>
      <button className="toggle">
        <div
          id="light"
          onClick={() => setTheme("light")}
          className={
            theme === "light"
              ? "hidden"
              : "flex gap-2 items-center hover:opacity-50 transition-all"
          }
        >
          <Sun size={30} /> <p>Light Mode</p>
        </div>
        <div
          id="dark"
          onClick={() => setTheme("dark")}
          className={
            theme === "dark"
              ? "hidden"
              : "flex gap-2 items-center hover:opacity-50 transition-all"
          }
        >
          <Moon size={30} /> <p>Dark Mode</p>
        </div>
      </button>
    </div>
  );
}

export default Header;
