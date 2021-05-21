import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Touchable, Button, Alert } from 'react-native'

const VoteRateScreen = ({navigation}) => {
    const fillStar = require('../assets/images/star_filled.png')
    const boderStar = require('../assets/images/star_corner.png')
    const [maxrating, setMaxrating] = useState([1,2,3,4,5]);
    const [voteStar, setVoteStar] = useState(2);
    const handleStar = (item) =>{
        if(item <= voteStar ){
            return fillStar;
        }else{
            return boderStar;
        }
    }
    const RatingBar = () => {
    
        return (
            <View style={styles.starBar}>{
                maxrating.map((item,index)=>{
                    return(
                        <TouchableOpacity
                        style={{marginHorizontal:10}}
                        key = {item}
                        onPress={()=>{setVoteStar(item)}}
                        activeOpacity = {0.6}
                        >
                            <Image style={styles.starImg}
                            source={handleStar(item)}
                            />
                        </TouchableOpacity>
                    )
                })
            }

            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Topbar}>
            <Button title='Back todoList' onPress={()=> {
                navigation.navigate('TodoScreen');
            }} />
            </View>
            <View style = {styles.mainContainer}>
                <Text style={styles.title}>Vui lòng nhập đánh giá của bạn</Text>
                <RatingBar/>
                <Button title="Xác nhận" onPress={()=>{
                    alert('bạn đã đánh giá '+voteStar+"sao")
                }} />
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        flex: 1,
    },
    Topbar:{
        flexDirection: 'row',
    },
    mainContainer:{
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        marginVertical: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    starBar:{
        flexDirection: 'row',
        marginVertical: 20,
    },
    starImg:{
        width:40,
        height:40,
    }
})

export default VoteRateScreen
