import React, { Component } from 'react';
import { View } from 'react-native'

import { Divider } from 'react-native-elements'

export default class DividerScreen extends Component {
    render() {
        return (
            <View>
                <Divider style={{ backgroundColor: 'blue', marginTop: 20}} />
            </View>
        )
    }
}