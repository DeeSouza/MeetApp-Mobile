import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container } from './styles';

export default function Subscriptions() {
	return (
		<Background>
			<Container>
				<Header />
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
