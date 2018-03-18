import React, { Component } from 'react';
import { View } from 'react-native'

import { Icon } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

export default class IconScreen extends Component {
    render() {
        return (
            <View>
                <Icon
                    name='rowing' />

                <Icon
                    name='g-translate'
                    color='#00aced' />

                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'/>

                <Icon
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='#517fa4'/>

                <Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => this.refs.toast.show('Hello')} />

                <Toast ref={'toast'}/>
            </View>
        )
    }
}