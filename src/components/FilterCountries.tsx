import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { Region } from "../types/types";

type FilterCountriesProps = {
  onFilter: (region: Region) => void;
  activeRegion: Region | "All";
};
export const FilterCountries = ({
  onFilter,
  activeRegion,
}: FilterCountriesProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const regions: Region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className="text-text relative w-50">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-surface shadow-soft flex w-full justify-between rounded-lg p-4"
      >
        <span>Filter by Region</span>

        <span>
          {isOpen ? (
            <ChevronUp aria-hidden="true" />
          ) : (
            <ChevronDown aria-hidden="true" />
          )}
        </span>
      </button>
      {isOpen && (
        <ul className="bg-surface shadow-soft absolute top-full mt-1 w-full space-y-2 rounded-lg p-6">
          {regions.map((region) => (
            <li key={region}>
              <button
                type="button"
                onClick={() => {
                  onFilter(region);
                }}
                className={`${activeRegion === region ? "bg-blue-500 text-white" : ""} w-full rounded-full px-4 text-start`}
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
