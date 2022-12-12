import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const MemesCard = ({ veri, onPress }) => {
    const styles = StyleSheet.create({
        container: {
            borderBottomWidth: 1,
            borderColor: '#fff',
            borderRadius: 10,
            //marginLeft: 2,
            marginTop: 7,
        },
        image: {
            maxWidth: veri.width,
            width: Dimensions.get('screen').width / 2.3,
            maxHeight: veri.height,
            height: Dimensions.get('screen').width / 2.3,
            resizeMode: 'contain',
            margin: 7,
            //borderRadius: 20
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
