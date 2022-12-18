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
        <View style={styles.editcontainer} testID='text-add-container'>
            {
                btn ? (
                    <>
                        <TextInput
                            testID='text-add-input-null'
                            placeholder={placeholder}
                            onChangeText={onChangeText}
                            style={styles.imputnull}
                            placeholderTextColor={placeholderTextColor}
                            multiline={multiline}
                        />
                        <TouchableOpacity
                            onPress={onPress}
                            testID='text-add-press-null'
                            disabled={disabled}
                            style={styles.addtextbuttonnull}
                        >
                            <Text style={styles.addtextnull} testID='text-add-press-text-null'>
                                ADD
                            </Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TextInput
                            testID='text-add-input'
                            placeholder={placeholder}
                            onChangeText={onChangeText}
                            style={styles.imput}
                            placeholderTextColor={placeholderTextColor}
                            multiline={multiline}
                        />
                        <TouchableOpacity
                            onPress={onPress}
                            testID='text-add-press'
                            disabled={disabled}
                            style={styles.addtextbutton}
                        >
                            <Text style={styles.addtext} testID='text-add-press-text'>
                                ADD
                            </Text>
                        </TouchableOpacity>
                    </>
                )
            }

        </View>

    )
}

export default TextAdd;