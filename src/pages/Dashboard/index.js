import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/images/meetapp-logo.png';

import Background from '~/components/Background';

import { Container, Title } from './styles';

export default function Dashboard({ navigation }) {
	return (
		<Background>
			<Container>
				<Title>aosidoasidsa</Title>
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
