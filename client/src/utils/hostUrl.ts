export function hostUserUrl ():string {
  return (
    'http://192.168.4.9:5000/user'
  )
}

export function hostPromotionsUrl (path: string) {
  return (
    `http://192.168.4.9:5000/promotions/${path}`
  )
}
