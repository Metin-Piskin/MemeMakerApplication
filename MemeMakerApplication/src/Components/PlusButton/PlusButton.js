import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const PlusButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <LinearGradient
                colors=
                {[
                    '#161718',
                    '#2C2C2E',
                ]}
                style={styles.container}
            >
                <Feather
                    name='plus'
                    size={40}
                    color='#C7C6CB'
                    style={styles.text}
                />

            </LinearGradient>
        </TouchableOpacity>
    )
}

export default PlusButton;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        borderRadius: 100,
    },
    text: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
})