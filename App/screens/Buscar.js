import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SearchBar, Header } from 'react-native-elements';

class Buscar extends Component {
    state ={
        search: '',
    };

    updateSearch = search => {
        this.setState({search});
    };

    render(){
        const {search} = this.state;

        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{text: 'Buscar', style: { color: 'white' }}}
                    backgroundColor={'black'}
                    containerStyle={{borderBottomWidth:1, borderBottomColor:'orange', height:70}}
                    fontWeight={2}
                    barStyle="light-content"
                />
                <SearchBar containerStyle={styles.SearchBar}
                    placeholder="Escribe tu busqueda"
                    onChangeText={this.updateSearch}
                    value={search}
                    
                />
            </View>
            
        );
    }
}
export default Buscar;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    SearchBar:{
        backgroundColor: 'black'
        
    }
}); 