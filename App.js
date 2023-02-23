import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import TeamConditionForm from './screens/TeamConditionForm';
import TeamForm from './screens/TeamForm';
import AddNames from './screens/AddNames';
import TaskForm from './screens/TaskForm';
import RiskForm from './screens/RiskForm';
import ControlRiskForm from './screens/ControlRiskForm';
import SaveForm from './screens/SaveForm';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TeamCondition" component={TeamConditionForm} />
        <Stack.Screen name="TeamForm" component={TeamForm} />
        <Stack.Screen name="Add" component={AddNames} />
        <Stack.Screen name="Task" component={TaskForm} />
        <Stack.Screen name="Risk" component={RiskForm} />
        <Stack.Screen name="ControlRisk" component={ControlRiskForm}/>
        <Stack.Screen name="SaveForm" component={SaveForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;