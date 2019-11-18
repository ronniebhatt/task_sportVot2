import Home from './Components/Home';
import Login from './Components/Login';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawer from './Components/CustomDrawer';
import Profile from './Components/Profile';
import Feather from 'react-native-vector-icons/Feather';
import Report from './Components/Report';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

Feather.loadFont()

const AuthNavigator = createStackNavigator({
    Login: { screen: Login },

}, {
    headerMode: 'none'
});


const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
    Report: { screen: Report }
}, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawer
})




const SwitchNavigator = createSwitchNavigator({
    Login: AuthNavigator,
    App: AppDrawerNavigator,

})

export default createAppContainer(SwitchNavigator);
