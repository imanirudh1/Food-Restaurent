import React from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultDetails';
import {withNavigation} from 'react-navigation';

const ResultList = ({title,results,navigation}) => {
    if(!results.length){
        return null;
    }
    return <View>
        <Text style={styles.list}>
            {title}
        </Text>

<FlatList
showsHorizontalScrollIndicator={false} 
horizontal
data={results}
keyExtractor={result => result.id}
renderItem={({item}) => {
    return <TouchableOpacity 
    onPress={() =>{navigation.navigate('resultImg',{id:item.id})}}>
        <ResultsDetails results={item}  />
        </TouchableOpacity>
}}
/>
    </View>
}
const styles=StyleSheet.create({
    list:{
        fontSize:25,
        fontWeight:'bold',
        marginHorizontal:15
    }
})
export default withNavigation(ResultList);