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
   import { useToast } from "react-native-toast-notifications";
   import { useAuth } from "../../context/AuthContext";


export default function Profile ({route}) {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [stageName, setStageName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const navigation = useNavigation();
  const {colors} = useTheme();
  const toast = useToast();
  const { email } = route.params;
  const{onProfileAdd } =useAuth();
  const register = async () => { 
    setIsloading(true)
    const results = await onProfileAdd(email,firstName,lastName,country,gender,phone)
    console.log('results',results.data)
    if(results.data !== "success"){
        toast.show("Register unsuccesful", {
          type: "danger",
          placement: "top",
          duration: 4000,
          offset: 30,
          animationType: "slide-in",
        });

    }else{
      toast.show("Profile updated successful", {
        type: "success",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });
      setIsloading(false)
      navigation.navigate('Profile',{
        email:email,
      })

    }


    setIsloading(false)
    

  }

  return (
    <View style={styles.container}>
       <Text textAlign='left' style={{color: colors.text,fontSize:20,fontWeight:800,marginTop:100, marginBottom:60}}>Add Profile</Text>
      <Text textAlign='left' style={{color: colors.text}}>First Name</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          borderRadius:10,
          ...styles.input,
        }}
       type='text'
        onChangeText={setFirstName}
        value={firstName}
      />

<Text textAlign='left' style={{color: colors.text}}>Last Name</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          borderRadius:10,
          ...styles.input,
        }}

        type='text'
        onChangeText={setLastName}
        value={lastName}
      />
      <Text textAlign='left' style={{color: colors.text}}>Stage Name</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          borderRadius:10,
          ...styles.input,
        }}
        onChangeText={setParticipantName}
        type='email'
        value={partipantName}
      />
      <Text textAlign='left' style={{color: colors.text}}>Country </Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          borderRadius:10,
          ...styles.input,
        }}
        onChangeText={setParticipantName}
        type='email'
        value={partipantName}
      />
      <Text textAlign='left' style={{color: colors.text}}>Gender</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          borderRadius:10,
          ...styles.input,
        }}
        onChangeText={setParticipantName}
        type='email'
        value={partipantName}
      />
      {/* {isLoading ? (
        <Button color={'red'} title="Connecting.." />
      ) : (
        <Button containerViewStyle={{width: '100%', marginLeft: 0}} borderRadius={10} style={{width:'80%',borderRadius:20}} color={'red'} title="Sign In" onPress={()=> 
          navigation.navigate('OtpPage')
         
        }
          />
      )} */}
        <Button  loading={isLoading} disabled={isLoading} buttonColor='#F47133' style={{width: '100%', marginLeft: 0,borderRadius:10}} mode="contained"
        //  onPress={() =>   navigation.navigate('OtpPage')}
        onPress={register}
         >
        Add Profile
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
