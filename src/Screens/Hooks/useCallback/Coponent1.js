import { Text } from 'react-native'
import React,{memo} from 'react'

const Coponent1 = ({count}) => {
    console.log('Component 1')
  return (
    <>
        <Text style={{fontSize:30, color:'black', margin:20}}>Count One : {count}</Text>
    </>
  )
}

export default memo(Coponent1);