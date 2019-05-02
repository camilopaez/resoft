import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {createBottomTabNavigator} from 'react-navigation';
import Explorar from './screens/Explorar';
import Mapa from './screens/Mapa';
import Buscar from './screens/Buscar'; 
import Favoritos from './screens/Favoritos';
import Usuario from './screens/Usuario'


class App extends Component<Props> {
  
}

export default createBottomTabNavigator({
  Explorar:{
    screen:Explorar,
    navigationOptions:{
      tarBarLabel:'EXPLORAR',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="eye" color={tintColor} size={30} />
      )
    }
  },
  Mapa:{
    screen:Mapa,
    navigationOptions:{
      tarBarLabel:'MAPA',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="location" color={tintColor} size={30} />
      )
      }
  },
  Favoritos:{
    screen:Favoritos,
    navigationOptions:{
      tarBarLabel:'FAVORITOS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="heart" color={tintColor} size={30} />
      )
    }
  },
  Buscar:{
    screen:Buscar,
    navigationOptions:{
      tarBarLabel:'BUSCAR',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" color={tintColor} size={30} />
      )
    }
  },
  Usuario:{
    screen:Usuario,
    navigationOptions:{
      tarBarLabel:'USUARIO',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" color={tintColor} size={30} />
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor:'white',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor:'black',
      borderTopWidth: 2,
      borderTopColor: 'orange'
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

