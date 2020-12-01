/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
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
  price: string
  type: string
}

const meal = { uri: 'https://i1.wp.com/catalinacevedomejia.com/wp-content/uploads/2015/10/salmon-518032_1280.jpg' }

function HomePromotionsMenu ({ promotions, dispatch }: Reducer) {
  useEffect(() => {
    if (!promotions || !promotions?.length) {
      dispatch(requestPromotions())
    }
  }, [promotions?.length])

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
          <Text style={style.menuText}>Menús</Text>
          <Text style={style.menuTextNot}>Bebidas</Text>
          <Text style={style.menuTextNot}>Packs</Text>
          <Text style={style.menuTextNot}>Otros</Text>
        </View>
      </View>
      <View style={style.promotionContainer}>
        <View style={style.promotion}>
          <View style={style.imageContainer}>
            <ImageBackground source={meal} imageStyle={{ borderRadius: 10 }} style={style.promotionImage}>
              <View style={style.priceContainer}>
                <Text style={style.price}>10,50€</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={style.infoContainer}>
            <View style={style.titleContainer}>
              <Text style={style.title}>¡Pizzas para todos!</Text>
              <Text style={style.establishment}>Skylab Coders Academy</Text>
            </View>
            <View style={style.otherInfoContainer}>
              <Text style={style.otherInfo}>Hoy 13:40 - 15:00</Text>
              <Text style={style.otherInfo}>4km</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.headerDown}>
        <View style={style.headerOptions}>
          <Icon name="restaurant" size={25} color="#000" />
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
    width: 320,
    height: 55,
    marginTop: 15,
    marginBottom: 15,
    elevation: 10
  },
  menuText: {
    fontWeight: 'bold'
  },
  promotionContainer: {
    alignItems: 'center'
  },
  promotion: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 320,
    height: 200,
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
    marginBottom: 4
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
    position: 'absolute',
    backgroundColor: '#fff',
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

function mapStateToProps (boardPubReducer: any) {
  return {
    promotions: boardPubReducer.promotions
  }
}
export default connect(mapStateToProps)(HomePromotionsMenu)
