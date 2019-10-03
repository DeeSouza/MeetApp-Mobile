import AsyncStorage from '@react-native-community/async-storage';

import { persistReducer } from 'redux-persist';

export default reducers => {
	const persistedReducer = persistReducer(
		{
			key: 'meetappweb',
			storage: AsyncStorage,
			whitelist: ['auth', 'user'], // Name Reducers
		},
		reducers,
	);

	return persistedReducer;
};
