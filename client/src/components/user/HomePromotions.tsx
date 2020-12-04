/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/HomePromotionsMenu'
import { Promotion, PromotionsMenu } from '../../utils/interfaces'
import { View, Text, ImageBackground, FlatList, Dimensions, StyleSheet } from 'react-native'
import { meal } from '../../utils/images'
import ListMenu from './ListMenu'

const { width } = Dimensions.get('window')

export default function HomePromotions ({ typePromotion, promotions }: PromotionsMenu) {
  return (
      <View testID={'homePromotions'} style={listStyle.listContent} >
      <ListMenu typePromotion={typePromotion}/>
    <FlatList data={promotions} keyExtractor={(item: Promotion) => item.name}
    renderItem={({ item }) => (<View key={item.name} style={style.promotionContainer}>
        <View style={style.promotion}>
            <View style={style.imageContainer}>
                <ImageBackground source={meal()} style={style.promotionImage} imageStyle={{ borderRadius: 10 }}>
                <View style={style.priceContainer}>
                    <Text style={style.price}>{item.price}</Text>
                </View>
                </ImageBackground>
            </View>
            <View style={style.infoContainer}>
                <View style={style.titleContainer}>
                <Text style={style.title}>{item.name}</Text>
                <Text style={style.establishment}>{item.establishment}</Text>
                </View>
                <View style={style.otherInfoContainer}>
                <Text style={style.otherInfo}>{item.date}</Text>
                <Text style={style.otherInfo}>4km</Text>
                </View>
            </View>
        </View>
    </View>)} />
    </View>
  )
}

const listStyle = StyleSheet.create({
  listContent: {
    flex: 1,
    width: width - 10,
    marginHorizontal: 5,
    position: 'relative'
  }
})
