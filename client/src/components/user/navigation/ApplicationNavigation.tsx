/* eslint-disable multiline-ternary */
/* eslint-disable react/display-name */
/* eslint-disable no-use-before-define */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeNavigation from './HomeNavigation'
import MapsNavigation from './MapsNavigation'
import UserNavigation from './UserNavigation'
import FavoritesNavigation from './FavoritesNavigation'

const Tab = createBottomTabNavigator()

export default function ApplicationNavigation () {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color }:any) => {
        let iconName = null
        route.name === 'Ofertas' ? iconName = 'style'
          : route.name === 'Buscador' ? iconName = 'explore'
            : route.name === 'Favoritos' ? iconName = 'bookmark'
              : iconName = 'person'
        return <Icon name={iconName} size={25} color={color} />
      }
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#7C7C7C',
      style: { height: 60, paddingBottom: 5 },
      labelStyle: { fontWeight: 'bold', fontSize: 12 }
    }}
    >
      <Tab.Screen name='Ofertas' component={HomeNavigation} />
      <Tab.Screen name='Buscador' component={MapsNavigation} />
      <Tab.Screen name='Favoritos' component={FavoritesNavigation} />
      <Tab.Screen name='Perfil' component={UserNavigation} />
    </Tab.Navigator>
  )
}
