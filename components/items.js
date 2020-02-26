import React, { Component } from 'react';
import { StyleSheet,ScrollView,View,TextInput, SafeAreaViewComponent} from 'react-native';
import {Input,Icon, Divider,Button,Text,Image, Badge} from 'react-native-elements';

export default class Items extends Component {
    render() {
        return (

            <View style={{height:'100%'}}>
                
            <ScrollView contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.wrapper}>
                    <View style={styles.search_top}>
                        <View style={{justifyContent:'center'}}><Icon name="menu" onPress={()=>{this.props.navigation.openDrawer()}}/></View>
                    
                        <View style={styles.search_bar}>
                            <TextInput style={styles.search_input} placeholder="search something"/>
                            <View style={{justifyContent:'center',marginLeft:5}}>
                            <Icon type="font-awesome" name="search"/>
                            </View>
                        </View>
                    </View>
                    
                 <View style={styles.filter_section}>
                     <View style={styles.drop}>
                     <View style={{justifyContent:'center'}}>
                     <Text h5 style={styles.drop_text}  >Maseno University</Text>
                     </View>
                        <View style={styles.drop_icon}>
                            <Icon type="font-awesome" size={17} raised name="caret-down"/>
                        </View>                       
                     </View>
                     <View style={styles.drop}>
                    <View style={{justifyContent:'center'}}>
                     <Text h5 style={styles.drop_text}  >Recomended</Text>
                     </View>
                        <View style={styles.drop_icon}>
                            <Icon type="font-awesome" size={17} raised name="caret-down"/> 
                        </View> 
                     </View>
                   
                 </View>

                 <Text h3 style={{marginTop:20}}>Explore Restaurants</Text>
                <ScrollView style={styles.sliding_menu} horizontal={true}>
                    <Button title="cafe" buttonStyle={{...styles.menu_btn,...styles.active}} titleStyle={{color:'#fff'}} containerStyle={styles.active_container} />
                    <Button title="cookies" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="coffee" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="tea" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="ice" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="Githeri" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="rice" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />
                    <Button title="ugali" buttonStyle={styles.menu_btn} titleStyle={styles.menu_btn_text} />

                </ScrollView>


                <ScrollView style={styles.sliding_section} horizontal={true}>
                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   
                   
               </ScrollView>



               <ScrollView style={styles.sliding_section} horizontal={true}>
                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   
                   
               </ScrollView>



               <ScrollView style={styles.sliding_section} horizontal={true}>
                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   <View>
                   <Image source={require('../assets/house2.jpg')} style={styles.slide_img} containerStyle={styles.slide_img_container}/>
                   <Text h4 style={{marginTop:10}}>Mabungo Maseno</Text>
                   <Text style={{color:'#737374'}}>Mabungo,st</Text>
                   <View style={styles.ratings}>
                    <Icon type="font-awesome" name="star" size={15} color="#F9A48D"/>
                    <Text><Text style={{fontWeight:'bold'}}> 4.5</Text>  (478)</Text>
                   </View>
                   </View>

                   
                   
               </ScrollView>


               

                </View>
            </ScrollView>
                <View style={styles.footer}>
                    <Divider/>
                  <View style={styles.footer_link}   >
                      <Text onPress={()=>{this.props.navigation.navigate('Home')}} style={{...styles.footer_text,...{fontSize:16,color:'#000'}}}>Explore</Text>
                      <Badge status='success'/>
                  </View>  
                  <View style={styles.footer_link}>
                      <Text  style={styles.footer_text} onPress={()=>{this.props.navigation.navigate('Show')}}>Visited</Text>
                      
                  </View>
                  <View style={styles.footer_link}>
                      <Text  style={styles.footer_text} onPress={()=>{this.props.navigation.navigate('Show')}}>Favourite</Text>
                      
                  </View>
                  <View style={styles.footer_link}>
                      <Text  style={styles.footer_text} onPress={()=>{this.props.navigation.navigate('Show')}}>Profile</Text>
                      
                  </View>
                  </View>
               

                <View style={styles.floating}>
                  <Icon reverse raised type="font-awesome" name="map-marker" size={30}color="#67AA80"/>  
                </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    wrapper:{
        width:'93%',
        overflow:'hidden'
    },
    search_top:{
        marginTop:35,
        flexDirection:"row",
        justifyContent:'space-between'
    },
    search_bar:{
        flexDirection:'row',
        height:50,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#B6B6B6',
        width:'90%',
        paddingLeft:20
    },
    search_input:{
        width:'85%'
    },
//end search

    menu_btn:{
        backgroundColor:'#fff',
        borderRadius:20,
        width:80,
        height:30,
        marginLeft:7
     },
     menu_btn_text:{
         color:'#000'
     },
     sliding_menu:{
         marginTop:20,
         flexDirection:'row'
     },
     active:{
         backgroundColor:'#6DA97F',
         marginLeft:2
     },
     active_container:{
        padding:2,
        paddingLeft:0,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#B6B6B6',
    }

    //end sliding menu

    ,
    sliding_section:{
        marginTop:30,
        flexDirection:'row',
        overflow:'scroll'
    },
    slide_img:{
        height:200,
        width:290,
        marginRight:20,
        borderRadius:10
    },
    slide_img_container:{
        borderRadius:10,
        overflow:'hidden',

    },
    //end sliding section


    filter_section:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    drop:{
        flexDirection:'row'
    },
    drop_text:{
        fontWeight:"bold",
        fontSize:15
    },
    floating:{
        position:'absolute',
        bottom:80,
        right:10,
        padding:1,
        borderRadius:50,
        backgroundColor:'rgba(103, 170, 128, 0.623);'
    },
    ratings:{
        flexDirection:'row',
        marginTop:10

    },

    //end

    footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:70,
        backgroundColor:'#fff',
        shadowColor:'#000',
      elevation:10
    },
    footer_text:{
       margin:10 ,
       marginTop:10,
       color:'#737374',
       fontWeight:'bold'
    },
    footer_link:{
     marginLeft:20,
     marginTop:10 ,
    }
});