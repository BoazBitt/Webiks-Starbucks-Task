import { useEffect, useState } from "react";
import axios from "axios";
import { Location } from "../../interfaces/Location.interface";
import starbucksLocationsUrl from "../data/starbucksURL";
import { groupStoresByCountry } from "../functions/groupStoresByCountry";
import { GroupedStores } from "../../interfaces/GroupedStores.interface";

export const useLocations = () => {
  const [locations, setLocations] = useState<GroupedStores>({});

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get<Location[]>(starbucksLocationsUrl);
        const groupedLocations = groupStoresByCountry(response.data);
        setLocations(groupedLocations);
      };
      getData();
    } catch (error) {
      console.error(`Failed to load the data: ${error}`);
    }
  }, []);

  return locations;
};
