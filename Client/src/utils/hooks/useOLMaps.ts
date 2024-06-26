import { useEffect } from "react";
import "ol/ol.css";
import { Map as OlMap, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";
import { Location } from "../../interfaces/Location.interface";
import logo from "../../assets/logo.svg";

interface Props {
  locations: Location[];
  center: [number, number];
}

export const useOpenLayersMap = ({ locations, center }: Props) => {
  useEffect(() => {
    const vectorSource = new VectorSource();

    locations.forEach((location) => {
      const feature = new Feature({
        geometry: new Point(
          fromLonLat([location.longitude, location.latitude])
        ),
        name: location.name,
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            src: logo,
            scale: 0.02,
          }),
        })
      );

      vectorSource.addFeature(feature);
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new OlMap({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat(center),
        zoom: 5,
      }),
    });

    return () => {
      map.setTarget(undefined);
    };
  }, [locations, center]);
};
