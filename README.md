```bash
npx react-native init ChatApp

# navigate inside the project directory
cd ChatApp

# React Navigation
npm i @react-navigation/native

# React Navigation (dependencies)
npm i react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

# React Native Paper (and dependency)
npm i react-native-paper react-native-vector-icons
```

### Add `jsx` support

Edit `metro.config.js`

```js
// https://stackoverflow.com/a/50314314

resolver: {
  sourceExts: ['jsx', 'js', 'json', 'ts', 'tsx']
}
```

### Running the project

Run `react-native start` before `react-native run-android`

```
react-native start
```

and then in another tab

```
react-native run-android
```

https://heartbeat.fritz.ai/chat-app-with-react-native-part-1-build-reusable-ui-form-elements-using-react-native-paper-75d82e2ca94f
