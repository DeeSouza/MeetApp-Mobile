import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	display: flex;
`;

export const ListMeetups = styled.FlatList.attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		padding: 30,
	},
})``;

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
