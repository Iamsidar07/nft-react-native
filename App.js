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
    "SpaceGrotesk-Bold": require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
    "SpaceGrotesk-Light": require("./assets/fonts/SpaceGrotesk-Light.ttf"),
    "SpaceGrotesk-Medium": require("./assets/fonts/SpaceGrotesk-Medium.ttf"),
    "SpaceGrotesk-Regular": require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
    "SpaceGrotesk-SemiBold": require("./assets/fonts/SpaceGrotesk-SemiBold.ttf"),
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


