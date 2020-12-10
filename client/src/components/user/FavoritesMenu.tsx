/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/Favorites'
import { FavoritesReducer, Establishment } from '../../utils/interfaces'
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import { connect } from 'react-redux'
import { deleteFavorite } from '../../actions/userFunctions'

function FavoritesMenu ({ user, dispatch, navigation }: FavoritesReducer) {
  return (
    <View testID={'list-favorites'} style={style.container}>
      <View style={style.headerTop}>
        <View style={style.ubication}>
            <Text style={style.ubicationText}>Tus Favoritos</Text>
        </View>
      </View>
      <FlatList style={style.favoritesList} data={user?.favorites} keyExtractor={(item: Establishment) => item.name}
        renderItem={({ item }) => (<TouchableOpacity testID={'favorite'} key={item.name} style={style.favoriteContainer} activeOpacity={0.9}
        onPress={() => navigation.navigate('detail-establishment', { id: item._id })}>
        <View style={style.favorite}>
            <View style={style.imageContainer}>
                <ImageBackground source={{ uri: item.photo }} style={style.favoriteImage} imageStyle={{ borderRadius: 10 }}>
                  <TouchableOpacity style={style.deleteButton} testID="deleteFavorite" onPress={() => dispatch(deleteFavorite(user, item._id)) && Alert.alert('¡Favorito eliminado!', `Has eliminado a ${item.name} de tu red de 'Favoritos'`, [{ text: 'Volver' }])} activeOpacity={0.9}>
                    <View style={style.deleteContainer}>
                      <Text style={style.deleteX}>X</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={style.infoContainer}>
                <Text style={style.establishment}>{item.name}</Text>
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
