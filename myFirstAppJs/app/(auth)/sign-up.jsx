import { View, Text, ScrollView, Image, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appWriteConfig";

const SignUp = () => {
  const [form, setForm] = useState({
    userName : '',
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitSignin = async () => {
    if (!form.email || !form.password || !form.userName) 
      Alert.alert('Error : Kindly Fill all the fields .');
    else{
    try{
      setIsSubmitting(true)
      console.log('Signing uppp..')
      const result = await  createUser(form.email , form.password  , form.userName);
      
      if(!result) throw Error ;

      router.replace('/home')
    }
    catch(error){
    Alert.alert('Error' , error.message)
    }
    finally{
      setIsSubmitting(false);
    }
  ;    
  };
}

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="w-full justify-center min-h-[82vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">
            Sign up to Aora
          </Text>
          {/* Making all the forms  */}
          <FormField
            title="Username"
            value={form.userName}
            handleChangeText={(e) => setForm({ ...form, userName: e })}
            otherStyles="mt-7"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-8"
          />

          <CustomButton
            handlePress={submitSignin}
            containerStyle="mt-8 w-full"
            title="Sign up"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2 mt-3">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account ?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
