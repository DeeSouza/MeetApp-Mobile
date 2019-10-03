import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import logo from '~/assets/images/meetapp-logo.png';

import Background from '~/components/Background';

import {
	Container,
	Form,
	FormInput,
	SubmitButton,
	SignLink,
	SignLinkText,
} from './styles';

export default function Login({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const passwordRef = useRef();

	/**
	 * Submit form to login user
	 */
	function handleSubmit() {}

	return (
		<Background>
			<Container>
				<Image source={logo} />

				<Form>
					<FormInput
						icon="mail-outline"
						placeholder="Digite seu e-mail"
						keyboardType="email-address"
						autoCorrect={false}
						autoCapitalize="none"
						returnKeyType="next"
						value={email}
						onChangeText={setEmail}
						onSubmitEditing={() => passwordRef.current.focus()}
					/>

					<FormInput
						icon="lock-outline"
						placeholder="Digite sua senha"
						returnKeyType="send"
						value={password}
						onChangeText={setPassword}
						ref={passwordRef}
						onSubmitEditing={handleSubmit}
						secureTextEntry
					/>

					<SubmitButton loading={false} onPress={() => {}}>
						ENTRAR
					</SubmitButton>
				</Form>

				<SignLink onPress={() => navigation.navigate('Register')}>
					<SignLinkText>Criar conta grátis</SignLinkText>
				</SignLink>
			</Container>
		</Background>
	);
}

Login.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
	}).isRequired,
};
