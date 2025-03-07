import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import "../global.css"
import { Slot, Stack } from 'expo-router';

const _layout = () => {
  return (
    <>
    <Stack >
        <Stack.Screen name='index' options={{title : 'Home'}} />
    </Stack>
    </>
  )
}

export default _layout

const styles = StyleSheet.create({
    
})