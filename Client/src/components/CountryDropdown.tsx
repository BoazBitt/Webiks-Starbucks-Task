import { ChangeEvent } from "react";
import countriesList from "../utils/data/CountryList";
interface Props {
  countries: string[];
  onChange: (country: string) => void;
}

const CountryDropdown = (props: Props) => {
  const { countries, onChange } = props;
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onChange(value);
  };
  const sortedCountries = countries
    .map((country) => ({
      code: country,
      name: countriesList[country].name,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <select className="country-dropdown" onChange={handleChange}>
      <option value="">Select a country</option>
      {sortedCountries.map(({ code, name }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default CountryDropdown;
