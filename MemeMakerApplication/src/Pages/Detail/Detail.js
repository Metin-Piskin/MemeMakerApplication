import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Draggable from '../../Components/Draggable';
import Header from '../../Components/Header';

const Detail = (props) => {
    const { item } = props.route.params;
    const [shouldReverse, setShouldReverse] = useState(false);
    const [list, setList] = useState([]);
    const [text, setText] = useState([]);
    const [drag01, setDrag01] = useState({ x: 20, y: 160 });
    const [btn, setBtn] = useState(false);
    const [color, setColor] = useState('black');
    const [size, setSize] = useState(14);

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
            color: color,
            padding: 5,
            maxWidth: 160,
            lineHeight: 23,
            flexWrap: 'wrap',
            fontSize: size
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
            paddingHorizontal: 13,
            borderRadius: 80,
            borderWidth: 5,
            borderColor: '#FFBE7BFF'
        },
        btncolorNormal: {
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btncolorPress: {
            borderWidth: 3,
            borderColor: '#EED971FF',
            width: 36,
            height: 36,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnsizeNormal: {
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnsizePress: {
            borderWidth: 3,
            borderColor: '#EED971FF',
            width: 30,
            height: 30,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
        },
        editcontainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 10
        },
        innercontainer: {
            flexDirection: 'row'
        },
        sizecontainer: {
            flexDirection: 'row',
            marginHorizontal: 25
        },
    })

    const setColorFilter = color => {
        setColor(color)
    }

    const setSizeFilter = size => {
        setSize(size)
    }

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
                        <Text style={{ color: '#000' }}>
                            Add
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.innercontainer}>
                    <View
                        style={styles.sizecontainer}
                    >
                        {
                            Colorlist.map(e => (
                                <TouchableOpacity
                                    onPress={() => setColorFilter(e.color)}
                                    key={e.id}
                                    style={[styles.btncolorNormal, color === e.color && styles.btncolorPress]}
                                >
                                    <View
                                        style={{
                                            backgroundColor: e.color,
                                            width: 30,
                                            height: 30,
                                            borderRadius: 15,
                                        }}
                                    />
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View
                        style={styles.sizecontainer}
                    >
                        {
                            Fontsizelist.map(e => (
                                <TouchableOpacity
                                    onPress={() => setSizeFilter(e.size)}
                                    key={e.id}
                                    style={[styles.btnsizeNormal, size === e.size && styles.btnsizePress]}
                                >
                                    <Text style={{ color: '#000' }}>
                                        {e.size}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>

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
                            x={drag01.x + index * 60}
                            y={drag01.y + 30}
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
        id: 1,
        "color": "black"
    },
    {
        id: 2,
        "color": "red"
    },
    {
        id: 3,
        "color": "white"
    },
    {
        id: 4,
        "color": "gray"
    },
]

const Fontsizelist = [
    {
        id: 1,
        "size": 14
    },
    {
        id: 2,
        "size": 20
    },
    {
        id: 3,
        "size": 26
    },
    {
        id: 4,
        "size": 30
    },
]