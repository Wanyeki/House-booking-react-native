import React, { Component } from 'react';
import { View, ScrollView, StyleSheet} from 'react-native';
import { Header, Icon, Image, Button,Text, Divider, ListItem  } from 'react-native-elements';


class Main_screen extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.wrapper}>
                <Header
                containerStyle={styles.header}
                backgroundColor="#fff"
                placement="right"
                leftComponent={<Icon name="arrow-left" type='font-awesome' raised  color="#737374"/>}
                centerComponent={<Icon name="heart" type='font-awesome' raised  color="#737374"/>}
                rightComponent={<Icon name="upload" type='font-awesome' raised  color="#737374"/>}
                
                />
           <Image source={require('../assets/house2.jpg')} style={styles.top_image} containerStyle={styles.top_image_container}/>
                <Divider style={{marginTop:10}}/>
                <View style={styles.middle_text}>
                    <Text h3 > The UI cafe</Text>
                    <Button titleStyle={styles.green} title="see on map" buttonStyle={styles.text_green_btn}/>
                </View>
                <Text>
                    My name is francis and this is a dummy text.My name is francis and this is a dummy text.
                    My name is francis and this is a dummy text.My name is francis and this is a dummy text.
                </Text>
                <View style={styles.contact_section}> 
                 <View>
                <Text style={styles.location_text}>Nyawita, Maseno</Text>
                <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                </View>
                </View>
                <View style={{justifyContent:'center'}}>
                <Icon name="phone" type="font-awesome" raised color="#737374" />
                </View>
                </View> 
                <ScrollView style={styles.sliding_section} horizontal={true}>
                   
                    <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                    <Image source={require('../assets/house1.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                    <Image source={require('../assets/house3.jpeg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                    <Image source={require('../assets/house4.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                    
                </ScrollView>

                <Text h3 style={{marginTop:20}}>Our Menu </Text>
                <ScrollView style={styles.sliding_menu} horizontal={true}>
                    <Button title="cakes" buttonStyle={{...styles.menu_btn,...styles.active}} titleStyle={{color:'#fff'}} containerStyle={styles.active_container} />
                    <Button title="cookies" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="coffee" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="tea" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="ice" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="Githeri" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="rice" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="ugali" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />

                </ScrollView>

                <View style={styles.lists}>
                    <View style={styles.list}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.food_title}>Chapo beans</Text>
                        </View>
                        <View style={styles.left_list}>
                            <View style={{justifyContent:'center'}}>
                            <Text style={styles.price}>$7.82</Text>
                            </View>
                            <Icon type="font-awesome" name="arrow-right" reverse color="#1F162E"/>
                        </View>
                    </View>
                    <View style={styles.list}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.food_title}>Chapo beans</Text>
                        </View>
                        <View style={styles.left_list}>
                            <View style={{justifyContent:'center'}}>
                            <Text style={styles.price}>$7.82</Text>
                            </View>
                            <Icon type="font-awesome" name="arrow-right" reverse color="#1F162E"/>
                        </View>
                    </View>
                    <View style={styles.list}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.food_title}>Chapo beans</Text>
                        </View>
                        <View style={styles.left_list}>
                            <View style={{justifyContent:'center'}}>
                            <Text style={styles.price}>$7.82</Text>
                            </View>
                            <Icon type="font-awesome" name="arrow-right" reverse color="#1F162E"/>
                        </View>
                    </View>
                    <View style={styles.list}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.food_title}>Chapo beans</Text>
                        </View>
                        <View style={styles.left_list}>
                            <View style={{justifyContent:'center'}}>
                            <Text style={styles.price}>$7.82</Text>
                            </View>
                            <Icon type="font-awesome" name="arrow-right" reverse color="#1F162E"/>
                        </View>
                    </View>
                    <View style={styles.list}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.food_title}>Chapo beans</Text>
                        </View>
                        <View style={styles.left_list}>
                            <View style={{justifyContent:'center'}}>
                            <Text style={styles.price}>$7.82</Text>
                            </View>
                            <Icon type="font-awesome" name="arrow-right" reverse color="#1F162E"/>
                        </View>
                    </View>
                    <View style={styles.list}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.food_title}>Chapo beans</Text>
                        </View>
                        <View style={styles.left_list}>
                            <View style={{justifyContent:'center'}}>
                            <Text style={styles.price}>$7.82</Text>
                            </View>
                            <Icon type="font-awesome" name="arrow-right" reverse color="#1F162E"/>
                        </View>
                    </View>
                </View>
                </View>
            </ScrollView>
        );
    }
}

const styles=StyleSheet.create({

    header:{

        marginTop:10
    },
    top_image:{
        height:250,
        width:'100%',
        borderRadius:25,
    },
    top_image_container:{   
        marginTop:20,
        width:'100%',
        borderRadius:25,
        overflow:'hidden'

    },
    middle_text:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    green:{
        color:'#669F7B'
    },
    text_green_btn:{
        backgroundColor:'#fff'
    },
    location_text:{
        fontSize:17,
        fontWeight:'bold',
        color:'#737374',
        marginTop:10,
    },
    ratings:{
        flexDirection:'row',
        marginTop:10

    },
    contact_section:{
        flexDirection:'row',
        justifyContent:'space-between'        
    },
    sliding_section:{
        marginTop:20,
        flexDirection:'row',
        overflow:'scroll'
    },
    slide_img:{
        height:100,
        width:150,
        marginRight:10,
        borderRadius:10
    },
    slide_img_container:{
        borderRadius:10,
        overflow:'hidden',

    },
    menu_btn:{
       backgroundColor:'#fff',
       borderRadius:20,
       width:80,
       marginLeft:7
    },
    menu_btn_text:{
        color:'#000'
    },
    sliding_menu:{
        marginTop:10,
        flexDirection:'row'
    },
    active:{
        backgroundColor:'#6DA97F',
        marginLeft:2
    },
    list:{
        borderRadius:30,
        borderColor:'#B6B6B6',
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        marginBottom:10
    },
    left_list:{
        flexDirection:'row'
    },
    food_title:{
        fontSize:18
    },
    price:{
        fontSize:18,
        fontWeight:'bold'
    },
    lists:{
        marginTop:20
    },
    wrapper:{
        width:'93%',
    },
    active_container:{
        padding:2,
        paddingLeft:0,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#B6B6B6',
    }
    

});

export default Main_screen;