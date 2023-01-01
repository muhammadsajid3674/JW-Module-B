import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Map(){
    <>
   <View>
     <Text>Maps</Text>
   </View>
   <View>
     <MapView
       provider={PROVIDER_GOOGLE}
       style={{
        height: 500,
        width: '100%'
       }}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
    </>
}
