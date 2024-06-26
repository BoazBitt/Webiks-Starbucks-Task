import "./App.css";
import { useMemo } from "react";
import { useLocations } from "./utils/hooks/useLocations";
import { useFilteredLocations } from "./utils/hooks/useFilteredLocations";
import { useOpenLayersMap } from "./utils/hooks/useOLMaps";
import CountryDropdown from "./components/CountryDropdown";
import loader from "./assets/loader.svg";

const App = () => {
  const locations = useLocations();
  const { filteredLocations, handleCountryChange, isLoading } =
    useFilteredLocations(locations);
  useOpenLayersMap({
    locations: filteredLocations.locations,
    center: filteredLocations.center,
  });
  const countries = useMemo(() => Object.keys(locations).sort(), [locations]);

  return (
    <div className="App">
      <CountryDropdown countries={countries} onChange={handleCountryChange} />
      <div id="map" className="map" />
      {isLoading && (
        <div className="load">
          <img className="image" src={loader} alt="loader" />
        </div>
      )}
    </div>
  );
};

export default App;
