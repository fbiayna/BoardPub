/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/Favorites'
import { LoginReducer, Favorite } from '../../utils/interfaces'
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { meal } from '../../utils/images'
import { deleteFavorite } from '../../actions/userFunctions'

function FavoritesMenu ({ user, dispatch, navigation }: LoginReducer) {
  return (
    <View testID={'list-favorites'} style={style.container}>
      <View style={style.headerTop}>
        <View style={style.ubication}>
            <Text style={style.ubicationText}>Tus Favoritos</Text>
        </View>
      </View>
      <FlatList data={user?.favorites} keyExtractor={(item: Favorite) => item.name}
        renderItem={({ item }) => (<TouchableOpacity testID={'favorite'} key={item.name} style={style.favoriteContainer} activeOpacity={0.9}
        onPress={() => navigation.navigate('detail', { id: item._id })}>
        <View style={style.favorite}>
            <View style={style.imageContainer}>
                <ImageBackground source={meal()} style={style.favoriteImage} imageStyle={{ borderRadius: 10 }}></ImageBackground>
            </View>
            <View style={style.infoContainer}>
                <Text style={style.establishment}>{item.establishment}</Text>
                <View>
                <TouchableOpacity testID="deleteFavorite" onPress={() => dispatch(deleteFavorite(item.establishment))}><Text>X</Text></TouchableOpacity>
              </View>
            </View>
        </View>
    </TouchableOpacity>)} />
    </View>
  )
}

function mapStateToProps ({ loginReducer }: any) {
  return {
    user: loginReducer.user
  }
}
export default connect(mapStateToProps)(FavoritesMenu)
