import styled from 'styled-components/native';
import settings from '~/styles/variables';

export const Container = styled.View`
	background-color: #fff;
`;

export const ImageMeet = styled.Image`
	width: 100%;
	height: 150px;
`;

export const InfoMeet = styled.View`
	padding: 15px;
	flex: 1;
`;

export const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
`;

export const Date = styled.Text`
	font-size: 15px;
	color: #999999;
	margin-top: 10px;
`;

export const Address = styled.Text`
	font-size: 15px;
	color: #999999;
`;
export const Owner = styled.Text`
	font-size: 15px;
	color: #999999;
`;

export const SubmitSubscription = styled.TouchableOpacity`
	background-color: ${settings.primaryColor};
	color: #fff;
	justify-content: center;
	align-items: center;
	height: 40px;
	border-radius: 4px;
	margin-top: 20px;
`;

export const LinkSubscription = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 16px;
`;
