import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import ViewShot from "react-native-view-shot";
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

import Draggable from '../../Components/Draggable';
import Header from '../../Components/Header';

const Detail = (props) => {
    const { item } = props.route.params;
    const [list, setList] = useState([]);
    const [text, setText] = useState([]);
    const [shouldReverse, setShouldReverse] = useState(false);
    const [drag01, setDrag01] = useState({ x: 25, y: 200 });
    const [btn, setBtn] = useState(false);

    const [colerOpen, setColerOpen] = useState(false);
    const [colervalue, setColerValue] = useState('black');
    const [colorData, setColorData] = useState(Colorlist);

    const [sizeOpen, setSizerOpen] = useState(false);
    const [sizevalue, setSizeValue] = useState(14);
    const [sizeData, setSizeData] = useState(Sizelist);

    const [fontOpen, setFontOpen] = useState(false);
    const [fontvalue, setFontValue] = useState('null');
    const [fontData, setFontData] = useState(Fontlist);


    const ref = useRef();
    const takeScreenShot = () => {
        ref.current.capture().then(uri => {
            CameraRoll.save(uri, { type: "photo", album: "Meme Maker" });
            alert("Took screenshot");
        });
    };

    const addToList = () => {
        if (!text) {
            return;
        }
        setList([...list, text]);
        {
            list.length + 1 === item.box_count ? (
                setBtn(true)
            ) : (
                setBtn(false)
            )
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            width: item.width,
            maxWidth: 391,
            height: item.height,
            maxHeight: 341,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: 110,
        },
        list: {
            color: colervalue,
            padding: 5,
            maxWidth: 160,
            //lineHeight: 35,
            flexWrap: 'wrap',
            fontSize: sizevalue,
            fontFamily: fontvalue
        },
        imput: {
            backgroundColor: '#fff',
            margin: 0,
            borderRadius: 10,
            padding: 7,
            flex: 1
        },
        imputnull: {
            backgroundColor: '#e0e0e0',
            margin: 0,
            borderRadius: 10,
            padding: 7,
            flex: 1
        },
        addtextbutton: {
            backgroundColor: '#FFA351FF',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            marginLeft: 10,
            borderRadius: 10,
            borderWidth: 5,
            borderColor: '#fff',
        },
        addtextbuttonnull: {
            backgroundColor: '#FFA351FF',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            marginLeft: 10,
            borderRadius: 10,
            borderWidth: 5,
            borderColor: '#e0e0e0',
        },
        addtext: {
            color: '#fff',
            fontFamily: 'PermanentMarker-Regular',
        },
        addtextnull: {
            color: '#e0e0e0',
            fontFamily: 'PermanentMarker-Regular',
        },
        editcontainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 15
        },
        dropdowncontainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15
        },
        dropdownspam: {
            backgroundColor: '#fff',
            borderWidth: 0,
        }
    })

    return (
        <LinearGradient
            colors=
            {[
                '#FFA351FF',
                '#FFBE7BFF',
                '#EED971FF',
            ]}
            style={styles.container}
        >
            <Header backPress={() => props.navigation.goBack()} />
            <View>
                <View style={styles.editcontainer}>
                    <TextInput
                        testID='input-area'
                        placeholder='Text..'
                        onChangeText={setText}
                        style={[styles.imput, btn && styles.imputnull]}
                        placeholderTextColor={!btn ? 'black' : 'gray'}
                        multiline={true}
                    />
                    <TouchableOpacity
                        onPress={addToList}
                        disabled={btn}
                        style={[styles.addtextbutton, btn && styles.addtextbuttonnull]}
                    >
                        <Text
                            style={[styles.addtext, btn && styles.addtextnull]}>
                            ADD
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.dropdowncontainer}>
                    <DropDownPicker
                        open={colerOpen}
                        value={colervalue}
                        items={colorData}
                        setOpen={setColerOpen}
                        setValue={setColerValue}
                        setItems={setColorData}
                        containerStyle={{
                            width: 75,
                            zIndex: 300,
                        }}
                        style={styles.dropdownspam}
                        dropDownContainerStyle={styles.dropdownspam}
                        disableBorderRadius={false}
                        maxHeight={410}
                    />
                    <DropDownPicker
                        open={sizeOpen}
                        value={sizevalue}
                        items={sizeData}
                        setOpen={setSizerOpen}
                        setValue={setSizeValue}
                        setItems={setSizeData}
                        containerStyle={{
                            width: 75,
                            zIndex: 200
                        }}
                        style={styles.dropdownspam}
                        dropDownContainerStyle={styles.dropdownspam}
                        selectedItemLabelStyle={{ color: 'black' }}
                        listItemLabelStyle={{ color: 'gray' }}
                        disableBorderRadius={false}
                    />
                    <DropDownPicker
                        open={fontOpen}
                        value={fontvalue}
                        items={fontData}
                        setOpen={setFontOpen}
                        setValue={setFontValue}
                        setItems={setFontData}
                        containerStyle={{
                            width: 200,
                            zIndex: 100
                        }}
                        style={styles.dropdownspam}
                        dropDownContainerStyle={styles.dropdownspam}
                        selectedItemLabelStyle={{ color: 'black' }}
                        listItemLabelStyle={{ color: 'gray' }}
                        disableBorderRadius={false}
                        maxHeight={410}
                    />
                </View>
            </View>
            <ViewShot
                ref={ref}
                style={styles.image}
                options={{
                    fileName: 'file-name',
                    format: 'jpg',
                    quality: 0.9
                }} >
                <Image
                    source={{ uri: item.url }}
                    style={{
                        width: item.width,
                        maxWidth: 391,
                        height: item.height,
                        maxHeight: 341,
                        resizeMode: 'contain',
                        alignSelf: 'center',

                    }}
                />
                <Button title='Bas' onPress={takeScreenShot} />
                {
                    list.map((list, index) => {
                        return (
                            <Draggable
                                key={index}
                                renderText='ffff'
                                renderSize={100}
                                renderColor=''
                                x={drag01.x + index * 60}
                                y={drag01.y}
                                shouldReverse={shouldReverse}
                                onReverse={() => {
                                    setShouldReverse(false);
                                    return { x: 0, y: 100 }
                                }}
                            >
                                <Text style={styles.list}>
                                    {list}
                                </Text>
                            </Draggable>

                        )
                    })
                }
            </ViewShot>

        </LinearGradient>
    );
}

