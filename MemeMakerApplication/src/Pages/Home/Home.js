import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import usefatch from '../../Hook';
import MemesCard from '../../Components/MemesCard';

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
        <FlatList
            data={veri.data.memes}
            renderItem={RenderVeri}
        />

    )
}

export default Home;