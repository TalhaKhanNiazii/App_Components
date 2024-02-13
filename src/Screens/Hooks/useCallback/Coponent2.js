import { Text } from 'react-native'
import React,{memo} from 'react'

const Coponent2 = ({count2}) => {
  console.log('Component 2')
  return (
    <>
        <Text style={{fontSize:30, color:'black', margin:20}}>Count Two : {count2}</Text>
    </>
  )
}

export default memo(Coponent2);