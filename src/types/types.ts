export interface Country {
  alpha3Code: string;
  name: string;
  nativeName: string;
  capital?: string;
  region: string;
  subregion: string;
  population: number;
  topLevelDomain: string[];
  currencies?: Currency[];
  languages: Language[];
  borders?: string[];
  flags?: Flags;
}

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type Flags = {
  svg: string;
  png: string;
};

export type Region = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
