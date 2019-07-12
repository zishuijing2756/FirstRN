/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import App from './js/App';
// import ButtonBasics from  './ButtonBasics';
// import Touchables from "./Touchables";
// import ScrolledDown from "./ScrolledDown";
// import FlatListBasics from "./js/FlatListBasics";
// import SectionListBasics from "./js/SectionListBasics";
// import FetchExample from "./js/FetchExample";
// import SimpleAppMovies from "./js/SampleAppMovies";
// import FadeInView from "./js/FadeInView";
// import FlexBoxTest from "./js/FlexBoxTest";
// import navigationTest from "./navigation/navigationTest";
// import navigationTest1 from "./navigation/navigationTest1";
// import navigationTest3 from "./navigation/navigationTest3";
// import navigationTest4 from "./navigation/navigationTest4";
// import navigationTest5 from "./navigation/navigationTest5";


// AppRegistry.registerCompo
// nent(appName,()=>ButtonBasics);
// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName,()=>Touchables);
// AppRegistry.registerComponent(appName,()=>ScrolledDown);
// AppRegistry.registerComponent(appName,()=>FlatListBasics);
// AppRegistry.registerComponent(appName,()=>SectionListBasics);
// AppRegistry.registerComponent(appName,()=>SimpleAppMovies);
// AppRegistry.registerComponent(appName,()=>FadeInView);
// AppRegistry.registerComponent(appName,()=>FlexBoxTest);
// AppRegistry.registerComponent(appName, () => navigationTest);


import {createAppContainer} from "react-navigation";
import {AppStackNavigator} from "./navigators/AppNavigatiors";

const AppStackNavigationContainer=createAppContainer(AppStackNavigator);
AppRegistry.registerComponent(appName, () => AppStackNavigationContainer);
