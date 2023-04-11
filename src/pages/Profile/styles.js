import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4ff;
  align-items: center;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 24px;
`;

export const Name = styled.Text`
    font-size: 24px;
    margin-bottom: 24px;
    margin-top: 8px;
    padding: 0 14px;
    color: #121212;
`;

export const NewLink = styled.TouchableOpacity`
    background-color: #3b3dbf;
    width: 90%;
    height: 45px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`;

export const NewText= styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: #FF0000;
`;

export const LogoutText = styled.Text`
    color:#FF0000;
    font-size: 18px;
    font-weight: 800;
`;