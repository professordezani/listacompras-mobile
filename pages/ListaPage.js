import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ListaPage() {

    const navigator = useNavigation();

    return (
        <View>
            <Text>Lista</Text>
            <Button
                title="Adicionar"
                onPress={() => navigator.navigate('Cadastro')}
            />
        </View>
    )
}