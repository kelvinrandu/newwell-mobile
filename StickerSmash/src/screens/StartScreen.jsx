/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import { router } from 'expo-router';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
  // Button,
   StyleSheet, Text, TextInput,ToastAndroid, View} from 'react-native';
   import { Button } from 'react-native-paper';

// const URL_KEY = 'API2axhtoc6oUxm';
// const TOKEN_KEY = 'SVVLMwejKKlqmgf9LV255fWOmEeLLEYM41O1Ma1rIZ6B';

export default function StartScreen () {
  const [partipantName, setParticipantName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const navigation = useNavigation();
  const {colors} = useTheme();


  return (
    <View style={styles.container}>
       <Text textAlign='left' style={{color: colors.text,fontSize:20,fontWeight:800, paddingBottom:180}}>Newwell for Artists</Text>
      <Text textAlign='left' style={{color: colors.text}}>Newwell</Text>

        <Button buttonColor='#F47133' style={{width: '100%', marginLeft: 0,borderRadius:10}} mode="contained" onPress={() =>   navigation.navigate('OtpPage')}>
        Sign In
  </Button>

      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom:200
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  spacer: {
    height: 10,
  },
});
