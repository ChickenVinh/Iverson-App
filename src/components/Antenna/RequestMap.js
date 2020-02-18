import React from 'react'
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';
import '../../CSS/ConfirmAntenna.css'
import oldMarkerIcon from '../../components/images/oldMarker.png';
import newMarkerIcon from '../../components/images/newMarker.png';

class RequestMap extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            const data = {
                markers: [
                    {lat: parseFloat(this.props.data.old_lat), lng: parseFloat(this.props.data.old_lng), icon: { 
                        url: oldMarkerIcon,
                        scaledSize:  new this.props.google.maps.Size(35,35)
                    }},
                    {lat: parseFloat(this.props.data.new_lat), lng: parseFloat(this.props.data.new_lng), icon: { 
                        url: newMarkerIcon,
                        scaledSize:  new this.props.google.maps.Size(35,35)
                    }}
                ],
                center: {lat: this.props.data.new_lat, lng: this.props.data.new_lng}
            }
            this.setState(data)
            console.log(data)
        }
    }

    displayPolyline = () => {
        if(typeof this.state.markers !== 'undefined'){
            return <Polyline
                        path = {this.state.markers}
                        geodesic = {true}
                        options={{
                            strokeColor: "#32cf44",
                            strokeOpacity: 0.75,
                            strokeWeight: 4
                        }}
            />
        }
    }

    displayMarkers = () => {
        if(typeof this.state.markers !== 'undefined'){
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
                {this.displayPolyline()}
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD6PobqAW5C0bNKG-FE4PKLbwfTY8XwQFs'
}) (RequestMap);