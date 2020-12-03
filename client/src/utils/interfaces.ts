/* eslint-disable no-use-before-define */
export interface Action {
  type: string,
  promotions?: object,
  promotion?: object,
  error?: any
}

export interface Reducer {
    promotions?: Promotion[],
    promotion?: Promotion,
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
