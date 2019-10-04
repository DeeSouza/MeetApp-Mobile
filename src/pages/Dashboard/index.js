import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isBefore, parseISO, subDays, addDays, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import {
	Container,
	ListMeetups,
	NoMeet,
	NoMeetText,
	DateSelector,
	DateText,
} from './styles';

export default function Dashboard() {
	const [meetups, setMeetups] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const [date, setDate] = useState(new Date());

	const dateFormatted = useMemo(
		() => format(date, "d 'de' MMMM 'de' yyyy", { locale: pt }),
		[date],
	);

	/**
	 * Get meetups than user logged can subscription
	 */
	useEffect(() => {
		// Load all meetups than user logged not is owner
		async function loadMeetups() {
			try {
				const response = await api.get('meetups', {
					params: {
						date,
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

		loadMeetups();
	}, [date]);

	function handlePrevDay() {
		setDate(subDays(date, 1));
	}

	function handleNextDay() {
		setDate(addDays(date, 1));
	}

	function refreshLoadMeetups() {
		setRefreshing(true);
		setDate(new Date());
	}

	return (
		<Background>
			<Container>
				<Header />

				<DateSelector>
					<TouchableOpacity onPress={handlePrevDay}>
						<Icon name="chevron-left" size={38} color="#FFF" />
					</TouchableOpacity>

					<DateText>{dateFormatted}</DateText>

					<TouchableOpacity onPress={handleNextDay}>
						<Icon name="chevron-right" size={38} color="#FFF" />
					</TouchableOpacity>
				</DateSelector>

				{meetups.length > 0 ? (
					<ListMeetups
						data={meetups}
						refreshing={refreshing}
						onRefresh={refreshLoadMeetups}
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
