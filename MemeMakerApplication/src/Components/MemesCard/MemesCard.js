import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const MemesCard = ({ veri, onPress }) => {
    const styles = StyleSheet.create({
        image: {
            width: veri.width,
            maxWidth: Dimensions.get('screen').width,
            height: veri.height,
            height: Dimensions.get('screen').width /1.3,
            resizeMode: 'contain',
            backgroundColor: 'gray'
        }
    })
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Image
                source={{ uri: veri.url }}
                style={styles.image}
            />
            <Text>{veri.name}</Text>
        </TouchableOpacity>
    )
}

export default MemesCard;
