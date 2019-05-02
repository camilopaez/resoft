import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import {Rating} from 'react-native-ratings'

class Destacados extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={this.props.imagen} style={styles.featuredImage}/>
                <View flexDirection={'row'}>
                    <View flex={3}>
                        <Text style={styles.subtitle}>
                            {this.props.subtitulo}
                        </Text>
                        <Text style={styles.normalText}>
                            {this.props.texto}
                        </Text>
                    </View>
                    <Rating
                        ratingBackgroundColor='black'
                        imageSize={12}
                        readonly
                        startingValue={5}
                        style={styles.rating}
                        flex={3}
                        />
                </View>
            </View>
        )
    }
}
export default Destacados;

let w =  Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        marginBottom:5
    },
    subtitle:{
        marginBottom:2,
        marginLeft: 22,
        color:'white',
        fontWeight:'bold', 
        fontSize:17,
        textAlign:'left'
    },
    normalText:{
        marginBottom:5,
        marginLeft: 22,
        color:'white',

        fontSize:12,
        textAlign:'left'
    },
    featuredImage:{
        height:120,
        width: w-40,
        alignSelf: 'center',
        resizeMode:'cover',
        marginBottom:10
    },
    rating:{
        paddingTop: 8,
        alignItems: 'center',
        paddingRight: 20,
    }
});
