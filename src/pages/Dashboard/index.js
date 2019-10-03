import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container } from './styles';

export default function Dashboard() {
	return (
		<Background>
			<Container>
				<Header />
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
