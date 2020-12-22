// /* eslint-disable no-use-before-define */
// import React from 'react'
// import { View, Text, ImageBackground, ScrollView } from 'react-native'
// import { Page, Document } from '@react-pdf/renderer'
// import Icon from 'react-native-vector-icons/MaterialIcons'
// import style from '../styles/detailPromotionStyles'

// function DetailPromotionPdf ({ promotion }: any) {
//   return (
//     <Document>
//     <Page size="A4">
//     <View testID={'detail'} style={style.container}>
//         <ScrollView>
//             <View style={style.imageContainer}>
//               <ImageBackground source={{ uri: promotion.establishment.photo }} style={style.promotionImage} >
//                 <View style={style.priceContainer}>
//                   <Text style={style.price}>{promotion.price}</Text>
//                 </View>
//               </ImageBackground>
//             </View>
//             <View style={style.infoContainer}>
//               <View style={style.titleContainer}>
//                 <Text style={style.title}>{promotion.name}</Text>
//                 <Text style={style.establishment}>{promotion.establishment.name}</Text>
//               </View>
//             </View>
//             <View style={style.otherInfoContainer}>
//               <View style={style.otherContainer}>
//                 <View style={style.dateContainer}>
//                   <Icon name="schedule" size={18} style={style.schedule}/>
//                   <Text style={style.date}>{promotion.date}</Text>
//                 </View>
//                 <View style={style.dateContainer}>
//                   <Icon name="place" size={18} style={style.schedule}/>
//                   <Text style={style.ubication}>{promotion.establishment.ubication} - {promotion.establishment.city}</Text>
//                 </View>
//               </View>
//             </View>
//             <View style={style.descriptionContainer}>
//               <Text style={style.infoPromo}>INFORMACIÓN DE LA PROMOCIÓN</Text>
//               <Text style={style.description}>{promotion.description}</Text>
//             </View>
//             <View style={style.valorationsContainer}>
//               <Text style={style.infoValoration}>VALORACIONES</Text>
//               <View style={style.numbersContainer}>
//                 <View style={style.valContainer}>
//                   <Text style={style.numbersValoration}>{promotion.establishment.rating}/5.0</Text>
//                 </View>
//                 <Text style={style.textValoration}>{promotion.establishment.name} está muy bien valorado por parte de los usuarios</Text>
//               </View>
//             </View>
//           </ScrollView>
//     </View>
//     </Page>
//     </Document>
//   )
// }
// export default DetailPromotionPdf
