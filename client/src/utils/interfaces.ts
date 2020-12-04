/* eslint-disable no-use-before-define */
export interface Action {
  type: string,
  promotions?: object,
  promotion?: object,
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

export interface DetailReducer {
    promotion?: Promotion,
    dispatch: Function,
  }

export interface Promotion {
    _id: any,
    name: string,
    date: string,
    description: string,
    establishment: string,
    ubication: string,
    price: string
    type: string
  }
