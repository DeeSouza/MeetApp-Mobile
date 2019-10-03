import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/images/meetapp-logo.png';

import Background from '~/components/Background';

import { Container, Title } from './styles';

export default function Profile({ navigation }) {
	return (
		<Background>
			<Container>
				<Title>dasd</Title>
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
