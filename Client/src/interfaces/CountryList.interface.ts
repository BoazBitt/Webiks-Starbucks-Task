interface CountryData {
  name: string;
  center: [number, number];
  bbox: [number, number, number, number];
}
export interface CountryList {
  [key: string]: CountryData;
}
