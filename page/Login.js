/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ImageBackground, ScrollView} from 'react-native';

type Props = {};
export default class Login extends Component<Props> {
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Login!</Text>
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
