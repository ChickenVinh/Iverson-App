import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../../CSS/ConfirmAntenna.css'
import oldMarkerIcon from '../../components/images/oldMarker.png';
import newMarkerIcon from '../../components/images/newMarker.png';

class RequestMap extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            markers: [
                {lat: "", lng: ""},
                {lat: "", lng: ""}
            ],
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            const data = {
                markers: [
                    {lat: this.props.data.old_lat, lng: this.props.data.old_lng, icon: { 
                        url: oldMarkerIcon,
                        scaledSize:  new this.props.google.maps.Size(25,25)
                    }},
                    {lat: this.props.data.new_lat, lng: this.props.data.new_lng, icon: { 
                        url: newMarkerIcon,
                        scaledSize:  new this.props.google.maps.Size(25,25)
                    }}
                ],
                center: {lat: this.props.data.new_lat, lng: this.props.data.new_lng}
            }
            this.setState(data)
            console.log(data)
        }
      }

    displayMarkers = () => {
        return this.state.markers.map((marker, index) => {
            return <Marker
                        key = {index}
                        id = {index}
                        icon = { marker.icon }
                        position = {{
                            lat: marker.lat,
                            lng: marker.lng
                        }}
                    />
        })
    }

    render(){
        return(
            <Map
                className = "map"
                google = {this.props.google}
                zoom = {15}
                style = {{ width: '50%', height: '75%' }}
                center = {this.state.center}
                initialCenter = {{ lat: 21.0278, lng: 105.8342 }}
            >
                {this.displayMarkers()}
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD6PobqAW5C0bNKG-FE4PKLbwfTY8XwQFs'
}) (RequestMap);