import { useState } from "react";
import { CountriesList } from "../components/CountriesList";
import { Error } from "../components/Error";
import { FilterCountries } from "../components/FilterCountries";
import { Loading } from "../components/Loading";
import { SearchBar } from "../components/SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import type { Country, Region } from "../types/types";
export type CountriesPageProps = {
  countries: Country[];
  error: string | null;
  loading: boolean;
};

export const CountriesPage = ({
  countries,
  loading,
  error,
}: CountriesPageProps) => {
  const [search, setSearch] = useState("");
  const [filterCountry, setFilterCountry] = useState<Region | "All">("All");
  const [currentPage, setCurrentPage] = useState(1);
  const debounceSearch = useDebounce(search);
  const filterCountries = countries
    .filter((country) =>
      filterCountry === "All" ? true : country.region === filterCountry,
    )
    .filter((country) =>
      country.name.toLowerCase().includes(debounceSearch.toLowerCase()),
    );

  function handleSearch(search: string) {
    setSearch(search);
  }
  function handleFilter(region: Region) {
    setFilterCountry(region);
  }

  const ItemsPerPage = 10;
  const totalPages = Math.ceil(filterCountries.length / ItemsPerPage);
  const startIndex = (currentPage - 1) * ItemsPerPage;
  const paginationCountries = filterCountries.slice(
    startIndex,
    startIndex + ItemsPerPage,
  );

  return (
    <main>
      <div className="space-y-8 px-6 pt-6 md:flex md:items-end md:justify-between md:space-y-0 md:px-12">
        <SearchBar search={search} onSearch={handleSearch} />
        <FilterCountries onFilter={handleFilter} activeRegion={filterCountry} />
      </div>
      {loading && <Loading />}
      {error && <Error error={error} />}

      <div className="p-12">
        {!loading && !error && (
          <CountriesList countries={paginationCountries} />
        )}
      </div>
      <div className="text-text flex justify-center gap-8 font-semibold">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </main>
  );
};
