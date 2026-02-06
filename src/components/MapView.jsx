import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Card, CardContent, Typography } from "@mui/material";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});

// 🔹 Helper component to control map zoom
const MapController = ({ selectedProject }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedProject) {
      map.setView(
        [selectedProject.latitude, selectedProject.longitude],
        6,
        { animate: true }
      );
    }
  }, [selectedProject, map]);

  return null;
};

const MapView = ({ data, selectedProject, onSelect }) => {
  return (
    <Card sx={{ borderRadius: 2, height: "100%" }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Project Locations
        </Typography>

        <MapContainer
          center={[22, 78]}
          zoom={5}
          style={{ height: 360, width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Auto zoom controller */}
          <MapController selectedProject={selectedProject} />

          {data.map(item => (
            <Marker
              key={item.id}
              position={[item.latitude, item.longitude]}
              eventHandlers={{
                click: () => onSelect(item)
              }}
            >
              <Popup>
                <strong>{item.projectName}</strong>
                <br />
                Status: {item.status}
                <br />
                Updated: {item.lastUpdated}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </CardContent>
    </Card>
  );
};

export default MapView;
