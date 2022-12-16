import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './TextAdd-style';

const TextAdd = ({
    btn,
    placeholder,
    onChangeText,
    placeholderTextColor,
    multiline,
    onPress,
    disabled,
}) => {
    return (
        <View style={styles.editcontainer}>
            <TextInput
                //testID='input-area'
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={[styles.imput, btn && styles.imputnull]}
                placeholderTextColor={placeholderTextColor}
                multiline={multiline}
            />
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                style={[styles.addtextbutton, btn && styles.addtextbuttonnull]}
            >
                <Text
                    style={[styles.addtext, btn && styles.addtextnull]}>
                    ADD
                </Text>
            </TouchableOpacity>
        </View>

    )
}

export default TextAdd;