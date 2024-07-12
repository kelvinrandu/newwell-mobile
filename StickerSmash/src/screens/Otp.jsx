/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import { useRef, useState } from "react";
import {useTheme} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

export default function Otp() {
  const [codes, setCodes] = useState(Array(6).fill(""));
  const _refs = Array(6)
    .fill(null)
    .map(() => useRef<TextInput>(null));

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

  return (
    <View style={{height: "100%", width: "100%", justifyContent: "center", alignItems: "center"}}>
             <Text textAlign='left' style={{color: colors.text,fontSize:20,fontWeight:800, paddingBottom:80}}>Check your WhatsApp</Text>
      <Text style={{color: colors.text, paddingBottom:20}}>We’ve sent a code to your registered number.</Text>
      <OtpInput
  numberOfDigits={6}
  focusColor="green"
  focusStickBlinkingDuration={500}
  onTextChange={(text) => console.log(text)}
  onFilled={(text) => console.log(`OTP is ${text}`)}
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
<Button buttonColor='#F47133' style={{width: '80%', marginTop:40,marginLeft: 0,borderRadius:10}} mode="contained" onPress={() =>   navigation.navigate('Dashboard')}>
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
