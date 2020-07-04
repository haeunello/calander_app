import React from 'react'
import { Text, View } from 'react-native';

//export default인 경우, App.js에서 받아올 이름 지정
export default function CalanderScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calander!</Text>
      </View>
    );
  }
