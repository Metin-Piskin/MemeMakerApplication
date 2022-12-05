import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

import Draggable from '../../Components/Draggable';
import Header from '../../Components/Header';

const Detail = (props) => {
    const { item } = props.route.params;
    const [list, setList] = useState([]);
    const [text, setText] = useState([]);
    const [shouldReverse, setShouldReverse] = useState(false);
    const [drag01, setDrag01] = useState({ x: 270, y: 170 });
    const [btn, setBtn] = useState(false);

    const [colerOpen, setColerOpen] = useState(false);
    const [colervalue, setColerValue] = useState('black');
    const [colorData, setColorData] = useState(Colorlist);

    const [sizeOpen, setSizerOpen] = useState(false);
    const [sizevalue, setSizeValue] = useState(14);
    const [sizeData, setSizeData] = useState(Sizelist);

    const [fontOpen, setFontOpen] = useState(false);
    const [fontvalue, setFontValue] = useState('SpecialElite-Regular');
    const [fontData, setFontData] = useState(Fontlist);


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
            marginTop: 15,
        },
        list: {
            color: colervalue,
            padding: 5,
            maxWidth: 160,
            lineHeight: 23,
            flexWrap: 'wrap',
            fontSize: sizevalue,
            fontFamily: fontvalue
        },
        imput: {
            backgroundColor: '#e0e0e0',
            margin: 10,
            borderRadius: 10,
            padding: 7,
            flex: 1
        },
        addtextbutton: {
            backgroundColor: '#FFA351FF',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 8,
            borderRadius: 80,
            borderWidth: 5,
            borderColor: '#fff'
        },
        editcontainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 10
        },

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
                        style={styles.imput}
                        multiline={true}
                    />
                    <TouchableOpacity
                        onPress={addToList}
                        disabled={btn}
                        style={styles.addtextbutton}
                    >
                        <Text style={{ color: '#fff', fontFamily: 'BungeeShade-Regular', }}>
                            ADD
                        </Text>
                    </TouchableOpacity>
                </View>

                <DropDownPicker
                    open={colerOpen}
                    value={colervalue}
                    items={colorData}
                    setOpen={setColerOpen}
                    setValue={setColerValue}
                    setItems={setColorData}

                    style={{
                        width: 200,
                    }}
                />


                <DropDownPicker
                    open={sizeOpen}
                    value={sizevalue}
                    items={sizeData}
                    setOpen={setSizerOpen}
                    setValue={setSizeValue}
                    setItems={setSizeData}

                    style={{
                        width: 200,

                    }}
                />
                <DropDownPicker
                    open={fontOpen}
                    value={fontvalue}
                    items={fontData}
                    setOpen={setFontOpen}
                    setValue={setFontValue}
                    setItems={setFontData}

                    style={{
                        width: 200,

                    }}
                />

            </View>
            <Image
                source={{ uri: item.url }}
                style={styles.image}
            />
            {
                list.map((list, index) => {
                    return (
                        <Draggable
                            key={index}
                            renderText='ffff'
                            renderSize={100}
                            renderColor=''
                            x={drag01.x}
                            y={drag01.y + index * 60}
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
        </LinearGradient>
    );
}

export default Detail;

const Colorlist = [
    {
        "label": "black",
        "value": "black"
    },
    {
        "label": "red",
        "value": "red"
    },
    {
        "label": "white",
        "value": "white"
    },
    {
        "label": "gray",
        "value": "gray"
    },
]

const Sizelist = [
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
        "label": 'SpecialElite-Regular',
        "value": 'SpecialElite-Regular'
    },
    {
        "label": 'Pacifico-Regular',
        "value": 'Pacifico-Regular'
    },
    {
        "label": 'BungeeShade-Regular',
        "value": 'BungeeShade-Regular'
    },
    {
        "label": 'DiplomataSC-Regular',
        "value": 'DiplomataSC-Regular'
    },
]