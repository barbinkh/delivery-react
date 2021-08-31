
import React from "react";
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { getEstablishments } from "../../redux/actions/EstablishmentActions";

function Home(props) {
    useEffect(() =>{
       props.getEstablishments(0)
    })
    return (<SafeAreaView><Text>HOME</Text></SafeAreaView>)
}

export default connect(null, {getEstablishments})(Home)