import React, { Component } from 'react';
import { View } from 'react-native'

import { PricingCard } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

export default class PricingScreen extends Component {
    render() {
        return (
            <View>
                <PricingCard
                    color='#4f9deb'
                    title='Free'
                    price='$0'
                    info={['1 User', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                    onButtonPress={() => {
                        this.refs.toast.show('free')
                    }}/>

                <PricingCard
                    color='#a72ce9'
                    title='Starter'
                    price='$19'
                    info={['10 User', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                    onButtonPress={() => {
                        this.refs.toast.show('starter')
                    }}/>

                <Toast ref={'toast'}/>
            </View>
        )
    }
}