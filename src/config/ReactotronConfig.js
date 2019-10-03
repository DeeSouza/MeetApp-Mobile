import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
	const tron = Reactotron.configure({
		name: 'MeetApp Mobile',
		port: 8081,
		host: 'localhost',
	})
		.useReactNative()
		.use(reactotronRedux())
		.use(reactotronSaga())
		.connect();

	tron.clear();

	console.tron = tron;
}
