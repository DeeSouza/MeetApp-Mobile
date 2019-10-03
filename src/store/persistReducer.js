import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
	const persistedReducer = persistReducer(
		{
			key: 'meetappweb',
			storage,
			whitelist: ['auth', 'user'], // Name Reducers
		},
		reducers,
	);

	return persistedReducer;
};
