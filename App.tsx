import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import BottomTabs from "./src/navigators/bottom_tabs";  

export default function App() {
  return <SafeAreaProvider>
    <StatusBar barStyle={'dark-content'} />
    <NavigationContainer onReady={() => changeNavigationBarColor('white')}>
      <BottomTabs />
    </NavigationContainer>
  </SafeAreaProvider>
}