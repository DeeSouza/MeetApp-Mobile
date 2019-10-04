import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
	Container,
	Title,
	Address,
	AddressText,
	Owner,
	OwnerText,
	SubmitSubscription,
	InfoMeet,
	Date,
	DateText,
	LinkSubscription,
	ImageMeet,
} from './styles';

export default function Meetup({ data }) {
	const dateFormatted = useMemo(
		() =>
			format(parseISO(data.date), "d 'de' MMMM', às 'H'hs'", {
				locale: pt,
			}),
		[data.date],
	);

	return (
		<Container>
			<ImageMeet source={{ uri: data.files.url }} />

			<InfoMeet>
				<Title>{data.title}</Title>

				<Date>
					<Icon name="event" size={15} color="#999" />
					<DateText>{dateFormatted}</DateText>
				</Date>
				<Address>
					<Icon name="place" size={15} color="#999" />
					<AddressText>{data.localization}</AddressText>
				</Address>
				<Owner>
					<Icon name="person" size={15} color="#999" />
					<OwnerText>Organizador: {data.users.name}</OwnerText>
				</Owner>

				<SubmitSubscription>
					<LinkSubscription>Realizar Inscrição</LinkSubscription>
				</SubmitSubscription>
			</InfoMeet>
		</Container>
	);
}

Meetup.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		date: PropTypes.string,
		localization: PropTypes.string,
		users: PropTypes.shape({
			name: PropTypes.string,
		}).isRequired,
		files: PropTypes.shape({
			url: PropTypes.string,
		}).isRequired,
	}).isRequired,
};
