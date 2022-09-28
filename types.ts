type ValueOf<T> = T[keyof T];

export interface ICountry {
  flag: string;
  name: string;
  currencies: string | null;
  languages: string | null;
  population: string;
  region: string;
  capital: string | null;
  subregion: string | null;
  borders?: string[];
  domains: string | null;
}

export interface ICountryListItem {
  name: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
}

export interface ICountryReqData {
  region: string;
  capital?: string[];
  population: number;
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
  currencies: object;
  subregion?: string;
  languages: object;
  tld: string[];
  borders?: string[];
}

export interface ICountryInfo {
  population: ValueOf<Pick<ICountry, "population">>;
  region: ValueOf<Pick<ICountry, "region">>;
  subregion: ValueOf<Pick<ICountry, "subregion">>;
  capital: ValueOf<Pick<ICountry, "capital">>;
  domains: ValueOf<Pick<ICountry, "domains">>;
  currencies: ValueOf<Pick<ICountry, "currencies">>;
  languages: ValueOf<Pick<ICountry, "languages">>;
}

export interface Region {
  label: RegionValue;
  value: RegionValue;
}

export const Regions = {
  ALL: "All",
  AFRICA: "Africa",
  AMERICAS: "Americas",
  ASIA: "Asia",
  EUROPE: "Europe",
  OCEANIA: "Oceania",
} as const;

export type RegionKey = keyof typeof Regions;

export type RegionValue = typeof Regions[RegionKey];
