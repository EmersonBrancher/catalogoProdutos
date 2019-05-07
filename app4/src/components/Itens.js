import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Itens extends Component {

   /* constructor(props) {
        super(props);
        console.log('Construindo o app');
    }

    componentWillMount() {
        console.log('fazendo algo antes de renderizar');
    }

    componentDidMount() {
        console.log('algo depois da renderização.');
    }*/

    render() {
        return (
            <View style={styles.janelaItens}>
                <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
                <View style={styles.textoJanelaItens}>
                    <Text style={styles.textoTitulo}>{this.props.item.titulo}</Text>
                    <Text style={styles.textoValor}>R${this.props.item.valor}</Text>
                    <Text>Local: {this.props.item.local_anuncio}</Text>
                    <Text>Dt Postagem: {this.props.item.data_publicacao}</Text>
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    janelaItens: {
        backgroundColor: 'white',
        paddingLeft: 5,
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5
    },
    textoJanelaItens: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        flex: 1
    },
    textoTitulo: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'
    },
    textoValor: {
        fontWeight: 'bold'
    }
});
