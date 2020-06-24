import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CadastroPage() {

    const navigator = useNavigation();

    return (
        <View>
            <Text>Cadastro</Text>
            <Button
                title="Salvar"
                onPress={() => navigator.goBack()}
            />
        </View>
    )
}