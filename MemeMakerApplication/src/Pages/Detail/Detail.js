import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Draggable from '../../Components/Draggable';
import Header from '../../Components/Header';

export default function App(props) {
    const { item } = props.route.params;
    const [shouldReverse, setShouldReverse] = useState(false);
    const [list, setList] = useState([]);
    const [text, setText] = useState([]);
    const [drag01, setDrag01] = useState({ x: 10, y: 50 });
    const [btn, setBtn] = useState(false);

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

    return (
        <>
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
                <Image
                    source={{ uri: item.url }}
                    style={{
                        width: item.width,
                        maxWidth: 391,
                        height: item.height,
                        maxHeight: 341,
                        resizeMode: 'contain',
                    }}
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
                                <Text
                                    style={{
                                        color: '#000',
                                        padding: 5,
                                        maxWidth: 160,
                                        lineHeight: 23,
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    {list}
                                </Text>
                            </Draggable>

                        )
                    })
                }

                <View>
                    <Text>{item.box_count}</Text>
                    <TextInput
                        testID='input-area'
                        placeholder='Text..'
                        onChangeText={setText}
                        style={styles.imput}
                    />
                    <Button title='Add Text' onPress={addToList} disabled={btn} />
                </View>

            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: Dimensions.get('screen').width,
        justifyContent: 'space-between',
    },
    imput: {
        backgroundColor: '#e0e0e0',
        margin: 10,
        borderRadius: 10,
        padding: 10
    }
})