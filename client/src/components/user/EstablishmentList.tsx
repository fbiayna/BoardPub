/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { Promotion } from 'utils/interfaces'
import style from '../styles/establishmentListStyles'

export default function EstablishmentList ({ promotions, navigation }:any) {
  return (
    <View>
        {promotions.length
          ? <FlatList data={promotions} keyExtractor={(item: Promotion) => item.name}
                renderItem={({ item }) => (<TouchableOpacity testID={'promotion'} key={item.name} style={style.promotionContainer} activeOpacity={0.9}
                onPress={() => navigation.navigate('detail', { id: item._id })}>
                    <View style={style.promotion}>
                        <View style={style.imageContainer}>
                            <ImageBackground source={{ uri: item.photo }} style={style.promotionImage} imageStyle={{ borderRadius: 10 }}>
                                <View style={style.priceContainer}>
                                    <Text style={style.price}>{item.price}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={style.infoContainer}>
                            <View style={style.titleContainer}>
                                <Text style={style.title}>{item.name}</Text>
                            </View>
                            <View style={style.otherInfoContainer}>
                                <Text style={style.otherInfo}>{item.date}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>)}
            />
          : <Text>No hay promociones activas</Text>}
    </View>
  )
}
