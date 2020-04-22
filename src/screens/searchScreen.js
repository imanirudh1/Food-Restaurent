import React,{useState} from 'react';
import {Text,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
const searchScreen=() => {
    const [term,setTerm]=useState('');
    const [searchApi,results,errorMessage]=useResults();
    const filterResult=(price) => {
        return results.filter(results => {
            return results.price === price;
        })
    }
    return (<>
        <SearchBar term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}
        
        />
        <Text>{errorMessage}</Text>
   <ScrollView>
    <ResultList results={filterResult('$')} title='Cost Effective' />
    <ResultList results={filterResult('$$')} title='Bit Pricer' />
    <ResultList results={filterResult('$$$')} title='Big Spender' />
  
    
    </ScrollView>
    </>);
}
export default searchScreen; 