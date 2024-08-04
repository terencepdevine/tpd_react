import { Link, NavLink } from "react-router-dom";
import IconGitHub from "./IconGitHub";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  return (
    <header
      className={`lg:sticky z-50 backdrop-blur-sm bg-gray-900 bg-opacity-95 top-0 px-16 py-8 flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between border-b-1 border-gray-600 transition-all ${
        scrolled ? "lg:py-4" : "lg:py-8"
      }`}
    >
      <h1>
        <Link
          to="/"
          className="text-gray-300 font-bold text-xl lg:text-3xl hover:text-rose-500 transition-colors"
        >
          Terence Devine
        </Link>
      </h1>

      <nav>
        <ul className="flex items-center gap-8">
          {menu.map((item, key) => (
            <li key={key}>
              <NavLink
                to={item.href}
                className={`text-xl lg:text-3xl font-bold text-gray-300 hover:text-rose-500 rounded-md transition-colors`}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="https://github.com/terencepdevine"
              target="_blank"
              className="block fill-gray-300 hover:fill-rose-500 transition-color"
            >
              <IconGitHub />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
