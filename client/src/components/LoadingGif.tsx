/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Image } from 'react-native'
import style from './style/Loading'
import { loading } from '../utils/images'

export default function Loading ():any {
  return (
    <View style={style.loadingImageContainer}>
      <Image source={loading()} style={style.loadingImage}/>
    </View>
  )
}
