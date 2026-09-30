import { MoonIcon, SunIcon } from "lucide-react";
import { Outlet } from "react-router";

type HeaderProps = {
  onTheme: (theme: boolean) => void;
  theme: boolean;
};
export const Header = ({ theme, onTheme }: HeaderProps) => {
  return (
    <>
      <header className="bg-surface text-text shadow-soft flex items-center justify-between px-4 py-6 text-lg md:px-12">
        <h1 className="font-bold">Where is the world?</h1>
        <button
          aria-pressed={theme}
          onClick={() => onTheme(!theme)}
          className="shadow-soft rounded-full px-2 py-1 text-sm font-semibold *:flex *:items-center *:gap-2"
        >
          {theme ? (
            <span>
              <SunIcon aria-hidden="true" />
              <span>Light Mode</span>
            </span>
          ) : (
            <span>
              <MoonIcon aria-hidden="true" className="fill-white" />
              <span>Dark Mode</span>
            </span>
          )}
        </button>
      </header>
      <Outlet />
    </>
  );
};
