import React from 'react';
import { GoogleMap, MarkerClusterer, Marker } from '@react-google-maps/api';
import {GoogleApiWrapper} from 'google-maps-react';
import MarkerIcon from '../../components/images/marker.png';

class MapAntenna extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            markers : []
        }
        this.displayMarkers = this.displayMarkers.bind(this)
    }

    componentDidMount(){
        console.log("pullig antenna data")
        fetch('https://vtk-group.tech/scripts/getAntenna.php')
        .then((res) => { 
            return res.json()
        })
        .then((Json) => {
            this.setState({markers: Json["Antennas"]})
            console.log(this.state.markers[0])
        })
    }

    displayMarkers = () => {
        return <MarkerClusterer>
            {
            (clusterer) => this.state.markers.map((marker, index) => (
                <Marker
                    key = { index }
                    id = { index }
                    icon = {{ 
                        url: MarkerIcon,
                        scaledSize:  new this.props.google.maps.Size(25,25)
                    }}
                    position = {{
                        lat: parseFloat(marker.lat),
                        lng: parseFloat(marker.lng)
                    }}
                    clusterer = {clusterer}
                    onClick = {() => console.log("Marker clicked!")} />
            ))
            }
        </MarkerClusterer>
    }

    render() {
        return(
            <GoogleMap 
                google = { this.props.google }
                zoom = { 6 }
                style = {{ width: `100%`, height: `100%`, position: `absolute` }}
                initialCenter = {{ lat: 16, lng: 106.5 }}
            >
               {this.displayMarkers()}  
            </GoogleMap>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD6PobqAW5C0bNKG-FE4PKLbwfTY8XwQFs'
}) (MapAntenna);
