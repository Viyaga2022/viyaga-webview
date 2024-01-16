import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/homeScreen/HomeScreen';
import WebviewScreen from './screens/webviewScreen/WebviewScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title:"Viyaga WebView", headerTitleAlign: 'center'}}/>
          <Stack.Screen name="WebView" component={WebviewScreen} 
          options={{ title: "Viyaga Software Solutions",  headerTitleAlign: 'center'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
