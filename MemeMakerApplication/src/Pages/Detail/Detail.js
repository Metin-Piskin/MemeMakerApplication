import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ViewShot from "react-native-view-shot";
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { launchImageLibrary } from 'react-native-image-picker';

import Colorlist from '../../Data/Colorlist.json';
import Sizelist from '../../Data/Sizelist.json';
import Fontlist from '../../Data/Fontlist.json';

import Draggable from '../../Components/Draggable';
import Header from '../../Components/Header';
import TextAdd from '../../Components/TextAdd';
import DropDownPicker from '../../Components/DropDownPicker';
import RadioButtonCom from '../../Components/RadioButton';
import SaveButton from '../../Components/SaveButton';

const plusimage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png';

const Detail = (props) => {
    const { item, box_count } = props.route.params;
    const [list, setList] = useState([]);
    const [text, setText] = useState([]);
    const [shouldReverse, setShouldReverse] = useState(false);
    const [drag01, setDrag01] = useState({ x: 175, y: 10 });
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

    const [checked, setChecked] = useState('');
    const [imageGallery, setImageGallery] = useState(null);


    const ref = useRef();
    const takeScreenShot = () => {
        ref.current.capture().then(uri => {
            CameraRoll.save(uri, { type: "photo", album: "Meme Maker" });
            alert("Picture Saved");
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

    const addgaleryToList = () => {
        if (!text) {
            return;
        }
        setList([...list, text]);
        setBtn(false)
    }

    const openGallery = () => {
        const option = {
            mediaType: 'photo',
            qualiy: 1,
        }

        launchImageLibrary(option, (res) => {
            if (res.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (res.errorCode) {
                console.log(res.errorMessage);
            }
            else {
                const data = res.assets[0]
                setImageGallery(data)
            }
        })
    }


    return (
        <LinearGradient
            colors=
            {[
                '#161718',
                '#2C2C2E',
            ]}
            style={styles.container}
        >
            <Header backPress={() => props.navigation.goBack()} />
            <View>
                <TextAdd
                    btn={btn}
                    placeholder={'Text..'}
                    onChangeText={setText}
                    placeholderTextColor={!btn ? 'black' : 'gray'}
                    multiline={true}
                    onPress={box_count ? (addgaleryToList) : (addToList)}
                    disabled={btn}
                />
                <View style={styles.dropdowncontainer}>
                    <DropDownPicker
                        open={colerOpen}
                        value={colervalue}
                        items={colorData}
                        setOpen={setColerOpen}
                        setValue={setColerValue}
                        setItems={setColorData}
                        containerStyle={{ width: 75, zIndex: 300, }}
                        maxHeight={410}
                    />
                    <DropDownPicker
                        open={sizeOpen}
                        value={sizevalue}
                        items={sizeData}
                        setOpen={setSizerOpen}
                        setValue={setSizeValue}
                        setItems={setSizeData}
                        containerStyle={{ width: 75, zIndex: 200 }}
                        selectedItemLabelStyle={{ color: 'black' }}
                        listItemLabelStyle={{ color: 'gray' }}
                    />
                    <DropDownPicker
                        open={fontOpen}
                        value={fontvalue}
                        items={fontData}
                        setOpen={setFontOpen}
                        setValue={setFontValue}
                        setItems={setFontData}
                        containerStyle={{ width: 200, zIndex: 100 }}
                        selectedItemLabelStyle={{ color: 'black' }}
                        listItemLabelStyle={{ color: 'gray' }}
                        maxHeight={410}
                    />
                </View>
                <RadioButtonCom
                    text={'Transparent'}
                    value="first"
                    onPress={() => setChecked('')}
                    status={checked === '' ? 'checked' : 'unchecked'}
                />
                <RadioButtonCom
                    text={'White'}
                    value="White"
                    onPress={() => setChecked('white')}
                    status={checked === 'white' ? 'checked' : 'unchecked'}
                />
            </View>
            {
                item === null ? (
                    <ViewShot
                        ref={ref}
                        style={[
                            styles.viewshot,
                            { width: item?.width, height: item?.height }
                        ]}
                        options={{
                            fileName: 'file-name',
                            format: 'jpg',
                            quality: 0.9
                        }} >
                        {
                            imageGallery === null ? (
                                <TouchableOpacity onPress={openGallery}>
                                    <Image
                                        source={{ uri: plusimage }}
                                        style={[styles.image, { tintColor: '#fff' }]}
                                    />
                                </TouchableOpacity>
                            ) : (
                                <Image
                                    source={{ uri: imageGallery.uri }}
                                    style={styles.image}
                                />
                            )
                        }

                        <SaveButton
                            onPress={takeScreenShot}
                            iconName='save-alt'
                        />
                        {
                            list.map((list, index) => {
                                return (
                                    <Draggable
                                        key={index}
                                        renderText='ffff'
                                        renderSize={100}
                                        renderColor={checked}
                                        x={drag01.x}
                                        y={drag01.y + index * 60}
                                        shouldReverse={shouldReverse}
                                        onReverse={() => {
                                            setShouldReverse(false);
                                            return { x: 0, y: 100 }
                                        }}
                                    >
                                        <Text style={[
                                            styles.draggabletext,
                                            { color: colervalue, fontSize: sizevalue, fontFamily: fontvalue }
                                        ]}>
                                            {list}
                                        </Text>
                                    </Draggable>
                                )
                            })
                        }
                    </ViewShot>
                ) : (
                    <ViewShot
                        ref={ref}
                        style={[
                            styles.viewshot,
                            { width: item?.width, height: item?.height }
                        ]}
                        options={{
                            fileName: 'file-name',
                            format: 'jpg',
                            quality: 0.9
                        }} >
                        <Image
                            source={{ uri: item.url }}
                            style={[
                                styles.itemimage,
                                { width: item.width, height: item.height }
                            ]}
                        />
                        <SaveButton
                            onPress={takeScreenShot}
                            iconName='save-alt'
                        />
                        {
                            list.map((list, index) => {
                                return (
                                    <Draggable
                                        key={index}
                                        renderText='ffff'
                                        renderSize={100}
                                        renderColor={checked}
                                        x={drag01.x}
                                        y={drag01.y + index * 60}
                                        shouldReverse={shouldReverse}
                                        onReverse={() => {
                                            setShouldReverse(false);
                                            return { x: 0, y: 100 }
                                        }}
                                    >
                                        <Text style={[
                                            styles.draggabletext,
                                            { color: colervalue, fontSize: sizevalue, fontFamily: fontvalue }
                                        ]}>
                                            {list}
                                        </Text>
                                    </Draggable>
                                )
                            })
                        }
                    </ViewShot>
                )
            }
        </LinearGradient>
    );
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewshot: {
        maxWidth: 391,
        maxHeight: 391,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 0,
    },
    image: {
        width: 391,
        height: 391,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    itemimage: {
        maxWidth: 391,
        maxHeight: 391,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    dropdowncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    draggabletext: {
        padding: 5,
        maxWidth: 160,
        flexWrap: 'wrap',
    }
})