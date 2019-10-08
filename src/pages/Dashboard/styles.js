import styled from 'styled-components/native';
import settings from '~/styles/variables';

export const Container = styled.SafeAreaView`
	flex: 1;
	display: flex;
`;

export const ListMeetups = styled.FlatList.attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		paddingBottom: 30,
		paddingHorizontal: 30,
	},
})`
	margin-top: 30px;
`;

export const NoMeet = styled.View`
	justify-content: center;
	align-items: center;
	margin-top: 30px;
`;

export const NoMeetText = styled.Text`
	font-size: 16px;
	color: #fff;
	font-weight: bold;
	margin-top: 5px;
`;

export const DateSelector = styled.View`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

export const DateText = styled.Text`
	font-size: 20px;
	color: #fff;
	margin: 0px 10px;
`;

export const LoadingMeet = styled.View`
	margin: 15px auto;
`;

export const TextDescription = styled.Text`
	font-size: 17px;
	padding: 20px;
`;

export const ButtonClose = styled.TouchableOpacity`
	background-color: ${settings.primaryColor};
	color: #fff;
	justify-content: center;
	align-items: center;
	height: 40px;
	border-radius: 4px;
	margin-top: 5px;
`;

export const ButtonCloseText = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 16px;
`;
