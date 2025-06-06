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
  selectedOfferId?: string;
};

const defaultIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeIcon = L.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ points, city, selectedOfferId }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView(
        [city.latitude, city.longitude],
        city.zoom
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(mapInstanceRef.current);
    }

    return () => {
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, [city]);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    if (markersRef.current) {
      markersRef.current.clearLayers();
    }

    const newLayerGroup = L.layerGroup();
    points.forEach((point) => {
      const marker = L.marker(
        [point.location.latitude, point.location.longitude],
        {
          icon: point.id === selectedOfferId ? activeIcon : defaultIcon,
        }
      );
      marker.addTo(newLayerGroup);
    });

    newLayerGroup.addTo(mapInstanceRef.current);
    markersRef.current = newLayerGroup;

  }, [points, selectedOfferId]);

  return <div style={{ height: '100%' }} ref={mapRef} className="cities__map map" />;
}

export { Map };
