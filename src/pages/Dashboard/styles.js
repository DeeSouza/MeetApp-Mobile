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

export const NoMeet = styled.Text``;
