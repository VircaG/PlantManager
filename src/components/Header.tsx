import React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View

} from 'react-native';

import {getStatusBarHeight} from  'react-native-iphone-x-helper';
import { color } from 'react-native-reanimated';


import userImg from '../assets/virca.png';
import colors from '../styles/colors';


export function Header(){
    return(
        <View style= {styles.container}>
            <View>
                <Text style = {styles.greeting}>Olá,</Text>
                <Text style = {styles.userName}>Virca</Text>
               
            </View>
            <Image source = {userImg} style={styles.image} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        marginTop: getStatusBarHeight(),
        
        
    },
    image:{
        width:70,
        height:70,
        borderRadius:40
    
    },
    greeting:{
        fontSize:32,
        color:colors.heading,
        fontFamily: font.text
    },
    userName:{
        fontSize:32,
        fontFamily:font.heading,
        color: colors.heading,
        lineHeight:40
    }

})