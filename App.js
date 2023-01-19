import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import {QueryClientProvider,QueryClient} from "react-query"

const Stack=createNativeStackNavigator();

const queryClient=new QueryClient();
const FavouriteTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export default function App() {
  const [loaded]=useFonts({
    "AnekDevanagari-Bold": require("./assets/fonts/AnekDevanagari-Bold.ttf"),
    "AnekDevanagari-Light": require("./assets/fonts/AnekDevanagari-Light.ttf"),
    "AnekDevanagari-Medium": require("./assets/fonts/AnekDevanagari-Medium.ttf"),
    "AnekDevanagari-Regular": require("./assets/fonts/AnekDevanagari-Regular.ttf"),
  });

  

  if(!loaded) return null;
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={FavouriteTheme} >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'  >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Detail" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}


