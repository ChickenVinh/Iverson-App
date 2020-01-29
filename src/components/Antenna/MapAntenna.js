import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapAntenna extends React.Component {
    render() {
        return(
            <Map 
                google = { this.props.google }
                zoom = { 6 }
                style = {{ width: '100%', height: '100%' }}
                initialCenter = {{ lat: 16, lng: 106.5 }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD6PobqAW5C0bNKG-FE4PKLbwfTY8XwQFs'
}) (MapAntenna);
