import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import TrangChu from './components/TrangChu';
import BaiTap3 from './components/BaiTap3';
import BaiTap4 from './components/BaiTap4';
import BaiTap5 from './components/BaiTap5';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Bài tập 2' component={TrangChu}/>
      <Stack.Screen name='Bài Tập 3' component={BaiTap3}/>
      <Stack.Screen name='Bài Tập 4' component={BaiTap4}/>
      <Stack.Screen name='Bài Tập 5' component={BaiTap5}/>
      </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
