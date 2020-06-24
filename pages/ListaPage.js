import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../api';
import { ListItem, Icon } from 'react-native-elements'

export default function ListaPage() {

    const navigator = useNavigation();

    const [produtos, setProdutos] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      api.get('/').then(response => {
        setProdutos(response.data);
        setRefreshing(false);
    });
    }, [refreshing]);

    useEffect(() => {
        api.get('/').then(response => {
            setProdutos(response.data);
        });
    }, [])

    const update = (id, comprado) => { 
        api.put(`/${id}`, { comprado: !comprado }).then(response => {
            const indice = produtos.findIndex(item => item.id == id);
            const produtosAtualizados = [...produtos]
            produtosAtualizados[indice].comprado = !comprado;
            setProdutos(produtosAtualizados);
        });
    }

    const remove = (id) => { 
        api.delete(`/${id}`).then(response => {
            const indice = produtos.findIndex(item => item.id == id);
            const produtosAtualizados = [...produtos]
            produtosAtualizados.splice(indice, 1);
            setProdutos(produtosAtualizados);
        });
    }

    return (
        <View style={{flex: 1}}>
            <FlatList        
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }        
                data={produtos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item: produto }) => (
                    <ListItem
                        title={produto.nome}
                        subtitle={produto.quantidade.toString()}
                        leftIcon={() => (
                            produto.comprado ? <Icon name='check' /> : <View />
                        )}
                        bottomDivider
                        chevron
                        onPress={() => update(produto.id, produto.comprado)}
                        onLongPress={() => remove(produto.id)}
                    />)}
            />

            <Button
                title="Adicionar"
                onPress={() => navigator.navigate('Cadastro')}
            />
        </View>
    )
}