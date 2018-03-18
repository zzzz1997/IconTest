import React, { Component } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native'

import { Badge } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

export default class BadgeScreen extends Component {
    render() {
        return(
            <View style={{alignItems: 'center'}}>

                <Badge
                    value={3}
                    textStyle={{ color: 'orange' }}
                    containerStyle={{marginTop: 20}}/>

                <Badge
                    containerStyle={{ backgroundColor: 'violet', marginTop: 20}}>
                    <Text>User 1</Text>
                </Badge>

                <Badge
                    onPress={() => this.refs.toast.show("5")}
                    value="5"
                    containerStyle={{marginTop: 20}}/>

                <Badge
                    value={10}
                    component={TouchableNativeFeedback}
                    containerStyle={{marginTop: 20}}/>

                <Toast ref={'toast'}/>

            </View>
        )
    }
}