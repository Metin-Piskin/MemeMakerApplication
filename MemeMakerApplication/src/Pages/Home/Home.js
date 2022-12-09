import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import LinearGradient from 'react-native-linear-gradient';

import usefatch from '../../Hook';
import MemesCard from '../../Components/MemesCard';
import Header from '../../Components/Header';

const url = 'https://api.imgflip.com/get_memes';

const Home = ({ navigation }) => {
    const { veri, loading, error } = usefatch(url);

    if (loading) {
        return;
    };

    if (error) {
        return;
    };

    const RenderVeri = ({ item }) => {
        return (
            <MemesCard
                veri={item}
                onPress={() => navigation.navigate('Detail', { item })}
            />
        );
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
                <Header home={true} detailPress={() => navigation.navigate('Detail', { item: null })} />
                <StatusBar barStyle={'light-content'} backgroundColor={'#FFA351FF'} />
                <FlashList
                    data={veri.data.memes}
                    renderItem={RenderVeri}
                    numColumns={2}
                    estimatedItemSize={200}
                    contentContainerStyle={{
                        paddingHorizontal: 5,
                        //paddingTop: 70
                    }}
                />
            </LinearGradient>
        </>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})