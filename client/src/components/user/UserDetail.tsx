/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { Text } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons'
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

// const meal = { uri: 'https://i1.wp.com/catalinacevedomejia.com/wp-content/uploads/2015/10/salmon-518032_1280.jpg' }

function UserDetail ({ promotions, dispatch }: Reducer) {
  useEffect(() => {
    if (!promotions || !promotions?.length) {
      dispatch(requestPromotions())
    }
  }, [promotions?.length])

  return (<Text>Hola</Text>)
}

function mapStateToProps (boardPubReducer: any) {
  return {
    promotions: boardPubReducer.promotions
  }
}
export default connect(mapStateToProps)(UserDetail)
