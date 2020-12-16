export function hostUserUrl ():string {
  return (
    'http://192.168.0.96:5000/user'
  )
}

export function hostPromotionsUrl (path: string) {
  return (
    `http://192.168.0.96:5000/promotions/${path}`
  )
}
