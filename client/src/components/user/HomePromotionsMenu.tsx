/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import style from '../styles/HomePromotionsMenu'
import { Reducer, Promotion } from '../../utils/interfaces'
import { View, Text, ImageBackground, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { meal } from '../../utils/images'
import { connect } from 'react-redux'
import { requestPromotions } from '../../actions/actionsFunctions'
import Loading from '../loading/LoadingGif'

function HomePromotionsMenu ({ promotions, dispatch }: Reducer) {
  const [typeState, setType] = useState('menu')

  useEffect(() => {
    if (!promotions || !promotions?.length) {
      dispatch(requestPromotions(typeState))
    }
  }, [promotions])

  function handleOnPress (newTypeState: string) {
    dispatch(requestPromotions(newTypeState)) && setType(newTypeState)
  }

  return (
    <View style={style.container}>
      <View style={style.headerTop}>
        <View style={style.ubication}>
          <View style={style.town}>
            <Icon name="near-me" type="materialIcons" style={style.nearIcon}/>
            <Text style={style.ubicationText}>Badalona</Text>
          </View>
          <Text style={style.nearYouText}>A 10 km de ti</Text>
        </View>
      </View>
      <View style={style.menuContainer}>
        <View style={style.menu}>
          <Icon name="restaurant" type="materialIcons" style={typeState === 'menu' ? style.active : style.noActive} onPress={() => handleOnPress('menu')} />
          <Icon name="local-bar" type="materialIcons" style={typeState === 'drink' ? style.active : style.noActive} onPress={() => handleOnPress('drink')} />
          <Icon name="local-offer" type="materialIcons" style={typeState === 'pack' ? style.active : style.noActive} onPress={() => handleOnPress('pack')} />
          <Icon name="local-activity" type="materialIcons" style={typeState === 'other' ? style.active : style.noActive} onPress={() => handleOnPress('other')} />
        </View>
      </View>
      {!promotions
        ? <Loading />
        : promotions.length && <View style={style.promotionsContainer}>
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
      </View> }
      <View style={style.headerDown}>
        <View style={style.headerOptions}>
          <Icon name="style" type="materialIcons" style={style.iconHeaderActive} />
          <Text style={style.headerFooterActive}>Promociones</Text>
        </View>
        <View style={style.headerOptions}>
          <Icon name="explore" type="materialIcons" style={style.iconHeaderNotActive} />
          <Text style={style.headerFooterNotActive}>Cerca de tí</Text>
        </View>
        <View style={style.headerOptions}>
          <Icon name="bookmark" type="materialIcons" style={style.iconHeaderNotActive} />
          <Text style={style.headerFooterNotActive}>Tus favoritos</Text>
        </View>
      </View>
    </View>
  )
}

function mapStateToProps ({ boardPubReducer }: any) {
  return {
    promotions: boardPubReducer.promotions
  }
}
export default connect(mapStateToProps)(HomePromotionsMenu)
