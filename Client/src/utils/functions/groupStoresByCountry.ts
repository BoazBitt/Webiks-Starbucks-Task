import { GroupedStores } from "../../interfaces/GroupedStores.interface";
import { Location } from "../../interfaces/Location.interface";

export const groupStoresByCountry = (locations: Location[]): GroupedStores => {
  return locations.reduce((acc: GroupedStores, location) => {
    const { country } = location;
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(location);
    return acc;
  }, {} as GroupedStores);
};
