import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

import styles from './PlusButton-style';

const PlusButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            testID='plus-button-press'
        >
            <LinearGradient
                colors=
                {[
                    '#161718',
                    '#2C2C2E',
                ]}
                style={styles.container}
                testID='plus-button-container'
            >
                <Feather
                    name='plus'
                    size={40}
                    color='#C7C6CB'
                    style={styles.text}
                    testID='plus-button-text'
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default PlusButton;