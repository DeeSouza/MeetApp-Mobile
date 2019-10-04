import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
	Container,
	Title,
	Address,
	Owner,
	SubmitSubscription,
	InfoMeet,
	Date,
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

				<Date>{dateFormatted}</Date>
				<Address>{data.localization}</Address>
				<Owner>Organizador: {data.users.name}</Owner>

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
		date: PropTypes.instanceOf(Date),
		localization: PropTypes.string,
		users: PropTypes.shape({
			name: PropTypes.string,
		}).isRequired,
		files: PropTypes.shape({
			url: PropTypes.string,
		}).isRequired,
	}).isRequired,
};
