import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";
import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanage-map.css";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [50, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Canindé</strong>
          <span>Ceará</span>
        </footer>
      </aside>
      <Map
        center={[-4.3481995, -39.3309997]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker icon={mapIcon} position={[-4.3628167, -39.3139419]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxHeight={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="">
              <FiArrowRight size={32} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
