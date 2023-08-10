import React from 'react'
import { View, Text } from 'react-native'

const OurChild = (props) => {
  const { message } = props // bu prop dışardan parenttan bilgi alıyo
  return (
    //prop diyo ki gitçem bütün message
    //bilgilerini alcam
    <View style={{ height: 200, width: 200, backgroundColor: 'red' }}>
      <Text>{message}</Text>
    </View>
  )
}

export default OurChild
//aynı tipte kutudan mesela message kutusundan bir sürü oluşturabiliyosun içine ne koyacağın
//bilgisini de parenttan aldık bu normalde data olurdu
//bilgileri de ekranda gösteriyoruz
