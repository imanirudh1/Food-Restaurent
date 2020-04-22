import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import searchScreen from './src/screens/searchScreen';
import ResultImage from './src/screens/ResultImage';

const navigator=createStackNavigator({
  search:searchScreen,
  resultImg:ResultImage

},
{
  initialRouteName:'search',
  defaultNavigationOptions:{
    title:'Bussiness Search'
  }
});
export default createAppContainer(navigator);