import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type ApartmentMapProps = {
  address: string;
  latitude: number;
  longitude: number;
};

const containerStyle = {
  width: '100%',
  height: '400px'
};

export default function ApartmentMap({ address, latitude, longitude }: ApartmentMapProps) {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: latitude, lng: longitude }}
        zoom={13}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </LoadScript>
  );
}
