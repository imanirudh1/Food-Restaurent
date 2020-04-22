import React,{useState,useEffect} from 'react';
import {Image,View,StyleSheet,FlatList} from 'react-native';
import yelp from '../api/yelp';

const ResultImage = ({navigation}) => {
    
    const id=navigation.getParam('id')
    const [result,setResult]=useState(null);
    const getResult=async () => {
        const response=await yelp.get(`/${id}`);
        setResult(response.data);

    };
    useEffect(() => {
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

return (<View>
    <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image source={{uri:item}} style={styles.img} />
        }}
    />
</View>);
};
const styles=StyleSheet.create({
    img:{
        height:200,
        width:300,
        margin:10
    }
})

export default ResultImage;