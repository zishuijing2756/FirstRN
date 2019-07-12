import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator,
    DrawerItems, StackNavigatorConfig
} from "react-navigation";
import {Button, Platform, ScrollView, SafeAreaView} from 'react-native'
import HomePage from '../page/HomePage'
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Page3 from '../page/Page3'
import Page5 from '../page/Page5'
import Page4 from '../page/Page4'
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const DrawerNav = createDrawerNavigator(
    {
        Page4: {
            screen: Page4,
            navigationOptions: {
                drawerLabel: 'Page4',
                drawerIcon: ({tintColor}) => {
                    return <MaterialIcons
                        name={'3d-rotation'}
                        size={24}
                        style={{color: tintColor}}
                    />
                },
            },
        },
        Page5: {
            screen: Page5,
            navigationOptions: {
                drawerLabel: 'Page5',
                drawerIcon: ({tintColor}) => {
                    return <MaterialIcons
                        name={'move-to-inbox'}
                        size={24}
                        style={{color: tintColor}}
                    />
                },
            }
        },
    },
    {
        initialRouteName: 'Page4',
        order: ['Page4', 'Page5'],//路由数组，用于定义抽屉项目的顺序
        /**
         * 设置是否响应手势
         * 'unlocked'   可以通过手势和代码 打开关闭抽屉
         * 'locked-closed' 抽屉关闭状态  不能通过手势打开  只能通过代码实现
         * 'locked-open'  抽屉打开状态  不能通过手势关闭  只能通过代码实现
         */
        drawerLockMode: 'unlocked',
        drawerBackgroundColor: 'red',
        //配置抽屉内容
        contentOptions: {
            activeTintColor: 'blue',//活动选项卡的标签和图标颜色。
            itemsContainerStyle: {
                marginVertical: 0,
            },
            iconContainerStyle: {
                opacity: 1
            }
        },
        //默认为left
        drawerPosition: 'right',
        //启用原生动画，默认为true
        useNativeAnimations: true,
        //自定义抽屉导航布局
        contentComponent: (props) => {
            return <ScrollView style={{backgroundColor: '#789', flex: 1}}>
                <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
                    <DrawerItems {...props}/>
                </SafeAreaView>
            </ScrollView>
        }
    },
);
export const AppTopNavigation = createMaterialTopTabNavigator(
    {
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: 'All'
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: 'IOS'
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: 'React'
            }
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: 'ReactNative'
            }
        },
        Page5: {
            screen: Page5,
            navigationOptions: {
                tabBarLabel: 'Devio'
            }
        },

    },
    {
        tabBarOptions: {
            tabStyle: {mindWidth: 50},
            upperCaseLabel: false,//是否使用标签大写，默认为true
            scrollEnabled: true,//是否支持选项卡滚动，默认false
            style: {
                backgroundColor: "#678"//TabBar的背景色
            },
            indicatorStyle: {
                height: 2,
                backgroundColor: 'white',
            },//标签指示器的样式
            labelStyle: {
                fontSize: 13,
                marginTop: 6,
                marginBottom: 6,
            },//文字的样式
        },

    }
);
export const AppBottomNavigation = createBottomTabNavigator(
    {
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: '最热',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            },
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: '趋势',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-people'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            },
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: '收藏',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-chatboxes'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            },
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-aperture'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : 'red',
        },
    }
);
export const AppStackNavigator = createStackNavigator(
    {

        HomePage: {
            screen: HomePage

        },
        Page1: {
            screen: Page1,
            navigationOptions: ({navigation}) => ({//在这里定义每个页面的导航数据，动态配置
                title: `${navigation.state.params.name}页面名`
            })
        },
        Page2: {
            screen: Page2,
            navigationOptions: {//在这里定义每个页面的导航数据，静态配置
                title: "This is Page2"
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
                        <Button
                            title={params.mode === 'edit' ? '保存' : '编辑'}
                            onPress={() => setParams({
                                mode: params.mode === 'edit' ? '' : 'edit'
                            })}
                        />
                    )
                }
            }
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                title: 'This is Page4'
            }
        },
        Page5: {
            screen: Page5,
            navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.name}页面名`
            })
        },
        Bottom: {
            screen: AppBottomNavigation,
            navigationOptions: {
                title: 'BottomNavigator'
            }
        },
        Top: {
            screen: AppTopNavigation,
            navigationOptions: {
                title: 'TopNavigator'
            }
        },
        DrawerNav: {
            screen: DrawerNav,
            navigationOptions: {
                title: 'This is DrawerNavigator'
            },

        }
    },
    {
        initialRouteName: 'HomePage',
        headerMode: 'screen',
        headerBackTitleVisible: true,//设置返回上一页的返回按钮的文案是否显示
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                //设置标题居中显示
                flex: 1,
                textAlign: 'center',
            },
            // headerLeft:{
            //     title:'Back'
            // },
        },
    }
);