export default Detail;

const Colorlist = [
    {
        "label": "⚫",
        "value": "black"
    },
    {
        "label": "🔴",
        "value": "red"
    },
    {
        "label": "⚪",
        "value": "white"
    },
    {
        "label": "🟢",
        "value": "green"
    },
    {
        "label": "🔵",
        "value": "blue"
    },
    {
        "label": "🟡",
        "value": "yellow"
    },
    {
        "label": "🟣",
        "value": "purple"
    },
    {
        "label": "🟠",
        "value": "orange"
    },
    {
        "label": "🟤",
        "value": "brown"
    },
]

const Sizelist = [
    {
        "label": 10,
        "value": 10
    },
    {
        "label": 14,
        "value": 14
    },
    {
        "label": 20,
        "value": 20
    },
    {
        "label": 26,
        "value": 26
    },
    {
        "label": 30,
        "value": 30
    },
]

const Fontlist = [
    {
        "label": 'Default',
        "value": 'null'
    },
    {
        "label": 'SpecialElite',
        "value": 'SpecialElite-Regular'
    },
    {
        "label": 'Pacifico',
        "value": 'Pacifico-Regular'
    },
    {
        "label": 'BungeeShade',
        "value": 'BungeeShade-Regular'
    },
    {
        "label": 'DiplomataSC',
        "value": 'DiplomataSC-Regular'
    },
    {
        "label": 'Caveat',
        "value": 'Caveat-Medium'
    },
    {
        "label": 'HanaleiFill',
        "value": 'HanaleiFill-Regular'
    },
    {
        "label": 'Nabla',
        "value": 'Nabla-Regular-VariableFont_EDPT,EHLT'
    },
    {
        "label": 'PermanentMarker',
        "value": 'PermanentMarker-Regular'
    },

]