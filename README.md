# react-native-storage

Deve instalar o seguintes pacotes:

React Native Paper
------------------
npm install react-native-paper


React Navigation
-----------------
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context

Tipo da navegação

npm install @react-navigation/native-stack


FireBase
-------------------
npm install firebase
npm install @react-native-async-storage/async-storage

Expo Image Picker
-----------------
npx expo install expo-image-picker

Quando vcs forem fazer o Projeto não esqueçam de no arquivo app.json colar abaixo de "web" o código abaixo.

 "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ]
    ]
