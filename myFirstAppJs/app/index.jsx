import { Redirect , router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , Image } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvide';


export default function Home() {
  const {isLoggedIn , isLoading } = useGlobalContext();
    console.log(isLoggedIn);
    console.log(isLoading)
    if(!isLoading && isLoggedIn) {
      return <Redirect href= '/home' />
    }
  return (
    <SafeAreaView className = 'bg-primary h-full' >
      <ScrollView contentContainerStyle = {{height :' 100%'}}> 
        {/* ensure that if the containt is more than the size of the screen than it will allow  you to scroll  */}
        <View className = "w-full  items-center min-h-[75vh] justify-center px-4   ">
          <Image 
          source = {images.logo}
           className = 'w-[130px] h-[84px]'
           resizeMode='contain' 
            />
          <Image 
          source={images.cards}
          className = 'max-w-[380px] w-full h-[300px]'
          resizeMode='contain'          
          />
          <View className = 'relative mt-5 px-1 '>
            <Text className ="text-3xl text-white text-center  font-bold ">
              Discover Endless Possibilities with  {' '}
            </Text>
            <Text className = 'text-secondary-200 absolute top-9 right-28 text-3xl font-bold'>
              Aora
            </Text>
            <Image
            source={images.path}
            className = 'w-[60px] h-[130px] absolute right-28 '
            resizeMode='contain'
            />
          </View>
          <Text className ='text-center text-sm font-pregular mt-7 text-gray-100'>
            Where Creativity Meets Innovation: Embark on a journey of limitless exploration with Aora
          </Text>
          <CustomButton 
          title = 'Contine With Email'
          handlePress = {() => router.push('/sign-in')}
          containerStyle = 'w-full mt-7'          
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
    
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
