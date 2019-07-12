/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class HomePage extends Component {
    static navigationOptions = {
        title: 'Home',
        headerBackTitle: '返回哈哈'//设置返回此页面的返回按钮文案，有长度限制
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to HomePage!</Text>
                <Button title={'Go to Page1'}
                        onPress={() => {
                            navigation.navigate('Page1', {name: '动态的'})
                        }}
                />
                <Button title={'Go to Page2'}
                        onPress={() => {
                            navigation.navigate('Page2')
                        }}
                />
                <Button title={'Go to Page3'}
                        onPress={() => {
                            navigation.navigate('Page3', {name: 'Devio'})
                        }}
                />
                <Button title={'Go to Bottom'}
                        onPress={() => {
                            navigation.navigate('Bottom')
                        }}
                />
                <Button title={'Go to Top'}
                        onPress={() => {
                            navigation.navigate('Top')
                        }}
                />
                <Button title={'Go to DrawerNav'}
                        onPress={() => {
                            navigation.navigate('DrawerNav')
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
