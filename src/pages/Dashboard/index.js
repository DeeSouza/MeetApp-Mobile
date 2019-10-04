import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import { Container, ListMeetups, NoMeet } from './styles';

export default function Dashboard() {
	const [meetups, setMeetups] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	async function loadMeetups() {
		setRefreshing(true);

		const response = await api.get('meetups', {
			params: {
				date: '2019-10-24',
			},
		});

		setRefreshing(false);
		setMeetups(response.data);
	}

	/**
	 * Get meetups than user logged can subscription
	 */
	useEffect(() => {
		loadMeetups();
	}, []);

	return (
		<Background>
			<Container>
				<Header />

				{meetups ? (
					<ListMeetups
						data={meetups}
						refreshing={refreshing}
						onRefresh={loadMeetups}
						keyExtractor={meet => String(meet.id)}
						renderItem={({ item }) => <Meetup data={item} />}
					/>
				) : (
					<NoMeet>
						Que pena. Não existe nenhum meetup nesse dia!
					</NoMeet>
				)}
			</Container>
		</Background>
	);
}

function IconTab({ tintColor }) {
	return <Icon name="format-list-bulleted" size={20} color={tintColor} />;
}

Dashboard.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
	}).isRequired,
};

IconTab.propTypes = {
	tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
	tabBarLabel: 'Meetups',
	tabBarIcon: IconTab,
};
