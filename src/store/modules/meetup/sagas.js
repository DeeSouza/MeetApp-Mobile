import { Alert } from 'react-native';
import { takeLatest, call, all, put } from 'redux-saga/effects';
import api from '~/services/api';
import {
	meetUpdateSuccess,
	meetUpdateFailure,
	meetCancelSuccess,
	meetCancelFailure,
	meetCreateSuccess,
	meetCreateFailure,
} from './actions';

/**
 * Create a meetup
 * @param {object} payload
 */

export function* createMeet({ payload }) {
	try {
		console.tron.log(payload);
		yield call(api.post, '/meetups', payload.meet);

		Alert.alert('Yeeah!', 'Meetup criado com sucesso!');

		yield put(meetCreateSuccess({}));
	} catch (error) {
		// Call Action (PUT)
		yield put(meetCreateFailure());

		// Alert
		Alert.alert('Atenção!', error.response.data.error);
	}
}

/**
 * Update meetup
 * @param {object} payload Data from meet
 */
export function* updateMeet({ payload }) {
	try {
		const response = yield call(
			api.put,
			`meetups/${payload.id}`,
			payload.meet,
		);

		Alert.alert('Yeeah!', 'Meetup atualizado com sucesso!');

		yield put(meetUpdateSuccess(response));
	} catch (error) {
		// Call Action (PUT)
		yield put(meetUpdateFailure());

		// Alert
		Alert.alert('Atenção!', error.response.data.error);
	}
}

/**
 *
 * @param {string} payload
 */
export function* cancelMeet({ payload }) {
	try {
		yield call(api.delete, `meetups/${payload.id}`);

		Alert.alert('Yeeah!', 'Meetup cancelado com sucesso!');

		// history.push('/dashboard');

		yield put(meetCancelSuccess());
	} catch (error) {
		// Call Action (PUT)
		yield put(meetCancelFailure());

		// Alert
		Alert.alert('Atenção!', error.response.data.error);
	}
}

// Observers
export default all([
	takeLatest('@meet/UPDATE_REQUEST', updateMeet),
	takeLatest('@meet/CANCEL_REQUEST', cancelMeet),
	takeLatest('@meet/CREATE_REQUEST', createMeet),
]);
