import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Categorias extends Component {
    render(){
        return (
            <View style={styles.viewStyle}>
                <Image style={styles.image} source={this.props.imagen} />
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}
export default Categorias;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewStyle: {
        backgroundColor:'#0f0f0f',
        borderWidth:0,
        marginLeft:7,
        marginRight:7,
        borderRadius: 12,
        marginVertical: 4,
    },
    text:{
        marginLeft: 5, 
        marginTop: 5, 
        marginBottom: 5, 
        color: 'white', 
        fontFamily:'Roboto',
        textAlign:'center'
    },
    image:{
        height: 80, 
        width: 100, 
        marginTop: 8, 
        marginLeft:8, 
        marginRight:8,
        resizeMode:'cover'
    }
}); 