/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/Favorites'
import { FavoritesProps, Favorite } from '../../utils/interfaces'
import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import { meal } from '../../utils/images'

export default function FavoritesList ({ favorites, navigation }: FavoritesProps) {
  return (
    <View testID={'favoritesList'}>
    <FlatList data={favorites} keyExtractor={(item: Favorite) => item.name}
    renderItem={({ item }) => (<TouchableOpacity testID={'favorite'} key={item.name} style={style.favoriteContainer} activeOpacity={0.9}
     onPress={() => navigation.navigate('detail', { id: item._id })}>
        <View style={style.favorite}>
            <View style={style.imageContainer}>
                <ImageBackground source={meal()} style={style.favoriteImage} imageStyle={{ borderRadius: 10 }}>
                </ImageBackground>
            </View>
            <View style={style.infoContainer}>
                <Text style={style.establishment}>{item.establishment}</Text>
            </View>
        </View>
    </TouchableOpacity>)} />
    </View>
  )
}
