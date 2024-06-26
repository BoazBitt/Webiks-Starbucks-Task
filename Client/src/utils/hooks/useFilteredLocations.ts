import { useState } from "react";
import countriesList from "../data/CountryList";
import { GroupedStores } from "../../interfaces/GroupedStores.interface";
import { Location } from "../../interfaces/Location.interface";
import { isInCountry } from "../actions/isInCountry.action";

const INITIAL_FILTERED_STATE: FilteredLocation = {
  center: [0, 0],
  locations: [],
};

interface FilteredLocation {
  locations: Location[];
  center: [number, number];
}

interface FilteredLocationsResult {
  filteredLocations: FilteredLocation;
  handleCountryChange: (loc: string) => void;
  isLoading: boolean;
}

export const useFilteredLocations = (
  stores: GroupedStores
): FilteredLocationsResult => {
  const [filteredLocations, setFilteredLocations] = useState<FilteredLocation>(
    INITIAL_FILTERED_STATE
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCountryChange = async (loc: string) => {
    setIsLoading(true);
    try {
      const promises = stores[loc].map((location) =>
        isInCountry(location.latitude, location.longitude, loc)
      );
      const res = await Promise.allSettled(promises);
      const filteredLocations = stores[loc].filter((_, index) => {
        const result = res[index];
        return result.status === "fulfilled" && result.value.isInside;
      });

      const newFiltered: FilteredLocation = {
        locations: filteredLocations,
        center: countriesList[loc].center,
      };
      setFilteredLocations(newFiltered);
    } finally {
      setIsLoading(false);
    }
  };

  return { filteredLocations, handleCountryChange, isLoading };
};
