import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
const Header = () => {
    const [cartItem, setCartItem] = useState(0)
    const cartData = useSelector((state) => state.reducer
    )
    
    useEffect(() => {
        setCartItem(cartData.length)
    }, [cartData])
    
    console.log(cartData.length)

    return (
        <View style={styles.main}>
            <Text style={styles.heading}>Header</Text>
            <Text style={styles.header}> {cartItem}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#5D3FD3',
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
        paddingLeft: 160,
        color: 'white',
        fontSize: 30,
    },
    header: {
        textAlign: 'right',
        color: 'white',
        fontSize: 30,
    }
})

export default Header;