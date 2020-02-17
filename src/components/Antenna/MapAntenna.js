import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MarkerIcon from '../../components/images/marker.png';

class MapAntenna extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            markers : [
                {lat: 21.027763, lng: 105.834160},
                {lat : 16.463713, lng: 107.590866},
                {lat: 10.823099, lng: 106.629662}
            ]
        }
    }

    displayMarkers = () => {
        return this.state.markers.map((marker, index) => {
            return <Marker
                        key = { index }
                        id = { index }
                        icon = {{ 
                            url: MarkerIcon,
                            scaledSize:  new this.props.google.maps.Size(25,25)
                        }}
                        position = {{
                            lat: marker.lat,
                            lng: marker.lng
                        }}
            onClick = {() => console.log("Marker clicked!")} />
        })
    }

    render() {
        return(
            <Map 
                google = { this.props.google }
                zoom = { 6 }
                style = {{ width: `100%`, height: `100%`, position: `absolute` }}
                initialCenter = {{ lat: 16, lng: 106.5 }}
            >
               {this.displayMarkers()}  
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD6PobqAW5C0bNKG-FE4PKLbwfTY8XwQFs'
}) (MapAntenna);
