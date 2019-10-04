import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import { Container, ListMeetups } from './styles';

export default function Dashboard() {
	const [meetups, setMeetups] = useState([]);

	/**
	 * Get meetups than user logged can subscription
	 */
	useEffect(() => {
		async function loadMeetups() {
			const response = await api.get('meetups', {
				params: {
					date: '2019-10-24',
				},
			});

			setMeetups(response.data);
		}

		loadMeetups();
	}, []);

	return (
		<Background>
			<Container>
				<Header />

				<ListMeetups
					data={meetups}
					keyExtractor={meet => String(meet.id)}
					renderItem={({ item }) => <Meetup data={item} />}
				/>
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
