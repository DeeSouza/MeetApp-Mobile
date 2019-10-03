import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container } from './styles';

export default function Profile() {
	return (
		<Background>
			<Container>
				<Header />
			</Container>
		</Background>
	);
}

function IconTab({ tintColor }) {
	return <Icon name="person" size={20} color={tintColor} />;
}

Profile.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
	}).isRequired,
};

IconTab.propTypes = {
	tintColor: PropTypes.string.isRequired,
};

Profile.navigationOptions = {
	tabBarLabel: 'Perfil',
	tabBarIcon: IconTab,
};
