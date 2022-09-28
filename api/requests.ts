import { API_URL } from "./config";
import { makeRequest } from "./make-request";

export const getAllCountries = async <T>(): Promise<T> => {
  return makeRequest(`${API_URL}/all`);
};

export const getCountryByAlphaCode = async <T>(code: string): Promise<T> => {
  return makeRequest(`${API_URL}/alpha/${code}`);
};

export const getCountryByName = async <T>(countryName: string): Promise<T> => {
  return makeRequest(`${API_URL}/name/${countryName}`);
};
