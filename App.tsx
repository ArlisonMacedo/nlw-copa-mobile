// import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, StatusBar } from 'native-base';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto'

import { Loading } from './src/components/Loading';
import {THEME} from './src/styles/theme'
import { SignIn } from './src/Screens/SignIn';
// import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })
  return (
    <NativeBaseProvider theme={THEME}>
      {/* <AuthContextProvider> */}
        <StatusBar 
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        {fontsLoaded ? <SignIn /> : <Loading />}
      {/* </AuthContextProvider> */}
    </NativeBaseProvider>
  );
}

