import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';

export default (isSigned = false) =>
	createAppContainer(
		createSwitchNavigator(
			{
				Sign: createSwitchNavigator({
					Login,
					Register,
				}),
			},
			{
				initialRouteName: isSigned ? 'App' : 'Login',
			},
		),
	);
