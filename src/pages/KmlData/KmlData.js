import React from "react";
import "./styles.css";
import { MapContainer, TileLayer } from "react-leaflet";

import ReactLeafletKml from "react-leaflet-kml";
import { useState, useEffect } from "react";

function KmlData() {
  const [kml, setKml] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/aviklai/react-leaflet-kml/master/src/assets/example1.kml"
    )
      .then((res) => res.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, "text/xml");
        setKml(kml);
      });
  }, []);

  return (
    <MapContainer center={[37.422, -122.084]} zoom={17}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {kml && <ReactLeafletKml kml={kml} />}
    </MapContainer>
  );
}

export default KmlData;
