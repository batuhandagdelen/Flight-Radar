import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "../../utils/helpers";
import { open } from "../../redux/slices/detailSlice";

import AirportMarker from "../../components/marker/airport-marker";
import { getFlights } from "../../redux/actions";
const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flight);
  const { isLoading, info, route } = useSelector((store) => store.detail);

  // her 5 saniyede bir uçak api a istek at
  // useEffect(() => {
  //   const id = setInterval(() => dispatch(getFlights()), 5000);

  //   return () => clearInterval(id);
  // }, []);

  return (
    <MapContainer
      center={[38.957334, 35.404276]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Varış noktasını işareatle */}
      {!isLoading && info && (
        <AirportMarker info={info?.airport?.destination} title="Varış" />
      )}

      {/* Kalkış noktasını işaretle */}
      {!isLoading && info && (
        <AirportMarker info={info?.airport?.origin} title="Kalkış" />
      )}

      {/* uçus rotasını çiz */}

      {!isLoading && route && (
        <Polyline positions={route} pathOptions={{ color: "#645CED " }} />
      )}

      {flights.map((flight) => (
        <Marker
          icon={getIcon(
            flight.direction,
            flight.flightId === info?.identification?.id,
            info?.identification?.id
          )}
          key={flight.flightId}
          position={[flight.lat, flight.lon]}
        >
          <Popup className="popup">
            <span>Kod: {flight.callsign}</span>
            <button onClick={() => dispatch(open(flight.flightId))}>
              Detay
            </button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
