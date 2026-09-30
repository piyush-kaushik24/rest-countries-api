import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/Header";

import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { CountriesPage } from "./pages/CountriesPage";
import { CountryDetailPage } from "./pages/CountryDetailPage";

export const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", false);
  const { data: countries, error, loading } = useFetch("/data.json");
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light",
    );

    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [theme]);
  function handleTheme(theme: boolean) {
    setTheme(theme);
  }

  return (
    <div className="mx-auto max-w-350 pb-10">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Header theme={theme} onTheme={handleTheme} />}
          >
            <Route
              index
              element={
                <CountriesPage
                  countries={countries}
                  error={error}
                  loading={loading}
                />
              }
            />
            <Route
              path="countryDetails/:alpha3Code"
              element={
                <CountryDetailPage countries={countries} loading={loading} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
