import { SearchIcon } from "lucide-react";
type SearchBarProps = {
  onSearch: (search: string) => void;
  search: string;
};
export const SearchBar = ({ onSearch, search }: SearchBarProps) => {
  return (
    <div className="bg-surface text-input shadow-soft mt-4 flex gap-4 rounded-lg px-8 py-4 md:w-2/5">
      <SearchIcon aria-hidden="true" />
      <label htmlFor="search" className="sr-only">
        Search for a country{" "}
      </label>
      <input
        value={search}
        type="text"
        enterKeyHint="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
        onChange={(e) => onSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
        className="outline-none"
      />
    </div>
  );
};
