import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
    componentDidMount(){
        console.assert('HomeScreen->componentDidMount')
    }

    componentWillMount(){
        console.assert('HomeScreen->componentWillMount')
    }

    componentWillUnmount() {
        console.assert('HomeScreen->componentWillUnmount')
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details',{name:"yangnana",age:"ssss"})}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    componentDidMount(){
        console.assert('DetailsScreen->componentWillUnmount')

    }

    componentWillMount(){
        console.assert('DetailsScreen->componentWillMount')

    }

    componentWillUnmount() {
        console.assert('DetailsScreen->componentWillUnmount')

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>

                <Button
                    title="Go to Details... again"
                    //push时，向堆栈中添加新的路由
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    //自动返回上一页
                    onPress={() => this.props.navigation.goBack()}

                />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
