import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../style/Map.css';
import { AppContext } from '../context/AppContext';
import { fetchCoordinates } from '../utils/api';
//import Icon from"../images/marker-icon.png"

const Maps = () => {
  const [address, setAddress] = useState({});
  const [position, setPosition] = useState(null);
  const {
    initialState: {
      state: { buyer },
    },
  } = useContext(AppContext);

  const getCoordinates = async (address) => {
    try {
      const response = await fetchCoordinates(address);
      setPosition([response[0].lat, response[0].lon]);
    } catch (error) {
      console.log(error);
    }
  };
  const adrr =
    'Av. Mirador del este, Santo Domingo Este, Santo Domingo 11804, Republica Dominicana';

  useEffect(() => {
    if (buyer[0]?.address) {
      const parts = buyer[0]?.address.split(/, (?=\D)/); // Usamos una expresión regular para dividir en las comas que están seguidas de caracteres no numéricos.
      const street = parts[0];
      const city = parts[1];
      const stateAndPostalCode = parts[2].split(' ');
      const state = stateAndPostalCode[0];
      const postalCode = stateAndPostalCode[1];
      const country = parts[3];

      setAddress({
        ...address,
        street,
        city,
        state,
        postalCode,
        country,
      });
    }
  }, []);

  useEffect(() => {
    getCoordinates(address);
  }, [address]);

  return (
    <>
      {position && (
        <div className="playgroundPreview_wiye">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '50vh' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default Maps;
