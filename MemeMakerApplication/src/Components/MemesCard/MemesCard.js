import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MemesCard = ({ veri, onPress }) => {
    const styles = StyleSheet.create({
        linearGradient: {
            marginHorizontal: 10,
            marginVertical: 10,
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderRadius: 20,
        },
        container: {
            borderWidth: 1,
            borderColor:'#fff',
            borderRadius:2,
            marginLeft: 2,
            marginTop: 7,
        },
        image: {
            width: veri.width,
            maxWidth: Dimensions.get('screen').width / 2.3,
            height: veri.height,
            height: Dimensions.get('screen').width / 2.3,
            resizeMode: 'contain',
            margin: 7
        }
    })
    return (

        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Image
                source={{ uri: veri.url }}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

export default MemesCard;
