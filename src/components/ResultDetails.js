import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

const ResultsDetails=({results}) => {
return <View style={{marginBottom:15}}>
    <Image style={styles.img} source={{uri:results.image_url}} />
    <Text style={styles.in} >{results.name}</Text>
<Text style={styles.in2} >{results.rating} Stars,{results.review_count} Reviews</Text>
    </View>
}
const styles=StyleSheet.create({
    img:{
        height:120,
        width:200,
        borderRadius:9,
        marginHorizontal:15,
        marginBottom:5
    },
    in:{
        marginHorizontal:15,
        fontWeight:'bold',
        fontSize:16
    },
    in2:{
        color:'grey',
        marginHorizontal:15
    }
})
 export default ResultsDetails;