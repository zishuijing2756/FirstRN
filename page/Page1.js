/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View,  Button} from 'react-native';

export default class Page1 extends Component {
    render() {
       const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Page1!</Text>
                <Button title={'Go Back'}
                        onPress={()=>{
                            navigation.goBack();
                        }}
                />
                <Button title={'jump to Page4'}
                        onPress={()=>{
                            navigation.navigate('Page4');
                        }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
