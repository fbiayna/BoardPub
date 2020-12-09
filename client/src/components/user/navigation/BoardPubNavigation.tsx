/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ApplicationNavigation from './ApplicationNavigation'
import { connect } from 'react-redux'
import LoginNavigator from './LoginNavigation'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

function BoardPubNavigation () {
  return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name={'login'} component={LoginNavigator}/>
            <Stack.Screen name={'application'} component={ApplicationNavigation}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

function mapStateToProps ({ loginReducer }: any) {
  return {
    userState: loginReducer.userState
  }
}
export default connect(mapStateToProps)(BoardPubNavigation)
