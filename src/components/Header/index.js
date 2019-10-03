import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';

import logo from '~/assets/images/meetapp-logo.png';

export default function Header() {
	return (
		<Container>
			<Image source={logo} style={{ width: 24, height: 24 }} />
		</Container>
	);
}
