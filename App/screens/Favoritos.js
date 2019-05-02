import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';

class Favoritos extends Component {
    render(){
        return (
            <View>
                <Header
                    centerComponent={{text: 'Favoritos', style: { color: 'white' }}}
                    backgroundColor={'black'}
                    containerStyle={{borderBottomWidth:1, borderBottomColor:'violet', height:70}}
                    fontWeight={2}
                    barStyle="light-content"
                />
                <Text> Favoritos </Text>
            </View>
        );
    }
}
export default Favoritos;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
}); 