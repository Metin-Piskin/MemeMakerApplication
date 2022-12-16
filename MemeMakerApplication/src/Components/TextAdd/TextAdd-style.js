import { StyleSheet } from "react-native";

export default StyleSheet.create({
    imput: {
        backgroundColor: '#fff',
        margin: 0,
        borderRadius: 10,
        padding: 7,
        flex: 1
    },
    imputnull: {
        backgroundColor: '#2C2C2E',
        margin: 0,
        borderRadius: 10,
        padding: 7,
        flex: 1
    },
    addtextbutton: {
        backgroundColor: '#161718',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginLeft: 10,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#fff',
    },
    addtextbuttonnull: {
        backgroundColor: '#161718',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginLeft: 10,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#2C2C2E',
    },
    addtext: {
        color: '#fff',
        fontFamily: 'SpecialElite-Regular',
    },
    addtextnull: {
        color: '#2C2C2E',
        fontFamily: 'SpecialElite-Regular',
    },
    editcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
})