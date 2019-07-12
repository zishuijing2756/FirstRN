import React from 'react';
import {Button, Image, View, Text, TextInput} from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'; // 1.0.0-beta.27
const AppStackNavigator = createStackNavigator(
    {
        HomePage: {
            screen: HomePage
        },
        Page1: {
            screen: Page1,
            navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.name}页面名`//动态设置
            })
        },
        Page2: {
            screen: Page2,
            navigationOptions: {//在这里定义每个页面的导航属性，静态配置
                title: "This is Page2",
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: (props) => {
                const {navigation} = props;
                const {state, setParams} = navigation;
                const {params} = state;
                return {
                    title: params.title ? params.title : 'This is Page3',
                    headerRight: (
                        <Button title={params.mode === 'edit' ? '保存' : '编辑'}
                                onPress={() => {
                                    setParams({
                                        mode: params.mode === 'edit' ? '' : 'edit'
                                    })
                                }}
                        />
                    ),
                }
            }
        }, defaultNavigationOptions: {}
    },
);

export default class HomePage extends Component {
    //定义页面导航属性
    static navigationOptions = {
        title: 'Home',
        headerBackTitle: '返回',//设置返回此页面的返回按钮文案，有长度限制
    };

    render() {
        const {navigation} = this.props;
        return <View style=>
            <Text style={styles.text}>欢迎来到HomePage</Text>
            <Button title="Go to Page1" onPress={() => {
                navigation.navigate('Page1', {name: '动态的'});
            }}
            />
            <Button title="Go to Page2" onPress={() => {
                navigation.navigate('Page2');
            }}
            />
            <Button title="Go to Page3" onPress={() => {
                navigation.navigate('Page3', {name: 'Devio'});
            }}
            />

        </View>
    }
}

export default class Page3 extends Component {
    render() {
        const {navigation} = this.props;
        const {state, setParams} = navigation;
        const {params} = state;
        const showText = params.mode === 'edit' ? '正在编辑' : '编辑完成';
        return <View style=>
            <Text style={styles.text}>欢迎来到Page3</Text>
            <Text style={styles.showText}>{showText}</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => {
                    setParams({title: text})
                }}
            />
            <Button title="Go Back" onPress={() => {
                navigation.goBack();
            }}
            />

        </View>
    }
}
