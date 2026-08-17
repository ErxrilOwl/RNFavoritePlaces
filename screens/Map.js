import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
    const region = {
        latitude: 14.5145245,
        longitude: 121.0085352,
        latitudeDelta: 10.5145245,
        longitudeDelta: 17.0085352 
    }

    return (
        <MapView style={styles.map} initialRegion={region}></MapView>
    )
}

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})