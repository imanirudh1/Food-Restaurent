import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const searchBar=({term,onTermChange,onTermSubmit})=>{
    return (<View style={styles.backgroundstyle}>
        <Feather style={styles.searchStyle} name='search' size={30} />
        <TextInput
         style={styles.input} 
         placeholder='Search' 
         autoCapitalize={"none"}
         autoCorrect={false}
         value={term}
         onChangeText={onTermChange}
         onEndEditing={onTermSubmit}
         />
        </View>);
}
const styles=StyleSheet.create({
    backgroundstyle:{
        backgroundColor:'rgb(222, 222, 222)',
        height:50,
        flexDirection:'row',
        marginHorizontal:15,
        marginTop:10,
        borderRadius:10,
        shadowColor:'grey',
        shadowOffset:{width:8,height:8},
        shadowOpacity:0.5,
        shadowRadius:8,
        
        
    },
    input:{
        fontSize:18,
        flex:1
    },
    searchStyle:{
        alignSelf:"center",
        marginHorizontal:10
    }

})
export default searchBar; 