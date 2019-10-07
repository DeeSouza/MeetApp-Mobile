import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { isBefore, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import {
	Container,
	ListMeetups,
	NoMeet,
	NoMeetText,
	LoadingMeet,
} from './styles';

export default function Subscriptions() {
	const [meetups, setMeetups] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const [loading, setLoading] = useState(false);

	/**
	 * Get meetups than user logged can subscription
	 */
	useEffect(() => {
		// Load all meetups than user logged not is owner
		async function loadMeetups() {
			try {
				setLoading(true);

				const response = await api.get('subscriptions');

				const data = response.data.map(meet => {
					return {
						...meet,
						passed: isBefore(parseISO(meet.date), new Date()),
					};
				});

				setMeetups(data);
				setLoading(false);
				setRefreshing(false);
			} catch (err) {
				setMeetups([]);
				setLoading(false);
				setRefreshing(false);
			}
		}

		loadMeetups();
	}, []); // eslint-disable-line

	// On refreshing from meetups
	function refreshLoadMeetups() {
		setRefreshing(true);
	}

	return (
		<Background>
			<Container>
				<Header />

				{meetups.length > 0 ? (
					<ListMeetups
						data={meetups}
						refreshing={refreshing}
						onRefresh={refreshLoadMeetups}
						keyExtractor={meet => String(meet.id)}
						renderItem={({ item }) => (
							<Meetup
								data={item}
								textButton="Cancelar Inscrição"
							/>
						)}
					/>
				) : (
					!loading && (
						<NoMeet>
							<Icon name="event-busy" size={30} color="#999" />
							<NoMeetText>
								Não existe nenhum meetup nesse dia.
							</NoMeetText>
						</NoMeet>
					)
				)}

				{loading && (
					<LoadingMeet>
						<ActivityIndicator size="small" color="#FFF" />
					</LoadingMeet>
				)}
			</Container>
		</Background>
	);
}

function IconTab({ tintColor }) {
	return <Icon name="local-offer" size={20} color={tintColor} />;
}

Subscriptions.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
	}).isRequired,
};

IconTab.propTypes = {
	tintColor: PropTypes.string.isRequired,
};

Subscriptions.navigationOptions = {
	tabBarLabel: 'Inscrições',
	tabBarIcon: IconTab,
};
