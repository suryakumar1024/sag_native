import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from './store/store';

const LoggedInPage = () => {
    const dispatch= useDispatch();
    const name= useSelector(state=>state.user.userName);
    const password= useSelector(state=>state.user.password);
const logoutHandler=()=>{
dispatch(userAction.onLogout())
}
    return (
        <View>
            <Text>{name}</Text>
            <Text>{password}</Text>
            <Button onPress={logoutHandler} title='logout'></Button>
        </View>
    )
}

export default LoggedInPage
