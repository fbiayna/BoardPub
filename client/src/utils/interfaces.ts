/* eslint-disable no-use-before-define */
export interface Action {
  type: string,
  promotions?: object,
  error: any
}

export interface Reducer {
    promotions: Promotion[],
    dispatch: Function,
  }

export interface Promotion {
    name: string,
    date: string,
    description: string,
    establishment: string,
    price: string
    type: string
  }
