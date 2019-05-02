import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Categorias from "../elements/Categorias";
import Destacados from "../elements/Destacados"

class Explorar extends Component {
    
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View flex={3}>
                        <Text style={styles.title}>
                            Todas las categorías
                        </Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Categorias title={"Mexicana"} imagen={require('../resources/mexicana.png')}/>
                            <Categorias title={"Italiana"} imagen={require('../resources/italiana.png')}/>
                            <Categorias title={"Típica"} imagen={require('../resources/tipica.png')}/>
                            <Categorias title={"Premium"} imagen={require('../resources/premium.png')}/>
                            <Categorias title={"Vegetariana"} imagen={require('../resources/vegetariana.png')}/>
                            <Categorias title={"Estilo Pícnic"} imagen={require('../resources/estilopicnic.png')}/>
                        </ScrollView>
                    </View>
                    
                    <View flex={3} style={styles.container}>
                        <Text style={styles.title}>
                            Destacado
                        </Text>
                        <Destacados imagen={require('../resources/losMeandros.jpg')} texto={"Estilo Pícnic"} subtitulo={"Los Meandros"}/>
                        <Destacados imagen={require('../resources/simons.jpg')} texto={"Italiana"} subtitulo={"Simon's PizzAndBeer"}/>
                        <Destacados imagen={require('../resources/chefBurguer.jpg')} texto={"Hamburguesas"} subtitulo={"Chef Burguer"}/>
                        <Destacados imagen={require('../resources/orale.jpg')} texto={"Mexicana"} subtitulo={"Orale!"}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default Explorar;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a'
    },
    title:{
        marginTop: 10,
        marginBottom:8,
        color:'white',
        fontWeight:'bold', 
        fontSize:20,
        textAlign:'center'
    }
}); 
