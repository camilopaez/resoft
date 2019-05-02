import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Mapa extends Component {
    render(){
        return (
            <View style={styles.container}>
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 6.198909,
                    longitude: -75.577925,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                    }}
                >
            </MapView>
        </View>
                );
    }
}
export default Mapa;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
}); 