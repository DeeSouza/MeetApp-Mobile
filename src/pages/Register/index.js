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

export default function Register({ navigation }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const emailRef = useRef();
	const passwordRef = useRef();

	/**
	 * Submit form to register new user
	 */
	function handleSubmit() {}

	return (
		<Background>
			<Container>
				<Image source={logo} />

				<Form>
					<FormInput
						icon="person"
						placeholder="Digite seu nome"
						autoCorrect={false}
						autoCapitalize="none"
						returnKeyType="next"
						value={name}
						onChangeText={setName}
						onSubmitEditing={() => emailRef.current.focus()}
					/>

					<FormInput
						icon="mail-outline"
						placeholder="Digite seu e-mail"
						keyboardType="email-address"
						autoCorrect={false}
						autoCapitalize="none"
						returnKeyType="next"
						ref={emailRef}
						value={email}
						onChangeText={setEmail}
						onSubmitEditing={() => passwordRef.current.focus()}
					/>

					<FormInput
						icon="lock-outline"
						placeholder="Digite sua senha"
						returnKeyType="send"
						ref={passwordRef}
						value={password}
						onChangeText={setPassword}
						onSubmitEditing={handleSubmit}
						secureTextEntry
					/>

					<SubmitButton loading={false} onPress={() => {}}>
						CRIAR
					</SubmitButton>
				</Form>

				<SignLink onPress={() => navigation.navigate('Login')}>
					<SignLinkText>Já tenho login</SignLinkText>
				</SignLink>
			</Container>
		</Background>
	);
}

Register.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
	}).isRequired,
};
