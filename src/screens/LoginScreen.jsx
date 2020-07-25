import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native'

export default function Login({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            height: 100,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
          }}
        >
          <Text>Login</Text>
          <Button onPress={() => navigation.navigate('Signup')}>
            Go to Signup
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
