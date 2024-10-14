import React from "react";
import { View,Text,StyleSheet, SafeAreaView, Button } from "react-native";
import Product from "./components/Product";
import Header from "./components/Header";



const App=()=>{

  const product=[
    {
      name:'Samsung Mobile',
      color:'white',
      price :30000,

    },
    {
      name:'Nokia Mobile',
      color:'black',
      price :30000,

    },
    {
      name:'Apple I phone',
      color:'green',
      price :130000,

    }
  ]
    return(
        <SafeAreaView>
          <Header/>
          {
            product.map((item)=>
              <Product item={item}/>
            
          )
          }
        
        </SafeAreaView>
    );
};

const styles =StyleSheet.create({
    conatiner:{
        flex:1,
    }
})

export default App;
