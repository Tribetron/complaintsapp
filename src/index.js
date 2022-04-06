import React, { Component } from 'react'
import { StyleSheet,Text,TouchableOpacity, View,ImageBackground,Image } from 'react-native'
import { Link,NativeRouter, Redirect,withRouter } from "react-router-native";
import { IconOutline } from "@ant-design/icons-react-native";

const  Home =(props)=>{

    const complaintClick =()=>{
        props.history.push('/complaint');
    }

    const complimentClick = ()=>{
        props.history.push('/compliment');
    }

    const satisfactionClick = ()=>{
        props.history.push('/satisfaction');
    }

    const ratingClick = ()=>{
        props.history.push('/rating');
    }


    {
        return (
            <ImageBackground style={styles.bg} source={require('../assets/bg.jpg')}>
                
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <View style={styles.topContainer}>
                <Text style={styles.text}>Customer Feedback</Text>
                </View>
                <View style={styles.bottomContainer}>

                <TouchableOpacity style={styles.innerElements} onPress={complaintClick}>
                <Image style={styles.elementImage} source={require('../assets/complaint.png')}/>
                    <View style={styles.elementText}>
                        <Text style={styles.titleHeader}>
                            Complaint
                        </Text>
                        <Text style={styles.elementDescription}>
                            Lodge a complaint and we'll better improve our service
                        </Text>

                    </View>

                    <IconOutline name="right" size={25} color="#8C8C8C" style={styles.icon}/>

                </TouchableOpacity>
                <TouchableOpacity style={styles.innerElements} onPress={complimentClick}>
                <Image style={styles.elementImage} source={require('../assets/compliment.png')}/>
                    <View style={styles.elementText}>
                        <Text style={styles.titleHeader}>
                            Compliment
                        </Text>
                        <Text style={styles.elementDescription}>
                            Leave a compliment on our great service
                        </Text>

                    </View>
                    <IconOutline name="right" size={25} color="#8C8C8C" style={styles.icon}/>

                </TouchableOpacity>
                <TouchableOpacity style={styles.innerElements} onPress={satisfactionClick}>
                <Image style={styles.elementImage} source={require('../assets/satisfaction.png')}/>
                    <View style={styles.elementText}>
                        <Text style={styles.titleHeader}>
                            Satisfaction Score
                        </Text>
                        <Text style={styles.elementDescription}>
                            Let us know how satisfied you are with our service
                        </Text>

                    </View>
                    <IconOutline name="right" size={25} color="#8C8C8C" style={styles.icon}/>

                </TouchableOpacity>
                <TouchableOpacity style={styles.innerElementsl}  onPress={ratingClick}>
                <Image style={styles.elementImage} source={require('../assets/rate.png')}/>
                    <View style={styles.elementText}>
                        <Text style={styles.titleHeader}>
                            Rate our services
                        </Text>
                        <Text style={styles.elementDescription}>
                            Let us know how likely you are to recommend our service
                        </Text>

                    </View>
                    <IconOutline name="right" size={25} color="#8C8C8C" style={styles.icon}/>

                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Image
                style={styles.footerImage}
                source={require('../assets/icon.png')}
                />
            <Text style={styles.footerText}>
                DO GREAT THINGS EVERYDAY
            </Text>
            </View>
           
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    text:{
        fontSize:50,
        fontFamily:'Montserrat-Light',
        color:'#127B01'
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 100,
        height:'10%',
        justifyContent:'center',
    },
    bottomContainer:{
        display:'flex',
        flexDirection:'column',
        marginTop:'10%',
        backgroundColor:'#ffffff',
        shadowColor: "#A4A0A0",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6.68,
        elevation: 11,
        padding:0,
        borderRadius:20,
        height:'50%',
        justifyContent:'space-evenly'

    },
    innerElements:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        borderBottomColor:'#C9BFBF',
        borderBottomWidth:1,
        alignContent:'center'

    },
    innerElementsl:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
     
    },
    elementImage:{
        height:60,
        width:50,
        margin:20
    },
    elementText:{
        display:'flex',
        flexDirection:'column',
        margin:20,
        width:'70%'
    },
    titleHeader:{
        fontSize:33,
        fontFamily:'Montserrat-Regular',
        fontWeight:'600'
    },
    elementDescription:{
        fontSize:20,
        fontFamily:'Montserrat-Light',
        fontWeight:'200',
    },
    footer:{
        display:'flex',
        flexDirection:'row',    
        justifyContent:'center',
        alignItems:'center',
        marginTop:70,
        backgroundColor:'#fff',
        width:'80%'
    },
    footerText:{
        fontFamily:'Montserrat-Light',
        fontSize:25,
    },
    footerImage:{
        height:60,
        width:60,
        margin:20,
        // marginRight:130
    },
    icon:{
        margin:20,
        marginTop:35,
        position:'relative',
        
    }
            
});

export default withRouter(Home)