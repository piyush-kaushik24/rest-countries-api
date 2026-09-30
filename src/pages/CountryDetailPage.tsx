import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import { Loading } from "../components/Loading";
import type { Country } from "../types/types";

type CountryDetailPageProps = {
  countries: Country[];
  loading: boolean;
};

export const CountryDetailPage = ({
  countries,
  loading,
}: CountryDetailPageProps) => {
  const navigate = useNavigate();
  const { alpha3Code } = useParams();
  if (loading) {
    return <Loading />;
  }
  const country = countries.find(
    (country) => country.alpha3Code === alpha3Code,
  );

  return (
    <main className="text-text mx-auto px-6 md:w-[70%] xl:w-auto">
      <button
        onClick={() => navigate("/")}
        className="bg-surface shadow-soft my-8 flex items-center justify-center gap-2 px-6 py-2 xl:my-20"
      >
        <ArrowLeft aria-hidden="true" />
        <span>Back</span>
      </button>
      <div className="xl:grid xl:grid-cols-2 xl:items-start xl:gap-8">
        <img
          src={country?.flags?.svg}
          alt=""
          className="rounded-lg object-contain"
        />

        <div className="gap-8 space-y-8 pt-8 md:grid md:grid-cols-2 md:space-y-0">
          <div>
            <h2 className="pb-8 text-3xl font-bold">{country?.name}</h2>
            <ul className="grid gap-2">
              <li>
                <strong>Native Name: </strong>
                {country?.nativeName}
              </li>

              <li>
                <strong>Population: </strong>
                {country?.population}
              </li>

              <li>
                <strong>Region: </strong>
                {country?.region}
              </li>

              <li>
                <strong>Sub Region: </strong>
                {country?.subregion}
              </li>

              <li>
                <strong>Capital: </strong>
                {country?.capital}
              </li>
            </ul>
          </div>

          <ul className="flex flex-col items-start justify-center gap-2">
            <li>
              <strong>Top Level Domain: </strong>
              {country?.topLevelDomain.join(", ")}
            </li>

            <li>
              <strong>Currencies: </strong>

              {country?.currencies?.map((currency) => (
                <ul key={currency.code} className="text-sm *:py-1">
                  <li>
                    {" "}
                    <strong>Name: </strong>
                    {currency.name}
                  </li>
                  <li>
                    <strong>Symbol: </strong>
                    {currency.symbol}
                  </li>
                </ul>
              ))}
            </li>

            <li className="flex gap-1">
              <strong>Languages: </strong>

              {country?.languages.map((language, index) => (
                <span key={language.iso639_1}>
                  {language.name}
                  {index < country.languages.length - 1 && ", "}
                </span>
              ))}
            </li>
          </ul>
          <div className="col-span-2 gap-2 md:flex">
            <h3 className="py-4">
              <strong>Border Countries:</strong>
            </h3>

            <ul className="grid grid-cols-3 gap-2 text-center text-sm font-semibold md:grid-cols-4 xl:grid-cols-5">
              {country?.borders?.length ? (
                country?.borders?.map((border) => {
                  const borderCountry = countries.find(
                    (country) => country.alpha3Code === border,
                  );

                  return (
                    <li key={border}>
                      <Link
                        to={`/countryDetails/${border}`}
                        className="bg-surface shadow-soft flex h-full w-full items-center justify-center rounded-md p-2"
                      >
                        <span>{borderCountry?.name}</span>
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li className="bg-surface rounded-lg py-2 text-center">
                  Unknown
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
