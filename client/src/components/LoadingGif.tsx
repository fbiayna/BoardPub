/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Image } from 'react-native'
import style from './style/Loading'

const loading = { uri: 'https://trello-attachments.s3.amazonaws.com/5ec457af3dca9f5428a9f179/210x374/aba40d5ffeb52b3299e1abb01132a636/BoardPub_-_Loading.gif' }

export default function Loading ():any {
  return (
    <View style={style.loadingImageContainer}>
      <Image source={loading} style={style.loadingImage}/>
    </View>
  )
}
