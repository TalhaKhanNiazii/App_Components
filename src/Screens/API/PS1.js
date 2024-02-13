import { View, Text, FlatList , Image} from 'react-native'
import React, {useState, useEffect} from 'react'

const PS1 = () => {
    const [data, setData] = useState([]);
    const callApi = async () => {
        try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        setData(data.products)
        console.log('Data received', data.products)
    } 
        catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        callApi()
        // fetch('https://jsonplaceholder.typicode.com/posts')
    //  .then(res => res.json()).then(data=> setData(data))
    }, [])

  return (
    <View style={{flex:1, backgroundColor:'tan', alignItems:'center',padding:10}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}><Text style={{backgroundColor:'white', marginTop:20,marginBottom:5, height:50, fontSize:20, width:'50%', color:'black', textAlign:'center', lineHeight:50, borderRadius:10, fontWeight:'bold'}}>{item.brand}</Text>
        <Image resizeMode= 'stretch' style={{height:250, width:350, borderRadius:10}} source={{uri:item.thumbnail}}/>
        <View style={{height:2, borderRadius:1, backgroundColor:'black', width:'100%', margin:10}}></View>
        </View> }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default PS1

