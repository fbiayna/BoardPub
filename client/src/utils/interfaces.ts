/* eslint-disable no-use-before-define */
export interface Action {
  type: string,
  promotions?: object,
  promotion?: object,
  error?: any
}

export interface ActionUser {
  type: string,
  user?: User,
  userState?: Boolean,
  favorite?: string,
  error?: any
}

export interface PromotionsMenu {
  promotions: Promotion[],
  typePromotion: string,
  navigation?: any
}

export interface Reducer {
    promotions?: Promotion[],
    navigation?: any,
    dispatch: Function,
  }

export interface LoginReducer {
    user?: User,
    navigation?: any,
    dispatch: Function,
  }

export interface NavigationProps {
    site: string,
    navigation?: any,
  }

export interface DetailReducer {
    promotion?: Promotion,
    dispatch: Function,
  }

export interface Promotion {
    _id: any,
    name: string,
    date: string,
    description: string,
    establishment: Establishment,
    ubication: string,
    price: string
    type: string
  }

export interface User {
  _id: any,
  admin: boolean,
  name: string,
  surname: string,
  email: string,
  photo: string,
  sub: string,
  favorites?: Establishment[],
  establishment?: Establishment,
  promotions?: any
}

export interface Establishment {
  _id: any,
  name: string,
  ubication: string,
  city: string,
  photo: string,
  description: string,
  rating: number
}
