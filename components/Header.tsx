import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { HomeBanner } from '@/assets/assets';


const { width } = Dimensions.get('window');


export default function Header() {
    return (
        <View style={styles.container}>
             <Image
                source={HomeBanner}
                style={[
                    styles.banner,
                ]}
                /> 
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        position:"absolute",
        top:0,
        left:0,
        zIndex:0,
        width:width,
        backgroundColor:'transparent',
        height: 100,
        justifyContent: 'flex-start',
    },

    banner :{
        width:"100%",
        height: width/(1638/471),
        resizeMode: 'contain'
    }
});
