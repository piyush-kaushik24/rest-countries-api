import { Link } from "react-router";
import type { Country } from "../types/types";
type CountriesListProps = {
  countries: Country[];
};
export const CountriesList = ({ countries }: CountriesListProps) => {
  return (
    <ul className="text-text mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {countries.map(
        ({ population, region, capital, name, alpha3Code, flags }) => (
          <li key={alpha3Code} className="bg-surface rounded-xl shadow-md">
            <Link to={`countryDetails/${alpha3Code}`}>
              <img
                src={flags?.png}
                alt={`Flag of ${name}`}
                className="h-40 w-full rounded-t-xl"
              />
              <div className="flex flex-col justify-end p-6">
                <h2 className="text-xl font-bold">{name}</h2>
                <ul className="text-text py-4 *:py-1">
                  <li>
                    <strong>Population: </strong>
                    <span>{population}</span>
                  </li>
                  <li>
                    <strong>Region: </strong>
                    <span>{region}</span>
                  </li>
                  <li>
                    <strong> Capital: </strong>
                    <span>{capital}</span>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};
