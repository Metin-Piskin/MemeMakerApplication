import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    homecontainer: {
        backgroundColor: '#161718',
        //borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        paddingVertical: 5
    },
    hometext: {
        fontFamily: 'SpecialElite-Regular',
        fontSize: 30,
        color: '#fff'
    },
    homepluscontainer: {
        // borderWidth: 1,
        marginLeft: 45,
        borderRadius: 5,
        borderColor: '#fff'
    },
    homeplus: {
        // padding: 5,
        color: '#fff',
        fontSize: 44,
        paddingHorizontal: 10,
    },
    detailcontainer: {
        backgroundColor: '#161718',
        borderColor: '#fff',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
        paddingVertical: 5,
    },
    backbutton: {
        alignSelf: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: 30,
        fontFamily: 'SpecialElite-Regular',
        color: '#fff',
        justifyContent: 'center',
        left: Dimensions.get('screen').width / 2.95
    },

})