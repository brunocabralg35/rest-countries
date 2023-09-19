import { Moon, Sun } from "@phosphor-icons/react";

function Header() {
  return (
    <div className="flex justify-between">
      <h1>Where in the world?</h1>
      <button className="toggle">
        <div
          id="light"
          className="hidden gap-2 items-center hover:opacity-50 transition-all"
        >
          <Sun size={30} /> <p>Light Mode</p>
        </div>
        <div
          id="dark"
          className="flex gap-2 items-center hover:opacity-50 transition-all"
        >
          <Moon size={30} /> <p>Dark Mode</p>
        </div>
      </button>
    </div>
  );
}

export default Header;
