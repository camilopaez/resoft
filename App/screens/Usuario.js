import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {ListItem, Overlay} from 'react-native-elements';

class Usuario extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ListItem 
                    leftAvatar={{
                        title: 'Camilinho Paezcinho',
                        source: require('../resources/paez.jpg')
                      }}
                    title={'Camilo Paez'}
                    subtitle={'Medellín, Antioquia'}
                    containerStyle={styles.listHeader}
                    titleStyle={{color:'white'}}
                    subtitleStyle={{color:'white'}}
                    bottomDivider={true}
                    onPress={this.overlay}
                />
                {
                    list.map((item,i) => (
                    <ListItem 
                        containerStyle = {styles.list}
                        key={i}
                        title={item.title}
                        leftIcon={{name:item.icon, color:'white'}}
                        titleStyle={{color:'white', fontSize:12}}
                        backgroundColor={'black'}
                        chevron={true}
                        pad={30}
                        bottomDivider={true}
                        
                    />)
                    )
                }
            </View>
        );
    };

    overlay(){
            return (
              <View>
                  <Overlay
                      isVisible={this.state.isVisible}
                      onBackdropPress={() => this.setState({ isVisible: false })}
                      >
                      <Text>Hello from Overlay!</Text>
                  </Overlay>;
              </View>
            )
        
    }
}
export default Usuario;

const list = [
    {
      title: 'CERRAR SESIÓN',
      icon: 'close'
    },
    {
      title: 'CONTACTENOS',
      icon: 'question-answer'
    }
  ]

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#1a1a1a',
    },
    list: {
        backgroundColor:'#1a1a1a',
    },
    listHeader: {
    backgroundColor:'black',
    },
    avatar:{
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    }
}); 
