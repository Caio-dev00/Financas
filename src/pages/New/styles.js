import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #f4f0ff;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 14px;
    background-color: #FFF;
    border-radius: 8px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    border-radius: 8px;
`;

export const SubmitText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;