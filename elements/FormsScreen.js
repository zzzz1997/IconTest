import React, { Component } from 'react';
import { View } from 'react-native'

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

export default class FormsScreen extends Component {
    render() {
        return (
            <View>
                <FormLabel>Name</FormLabel>
                <FormInput onChangeText={() => {
                    this.refs.toast.show('Text Changed!')
                }}/>
                <FormValidationMessage>Error message</FormValidationMessage>
                <Toast ref={'toast'}/>
            </View>
        )
    }
}