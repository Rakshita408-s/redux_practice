import React, { useEffect } from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import { addToCart } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";


const Product=(props)=>{
    const item =props.item
    const dispatch =useDispatch();
    const cartItems= useSelector((state)=>state.reducer);

   const  handleAddToCart=(item)=>{
     console.log("Called",item)
     dispatch(addToCart(item))
    }
    useEffect(()=>{
if(cartItems && cartItems.length ){
    cartItems.forEach((element) => {
        console.warn(element)
    });
}
    },[cartItems])
    return(
        <View style={styles.main}>
        <View style={styles.item}>
        <Text>{item.name}</Text>
        <Text>{item.color}</Text>
        <Text>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>handleAddToCart(item)}>
        <Text style={styles.button}>Add to cart</Text>
        </TouchableOpacity>
      </View>
      
    );
};

const styles =StyleSheet.create({
    main:{
        backgroundColor:'#CBC3E3'
       
    },
    buttonContainer:{
        backgroundColor:'#5D3FD3',
        marginHorizontal:60,
        marginVertical:20,
        paddingVertical:13,

    },
    button:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'600'
    },
    item:{
        paddingLeft:40,
    }
    
})

export default Product;