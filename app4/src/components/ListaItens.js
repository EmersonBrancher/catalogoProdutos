import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

    constructor(props) {
        console.log('Construindo o app');
        super(props);

        this.state = { listarItens: [] };
    }

    componentWillMount() {
        console.log('fazendo algo antes de renderizar');
        //requisição HTTP
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
             .then(response => { this.setState({ listarItens: response.data }); })
             .catch(() => { console.log('Erro ao recuperar os dados'); });
    }
/*
    componentDidMount() {
        console.log('algo depois da renderização.');
    }*/

    render() {
        console.log('objeto renderizado');
        return (
            <ScrollView style={styles.telaPrincipal}>
                { this.state.listarItens.map(item => (<Itens key={item.titulo} item={item} />))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    telaPrincipal: {
        backgroundColor: '#E3DDDD'
    }
});
