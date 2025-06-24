import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import "react";
import { Link } from "react-router-dom";
import CitySearch from "./CitySearch";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <div className="flex flex-row gap-1 items-center justify-center">
            <img
              src="/next-skies-logo.png"
              alt="next-skies-logo"
              className="h-12 w-16"
            />
            <img
              src="/next-skies.png"
              alt="next-skies-text"
              className="h-10 w-45"
            />
          </div>
        </Link>
        <div className="flex gap-4">
          <CitySearch />

          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500
            ${isDark ? "rotate-180" : "rotate-0"}
            `}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
