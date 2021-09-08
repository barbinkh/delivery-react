import React from "react";
import tw from "tailwind-react-native-classnames"
import { View , Text} from "react-native";

export default function OpenClose(props) {
    console.log("---------- ", props.deliveryPrice);
    
    return (
        <View style={tw`absolute top-32 right-3`}>
        <Text style={tw`w-16 self-end  text-white p-2 text-center rounded-sm ${props.isOpen ? 'bg-green-500' : 'bg-red-500'}`}>
            {props.isOpen? "Open" : "Close"}
        </Text>
        <Text style={tw`mt-3 text-base self-end`}>
            Delivery fee: {props.deliveryPrice} uah
        </Text>
        </View>
    )
}