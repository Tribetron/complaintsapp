import React, { useState } from 'react'
import { StyleSheet,Text,TouchableOpacity, View,ImageBackground,Image,TextInput,ScrollView } from 'react-native'
import {withRouter } from "react-router-native";
import { AirbnbRating } from 'react-native-ratings';
import { IconOutline } from "@ant-design/icons-react-native";

const Satisfaction =(props)=>{

    const [firstandlastname,onfirstandlastnameChange] = useState("");
    const [phone,onphoneChange] = useState("");
    const [email,onemailChange] = useState("");
    const [compliment,onComplimentChange] = useState("");

    
    const backClick =()=>{
        props.history.push('/');
    }
    
        return (
            <ImageBackground style={styles.bg} source={require('../../assets/bg.jpg')}>
                  <TouchableOpacity 
                style={styles.iconTop}
                onPress={backClick}
                >
                <IconOutline name="arrow-left" size={30} color="grey"/>
                </TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/logo.png')}/>
                <View style={styles.topContainer}>
                <Text style={styles.text}>Customer Satisfaction</Text>
                <Text style={styles.textbelow}>
                    Lodge a complaint so we improve our services
                </Text>
                </View>
                <View style={styles.bottomContainer}>
                    <TextInput
                     style={styles.input}    
                     placeholder="Enter first and last name"
                     placeholderTextColor="#D1CFCF"
                     onChangeText={(text) => {
                        onfirstandlastnameChange(text);
                      }}
                    />
                     <TextInput
                     style={styles.input}    
                     placeholder="Enter phone number"
                     placeholderTextColor="#D1CFCF"
                     onChangeText={(text) => {
                        onphoneChange(text);
                      }}
                    />
                    <TextInput
                     style={styles.input}    
                     placeholder="Enter email"
                     placeholderTextColor="#D1CFCF"
                     onChangeText={(text) => {
                        onemailChange(text);
                      }}
                    />
                    <AirbnbRating
                    count={5}
                    reviews={["not satisfied","need improvement","fairly satisfied","great service","excellent service"]}
                    defaultRating={3}
                    size={70}
                    ratingContainerStyle={styles.rating}
                    starContainerStyle={styles.stars}
                    reviewColor="#127B01"
                    />
                   
                 </View>
                 <TouchableOpacity style={styles.button}>
                     <Text style={styles.submitText}>
                         Submit
                     </Text>
                 </TouchableOpacity>
            </ImageBackground>
        )
    
}


const styles = StyleSheet.create({
    text:{
        fontSize:50,
        fontFamily:'Montserrat-Light',
        color:'#127B01'
    },
    iconTop:{
        position:'absolute',
        display:'flex',
        left:50,
        top:40
        },
    bg:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        padding:30
    },
    logo:{
        height:'5%',
        width:'35%',
    },
    topContainer:{
        backgroundColor:'#ffffff',
        borderColor:'#000000',
        width:'85%' ,
        border:'1px solid #00000',
        borderRadius:20,
        alignItems:'center',
        margin:'5%',
        marginLeft:'10%',
        marginRight:'10%',
        shadowColor: "#9B9595",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 19,
        height:'10%',
        justifyContent:'center'
    },
    bottomContainer:{
        display:'flex',
        flexDirection:'column',
        marginTop:'10%',
        // height:'100%',
        // justifyContent:'space-evenly'
    },
    input:{
        width:700,
        borderWidth:1,
        borderRadius:10,
        padding:20,
        borderColor:'#A6A0A0',

        fontSize:20,
        fontFamily:'Montserrat-Regular',
        margin:20
        // backgroundColor:'#000000'
    },
    
    inputl:{
        width:700,
        borderWidth:1,
        borderRadius:10,
        padding:20,
        height:200,
        borderColor:'#CDC9C9',
        fontSize:20,
        margin:20,
        fontFamily:'Montserrat-Regular',
        // backgroundColor:'#000000'
    },
    button:{
        width:'85%',
        backgroundColor:'#00763D',
        justifyContent:'center',
        height:'6%',
        borderRadius:10,
    },
    submitText:{
        textAlign:'center',
        fontFamily:'Montserrat-Regular',
        color:'#fff',
        fontSize:25
    },
    textbelow:{
        fontSize:20,
        fontFamily:'Montserrat-Regular',
    },
    rating:{
        margin:20
    },
    stars:{
        margin:20,
        justifyContent:'space-evenly'
    }
});

export default withRouter(Satisfaction);