import { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OffersList } from '../../types/offer';

type MapProps = {
  points: OffersList[];
  city: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

function Map({ points, city }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([city.latitude, city.longitude], city.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      points.forEach((point) => {
        const marker = L.marker([point.location.latitude, point.location.longitude]);
        marker.addTo(map);
      });

      return () => {
        map.remove();
      };
    }
  }, [points, city]);

  return <div style={{ height: '100%' }} ref={mapRef} className="cities__map map" />;
}

export { Map };
