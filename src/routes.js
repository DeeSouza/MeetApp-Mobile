import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import settings from '~/styles/variables';

// Login and Register
import Login from './pages/Login';
import Register from './pages/Register';

// Dashboard
import Dashboard from './pages/Dashboard';

// Perfil
import Profile from './pages/Profile';

export default (isSigned = false) =>
	createAppContainer(
		createSwitchNavigator(
			{
				Sign: createSwitchNavigator({
					Login,
					Register,
				}),
				App: createBottomTabNavigator(
					{
						Dashboard,
						Profile,
					},
					{
						resetOnBlur: true,
						tabBarOptions: {
							keyboardHidesTabBar: true,
							activeTintColor: '#FFF',
							inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
							style: {
								backgroundColor: settings.tabMenuColor,
								borderTopColor: settings.tabMenuColor,
							},
						},
					},
				),
			},
			{
				initialRouteName: isSigned ? 'App' : 'Sign',
			},
		),
	);
