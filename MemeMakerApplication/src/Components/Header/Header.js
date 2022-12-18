import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './Header-style';

const Header = ({ home, backPress }) => {
    return (
        home ? (
            <View style={styles.homecontainer} testID='header-home-container'>
                <Text style={styles.hometext} testID='header-home-home-text'>
                    Meme Maker
                </Text>
            </View>
        ) : (
            <View style={styles.detailcontainer}  testID='header-home-detail-container'>
                <TouchableOpacity
                    style={styles.backbutton}
                    testID='header-home-back-button'
                    onPress={backPress}
                >
                    <Ionicons
                        name='caret-back'
                        size={35}
                        color='#fff'
                    />
                </TouchableOpacity>
                <Text style={styles.text}  testID='header-home-text'>
                    Edit
                </Text>
            </View>
        )

    )
}

export default Header;