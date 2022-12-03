import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({ home, backPress }) => {
    return (
        home ? (
            <>
                <View style={styles.homecontainer}>
                </View>
                <Ionicons
                    name='ios-color-filter-sharp'
                    size={48}
                    color='#EED971FF'
                    style={styles.homeicon}
                />
            </>
        ) : (
            <View style={styles.detailcontainer}>
                <TouchableOpacity
                    style={styles.backbutton}
                    onPress={backPress}
                >
                    <Ionicons
                        name='caret-back'
                        size={35}
                        color='#EED971FF'
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Edit</Text>
                <TouchableOpacity style={styles.savebutton}>
                    <Ionicons
                        name='save'
                        size={30}
                        color='#EED971FF'
                    />
                </TouchableOpacity>
            </View>

        )

    )
}

export default Header;

const styles = StyleSheet.create({
    homecontainer: {
        backgroundColor: '#FFA351FF',
        height: 45,
        width: Dimensions.get('screen').width,
        position: 'absolute',
        zIndex: 1,
        borderBottomLeftRadius: 800,
        borderBottomRightRadius: 800,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#fff'
    },
    detailcontainer: {
        backgroundColor: '#FFA351FF',
        borderColor: '#fff',
        height: 45,
        borderBottomWidth: 1,
        //borderLeftWidth: 1,
        //borderRightWidth: 1,
        borderBottomLeftRadius: 400,
        borderBottomRightRadius: 400,
        //marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backbutton: {
        borderWidth: 1,
        borderBottomLeftRadius: 300,
        borderColor: '#fff',
        paddingHorizontal: 5,
        marginBottom: -1
    },
    savebutton: {
        borderWidth: 1,
        borderBottomRightRadius: 300,
        borderColor: '#fff',
        paddingHorizontal: 5,
        marginBottom: -1,
        paddingRight: 15,
    },
    text: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#EED971FF',
        fontWeight: 'bold'
    },
    homeicon: {
        zIndex: 1,
        position: 'absolute',
        backgroundColor: '#FFA351FF',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 65,
        alignSelf: 'center',
        //left: Dimensions.get('screen').width / 2.5,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#fff'
    }
})