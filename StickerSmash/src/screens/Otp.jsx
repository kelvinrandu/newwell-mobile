/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { OtpInput } from "react-native-otp-entry";

import { useRef, useState } from "react";
import {useTheme} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { useAuth } from "../../context/AuthContext";
import { useToast } from "react-native-toast-notifications";

  export default function Otp({route}) {
    const { email } = route.params;
    const{verifyOtp } =useAuth();
    const toast = useToast();
    console.log('email',email)
  const [codes, setCodes] = useState();
  // const _refs = Array(6)
  //   .fill(null)
  //   .map(() => useRef<TextInput>(null));

  const [errorMessages, setErrorMessages] = useState([]);
  const navigation = useNavigation();
  const {colors} = useTheme();
 

  const otpConfig = {
    borderColor: "#fff",
    backgroundColor: "#fff",
    textColor: "#000",
    errorColor: "#dc2626",
    focusColor: "#22c55e"
  }
  const onVerifyOtp = async () => { 
    const results = await verifyOtp(email,codes)
    console.log(' OTP results',results)
    if(results?.error){
        toast.show("Otp verification failed", {
          type: "danger",
          placement: "top",
          duration: 4000,
          offset: 30,
          animationType: "slide-in",
        });

    }else{
      toast.show("Login  success", {
        type: "success",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });
      // const results = await onLogin( email.value,password.value)
      // navigation.navigate('OtpPage',{
      //   email:email.value,
      // })

    }
    // axios.post('https://nfa.newwell.app/api/auth/jwt-signin', {
    //   email: email.value,
    //   password: password.value
    // })
    // .then(function (response) {
    //   console.log('response',response.data);
    //   console.log(response?.data['jwt'])
    //   // response?.data['jwt']? console.log('login successfull'):console.log('wrong credentials')

    //   if(response?.data['jwt']){
    //     // toast.show("Login succesful", {
    //     //   type: "success",
    //     //   placement: "top",
    //     //   duration: 4000,
    //     //   offset: 30,
    //     //   animationType: "slide-in",
    //     // });
    // //     navigation.reset({
    // //   index: 0,
    // //   routes: [{ name: 'Dashboard' }],
    // // })

    //   }
    //   else{
    //     // toast.show("Login unsuccesful", {
    //     //   type: "danger",
    //     //   placement: "top",
    //     //   duration: 4000,
    //     //   offset: 30,
    //     //   animationType: "slide-in",
    //     // });

    //   }
    // })
    // .catch(function (error) {
    //   console.log('eror',error);
    // });
    

  }

  return (
    <View style={{height: "100%", width: "100%", justifyContent: "center", alignItems: "center"}}>
             <Text textAlign='left' style={{color: colors.text,fontSize:20,fontWeight:800, paddingBottom:80}}>Check your Email</Text>
      <Text style={{color: colors.text, paddingBottom:20}}>We’ve sent a code to your email.</Text>
      <View style={{ width: "80%", justifyContent: "center", alignItems: "center"}}>
      <OtpInput
  numberOfDigits={4}
  focusColor="green"
  focusStickBlinkingDuration={500}
  onTextChange={(text) => console.log(text)}
  onFilled={(text) =>setCodes(text)}
  textInputProps={{
    accessibilityLabel: "One-Time Password",
  }}
  // theme={{
  //   containerStyle: styles.container,
  //   pinCodeContainerStyle: styles.pinCodeContainer,
  //   pinCodeTextStyle: styles.pinCodeText,
  //   focusStickStyle: styles.focusStick,
  //   focusedPinCodeContainerStyle: styles.activePinCodeContainer,
  // }}
/>
</View>
<Button buttonColor='#F47133' style={{width: '80%', marginTop:40,marginLeft: 0,borderRadius:10}} mode="contained"
onVerifyOtp
onPress={onVerifyOtp}
//  onPress={() =>   navigation.navigate('Dashboard')}
 >
        Verify
  </Button>
    </View>
  );
}
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
