/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text } from 'react-native'
import { FavoritesProps } from '../../utils/interfaces'

export default function Favorites ({ navigation }:FavoritesProps) {
  return (
      <>
        <View>
            <Text>Favorites</Text>
        </View>
    </>
  )
}
