import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './RadioButton-style';

const RadioButtonComponetn = ({ text, value, onPress, status }) => {
    return (
        <View style={styles.radiocontainer} testID='radio-button-container'>
            <Text style={styles.text} testID='radio-button-text'>
                {text}
            </Text>
            <RadioButton
                value={value}
                onPress={onPress}
                status={status}
                color='#fff'
                uncheckedColor='#fff'
            />
        </View>
    )
}

export default RadioButtonComponetn;