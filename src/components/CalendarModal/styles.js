import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34,34,34,0.4);
`;

export const ModalContent= styled.View`
    flex: 2;
    justify-content: center;
    background-color: #FFF;
    padding: 14px;
`;

export const ButtonFilter= styled.TouchableOpacity`
    border-radius: 8px;
    background-color: #3b3dbf;
    height: 45px;
    align-items: center;
    justify-content: center;
`;

export const ButtonFilterText= styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
`;