import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isBefore, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import { Container, ListMeetups, NoMeet, NoMeetText } from './styles';

export default function Dashboard() {
	const [meetups, setMeetups] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	// Load all meetups than user logged not is owner
	async function loadMeetups() {
		setRefreshing(true);

		try {
			const response = await api.get('meetups', {
				params: {
					date: '2019-10-02',
				},
			});

			const data = response.data.map(meet => {
				return {
					...meet,
					passed: isBefore(parseISO(meet.date), new Date()),
				};
			});

			setMeetups(data);
		} catch (err) {
			setMeetups([]);
			setRefreshing(false);
		}
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

				{meetups.length > 0 ? (
					<ListMeetups
						data={meetups}
						refreshing={refreshing}
						onRefresh={loadMeetups}
						keyExtractor={meet => String(meet.id)}
						renderItem={({ item }) => <Meetup data={item} />}
					/>
				) : (
					<NoMeet>
						<Icon name="event-busy" size={30} color="#999" />
						<NoMeetText>
							Não existe nenhum meetup nesse dia.
						</NoMeetText>
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
