/* eslint-disable no-use-before-define */
export interface Action {
  type: string,
  promotions?: object,
  promotion?: object,
  error?: any
}

export interface PromotionsMenu {
  promotions: Promotion[],
  typePromotion:string
}

export interface Reducer {
    promotions?: Promotion[],
    dispatch: Function,
  }

export interface Promotion {
    name: string,
    date: string,
    description: string,
    establishment: string,
    ubication: string,
    price: string
    type: string
  }
