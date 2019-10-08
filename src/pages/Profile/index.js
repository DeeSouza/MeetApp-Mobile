import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { logoutRequest } from '~/store/modules/auth/actions';
import { updateUserRequest } from '~/store/modules/user/actions';

import {
	Container,
	Form,
	FormInput,
	SubmitButton,
	Separator,
	Logout,
} from './styles';

export default function Profile() {
	const dispatch = useDispatch();

	const loading = useSelector(state => state.user.loading);
	const profile = useSelector(state => state.user.profile);

	const [name, setName] = useState(profile.name);
	const [email, setEmail] = useState(profile.email);
	const [oldPassword, setOldPassword] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const emailRef = useRef();
	const oldPasswordRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	useEffect(() => {
		setOldPassword('');
		setPassword('');
		setConfirmPassword('');
	}, [profile]);

	/**
	 * Submit form to update user
	 */
	function handleSubmit() {
		const data = {
			name,
			email,
			oldPassword,
			password,
			confirmPassword,
		};

		dispatch(updateUserRequest(data));
	}

	function handleLogout() {
		dispatch(logoutRequest());
	}

	return (
		<Background>
			<Container>
				<Header />

				<Form>
					<FormInput
						icon="person"
						placeholder="Digite seu nome"
						autoCorrect={false}
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

					<Separator />

					<FormInput
						icon="lock-outline"
						secureTextEntry
						placeholder="Digite sua senha atual"
						ref={oldPasswordRef}
						value={oldPassword}
						onChangeText={setOldPassword}
						returnKeyType="next"
						onSubmitEditing={() => passwordRef.current.focus()}
					/>

					<FormInput
						icon="lock-outline"
						secureTextEntry
						placeholder="Digite uma nova senha"
						ref={passwordRef}
						value={password}
						onChangeText={setPassword}
						returnKeyType="next"
						onSubmitEditing={() =>
							confirmPasswordRef.current.focus()
						}
					/>

					<FormInput
						icon="lock-outline"
						secureTextEntry
						placeholder="Confirme sua senha"
						ref={confirmPasswordRef}
						returnKeyType="send"
						onSubmitEditing={handleSubmit}
						value={confirmPassword}
						onChangeText={setConfirmPassword}
					/>

					<SubmitButton loading={loading} onPress={handleSubmit}>
						ATUALIZAR CONTA
					</SubmitButton>

					<Logout onPress={handleLogout}>SAIR</Logout>
				</Form>
			</Container>
		</Background>
	);
}

function IconTab({ tintColor }) {
	return <Icon name="person" size={20} color={tintColor} />;
}

IconTab.propTypes = {
	tintColor: PropTypes.string.isRequired,
};

Profile.navigationOptions = {
	tabBarLabel: 'Perfil',
	tabBarIcon: IconTab,
};
