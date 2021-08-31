
import React from "react";
import { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView} from "react-native";
import { connect } from "react-redux";
import { getEstablishments } from "../../redux/actions/EstablishmentActions";

function Home(props) {
    useEffect(() => {

    })
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    return (<SafeAreaView style = {styles.container}>
        <FlatList
            data={props.getEstablishments(0)}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        /></SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  

export default connect(null, { getEstablishments })(Home)