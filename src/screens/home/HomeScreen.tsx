
import React from "react";
import { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image } from "react-native";
import { connect } from "react-redux";
import { IFoodProviderModel } from "../../data/api/foodprovider/IFoodProvideModel";
import { getEstablishments } from "../../redux/actions/EstablishmentActions";

function Home(props) {
    useEffect(() => {
        props.getEstablishments(0)
    }, [])

    const Item = ({ data }) => (
        <View style={styles.item}>
            <Image style={styles.banner} source={{ uri: data.image }}></Image>
            <Text style={styles.title}>{data.title}</Text>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item data={item} />
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={props.foodProviders}
                renderItem={renderItem}
                keyExtractor={item => String(item.id)}
            />
        </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#ebca28"
    },
    banner: {
        height: '60%',
        width: '100%',
    },
    item: {
        height: 250,
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
    },
    title: {
        margin: 16,
        fontSize: 32,
    },
});

function mapStateToProps(state) {
    return { foodProviders: state.foodProvider.results }
}

export default connect(mapStateToProps, { getEstablishments })(Home)