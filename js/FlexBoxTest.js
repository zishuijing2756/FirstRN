import React from 'react';
import {Text, View} from 'react-native'

export default class FlexBoxTest extends React.Component{
    render() {
        return(
            <View style={ {flexDirection:"row",backgroundColor:"darkgray", margin:10,justifyContent:"flex-end"}}>
                <View style={{width:80,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>1</Text>
                </View>
                <View style={{width:80,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>1</Text>
                </View>
                <View style={{width:80,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>1</Text>
                </View>
            </View>
        );
    }
}
