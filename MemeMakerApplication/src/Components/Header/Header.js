import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({ home, backPress }) => {
    return (
        home ? (

            <View style={styles.homecontainer}>
                <Text style={styles.hometext}>
                    Meme Maker
                </Text>
            </View>


        ) : (
            <View style={styles.detailcontainer}>
                <TouchableOpacity
                    style={styles.backbutton}
                    onPress={backPress}
                >
                    <Ionicons
                        name='caret-back'
                        size={35}
                        color='#fff'
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Meme Edit</Text>
            </View>

        )

    )
}

export default Header;

const styles = StyleSheet.create({
    homecontainer: {
        backgroundColor: '#FFA351FF',
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    hometext: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 30,
        color: '#fff'
    },
    detailcontainer: {
        backgroundColor: '#FFA351FF',
        borderColor: '#fff',
        borderWidth: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
    },
    backbutton: {
        alignSelf: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: 30,
        fontFamily: 'Pacifico-Regular',
        color: '#fff',
        justifyContent: 'center',
        left: Dimensions.get('screen').width / 4.6
    },

})