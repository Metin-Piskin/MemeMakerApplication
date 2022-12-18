import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './SaveButton-style';

const SaveButton = ({ onPress, iconName }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            testID='save-button-press'
            style={styles.save}
        >
            <MaterialIcons
                name={iconName}
                size={40}
                color='#fff'
            />
        </TouchableOpacity>
    )
}

export default SaveButton;