
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View,Text } from 'react-native';
import Home from './screens/Home';
import ProjectList from './screens/ProjectList';

const Stack=createStackNavigator()


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name="ProjectList"
        component={ProjectList}
          options={({route})=>{
            return({title:route.params.title,
            headerStyle:{backgroundColor: route.params.color},
            headerTintColor:"white"}
            )
          }}>

        </Stack.Screen>
    
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightblue',
    alignItems:'center',
    justifyContent:'center',
  },
});
