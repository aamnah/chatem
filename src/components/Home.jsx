import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native'

export default function Home({}) {
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
            backgroundColor: 'red',
          }}
        >
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
