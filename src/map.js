import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 57.185170,
      lng: 39.418970
    },
    zoom: 9
  };

  render() {
    return (
      <div className='GoogleMap'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "MYCODE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
