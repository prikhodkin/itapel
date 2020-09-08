import ymaps from "ymaps";
import {objects} from './mapObject';

export const map = async () => {
  const mapContainer = document.querySelector(`#map`);

  const map = await ymaps.load();

  const myMap = new map.Map(mapContainer, {
    center: [56.78770177269972, 60.529202367431466],
    zoom: 16
  }), geoCollection = new map.GeoObjectCollection(null, {
    preset: 'islands#blackStretchyIcon',
  });

  objects.map((it) => {
    geoCollection.add(new map.Placemark([it.lon, it.lat]))
  })

  myMap.geoObjects.add(geoCollection)
}
