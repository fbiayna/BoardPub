/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import requestPromotions from '../../actions/actionsFunctions'

interface Reducer {
  promotions: Promotion[],
  dispatch: Function,
}

interface Promotion {
  name: string,
  date: string,
  description: string,
  establishment: string,
  price: string
  type: string
}

const meal = { uri: 'https://i1.wp.com/catalinacevedomejia.com/wp-content/uploads/2015/10/salmon-518032_1280.jpg' }

function HomePromotionsMenu ({ promotions, dispatch }: Reducer) {
  const [typeState, setType] = useState('menu')
  useEffect(() => {
    if (!promotions || !promotions?.length) {
      dispatch(requestPromotions('menu'))
    }
  }, [promotions])

  return (
    <View style={style.container}>
      <View style={style.headerTop}>
        <View style={style.ubication}>
          <View style={style.town}>
            <Icon name="near-me" size={18} color="#fff" />
            <Text style={style.ubicationText}>Badalona</Text>
          </View>
          <Text style={style.nearYouText}>A 10 km de ti</Text>
        </View>
      </View>
      <View style={style.menuContainer}>
        <View style={style.menu}>
          <Icon name="restaurant" style={typeState === 'menu' ? style.active : style.noActive} size={25} onPress={() => dispatch(requestPromotions('menu')) && setType('menu')} />
          <Icon name="local-bar" style={typeState === 'drink' ? style.active : style.noActive} size={25} onPress={() => dispatch(requestPromotions('drink')) && setType('drink')} />
          <Icon name="local-offer" style={typeState === 'pack' ? style.active : style.noActive} size={25} onPress={() => dispatch(requestPromotions('pack')) && setType('pack')} />
          <Icon name="local-activity" style={typeState === 'other' ? style.active : style.noActive} size={25} onPress={() => dispatch(requestPromotions('other')) && setType('other')} />
        </View>
      </View>
      <View style={style.promotionsContainer}>
        {promotions && promotions.length && <FlatList data={promotions} keyExtractor={(item: Promotion) => item.name}
        renderItem={({ item }) => (<View key={item.name} style={style.promotionContainer}>
          <View style={style.promotion}>
            <View style={style.imageContainer}>
              <ImageBackground source={meal} imageStyle={{ borderRadius: 10 }} style={style.promotionImage}>
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
        </View>)} />}
      </View>
      <View style={style.headerDown}>
        <View style={style.headerOptions}>
          <Icon name="style" size={25} color="#000" />
          <Text style={style.headerDownText}>Promociones</Text>
        </View>
        <View style={style.headerOptions}>
          <Icon name="explore" size={25} color="#7C7C7C" />
          <Text style={style.headerDownNot}>Cerca de tí</Text>
        </View>
        <View style={style.headerOptions}>
          <Icon name="bookmark" size={25} color="#7C7C7C" />
          <Text style={style.headerDownNot}>Tus favoritos</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%'
  },
  headerTop: {
    backgroundColor: '#92000A',
    height: 95.5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  ubication: {
    marginTop: 20,
    width: 110,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  town: {
    flexDirection: 'row'
  },
  ubicationLogo: {
    backgroundColor: '#fff',
    width: 18,
    height: 18
  },
  ubicationText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  nearYouText: {
    color: '#fff'
  },
  menuContainer: {
    alignItems: 'center'
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFD7DB',
    borderRadius: 10,
    width: 300,
    height: 55,
    marginTop: 15,
    marginBottom: 15,
    elevation: 10
  },
  noActive: {
    color: '#7C7C7C'
  },
  active: {
    color: '#000'
  },
  promotionsContainer: {
    flexGrow: 1,
    flex: 1,
    height: '100%'
  },
  promotionContainer: {
    alignItems: 'center',
    marginBottom: 15
  },
  promotion: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 300,
    height: 180,
    elevation: 10
  },
  imageContainer: {
    flex: 1
  },
  promotionImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  priceContainer: {
    width: 70,
    height: 38,
    backgroundColor: '#660007',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  price: {
    color: '#fff',
    fontWeight: 'bold'
  },
  infoContainer: {
    flex: 1
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 4,
    marginBottom: 3
  },
  establishment: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#7C7C7C',
    marginBottom: 8
  },
  otherInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15
  },
  otherInfo: {
    color: '#9E9E9E',
    fontSize: 12,
    fontWeight: 'bold'
  },
  headerDown: {
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: 71,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  headerOptions: {
    alignItems: 'center'
  },
  headerDownText: {
    fontWeight: 'bold'
  },
  headerDownNot: {
    fontWeight: 'bold',
    color: '#7C7C7C'
  },
  menuTextNot: {
    fontWeight: 'bold',
    color: '#7C7C7C'
  }
})

function mapStateToProps ({ boardPubReducer }: any) {
  debugger
  return {
    promotions: boardPubReducer.promotions
  }
}
export default connect(mapStateToProps)(HomePromotionsMenu)
