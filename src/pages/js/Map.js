import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "../scss/Map.scss";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const style = "mapbox://styles/blainewestern/ck9euctnm0s0s1it08wsg4d1v";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: style,
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Lng:
            <br /> {this.state.lng}
          </div>
          <div>
            Lat:
            <br /> {this.state.lat}
          </div>
          <div>
            Zm:
            <br /> {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default Map;
