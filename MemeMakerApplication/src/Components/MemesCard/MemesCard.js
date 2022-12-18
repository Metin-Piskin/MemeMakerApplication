import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const MemesCard = ({ veri, onPress }) => {
    return (
        veri ? (
            <TouchableOpacity
                style={styles.container}
                testID='memes-card-press'
                onPress={onPress}
            >
                <Image
                    source={{ uri: veri.url }}
                    testID='memes-card-image'
                    style={{
                        maxWidth: veri.width,
                        width: Dimensions.get('screen').width / 2.3,
                        maxHeight: veri.height,
                        height: Dimensions.get('screen').width / 2.3,
                        resizeMode: 'contain',
                        margin: 7,
                        //borderRadius: 20
                    }}
                />
            </TouchableOpacity>
        ) : (
            <Text>Veri Yok</Text>
        )
    )
}

export default MemesCard;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        //marginLeft: 2,
        marginTop: 7,
    },
})