import React, { Component } from 'react';
import { View ,StyleSheet,ScrollView} from 'react-native';
import {Image,Button, Text} from 'react-native-elements';

class Home extends Component {
    render() {
        return (
            
            <ScrollView style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.top_section}>
                        <View style={styles.left_empty}></View>
                        <Button title="skip" buttonStyle={styles.header_btn} onPress={()=>{this.props.navigation.openDrawer();}}/>
                    </View>
                    <Image source={require('../assets/landing.png')}style={styles.image} />
                </View>
                <View style={styles.landing_text}>
                    <Text h2 style={styles.white}>
                        Welcome to
                    </Text>
                    <Text h2 style={styles.white}>
                        MY AMAZING UI
                    </Text>
                    <Text  style={{...styles.white,...{textAlign:'center',marginTop:20}}}>
                         where amazing designs come to live bundleRenderer.renderToStream
                    </Text>

                    <Button buttonStyle={styles.big_btn} containerStyle={styles.btn_container}  title="Get started" titleStyle={{color:'#000'}} onPress={()=>{this.props.navigation.navigate('Items')}}/>
                </View>
            </ScrollView>
        );
    }
}

const styles= StyleSheet.create({


    wrapper:{
        backgroundColor:'#669F7B',
        width:'100%',
        height:'100%'
    },
    image:{
        width:'100%',
        height:300
       
    },
    header:{
      
    },
    header_text:{
        color:'#fff'
    },
    left_empty:{
        width:'80%'
    },
    top_section:{
       marginTop:40,
        flexDirection:'row'
    },
    header_btn:{
        backgroundColor:'#669F7B'
    },
    landing_text:{
       alignItems:"center",
       marginTop:20

    },
    white:{
        color:'#fff',
    },
    big_btn:{
        width:250,
        borderRadius:20,
        backgroundColor:'#fff',

    },
    btn_container:{
        padding:5,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#fff',
        marginTop:30
    }

});

export default Home;