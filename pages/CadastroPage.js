import React, { useState } from 'react';
import { StyleSheet, View, TextInput,Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../api';

export default function CadastroPage() {

    const navigator = useNavigation();

    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState(0);

    const adicionar = () => { 
        api.post('/', {
            nome, quantidade
        }).then(response => {
            navigator.goBack()
        });
    }

    return (
        <View style={{margin: 10}}>
            <Text>Nome</Text>
            <TextInput 
                style={styles.input} 
                value={nome}
                onChangeText={text => setNome(text)}
            />
            <Text>Quantidade</Text>
            <TextInput 
                style={styles.input} 
                value={quantidade.toString()}
                onChangeText={text => setQuantidade(text)}
            />
            <Button
                title="Salvar"
                onPress={() => adicionar()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 12,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: "#000000",
        shadowOpacity: 0.08,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});