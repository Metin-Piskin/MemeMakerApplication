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
                    '#FFA351FF',
                    '#FFBE7BFF',
                    '#EED971FF',
                ]}
                style={styles.container}
            >
                <Feather
                    name='plus'
                    size={40}
                    color='#fff'
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